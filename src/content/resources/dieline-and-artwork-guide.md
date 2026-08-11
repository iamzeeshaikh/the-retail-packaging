---
title: Dieline and Artwork Guide
description: How to work on a packaging dieline, set bleed and safety margins, handle colour and fonts, and export a print-ready file that passes prepress first time.
metaTitle: Dieline and Artwork Guide | Packaging Files
publishDate: 2026-05-24
updatedDate: 2026-08-11
keyword: dieline and artwork
kind: howto
order: 60
heroProduct: custom-die-cut-stickers
heroAlt: Die cut stickers showing the cut path around printed artwork
faqs:
  - q: Why can I not just design on a rectangle and send that?
    a: A dieline carries information a rectangle does not — which panel faces front, where the glue lap hides artwork, where creases fall, and where the safe area runs. Artwork built without it routinely places something important under a lap or across a fold, and that is only discovered at proof.
  - q: How much bleed do I need?
    a: 3 mm past every trim edge is the working standard for folding cartons; corrugated needs more because cutting variance is greater. The reason is mechanical — cutting is never perfect, and without bleed a millimetre of drift exposes bare board along an edge.
  - q: What is a safety margin and how far in should content sit?
    a: It is the distance critical content is held inside trim and fold lines, typically 4 mm. Anything closer risks being trimmed off or landing on a crease, where it distorts. Backgrounds can run to bleed; text and barcodes cannot.
  - q: Should I outline fonts or embed them?
    a: Either works, and outlining is safer. Embedded fonts can fail to resolve on a different system; outlined type cannot. The trade is that outlined text can no longer be corrected without going back to the original file, so keep an editable master.
  - q: What file format should I export?
    a: PDF/X-4 or PDF/X-1a, with bleed included, trim marks outside the bleed area, and the dieline layer excluded from output. Name it with product, size and version — a file called final-v3 is how the wrong version reaches press.
  - q: Can a graphic cross a fold line?
    a: A background colour or a bold graphic device can. Type, barcodes and fine rules cannot — board compresses and stretches slightly at a crease, so anything that has to be read distorts. The working rule is that anything requiring legibility stays off the fold.
  - q: What is trapping and do I need to worry about it?
    a: A slight overlap between adjacent colours that hides registration variance, so a hairline of bare board never appears between them. Prepress normally handles it, but it is worth knowing about if you are supplying separated artwork.
  - q: Why is my logo blurry when the file looked fine?
    a: Almost always a raster logo rather than a vector one — commonly a PNG pulled from a website. It looks correct on screen and has soft edges at print size that no processing recovers. Logos should always be supplied as vector.
  - q: What should I name the file?
    a: Product, size and version — for example lipstick-carton-45x45x90-v2.pdf. A file called final-v3 is genuinely how the wrong version reaches press, and it is the most expensive prepress error because nothing about it is technically faulty.
  - q: What is the safety margin for?
    a: Holding critical content away from trim and fold lines, typically 4 mm. Cutting is never perfectly accurate, so content closer than that risks being trimmed off or landing on a crease. Backgrounds can run to bleed; text and barcodes cannot.
---

A dieline is the flat blueprint of a pack. Every fold, cut, glue tab and panel is positioned on it, and artwork built anywhere else will not fit.

## Working on the template

Request the dieline before designing. Place it on its own locked layer and build artwork beneath it.

Never rebuild it from measurements. Small discrepancies between your version and the production die produce misregistered folds, and the error is only visible after the run.

Set the dieline to a named spot colour such as "Dieline" or "CutContour" and mark it non-printing at export.

## Bleed and safety

| Format | Bleed | Safety margin |
|---|---|---|
| Folding carton | 3 mm | 4 mm from trim and folds |
| Rigid box wrap | 15 mm | 10 mm from corners |
| Label | 2 – 3 mm | 2 mm inside the die |
| Pouch | 3 – 5 mm including gussets | 5 mm from seals |
| Sticker | 3 mm outside cut line | 2 mm inside |

Extend the actual background artwork into the bleed rather than adding a coloured block behind it, or a visible seam appears where the two meet.

## Colour setup

Convert to CMYK. Define spot colours as named swatches used consistently — two similarly named swatches separate as two plates and are charged as two.

Use a rich black build for large solid areas rather than 100% K alone, which prints as flat grey across a wide panel. Keep small text and thin rules 100% K only, because four-colour small type shows registration fringing.

Check total ink coverage stays within the press limit, usually around 300%.

## Images and fonts

Raster images need 300 dpi at placed size, not original size. Scaling up in the layout reduces effective resolution proportionally.

Outline all fonts before export, or embed them fully. Outline late so the master file stays editable.

Keep positive text above 6pt and reversed-out text above 8pt. Below that, ink spread fills in counters, particularly on uncoated stock.

## Barcodes

Place on a flat panel, never across a fold or a curve. Keep at or above 80% of nominal size. Print dark on light with a clear quiet zone. Red on white does not scan reliably; light bars on dark do not scan at all.

## Export

PDF/X-4 or PDF/X-1a. Include bleed, add trim marks outside the bleed area, exclude the dieline layer from output.

Name the file with product, size and version. A file called "final-v3" is how the wrong version reaches press.

## Pre-flight checklist

- Fonts outlined or embedded
- Images 300 dpi at placed size, CMYK
- Bleed on every trim edge
- Critical content inside safety margins
- Dieline on a separate non-printing layer
- Unused swatches deleted
- Overprint settings checked, especially on white objects
- Total ink coverage within limit

Once approved, archive the print file alongside the dieline, board specification and colour targets. Reorders that reuse an approved file skip most of prepress, which is set out further in our [file requirements reference](/resources/packaging-file-requirements/).

## What prepress actually checks

Sending a file is not the end of the process. Prepress runs it against a fixed set of mechanical checks before a proof is issued, and knowing what they are lets you clear most of them yourself.

**Resolution at placed size.** A 300 dpi image scaled up to 200% is a 150 dpi image. The check is on the effective resolution, not the original file.

**Colour space.** RGB artwork has to be converted, and the conversion shifts colour. Supplying CMYK means you have seen the shift rather than inheriting it.

**Spot colour tidiness.** Two swatches with different names for the same colour produce two plates. Unused swatches left in a document cause the same confusion.

**Overprint settings.** White objects set to overprint disappear entirely on press. It is one of the few errors that looks perfect on screen and produces a blank area in production.

**Total ink coverage.** Four heavy channels stacked on a dark area exceed what the substrate absorbs, causing set-off and slow drying.

## Where fold lines change the design

Creases are not neutral lines on a flat drawing. Board compresses and stretches slightly at a fold, and anything crossing it distorts.

Type crossing a crease breaks. A barcode crossing a crease fails at the scanner. A fine rule crossing a crease appears to step. Continuous background colour crossing a crease is fine, and a deliberate graphic device crossing one can work if it is bold.

The practical rule is that anything that has to be read stays off the fold entirely.

## Panels people forget

The glue lap is covered when the pack is assembled, so artwork placed there disappears. It happens most often when a design is centred on a flat drawing rather than on the assembled panel.

Dust flaps and tuck flaps are visible when the pack is open and hidden when it is closed. Interior faces are free print area on any pack that opens toward the customer.

Base panels are almost never seen in retail and frequently seen in a chiller or a tray display. Which applies depends on how the product is merchandised, and it is worth asking.

## Version control

The single most expensive prepress error is not a technical fault. It is the correct file being replaced by an earlier one somewhere between design and press.

Name files with product, size and version. Keep one master and archive superseded versions rather than deleting them. State clearly which file supersedes which when you send a revision, rather than relying on the timestamp.

## Barcodes

Place on a flat panel, never across a fold or a curve. Keep at or above 80% of nominal size. Print dark on light with a clear quiet zone. Red on white does not scan reliably; light bars on dark do not scan at all.

Once approved, archive the print file alongside the dieline, board specification and colour targets. Reorders that reuse an approved file skip most of prepress, which is set out further in our [file requirements reference](/resources/packaging-file-requirements/).
