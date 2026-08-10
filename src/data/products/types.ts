/**
 * Per-product knowledge.
 *
 * Trait-driven copy got two products with the same form and category reading
 * identically — Pizza Boxes and Burger Boxes shared 26 of 37 paragraphs. The
 * only cure is facts that are true of one product and not the other.
 *
 * Every field here must be specific enough that it could not be moved to a
 * sibling product without becoming wrong. If a sentence would be equally true
 * of the next product in the category, it does not belong in this file — it
 * belongs in the shared form-level copy.
 */
export interface ProductFacts {
  /** What physically goes inside, in concrete terms. Drives the opener. */
  holds: string
  /** The real dimensional range and what sets it. Drives the sizing section. */
  sizeNote: string
  /** How this specific product fails in service. Drives protection/structure. */
  failure: string
  /** The mistake buyers make with this product specifically. */
  buyerNote: string
  /** Where it is actually used — a scene, not a category. */
  context: string
  /** The structural or material detail that decides the job. */
  detail: string
  /** Slugs genuinely ordered alongside it, not just same-category neighbours. */
  pairs?: string[]
  /** The substrate decision specific to this product, and why. */
  spec?: string
  /** The print or finish consideration that is particular to this product. */
  press?: string
  /** One product-specific question worth answering. */
  ask?: { q: string; a: string }
}

export type ProductFactsMap = Record<string, ProductFacts>
