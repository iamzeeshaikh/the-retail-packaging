---
title: How to Prepare Artwork for Custom Packaging
description: File setup for packaging print — dielines, bleed, colour mode, resolution, fonts and the export settings that stop artwork bouncing at prepress.
metaTitle: How to Prepare Artwork for Custom Packaging
publishDate: 2026-07-10
updatedDate: 2026-08-10
keyword: prepare artwork for packaging
heroProduct: custom-die-cut-stickers
heroAlt: Custom die cut stickers showing precise cut lines around printed artwork
---

Packaging artwork is not print artwork with a different outline. It is a flat file that has to survive being folded, glued, cut and sometimes wrapped around a curve, and the setup requirements reflect that.

Most files that get returned at prepress fail on one of six things. Working through them in order removes almost all the delay from a first order.

## Start from the supplied dieline

Ask your supplier for the dieline template before you begin. It arrives as a vector file with fold lines, cut lines, glue areas and panel labels already positioned for your exact dimensions.

Place it on its own layer and lock it. Build all artwork on layers beneath it so you can always see where the structure sits. Never redraw it by hand or rebuild it from measurements, because small discrepancies between your version and the production die produce misregistered folds.

The dieline must not print. Set its lines to a named spot colour such as "Dieline" or "CutContour" and mark that colour as non-printing in your export settings. Suppliers strip it out, but a clearly labelled layer removes any ambiguity about intent.

## Understand which panels are visible

A flat dieline gives no sense of what the customer sees. Before designing, work out which panel is the front, which faces up on a shelf, which is hidden by a glue lap, and which is only visible when the pack is opened.

This matters most on formats where the inside is part of the experience. On a mailer box the interior face is the first thing a customer sees when the lid lifts, which is why interior printing is worth budgeting for when the product does not fill the box.

On sleeves and wraps, work out where the seam falls and keep the main brand mark away from it.

## Apply bleed on every trim edge

Bleed is artwork extended past the cut line so a cutting variance never exposes unprinted board.

Folding cartons and labels typically need 3 mm. Rigid box wraps need much more, usually 15 mm, because the printed paper turns in around the greyboard edges. Pouches need bleed on all sides of the flat dieline including the gusset panels.

Extend the background artwork itself into the bleed area rather than adding a coloured block behind it, or you will get a visible line where the two meet.

## Hold critical content inside the safety margin

Keep text, logos and anything that must not be clipped at least 4 mm inside every trim and fold line. On smaller formats such as labels, 2 mm is sometimes acceptable, but tighter than that risks visible inconsistency between units.

Pay particular attention to fold lines. Content that crosses a crease distorts slightly at the fold and can look like a fault. Barcodes must never cross a fold.

## Set colour up the way it will print

Convert the document to CMYK. RGB files converted automatically at the press produce colour shifts that nobody intended.

If you are printing spot colours, define them as named spot swatches and use them consistently. Two swatches with slightly different names that look identical on screen will be separated as two plates and charged accordingly. Delete unused swatches before export.

Use a rich black build for large solid black areas rather than 100% K alone, which prints as a flat dark grey across a wide panel. Keep small text and thin rules as 100% K only, because four-colour small type shows registration fringing at the edges.

If your substrate is uncoated kraft or recycled board, expect colours to print warmer and less saturated. That is the material behaving normally, not a printing error. Request a proof on the real substrate if precise colour matters.

## Check resolution at placed size

Raster images need 300 dpi at the size they appear on the finished pack, not at their native size. Scaling an image up in the layout reduces its effective resolution proportionally.

Photography sourced from a website is almost always 72 dpi and will not print acceptably at any meaningful size. Product photography intended for packaging should be shot or supplied at print resolution from the start.

Logos and illustrations should remain vector wherever possible. If a logo only exists as a raster file, ask whether an original vector version can be recovered — it is worth the effort once and then never again.

## Handle fonts properly

Outline all fonts before export, or embed them fully. Outlining is safer because it removes any dependency on font availability or licensing at the production end.

Outline late in the process, not early, because outlined text can no longer be edited. Keep an editable master file and outline only on the export copy.

Watch minimum sizes. Positive text below about 6pt loses legibility on most packaging substrates, and reversed-out text below 8pt tends to fill in, particularly on uncoated stock and flexographic printing.

## Export a print-ready file

PDF/X-4 or PDF/X-1a are the usual choices for packaging. Both flatten transparency predictably and embed colour intent.

Include bleed in the export and add trim marks outside the bleed area. Do not include registration marks inside the artwork area or crop marks that overlap the design.

Check total ink coverage before exporting. Most presses cap total area coverage around 300%, and a design built by stacking dense colours can exceed that, producing set-off and slow drying. Design software can display total ink coverage as a separation preview.

Name the file clearly with the product, the size and a version. A file called "final-final-v3.pdf" is how the wrong version reaches press.

## What to send with the file

Alongside the artwork, send the finished dimensions, the substrate, the finish list and any spot colour references. If you have a Pantone target, state it explicitly rather than assuming the CMYK build communicates it.

If any element is critical — a specific brand colour, a legally required panel, an exact logo size — say so in the email. Prepress teams check a great many things, but they cannot know which of them you care about most.

Brands producing several SKUs on the same structure should confirm whether one dieline can serve all of them, since [keeping a single structural die across variants](/resources/packaging-cost-factors/) removes a tooling charge from every additional design.

## After approval

Once a proof is signed off, archive the approved file together with the dieline, board specification and colour targets. Reorders that reuse an approved file skip prepress almost entirely, which shortens the lead time and removes a whole category of risk from repeat production.
