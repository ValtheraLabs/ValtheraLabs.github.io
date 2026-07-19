# Architecture

## Purpose and domain

This repository is the ValtheraLabs company website for `https://valtheralabs.io`. It is not the ValtheraSwap application and must never redirect the entire company domain to the product.

## Runtime

- Next.js static export with React and TypeScript
- Tailwind CSS, Framer Motion, Three.js, React Three Fiber, GSAP, and Lenis
- npm with lockfile enforcement
- Build command: `npm run build`
- Static output: `out/`
- Hosting: Cloudflare Pages
- Worker runtime: not required

The site has no authentication, database, API, wallet, smart-contract, analytics, or form backend. Contact email is optional build-time configuration. The default contact paths are the ValtheraLabs GitHub organization and Dionis Markov's website.

## Ecosystem links

- Founder: `https://dionismarkov.com`
- Company: `https://valtheralabs.io`
- Featured product: `https://valtheraswap.io`

`status.valtheralabs.io` is reserved. It must remain unconnected until a real status service exists.

## Security boundary

The output is static. Third-party network origins are limited to Google Fonts in the main stylesheet and brand specimen. `public/_headers` documents the compatible CSP. Re-inventory all external scripts, fonts, images, analytics, APIs, iframes, and WebSockets before tightening or changing it.
