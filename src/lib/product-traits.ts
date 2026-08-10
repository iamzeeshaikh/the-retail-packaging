import type { Product } from './catalog'

/**
 * Product traits.
 *
 * A product's form factor tells us how it is made; it does not tell us what
 * kind of problem it solves. "Window Boxes" and "Christmas Boxes" are both
 * folding cartons, and writing them from the form alone is exactly why 124
 * carton pages shared the same paragraphs.
 *
 * Traits are read from the product name against its category, and they drive
 * layout choice, which sections a page carries, what those sections say, and
 * which FAQs are asked. Two cartons with different traits therefore produce
 * genuinely different pages rather than the same page renamed.
 */
export type Trait =
  | 'window' | 'handle' | 'seasonal' | 'luxury' | 'eco' | 'poly'
  | 'protective' | 'foodContact' | 'cold' | 'display' | 'shipping'
  | 'cosmetic' | 'regulated' | 'small' | 'large' | 'tamper'
  | 'apparel' | 'electronics' | 'subscription' | 'branded' | 'gifting'
  | 'barrier' | 'stackable'

const RULES: [Trait, RegExp][] = [
  ['window', /\bwindow|clear|see[- ]through|transparent|pvc\b/i],
  ['handle', /\bhandle|tote|carry|rope\b/i],
  ['seasonal', /christmas|halloween|valentine|easter|holiday|thanksgiving|birthday|wedding|anniversary/i],
  ['luxury', /luxur|premium|rigid|magnetic|velvet|deluxe|elegant|bespoke/i],
  ['eco', /\beco|kraft|recycl|compost|biodegrad|sustainab|green\b/i],
  ['poly', /\bpoly|vinyl|plastic|mylar|film\b/i],
  ['protective', /bubble|padded|insert|foam|corrugat|protect|cushion/i],
  ['foodContact', /food|bakery|burger|pizza|cake|candy|chocolate|coffee|sandwich|snack|takeout|take[- ]out|lunch|\bfry|fries|donut|cookie|pastry|meal|deli|sushi|noodle|popcorn|ice cream|juice|tea\b/i],
  ['cold', /frozen|\bcold\b|\bice\b|chilled|freezer/i],
  ['display', /display|counter|\bpdq\b|shelf|stand\b/i],
  ['shipping', /mailer|shipping|courier|postal|e[- ]?commerce/i],
  ['cosmetic', /cosmetic|serum|lipstick|soap|candle|perfume|fragrance|lotion|cream|beauty|skincare|makeup|mascara|nail|hair/i],
  ['regulated', /\bcbd\b|medicine|pharma|pill|vial|supplement|tablet|capsule|medical|dispensary|nutraceutical/i],
  ['small', /\bmini\b|\bsmall\b|sample|travel|sachet|pocket/i],
  ['large', /\blarge\b|jumbo|\bbig\b|bulk|oversize/i],
  ['tamper', /tamper|security|sealed|\bseal\b/i],
  ['apparel', /shirt|apparel|garment|sock|hoodie|clothing|\btee\b|jersey|underwear/i],
  ['electronics', /phone|charger|earbud|headphone|speaker|watch|electronic|cable|device|bulb|smart/i],
  ['subscription', /subscription|monthly|\bpr box|influencer|press\b/i],
  ['branded', /branded|printed|logo|custom printed|monogram/i],
  ['gifting', /gift|present|hamper|favour|favor/i],
  ['barrier', /barrier|foil|laminat|resealable|zip|valve|moisture|grease/i],
  ['stackable', /stack|nest|tray|container|crate/i],
]

/** Traits carried by the form factor itself, independent of the name. */
const FORM_TRAITS: Record<string, Trait[]> = {
  'rigid-box': ['luxury', 'gifting'],
  'corrugated-box': ['protective', 'shipping', 'stackable'],
  mailer: ['shipping', 'protective'],
  'poly-mailer': ['shipping', 'poly'],
  'bubble-mailer': ['shipping', 'protective'],
  'paper-bag': ['handle'],
  'tote-bag': ['handle', 'branded'],
  pouch: ['barrier'],
  'paper-cup': ['foodContact'],
  tray: ['foodContact', 'stackable'],
  insert: ['protective'],
  display: ['display'],
  label: ['branded'],
  sticker: ['branded'],
  sleeve: ['branded'],
  band: ['branded'],
  tube: ['protective'],
}

/** Categories that imply a trait regardless of the product name. */
const CATEGORY_TRAITS: Record<string, Trait[]> = {
  'custom-food-packaging': ['foodContact'],
  'custom-food-trays': ['foodContact', 'stackable'],
  'custom-printed-cups': ['foodContact'],
  'custom-cosmetic-packaging': ['cosmetic'],
  'custom-candle-packaging': ['cosmetic', 'gifting'],
  'custom-home-fragrance-packaging': ['cosmetic'],
  'custom-cbd-packaging': ['regulated'],
  'pharmaceutical-packaging': ['regulated', 'tamper'],
  'wellness-packaging': ['regulated'],
  'custom-mailers': ['shipping'],
  'custom-display-boxes': ['display'],
  'custom-packaging-inserts': ['protective'],
  'custom-apparel-packaging': ['apparel'],
  'electronics-packaging': ['electronics', 'protective'],
  'sustainable-packaging': ['eco'],
  'custom-gift-boxes': ['gifting'],
  'custom-jewellery-boxes': ['luxury', 'gifting'],
  'custom-pouches': ['barrier'],
  'promotional-packaging': ['branded', 'subscription'],
  'custom-beverage-packaging': ['foodContact'],
}

export function traitsOf(p: Product): Set<Trait> {
  const name = p.name
  const out = new Set<Trait>()
  for (const [t, re] of RULES) if (re.test(name)) out.add(t)
  for (const t of FORM_TRAITS[p.form.id] ?? []) out.add(t)
  for (const t of CATEGORY_TRAITS[p.categorySlug] ?? []) out.add(t)
  // A poly format is never food-contact paperboard; drop the weaker signal.
  if (out.has('poly') && out.has('eco')) out.delete('eco')
  return out
}

/**
 * The eight product layouts. Chosen by what the product actually is, in
 * priority order — the first genuine match wins, so the choice is explainable
 * rather than rotated by row number.
 */
export type LayoutId =
  | 'gallery-first'
  | 'specification-first'
  | 'use-case-first'
  | 'material-first'
  | 'structure-first'
  | 'branding-first'
  | 'protection-first'
  | 'sustainability-first'

export function layoutFor(p: Product, t: Set<Trait>): LayoutId {
  // Regulated goods lead on the specification, because that is what the buyer
  // has to clear internally before anything else matters.
  if (t.has('regulated') || t.has('tamper')) return 'specification-first'
  // An explicit environmental product should lead on the material claim.
  if (t.has('eco') && (p.categorySlug === 'sustainable-packaging' || /eco|recycl|compost/i.test(p.name)))
    return 'sustainability-first'
  // Protection-led formats: the job is getting the contents there intact.
  if (t.has('protective') && (t.has('shipping') || t.has('electronics'))) return 'protection-first'
  // Structural formats where the build is the product.
  if (['rigid-box', 'display', 'insert', 'tray', 'tube'].includes(p.form.id)) return 'structure-first'
  // Anything with real photography to show leads with the gallery.
  if (p.images.length >= 4) return 'gallery-first'
  // Print-led formats exist to carry a brand.
  if (['label', 'sticker', 'sleeve', 'band'].includes(p.form.id) || t.has('cosmetic') || t.has('luxury'))
    return 'branding-first'
  // Food service leads on how the pack is used, not how it is made.
  if (t.has('foodContact')) return 'use-case-first'
  // Kraft and barrier work leads on substrate.
  if (t.has('eco') || t.has('barrier')) return 'material-first'
  return 'gallery-first'
}

/** Sections the product template knows how to render. */
export type PSection =
  | 'overview' | 'useCases' | 'structure' | 'materials' | 'materialTable'
  | 'printing' | 'finishes' | 'inserts' | 'sizing' | 'protection'
  | 'shelf' | 'shipping' | 'storage' | 'sustainability' | 'artwork'
  | 'sampling' | 'ordering' | 'cost' | 'mistakes' | 'compliance'
  | 'specTable' | 'related'

/** Base order per layout. Sections not relevant to a product are removed. */
const BASE: Record<LayoutId, PSection[]> = {
  'gallery-first': ['overview', 'useCases', 'materials', 'printing', 'finishes', 'sizing', 'specTable', 'artwork', 'ordering', 'related'],
  'specification-first': ['specTable', 'overview', 'compliance', 'materials', 'printing', 'artwork', 'sizing', 'ordering', 'mistakes', 'related'],
  'use-case-first': ['useCases', 'overview', 'materials', 'sizing', 'printing', 'storage', 'specTable', 'ordering', 'mistakes', 'related'],
  'material-first': ['materials', 'materialTable', 'overview', 'printing', 'sizing', 'finishes', 'specTable', 'artwork', 'ordering', 'related'],
  'structure-first': ['structure', 'overview', 'inserts', 'materials', 'sizing', 'finishes', 'specTable', 'sampling', 'ordering', 'related'],
  'branding-first': ['overview', 'printing', 'finishes', 'artwork', 'materials', 'sizing', 'specTable', 'cost', 'ordering', 'related'],
  'protection-first': ['protection', 'overview', 'inserts', 'materials', 'sizing', 'shipping', 'specTable', 'cost', 'ordering', 'related'],
  'sustainability-first': ['sustainability', 'overview', 'materials', 'materialTable', 'printing', 'sizing', 'specTable', 'ordering', 'related'],
}

/**
 * The section list for a product: the layout's base order, with sections
 * added or dropped according to traits. Two products on the same layout
 * usually still differ here.
 */
/**
 * Sections a category genuinely needs, beyond what the form and traits imply.
 * A jewellery box page should discuss the interior fit; a cup page should not.
 */
const CATEGORY_SECTIONS: Record<string, [PSection, PSection][]> = {
  // [section to add, section to place it after]
  'custom-food-packaging': [['storage', 'materials'], ['mistakes', 'ordering']],
  'custom-food-trays': [['protection', 'materials'], ['storage', 'sizing']],
  'custom-printed-cups': [['storage', 'materials'], ['cost', 'sizing']],
  'custom-beverage-packaging': [['storage', 'materials'], ['shelf', 'overview']],
  'custom-cosmetic-packaging': [['shelf', 'overview'], ['sampling', 'finishes']],
  'custom-candle-packaging': [['inserts', 'materials'], ['shelf', 'overview']],
  'custom-home-fragrance-packaging': [['inserts', 'materials'], ['finishes', 'materials']],
  'custom-cbd-packaging': [['compliance', 'overview'], ['mistakes', 'ordering']],
  'pharmaceutical-packaging': [['compliance', 'overview'], ['artwork', 'printing']],
  'wellness-packaging': [['compliance', 'overview'], ['shelf', 'sizing']],
  'custom-mailers': [['cost', 'sizing'], ['protection', 'materials']],
  'custom-display-boxes': [['shelf', 'structure'], ['protection', 'materials']],
  'custom-packaging-inserts': [['protection', 'overview'], ['sampling', 'sizing']],
  'custom-gift-boxes': [['finishes', 'materials'], ['sampling', 'sizing']],
  'custom-jewellery-boxes': [['inserts', 'structure'], ['finishes', 'materials']],
  'custom-apparel-packaging': [['shipping', 'sizing'], ['cost', 'sizing']],
  'custom-labels': [['artwork', 'printing'], ['cost', 'printing']],
  'custom-stickers': [['artwork', 'printing'], ['cost', 'printing']],
  'custom-pouches': [['materialTable', 'materials'], ['storage', 'materials']],
  'custom-sleeves': [['printing', 'overview'], ['cost', 'sizing']],
  'custom-bands': [['printing', 'overview'], ['sizing', 'materials']],
  'custom-bags': [['sizing', 'materials'], ['shelf', 'overview']],
  'custom-containers': [['storage', 'materials'], ['stackNote' as PSection, 'materials']],
  'electronics-packaging': [['protection', 'overview'], ['inserts', 'materials']],
  'sustainable-packaging': [['sustainability', 'overview'], ['materialTable', 'materials']],
  'promotional-packaging': [['sampling', 'ordering'], ['cost', 'sizing']],
}

export function sectionsFor(p: Product, t: Set<Trait>, layout: LayoutId): PSection[] {
  const list = [...BASE[layout]]
  const add = (s: PSection, after: PSection) => {
    if (list.includes(s)) return
    const i = list.indexOf(after)
    list.splice(i >= 0 ? i + 1 : list.length - 1, 0, s)
  }
  const drop = (s: PSection) => {
    const i = list.indexOf(s)
    if (i >= 0) list.splice(i, 1)
  }

  if (t.has('foodContact')) add('storage', 'sizing')
  if (t.has('cold')) add('storage', 'materials')
  if (t.has('display') || t.has('window')) add('shelf', 'overview')
  if (t.has('protective') || t.has('electronics')) add('protection', 'materials')
  if (t.has('eco')) add('sustainability', 'materials')
  if (t.has('luxury') || t.has('gifting')) add('finishes', 'materials')
  if (t.has('shipping')) add('shipping', 'sizing')
  if (t.has('regulated')) add('compliance', 'overview')
  if (t.has('barrier')) add('materialTable', 'materials')
  if (p.images.length >= 3) add('sampling', 'ordering')

  // Category-level needs. This is what stops every low-trait product in a
  // different range from rendering the same section list.
  for (const [section, after] of CATEGORY_SECTIONS[p.categorySlug] ?? []) {
    if (section === ('stackNote' as PSection)) continue
    add(section, after)
  }
  // Image-rich products earn a use-case block; sparse ones do not pad with one.
  if (p.images.length >= 5) add('useCases', 'overview')
  if (p.images.length <= 1) drop('sampling')

  // Formats where a section would say nothing useful.
  if (['label', 'sticker'].includes(p.form.id)) { drop('inserts'); drop('protection') }
  if (['poly-mailer', 'bubble-mailer'].includes(p.form.id)) { drop('finishes'); drop('materialTable') }
  if (p.form.id === 'tote-bag') drop('inserts')
  if (!t.has('protective') && !t.has('luxury')) drop('inserts')

  return list
}
