import { S, type Place } from './types'

/** States, third group. */
export const statesC: Place[] = [
  S({
    slug: 'washington',
    name: 'Washington',
    variant: 'material-led',
    sections: ['climate', 'industries', 'overview', 'formats', 'checklist', 'logistics', 'ordering', 'nearby', 'resources'],
    keyword: 'custom packaging Washington state',
    h1: 'Damp-climate packaging for Washington brands',
    eyebrow: 'Washington · United States',
    lede: 'Washington buyers ask about recycled content more than any other state we ship to, and they store stock in a climate that punishes uncoated board. Those two facts sometimes pull in opposite directions.',
    metaTitle: 'Custom Packaging Washington | Recycled & Damp-Climate',
    metaDescription: 'Custom packaging for Washington coffee, outdoor, tech and food brands. Recycled stocks that still hold up in a damp climate, made to order from 100 units.',
    sectors: ['Coffee and specialty beverage', 'Outdoor and technical goods', 'Technology hardware', 'Food and seafood'],
    climate: {
      h: 'Recycled stock in a wet climate',
      body: [
        'Recycled paperboard has shorter fibres than virgin stock, which makes it slightly less stiff and slightly more absorbent at the same caliper. In a dry warehouse that difference is academic. In the Pacific Northwest, where ambient humidity stays high for much of the year, it becomes visible: a recycled carton stored uncoated through a Seattle winter will feel softer than a virgin one beside it.',
        'That does not mean choosing between recycled content and performance. It means specifying them together — a recycled board with a moisture-resistant coating, or a slightly heavier recycled caliper. Either keeps the environmental claim intact and the pack rigid.',
      ],
    },
    industries: {
      h: 'What Washington brands package',
      body: [
        'A coffee sector with national reach, technical outdoor goods and a hardware industry account for most enquiries.',
      ],
      items: [
        { name: 'Coffee and specialty beverage', detail: 'Bags, boxes and sleeves where barrier performance protects the product and recycled content carries the brand position. The two requirements have to be reconciled.' },
        { name: 'Outdoor and technical goods', detail: 'Packaging for equipment that customers expect to be minimal and recyclable, but that still has to survive a carrier network.' },
        { name: 'Technology hardware', detail: 'Device and accessory packaging with fitted inserts, where presentation and protection carry equal weight.' },
        { name: 'Food and seafood', detail: 'Processing and direct-ship operations needing moisture-resistant and cold-chain-capable formats.' },
      ],
    },
    overview: {
      h: 'Minimal packaging that still protects',
      body: [
        'Washington briefs ask for less packaging more often than briefs from anywhere else — no void fill, no plastic window, no unnecessary outer. That is a legitimate goal and usually achievable, but only if the pack is sized precisely to the product.',
        'Reducing material without reducing the gap between product and wall is how damage rates climb. The order of operations matters: size tightly first, then remove what is no longer needed.',
      ],
    },
    checklist: {
      h: 'Reconciling recycled content with performance',
      intro: 'Work through these before committing to a recycled specification.',
      items: [
        'Which claim you intend to print: recycled content, kerbside recyclable, or certified compostable.',
        'Whether the stock will be stored in a conditioned space or not.',
        'Whether a moisture-resistant coating would compromise the recyclability you are claiming.',
        'Whether a slightly heavier recycled caliper achieves the same result without a coating.',
        'Whether any window, laminate or closure undermines the recyclability of the whole pack.',
      ],
    },
    logistics: {
      h: 'Freight to the Pacific Northwest',
      body: [
        'Ground freight into Washington typically takes 4 to 7 business days, which is at the longer end of our national range simply because of distance. Seattle and Tacoma both take palletised deliveries without difficulty.',
        'The extra transit time is worth planning for rather than working around. If your reorder point is calculated on a national average lead time, it is probably a few days short for Washington.',
      ],
    },
    ordering: {
      h: 'Placing a Washington order',
      body: [
        'Tell us the environmental claim you want to make, because it constrains the material set before anything else does. We will say plainly if a claim is not supportable at your price point rather than letting it through.',
        'Send product dimensions rather than current box dimensions, especially if the brief is to reduce material.',
      ],
    },
    formats: {
      h: 'Ranges that suit Washington briefs',
      intro: 'Weighted toward recycled and barrier formats.',
      picks: [
        { slug: 'sustainable-packaging', why: 'Where most Washington enquiries start, and where the claims need care.' },
        { slug: 'custom-pouches', why: 'Barrier formats for coffee and specialty beverage.' },
        { slug: 'electronics-packaging', why: 'Fitted protection for the state’s hardware sector.' },
        { slug: 'custom-mailers', why: 'Minimal shipping formats for direct-to-consumer brands.' },
      ],
    },
    resources: [
      { href: '/sustainability/', anchor: 'which environmental claims hold up to scrutiny', note: 'The differences between recycled, recyclable and compostable.' },
      { href: '/resources/sustainable-packaging-guide/', anchor: 'where each sustainable option falls short', note: 'Honest about the trade-offs rather than selling the category.' },
    ],
    nearby: [
      { slug: 'seattle', why: 'Where most of the state’s coffee, tech and outdoor demand sits.' },
      { slug: 'california', why: 'The other West Coast market we ship into regularly.' },
      { slug: 'colorado', why: 'A comparable market for outdoor and technical goods.' },
    ],
    faqs: [
      { q: 'Does recycled board perform worse in a damp climate?', a: 'Slightly, at the same caliper. Recycled fibres are shorter, so the board is marginally less stiff and takes on moisture a little faster. In the Pacific Northwest that becomes noticeable over a winter of uncoated storage. A coating or a heavier caliper resolves it.' },
      { q: 'Will a moisture-resistant coating make my packaging non-recyclable?', a: 'Not necessarily. An aqueous coating generally keeps paper recyclable through kerbside collection; a plastic film laminate usually does not. If recyclability is the claim you intend to print, tell us and we will stay on the aqueous side.' },
      { q: 'Can you produce genuinely minimal packaging?', a: 'Yes, and it works best when the pack is sized tightly to the product first. Removing material from an oversized box raises damage rates. Reduce the gap, then reduce the material.' },
      { q: 'Do you have a facility in Washington?', a: 'No. We hold no premises in Washington. Production runs through our manufacturing partners and ships to your address.' },
      { q: 'How long does delivery to Seattle take?', a: 'Ground freight is typically 4 to 7 business days after the 3 to 5 business days of production. It is at the longer end of our range, so build that into your reorder point.' },
      { q: 'Can you supply barrier packaging for coffee?', a: 'Yes. Coffee needs an oxygen and moisture barrier to hold freshness, which constrains the material set considerably. We will be straightforward about where a barrier requirement and a recyclability claim conflict.' },
      { q: 'What is the minimum order for a Washington delivery?', a: 'A flat 100 units on any format. That is enough to run a recycled specification through a wet season as a storage test before committing.' },
      { q: 'Can you certify recycled content?', a: 'We can state the recycled content of the board we supply and provide the mill documentation behind it. We do not issue certifications ourselves, and we would rather give you the underlying evidence than a claim you cannot substantiate.' },
      { q: 'Is compostable packaging worth it?', a: 'Only if your customers can actually compost it. Certified compostable stock generally needs industrial facilities, which are not universally available. If kerbside recycling is the realistic route for your buyers, a recyclable stock does more good.' },
      { q: 'How much does sustainable packaging cost in Washington?', a: 'Recycled paperboard is usually within a few percent of conventional. Certified compostable runs materially higher. Prices start from $0.30 per piece at large volumes and we quote each option so you can see the real difference.' },
    ],
    cta: {
      h: 'Quote a Washington specification',
      body: 'Tell us the environmental claim you want to make and how the stock will be stored. We will specify a material that supports both.',
    },
  }),

  S({
    slug: 'arizona',
    name: 'Arizona',
    variant: 'material-led',
    sections: ['climate', 'overview', 'industries', 'demandTable', 'logistics', 'formats', 'ordering', 'resources', 'nearby'],
    keyword: 'custom packaging Arizona',
    h1: 'Packaging specified for Arizona heat and dry air',
    eyebrow: 'Arizona · United States',
    lede: 'Arizona is the opposite problem to Florida. Board does not soften here, it dries out — and dry board cracks at the crease instead of folding.',
    metaTitle: 'Custom Packaging Arizona | Heat & Low-Humidity Spec',
    metaDescription: 'Custom packaging for Arizona brands, specified for heat and dry air. Crack-resistant creasing, heat-stable coatings and made-to-order runs from 100 units.',
    sectors: ['Supplements and nutrition', 'Electronics and semiconductors', 'Food service', 'Outdoor and recreation'],
    climate: {
      h: 'Dry board cracks at the fold',
      body: [
        'Everyone expects heat to be the Arizona problem, and it is one — the same laminating adhesives that soften in a Texas warehouse soften here. But the more common failure is quieter. Paperboard held in very low humidity loses its natural moisture content and becomes less pliable, and a carton creased for normal conditions will crack along the fold instead of bending cleanly.',
        'It shows up at the point of assembly rather than in transit, which means it is usually your team that finds it, mid-run, with a deadline. Deeper creasing and a board with slightly higher residual moisture both help, and neither costs much when specified upfront.',
      ],
    },
    overview: {
      h: 'Both adjustments, or neither',
      body: [
        'Heat and dryness arrive together in Arizona, so the two adjustments usually belong together: a heat-stable coating and a crease specification suited to dry board. Specifying one without the other tends to trade one failure mode for the other.',
        'As always, this only matters where the pack actually experiences those conditions. Conditioned storage removes both problems.',
      ],
    },
    industries: {
      h: 'Arizona’s packaging demand',
      body: [
        'A large supplement sector and a semiconductor cluster around Phoenix generate most of what we quote.',
      ],
      items: [
        { name: 'Supplements and nutrition', detail: 'Cartons with substantial regulatory copy, usually stored in bulk and assembled in batches — which is exactly where crease cracking shows up.' },
        { name: 'Electronics and semiconductors', detail: 'Component and device packaging with fitted inserts, often with electrostatic and cleanliness requirements alongside the structural ones.' },
        { name: 'Food service', detail: 'Cups, carriers and takeaway formats across a hospitality sector that runs year-round.' },
        { name: 'Outdoor and recreation', detail: 'Equipment packaging for a market where products are frequently displayed outdoors or in unconditioned retail space.' },
      ],
    },
    demandTable: {
      h: 'Arizona adjustments by format',
      intro: 'What we change, and when it is unnecessary.',
      head: ['Format', 'Risk in Arizona conditions', 'Adjustment'],
      rows: [
        ['Folding cartons', 'Cracking at the crease during assembly', 'Deeper crease profile, higher-moisture board'],
        ['Laminated cartons', 'Adhesive softening above 100°F', 'Heat-stable adhesive or aqueous coating'],
        ['Corrugated shippers', 'Generally unaffected', 'No change required'],
        ['Labels', 'Edge lift on hot surfaces', 'High-temperature adhesive'],
        ['Conditioned-storage stock', 'None', 'Standard specification'],
      ],
    },
    logistics: {
      h: 'Freight into Arizona',
      body: [
        'Ground delivery into Arizona typically takes 3 to 6 business days. Phoenix takes palletised freight easily; Tucson and the smaller markets can add a day.',
        'Summer delivery timing is worth a thought. A trailer sitting in a Phoenix yard in July gets very hot, so if you are receiving laminated stock in high summer, arranging a morning delivery slot is a small thing that helps.',
      ],
    },
    ordering: {
      h: 'Getting the Arizona specification right',
      body: [
        'Tell us how the cartons will be assembled — by hand in batches, or on an automatic erector. Crease behaviour matters far more on hand assembly, where a cracked fold is discovered one carton at a time.',
        'Also tell us whether storage is conditioned. If it is, both adjustments become unnecessary and we will not charge you for them.',
      ],
    },
    formats: {
      h: 'Ranges suited to Arizona',
      intro: 'Supplement and electronics formats lead here.',
      picks: [
        { slug: 'wellness-packaging', why: 'Supplement cartons, the largest Arizona category we quote.' },
        { slug: 'electronics-packaging', why: 'Fitted protection for the semiconductor and device sector.' },
        { slug: 'custom-printed-cups', why: 'Year-round food-service volume.' },
        { slug: 'custom-packaging-inserts', why: 'Component protection where geometry drives the design.' },
      ],
    },
    resources: [
      { href: '/materials/', anchor: 'how board moisture content affects folding', note: 'The mechanism behind crease cracking.' },
      { href: '/resources/dieline-and-artwork-guide/', anchor: 'where creases sit on a dieline', note: 'Useful when a crease profile needs adjusting.' },
    ],
    nearby: [
      { slug: 'phoenix', why: 'Where the supplement and semiconductor demand concentrates.' },
      { slug: 'california', why: 'The nearest large market and a common onward destination.' },
      { slug: 'colorado', why: 'Comparable dry-climate considerations at altitude.' },
    ],
    faqs: [
      { q: 'Why do my cartons crack when we fold them?', a: 'Usually because the board has dried out. Paperboard held in very low humidity loses residual moisture and becomes less pliable, so it cracks along a crease profiled for normal conditions instead of bending. A deeper crease and a board with higher residual moisture both fix it.' },
      { q: 'Does Arizona heat affect laminated packaging?', a: 'Yes, the same way it does in Texas. Above roughly 100°F some laminating adhesives soften and stacked cartons can bond where the film touches. A heat-stable adhesive or an aqueous coating avoids it.' },
      { q: 'Do I need both the heat and the dryness adjustment?', a: 'If the stock sits in unconditioned space, usually yes — the two conditions arrive together here, and fixing one leaves the other. In conditioned storage neither is necessary and we will not specify them.' },
      { q: 'Do you have a facility in Arizona?', a: 'No. We hold no premises in the state. Production runs through our manufacturing partners and ships to your Arizona address.' },
      { q: 'How long does delivery to Phoenix take?', a: 'Ground freight is typically 3 to 6 business days after production. Phoenix takes palletised deliveries easily; Tucson and smaller markets can add a day.' },
      { q: 'Does hand assembly change the specification?', a: 'It changes how much crease cracking costs you. On an automatic erector a marginal crease produces a scrap rate; by hand it produces a slow, frustrating afternoon. We specify more conservatively for hand assembly.' },
      { q: 'What is the minimum order for an Arizona delivery?', a: 'A flat 100 units on any format, which is a sensible quantity for testing a crease profile before committing to a full run.' },
      { q: 'Can you supply packaging with electrostatic protection?', a: 'We can specify board and liners appropriate for electronics handling. Tell us the exact requirement your process operates under, since it varies considerably between component types.' },
      { q: 'Will labels stay on in Arizona heat?', a: 'General-purpose label adhesive can lift at the edges on a hot surface. If labels are applied to product that will sit in heat, we specify a high-temperature adhesive.' },
      { q: 'How much does custom packaging cost in Arizona?', a: 'From $0.30 per piece at large volumes. The climate adjustments add very little — a crease profile change costs nothing, and a heat-stable adhesive is a small premium.' },
    ],
    cta: {
      h: 'Specify an Arizona run',
      body: 'Tell us how the cartons are assembled and whether storage is conditioned. We will set the crease profile and coating accordingly.',
    },
  }),

  S({
    slug: 'massachusetts',
    name: 'Massachusetts',
    variant: 'industry-led',
    sections: ['industries', 'overview', 'checklist', 'formats', 'demandTable', 'logistics', 'ordering', 'nearby', 'resources'],
    keyword: 'custom packaging Massachusetts',
    h1: 'Packaging for Massachusetts biotech, education and specialty food',
    eyebrow: 'Massachusetts · United States',
    lede: 'Massachusetts sends us more packaging briefs with a technical specification attached than almost anywhere else, and a great many of them are for quantities under a thousand.',
    metaTitle: 'Custom Packaging Massachusetts | Biotech & Specialty',
    metaDescription: 'Custom packaging for Massachusetts biotech, university and specialty food buyers. Short technical runs, fitted inserts and documented specifications.',
    sectors: ['Biotech and life sciences', 'Higher education and research', 'Specialty food', 'Consumer technology'],
    industries: {
      h: 'A research economy buys packaging differently',
      body: [
        'The Boston and Cambridge cluster generates packaging demand that looks unlike a consumer market: small quantities, precise requirements, and buyers who are comfortable specifying in detail.',
      ],
      items: [
        { name: 'Biotech and life sciences', detail: 'Kit boxes, sample transport packaging and instrument protection. Fitted inserts do the real work; the outer is often deliberately plain.' },
        { name: 'Higher education and research', detail: 'Short-run packaging for equipment, teaching kits and departmental projects, usually against a fixed academic calendar.' },
        { name: 'Specialty food', detail: 'A dense independent food scene ordering small runs with frequent seasonal changes.' },
        { name: 'Consumer technology', detail: 'Device and accessory packaging where a fitted insert and a clean unboxing carry the brand.' },
      ],
    },
    overview: {
      h: 'Short runs with real specifications',
      body: [
        'The combination that defines Massachusetts work is a demanding technical requirement at a quantity too small to amortise tooling. That is workable, but it changes which decisions are expensive: a custom die is a fixed cost that hurts at 300 units and disappears at 30,000.',
        'Where we can, we will suggest a stock structure with a custom insert rather than a bespoke outer die. You get the fit you need and avoid paying for tooling that a short run cannot absorb.',
      ],
    },
    checklist: {
      h: 'Specifying a short technical run',
      intro: 'What genuinely changes the price at low quantities.',
      items: [
        'Whether a stock outer with a custom insert would meet the requirement instead of a bespoke die.',
        'Whether the insert needs to hold the item during transit, or only present it on opening.',
        'Whether the quantity is genuinely fixed, or whether a larger run would be used eventually.',
        'Whether print is needed on the outer at all, or only on the insert or a label.',
        'Whether the specification must be documented for repeat ordering later.',
      ],
    },
    demandTable: {
      h: 'Where the cost sits on a short run',
      intro: 'At Massachusetts quantities the usual cost hierarchy inverts.',
      head: ['Element', 'At 300 units', 'At 30,000 units'],
      rows: [
        ['Custom die tooling', 'A large share of unit cost', 'Negligible per unit'],
        ['Print plates', 'Avoid — use digital', 'Cheaper than digital'],
        ['Board grade', 'Minor difference', 'A major cost lever'],
        ['Fitted insert', 'Worth it — solves fit cheaply', 'Worth it — reduces damage'],
        ['Applied finishes', 'Per-unit labour dominates', 'Amortised across the run'],
      ],
    },
    logistics: {
      h: 'Delivering into Greater Boston',
      body: [
        'Ground freight into Massachusetts typically takes 2 to 4 business days. Most of the state takes palletised delivery without difficulty.',
        'Boston and Cambridge receiving is the exception worth flagging. University and lab buildings frequently have restricted access, central receiving departments and delivery windows. Tell us the receiving arrangement at quoting and we will size the consignment to fit it.',
      ],
    },
    ordering: {
      h: 'Quoting a Massachusetts brief',
      body: [
        'Send the item geometry and the quantity. For technical work the geometry is the brief — everything else follows from what has to be held and how firmly.',
        'If a purchase order process is involved, tell us early. We can supply a formal written specification and price that fits a procurement workflow rather than an informal quote.',
      ],
    },
    formats: {
      h: 'Ranges that fit Massachusetts work',
      intro: 'Protective and short-run formats lead.',
      picks: [
        { slug: 'custom-packaging-inserts', why: 'The core of most technical briefs here — fit does the work.' },
        { slug: 'custom-gift-boxes', why: 'Rigid presentation structures for kits and short-run projects.' },
        { slug: 'electronics-packaging', why: 'Device and accessory protection for the consumer technology sector.' },
        { slug: 'custom-food-packaging', why: 'Small-batch formats for the independent food scene.' },
      ],
    },
    resources: [
      { href: '/resources/packaging-insert-guide/', anchor: 'choosing between foam, board and moulded inserts', note: 'The decision that carries most technical briefs.' },
      { href: '/samples/', anchor: 'testing fit before a short run commits', note: 'Cheap insurance when there is no second run.' },
    ],
    nearby: [
      { slug: 'boston', why: 'Where the research and specialty food demand concentrates.' },
      { slug: 'new-york', why: 'The nearest large market for short high-finish work.' },
      { slug: 'new-jersey', why: 'An overlapping life-sciences cluster on the same corridor.' },
    ],
    faqs: [
      { q: 'Is a custom die worth it at 300 units?', a: 'Usually not. Tooling is a fixed cost that barely registers at 30,000 units and dominates at 300. We will normally propose a stock outer with a custom-cut insert, which gives you the fit without the tooling.' },
      { q: 'Can you supply packaging for laboratory kits?', a: 'Yes. Kit packaging is an insert problem — the components dictate the compartment layout, and the outer follows. Send a component list with dimensions, or a sample kit, and we will design around it.' },
      { q: 'Can you work with a university purchase order process?', a: 'Yes. We can supply a formal written specification and price suited to a procurement workflow, including line-item detail, rather than an informal quote.' },
      { q: 'Do you have premises in Massachusetts?', a: 'No. We hold no office, plant or warehouse in the state. Production runs through our manufacturing partners and ships to your address.' },
      { q: 'How do deliveries to Boston lab buildings work?', a: 'Many have central receiving, restricted access and fixed delivery windows. Tell us the arrangement at quoting and we will size the consignment to suit — often cartons rather than a pallet.' },
      { q: 'What is the minimum order in Massachusetts?', a: 'A flat 100 units on any format, which suits the short-run pattern here better than most states.' },
      { q: 'Should the insert hold the item or just present it?', a: 'It is worth deciding explicitly, because the answers differ. A transit insert grips the item firmly and may be invisible; a presentation insert seats it loosely and is part of what the recipient sees. Trying to do both usually compromises one.' },
      { q: 'Can you document a specification for reordering later?', a: 'Yes. We hold board, structure, insert geometry, print method and dimensions against your account so a later reorder references the same specification rather than being re-derived.' },
      { q: 'How long does a short technical run take?', a: 'Production is 3 to 5 business days after artwork approval, plus 2 to 4 days freight. Custom-cut inserts can add a stage, and we will tell you if they do.' },
      { q: 'How much does short-run technical packaging cost?', a: 'Prices start from $0.30 per piece at large volumes, but a 300-unit technical run sits well above that. The insert and any tooling drive the figure far more than the board does.' },
    ],
    cta: {
      h: 'Quote a Massachusetts project',
      body: 'Send the item geometry and the quantity. We will tell you whether a stock outer with a custom insert beats a bespoke die at your volume.',
    },
  }),

  S({
    slug: 'tennessee',
    name: 'Tennessee',
    variant: 'distribution-led',
    sections: ['logistics', 'overview', 'industries', 'demandTable', 'formats', 'ordering', 'nearby', 'resources'],
    keyword: 'custom packaging Tennessee',
    h1: 'Packaging for Tennessee’s air-freight and music economies',
    eyebrow: 'Tennessee · United States',
    lede: 'Memphis is one of the world’s busiest air-cargo hubs, and air freight rewards different packaging decisions to road freight. Weight matters more than it does anywhere else we ship.',
    metaTitle: 'Custom Packaging Tennessee | Air Freight & Merch',
    metaDescription: 'Custom packaging for Tennessee shippers, music merchandise and food brands. Lightweight structures for air freight, plus fast Memphis and Nashville delivery.',
    sectors: ['Air freight and logistics', 'Music and entertainment merchandise', 'Healthcare distribution', 'Food and beverage'],
    logistics: {
      h: 'When packaging weight becomes the cost',
      body: [
        'Memphis handles enormous air-cargo volume, and a meaningful share of Tennessee packaging demand comes from operations that ship by air. That inverts one of the usual rules: on the road, a heavier board is cheap insurance, but on air freight every gram is billed on every parcel, every time.',
        'The right answer is rarely simply lighter board. It is a fitted insert that holds the product still, which allows a lighter outer without raising damage rates. The insert adds a little weight in one place and removes more from another.',
      ],
    },
    overview: {
      h: 'Designing for the billing method',
      body: [
        'Before we specify anything for a Tennessee shipper, we ask how the freight is billed. Air freight charges on actual or volumetric weight, whichever is greater; road freight is far less sensitive. The same product can justify two quite different packs depending on the answer.',
        'If you ship both ways, tell us the split. It is often worth optimising for whichever channel carries the majority and accepting a slight inefficiency on the other, rather than compromising both.',
      ],
    },
    industries: {
      h: 'What Tennessee ships',
      body: [
        'Logistics dominates, with a distinctive merchandise sector alongside it.',
      ],
      items: [
        { name: 'Air freight and logistics', detail: 'Operations where packaging weight is a recurring line cost rather than a one-off decision.' },
        { name: 'Music and entertainment merchandise', detail: 'Nashville generates constant merchandise and promotional packaging, usually short runs tied to tour or release dates.' },
        { name: 'Healthcare distribution', detail: 'Distribution operations needing protective packaging with documented specifications.' },
        { name: 'Food and beverage', detail: 'Regional producers and a substantial hospitality sector across Nashville and Memphis.' },
      ],
    },
    demandTable: {
      h: 'Road freight versus air freight decisions',
      intro: 'The same product, two different specifications.',
      head: ['Decision', 'Optimised for road', 'Optimised for air'],
      rows: [
        ['Outer board grade', 'Heavier — cheap protection', 'Lighter — weight is billed'],
        ['Void fill', 'Acceptable', 'Avoid — pays for air'],
        ['Fitted insert', 'Optional', 'Usually worth it'],
        ['Pack dimensions', 'Matters', 'Matters more — volumetric billing'],
        ['Outer print', 'Free choice', 'Free choice, no weight effect'],
      ],
    },
    ordering: {
      h: 'Quoting a Tennessee run',
      body: [
        'Tell us how the parcels are billed and what your current damage rate is. Those two numbers decide the trade-off between weight and protection more reliably than any general rule.',
        'For merchandise work tied to a tour or release, give us the date. Production is 3 to 5 business days after approval and we will work backwards from your deadline.',
      ],
    },
    formats: {
      h: 'Ranges that fit Tennessee demand',
      intro: 'Shipping-led formats, plus merchandise.',
      picks: [
        { slug: 'custom-mailers', why: 'The core format for air and ground shippers alike.' },
        { slug: 'custom-packaging-inserts', why: 'How you get a lighter outer without more damage.' },
        { slug: 'promotional-packaging', why: 'Merchandise and press packaging against fixed release dates.' },
        { slug: 'custom-apparel-packaging', why: 'Tour and band merchandise, which is largely apparel.' },
      ],
    },
    resources: [
      { href: '/resources/packaging-insert-guide/', anchor: 'trading outer board for a fitted insert', note: 'The mechanism behind cutting weight without cutting protection.' },
      { href: '/resources/custom-packaging-size-guide/', anchor: 'volumetric weight and pack dimensions', note: 'Why a slightly smaller box changes an air freight bill.' },
    ],
    nearby: [
      { slug: 'georgia', why: 'The neighbouring Southeast freight hub.' },
      { slug: 'north-carolina', why: 'Comparable regional demand on the same corridors.' },
      { slug: 'missouri', why: 'Another central distribution market we ship into.' },
    ],
    faqs: [
      { q: 'How do I cut packaging weight without raising damage?', a: 'Add a fitted insert and lighten the outer. Most damage comes from the product moving inside the box rather than the box failing, so holding the product still lets you drop a board grade. The insert weighs less than the board you remove.' },
      { q: 'Does air freight really change the specification?', a: 'Yes, substantially. Air freight bills on actual or volumetric weight, whichever is greater, on every parcel. A heavier board that is sensible insurance on the road becomes a recurring cost in the air.' },
      { q: 'What if I ship by both road and air?', a: 'Tell us the split. It is usually better to optimise for whichever channel carries the majority and accept a small inefficiency on the other than to compromise both with a middle specification.' },
      { q: 'Do you have a facility in Memphis or Nashville?', a: 'No. We hold no premises in Tennessee. Production runs through our manufacturing partners and ships to your address.' },
      { q: 'How quickly can packaging reach Nashville?', a: 'Ground freight is typically 2 to 4 business days after the 3 to 5 business days of production. Both Nashville and Memphis take palletised freight easily.' },
      { q: 'Can you produce merchandise packaging for a tour date?', a: 'Yes. Give us the date rather than asking for a lead time and we will tell you the latest artwork approval that still lands in time.' },
      { q: 'What is the minimum order in Tennessee?', a: 'A flat 100 units on any format, which suits short merchandise runs tied to a single event.' },
      { q: 'Is void fill a problem for air freight?', a: 'It is, twice over. It adds weight and it usually means the box is larger than it needs to be, which raises the volumetric charge. A correctly sized box with an insert is almost always cheaper to fly.' },
      { q: 'Can you supply plain outers with printed inserts?', a: 'Yes, and for shipping-led work it often makes sense. The outer only has to protect; the branded experience happens when the box is opened.' },
      { q: 'How much does custom packaging cost in Tennessee?', a: 'From $0.30 per piece at large volumes. For air shippers the unit price is only part of the calculation — the recurring freight saving from a lighter, tighter pack usually matters more.' },
    ],
    cta: {
      h: 'Quote a Tennessee shipper',
      body: 'Tell us how your parcels are billed and your current damage rate. We will balance weight against protection and price it.',
    },
  }),

  S({
    slug: 'indiana',
    name: 'Indiana',
    variant: 'demand-led',
    sections: ['demandTable', 'industries', 'overview', 'logistics', 'checklist', 'formats', 'ordering', 'nearby', 'resources'],
    keyword: 'custom packaging Indiana',
    h1: 'Protective packaging for Indiana manufacturing and pharma',
    eyebrow: 'Indiana · United States',
    lede: 'Indiana packaging briefs are dominated by things that must not arrive broken. Presentation matters, but it comes second to whether the contents survive.',
    metaTitle: 'Custom Packaging Indiana | Protective & Pharma',
    metaDescription: 'Custom packaging for Indiana manufacturers, pharmaceutical and RV industry buyers. Fitted inserts, heavy-duty corrugated and documented specifications.',
    sectors: ['Pharmaceutical manufacturing', 'Recreational vehicles and components', 'Industrial manufacturing', 'Agriculture and food processing'],
    demandTable: {
      h: 'What Indiana needs protected',
      intro: 'The protective requirement usually decides the whole specification.',
      head: ['Sector', 'What is being protected', 'How we usually solve it'],
      rows: [
        ['Pharmaceutical', 'Vials, devices and documentation', 'Fitted inserts plus controlled artwork'],
        ['RV and components', 'Large, heavy, awkward parts', 'Heavy-duty corrugated with edge protection'],
        ['Industrial manufacturing', 'Machined components', 'Geometry-specific inserts'],
        ['Agriculture and food', 'Bulk product and processed goods', 'Moisture-resistant board and stacking strength'],
      ],
    },
    industries: {
      h: 'Indiana’s industrial mix',
      body: [
        'A significant pharmaceutical manufacturing base sits alongside heavy industry and the country’s main recreational-vehicle cluster.',
      ],
      items: [
        { name: 'Pharmaceutical manufacturing', detail: 'Cartons, inserts and leaflets with version control and a documented approval trail as standard requirements.' },
        { name: 'Recreational vehicles and components', detail: 'Northern Indiana carries the national RV industry. Parts are large, heavy and irregular, which makes edge protection and stacking strength the governing constraints.' },
        { name: 'Industrial manufacturing', detail: 'Machined components where the insert has to match the part geometry precisely.' },
        { name: 'Agriculture and food processing', detail: 'Bulk and processed goods needing moisture resistance and predictable stacking behaviour.' },
      ],
    },
    overview: {
      h: 'Protection is cheaper than replacement',
      body: [
        'For most Indiana briefs the useful calculation is not the unit price of the pack but the cost of the item inside it. A machined component or a pharmaceutical device is worth many multiples of its packaging, so a specification that reduces damage by a few percent usually pays for itself immediately.',
        'That said, over-specification is real waste. The way through is to know your actual damage rate. If you have one, send it — it tells us whether to spend on board, on an insert, or on nothing at all because the current pack is already working.',
      ],
    },
    checklist: {
      h: 'Specifying protection for heavy or irregular parts',
      intro: 'What we need to know before recommending a structure.',
      items: [
        'The weight of the item and whether it has a natural flat face.',
        'Whether any edges or corners are the vulnerable point.',
        'How high the packs will be stacked, and for how long.',
        'Whether the pack is handled by forklift, by hand, or both.',
        'Your current damage rate and where in the journey the damage happens.',
      ],
    },
    logistics: {
      h: 'Central corridors, straightforward freight',
      body: [
        'Ground freight into Indiana typically takes 2 to 4 business days. The state sits on major national corridors and Indianapolis in particular is an easy destination for palletised consignments.',
        'For heavy-duty corrugated the constraint is more often storage than transit. Flat-packed heavy board takes considerable space, so tell us your capacity and we can schedule phased deliveries.',
      ],
    },
    ordering: {
      h: 'Quoting Indiana work',
      body: [
        'Send the item weight and geometry, your stacking arrangement, and a damage rate if you have one. Those three answers cover most of what we need.',
        'For pharmaceutical work, tell us upfront what documentation your quality system requires so the approval trail is built alongside the job.',
      ],
    },
    formats: {
      h: 'Ranges suited to Indiana',
      intro: 'Protective formats dominate.',
      picks: [
        { slug: 'custom-packaging-inserts', why: 'Geometry-specific protection, the core of most briefs here.' },
        { slug: 'pharmaceutical-packaging', why: 'Where documented version control is part of the specification.' },
        { slug: 'custom-mailers', why: 'For components shipped individually rather than palletised.' },
        { slug: 'electronics-packaging', why: 'Fitted protection for sensitive assemblies.' },
      ],
    },
    resources: [
      { href: '/resources/packaging-insert-guide/', anchor: 'matching an insert to an irregular part', note: 'Where protective specifications usually start.' },
      { href: '/materials/', anchor: 'flute grades and what each one carries', note: 'The board comparison for heavy contents.' },
    ],
    nearby: [
      { slug: 'indianapolis', why: 'The state’s main commercial and distribution centre.' },
      { slug: 'illinois', why: 'The adjacent distribution hub most freight routes through.' },
      { slug: 'ohio', why: 'A comparable manufacturing market with overlapping supply chains.' },
    ],
    faqs: [
      { q: 'How do I decide between a heavier board and a fitted insert?', a: 'Look at where the damage happens. If boxes arrive crushed, the board is under-specified. If boxes arrive intact but contents are damaged, the product is moving inside and an insert is the answer. The second case is far more common.' },
      { q: 'Can you package large, irregular components?', a: 'Yes. Irregular items are an insert and edge-protection problem rather than a box problem. Send drawings, weight and the vulnerable points and we will specify around the geometry.' },
      { q: 'Can you supply pharmaceutical packaging with an audit trail?', a: 'Yes. We issue dated proofs against a revision number and retain the approval record where your quality system requires it. Tell us at quoting so the documentation is generated alongside the job.' },
      { q: 'Do you have a plant in Indiana?', a: 'No. We hold no premises in the state. Production runs through our manufacturing partners and ships to your Indiana address.' },
      { q: 'How long does delivery to Indianapolis take?', a: 'Ground freight is typically 2 to 4 business days after the 3 to 5 business days of production. Indianapolis is an easy destination for palletised freight.' },
      { q: 'What board grade do I need for heavy parts?', a: 'It depends on weight, stack height and how long stock sits. Send those three numbers rather than asking for a flute grade — the same flute can be right or badly wrong depending on the load above it.' },
      { q: 'What is the minimum order in Indiana?', a: 'A flat 100 units on any format. For protective work that is usually enough to trial a structure against your actual handling process before committing.' },
      { q: 'Can you phase deliveries of bulky corrugated?', a: 'Yes. Heavy-duty corrugated takes considerable space even flat-packed, and buyers routinely underestimate it. Tell us your storage capacity and we will schedule drops around it.' },
      { q: 'Can you match an existing qualified pack?', a: 'Yes. Send the current specification or a physical sample and we will quote to match it, rather than proposing an alternative you would have to requalify against your handling process.' },
      { q: 'How much does protective packaging cost in Indiana?', a: 'From $0.30 per piece at large volumes for simpler formats. Heavy-duty corrugated and custom inserts sit above that, and the right comparison is against the value of what they protect.' },
    ],
    cta: {
      h: 'Quote an Indiana specification',
      body: 'Send the item weight, geometry and your damage rate. We will tell you whether the fix is board, an insert, or nothing at all.',
    },
  }),
]
