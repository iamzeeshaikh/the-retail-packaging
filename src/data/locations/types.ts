/**
 * Location page model.
 *
 * A location page is not a national page with a place name substituted in.
 * Every field here is written for the specific place: the industries that
 * actually generate packaging demand, the freight reality, the climate effect
 * on board and coatings where there is one, and the buying habits we see.
 *
 * Nothing in this file may claim a local office, warehouse, plant, team,
 * client or delivery time we cannot stand behind. Wording is "serving
 * businesses in" and "shipping to", never "our facility in".
 */

/** Which composition the page renders. Assigned per place, not by index. */
export type StateVariant =
  | 'industry-led'      // sector cards lead, demand table mid-page
  | 'distribution-led'  // freight and warehousing lead
  | 'retail-led'        // shelf and retail-market framing leads
  | 'material-led'      // climate and substrate choice leads
  | 'demand-led'        // format demand mix leads, table high on the page

export type CityVariant =
  | 'sector-spotlight'  // one dominant local sector carries the page
  | 'ecommerce-led'     // fulfilment and shipping economics lead
  | 'hospitality-led'   // food service and venue volume leads
  | 'maker-led'         // small-batch and independent brands lead
  | 'logistics-hub'     // freight position is the story

export type Variant = StateVariant | CityVariant

/** Section keys the location template knows how to render. */
export type SectionKey =
  | 'overview'
  | 'industries'
  | 'demandTable'
  | 'logistics'
  | 'climate'
  | 'retail'
  | 'formats'
  | 'checklist'
  | 'ordering'
  | 'nearby'
  | 'resources'

export interface Prose {
  /** Heading written from the subject matter, never "Packaging for X". */
  h: string
  body: string[]
}

export interface CardList extends Prose {
  items: { name: string; detail: string }[]
}

export interface TableBlock {
  h: string
  intro: string
  head: [string, string, string]
  rows: [string, string, string][]
}

export interface CheckBlock {
  h: string
  intro: string
  items: string[]
}

export interface Faq {
  q: string
  a: string
}

export interface Place {
  slug: string
  name: string
  kind: 'state' | 'city'
  /** Cities only. */
  state?: string
  stateSlug?: string

  variant: Variant
  /** Ordered sections for this page. Two places rarely share an order. */
  sections: SectionKey[]

  /** Primary search phrase this page is written for. */
  keyword: string
  /** Unique H1 — not "Custom packaging for X". */
  h1: string
  eyebrow: string
  /** Hero paragraph, specific to the place. */
  lede: string

  metaTitle: string
  metaDescription: string

  /** Sectors that genuinely generate packaging demand locally. */
  sectors: string[]

  overview: Prose
  industries: CardList
  demandTable?: TableBlock
  logistics: Prose
  climate?: Prose
  retail?: Prose
  checklist?: CheckBlock
  ordering: Prose
  /** Category slugs worth surfacing, with the reason they belong here. */
  formats: { h: string; intro: string; picks: { slug: string; why: string }[] }
  /** Resource links with anchors written for this page. */
  resources: { href: string; anchor: string; note: string }[]
  /** Slugs of other places worth linking, with the reason. */
  nearby: { slug: string; why: string }[]
  faqs: Faq[]
  cta: { h: string; body: string }
}

export const S = (p: Omit<Place, 'kind'>): Place => ({ ...p, kind: 'state' })
export const C = (p: Omit<Place, 'kind'>): Place => ({ ...p, kind: 'city' })
