import type { ProductFacts, ProductFactsMap } from './types'
import { foodFacts } from './food'
import { mailerFacts } from './mailers'

export type { ProductFacts } from './types'

/**
 * Per-product knowledge, merged from the per-category files.
 *
 * Coverage is deliberately partial while these are being written. A product
 * without a record falls back to form- and trait-level copy, which is correct
 * but shared with its siblings — so `factsCoverage` is the honest measure of
 * how much of the catalogue is genuinely individual.
 */
const ALL: ProductFactsMap = {
  ...foodFacts,
  ...mailerFacts,
}

export const factsFor = (slug: string): ProductFacts | undefined => ALL[slug]
export const factsCoverage = Object.keys(ALL).length
