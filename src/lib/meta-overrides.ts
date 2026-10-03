import overrides from '../data/meta-overrides.json'

/**
 * Hand-written titles and descriptions for pages where the generated ones
 * fell short: descriptions under 110 characters, or pages ranking on page one
 * with no clicks. Keyed by path; anything not listed keeps its generated meta.
 */
const table = overrides as Record<string, { title?: string; description?: string }>

export function withOverride(path: string, meta: { title: string; description: string }) {
  const o = table[path]
  return { title: o?.title ?? meta.title, description: o?.description ?? meta.description }
}
