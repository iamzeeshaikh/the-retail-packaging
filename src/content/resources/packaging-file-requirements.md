---
title: Packaging File Requirements
description: Accepted file formats, colour and resolution requirements, export presets and the pre-flight checks that stop artwork bouncing at prepress.
metaTitle: Packaging File Requirements | Print-Ready Specs
publishDate: 2026-06-11
updatedDate: 2026-08-10
keyword: packaging file requirements
kind: guide
order: 110
heroProduct: custom-die-cut-stickers
heroAlt: Die cut stickers demonstrating precise registration between print and cut path
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
