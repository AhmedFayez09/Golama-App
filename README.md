# GoBar — Wholesale Marketplace Landing Page

A premium, responsive landing page for GoBar, a B2B wholesale marketplace mobile app.

## Tech stack
- React 18 + Vite
- Tailwind CSS
- Framer Motion (scroll reveals, floating/ticker animations, hover states)
- Swiper.js (auto-sliding app screen carousel)
- Lucide React (icons)

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build to /dist
npm run preview   # preview the production build
```

## Structure

```
src/
  components/
    Navbar.jsx         Sticky glass navbar with scroll-spy active link
    Hero.jsx            Headline, store badges, floating phone + live price ticker
    Features.jsx        10 feature cards with hover animation
    HowItWorks.jsx      4-step process timeline
    Showcase.jsx        Auto-sliding phone carousel (7 app screens)
    AppScreens.jsx      Mock app UI screens (Home, Categories, Product, Variants, Cart, Orders, Profile)
    Stats.jsx            Animated counters
    WhyChoose.jsx        Traditional buying vs GoBar comparison table
    Testimonials.jsx     Customer review cards
    DownloadCTA.jsx      Final download call-to-action
    Footer.jsx            Links, socials, legal
    StoreBadges.jsx        Reusable App Store / Google Play buttons
    PhoneFrame.jsx          Reusable phone chrome
```

## Design notes

- Brand colors: primary `#00A86B`, ink `#0F172A`, surface `#F5F7FA`, background `#FFFFFF`, text `#1E293B` — wired into `tailwind.config.js`.
- Typography: Fraunces (display/headlines), Inter (body/UI), IBM Plex Mono (the price ticker) — loaded via Google Fonts in `index.html`.
- Signature element: a scrolling wholesale price-comparison ticker under the hero, echoing the app's core "compare prices across suppliers" value prop.
- `prefers-reduced-motion` is respected globally in `src/index.css`.
- App screens are hand-built UI mockups (no placeholder images needed) so everything renders crisply at any resolution.
