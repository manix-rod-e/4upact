# 4U Pact logo compositor

This utility overlays the canonical transparent 4U Pact logo onto artwork generated with a deliberately empty top-left safe area. By default, the logo uses 12% of the canvas with a 2% inset, keeping the complete mark inside GPT's upper-left 12-15% reserved zone on banners and squares.

Canonical logo object:

`generated-visuals/03_brands/logos/4upact_logo_transparent.png`

The default run writes locally and never mutates storage:

```bash
python3 scripts/compose_4u_logo.py \
  background.png \
  composited.png
```

Use another corner or adjust the brand-safe geometry when necessary:

```bash
python3 scripts/compose_4u_logo.py \
  background.png \
  composited.png \
  --position top-right \
  --width-fraction 0.12 \
  --margin-fraction 0.02
```

Optional storage upsert requires `SUPABASE_SERVICE_ROLE_KEY` in the environment. The script never prints the key and restricts uploads to canonical `4u/social-*` and `4u/blog-*` PNG names in the `generated-visuals` bucket:

```bash
SUPABASE_SERVICE_ROLE_KEY=... \
python3 scripts/compose_4u_logo.py \
  background.png \
  composited.png \
  --upload-object 4u/blog-05-banner-gpt.png
```

Generation prompts should say: `no logo baked in; leave clear space top-left`.
