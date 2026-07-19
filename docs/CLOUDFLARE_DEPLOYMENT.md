# Cloudflare Pages deployment

## Project settings

Create a Cloudflare Pages project from the GitHub repository containing this code.

| Setting | Value |
| --- | --- |
| Suggested project name | `valtheralabs` |
| Production branch | `main` |
| Framework preset | Next.js (Static HTML Export) |
| Root directory | `/` |
| Install command | `npm ci` |
| Build command | `npm run build` |
| Output directory | `out` |
| Node.js | `24` via `NODE_VERSION=24` if Cloudflare does not read `.nvmrc` |

Use Cloudflare Pages native Git integration for production and branch previews. Do not add an API token or deployment credential to this repository. A Worker is not needed because all output is static.

Cloudflare project created: `valtheralabs`; account-provided preview hostname: `valtheralabs.pages.dev`. It currently has no Git source or deployment.

## Environment

Set variables separately for Preview and Production. `NEXT_PUBLIC_SITE_URL` must be `https://valtheralabs.io` in Production. Add `NEXT_PUBLIC_CONTACT_EMAIL` only after the mailbox has been verified. Public-prefixed variables are delivered to browsers and must never contain secrets.

## Headers and compatibility

Cloudflare Pages reads `public/_headers` into the export. The CSP permits self-hosted assets and Google Fonts. It intentionally permits inline scripts and styles required by the Next.js static export and the brand specimen. Re-test the site before restricting it.

## Verification

1. Confirm the Pages deployment reports a successful `npm ci` and `npm run build`.
2. Inspect the generated `out/` artifact and Pages preview URL.
3. Verify `/`, `/404.html`, `/robots.txt`, `/sitemap.xml`, `/site.webmanifest`, and `/brand.html`.
4. Verify desktop and mobile navigation, reduced dead links, Three.js rendering, and external ecosystem links.
5. Add custom domains only after preview verification.
