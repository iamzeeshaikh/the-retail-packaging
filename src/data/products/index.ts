import type { ProductFacts, ProductFactsMap } from './types'
import { foodFacts } from './food'
import { mailerFacts } from './mailers'
import { bagFacts } from './bags'
import { pouchFacts } from './pouches'
import { stickerFacts } from './stickers'
import { cosmeticFacts } from './cosmetic'
import { sleeveFacts } from './sleeves'
import { cupFacts } from './cups'
import { insertFacts } from './inserts'
import { displayLabelFacts } from './display-labels'
import { apparelCandleFacts } from './apparel-candle'
import { beverageGiftFacts } from './beverage-gift'
import { electronicsJewelleryFacts } from './electronics-jewellery'
import { wellnessPharmaFacts } from './wellness-pharma'
import { promoSustainableFacts } from './promotional-sustainable'

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
  ...bagFacts,
  ...pouchFacts,
  ...stickerFacts,
  ...cosmeticFacts,
  ...sleeveFacts,
  ...cupFacts,
  ...insertFacts,
  ...displayLabelFacts,
  ...apparelCandleFacts,
  ...beverageGiftFacts,
  ...electronicsJewelleryFacts,
  ...wellnessPharmaFacts,
  ...promoSustainableFacts,
}

export const factsFor = (slug: string): ProductFacts | undefined => ALL[slug]
export const factsCoverage = Object.keys(ALL).length
