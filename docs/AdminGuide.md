# Admin Guide
## Env Vars
- `OPENAI_API_KEY`: enables LLM personas.
- `CSRF_SECRET`: CSRF token HMAC secret.
- `NEXT_PUBLIC_LOGGING=on`: enable console metrics.

## Security
- Middleware sets CSP, XFO, XCTO, Permissions-Policy.
- Rate limit default 60 req/min/IP (dev demo).
- Optional CSRF header check on POST.

## Deploy
- Vercel: include `vercel.json` from repo root.
- Docker: use provided `Dockerfile`.
