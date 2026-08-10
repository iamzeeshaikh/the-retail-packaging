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

/** Minimum order quantity. The business runs a flat 100-unit minimum. */
const MIN_QTY: Record<FormFactorId, number> = {
  'folding-carton': 100,
  'rigid-box': 100,
  'corrugated-box': 100,
  mailer: 100,
  'poly-mailer': 100,
  'bubble-mailer': 100,
  'paper-bag': 100,
  'tote-bag': 100,
  pouch: 100,
  'paper-cup': 100,
  tray: 100,
  sleeve: 100,
  label: 100,
  sticker: 100,
  insert: 100,
  display: 100,
  tube: 100,
  band: 100,
  wrap: 100,
}

/** Production window in business days, before transit. Flat 3-5 days. */
const LEAD: Record<FormFactorId, [number, number]> = {
  'folding-carton': [3, 5],
  'rigid-box': [3, 5],
  'corrugated-box': [3, 5],
  mailer: [3, 5],
  'poly-mailer': [3, 5],
  'bubble-mailer': [3, 5],
  'paper-bag': [3, 5],
  'tote-bag': [3, 5],
  pouch: [3, 5],
  'paper-cup': [3, 5],
  tray: [3, 5],
  sleeve: [3, 5],
  label: [3, 5],
  sticker: [3, 5],
  insert: [3, 5],
  display: [3, 5],
  tube: [3, 5],
  band: [3, 5],
  wrap: [3, 5],
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
  const ladder = [100, 250, 500, 1000, 2500, 5000, 10000, 25000]
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
