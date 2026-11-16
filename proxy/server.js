'use strict';
/*
 * TapeOut Whale Ledger — public deployment proxy skeleton.
 *
 * Why this exists: the Firsto TapeOut APIs only allow CORS requests from
 * their own domain, so a public frontend cannot call them directly. This
 * thin, zero-dependency Node proxy forwards the two Firsto API bases,
 * rate-limits per client IP, and serves the five anonymized case verdicts
 * from a preheated local cache (cases.json) so demo traffic on the cases
 * never consumes upstream quota.
 *
 * Read-only by construction: only GET is forwarded, no request bodies,
 * no signing, no keys.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

// ---------------------------------------------------------------- config
const PORT = parseInt(process.env.PORT || '8787', 10);
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || ''; // e.g. https://your-frontend.example
const UPSTREAMS = {
  bsc: (process.env.FIRSTO_BSC_API || 'https://api-tapeout.firsto.ai').replace(/\/$/, ''),
  xl: (process.env.FIRSTO_XLAYER_API || 'https://xlayer-api-tapeout.firsto.ai').replace(/\/$/, ''),
};
const RATE_LIMIT_PER_MIN = parseInt(process.env.RATE_LIMIT_PER_MIN || '10', 10);
const RATE_WINDOW_MS = 60_000;
const CASES_FILE = process.env.CASES_FILE || path.join(__dirname, '..', 'cases.json');
const CASES_REFRESH_MS = parseInt(process.env.CASES_REFRESH_MS || '3600000', 10); // 1h
const UPSTREAM_TIMEOUT_MS = parseInt(process.env.UPSTREAM_TIMEOUT_MS || '15000', 10);
const TRUST_PROXY = process.env.TRUST_PROXY === '1';

// ------------------------------------------------------- case pre-cache
let casesCache = null;
let casesLoadedAt = null;

function loadCases() {
  try {
    const raw = fs.readFileSync(CASES_FILE, 'utf8');
    casesCache = JSON.parse(raw);
    casesLoadedAt = new Date().toISOString();
    console.log(`[cases] loaded ${casesCache.cases?.length ?? 0} cases from ${CASES_FILE}`);
  } catch (err) {
    console.error(`[cases] failed to load ${CASES_FILE}: ${err.message} (keeping previous cache)`);
  }
}
loadCases();
setInterval(loadCases, CASES_REFRESH_MS).unref();

// ------------------------------------------------------------ rate limit
// Fixed window per IP. Only upstream (Firsto) queries count; /health and
// /api/cases are exempt — that is the point of the preheated case cache.
const rateBuckets = new Map(); // ip -> { windowStart, count }

function rateLimited(ip) {
  const now = Date.now();
  let bucket = rateBuckets.get(ip);
  if (!bucket || now - bucket.windowStart >= RATE_WINDOW_MS) {
    bucket = { windowStart: now, count: 0 };
    rateBuckets.set(ip, bucket);
  }
  bucket.count += 1;
  return bucket.count > RATE_LIMIT_PER_MIN;
}
// Periodic cleanup so the map cannot grow unboundedly.
setInterval(() => {
  const now = Date.now();
  for (const [ip, b] of rateBuckets) {
    if (now - b.windowStart >= RATE_WINDOW_MS) rateBuckets.delete(ip);
  }
}, RATE_WINDOW_MS).unref();

function clientIp(req) {
  if (TRUST_PROXY) {
    const fwd = req.headers['x-forwarded-for'];
    if (typeof fwd === 'string' && fwd.length) return fwd.split(',')[0].trim();
  }
  return req.socket.remoteAddress || 'unknown';
}

// ---------------------------------------------------------------- helpers
function applyCors(req, res) {
  const origin = req.headers.origin;
  if (ALLOWED_ORIGIN && origin === ALLOWED_ORIGIN) {
    res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
    res.setHeader('Vary', 'Origin');
    return true;
  }
  return false;
}

function sendJson(res, status, obj) {
  const body = JSON.stringify(obj);
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(body);
}

async function proxyTo(res, upstreamBase, restPath, search) {
  const url = `${upstreamBase}${restPath}${search || ''}`;
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), UPSTREAM_TIMEOUT_MS);
  try {
    const upstream = await fetch(url, {
      method: 'GET',
      headers: { Accept: 'application/json', 'User-Agent': 'tapeout-whale-ledger-proxy/1.0' },
      signal: ctrl.signal,
    });
    const buf = Buffer.from(await upstream.arrayBuffer());
    res.writeHead(upstream.status, {
      'Content-Type': upstream.headers.get('content-type') || 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=30',
    });
    res.end(buf);
  } catch (err) {
    sendJson(res, 502, { error: 'upstream_unavailable', detail: String(err.message || err) });
  } finally {
    clearTimeout(timer);
  }
}

// ---------------------------------------------------------------- server
const server = http.createServer(async (req, res) => {
  const corsOk = applyCors(req, res);

  if (req.method === 'OPTIONS') {
    if (corsOk) {
      res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
      res.setHeader('Access-Control-Max-Age', '86400');
    }
    res.writeHead(204);
    res.end();
    return;
  }

  const u = new URL(req.url, 'http://localhost');
  const pathname = u.pathname;

  if (pathname === '/health') {
    sendJson(res, 200, {
      ok: true,
      uptime_s: Math.round(process.uptime()),
      cases_loaded: casesCache !== null,
      cases_refreshed_at: casesLoadedAt,
      rate_limit_per_min: RATE_LIMIT_PER_MIN,
    });
    return;
  }

  if (pathname === '/api/cases') {
    if (!casesCache) {
      sendJson(res, 503, { error: 'cases_not_loaded' });
      return;
    }
    res.writeHead(200, {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=300',
    });
    res.end(JSON.stringify(casesCache));
    return;
  }

  const m = pathname.match(/^\/api\/(bsc|xl)(\/.*)?$/);
  if (m) {
    if (req.method !== 'GET') {
      sendJson(res, 405, { error: 'method_not_allowed' });
      return;
    }
    const ip = clientIp(req);
    if (rateLimited(ip)) {
      sendJson(res, 429, { error: 'rate_limited', limit_per_min: RATE_LIMIT_PER_MIN });
      return;
    }
    await proxyTo(res, UPSTREAMS[m[1]], m[2] || '/', u.search);
    return;
  }

  sendJson(res, 404, { error: 'not_found' });
});

server.listen(PORT, () => {
  console.log(`[proxy] listening on :${PORT}`);
  if (!ALLOWED_ORIGIN) {
    console.warn('[proxy] WARNING: ALLOWED_ORIGIN is not set — cross-origin browser calls will be blocked by CORS. Set it to your frontend origin.');
  }
});
