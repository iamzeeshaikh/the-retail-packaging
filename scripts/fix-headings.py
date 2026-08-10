#!/usr/bin/env python3
"""Stop lowercasing proper names inside headings, and set lead time to 3–5 days.

Headings were composing as `About {p.name.toLowerCase()}`, which rendered
"About kraft christmas gift bags". Product and category names are proper nouns
and keep their capitals; trailing words in a heading get capitalised too.
"""
import pathlib
import re

SRC = pathlib.Path("src")

HEADING_FIXES = [
    # product page
    ("<h2>About {p.name.toLowerCase()}</h2>", "<h2>About {p.name}</h2>"),
    ("<h2>How to order {p.name.toLowerCase()}</h2>", "<h2>How to Order {p.name}</h2>"),
    ("<h2>{p.name} specifications</h2>", "<h2>{p.name} Specifications</h2>"),
    ("<h2>Why buyers specify {p.name.toLowerCase()} with us</h2>", "<h2>Why Buyers Specify {p.name}</h2>"),
    ("<h2>Build a full specification</h2>", "<h2>Build a Full Specification</h2>"),
    ("<h2>Customization options</h2>", "<h2>Customization Options</h2>"),
    ("<h2>Applications</h2>", "<h2>Applications</h2>"),
    ("<h2>Artwork guidance</h2>", "<h2>Artwork Guidance</h2>"),
    ("<h2>Turnaround and shipping</h2>", "<h2>Turnaround and Shipping</h2>"),
    ("<h3>Materials</h3>", "<h3>Materials</h3>"),
    ("<h3>Size options</h3>", "<h3>Size Options</h3>"),
    ("<h3>Printing options</h3>", "<h3>Printing Options</h3>"),
    ("<h3>Finishes</h3>", "<h3>Finishes</h3>"),
    ("<h3>Add-ons</h3>", "<h3>Add-ons</h3>"),
    ("<h2>Packaging often specified alongside this</h2>", "<h2>Often Specified Alongside This</h2>"),
    # titles passed to components
    ('title={`${p.name} questions`}', 'title={`${p.name} Questions`}'),
    ('title={`Quote ${p.name.toLowerCase()}`}', 'title={`Quote ${p.name}`}'),
    ('title={`Quote ${category.name.toLowerCase()}`}', 'title={`Quote ${category.name}`}'),
    ('title={`${category.name} questions`}', 'title={`${category.name} Questions`}'),
    ('title={`Custom packaging in ${place.name} — questions`}',
     'title={`Custom Packaging in ${place.name} — Questions`}'),
    ('title={`${page.title} — questions`}', 'title={`${page.title} — Questions`}'),
    # category page
    ("<h2>{category.name} we produce</h2>", "<h2>{category.name} We Produce</h2>"),
    ("<h2>Choosing a {category.name.toLowerCase().replace(/^custom /, '')} specification</h2>",
     "<h2>Choosing a {category.name.replace(/^Custom /, '')} Specification</h2>"),
    ("<h2>What you get with custom {category.name.toLowerCase().replace(/^custom /, '')}</h2>",
     "<h2>What You Get with {category.name}</h2>"),
    ("<h2>Quote a {category.name.toLowerCase().replace(/^custom /, '')} run</h2>",
     "<h2>Quote a {category.name.replace(/^Custom /, '')} Run</h2>"),
    ("<h2>Other packaging categories worth comparing</h2>", "<h2>Other Categories Worth Comparing</h2>"),
    # location page
    ("<h2>Packaging for {place.name} businesses</h2>", "<h2>Packaging for {place.name} Businesses</h2>"),
    ("<h2>Sectors we supply in {where}</h2>", "<h2>Sectors We Supply in {where}</h2>"),
    ("<h2>One thing worth knowing before you order</h2>", "<h2>One Thing Worth Knowing Before You Order</h2>"),
    ("<h2>How ordering works from {place.name}</h2>", "<h2>How Ordering Works from {place.name}</h2>"),
    ("<h2>Cities we ship to in {place.name}</h2>", "<h2>Cities We Ship To in {place.name}</h2>"),
    ("<h2>Packaging categories most ordered in {place.name}</h2>",
     "<h2>Packaging Categories Most Ordered in {place.name}</h2>"),
    ("<h2>Quote a {place.name} delivery</h2>", "<h2>Quote a {place.name} Delivery</h2>"),
    # homepage
    ("<h2>Low minimum, quick turnaround</h2>", "<h2>Low Minimum, Quick Turnaround</h2>"),
    ("<h2>Eight ranges that carry most of the volume</h2>", "<h2>Eight Ranges That Carry Most of the Volume</h2>"),
    ("<h2>What you sell decides the specification</h2>", "<h2>What You Sell Decides the Specification</h2>"),
    ("<h2>Formats buyers ask for most</h2>", "<h2>Formats Buyers Ask For Most</h2>"),
    ("<h2>Six stages, no surprises</h2>", "<h2>Six Stages, No Surprises</h2>"),
    ("<h2>Claims you can defend</h2>", "<h2>Claims You Can Defend</h2>"),
    ("<h2>Tell us what you are packing</h2>", "<h2>Tell Us What You Are Packing</h2>"),
    ("<h1>Packaging built around your product</h1>", "<h1>Packaging Built Around Your Product</h1>"),
]

changed = 0
for f in SRC.rglob("*.astro"):
    s = orig = f.read_text()
    for old, new in HEADING_FIXES:
        s = s.replace(old, new)
    if s != orig:
        f.write_text(s)
        changed += 1
print(f"headings fixed in {changed} files")

# CtaBand / Faqs titles composed in props
for f in SRC.rglob("*.astro"):
    s = orig = f.read_text()
    s = s.replace("title={`Ready to specify your ${category.name.toLowerCase().replace(/^custom /, '')}?`}",
                  "title={`Ready to Specify Your ${category.name.replace(/^Custom /, '')}?`}")
    s = s.replace("title={`Get a price for ${p.name.toLowerCase()}`}", "title={`Get a Price for ${p.name}`}")
    s = s.replace("title={`Shipping packaging to ${place.name}`}", "title={`Shipping Packaging to ${place.name}`}")
    s = s.replace("`Ready to specify your ${category.name.toLowerCase().replace(/^custom /, '')}?`",
                  "`Ready to Specify Your ${category.name.replace(/^Custom /, '')}?`")
    if s != orig:
        f.write_text(s)

# ---------------------------------------------------------------- lead time
c = pathlib.Path("src/lib/commerce.ts")
t = c.read_text()
t = re.sub(r"(const LEAD: Record<FormFactorId, \[number, number\]> = \{)[^}]*\}",
           lambda m: m.group(1) + "\n" + "\n".join(
               f"  {k}: [3, 5]," for k in [
                 "'folding-carton'", "'rigid-box'", "'corrugated-box'", "mailer", "'poly-mailer'",
                 "'bubble-mailer'", "'paper-bag'", "'tote-bag'", "pouch", "'paper-cup'", "tray",
                 "sleeve", "label", "sticker", "insert", "display", "tube", "band", "wrap"]) + "\n}",
           t, flags=re.S)
t = t.replace("/** Production window in business days, before transit. */",
              "/** Production window in business days, before transit. Flat 3-5 days. */")
c.write_text(t)
print("lead time set to 3-5 business days")

# prose that quotes the old 8-15 window
OLD = [
    ("8 to 15 business days", "3 to 5 business days"),
    ("8–15 business days", "3–5 business days"),
    ("8 to 15 days", "3 to 5 days"),
    ("8–15 days", "3–5 days"),
    ("handlingTime: { '@type': 'QuantitativeValue', minValue: 8, maxValue: 15, unitCode: 'DAY' }",
     "handlingTime: { '@type': 'QuantitativeValue', minValue: 3, maxValue: 5, unitCode: 'DAY' }"),
]
n = 0
for f in list(SRC.rglob("*.astro")) + list(SRC.rglob("*.ts")) + list(SRC.rglob("*.md")):
    s = orig = f.read_text()
    for old, new in OLD:
        if old in s:
            s = s.replace(old, new)
            n += 1
    if s != orig:
        f.write_text(s)
print(f"{n} lead-time mentions updated in copy and schema")
