# ValtheraLabs website

- Purpose: ValtheraLabs company website.
- Production domain: `https://valtheralabs.io`.
- Stack: Next.js static export, React, TypeScript, Tailwind CSS, Three.js, Framer Motion.
- Package manager: npm; use the committed `package-lock.json`.
- Setup: `npm ci`.
- Development: `npm run dev`.
- Lint: `npm run lint`.
- Type-check: `npm run typecheck`.
- Test: `npm test`.
- Build: `npm run build`; output is `out/`.
- Deployment: Cloudflare Pages through native Git integration. No Worker is required.

Preserve the cinematic design and static-export compatibility. Do not add unverifiable claims, fake metrics, placeholder links, secrets, deployment credentials, server-only dependencies, or automatic DNS changes. Treat `app/layout.tsx`, `data/systems.ts`, `public/_headers`, domain metadata, and brand assets as production-sensitive. Do not casually change logo geometry, production domains, CSP sources, or cross-site ownership language.
