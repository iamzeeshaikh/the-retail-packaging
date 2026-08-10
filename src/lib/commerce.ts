/**
 * Order-facing facts shown on cards and configurators.
 *
 * Minimum quantities and lead times are derived from each product's form factor
 * — the same figures already quoted in FAQs and specification tables, so nothing
 * contradicts anything else on the site.
 *
 * Per-product unit prices are deliberately NOT generated. The only price the
 * client has published is the $0.30 volume floor, and inventing a per-format
 * rate to fill a card would be a factual claim we cannot stand behind. Cards
 * therefore carry quantity and lead time; price appears once, as the real line.
 */
import type { Product } from './catalog'
import type { FormFactorId } from './taxonomy'

/** Smallest efficient run per form factor, matching the MOQ text in taxonomy.ts. */
const MIN_QTY: Record<FormFactorId, number> = {
  'folding-carton': 250,
  'rigid-box': 100,
  'corrugated-box': 250,
  mailer: 100,
  'poly-mailer': 1000,
  'bubble-mailer': 1000,
  'paper-bag': 500,
  'tote-bag': 100,
  pouch: 500,
  'paper-cup': 1000,
  tray: 1000,
  sleeve: 500,
  label: 250,
  sticker: 50,
  insert: 250,
  display: 250,
  tube: 500,
  band: 500,
  wrap: 1000,
}

/** Production window in business days, before transit. */
const LEAD: Record<FormFactorId, [number, number]> = {
  'folding-carton': [8, 12],
  'rigid-box': [12, 18],
  'corrugated-box': [8, 12],
  mailer: [8, 12],
  'poly-mailer': [10, 14],
  'bubble-mailer': [10, 14],
  'paper-bag': [10, 15],
  'tote-bag': [12, 18],
  pouch: [10, 15],
  'paper-cup': [12, 16],
  tray: [10, 14],
  sleeve: [8, 12],
  label: [6, 10],
  sticker: [5, 9],
  insert: [8, 12],
  display: [10, 15],
  tube: [10, 15],
  band: [8, 12],
  wrap: [10, 14],
}

export const minQty = (p: Product): number => MIN_QTY[p.form.id] ?? 250
export const leadTime = (p: Product): [number, number] => LEAD[p.form.id] ?? [8, 15]

export const fmtQty = (n: number) => (n >= 1000 ? `${n / 1000}k` : String(n))

/** "Min. 250 units · 8–12 days" — the card spec line. */
export function specLine(p: Product): string {
  const [a, b] = leadTime(p)
  return `Min. ${fmtQty(minQty(p))} units · ${a}–${b} days`
}

/**
 * Quantity bands offered in the configurator. These drive a quote request,
 * not a displayed price — the business quotes every project individually.
 */
export function quantityBands(p: Product): number[] {
  const m = minQty(p)
  const ladder = [50, 100, 250, 500, 1000, 2500, 5000, 10000, 25000]
  const bands = ladder.filter((n) => n >= m).slice(0, 6)
  return bands.length ? bands : [m, m * 2, m * 5, m * 10]
}

/** Size presets offered per form factor, taken from the real sizing guidance. */
export function sizePresets(p: Product): string[] {
  switch (p.form.id) {
    case 'mailer':
    case 'corrugated-box':
      return ['6 × 4 × 2', '8 × 6 × 3', '10 × 8 × 4', '12 × 9 × 4', '14 × 10 × 4', '16 × 12 × 4']
    case 'folding-carton':
      return ['2 × 2 × 2', '3 × 3 × 4', '4 × 4 × 6', '6 × 4 × 2', '8 × 6 × 3', '10 × 8 × 4']
    case 'rigid-box':
      return ['4 × 4 × 2', '6 × 6 × 2', '8 × 6 × 3', '10 × 8 × 3', '12 × 9 × 4', '14 × 10 × 4']
    case 'paper-bag':
      return ['5 × 3 × 8', '8 × 4 × 10', '10 × 5 × 13', '12 × 6 × 14', '16 × 6 × 12']
    case 'pouch':
      return ['3.5 × 5', '5 × 7', '6 × 9', '8 × 12', '10 × 14', '12 × 16']
    case 'paper-cup':
      return ['4 oz', '6 oz', '8 oz', '12 oz', '16 oz', '20 oz']
    case 'tray':
      return ['4 × 3 × 1.5', '6 × 4 × 2', '8 × 5 × 2', '9 × 6 × 2', '10 × 7 × 2.5']
    case 'label':
    case 'sticker':
      return ['1 × 1', '2 × 2', '3 × 3', '4 × 4', '2 × 4', 'Custom shape']
    default:
      return ['Small', 'Medium', 'Large', 'Custom size']
  }
}

/** Unit label for the size presets above. */
export function sizeUnit(p: Product): string {
  return p.form.id === 'paper-cup' ? 'capacity' : 'inches (L × W × H)'
}
