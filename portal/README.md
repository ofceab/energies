# Konan Technologies — Portal

Single-page portal that presents the two KTECH divisions of Konan Technologies:

- **KTECH Energies** → [energies.konantech.net](https://energies.konantech.net) — Energy & petroleum brokerage
- **KTECH Approval** → [approval.konantech.net](https://approval.konantech.net) — Global equipment & regulatory approval

## Commands

```bash
npm install
npm run dev     # http://localhost:5173
npm run build   # → dist/
npm run preview # serve dist/
```

## Deploy

1. Run `npm run build`.
2. Upload the entire **`dist/`** folder to your host (e.g. Hostinger `public_html` for the root domain, or a subdomain). The build includes `.htaccess` for SPA-friendly routing if needed.

The logo is loaded from `https://approval.konantech.net/assets/images/logo@2x.png`. If that URL is unreachable, a text fallback is shown.
