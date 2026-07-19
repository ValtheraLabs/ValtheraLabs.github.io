# ValtheraLabs

Production company website for **https://valtheralabs.io**.

## Stack

- Next.js 15 static export
- React 18 and TypeScript
- React Three Fiber / Three.js hero scene
- Framer Motion with reduced-motion fallback
- Tailwind CSS plus a custom responsive design system

## Local development

```bash
npm ci
npm run dev
```

## Verification

```bash
npm test
npm run lint
npm run typecheck
npm run build
npx serve out
```

The production build is written to `out/` and contains only static assets.

## Deployment

Cloudflare Pages builds `out/` from GitHub. See `docs/CLOUDFLARE_DEPLOYMENT.md` and `docs/DOMAINS_AND_DNS.md`. GitHub Actions validates pull requests but does not store deployment credentials.

## Experience and accessibility

- Real-time 3D hero scene on capable devices
- Static fallback for reduced-motion users
- Keyboard focus treatment and skip navigation
- Responsive layouts for mobile, tablet, and desktop
- Truthful representative-system labels instead of unsupported client claims

Smart-contract engineering guidance and implementation are not substitutes for an independent security audit.
