# Domains and DNS

Use Cloudflare DNS and automatic HTTPS. Keep SSL/TLS encryption mode at **Full (strict)**. Do not create a record for a reserved hostname until its real service exists.

| Hostname | Status | Destination | DNS / target | Proxy | Redirect |
| --- | --- | --- | --- | --- | --- |
| `valtheralabs.io` | Active at launch | Cloudflare Pages project `valtheralabs` | Add as a Pages custom domain. Cloudflare supplied project target: `valtheralabs.pages.dev`; let Pages create/validate the flattened apex binding. | Enabled | None |
| `www.valtheralabs.io` | Redirect-only | Apex domain | Proxied CNAME `www` to `valtheralabs.io` after Cloudflare validates the zone. | Enabled | Permanent 301 to `https://valtheralabs.io${uri}` |
| `status.valtheralabs.io` | Reserved | No service | No record yet. Use the target supplied by the future status provider. | Provider-dependent | None yet |

## Redirect rule

In **Rules → Redirect Rules**, create a static or dynamic redirect matching hostname `www.valtheralabs.io`. Destination expression: `concat("https://valtheralabs.io", http.request.uri.path)` and preserve the query string. Status code: `301`. Do not use a repository redirect that depends on an unverified account target.

## Verification

- `dig valtheralabs.io` and `dig www.valtheralabs.io` show Cloudflare-proxied answers after activation.
- `curl -I https://valtheralabs.io` returns `200` and the security headers.
- `curl -I https://www.valtheralabs.io/example?x=1` returns `301` to the same path and query on the apex.
- Browser certificate covers the active hostname and no redirect loop occurs.
- `status.valtheralabs.io` remains NXDOMAIN until connected to a real service.
