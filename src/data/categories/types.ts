/**
 * Category page model.
 *
 * All 26 category pages ran the same eight sections in the same order with
 * three lines of per-category copy on top. A category page should work as a
 * topical hub: it has to help a buyer choose between the products inside it,
 * which is a different job from any individual product page.
 *
 * Five compositions, assigned by how large the range is and what makes the
 * choice difficult, not rotated.
 */
export type CategoryVariant =
  | 'range-led'       // large catalogue — the job is navigating it
  | 'guidance-led'    // the choice itself is hard and needs explaining
  | 'material-led'    // substrate is the governing decision
  | 'application-led' // the use case decides the format
  | 'compliance-led'  // regulation constrains the choice first

export type CSection =
  | 'intro'
  | 'subgroups'
  | 'chooseTable'
  | 'guidance'
  | 'materials'
  | 'applications'
  | 'mistakes'
  | 'range'
  | 'gallery'
  | 'resources'
  | 'related'

export interface CProse {
  h: string
  body: string[]
}

export interface CCategory {
  slug: string
  variant: CategoryVariant
  sections: CSection[]

  keyword: string
  h1: string
  eyebrow: string
  lede: string
  metaTitle: string
  metaDescription: string

  intro: CProse
  /** How the range genuinely divides. Only where the division is real. */
  subgroups?: { h: string; intro: string; items: { name: string; detail: string; slugs: string[] }[] }
  /** A comparison that helps a buyer choose within the range. */
  chooseTable?: { h: string; intro: string; head: [string, string, string]; rows: [string, string, string][] }
  guidance?: CProse
  materials?: CProse
  applications?: { h: string; intro: string; items: string[] }
  mistakes?: { h: string; intro: string; items: string[] }
  resources: { href: string; anchor: string; note: string }[]
  faqs: { q: string; a: string }[]
  cta: { h: string; body: string }
}

export type CategoryMap = Record<string, CCategory>
