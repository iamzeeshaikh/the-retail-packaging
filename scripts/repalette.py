#!/usr/bin/env python3
"""Swap the Maison palette/type for a neutral, monochrome premium system.

Why: the product photography across 371 SKUs is loud and inconsistent — magenta,
purple, red/yellow, mint, kraft all in one grid. A warm cream ground fights that
and, separately, sat far too close to the client's own lipboxes.com. A near-
monochrome UI lets the photography supply the only colour on the page, which is
what actually reads premium with a mixed catalogue.

Type: Bodoni is dropped entirely (too couture, and it rendered badly at display
size). Fraunces is avoided because two of the client's other sites already use
it. Jost carries everything, tightly tracked at large sizes.
"""
import pathlib
import re

css = pathlib.Path("src/styles/global.css")
s = css.read_text()

# ---------------------------------------------------------------- fonts
s = s.replace(
    """@font-face {
  font-family: 'Bodoni Moda';
  src: url('/fonts/bodoni-moda.woff2') format('woff2-variations');
  font-weight: 400 900;
  font-style: normal;
  font-display: swap;
  /* Latin only — keeps the file small and avoids a second request */
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215;
}
""",
    "",
)

s = s.replace(
    "  --font-display: 'Bodoni Moda', 'Didot', 'Bodoni 72', Georgia, serif;",
    "  --font-display: 'Jost', 'Avenir Next', 'Segoe UI', system-ui, sans-serif;",
)

# ---------------------------------------------------------------- palette
old_palette_start = s.index("  /* ground — warm bone")
old_palette_end = s.index("  /* semantic */")
new_palette = """  /* ground — neutral, very slightly cool so warm product shots pop against it */
  --bone:        #f4f4f5;   /* page ground */
  --bone-deep:   #ebebed;   /* sunken band */
  --sand:        #e4e4e7;   /* strongest band */
  --paper:       #ffffff;   /* cards */

  /* ink — graphite, not pure black */
  --ink:         #111113;
  --ink-deep:    #08080a;
  --ink-2:       #45454b;
  --ink-3:       #6e6e77;
  --ink-4:       #a1a1aa;

  /* accent — deliberately achromatic. Ink is the accent; photography is the
     only colour on the page. --ox is kept as a token name so nothing else
     needs rewriting, but it now resolves to graphite. */
  --ox:          #111113;
  --ox-deep:     #08080a;
  --ox-bright:   #2a2a30;
  --ox-tint:     #ececee;

  /* rules and edges */
  --rule:        #dedee1;
  --rule-strong: #c4c4c9;
  --rule-ink:    rgba(255, 255, 255, 0.18);

"""
s = s[:old_palette_start] + new_palette + s[old_palette_end:]

# text-invert and section-ink links need to leave the oxblood world too
s = s.replace("  --text-invert:  #f7f3ec;", "  --text-invert:  #f4f4f5;")
s = s.replace(".section-ink a { color: #e0b9b0; }", ".section-ink a { color: #ffffff; }")
s = s.replace(".section-ink .eyebrow { color: #cfa39a; }", ".section-ink .eyebrow { color: #a1a1aa; }")
s = s.replace(".section-ink .step::before { color: #cfa39a; }", ".section-ink .step::before { color: #a1a1aa; }")
s = s.replace(".section-ink .tick-list li::before { border-color: #cfa39a; }",
              ".section-ink .tick-list li::before { border-color: #ffffff; }")
s = s.replace(".btn-primary { background: var(--ox); color: #fdf9f3; }",
              ".btn-primary { background: var(--ink); color: #ffffff; }")
s = s.replace(".btn-primary:hover { background: var(--ox-deep); color: #fdf9f3; }",
              ".btn-primary:hover { background: var(--ink-deep); color: #ffffff; }")

# ---------------------------------------------------------------- type scale
# Jost is a geometric sans: it wants tighter tracking and slightly more weight
# at display sizes than a serif would.
s = s.replace("""h1, h2, h3 {
  font-family: var(--font-display);
  font-weight: 400;""", """h1, h2, h3 {
  font-family: var(--font-display);
  font-weight: 500;""")
s = s.replace("  --track-display: -0.022em;", "  --track-display: -0.035em;")
s = s.replace("  --lh-tight: 1.06;", "  --lh-tight: 1.02;")

# card titles follow the same treatment
s = s.replace("""  font-family: var(--font-display);
  font-size: var(--fs-lg);
  line-height: var(--lh-snug);
  letter-spacing: -0.015em;
  color: var(--ink);
  margin-top: var(--s-2);""", """  font-family: var(--font-display);
  font-size: var(--fs-md);
  font-weight: 500;
  line-height: var(--lh-snug);
  letter-spacing: -0.02em;
  color: var(--ink);
  margin-top: var(--s-2);""")

# ---------------------------------------------------------------- tiles
# Light product photography was swallowing white overlay text. Move the label
# out of the image entirely — cleaner, and it reads premium.
s = s.replace(""".tile-photo::after {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(18, 15, 12, 0.78), rgba(18, 15, 12, 0.06) 62%);
}""", """.tile-photo::after {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(8, 8, 10, 0.72), rgba(8, 8, 10, 0.02) 58%);
}
/* Label sits below the frame instead of over it — light packaging shots
   swallowed white text no matter how heavy the scrim. */
.tile-photo.label-below::after { display: none; }""")

css.write_text(s)
print("palette + type rewritten")

# ---------------------------------------------------------------- preload
base = pathlib.Path("src/layouts/Base.astro")
b = base.read_text()
b = b.replace(
    '    <link rel="preload" as="font" type="font/woff2" href="/fonts/bodoni-moda.woff2" crossorigin />\n',
    "",
)
base.write_text(b)
print("bodoni preload removed")

# bodoni is no longer referenced anywhere
leftover = [f for f in ["src/styles/global.css", "src/layouts/Base.astro"]
            if "bodoni" in pathlib.Path(f).read_text().lower()]
print("files still mentioning bodoni:", leftover or "none")
