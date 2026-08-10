#!/usr/bin/env node
/**
 * Find classes and custom properties that components use but the design system
 * no longer defines. Renaming tokens silently breaks components otherwise —
 * exactly how the CTA band ended up with white text on a light ground.
 */
import { readFile, readdir } from 'node:fs/promises'
import path from 'node:path'

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
const SRC = path.join(ROOT, 'src')

async function walk(dir) {
  const out = []
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) out.push(...(await walk(p)))
    else if (/\.(astro|css|ts)$/.test(e.name)) out.push(p)
  }
  return out
}

const files = await walk(SRC)
const globalCss = await readFile(path.join(SRC, 'styles/global.css'), 'utf8')

// everything global.css defines
const definedClasses = new Set([...globalCss.matchAll(/\.([a-z][a-z0-9-]*)/g)].map((m) => m[1]))
// vars are often declared several to a line, so scan anywhere, not line-start
const definedVars = new Set([...globalCss.matchAll(/(--[a-z0-9-]+)\s*:/g)].map((m) => m[1]))

const missingClass = new Map()
const missingVar = new Map()

for (const file of files) {
  if (file.endsWith('global.css')) continue
  const src = await readFile(file, 'utf8')
  const rel = path.relative(ROOT, file)

  // classes defined locally in this file's own <style> block are fine
  // only the component's own <style> block counts as a local definition
  const styleBlock = (src.match(/<style[\s\S]*?<\/style>/g) || []).join('\n')
  const localClasses = new Set([...styleBlock.matchAll(/\.([a-z][a-z0-9-]*)/g)].map((m) => m[1]))

  for (const m of src.matchAll(/class=["']([^"']+)["']/g)) {
    for (const c of m[1].split(/\s+/)) {
      const name = c.replace(/[{}$`]/g, '').trim()
      if (!name || !/^[a-z][a-z0-9-]*$/.test(name)) continue
      if (definedClasses.has(name) || localClasses.has(name)) continue
      if (!missingClass.has(name)) missingClass.set(name, new Set())
      missingClass.get(name).add(rel)
    }
  }

  for (const m of src.matchAll(/var\((--[a-z0-9-]+)/g)) {
    const v = m[1]
    if (definedVars.has(v)) continue
    if (src.includes(`${v}:`)) continue // defined inline on this component
    if (!missingVar.has(v)) missingVar.set(v, new Set())
    missingVar.get(v).add(rel)
  }
}

const report = { missingClasses: {}, missingVars: {} }
for (const [k, v] of missingClass) report.missingClasses[k] = [...v]
for (const [k, v] of missingVar) report.missingVars[k] = [...v]

console.log(`scanned ${files.length} files`)
console.log(`\nUNDEFINED CLASSES (${missingClass.size})`)
for (const [k, v] of [...missingClass].sort()) console.log(`  .${k.padEnd(24)} ${[...v].join(', ')}`)
console.log(`\nUNDEFINED CSS VARS (${missingVar.size})`)
for (const [k, v] of [...missingVar].sort()) console.log(`  ${k.padEnd(24)} ${[...v].join(', ')}`)

process.exit(missingClass.size + missingVar.size > 0 ? 1 : 0)
