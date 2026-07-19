# Environment variables

| Variable | Exposure | Required | Production value |
| --- | --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Browser-visible | Yes in Cloudflare | `https://valtheralabs.io` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Browser-visible | No | Verified public mailbox only |
| `NODE_VERSION` | Build system | Recommended | `24` |

Copy `.env.example` to an ignored local file when needed. Never overwrite an existing `.env*` file. Never put secrets in a `NEXT_PUBLIC_` variable. The current site has no server-only secret variables.
