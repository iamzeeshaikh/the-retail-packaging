/**
 * Informational page content.
 *
 * Each entry carries its own copy, sections and FAQs. Nothing here is
 * templated across pages — the shared part is layout, not language.
 */
export interface Section {
  h2: string
  body: string[]
  list?: { title?: string; items: string[] }
  table?: { caption?: string; head: string[]; rows: string[][] }
  steps?: { h: string; d: string }[]
  /**
   * One contextual link out of this section, and no more than one — the
   * internal-linking rules cap a paragraph at a single link and ban generic
   * anchors. `lead` is the sentence the anchor sits inside, so the link reads
   * as a continuation of the section rather than a bolted-on "see also".
   *
   * These pages previously carried two links each, and the same two on all
   * twelve, which is what put them in an identical-link-set group. The
   * destination here has to be the page that answers the question this
   * section raises.
   */
  link?: { lead: string; href: string; anchor: string; tail?: string }
}

export interface InfoPage {
  slug: string
  title: string
  h1: string
  metaTitle: string
  description: string
  eyebrow: string
  lede: string
  heroProduct?: string
  sections: Section[]
  faqs: { q: string; a: string }[]
  cta?: string
  noindex?: boolean
}

const P = (p: InfoPage) => p

export const infoPages: InfoPage[] = [
  P({
    slug: 'about-us',
    title: 'About Us',
    h1: 'A packaging manufacturer, not a reseller',
    metaTitle: 'About The Retail Packaging | Custom Packaging Maker',
    description: 'We manufacture custom retail packaging to order for US brands, specifying structure and material around the product rather than selling from a stock catalogue.',
    eyebrow: 'About us',
    lede: 'The Retail Packaging produces made-to-order retail packaging for brands selling across the United States. Every dieline is cut for a specific product.',
    heroProduct: 'mailer-boxes',
    sections: [
      {
        h2: 'What we do',
        link: { lead: 'The largest of those ranges by some margin is ', href: '/custom-food-packaging/', anchor: 'our custom food packaging range', tail: ', which alone covers thirty-four formats.' },
        body: [
          'We manufacture custom packaging across 26 categories and 371 formats — folding cartons, rigid boxes, corrugated mailers, paper bags, flexible pouches, pressure-sensitive labels, sleeves, trays and retail displays. Nothing on the site is a stock item. Each order starts with your product dimensions and ends with packaging cut to fit them.',
          'The work splits into three parts: getting the structure right, choosing a material that survives the journey the pack will actually take, and printing it in whatever way makes commercial sense for the quantity. Most packaging problems we are asked to solve are failures in one of those three, usually the first.',
        ],
      },
      {
        h2: 'How we work with buyers',
        link: { lead: 'What actually moves a number on that specification is set out in ', href: '/resources/packaging-cost-factors/', anchor: 'our breakdown of packaging cost factors', tail: '.' },
        body: [
          'A quote from us states the board grade, the finished dimensions, the print method, the finishing operations and the lead time. A price without that specification is not comparable with anything, and we would rather give you something you can hold us to.',
          'If a cheaper route exists, we say so at quoting rather than after the invoice. A lighter board that still passes the shipping test, a shorter run that avoids stranded stock, a dimensional change that nests better on the press sheet — those conversations happen before you commit.',
        ],
      },
      {
        h2: 'What we do not claim',
        body: [
          'We do not operate offices or plants in every city we ship to, and our location pages say so plainly. We do not publish client logos we have no permission to use, invented production statistics, or certifications we do not hold.',
          'We also do not display customer ratings, because we have not yet collected verified reviews. When we do, they will appear on the page with the review text visible, not only inside structured data.',
        ],
      },
      {
        h2: 'Who we work with',
        link: { lead: 'Fulfilment buyers in particular tend to start with ', href: '/custom-mailers/', anchor: 'corrugated mailers and e-commerce boxes', tail: ', where a fraction of an inch changes the freight bill.' },
        body: [
          'Most of our volume comes from four groups: early-stage brands producing a first run, established retail brands reordering at scale, agencies specifying packaging on behalf of clients, and fulfilment operations buying mailers and inserts in quantity.',
          'The specification conversation differs a great deal between them. A startup usually needs the smallest viable run and honest advice about what to skip. A fulfilment buyer usually needs a fraction of an inch removed from a mailer, because dimensional weight costs more than the box.',
        ],
      },
    ],
    faqs: [
      { q: 'Are you a manufacturer or a broker?', a: 'We specify, prepress and manage production directly with manufacturing partners, and we hold your dieline, board specification and colour targets on file. We are not a marketplace passing enquiries to whoever bids lowest.' },
      { q: 'Where is packaging produced?', a: 'Production runs through partner facilities selected by format — board, corrugated, flexible film and label work all use different equipment. We confirm the production route with your quote.' },
      { q: 'Do you have a minimum order?', a: 'A flat 100 units on any format. Print method changes the unit price, not the minimum.' },
      { q: 'Can you handle repeat orders at scale?', a: 'Yes. Repeat runs reuse the approved file, dieline and colour targets, which shortens lead time and keeps batches consistent.' },
      { q: 'Do you offer design services?', a: 'Yes. Our team can build packaging artwork from a logo and brand direction, or adapt existing artwork onto a new dieline.' },
      { q: 'What industries do you supply?', a: 'Food and beverage, beauty and personal care, CBD and wellness, e-commerce and DTC, retail and grocery, gifting, apparel, candles and home, electronics, and pharmaceutical packaging.' },
      { q: 'How quickly do you respond to a quote request?', a: 'Usually within one business day. If a requirement needs a structural mock-up before we can price it accurately, we tell you that rather than guessing at a number.' },
      { q: 'Do you ship internationally?', a: 'Our focus is the United States. We can discuss export requirements but our freight arrangements and lead times are built around US delivery.' },
      { q: 'Can I visit a facility?', a: 'We do not run public facility tours. For large programmes we can arrange a production review with the relevant partner facility.' },
      { q: 'How do I get started?', a: 'Send a quote request with your product dimensions, quantity and deadline. We reply with a specification, a lead time and a written price.' },
    ],
  }),

  P({
    slug: 'how-it-works',
    title: 'How It Works',
    h1: 'How a custom packaging order runs',
    metaTitle: 'How Custom Packaging Ordering Works | Process',
    description: 'The six stages of a custom packaging order — specification, quoting, dieline, proofing, production and delivery — and what each one needs from you.',
    eyebrow: 'Process',
    lede: 'From first enquiry to delivered pallet, here is what actually happens, what we need at each stage, and where projects usually lose time.',
    heroProduct: 'custom-mailer-boxes-with-inserts',
    sections: [
      {
        h2: 'The six stages',
        link: { lead: 'The proofing stage is the one worth understanding in detail before you reach it, which is covered in ', href: '/resources/dieline-and-artwork-guide/', anchor: 'our dieline and artwork guide', tail: '.' },
        body: ['Every order follows the same route. The only variable is how long each stage takes, and that depends almost entirely on how complete the information is at the start.'],
        steps: [
          { h: 'Requirement', d: 'You send product dimensions, weight, quantity, deadline and destination. If you have a material or finish in mind, say so. If not, say that too — a guess is less useful than an honest blank.' },
          { h: 'Specification and quote', d: 'We return a board grade, structure, print method, finishing list, lead time and written price. Where a cheaper route exists, it appears in the same document.' },
          { h: 'Dieline', d: 'Once the quote is approved we send a dieline template sized to your product. Artwork is built on this template, not on a guessed rectangle.' },
          { h: 'Prepress and proof', d: 'Our team checks bleed, resolution, fonts, colour build and cut lines, then issues a digital proof. Physical samples are available where fit or colour is critical.' },
          { h: 'Production', d: 'Printing, die-cutting, finishing and assembly. Most formats complete in 3 to 5 business days after proof approval.' },
          { h: 'Delivery', d: 'Shipped flat or assembled depending on format, to one address or split across fulfilment sites. Freight is quoted separately.' },
        ],
      },
      {
        h2: 'Where projects lose time',
        link: { lead: 'Most of that lost time is artwork coming back for rework, which ', href: '/artwork-guidelines/', anchor: 'the artwork guidelines set out to prevent', tail: '.' },
        body: [
          'Three things account for most delay, and none of them are production. The first is incomplete measurements, which stalls the dieline. The second is regulated panel content arriving after the layout is finished, which forces a redesign. The third is proof approval sitting with someone who is on leave.',
          'None of those are fixable at the press. Settling all three before artwork begins removes most of the schedule risk from a first order.',
        ],
      },
      {
        h2: 'What a good brief contains',
        link: { lead: 'If you are unsure what dimensions to quote, ', href: '/resources/custom-packaging-size-guide/', anchor: 'the packaging size guide explains how to measure', tail: ' a product for its pack.' },
        body: ['The information below produces an accurate quote first time.'],
        list: {
          items: [
            'Product dimensions at the widest point, in the state it will be packed',
            'Product weight',
            'Quantity you realistically need, and the next quantity up if you are unsure',
            'Deadline, and whether it is fixed or flexible',
            'Destination, including whether it goes to a 3PL with receiving rules',
            'Any regulated panel content that must fit',
            'Whether the item is fragile enough to need an insert',
          ],
        },
      },
    ],
    faqs: [
      { q: 'How long does the whole process take?', a: 'For a straightforward first order, allow four to six weeks from enquiry to delivery. Production is 3 to 5 business days; the rest is specification, artwork and proofing.' },
      { q: 'What slows an order down most?', a: 'Incomplete product measurements, regulated panel content arriving late, and proof approvals waiting on an absent decision-maker. Production itself is rarely the bottleneck.' },
      { q: 'Can I get a physical sample?', a: 'Yes. A plain structural sample tests fit; a printed prototype tests colour and finish. Sample costs are normally credited against the production order.' },
      { q: 'What happens if the proof is wrong?', a: 'We correct it and reissue. Nothing goes to press without your written approval, and changes at proof stage cost nothing beyond a short delay.' },
      { q: 'Do I need artwork before requesting a quote?', a: 'No. Quoting depends on dimensions, material, print method and quantity, not on finished artwork. Artwork comes after the specification is agreed.' },
      { q: 'Who checks my artwork?', a: 'Our prepress team reviews bleed, safety margins, resolution, embedded fonts, colour build and cut lines before anything is committed to plate.' },
      { q: 'Can I change the quantity after quoting?', a: 'Yes, before production starts. Quantity changes affect the unit price because setup costs spread differently, so we reissue the quote.' },
      { q: 'How is tooling handled on reorders?', a: 'The structural die is made once. Reorders at the same size reuse it at no further tooling cost. A dimensional change means a new die.' },
      { q: 'Can delivery be staged?', a: 'Yes. Production runs once at the volume price, and stock is released to you in agreed instalments. Agree this at quoting, as storage terms form part of it.' },
      { q: 'What payment terms apply?', a: 'First orders typically run on payment before production. Established accounts can discuss terms. Full detail is confirmed with your quote.' },
    ],
  }),

  P({
    slug: 'materials',
    title: 'Materials',
    h1: 'Packaging materials we produce on',
    metaTitle: 'Custom Packaging Materials | Board, Film and Fabric',
    description: 'Paperboard, kraft, corrugated, rigid greyboard, laminated film, moulded pulp and fabric — what each substrate does well and where it falls short.',
    eyebrow: 'Capabilities',
    lede: 'Material is a structural decision before it is a visual one. Here is what we produce on and how each substrate behaves in the real world.',
    heroProduct: 'kraft-paper-bags',
    sections: [
      {
        h2: 'Board and paper substrates',
        link: { lead: 'Caliper, grade and how each behaves under load are compared in ', href: '/resources/packaging-material-guide/', anchor: 'the packaging material guide', tail: '.' },
        body: ['These cover the majority of retail packaging, from small cosmetic cartons to shelf-ready shipping cases.'],
        table: {
          caption: 'Board substrates and typical applications',
          head: ['Substrate', 'Typical thickness', 'Best for', 'Limitation'],
          rows: [
            ['SBS paperboard', '12pt – 18pt', 'Cartons needing clean print and fine detail', 'Virgin fibre, higher cost than recycled grades'],
            ['Kraft board', '12pt – 18pt', 'Natural finish, craft positioning', 'Colour shifts, absorbs moisture'],
            ['Recycled CCNB', '14pt – 20pt', 'Cost-effective cartons with recycled content', 'Greyer base tone, slightly less rigid'],
            ['E-flute corrugated', '~1.5 mm', 'Mailers and retail-facing shippers', 'Coarser print than flat board'],
            ['B-flute corrugated', '~3 mm', 'Shipping boxes taking real abuse', 'Bulkier, lower print fidelity'],
            ['BC double-wall', '~6 mm', 'Heavy contents, high stacking loads', 'Highest freight volume of the board options'],
            ['Rigid greyboard', '1.5 mm – 2 mm', 'Premium presentation packaging', 'Hand-assembled, ships pre-formed'],
          ],
        },
      },
      {
        h2: 'Flexible films',
        link: { lead: 'Barrier structures and where they stop being recyclable are covered on ', href: '/custom-pouches/', anchor: 'the flexible pouch range', tail: '.' },
        body: [
          'Pouches and flexible packs are laminated from several film layers, with each layer doing a job — print carrier, barrier, and food-safe sealant. They weigh a fraction of rigid alternatives and take almost no freight volume flat.',
          'Recyclable mono-material polyethylene structures are now viable for many dry goods. They behave differently on filling lines, so a brand switching a live product should trial before converting the whole SKU.',
        ],
        list: {
          title: 'Film structures we produce',
          items: [
            'PET/MPET/PE laminate — high barrier, opaque, standard for coffee and snacks',
            'Kraft paper/PE laminate — natural outer with a working barrier inner',
            'Clear PET/PE — product visibility with moderate barrier',
            'Recyclable mono-PE — single polymer family, store drop-off recyclable',
            'Compostable kraft/PLA — certified industrial compostable',
          ],
        },
      },
      {
        h2: 'Protective and specialty materials',
        link: { lead: 'Which cushioning suits which product is set out in ', href: '/resources/packaging-insert-guide/', anchor: 'our guide to packaging inserts', tail: '.' },
        body: ['Used inside a pack rather than as the pack itself, these decide whether a fragile product survives the carrier network.'],
        list: {
          items: [
            'Moulded pulp — recycled, impact absorbing, rough surface, poor print',
            'EVA and polyurethane foam — precise cavities, best impact absorption, not kerbside recyclable',
            'Chipboard — thin dense board for shallow trays and pads',
            'Cotton canvas and jute — sewn reusable carriers rather than single-trip packaging',
          ],
        },
      },
    ],
    faqs: [
      { q: 'Which material is strongest?', a: 'BC double-wall corrugated for stacking and impact, rigid greyboard for shape retention. They solve different problems — one is about load, the other about the pack not collapsing.' },
      { q: 'What is the difference between SBS and kraft board?', a: 'SBS is bleached white with a coated surface that prints cleanly. Kraft is unbleached, prints warmer and duller, cannot carry white ink without an underbase, and absorbs ambient moisture.' },
      { q: 'Which materials are food safe?', a: 'Food-grade paperboard, PLA-lined board and food-safe film structures are all available. Not every printed board is approved for direct contact, so confirm the grade if the product touches the surface.' },
      { q: 'Can I get recycled content in any material?', a: 'Recycled grades exist for paperboard and corrugated, and corrugated already carries high recycled content as standard. Film and foam options are more limited.' },
      { q: 'What board thickness do I need?', a: '12pt for light retail items, 14pt to 16pt for most cartons, 18pt for weight or repeated handling. Past that, corrugated is the better answer.' },
      { q: 'Does material affect print quality?', a: 'Considerably. Coated white board holds the finest detail. Uncoated kraft dulls and warms colour. Corrugated printed flexo cannot hold fine gradients without litho-lamination.' },
      { q: 'Which material is cheapest?', a: 'Uncoated kraft board and E-flute corrugated are usually the lowest cost per unit area. The cheapest material overall is the lightest one that survives the journey with margin.' },
      { q: 'Do you offer plastic-free options?', a: 'Yes. Water-based coatings, PE-free grease barriers and paper-only constructions avoid plastic laminates while keeping the pack recyclable in paper streams.' },
      { q: 'How does climate affect material choice?', a: 'Sustained heat softens some laminating adhesives; humidity reduces the rigidity of uncoated board. For warm or humid storage we specify heat-stable laminates and moisture-resistant coatings.' },
      { q: 'Can I mix materials in one pack?', a: 'Yes, and it is common — a corrugated outer with a foam insert, or a carton with a film window. It does complicate recycling, so consider whether the customer will realistically separate the components.' },
    ],
  }),

  P({
    slug: 'printing-options',
    title: 'Printing Options',
    h1: 'Packaging printing methods we run',
    metaTitle: 'Packaging Printing Options | Digital, Offset, Flexo',
    description: 'Digital, offset lithography, flexography, rotogravure and screen printing compared on run length, colour accuracy, substrate range and setup cost.',
    eyebrow: 'Capabilities',
    lede: 'Run length decides the print method more often than quality does. Here is where each one wins and where it stops making sense.',
    heroProduct: 'custom-poly-mailers',
    sections: [
      {
        h2: 'Method by method',
        link: { lead: 'How each method behaves on a real job is compared in ', href: '/resources/printing-methods-guide/', anchor: 'the printing methods guide', tail: '.' },
        body: ['Five routes cover almost all packaging work. The differences that matter commercially are setup cost and running cost, not resolution.'],
        table: {
          caption: 'Printing methods compared',
          head: ['Method', 'Setup cost', 'Efficient run', 'Colour accuracy', 'Best substrates'],
          rows: [
            ['Digital', 'None', '50 – 2,000', 'Good', 'Board, film, label stock'],
            ['Offset lithography', 'Plates per colour', '2,000+', 'Excellent, spot colours native', 'Flat board, wraps, labels'],
            ['Flexography', 'Plates per colour', '2,500+', 'Good on solids', 'Corrugated, film, bags'],
            ['Rotogravure', 'Cylinders, high', '10,000+', 'Excellent', 'Flexible film'],
            ['Screen printing', 'Screens per colour', '100+', 'Heavy ink lay', 'Fabric, rigid wraps, thick stocks'],
          ],
        },
      },
      {
        h2: 'Choosing between digital and plate-based printing',
        link: { lead: 'Run length is the deciding factor, and ', href: '/resources/wholesale-order-guide/', anchor: 'the wholesale order guide shows where the crossover falls', tail: ' at each quantity band.' },
        body: [
          'Digital carries no plate cost, so its unit price is close to flat regardless of quantity. Plate-based printing carries a fixed setup that spreads across the run, so its unit price falls steeply as volume rises.',
          'The crossover usually sits between 1,000 and 3,000 units, earlier for one-colour work and later for six-colour designs with foil. Ask for the same job quoted at your quantity and one band up — two points reveal the shape of both curves.',
        ],
      },
      {
        h2: 'Colour handling',
        link: { lead: 'Colour behaves differently again on an unbleached stock, which is covered across ', href: '/sustainable-packaging/', anchor: 'the recycled and kraft range', tail: '.' },
        body: [
          'Offset and flexo reproduce spot colours directly from named inks, which is what you want if a brand depends on an exact Pantone. Digital simulates spot colours with a process build, which is close but not identical.',
          'On uncoated and kraft substrates all methods print duller and warmer than they do on coated white board. That is the material behaving normally rather than a printing fault, and a proof on the real substrate is the only reliable check.',
        ],
      },
    ],
    faqs: [
      { q: 'Which printing method should I choose?', a: 'Under about 1,000 units, digital almost always. Above about 3,000, offset or flexo depending on substrate. Between the two, ask for both prices at your exact quantity.' },
      { q: 'How many colours can I print?', a: 'Digital handles full colour with no per-colour cost. Plate-based methods add a plate and a press pass per colour, so colour count directly affects setup cost.' },
      { q: 'Can you match a Pantone colour?', a: 'On offset and flexo we print the Pantone ink directly. On digital we produce the closest process build, which is very close but not an exact match on critical brand colours.' },
      { q: 'Is digital print quality good enough for retail packaging?', a: 'For most retail packaging viewed at arm\'s length, yes. Offset holds finer detail in small type and large solids more evenly, which shows under close inspection.' },
      { q: 'Can you print inside a box?', a: 'Yes, on mailers, folding cartons and rigid boxes. It matters most when the product does not fill the pack, because that is when the interior is visible at opening.' },
      { q: 'What is litho-lamination?', a: 'A paper sheet printed offset and then bonded to corrugated board. It gives photographic print quality on corrugated, which flexography cannot achieve. It costs more than direct flexo.' },
      { q: 'Do you print white ink?', a: 'Yes. On kraft and clear substrates white is printed as an underbase layer so colours above it stay accurate. It adds a pass and a cost.' },
      { q: 'Can I print different designs in one run?', a: 'On digital, yes, at no extra setup cost — this is the main advantage of digital for versioned products. On plate-based printing each version needs its own plate set.' },
      { q: 'What resolution do images need?', a: '300 dpi at the size the image appears on the finished pack, not at its original size. Scaling an image up in the layout reduces effective resolution proportionally.' },
      { q: 'How consistent is colour between production runs?', a: 'Offset holds the tightest run-to-run consistency. We retain colour targets on file so reorders match, and where colour is critical we recommend agreeing a printed reference standard.' },
    ],
  }),

  P({
    slug: 'finishes-and-add-ons',
    title: 'Finishes and Add-ons',
    h1: 'Packaging finishes and structural add-ons',
    metaTitle: 'Packaging Finishes and Add-ons | Options Explained',
    description: 'Lamination, spot UV, foil stamping, embossing, windows, inserts and closures — what each finish costs you and what it buys.',
    eyebrow: 'Capabilities',
    lede: 'Every finish is a separate production pass. Choosing one that does a clear job usually reads better than layering three that compete.',
    heroProduct: 'candle-boxes-with-window',
    sections: [
      {
        h2: 'Surface finishes',
        link: { lead: 'Each finish and what it costs as a separate pass is set out in ', href: '/resources/packaging-finishes-guide/', anchor: 'the packaging finishes guide', tail: '.' },
        body: ['These change how the pack looks and how it survives handling.'],
        table: {
          caption: 'Surface finish options',
          head: ['Finish', 'What it does', 'Best used for'],
          rows: [
            ['Matte lamination', 'Non-reflective film, resists fingerprints and scuffing', 'Packs handled repeatedly in store'],
            ['Gloss lamination', 'Lifts colour saturation, adds moisture resistance', 'Vivid photography, humid environments'],
            ['Soft-touch lamination', 'Velvet surface texture', 'Premium positioning where feel matters'],
            ['Aqueous coating', 'Water-based protection, keeps paper recyclable', 'Plastic-free specifications'],
            ['Spot UV', 'High-gloss varnish on selected areas', 'Contrast against a matte background'],
            ['Foil stamping', 'Metallic foil applied by heated die', 'Small bold marks, not fine detail'],
            ['Embossing', 'Raised relief pressed into the board', 'Tactile brand marks'],
            ['Debossing', 'Recessed impression', 'Subtle detailing on uncoated stock'],
          ],
        },
      },
      {
        h2: 'Structural add-ons',
        link: { lead: 'Windows, handles and inserts are specified per format across ', href: '/resources/box-style-guide/', anchor: 'the box style guide', tail: '.' },
        body: ['These change how the pack functions rather than how it looks.'],
        list: {
          items: [
            'Product windows with PET or PLA film',
            'Magnetic closures on rigid boxes',
            'Ribbon pulls and grosgrain ties',
            'Tear strips and perforated opening lines',
            'Hang tabs for peg display',
            'Fitted board or foam inserts',
            'Resealable zippers and degassing valves on pouches',
            'Child-resistant closures where required',
          ],
        },
      },
      {
        h2: 'Where finishing budgets go wrong',
        link: { lead: 'Finishes read very differently in the hand than on screen, so ', href: '/samples/', anchor: 'a printed prototype is worth ordering first', tail: '.' },
        body: [
          'Spot UV on a gloss laminate is close to invisible, because there is no contrast between the varnish and the surface beneath. It only earns its cost over matte.',
          'Foil stamping reproduces bold shapes well and fine serif detail poorly, because the heated die crushes thin elements. Simplify the mark before stamping it rather than after seeing the result.',
          'Embossing needs artwork designed for relief from the start. Applying it to a logo drawn for flat print usually produces a soft, indistinct impression.',
        ],
      },
    ],
    faqs: [
      { q: 'Which finish is most durable?', a: 'Gloss lamination resists moisture and abrasion best. Matte lamination resists visible scuffing and fingerprints better even though the film itself is similar.' },
      { q: 'How much do finishes add to the cost?', a: 'Each finish is a separate production pass, and dies for foil or embossing are a one-time tooling cost. We price each option individually rather than bundling them.' },
      { q: 'Can I combine several finishes?', a: 'Yes, though registration between them gets harder. Spot UV over matte lamination is the most common effective combination. Foil registered precisely with an emboss is achievable but a more demanding setup.' },
      { q: 'Does lamination affect recyclability?', a: 'Plastic laminates make paper packaging harder to recycle in standard streams. Water-based aqueous coatings offer protection while keeping the pack recyclable as paper.' },
      { q: 'What is soft-touch lamination?', a: 'A film with a velvet-like surface texture. It changes how the pack feels in the hand, which is the entire point, and it shows fingerprints more than matte.' },
      { q: 'Can you add a window to any box?', a: 'Most folding cartons and rigid boxes can take a die-cut aperture with film applied behind it. It weakens the panel slightly, so placement matters on structural faces.' },
      { q: 'What film is used in windows?', a: 'PET is standard. PLA is available where a compostable specification is needed, though it is less clear and slightly less rigid.' },
      { q: 'Are magnetic closures worth it?', a: 'On rigid presentation boxes they add a definite sense of quality at the opening moment. On a folding carton they are usually disproportionate to the rest of the pack.' },
      { q: 'Can finishes be applied to kraft board?', a: 'Yes, though results differ. Foil and emboss work well on kraft. Spot UV shows less contrast because uncoated board absorbs varnish rather than holding it on the surface.' },
      { q: 'How do I decide which finish to use?', a: 'Ask what job it does. Protection, contrast, texture or perceived value are all valid answers. If a finish does not have one, it is decoration you are paying a production pass for.' },
    ],
  }),

  P({
    slug: 'sustainability',
    title: 'Sustainability',
    h1: 'Environmental claims you can defend',
    metaTitle: 'Sustainable Packaging | Recycled and Compostable',
    description: 'Recycled content, recyclability and compostability are separate claims with separate evidence requirements. What we can supply and what each option really means.',
    eyebrow: 'Sustainability',
    lede: 'We would rather specify a material that genuinely supports your claim than help you print one you cannot back up.',
    heroProduct: 'compostable-mailers',
    sections: [
      {
        h2: 'Three claims, not one',
        link: { lead: 'Which of the three you can actually defend is worked through in ', href: '/resources/sustainable-packaging-guide/', anchor: 'the sustainable packaging guide', tail: '.' },
        body: [
          'Recycled content describes what the packaging is made from. Recyclability describes whether local infrastructure will actually accept it. Compostability describes breakdown under specific conditions, almost always industrial rather than home.',
          'These get conflated constantly, and the resulting on-pack wording is where brands attract complaints. Decide which claim you are making before choosing a material, because the material follows the claim rather than the other way round.',
        ],
      },
      {
        h2: 'What we can supply',
        link: { lead: 'The formats built specifically around recycled and recyclable stocks sit in ', href: '/sustainable-packaging/', anchor: 'our sustainable packaging range', tail: '.' },
        body: ['Each option below is genuinely available and comes with the documentation to support it.'],
        list: {
          items: [
            'Recycled paperboard with stated post-consumer content percentage',
            'Corrugated with high recycled content as standard',
            'Water-based aqueous coatings that keep board recyclable in paper streams',
            'PE-free grease barriers for food packaging',
            'Recyclable mono-material polyethylene pouches',
            'Certified industrial compostable films and coatings with certification documents',
            'Moulded pulp protective components from recycled fibre',
            'Uncoated and unbleached constructions with no laminate at all',
          ],
        },
      },
      {
        h2: 'The change that actually reduces material',
        link: { lead: 'Right-sizing depends on measuring the product rather than the current box, which ', href: '/resources/custom-packaging-size-guide/', anchor: 'the size guide explains step by step', tail: '.' },
        body: [
          'Right-sizing does more than any substrate swap. A pack trimmed to fit removes board, reduces shipping volume and cuts freight emissions in one move — and it lowers cost rather than raising it.',
          'Eliminating a component does the same. A fitted insert replacing loose void fill, or a printed outer replacing an outer plus a sleeve, makes the pack simpler and lighter at the same time.',
          'Designing for a single material stream matters too. A carton that is entirely paper recycles cleanly; the same carton with a plastic window and a foil block does not, unless the customer separates them, which they will not.',
        ],
      },
      {
        h2: 'What we will not do',
        body: [
          'We will not describe a pack as compostable without certification, or as recyclable where the material realistically has no collection route. We will not apply a leaf motif and vague wording in place of a specific claim.',
          'If you want an environmental claim on the pack, tell us what it is and we will specify a material that supports it, or tell you plainly that it does not exist at your price point.',
        ],
      },
    ],
    faqs: [
      { q: 'What is the difference between recyclable and compostable?', a: 'Recyclable means the material can be reprocessed where collection exists. Compostable means it breaks down into organic matter, almost always requiring industrial composting conditions rather than a home bin.' },
      { q: 'Is compostable packaging better than recyclable?', a: 'Not automatically. Industrial composting access is limited across most of the US, and compostable items entering recycling streams contaminate them. Recyclable paper packaging often has the better real-world outcome.' },
      { q: 'How much more does sustainable packaging cost?', a: 'Recycled board is often within a few percent of virgin. Aqueous coatings are broadly cost-neutral against lamination. Mono-material film carries a modest premium. Certified compostable materials are typically 20% to 40% higher.' },
      { q: 'Can you supply certification documents?', a: 'Yes, for certified compostable materials and for recycled content claims. We would rather supply evidence than have you make a claim you cannot substantiate.' },
      { q: 'What recycled content can you achieve?', a: 'Corrugated commonly exceeds 70% recycled content as standard. Recycled paperboard grades are widely available. We state the actual percentage rather than an approximation.' },
      { q: 'Are mono-material pouches genuinely recyclable?', a: 'They are recyclable through store drop-off programmes where those exist, which is a weaker recovery route than kerbside collection. It is a real improvement over multi-layer laminate, not a complete solution.' },
      { q: 'Do sustainable materials perform as well?', a: 'Recycled board performs close to virgin for most applications. Aqueous coatings have lower barrier performance than laminates. Mono-material films need filling line adjustments. We flag the trade-offs before you commit.' },
      { q: 'Can I remove plastic from my packaging entirely?', a: 'Often yes. Paper-only constructions with water-based coatings work for many dry retail products. Wet, greasy or long-shelf-life products are harder and sometimes not currently possible.' },
      { q: 'What should I print about disposal?', a: 'Be specific about what the customer should do. "Recycle with paper" or "industrially compostable, not suitable for home composting" are defensible. A generic leaf symbol is not.' },
      { q: 'How do I reduce packaging waste fastest?', a: 'Right-size the pack. It removes material, reduces freight volume and lowers cost simultaneously, which no material substitution does.' },
    ],
  }),

  P({
    slug: 'packaging-design-services',
    title: 'Packaging Design Services',
    h1: 'Packaging design that fits the structure',
    metaTitle: 'Packaging Design Services | Structural and Print',
    description: 'Structural design, dieline development and print artwork for custom packaging, built around the product rather than adapted from a template.',
    eyebrow: 'Design services',
    lede: 'Design work that starts from the dieline and the product, not from a mood board applied to a stock box.',
    heroProduct: 'rigid-boxes-with-inserts',
    sections: [
      { h2: 'Structural design',
        link: { lead: 'The construction options a dieline can be built from are set out in ', href: '/resources/box-style-guide/', anchor: 'the box style guide', tail: '.' }, body: ['Structural work decides whether a pack survives its journey and whether the product actually fits. We build the dieline from your product dimensions and weight, choose a construction that suits how the pack will be handled, and specify inserts where the contents need holding still.', 'Where a product is unusual, we prototype before tooling. A cutting die is the expensive part of a packaging programme, so structural errors are far cheaper to find at sample stage.'] },
      { h2: 'Print artwork',
        link: { lead: 'Artwork built on the production dieline avoids rework at prepress, and ', href: '/artwork-guidelines/', anchor: 'the artwork guidelines cover the setup', tail: ' in full.' }, body: ['If you have a logo and a brand direction but no packaging artwork, we can build it. If you have existing artwork designed for a different size, we can adapt it onto a new dieline without the distortion that comes from scaling a flat design.', 'All artwork is produced on the production dieline with correct bleed, safety margins and colour setup, so it does not need reworking at prepress.'] },
      { h2: 'What we need to start',
        link: { lead: 'If your brand assets are not print-ready, ', href: '/resources/packaging-file-requirements/', anchor: 'the file requirements page lists what we need', tail: '.' }, body: ['Product dimensions and weight, the quantity you expect, any regulated panel content, and your brand assets in vector form. If a logo only exists as a low-resolution image, say so early — recovering or rebuilding it is straightforward but takes time.'] },
    ],
    faqs: [
      { q: 'Do you charge separately for design?', a: 'Structural dieline development is included with a production order. Print artwork creation is quoted separately based on the number of panels and SKUs.' },
      { q: 'Can you work from a rough sketch?', a: 'Yes. A sketch plus accurate product dimensions is enough to begin structural work. Print artwork needs brand assets in usable form.' },
      { q: 'Do I own the artwork you create?', a: 'Yes. Artwork produced for your packaging is yours, and we supply the print-ready files on request.' },
      { q: 'Can you adapt artwork to a new size?', a: 'Yes, and it is better than scaling. A design rebuilt on the new dieline keeps type sizes and margins correct rather than distorting them proportionally.' },
      { q: 'Do you provide 3D visuals?', a: 'We can produce a rendered visual of the finished pack for internal approval. It is a representation rather than a colour-accurate proof.' },
      { q: 'How long does design take?', a: 'Structural dielines are usually ready within two to three business days of confirmed dimensions. Print artwork depends on scope, typically five to ten business days.' },
      { q: 'Can you design for several SKUs at once?', a: 'Yes, and it is more efficient. One structure serving several printed variants removes a tooling cost from every additional design.' },
      { q: 'Will you check artwork I produce myself?', a: 'Yes. Our prepress team reviews every file regardless of who created it, checking bleed, resolution, fonts, colour build and cut lines.' },
      { q: 'Do you handle regulated panel layout?', a: 'We lay out the panel with the content you supply and confirm it is legible at the required size. Confirming the content itself is legally correct remains your responsibility.' },
      { q: 'What file formats do you deliver?', a: 'Print-ready PDF for production, plus editable source files on request.' },
    ],
  }),

  P({
    slug: 'custom-printing',
    title: 'Custom Printing',
    h1: 'Custom packaging printing',
    metaTitle: 'Custom Packaging Printing | Digital, Offset, Flexo',
    description: 'Digital, offset, flexographic and screen printing for packaging, with the print route matched to your run length rather than a default.',
    eyebrow: 'Printing',
    lede: 'We match the print method to the run rather than pushing every job down the same route.',
    heroProduct: 'printed-paper-cups',
    sections: [
      { h2: 'The routes we run',
        link: { lead: 'Where each route stops being economic is set out in ', href: '/resources/printing-methods-guide/', anchor: 'the printing methods guide', tail: '.' }, body: ['Digital for short runs, prototypes and versioned designs where plate costs cannot be justified. Offset lithography for volume board work where colour accuracy matters and spot colours need to print directly. Flexography for corrugated, film and bag substrates at volume. Screen printing for fabric and heavy ink lay applications.', 'The crossover between digital and plate-based printing usually sits between 1,000 and 3,000 units, earlier for single-colour work and later for complex multi-colour designs with finishing.'] },
      { h2: 'Colour management', body: ['Spot colours print directly from named inks on offset and flexo. Digital produces the closest process build, which is very close but not identical on critical brand colours.', 'On uncoated and kraft substrates every method prints warmer and duller than on coated white board. That is the material behaving normally. Where colour is critical we recommend a proof on the actual substrate rather than a generic proof stock.'] },
      { h2: 'Interior and specialty printing',
        link: { lead: 'Interior print pays off most on formats the customer opens themselves, such as ', href: '/custom-mailers/', anchor: 'printed e-commerce mailers', tail: '.' }, body: ['Interior printing is available on mailers, folding cartons and rigid boxes. It earns its cost most clearly when the product does not fill the pack, because that is when the customer sees the inside face at opening.', 'White ink on kraft and clear substrates requires an opaque underbase so colours above it stay accurate. It adds a pass and a cost but is the only way to hold colour on a dark or transparent surface.'] },
    ],
    faqs: [
      { q: 'Which print method suits my run?', a: 'Under about 1,000 units, digital almost always. Above about 3,000, offset or flexo depending on substrate. Between the two, ask for both prices at your exact quantity.' },
      { q: 'Can you match a specific Pantone?', a: 'On offset and flexo we print the Pantone ink directly. On digital we produce the closest process build, which differs slightly on critical brand colours.' },
      { q: 'How many colours can I use?', a: 'Digital handles full colour at no per-colour cost. Plate-based methods add a plate and a pass per colour, so colour count directly affects setup cost.' },
      { q: 'Do you print inside boxes?', a: 'Yes, on mailers, cartons and rigid boxes. It is most worth the cost when the product does not fill the pack.' },
      { q: 'Can you print on kraft board?', a: 'Yes. Expect colours to appear warmer and less saturated, and note that white requires an opaque underbase.' },
      { q: 'What is litho-lamination?', a: 'An offset-printed sheet bonded to corrugated board, giving photographic print quality that flexography cannot achieve directly. It costs more than flexo.' },
      { q: 'Can I print different versions in one run?', a: 'On digital, yes, with no extra setup. On plate-based printing each version needs its own plate set.' },
      { q: 'How consistent is colour across reorders?', a: 'We retain colour targets on file so reorders match. Offset holds the tightest run-to-run consistency of the available methods.' },
      { q: 'What resolution do images need?', a: '300 dpi at the size the image appears on the finished pack, not at its original size.' },
      { q: 'Do you print metallic or fluorescent inks?', a: 'Yes on offset and screen printing. Digital simulates metallic effects rather than printing true metallic ink.' },
    ],
  }),

  P({
    slug: 'artwork-guidelines',
    title: 'Artwork Guidelines',
    h1: 'Artwork guidelines for packaging print',
    metaTitle: 'Artwork Guidelines | Packaging File Setup',
    description: 'File setup requirements for packaging artwork — dielines, bleed, safety margins, colour mode, resolution, fonts and accepted export formats.',
    eyebrow: 'Artwork',
    lede: 'Meeting these requirements means your file passes prepress first time rather than returning with queries.',
    heroProduct: 'custom-die-cut-stickers',
    sections: [
      { h2: 'Work on the supplied dieline',
        link: { lead: 'How the dieline is produced and what the layers mean is covered in ', href: '/resources/dieline-and-artwork-guide/', anchor: 'the dieline and artwork guide', tail: '.' }, body: ['We send a dieline template sized to your product once dimensions are confirmed. Place it on a locked layer and build artwork beneath it. Never redraw it from measurements — small discrepancies produce misregistered folds that only appear after the run.', 'Set the dieline to a named non-printing spot colour so it is excluded from output.'] },
      { h2: 'Bleed, safety and folds',
        link: { lead: 'Bleed allowances differ by construction, which ', href: '/resources/box-style-guide/', anchor: 'the box style guide sets out per format', tail: '.' }, body: ['Folding cartons need 3 mm bleed past every trim edge; rigid box wraps need 15 mm because the paper turns in around the board. Hold text and logos at least 4 mm inside trim and fold lines.', 'Nothing important should cross a fold. Barcodes must sit on a flat panel, never across a crease or a curve.'] },
      { h2: 'Colour, images and fonts', body: ['Documents in CMYK, spot colours as named swatches used consistently, unused swatches deleted. Rich black build on large solids, 100% K on small text.', 'Raster images at 300 dpi at placed size, not original size. Fonts outlined or fully embedded. Positive text above 6pt, reversed text above 8pt.'] },
      { h2: 'Export',
        link: { lead: 'The full export checklist, including ink limits and file naming, is on ', href: '/resources/packaging-file-requirements/', anchor: 'the packaging file requirements page', tail: '.' }, body: ['PDF/X-4 or PDF/X-1a, bleed included, trim marks outside the bleed area, dieline layer excluded. Total ink coverage within roughly 300%.', 'Name files with product, size and version. Tell us in the covering email what is critical — an exact brand colour, a legally required panel, a fixed logo size.'] },
    ],
    faqs: [
      { q: 'What file format should I send?', a: 'Print-ready PDF, preferably PDF/X-4. Native AI or EPS files are also accepted with linked assets embedded.' },
      { q: 'How much bleed do I need?', a: '3 mm for folding cartons and most flat formats, 15 mm for rigid box wraps, 2 to 3 mm for labels. Extend the actual artwork rather than adding a block behind it.' },
      { q: 'Do I need to outline fonts?', a: 'Yes, or embed them fully. Outlining removes any dependency on font availability or licensing at the production end.' },
      { q: 'What resolution do images need?', a: '300 dpi at the size they appear on the finished pack. Scaling up in the layout reduces effective resolution proportionally.' },
      { q: 'Can I send an RGB file?', a: 'We would rather you converted to CMYK yourself. Automatic conversion at press produces colour shifts nobody intended.' },
      { q: 'Where should the barcode go?', a: 'On a flat panel, at or above 80% nominal size, dark on light with a clear quiet zone. Never across a fold or a curved surface.' },
      { q: 'What if I do not have a dieline?', a: 'We supply one once your dimensions are confirmed. Do not design on a guessed rectangle — it almost always places something across a crease or under a glue lap.' },
      { q: 'Will you check my file before printing?', a: 'Yes. Our prepress team reviews bleed, resolution, embedded fonts, colour build and cut lines before anything goes to plate.' },
      { q: 'What is the minimum text size?', a: '6pt for positive text and 8pt for reversed-out text. Below that, ink spread fills in letterforms, particularly on uncoated stock.' },
      { q: 'How do I supply spot colours?', a: 'As named spot swatches used consistently throughout. Delete unused swatches, since two similarly named swatches separate as two plates.' },
    ],
  }),

  P({
    slug: 'shipping-information',
    title: 'Shipping Information',
    h1: 'Shipping, lead times and delivery',
    metaTitle: 'Shipping Information | Lead Times and Delivery',
    description: 'Production lead times, transit expectations, delivery formats, receiving requirements and how freight is quoted for custom packaging orders.',
    eyebrow: 'Delivery',
    lede: 'Production times, transit expectations and what we need to know about your delivery address.',
    heroProduct: 'corrugated-shipping-boxes',
    sections: [
      { h2: 'Lead times',
        link: { lead: 'Proofing accounts for more of that window than production does, as ', href: '/how-it-works/', anchor: 'the six-stage order process shows', tail: '.' }, body: ['Most formats complete production in 3 to 5 business days after artwork approval. Hand-assembled rigid boxes and specialty finishes sit at the longer end. Transit is additional and depends on destination and consignment size.', 'For a first order, allow four to six weeks from enquiry to delivery. Specification, artwork and proofing account for most of that, not production.'] },
      { h2: 'How orders arrive',
        link: { lead: 'Rigid boxes are the exception because they ship assembled, which is explained across ', href: '/custom-gift-boxes/', anchor: 'the rigid and gift box range', tail: '.' }, body: ['Folding cartons, corrugated, mailers, bags and sleeves ship flat and knocked down, which keeps freight cost low. Rigid boxes ship pre-assembled and take more freight volume. Labels ship on cores or in sheets. Cups nest in sleeves inside cartons.', 'Larger orders ship palletised. Tell us if your address cannot receive a pallet.'] },
      { h2: 'Receiving requirements', body: ['Confirm dock access, forklift availability, pallet height limits and delivery windows before dispatch. A consignment that cannot be unloaded incurs redelivery charges.', 'Third-party fulfilment centres almost always have specific labelling, pallet height and booking rules. Send those to us with your order rather than after despatch.'] },
      { h2: 'Freight and returns',
        link: { lead: 'Because nothing here is a stock item, ', href: '/samples/', anchor: 'checking a sample before the run matters', tail: ' more than it would with catalogue packaging.' }, body: ['Freight is quoted separately from the packaging and depends on weight, volume and destination. We can split a single production run across several delivery points.', 'Because every order is manufactured to your specification, custom packaging is not returnable once produced to an approved proof. If an order arrives damaged or does not match the approved specification, contact us immediately and we will resolve it.'] },
    ],
    faqs: [
      { q: 'How long will my order take?', a: 'Production is 3 to 5 business days after artwork approval, plus transit. A first order typically takes four to six weeks end to end including specification and proofing.' },
      { q: 'Do you ship to all US states?', a: 'Yes, all fifty. Alaska and Hawaii take longer and cost more in freight, and we quote those routes individually.' },
      { q: 'How is freight calculated?', a: 'On weight or volume, whichever is greater, plus destination. Flat-packed formats cost less to ship than pre-assembled ones.' },
      { q: 'Can you deliver to a fulfilment centre?', a: 'Yes, and it is common. Send us the receiving requirements — most 3PLs have specific labelling, pallet height and booking rules.' },
      { q: 'Can delivery be split across addresses?', a: 'Yes. Tell us the split at quoting so freight is costed correctly rather than adjusted afterwards.' },
      { q: 'Can I stage delivery over time?', a: 'Yes. Production runs once at the volume price and stock is released in agreed instalments. Agree this at quoting since storage terms form part of it.' },
      { q: 'What if my order arrives damaged?', a: 'Contact us immediately with photographs of the damage and the packaging it arrived in. We will resolve it with the carrier and arrange replacement where appropriate.' },
      { q: 'Can I return custom packaging?', a: 'Custom packaging manufactured to an approved proof is not returnable, since it cannot be resold. Orders that do not match the approved specification are a different matter and we will put those right.' },
      { q: 'Do you offer expedited production?', a: 'Sometimes, depending on format and current capacity. Tell us the deadline at enquiry and we will say honestly whether it is achievable.' },
      { q: 'Will you tell me if the date is at risk?', a: 'Yes, as soon as we know. The date on your quote is the date we work to, and if something threatens it you hear from us first.' },
    ],
  }),

  P({
    slug: 'samples',
    title: 'Samples',
    h1: 'Packaging samples and prototypes',
    metaTitle: 'Packaging Samples | Structural and Printed',
    description: 'Plain structural samples, printed prototypes and production proofs — what each one tests, what it costs, and which one you actually need.',
    eyebrow: 'Samples',
    lede: 'A sample costs a fraction of a production run and catches the failures that are otherwise found several thousand units too late.',
    heroProduct: 'candle-boxes-with-insert',
    sections: [
      { h2: 'Three kinds of sample',
        link: { lead: 'Which one answers your question depends on what you are unsure about, and ', href: '/resources/packaging-sampling-guide/', anchor: 'the sampling guide walks through each', tail: '.' }, body: ['A plain structural sample is unprinted, cut on your actual dieline in your actual board grade. It answers the only question that matters early: does the real product fit, and does the pack close properly with it inside.', 'A printed prototype is produced digitally on the intended substrate with your artwork applied. It answers colour and finish questions a screen cannot.', 'A production proof is the final check before the run — content, layout and position, not a colour standard.'] },
      { h2: 'How to test a structural sample',
        link: { lead: 'If the product moves inside, the answer is usually a fitted cavity rather than a heavier box — see ', href: '/custom-packaging-inserts/', anchor: 'the packaging insert range', tail: '.' }, body: ['Put the actual product inside. Close it, lift it, shake it gently. Rattling means an insert is needed. A straining lid means the dieline is tight. Flimsiness with the product inside means the board grade is too light.', 'For anything shipping through a carrier, load it and drop it from about a metre onto a hard floor on several faces and corners. Corners fail first.'] },
      { h2: 'Cost and credit',
        link: { lead: 'Tooling carries forward rather than being charged twice, which is covered in ', href: '/resources/packaging-cost-factors/', anchor: 'the cost factors breakdown', tail: '.' }, body: ['Sample costs are normally credited against a production order that follows, which makes the real cost close to zero if you proceed. Tooling is the exception — if a sample needs a new cutting die, that cost carries forward to production rather than being duplicated.'] },
    ],
    faqs: [
      { q: 'How do I order a sample?', a: 'Send a quote request describing the product and the format you are considering. We will tell you which kind of sample answers your question and what it costs.' },
      { q: 'Are samples free?', a: 'Sample costs are normally credited against a production order that follows. We do not send free printed prototypes, since each one is individually produced.' },
      { q: 'How long do samples take?', a: 'Plain structural samples typically three to five business days. Printed prototypes five to eight. Production proofs one to three.' },
      { q: 'Can I get a sample with my artwork on it?', a: 'Yes, as a printed prototype. It is produced digitally on the intended substrate, so it approximates an offset production run rather than matching it exactly.' },
      { q: 'Do I need a sample for a reorder?', a: 'No, if the specification is unchanged. A minor artwork revision on a proven structure needs a proof but not a new structural sample.' },
      { q: 'Can you send a sample of a stock item?', a: 'Everything we make is cut to order, so there are no stock items. We can send a sample in a similar format and board grade to demonstrate material and finish.' },
      { q: 'What should I check on a printed prototype?', a: 'Colour against your brand standard, finish feel in the hand, artwork position relative to folds, and legibility of the regulated panel at actual size.' },
      { q: 'Does a sample need tooling?', a: 'A structural sample cut on your exact dieline needs the cutting die. That cost carries forward to your production order rather than being charged twice.' },
      { q: 'Can I test the pack in shipping?', a: 'Yes, and you should. Load a sample with the real product and put it through the actual shipping route if you can, or drop-test it if you cannot.' },
      { q: 'Will a digital proof show accurate colour?', a: 'No. Your screen and the press are different devices. For critical colour, ask for a proof on the actual substrate.' },
    ],
  }),

  P({
    slug: 'faqs',
    title: 'FAQs',
    h1: 'Custom packaging questions',
    metaTitle: 'Custom Packaging FAQs | Common Questions',
    description: 'Answers on minimums, lead times, materials, printing, artwork, samples, pricing, sustainability and delivery for custom retail packaging orders.',
    eyebrow: 'Answers',
    lede: 'The questions we are asked most, answered directly. Category and product pages carry their own more specific answers.',
    heroProduct: 'mailer-boxes',
    sections: [
      { h2: 'Where to find more detail',
        link: { lead: 'The reference guides are collected in ', href: '/resources/', anchor: 'the packaging resource hub', tail: '.' }, body: ['This page covers general questions. Every category page carries answers specific to that range, and every product page answers questions about that format — minimums, sizes, printing and lead times for that item specifically.', 'For technical specification questions, the resource hub holds reference guides on materials, box styles, printing methods, finishes, sizing and file requirements.'] },
    ],
    faqs: [
      { q: 'What is the minimum order quantity?', a: 'A flat 100 units on any format. Print method changes the unit price rather than the minimum — digital suits shorter runs, and offset or flexo take over on cost once volumes climb.' },
      { q: 'How much does custom packaging cost?', a: 'Prices start from $0.30 per piece for large-volume orders. Final pricing depends on size, material, printing, finishes, and quantity. We quote each project rather than publishing a price list.' },
      { q: 'How long does production take?', a: 'Most orders complete in 3 to 5 business days after artwork approval, plus transit. Hand-assembled rigid boxes and specialty finishes take longer. Every quote carries a confirmed date.' },
      { q: 'Can I order a custom size?', a: 'Yes. Everything is cut to order, so the formats listed are starting points rather than fixed sizes. We build a dieline around your product.' },
      { q: 'What materials can I choose?', a: 'Paperboard, kraft, corrugated, rigid greyboard, laminated barrier films, recycled grades and certified compostable stocks. The right one depends on product weight and how it ships.' },
      { q: 'Do you help with artwork?', a: 'Yes. We can build packaging artwork from a logo and brand direction, or adapt existing artwork onto a new dieline. Our prepress team also checks every file regardless of who created it.' },
      { q: 'Can I get a sample first?', a: 'Yes. A plain structural sample tests fit; a printed prototype tests colour and finish. Sample costs are normally credited against a production order.' },
      { q: 'Do you ship nationwide?', a: 'Yes, to all fifty states. Freight is quoted separately based on weight, volume and destination.' },
      { q: 'Can you produce recyclable or compostable packaging?', a: 'Yes. Recycled board, recyclable mono-material films and certified compostable stocks are all available. Those are three different claims, so tell us which one you intend to print on the pack.' },
      { q: 'Do you print inside boxes?', a: 'Yes, on mailers, folding cartons and rigid boxes. It matters most when the product does not fill the pack, since that is when the interior is visible at opening.' },
      { q: 'What happens if I need to reorder?', a: 'We hold your dieline, board specification, colour targets and approved artwork on file. Reorders skip most of prepress and reuse existing tooling at no further cost.' },
      { q: 'How do I start?', a: 'Send a quote request with your product dimensions, quantity and deadline. We reply with a specification, a lead time and a written price, usually within one business day.' },
    ],
  }),
]

/**
 * Closing bands, per page.
 *
 * The quote band, FAQ heading and CTA were fixed strings in the template, so
 * four identical headings appeared on all twelve info pages. The quote process
 * itself is unchanged on every page and stays worded as it is — what varies is
 * only what the page has just finished explaining, and therefore what it is
 * sensible to ask the reader for next.
 */
export interface InfoBands {
  eyebrow: string
  h2: string
  lede: string
  faqTitle: string
}

export const INFO_BANDS: Record<string, InfoBands> = {
  'about-us': {
    eyebrow: 'Start here',
    h2: 'Tell us what you are packing',
    lede: 'Send the product and the quantity. You get back a board grade, a structure, a print method and a written price — the same specification described above.',
    faqTitle: 'Questions buyers ask before working with us',
  },
  'how-it-works': {
    eyebrow: 'Stage one',
    h2: 'Start the process with a specification',
    lede: 'The six stages begin with your dimensions and quantity. Send those and we will come back with the specification that stage two prices.',
    faqTitle: 'Questions about the ordering process',
  },
  materials: {
    eyebrow: 'Material advice',
    h2: 'Not sure which substrate you need?',
    lede: 'Tell us the product weight and how far it travels. Material choice follows from those two answers more than from anything else.',
    faqTitle: 'Questions about packaging materials',
  },
  'printing-options': {
    eyebrow: 'Print advice',
    h2: 'Find out which print route fits your run',
    lede: 'Send the quantity and the number of colours. The crossover between digital and plate-based printing is the single biggest lever on your unit price.',
    faqTitle: 'Questions about packaging print methods',
  },
  'finishes-and-add-ons': {
    eyebrow: 'Finishing',
    h2: 'Price the finishes separately before you commit',
    lede: 'Each pass is quoted on its own, so you can see exactly what a soft-touch laminate or a foil block is costing you before deciding to keep it.',
    faqTitle: 'Questions about finishes and add-ons',
  },
  sustainability: {
    eyebrow: 'Environmental claims',
    h2: 'Tell us which claim you intend to print',
    lede: 'Recycled content, kerbside recyclability and certified compostability need different evidence. Say which one you are making and we will specify to it.',
    faqTitle: 'Questions about sustainable packaging claims',
  },
  'packaging-design-services': {
    eyebrow: 'Design',
    h2: 'Send us what you have so far',
    lede: 'A logo and a product is enough to start. We will tell you honestly whether the artwork you already hold can be adapted or needs rebuilding.',
    faqTitle: 'Questions about packaging design work',
  },
  'custom-printing': {
    eyebrow: 'Print',
    h2: 'Get your print route quoted',
    lede: 'Quantity, colours and substrate decide the method. Send those three and we will price the routes that genuinely apply rather than all of them.',
    faqTitle: 'Questions about custom packaging printing',
  },
  'artwork-guidelines': {
    eyebrow: 'Prepress',
    h2: 'Send artwork for a prepress check',
    lede: 'We check bleed, safe area, crease clearance and colour setup against the production dieline before any proof is issued. There is no charge for the check.',
    faqTitle: 'Questions about preparing packaging artwork',
  },
  'shipping-information': {
    eyebrow: 'Delivery',
    h2: 'Tell us where it has to land',
    lede: 'Destination, dock access and any fulfilment-centre rules change the freight quote more than the packaging does. Send them with your enquiry.',
    faqTitle: 'Questions about lead times and delivery',
  },
  samples: {
    eyebrow: 'Samples',
    h2: 'Request a sample before you commit',
    lede: 'A plain structural sample answers fit; a printed prototype answers colour. Sample costs are normally credited against the production order that follows.',
    faqTitle: 'Questions about samples and prototypes',
  },
  faqs: {
    eyebrow: 'Still unsure',
    h2: 'Ask us the question directly',
    lede: 'If your question is specific to a product or a deadline, a written answer against your actual specification will be more use than a general one.',
    faqTitle: 'Common questions about custom packaging',
  },
}
