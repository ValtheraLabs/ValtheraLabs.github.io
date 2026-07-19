import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()
const read = (path) => readFileSync(join(root, path), 'utf8')
const sourceFiles = [
  'app/layout.tsx',
  'components/sections/Hero.tsx',
  'components/sections/Contact.tsx',
  'components/sections/FeaturedSystems.tsx',
  'data/systems.ts',
  'public/brand.html',
  'public/robots.txt',
  'public/sitemap.xml',
]
const source = sourceFiles.map(read).join('\n')

for (const domain of [
  'https://valtheralabs.io',
  'https://dionismarkov.com',
  'https://valtheraswap.io',
]) {
  assert.match(source, new RegExp(domain.replaceAll('.', '\\.'), 'i'), `missing ${domain}`)
}

for (const obsolete of [
  /valtheralabs\.github\.io/i,
  /href=["']#["']/i,
  /deployed for enterprise clients/i,
  /formal verification/i,
  /24\/7 infrastructure monitoring/i,
  /OWASP compliance/i,
  /Sub-100ms response times/i,
  /dedicated development team/i,
  /ValteraLabs|ValteraSwap|ValthraSwap/i,
  /123 Innovation Drive/i,
  />98\.6%</i,
  />99\.9%</i,
]) {
  assert.doesNotMatch(source, obsolete, `obsolete or unverified content: ${obsolete}`)
}

assert.ok(existsSync(join(root, 'app/not-found.tsx')), 'missing custom 404 page')
assert.ok(existsSync(join(root, 'public/_headers')), 'missing Cloudflare response headers')

console.log('Site regression checks passed.')
