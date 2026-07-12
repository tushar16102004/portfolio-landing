# Portfolio Landing Page

A dark, single-page portfolio built with React + Vite + TypeScript + Tailwind CSS,
animated with GSAP and Framer Motion, with an HLS video background via hls.js.

## Setup

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Structure

- `src/components/LoadingScreen.tsx` — animated counter loading intro
- `src/components/Navbar.tsx` — floating pill navbar with gradient logo
- `src/components/Hero.tsx` — HLS background video, GSAP entrance, rotating role text
- `src/components/SelectedWorks.tsx` — bento-grid project showcase
- `src/components/Journal.tsx` — horizontal pill list of writing
- `src/components/Explorations.tsx` — pinned + parallax scroll gallery with lightbox
- `src/components/Stats.tsx` — stat counters
- `src/components/Footer.tsx` — HLS video footer, GSAP marquee, contact CTA
- `src/pages/Index.tsx` — composes the page and loading state
- `src/index.css` — design tokens (HSL custom properties) and keyframes

## Notes

- Swap the Unsplash placeholder images in `SelectedWorks.tsx`, `Journal.tsx`,
  and `Explorations.tsx` for your own project imagery.
- The hero and footer both stream the same Mux HLS demo source — replace
  `HLS_SRC` in `Hero.tsx` and `Footer.tsx` with your own video.
- Update the social links, email address, and name/copy to match your details.
