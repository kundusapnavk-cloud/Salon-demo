# PRD — Aurelle Salon & Studio (Reusable Premium Salon Website Demo)

## Original Problem Statement
Build a premium, modern, fully responsive, reusable salon website demo (unisex / women's / men's grooming / beauty studios) that looks professionally designed and could be presented to a salon owner as a website proposal. Warm neutral palette + one accent color, serif headings + sans body, centralized business-data config, sticky nav, full hero with rating, Call/WhatsApp/Book conversion actions everywhere, mobile fixed booking bar (Call | WhatsApp | Book), About split section, full categorized services catalog (Hair, Hair Colour, Skin & Facials, Nails, Makeup, Grooming) with per-service Book Now, interactive booking modal with preselected service + success state, featured services, Why Choose Us, masonry gallery, reviews (demo-safe), Instagram grid, booking CTA band, full contact section with map, premium footer, floating WhatsApp button, SEO, and flawless responsive behavior. Client addendum: Awwwards-level art direction — kinetic masked hero reveal, editorial marquee, numbered chapters, Framer Motion reveals, Lenis smooth scrolling, hero parallax.

## Architecture
- Frontend-only demo (user choice): React 19 + Tailwind + Framer Motion 11 + Lenis; booking submit is a stub at `src/lib/booking.js` ready to be wired to a real endpoint.
- Backend: stock FastAPI template retained (`/api` health check works); not used by the demo.
- Single source of truth: `src/config/salon.js` — brand, colors (injected as CSS vars at runtime), contact, hours, rating, hero, about, featured, 6 service categories (28 services), gallery, testimonials, Instagram grid, booking slots. Rebranding = edit this one file.
- Design system: Cormorant Garamond (headings) + Manrope (body); cream/ink/terracotta palette via `--brand-*` CSS vars; glass sticky nav; grain texture on dark sections.

## User Personas
- Salon owner evaluating a website proposal (wants premium, trustworthy, easy to customize).
- End customer on mobile who wants to call / WhatsApp / book in under 3 taps.

## Implemented (2026-08-14)
- Sticky glass nav with links, phone, Book CTA, animated mobile menu
- Kinetic hero: masked line-by-line reveal, scroll parallax + scale, rating badge, dual CTAs
- Slow editorial serif marquee
- About split-screen with offset frame, floating badge, numbered manifesto chapters
- Featured services: 6 image cards opening prefilled booking
- Full services catalog: 6 categories, 28 services, editorial rows with duration/price/Book Now
- Why Choose Us: dark grain section, 4 numbered icon cards
- Masonry gallery (10 images), Reviews (4.8 summary + 6 demo cards + demo disclaimer), Instagram grid
- Booking CTA band (Book / WhatsApp / Call), Contact section with live Google Maps embed + Get Directions
- Booking modal: preselected service chip, validated form, loading state, success state with WhatsApp confirm
- Floating WhatsApp button + mobile fixed Call | WhatsApp | Book bar
- SEO: title, meta description, LocalBusiness JSON-LD, semantic headings, alt text, data-testids throughout

## Verified
- curl: `/api/` health 200; frontend 200; correct `<title>` served
- Desktop: hero, about, services, gallery, reviews, contact screenshotted and visually checked
- Booking flow e2e: Book Now on "Hair Spa" → modal prefilled → submit → success message confirmed
- Mobile (390px): hero, hamburger menu, bottom bar visible, Book opens modal

## Backlog
- P0: Wire booking form to a real backend (POST /api/bookings) + owner notification (WhatsApp/email) when the demo becomes a real site
- P1: Replace demo content per salon — real photos, Google reviews link, real address/hours/numbers in `src/config/salon.js`
- P1: Admin view of appointment requests once backend is connected
- P2: Online payment/deposit (Razorpay/Stripe), stylist selection, real-time slot availability
- P2: Multi-language support, per-service detail pages

## Next Tasks
1. Connect booking backend + MongoDB persistence
2. Resend/WhatsApp notification to owner on new request
3. Swap in real salon branding assets
