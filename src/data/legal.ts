export interface LegalPage {
  slug: string
  title: string
  metaTitle: string
  description: string
  updated: string
  intro: string
  sections: { h2: string; body: string[]; list?: string[] }[]
}

export const legalPages: LegalPage[] = [
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    metaTitle: 'Privacy Policy | The Retail Packaging',
    description: 'What personal data The Retail Packaging collects through quote requests, why we hold it, how long we keep it and the rights you have over it.',
    updated: '10 August 2026',
    intro: 'This policy explains what personal data we collect when you contact us, why we hold it, and what you can ask us to do with it.',
    sections: [
      { h2: 'What we collect', body: ['We collect only what a quote request needs to be answered.'], list: [
        'Name, email address and phone number you enter into a form',
        'Project details and any artwork files you upload',
        'The page a request was submitted from, so we know what you were looking at',
        'Standard server logs including IP address, retained by our hosting provider',
      ]},
      { h2: 'Why we hold it', body: ['To answer your enquiry, prepare a quote, produce and deliver an order, and keep a record of specifications so reorders match. We do not build marketing profiles from quote requests.'] },
      { h2: 'Legal basis', body: ['Where you have asked us for a quote, we process your data to take steps at your request before entering a contract. Where we keep production records, we do so under our legitimate interest in maintaining accurate order history.'] },
      { h2: 'Sharing', body: ['We share what is necessary to fulfil your order — production partners receive artwork and specifications, and carriers receive delivery details. We do not sell contact data or share it for third-party marketing.'] },
      { h2: 'Artwork files', body: ['Files you upload are used to produce your packaging and are retained with your order record so reorders can reuse them. Tell us if you want artwork deleted after an order completes and we will remove it.'] },
      { h2: 'How long we keep data', body: ['Enquiries that do not become orders are retained for 24 months. Order records including specifications and artwork are retained for 7 years, which covers reorders and any commercial dispute period.'] },
      { h2: 'Your rights', body: ['You can ask us for a copy of the data we hold about you, ask us to correct it, or ask us to delete it where we are not required to keep it. Write to the contact address below and we will respond within 30 days.'] },
      { h2: 'Cookies and analytics', body: ['The site sets no advertising cookies. Where analytics is enabled it is used to understand which pages are useful, not to identify individuals. Full detail is in our cookie policy.'] },
      { h2: 'Security', body: ['Form submissions travel over HTTPS. Uploaded files are validated by type and size and renamed before storage. Credentials for our email systems are held in environment variables and never appear in the website code delivered to your browser.'] },
      { h2: 'Contact', body: ['Questions about this policy, or requests about your data, can be sent to info@theretailpackaging.com or by phone on +1 503-358-0443.'] },
    ],
  },
  {
    slug: 'terms-and-conditions',
    title: 'Terms and Conditions',
    metaTitle: 'Terms and Conditions | The Retail Packaging',
    description: 'The terms covering quotes, orders, artwork approval, tooling, delivery, cancellation and liability for custom packaging manufactured to order.',
    updated: '10 August 2026',
    intro: 'These terms apply to quotes issued and orders accepted by The Retail Packaging. Custom manufacturing carries obligations on both sides, and these set them out plainly.',
    sections: [
      { h2: 'Quotes', body: ['Quotes state a specification, quantity, lead time and price. They are valid for 30 days unless stated otherwise. Prices are exclusive of freight and applicable taxes unless the quote says otherwise.', 'A change to specification, quantity or material after quoting requires a reissued quote, because each of those changes the price.'] },
      { h2: 'Orders and acceptance', body: ['An order is accepted when we confirm it in writing. Production does not begin until artwork is approved and, where applicable, payment terms are met.'] },
      { h2: 'Artwork and approval', body: ['You are responsible for the content of artwork you supply, including the accuracy of regulated panel information, ingredient declarations, warnings, barcodes and any claims printed on the pack.', 'We check artwork for technical print readiness — bleed, resolution, embedded fonts, colour build and cut lines. That check does not verify legal or factual accuracy of the content.', 'Production runs against the proof you approve. Errors present in an approved proof are not grounds for replacement at our cost.'] },
      { h2: 'Tooling', body: ['Structural cutting dies and stamping dies are produced for your specification and charged once. They remain available for reorders at the same specification. A change in dimensions requires new tooling.'] },
      { h2: 'Quantity tolerance', body: ['Custom packaging manufacturing carries a standard over-run or under-run tolerance of plus or minus 10% on the ordered quantity. Invoicing reflects the quantity actually delivered.'] },
      { h2: 'Delivery', body: ['Lead times run from artwork approval and are estimates given in good faith. We notify you promptly if a confirmed date is at risk.', 'Risk passes on delivery. You should inspect consignments on arrival and report visible damage within 5 business days.'] },
      { h2: 'Cancellation', body: ['An order may be cancelled without charge before artwork approval, less any tooling already produced. After production begins, cancellation is subject to the costs incurred, which for custom manufacturing is usually the full order value.'] },
      { h2: 'Returns', body: ['Packaging manufactured to an approved specification cannot be returned, because it cannot be resold. Where goods do not match the approved specification, or arrive damaged, we will replace or credit them.'] },
      { h2: 'Liability', body: ['Our liability for any order is limited to the value of that order. We are not liable for indirect or consequential losses including lost profit, lost sales or third-party costs.'] },
      { h2: 'Governing law', body: ['These terms are governed by the laws of the United States and the state in which our contracting entity is registered.'] },
    ],
  },
  {
    slug: 'cookie-policy',
    title: 'Cookie Policy',
    metaTitle: 'Cookie Policy | The Retail Packaging',
    description: 'What cookies and local storage this site uses, what each one does, and how to control them in your browser.',
    updated: '10 August 2026',
    intro: 'This site uses very little client-side storage. Here is exactly what it uses and why.',
    sections: [
      { h2: 'What we use', body: ['The site sets no advertising or tracking cookies of its own. Two pieces of browser storage are used for functionality.'], list: [
        'Local storage key "trp-pkg-tool-v1" — saves your packaging tool draft in your own browser so you can return to it. It is never sent to us until you submit the form.',
        'Session storage key "trp_quote_ref" — carries your quote reference to the confirmation page. It is deleted immediately after it is displayed.',
      ]},
      { h2: 'Analytics', body: ['If analytics is enabled on this site, it is configured to measure which pages are useful rather than to identify individuals. Analytics is loaded only when a measurement ID is configured, and no advertising cookies are set.'] },
      { h2: 'Third-party content', body: ['The WhatsApp button is a plain link. Clicking it opens WhatsApp and no third-party script runs on this site to provide it. We do not embed third-party chat widgets, social pixels or advertising tags.'] },
      { h2: 'Controlling storage', body: ['You can clear local and session storage through your browser settings at any time. Doing so removes any saved packaging tool draft. All other functionality on the site continues to work without stored data.'] },
      { h2: 'Changes', body: ['If we add anything that stores data in your browser, this page will be updated before it goes live.'] },
    ],
  },
  {
    slug: 'accessibility-statement',
    title: 'Accessibility Statement',
    metaTitle: 'Accessibility Statement | The Retail Packaging',
    description: 'Our accessibility commitment, the WCAG 2.2 AA measures implemented across this site, known limitations, and how to report a problem.',
    updated: '10 August 2026',
    intro: 'We aim to meet WCAG 2.2 Level AA across this site. This statement sets out what has been implemented, what has not, and how to tell us if something does not work for you.',
    sections: [
      { h2: 'What we have implemented', body: ['Accessibility was built into the components rather than retrofitted.'], list: [
        'Semantic HTML with a single H1 per page and correctly ordered headings',
        'A skip link to main content as the first focusable element',
        'Visible focus indicators on every interactive element, never removed',
        'Full keyboard operation including the mega menu, gallery, accordions and packaging tool',
        'Escape closes open menus and returns focus to the trigger',
        'Form labels associated with every control, with errors announced and linked by aria-describedby',
        'Descriptive alt text on product photography, varied within a gallery rather than repeated',
        'Colour contrast meeting AA for body text and interface elements',
        'Tap targets of at least 44 pixels on touch devices',
        'Full support for prefers-reduced-motion, which disables all animation and 3D movement',
        'Content that remains readable and usable with JavaScript disabled',
      ]},
      { h2: 'Known limitations', body: ['The 3D box preview in the packaging tool is decorative and conveys no information that is not also present in the written specification summary beside it. It is hidden from assistive technology rather than described.', 'Some product photography is supplied by manufacturers and its alt text describes the product rather than every visual detail of the image.', 'Complex specification tables scroll horizontally on narrow screens. They remain keyboard scrollable and are marked up with proper row and column headers.'] },
      { h2: 'Testing', body: ['Components are tested with keyboard navigation and against automated accessibility checks during the build. We have not commissioned an independent third-party audit, and we would rather say so than imply certification we do not hold.'] },
      { h2: 'Reporting a problem', body: ['If any part of this site prevents you from doing something, tell us and we will fix it. Email info@theretailpackaging.com or call +1 503-358-0443 and describe what you were trying to do.', 'We aim to respond within 5 business days and will offer an alternative way to complete the task in the meantime.'] },
    ],
  },
]
