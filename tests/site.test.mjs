import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8')

test('navigation and calls to action target real content', async () => {
  const hero = await read('components/sections/Hero.tsx')
  const contact = await read('components/sections/Contact.tsx')
  assert.doesNotMatch(hero, /cursor-default/)
  assert.doesNotMatch(`${hero}\n${contact}`, /href=["']#["']/)
  for (const target of ['#work', '#capabilities', '#process', '#contact']) {
    assert.match(hero, new RegExp(target))
  }
})

test('hero mounts cinematic scene and keeps one semantic heading', async () => {
  const hero = await read('components/sections/Hero.tsx')
  assert.match(hero, /HeroScene/)
  assert.equal((hero.match(/<h1/g) ?? []).length, 1)
})

test('page provides accessible bypass and no forced loader', async () => {
  const page = await read('app/page.tsx')
  assert.match(page, /skip-link/)
  assert.match(page, /id=["']main-content["']/)
  assert.doesNotMatch(page, /<Loader/)
})

test('content avoids unsupported assurance claims', async () => {
  const data = await read('data/systems.ts')
  assert.doesNotMatch(data, /enterprise clients|24\/7|formal verification|penetration testing|sub-100ms|smart contract audits/i)
})

test('global styles support keyboard and reduced-motion users', async () => {
  const css = await read('app/globals.css')
  assert.match(css, /:focus-visible/)
  assert.match(css, /prefers-reduced-motion/)
})
