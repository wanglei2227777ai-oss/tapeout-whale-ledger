'use strict';
/*
 * TapeOut Whale Ledger — Vercel serverless proxy (single-project deployment:
 * static frontend at the project root, this function under /api).
 *
 * Why this exists: the Firsto TapeOut APIs only allow CORS requests from
 * their own domain, so the public frontend calls this same-origin proxy:
 *   GET /api/health          liveness + case cache status
 *   GET /api/cases           the six anonymized case verdicts (bundled cases.json)
 *   GET /api/bsc/v1/...      forwards to https://api-tapeout.firsto.ai/v1/...
 *   GET /api/xl/v1/...       forwards to https://xlayer-api-tapeout.firsto.ai/v1/...
 *
 * Read-only by construction: only GET is forwarded, no request bodies,
 * no signing, no keys. Rate limiting is best-effort per client IP per
 * warm instance; the limit is sized so the frontend's own paginated
 * lookups (up to ~180 small requests per full address scan) never trip it,
 * while bulk scraping from one IP still gets throttled.
 */

const casesData = require('../cases.json');

const UPSTREAMS = {
  bsc: (process.env.FIRSTO_BSC_API || 'https://api-tapeout.firsto.ai').replace(/\/$/, ''),
  xl: (process.env.FIRSTO_XLAYER_API || 'https://xlayer-api-tapeout.firsto.ai').replace(/\/$/, ''),
};
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || '';
const RATE_LIMIT_PER_MIN = parseInt(process.env.RATE_LIMIT_PER_MIN || '300', 10);
const RATE_WINDOW_MS = 60_000;
const UPSTREAM_TIMEOUT_MS = parseInt(process.env.UPSTREAM_TIMEOUT_MS || '8000', 10);

const rateBuckets = new Map(); // ip -> { windowStart, count }

function rateLimited(ip) {
  const now = Date.now();
  let bucket = rateBuckets.get(ip);
  if (!bucket || now - bucket.windowStart >= RATE_WINDOW_MS) {
    bucket = { windowStart: now, count: 0 };
    rateBuckets.set(ip, bucket);
  }
  bucket.count += 1;
  if (rateBuckets.size > 5000) {
    for (const [k, b] of rateBuckets) {
      if (now - b.windowStart >= RATE_WINDOW_MS) rateBuckets.delete(k);
    }
  }
  return bucket.count > RATE_LIMIT_PER_MIN;
}

function clientIp(req) {
  const fwd = req.headers['x-forwarded-for'];
  if (typeof fwd === 'string' && fwd.length) return fwd.split(',')[0].trim();
  return (req.socket && req.socket.remoteAddress) || 'unknown';
}

function sendJson(res, status, obj) {
  const body = JSON.stringify(obj);
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(body);
}

module.exports = async function handler(req, res) {
  // Optional cross-origin allowance (only needed for split deployments;
  // the default single-project deployment is same-origin and needs none).
  const origin = req.headers.origin;
  if (ALLOWED_ORIGIN && origin === ALLOWED_ORIGIN) {
    res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
    res.setHeader('Vary', 'Origin');
    if (req.method === 'OPTIONS') {
      res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
      res.setHeader('Access-Control-Max-Age', '86400');
      res.writeHead(204);
      res.end();
      return;
    }
  }

  const rawUrl = req.url || '/';
  const qIdx = rawUrl.indexOf('?');
  const pathname = qIdx >= 0 ? rawUrl.slice(0, qIdx) : rawUrl;
  const search = qIdx >= 0 ? rawUrl.slice(qIdx) : '';

  if (pathname === '/api/health') {
    sendJson(res, 200, {
      ok: true,
      cases_loaded: Array.isArray(casesData.cases),
      cases_count: Array.isArray(casesData.cases) ? casesData.cases.length : 0,
      rate_limit_per_min: RATE_LIMIT_PER_MIN,
      ts: new Date().toISOString(),
    });
    return;
  }

  if (pathname === '/api/cases') {
    res.writeHead(200, {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=300',
    });
    res.end(JSON.stringify(casesData));
    return;
  }

  const m = pathname.match(/^\/api\/(bsc|xl)(\/.*)?$/);
  if (m) {
    if (req.method !== 'GET') {
      sendJson(res, 405, { error: 'method_not_allowed' });
      return;
    }
    if (rateLimited(clientIp(req))) {
      sendJson(res, 429, { error: 'rate_limited', limit_per_min: RATE_LIMIT_PER_MIN });
      return;
    }
    const url = `${UPSTREAMS[m[1]]}${m[2] || '/'}${search}`;
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), UPSTREAM_TIMEOUT_MS);
    try {
      const upstream = await fetch(url, {
        method: 'GET',
        headers: { Accept: 'application/json', 'User-Agent': 'tapeout-whale-ledger-proxy/1.0' },
        signal: ctrl.signal,
      });
      const buf = Buffer.from(await upstream.arrayBuffer());
      // Order-book pages are shared by every visitor's simulator snapshot:
      // let the CDN cache them briefly with stale-while-revalidate, so a
      // burst of simultaneous visitors coalesces into a trickle of upstream
      // requests instead of 60 pages per visitor.
      const isCircuits = (m[2] || '').startsWith('/v1/circuits');
      res.writeHead(upstream.status, {
        'Content-Type': upstream.headers.get('content-type') || 'application/json; charset=utf-8',
        'Cache-Control': isCircuits
          ? 'public, max-age=120, stale-while-revalidate=600'
          : 'public, max-age=30',
      });
      res.end(buf);
    } catch (err) {
      sendJson(res, 502, { error: 'upstream_unavailable', detail: String((err && err.message) || err) });
    } finally {
      clearTimeout(timer);
    }
    return;
  }

  sendJson(res, 404, { error: 'not_found' });
};
