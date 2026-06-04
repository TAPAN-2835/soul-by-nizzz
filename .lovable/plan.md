# SOUL BY NIZZZ — Premium Landing Site Plan

A one-page React + TanStack Start site with an optional `/gallery` route, built for an emotional, Pinterest-inspired pencil-sketch art brand.

## Routes
- `/` — main long-scroll landing with all 11 sections
- `/gallery` — full Pinterest-style masonry gallery with lightbox
- Each route gets its own `head()` meta (title, description, og tags)

## Design system (src/styles.css)
Three swappable themes via a `data-theme` attribute on `<html>`, persisted in `localStorage`:
- **cloud** — Cloud Blue Dream (#DFF5FF, #B8E8FC, #F8FAFC, #A7C7E7)
- **lavender** — Soft Lavender (#F3E8FF, #E9D5FF, #FDF4FF, #D8B4FE)
- **peach** — Peach Cream (default; #FFF1E6, #FFD6BA, #FFF7F0, #FEC89A)

Semantic oklch tokens (`--background`, `--primary`, `--accent`, `--muted`, plus brand tokens `--brand-soft`, `--brand-accent`, `--brand-ink`, gradient + grain + shadow tokens). All components consume tokens — no hardcoded hex.

Typography (loaded via Google Fonts in `__root.tsx` head links):
- Display: Playfair Display + Cormorant Garamond
- Body: Plus Jakarta Sans + Poppins
- Handwritten accents: Caveat, Sacramento

## Sections (single-page, anchor-scrolled)
1. **Hero** — full-screen cinematic, mesh-gradient bg, floating sketch frames, soft particles, parallax, big "SOUL BY NIZZZ" wordmark, subheading, two CTAs (Order / Gallery), doodle sparkles
2. **Story** — "Every Picture Has A Story" 4-step timeline (Photo → Sketching → Final Artwork → Happy Customer) with GSAP scroll-pin reveal
3. **Collections** — 4 tilt-on-hover cards (Simple ₹120, Detailed ₹180, Couple ₹240, Family ₹280), pencil-stroke draw-in SVG on scroll, glow + price ribbon
4. **Before/After** — draggable image-comparison slider
5. **Why People Love It** — asymmetric bento grid with 6 features and hover micro-interactions
6. **Testimonials** — Swiper carousel of Instagram-style cards with animated quote marks
7. **Gallery Wall** — Pinterest masonry preview (8–10 tiles) with hover zoom + paper-lift, click opens lightbox; "See Full Gallery" → `/gallery`
8. **Instagram** — feed-style grid linking to `https://www.instagram.com/soul_by_nizz`, animated follow button, social-proof counters (React CountUp)
9. **FAQ** — shadcn accordion with the 4 questions
10. **Final CTA** — emotional full-screen "Your Memories Deserve More Than A Gallery Folder" + Order Now / Message on Instagram buttons
11. **Footer** — minimal: brand mark, Instagram link, copyright

## Global premium features
- **Lenis** smooth scroll provider in `__root.tsx`
- **GSAP + ScrollTrigger** for text reveals, pinning, parallax, image masking
- **Framer Motion** for cards, hovers, stagger entrances
- Custom **animated cursor** with mouse-follow light blob (disabled on touch)
- Persistent **theme switcher** (floating control, top-right) cycling the 3 palettes
- Subtle **grain texture** overlay (SVG noise) and floating sparkles layer
- **Loading screen** with an SVG pencil drawing the wordmark, dismissed after fonts + hero assets load
- **Sound toggle** for soft pencil-scratch loop (off by default, preference saved)
- Sticky minimal **nav** with anchor links + theme + sound toggles
- Responsive, mobile-first; reduced-motion respected (disables Lenis/GSAP heavy effects)
- SEO: per-route `head()`, JSON-LD `LocalBusiness`/`Organization` in root, semantic H1 per route, alt text on all images

## Imagery
Generate sketch/portrait imagery with `imagegen` (hero frames, collection cards, before/after pair, gallery tiles, testimonial avatars). Store via Lovable Assets (`.asset.json`) to keep the repo light.

## File layout (new)
```
src/
  routes/
    index.tsx              (landing — composes all sections)
    gallery.tsx            (full masonry + lightbox)
  components/
    layout/
      Nav.tsx
      Footer.tsx
      LoadingScreen.tsx
      ThemeSwitcher.tsx
      SoundToggle.tsx
      CustomCursor.tsx
      GrainOverlay.tsx
      SparklesLayer.tsx
      LenisProvider.tsx
    sections/
      Hero.tsx
      Story.tsx
      Collections.tsx
      BeforeAfter.tsx
      WhyLoveIt.tsx
      Testimonials.tsx
      GalleryWall.tsx
      Instagram.tsx
      Faq.tsx
      FinalCta.tsx
    ui/Lightbox.tsx
  hooks/
    useTheme.ts
    useSound.ts
    useGsapReveal.ts
  lib/
    site-data.ts           (collections, testimonials, faqs, gallery items)
  assets/                  (generated .asset.json pointers)
  styles.css               (theme tokens + base + utilities)
```

## Dependencies to add
`gsap`, `framer-motion`, `lenis`, `react-icons`, `react-countup`, `swiper`

## Technical notes
- Lenis wraps app in `__root.tsx`; GSAP ScrollTrigger uses Lenis's scroll proxy
- Theme switcher writes `data-theme` on `documentElement` + `localStorage`; reads on mount with no-flash inline script in root `head`
- Before/After slider built with a controlled clip-path on the top image (pointer + touch)
- Bento grid uses CSS grid `grid-template-areas` for asymmetric layout
- Instagram section is visual only (no API) — links out to the provided profile
- All images lazy-loaded; hero image `fetchpriority="high"`

## Out of scope (for this build)
- Real order/checkout flow (CTAs deep-link to Instagram DM)
- CMS/backend (no Lovable Cloud needed)
- Actual pencil-scratch audio file is a small bundled loop; if not provided, sound toggle is wired but muted with a tooltip

Approve to start building.
