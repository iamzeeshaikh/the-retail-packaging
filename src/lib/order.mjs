// One price, one shipping story and one set of payment methods for every surface that
// sells: the product-page order box, the Product Offer JSON-LD, the Merchant feed, the
// checkout and api/order.js (which imports this file too, so it is plain JS).
//
// Owner's decisions, 2026-10-26: every product sells online in runs of 100 for $30.00
// (the same $0.30 per piece the site already publishes), free shipping to the US, UK,
// Canada and Australia, paid by PayPal invoice, bank transfer invoice, or cash on
// delivery in the US and Canada (the Custom Folders setup). Larger or special builds
// still go through the quote form.

export const PACK_QTY = 100
export const PACK_PRICE = 30
export const MAX_PACKS = 50
export const CURRENCY = 'USD'
export const money = (n) => `$${Number(n).toFixed(2)}`
export const PACK_PRICE_TEXT = PACK_PRICE.toFixed(2)
export const PACK_LINE = `${PACK_QTY} units for ${money(PACK_PRICE)}`

/** Production after proof approval, then transit, in business days. Same figures the site already states. */
export const HANDLING_DAYS = [3, 5]
export const TRANSIT_DAYS = [5, 7]

export const SHIP_COUNTRIES = [
  { code: 'US', name: 'United States' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'CA', name: 'Canada' },
  { code: 'AU', name: 'Australia' },
]
export const SHIP_LINE = 'Free shipping to the US, UK, Canada and Australia'

export const PAYMENT_METHODS = [
  {
    id: 'paypal',
    name: 'PayPal invoice',
    detail: 'We email a PayPal invoice once you approve your free digital proof. Pay with your PayPal balance or a card through PayPal. Production starts when it is paid.',
  },
  {
    id: 'bank',
    name: 'Bank transfer invoice',
    detail: 'We email an invoice with our bank details once you approve your free digital proof. Production starts when the transfer arrives.',
  },
  {
    id: 'cod',
    name: 'Cash on delivery',
    detail: 'Nothing is paid up front. You pay the order total when your packaging is delivered. Available for US and Canadian addresses.',
  },
]
/** Cash on delivery runs through a courier COD service that covers the US and Canada only. */
export const COD_COUNTRIES = ['US', 'CA']
export const PAYMENT_LINE = 'Pay by PayPal invoice or bank transfer after you approve your free proof, or cash on delivery in the US and Canada.'
