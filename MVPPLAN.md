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
- **MVP brand aliases** (optional): `beely-primary`, `beely-secondary`, `beely-support` (**#222222**) kept for compatibility with earlier tokens.
- **Chrome:** **Glass header** (`.glass-nav` — **more transparent** white ~55% + stronger blur): logo + nav + primary **Browse Cars** (yellow button). **No search field.** Responsive padding (`px-4` → `lg:px-8`, `py-3` / `py-3.5`, `min-h` for consistent bar height). Rounded-xl CTAs, large hero imagery.
- **Page canvas:** **Black** (`#000000`) behind the main flow; sections that use dark text on light UI use an explicit **`surface`** (or related container) background so copy stays readable.
- **Dark bands:** **Our Fleet Brands** and **How it works** (“From online to driveway…”) use **`bg-black`** with **light text**, **yellow** accents (`primary-container`), and translucent cards where needed for contrast.
- **Light closing CTA:** **“Ready to find your car?”** sits on **`surface`** (same family as **Customize your ride** / add-ons): light card, **`text-on-surface`** / **`text-on-surface-variant`**, yellow primary button.
- **Footer:** Background **`#222222`** (`beely-support`), light text, subtle borders (`white/10`), newsletter field on a translucent dark treatment; primary-yellow **Join** button.

## Page structure (top → bottom)

1. **Header (fixed):** Glass bar, logo “Beely”, nav (Cars, How it Works, Support), **Browse Cars** CTA, **MyBeely** — **no search**.
2. **Hero:** Headline with highlighted word “fixed”, supporting line about maintenance & short contracts, primary + secondary CTAs, hero car image (Stitch asset URL).
3. **Fleet brands:** **Black** section — “Our Fleet Brands” + “Browse 30+ Brands” (yellow link); **uppercase wordmark** cards on translucent panels (readable on dark).
4. **Comparison (“Why Beely?”):** Dark section, **feature table**: Beely vs Traditional leasing vs Ownership (duration, maintenance, down payment, paperwork).
5. **Key benefits (3 cards):** Fixed monthly payment, Maintenance included, Short contracts—with Material icons.
6. **Included services:** “No hidden costs. Ever.” — 5 icon tiles (servicing, repairs, inspections, seasonal tires, 24/7 support).
7. **How it works:** **Black** section — 4 steps (01–04) with light copy; yellow step numerals.
8. **Add-ons:** **`surface`** — copy + two option rows (Insurance Plus, Unlimited Mileage) + interior image and “Available Now” pill.
9. **Repeated CTA:** **`surface`** outer + light elevated card (aligned with add-ons), **See All Cars** primary button.
10. **Footer:** **`#222222`** background, light typography; brand blurb + social icons; **Company** & **Support** link lists (Support anchor `#support`); **Newsletter** email field (UI only, no submit backend).

## Tech

- **React**, **TypeScript**, **Vite 6**, **Tailwind CSS v4** (`@tailwindcss/vite`).
- Content in `src/data/landingContent.ts`; section components under `src/components/`.
- **No** backend, **no** real auth, **no** routing beyond the single page.
- Hero / add-on images: URLs from Stitch (`stitchImages` in data)—replace if they expire.

## Constraints

- Do not paste proprietary beely.fi source; Stitch HTML is the approved design reference for this repo.
- Newsletter is a **non-functional** placeholder (no backend). **Search was removed** from the landing page.
- Keep semantic HTML (`nav`, `main`, `section`, `footer`, `table` where used).

## Deliverables

Working dev server (`npm run dev`), production build (`npm run build`), components aligned with the structure above and the Stitch visual language.
