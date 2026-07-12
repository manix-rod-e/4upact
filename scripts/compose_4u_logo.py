#!/usr/bin/env python3
"""Composite the canonical 4U Pact logo onto logo-free campaign artwork."""

from __future__ import annotations

import argparse
import hashlib
import io
import json
import os
import re
import sys
import urllib.parse
import urllib.request
from pathlib import Path

from PIL import Image


CANONICAL_LOGO_OBJECT = "03_brands/logos/4upact_logo_transparent.png"
DEFAULT_SUPABASE_URL = "https://dzcustqujddxbqrdmacw.supabase.co"
DEFAULT_BUCKET = "generated-visuals"
CANONICAL_LOGO_URL = (
    f"{DEFAULT_SUPABASE_URL}/storage/v1/object/public/"
    f"{DEFAULT_BUCKET}/{CANONICAL_LOGO_OBJECT}"
)
ALLOWED_UPLOAD_OBJECT = re.compile(
    r"^4u/(?:social-w\d+-d\d+-(?:cex|gpt|agv|kre)|"
    r"blog-\d+-(?:banner|square)-(?:cex|gpt|agv|kre))\.png$"
)


def read_bytes(source: str) -> bytes:
    if source.startswith(("https://", "http://")):
        request = urllib.request.Request(source, headers={"User-Agent": "4upact-logo-compositor/1.0"})
        with urllib.request.urlopen(request, timeout=60) as response:
            return response.read()
    return Path(source).read_bytes()


def open_rgba(source: str) -> tuple[Image.Image, bytes]:
    data = read_bytes(source)
    image = Image.open(io.BytesIO(data))
    image.load()
    return image.convert("RGBA"), data


def calculate_position(
    canvas: tuple[int, int],
    overlay: tuple[int, int],
    position: str,
    margin: int,
) -> tuple[int, int]:
    canvas_w, canvas_h = canvas
    overlay_w, overlay_h = overlay
    x = margin if position.endswith("left") else canvas_w - overlay_w - margin
    y = margin if position.startswith("top") else canvas_h - overlay_h - margin
    return x, y


def composite(
    background: Image.Image,
    logo: Image.Image,
    position: str,
    width_fraction: float,
    margin_fraction: float,
) -> tuple[Image.Image, dict[str, object]]:
    canvas_w, canvas_h = background.size
    target_w = max(1, round(canvas_w * width_fraction))
    target_h = max(1, round(logo.height * (target_w / logo.width)))
    # GPT reserves the upper-left 12-15% of both canvas axes for the real mark.
    # Cap height independently so the logo stays inside that proportional safe zone
    # on both square and banner artwork.
    max_h = max(1, round(canvas_h * 0.12))
    if target_h > max_h:
        target_h = max_h
        target_w = max(1, round(logo.width * (target_h / logo.height)))

    resized_logo = logo.resize((target_w, target_h), Image.Resampling.LANCZOS)
    margin = max(1, round(min(canvas_w, canvas_h) * margin_fraction))
    x, y = calculate_position(background.size, resized_logo.size, position, margin)

    result = background.copy()
    result.alpha_composite(resized_logo, (x, y))
    return result, {
        "canvas": [canvas_w, canvas_h],
        "logo_size": [target_w, target_h],
        "position": position,
        "coordinates": [x, y],
        "margin_px": margin,
    }


def save_png(image: Image.Image, output: Path) -> bytes:
    output.parent.mkdir(parents=True, exist_ok=True)
    buffer = io.BytesIO()
    image.save(buffer, format="PNG", optimize=True)
    payload = buffer.getvalue()
    output.write_bytes(payload)
    return payload


def upload_png(payload: bytes, object_name: str, bucket: str) -> dict[str, object]:
    if bucket != DEFAULT_BUCKET:
        raise ValueError(f"upload bucket must be {DEFAULT_BUCKET!r}")
    if not ALLOWED_UPLOAD_OBJECT.fullmatch(object_name):
        raise ValueError("upload object must be a canonical 4u social/blog PNG path")

    supabase_url = os.environ.get("SUPABASE_URL", DEFAULT_SUPABASE_URL).rstrip("/")
    service_key = os.environ.get("SUPABASE_SERVICE_ROLE_KEY")
    if not service_key:
        raise RuntimeError("SUPABASE_SERVICE_ROLE_KEY is required only when --upload-object is used")

    quoted_object = urllib.parse.quote(object_name, safe="/")
    url = f"{supabase_url}/storage/v1/object/{bucket}/{quoted_object}"
    request = urllib.request.Request(
        url,
        data=payload,
        method="POST",
        headers={
            "Authorization": f"Bearer {service_key}",
            "apikey": service_key,
            "Content-Type": "image/png",
            "x-upsert": "true",
            "Cache-Control": "3600",
        },
    )
    with urllib.request.urlopen(request, timeout=120) as response:
        response_body = response.read().decode("utf-8", errors="replace")
        return {"status": response.status, "response": response_body}


def validate_upload_target(object_name: str | None, bucket: str) -> None:
    """Reject unsafe storage targets before reading inputs or making network calls."""
    if object_name is None:
        return
    if bucket != DEFAULT_BUCKET:
        raise ValueError(f"upload bucket must be {DEFAULT_BUCKET!r}")
    if not ALLOWED_UPLOAD_OBJECT.fullmatch(object_name):
        raise ValueError("upload object must be a canonical 4u social/blog PNG path")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Overlay the canonical 4U Pact logo on a logo-free PNG/JPEG background."
    )
    parser.add_argument("background", help="Local path or public HTTP(S) URL")
    parser.add_argument("output", type=Path, help="Local PNG output path")
    parser.add_argument("--logo", default=CANONICAL_LOGO_URL, help="Override only for controlled QA")
    parser.add_argument(
        "--position",
        choices=("top-left", "top-right", "bottom-left", "bottom-right"),
        default="top-left",
    )
    parser.add_argument("--width-fraction", type=float, default=0.12)
    parser.add_argument("--margin-fraction", type=float, default=0.02)
    parser.add_argument("--upload-object", help="Optional canonical object such as 4u/blog-05-banner-gpt.png")
    parser.add_argument("--bucket", default=DEFAULT_BUCKET)
    args = parser.parse_args()
    if not 0.05 <= args.width_fraction <= 0.40:
        parser.error("--width-fraction must be between 0.05 and 0.40")
    if not 0.01 <= args.margin_fraction <= 0.15:
        parser.error("--margin-fraction must be between 0.01 and 0.15")
    if args.output.suffix.lower() != ".png":
        parser.error("output must use a .png extension")
    return args


def main() -> int:
    args = parse_args()
    validate_upload_target(args.upload_object, args.bucket)
    background, background_bytes = open_rgba(args.background)
    logo, logo_bytes = open_rgba(args.logo)
    output_image, placement = composite(
        background,
        logo,
        args.position,
        args.width_fraction,
        args.margin_fraction,
    )
    output_bytes = save_png(output_image, args.output)

    result: dict[str, object] = {
        "ok": True,
        "background_sha256": hashlib.sha256(background_bytes).hexdigest(),
        "logo_object": CANONICAL_LOGO_OBJECT if args.logo == CANONICAL_LOGO_URL else args.logo,
        "logo_sha256": hashlib.sha256(logo_bytes).hexdigest(),
        "output": str(args.output.resolve()),
        "output_sha256": hashlib.sha256(output_bytes).hexdigest(),
        "output_bytes": len(output_bytes),
        "placement": placement,
        "uploaded": False,
    }
    if args.upload_object:
        result["upload"] = upload_png(output_bytes, args.upload_object, args.bucket)
        result["uploaded"] = True
        result["upload_object"] = args.upload_object

    print(json.dumps(result, indent=2, sort_keys=True))
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except Exception as exc:
        print(json.dumps({"ok": False, "error": str(exc)}), file=sys.stderr)
        raise SystemExit(1)
