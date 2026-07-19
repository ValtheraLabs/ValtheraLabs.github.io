# Release checklist

- [ ] Review `git status` and `git diff`; preserve unrelated changes.
- [ ] Confirm no `.env*`, token, key, credential, private wallet material, or fabricated claim is tracked.
- [ ] Run `npm ci`.
- [ ] Run `npm run lint`.
- [ ] Run `npm run typecheck`.
- [ ] Run `npm test`.
- [ ] Run `npm audit --audit-level=high`.
- [ ] Run `npm run build` and inspect `out/`.
- [ ] Verify desktop and mobile `/`, custom 404, navigation, keyboard focus, Three.js scene, and external links.
- [ ] Verify canonical, Open Graph, Twitter, JSON-LD, favicon, manifest, robots, and sitemap output.
- [ ] Verify Cloudflare preview before attaching production domains.
- [ ] Set Production variables without secrets.
- [ ] Attach `valtheralabs.io`; verify HTTPS and security headers.
- [ ] Add and test the `www` permanent redirect.
- [ ] Leave `status.valtheralabs.io` reserved until a real service exists.
- [ ] Obtain explicit approval before pushing or changing Cloudflare/DNS state.
