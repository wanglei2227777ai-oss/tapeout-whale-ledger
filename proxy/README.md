# Whale Ledger proxy

Zero-dependency Node (≥ 18) skeleton for the public deployment. It exists for one reason: the Firsto TapeOut APIs only accept CORS requests from their own domain, so the public frontend needs a same-origin backend to forward calls.

## What it does

- `GET /health` — liveness + cache status.
- `GET /api/cases` — the five anonymized case verdicts, served from a preheated in-memory copy of `../cases.json` (re-read hourly). Exempt from rate limiting; demo clicks on the cases cost zero upstream quota.
- `GET /api/bsc/*` → forwards to the Firsto BSC API; `GET /api/xl/*` → forwards to the Firsto X Layer API. GET only, per-IP rate limited.
- CORS is opened to exactly one origin (`ALLOWED_ORIGIN`). There is no wildcard mode.

## Run

```bash
cp .env.example .env   # fill in ALLOWED_ORIGIN at minimum
node server.js         # or: npm start
```

## Environment variables (see `.env.example` for the full list)

| Variable | Required | Meaning |
|---|---|---|
| `ALLOWED_ORIGIN` | **yes** | Exact frontend origin allowed by CORS, e.g. `https://ledger.example.com` |
| `PORT` | no | Listen port (default 8787; most platforms inject their own) |
| `FIRSTO_BSC_API` / `FIRSTO_XLAYER_API` | no | Upstream bases (defaults are production) |
| `RATE_LIMIT_PER_MIN` | no | Upstream queries per IP per minute (default 10) |
| `CASES_FILE` | no | Path to the anonymized cases file (default `../cases.json`) |
| `CASES_REFRESH_MS` | no | Case-cache refresh interval (default 1 h) |
| `TRUST_PROXY` | no | Set `1` behind a platform proxy so rate limiting keys on `X-Forwarded-For` |

## Deployment notes

- Keep `.env` out of git (`.gitignore` covers it) — it is the only file with deployment-specific values; the proxy itself needs no API keys.
- When the lifetime-claims precompute table is integrated later, swap the file in by writing a temp file and atomically renaming it over the old one; never overwrite a file that may be mid-read.
- The five case verdicts are static research results (full-history verified), not live queries — refreshing them means re-running the research pipeline, not this proxy.
