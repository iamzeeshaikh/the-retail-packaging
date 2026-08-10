---
title: Dieline and Artwork Guide
description: How to work on a packaging dieline, set bleed and safety margins, handle colour and fonts, and export a print-ready file that passes prepress first time.
metaTitle: Dieline and Artwork Guide | Packaging Files
publishDate: 2026-05-24
updatedDate: 2026-08-10
keyword: dieline and artwork
kind: howto
order: 60
heroProduct: custom-die-cut-stickers
heroAlt: Die cut stickers showing the cut path around printed artwork
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
