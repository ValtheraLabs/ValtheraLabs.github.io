# ValtheraLabs

Futuristic, cinematic company site for ValtheraLabs.

## Stack

- Next.js 14 static export
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
npm run build
npx serve out
```

The production build is written to `out/` and contains only static assets.

## Deployment

The repository is configured for GitHub Pages through `.github/workflows/deploy.yml`. A push to `main` builds the static export and deploys `out/`.

The same build can be imported by Vercel, but Vercel is not required unless server-side features are added later.

## Experience and accessibility

- Real-time 3D hero scene on capable devices
- Static fallback for reduced-motion users
- Keyboard focus treatment and skip navigation
- Responsive layouts for mobile, tablet, and desktop
- Truthful representative-system labels instead of unsupported client claims

Smart-contract engineering guidance and implementation are not substitutes for an independent security audit.
