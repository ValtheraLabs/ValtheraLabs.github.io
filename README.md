# ValtheraLabs

**Engineering Intelligent Digital Systems**

**https://valtheralabs.io**

ValtheraLabs company website — cinematic 3D technology showcase built with Next.js, Three.js, GSAP, and Framer Motion.

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| Framework | Next.js 15, React 18, TypeScript |
| Styling | Tailwind CSS, Glassmorphism design system |
| 3D Graphics | Three.js, React Three Fiber, Drei |
| Animations | GSAP, ScrollTrigger, Framer Motion |
| Scroll | Lenis smooth scroll |
| Font | Inter |

## Sections

1. **Loader** — Cinematic Three.js loading animation with rotating octahedron and particles
2. **Hero** — Full-viewport interactive 3D scene with emblem, orbiting particles, neural network lines, and cinematic camera
3. **What We Build** — 14 capability cards (AI, Web, Blockchain, Infrastructure)
4. **Featured Systems** — 6 premium showcases with alternating layouts
5. **Technology Stack** — 25+ technologies across 5 categories
6. **Process** — 7-step development methodology timeline
7. **Why ValtheraLabs** — 7 brand pillar glassmorphism cards
8. **Contact** — CTA section with footer

## Getting Started

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Static export output in `out/`.

## Project Structure

```
├── app/
│   ├── globals.css         # Global styles + Tailwind
│   ├── layout.tsx          # Root layout + SEO metadata
│   └── page.tsx            # Main page (Lenis + section imports)
├── components/
│   ├── sections/           # Page sections
│   │   ├── Contact.tsx
│   │   ├── FeaturedSystems.tsx
│   │   ├── Hero.tsx
│   │   ├── Loader.tsx
│   │   ├── Process.tsx
│   │   ├── TechStack.tsx
│   │   ├── WhatWeBuild.tsx
│   │   └── WhyValthera.tsx
│   ├── three/              # Three.js 3D components
│   │   ├── Emblem.tsx
│   │   ├── HeroScene.tsx
│   │   ├── LoaderScene.tsx
│   │   └── Particles.tsx
│   └── ui/                 # Reusable UI components
│       ├── Button.tsx
│       └── GlassCard.tsx
├── data/
│   └── systems.ts          # All content data
├── public/
│   ├── .nojekyll
│   ├── robots.txt
│   └── sitemap.xml
├── .github/workflows/
│   └── deploy.yml          # GitHub Pages deploy workflow
└── next.config.js
```

## Validation and deployment

Pull requests run linting, type checking, regression tests, dependency audit, and the static production build. Production is deployed from GitHub through Cloudflare Pages native Git integration. See `docs/CLOUDFLARE_DEPLOYMENT.md` and `docs/DOMAINS_AND_DNS.md`.

## License

MIT
