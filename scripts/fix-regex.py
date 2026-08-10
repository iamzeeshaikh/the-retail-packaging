#!/usr/bin/env python3
"""Replace literal control-character bytes inside the sanitiser regex with
readable escape sequences. Functionally identical, far easier to review."""
import pathlib

p = pathlib.Path("api/quote.js")
s = p.read_text()

old = ".replace(/[" + chr(0) + "-" + chr(0x1F) + chr(0x7F) + "]/g, ' ')"
new = ".replace(/[\\u0000-\\u001F\\u007F]/g, ' ')"

if old in s:
    s = s.replace(old, new)
    p.write_text(s)
    print("replaced literal control chars with escapes")
else:
    # Fall back to a byte-level scan of the clean() line.
    lines = s.splitlines(keepends=True)
    for i, line in enumerate(lines):
        if ".replace(" in line and any(ord(c) < 0x20 or ord(c) == 0x7F for c in line.rstrip("\n")):
            lines[i] = "    " + new.strip() + "\n"
            p.write_text("".join(lines))
            print(f"rewrote line {i + 1}")
            break
    else:
        print("no literal control characters found — nothing to do")
