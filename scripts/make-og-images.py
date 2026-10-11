"""
Generate per-case-study social preview images (public/og/<slug>.jpg).

Each image is 1200x630 and reuses the case study's own hero imagery, framed in
the Signal style: paper background, 2px ink border, cobalt-tint offset shadow.
No text is drawn; link previews already show the page title and description.

Re-run after changing a case study's hero image:
    python3 scripts/make-og-images.py
Requires Pillow (pip install pillow).
"""

from pathlib import Path
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parent.parent
WORK = ROOT / "src" / "assets" / "work"
OUT = ROOT / "public" / "og"

W, H = 1200, 630
PAPER = "#f4f0e8"
INK = "#17181a"
TINT = "#d3def4"
BORDER = 2
SHADOW = 14

# Frame rectangle (outer edge of the ink border)
FX0, FY0, FX1, FY1 = 64, 56, W - 64 - SHADOW, H - 56 - SHADOW
PAD = 24  # paper inset between border and image, like .signal-case-hero

SINGLE = {
    "promo-architect": "promo-architect/dashboard.webp",
    "oms-account-setup": "oms/redesign-01.webp",
    "chalo-chalo": "chalo-chalo/browse-incidents-desktop.webp",
    "myhousedeals": "myhousedeals/property-listing-final.webp",
}

PHONES = {
    "american-national": [
        "american-national/app-screen-01.webp",
        "american-national/app-screen-03.webp",
        "american-national/app-screen-08.webp",
        "american-national/app-screen-06.webp",
    ],
}


def cover_top(img: Image.Image, w: int, h: int) -> Image.Image:
    """Scale to cover w x h, anchored to the top (object-position: top)."""
    scale = max(w / img.width, h / img.height)
    resized = img.resize((round(img.width * scale), round(img.height * scale)), Image.LANCZOS)
    left = (resized.width - w) // 2
    return resized.crop((left, 0, left + w, h))


def contain(img: Image.Image, w: int, h: int) -> Image.Image:
    scale = min(w / img.width, h / img.height)
    return img.resize((round(img.width * scale), round(img.height * scale)), Image.LANCZOS)


def base_canvas() -> Image.Image:
    canvas = Image.new("RGB", (W, H), PAPER)
    d = ImageDraw.Draw(canvas)
    d.rectangle((FX0 + SHADOW, FY0 + SHADOW, FX1 + SHADOW, FY1 + SHADOW), fill=TINT)
    d.rectangle((FX0, FY0, FX1, FY1), fill=PAPER, outline=INK, width=BORDER)
    return canvas


def inner_box():
    x0, y0 = FX0 + BORDER + PAD, FY0 + BORDER + PAD
    x1, y1 = FX1 - BORDER - PAD, FY1 - BORDER - PAD
    return x0, y0, x1 - x0, y1 - y0


def make_single(src: str) -> Image.Image:
    canvas = base_canvas()
    x, y, w, h = inner_box()
    shot = cover_top(Image.open(WORK / src).convert("RGB"), w, h)
    canvas.paste(Image.new("RGB", (w, h), TINT), (x, y))
    canvas.paste(shot, (x, y))
    return canvas


def make_phones(srcs: list[str]) -> Image.Image:
    canvas = base_canvas()
    x, y, w, h = inner_box()
    gap = 20
    slot_w = (w - gap * (len(srcs) - 1)) // len(srcs)
    d = ImageDraw.Draw(canvas)
    for i, src in enumerate(srcs):
        shot = contain(Image.open(WORK / src).convert("RGB"), slot_w, h)
        sx = x + i * (slot_w + gap) + (slot_w - shot.width) // 2
        sy = y + (h - shot.height) // 2
        canvas.paste(shot, (sx, sy))
        d.rectangle((sx - 1, sy - 1, sx + shot.width, sy + shot.height), outline="#c8c1b5", width=1)
    return canvas


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for slug, src in SINGLE.items():
        make_single(src).save(OUT / f"{slug}.jpg", quality=88, optimize=True, progressive=True)
    for slug, srcs in PHONES.items():
        make_phones(srcs).save(OUT / f"{slug}.jpg", quality=88, optimize=True, progressive=True)
    for f in sorted(OUT.glob("*.jpg")):
        print(f.relative_to(ROOT), f.stat().st_size // 1024, "KB")


if __name__ == "__main__":
    main()
