---
title: Packaging File Requirements
description: Accepted file formats, colour and resolution requirements, export presets and the pre-flight checks that stop artwork bouncing at prepress.
metaTitle: Packaging File Requirements | Print-Ready Specs
publishDate: 2026-06-11
updatedDate: 2026-08-11
keyword: packaging file requirements
kind: guide
order: 110
heroProduct: custom-die-cut-stickers
heroAlt: Die cut stickers demonstrating precise registration between print and cut path
faqs:
  - q: What happens if I send an RGB file?
    a: It gets converted to CMYK, and the conversion shifts colour — saturated blues and bright greens move most, because they sit outside the printable gamut. Supplying CMYK means you have seen and approved that shift rather than discovering it on a proof.
  - q: Can I send a Canva or PowerPoint file?
    a: We can usually work with them, but expect a conversation. Those tools generally cannot embed a dieline, set bleed reliably, produce CMYK or outline fonts, so the file needs rebuilding before it can go to press. Tell us upfront and we will say what is achievable.
  - q: My image is 300 dpi — why is it flagged as low resolution?
    a: Because resolution is measured at placed size. A 300 dpi image scaled to 200% in the layout is effectively 150 dpi. The check runs on the effective resolution in the document, not on the properties of the original file.
  - q: Why did a white element vanish from the proof?
    a: Almost always an overprint setting. A white object set to overprint knocks out nothing and prints nothing, so it disappears entirely. It looks correct on screen, which is why it survives to proof so often.
  - q: How do I tell you which parts are critical?
    a: Say so in a note with the file. Prepress checks a great many mechanical things but cannot know that one particular blue is your brand colour, that a panel is legally required, or that a logo must not scale. A three-line note prevents most proof cycles.
---

These are the technical requirements for artwork sent to production. Meeting them means a file passes prepress first time rather than returning with queries.

## Accepted formats

| Format | Use | Notes |
|---|---|---|
| PDF/X-4 | Preferred for all packaging | Handles transparency predictably |
| PDF/X-1a | Acceptable alternative | Flattens transparency |
| AI | Native vector artwork | Include linked assets or embed |
| EPS | Legacy vector | Acceptable, PDF preferred |
| SVG | Cut paths and simple vector | Not suitable for full artwork |
| TIFF / PSD | Raster elements only | 300 dpi at placed size, CMYK |

Do not send Word, PowerPoint, Canva exports at screen resolution, or JPEGs saved from a website. None of these carry the colour, resolution or vector data print requires.

## Colour

Documents must be CMYK. RGB converted automatically at press produces shifts nobody intended.

Spot colours defined as named swatches, used consistently, with unused swatches deleted. Two similarly named swatches separate as two plates.

Rich black on large solids, 100% K on small text and thin rules. Total ink coverage within the press limit, generally around 300%.

## Resolution

Raster images at 300 dpi at their placed size on the finished pack, not at native size. Scaling up in the layout reduces effective resolution proportionally.

Vector artwork should remain vector. Logos rasterised at some point and reused ever since are a recurring source of soft printed edges.

## Fonts

Outline all fonts, or embed them completely. Outlining is safer because it removes any dependency on font availability or licensing.

Outline on the export copy, not the master, since outlined text cannot be edited.

Minimum sizes: 6pt positive, 8pt reversed out. Below that, ink spread fills in counters, especially on uncoated stock and flexographic printing.

## Dieline handling

Artwork built on the supplied template, dieline on its own layer, set to a named non-printing spot colour, excluded from the exported output.

Bleed applied to every trim edge at the distance appropriate to the format. Critical content held inside safety margins. Nothing important crossing a fold.

## Export settings

- PDF/X-4 preset
- Bleed included
- Trim marks outside the bleed area
- No registration marks inside the artwork area
- Colour conversion off, or set to the supplied profile
- Layers flattened unless separations are requested

## Naming and delivery

Name files with product, size and version — for example `lipstick-carton-45x45x90-v2.pdf`. Vague names are how the wrong version reaches press.

Send files under 20 MB by email; anything larger via a download link. Include a note stating what is critical: an exact brand colour, a legally required panel, a fixed logo size. Prepress checks a great many things but cannot know which you care about most.

## Pre-flight checklist

- CMYK, spot colours named and tidy
- 300 dpi at placed size
- Fonts outlined or embedded
- Bleed on every trim edge
- Content inside safety margins
- Dieline separate and non-printing
- Overprint checked, especially on white objects
- Ink coverage within limit
- Correct version, clearly named

Full setup guidance including bleed distances by format is in our [dieline and artwork preparation guide](/resources/dieline-and-artwork-guide/).

## Supplying artwork from different tools

Not every design tool produces a press-ready file, and knowing where yours sits saves a round trip.

**Illustrator and InDesign** handle everything required — dielines as layers, bleed, CMYK, spot colours, outlining. These are the straightforward cases.

**Photoshop** is raster only. It can produce acceptable artwork for full-coverage designs, but type set in Photoshop is pixels rather than vectors and will not print as crisply as it looks. Small text in particular suffers.

**Affinity and CorelDRAW** are both capable of correct output. Export to PDF/X rather than a native format.

**Canva, PowerPoint and Word** cannot reliably do bleed, CMYK, embedded dielines or outlined fonts. Artwork from them usually needs rebuilding. That is a real cost and it is better discussed before design starts than after.

## Resolution in practice

| Element | Requirement | Common failure |
|---|---|---|
| Photographs | 300 dpi at placed size | Scaled up after placing |
| Logos | Vector | A PNG pulled from a website |
| Line art and rules | Vector | Rasterised at screen resolution |
| Background textures | 300 dpi at placed size | Tiled from a small original |
| Barcodes | Vector, generated not scanned | A photograph of a barcode |

The recurring one is a logo supplied as a web PNG. On screen it looks fine; at print size it has soft edges that no amount of processing recovers.

## Colour, concretely

A file in RGB will be converted. The shift is largest in saturated blues, bright greens and vivid oranges, because those sit outside what four process inks can reproduce.

If a colour is a brand asset, name it as a spot colour rather than building it from process. That is the only way to hold it consistently across production runs.

For anything critical, ask for a press-printed sample on the actual substrate rather than approving from a digital proof. Coated board, uncoated board and kraft all reproduce the same file differently.

## Sending files

Name files with product, size and version — for example `lipstick-carton-45x45x90-v2.pdf`. Vague names are how the wrong version reaches press.

Send files under 20 MB by email; anything larger via a download link. Include a note stating what is critical: an exact brand colour, a legally required panel, a fixed logo size. Prepress checks a great many things but cannot know which you care about most.

Full setup guidance including bleed distances by format is in our [dieline and artwork preparation guide](/resources/dieline-and-artwork-guide/).
