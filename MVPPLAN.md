# Beely landing page MVP (Stitch design)

Single-page marketing site for **Beely** automotive subscription, implemented in **React + Vite + Tailwind CSS v4**. Visual and structural source of truth: `stitch/stitch.html` (Google Stitch export), translated into reusable components—**not** a copy of production beely.fi code.

## Goal

Deliver one polished landing page MVP: strong hero, fleet brands, benefits, comparison table, included services, steps, add-ons, closing CTA, and footer—with **English** UI copy.

## Design system (from Stitch)

- **Typography:** **Epilogue** (headlines / display), **Manrope** (body).
- **Icons:** **Material Symbols Outlined** (loaded from Google Fonts).
- **Palette (Material-style tokens in `@theme`):**
  - **Primary emphasis:** `primary-container` **#F7E400** (CTAs, highlights, step numbers).
  - **On primary:** `on-primary-fixed` **#1F1C00** (text on yellow buttons).
  - **Surfaces:** `surface` **#FCF9F8**, `surface-container-low`, `surface-container-highest`, etc.
  - **Ink:** `on-surface` **#1C1B1B**, **supporting text** `on-surface-variant` **#4A4732**.
  - **Accent (icons / small UI):** `primary` **#686000**.
- **MVP brand aliases** (optional): `beely-primary`, `beely-secondary`, `beely-support` kept for compatibility with earlier tokens.
- **Chrome:** Glass header (`backdrop-blur`), rounded-xl CTAs, large hero imagery, dark **“Why Beely?”** comparison band.

## Page structure (top → bottom)

1. **Header (fixed):** Logo “Beely”, nav (Cars, How it Works, Support), optional search field, **Browse Cars** CTA, **MyBeely** account affordance.
2. **Hero:** Headline with highlighted word “fixed”, supporting line about maintenance & short contracts, primary + secondary CTAs, hero car image (Stitch asset URL).
3. **Fleet brands:** “Our Fleet Brands” + link “Browse 30+ Brands”; grid of **uppercase wordmark** cards (grayscale → colour on hover)—placeholder style, not official logos.
4. **Key benefits (3 cards):** Fixed monthly payment, Maintenance included, Short contracts—with Material icons.
5. **Comparison:** Dark section, **feature table**: Beely vs Traditional leasing vs Ownership (duration, maintenance, down payment, paperwork).
6. **Included services:** “No hidden costs. Ever.” — 5 icon tiles (servicing, repairs, inspections, seasonal tires, 24/7 support).
7. **How it works:** 4 steps (01–04): choose car → customize extras → online check → home delivery.
8. **Add-ons:** Copy + two option rows (Insurance Plus, Unlimited Mileage) + interior image and “Available Now” pill.
9. **Repeated CTA:** Rounded dark panel, glow accents, **See All Cars**.
10. **Footer:** Brand blurb + social icons, **Company** & **Support** link lists (Support anchor `#support`), **Newsletter** email field (UI only, no submit backend).

## Tech

- **React**, **TypeScript**, **Vite 6**, **Tailwind CSS v4** (`@tailwindcss/vite`).
- Content in `src/data/landingContent.ts`; section components under `src/components/`.
- **No** backend, **no** real auth, **no** routing beyond the single page.
- Hero / add-on images: URLs from Stitch (`stitchImages` in data)—replace if they expire.

## Constraints

- Do not paste proprietary beely.fi source; Stitch HTML is the approved design reference for this repo.
- Newsletter and search are **non-functional** placeholders.
- Keep semantic HTML (`nav`, `main`, `section`, `footer`, `table` where used).

## Deliverables

Working dev server (`npm run dev`), production build (`npm run build`), components aligned with the structure above and the Stitch visual language.
