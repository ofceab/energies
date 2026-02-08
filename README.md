# KTECH — International Energy Brokerage (Website)

React-based multi-page website for KTECH International Energy Brokerage. Built for **static hosting**: no server required.

## Stack

- **React 18** + **Vite** — fast build and dev
- **React Router** — client-side routing
- No Next.js — output is static files only

## Commands

```bash
npm install
npm run dev     # Development at http://localhost:5173
npm run build   # Production build → `dist/`
npm run preview # Serve `dist/` locally (e.g. http://localhost:4173)
```

## Deploy (Static Hosting)

1. Run `npm run build`.
2. Upload the contents of the **`dist/`** folder to your host.

**SPA fallback (required):** Because the app uses client-side routing, the server must serve `index.html` for all routes (so React Router can handle them). Configure as follows:

- **Netlify:** Add a file `public/_redirects` with: `/*    /index.html   200`
- **Vercel:** Add `vercel.json` with `"rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]`
- **GitHub Pages / Firebase / other:** Set 404 page to `index.html` or equivalent “single page app” rule.

**GitHub Pages:** Use `VITE_BASE_PATH=/your-repo-name/ npm run build` so images and assets load at `https://username.github.io/your-repo-name/`. Deploy the full `dist/` (including `images/`). See `vite.config.js` for the default repo name.

## Contact Form

The contact form is set up for **Formspree** (or any form endpoint):

1. Create a form at [formspree.io](https://formspree.io) and get your form ID.
2. In `src/pages/Contact.jsx`, replace `YOUR_FORM_ID` in the form `action` with your Formspree form ID, e.g.  
   `action="https://formspree.io/f/abcdexyz"`

Until you replace `YOUR_FORM_ID`, the form will only show a success message locally (demo mode). After updating, submissions will be sent to Formspree and you can receive emails or use their dashboard.

## Structure

- `src/pages/` — Home, What We Do, Products, Services, Why KTECH, About Us, Partners & Compliance, Insights, Contact
- `src/components/` — Layout, Header, Footer
- `src/index.css` — Design system (colors, typography, layout)
- `public/` — Favicon, static assets

## Content

All copy is written for KTECH — International Energy Brokerage: institutional tone, compliance-aware, no guarantees or pricing. Products: EN590 10 ppm, Jet A1, Fuel Oil. Contact: energies@konantech.net; Cocody, Abidjan, Côte d'Ivoire.
