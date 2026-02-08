// Local images in public/images/ — always load reliably (no external CDN).
// Replace these SVGs with your own photos (e.g. hero.jpg, refinery.jpg) in public/images/ as needed.
const base = typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL
  ? import.meta.env.BASE_URL
  : './'

export const images = {
  hero: `${base}images/hero.svg`,
  refinery: `${base}images/refinery.svg`,
  terminal: `${base}images/terminal.svg`,
  aviation: `${base}images/aviation.svg`,
  marine: `${base}images/marine.svg`,
  office: `${base}images/office.svg`,
  pipeline: `${base}images/pipeline.svg`,
  global: `${base}images/global.svg`,
  handshake: `${base}images/handshake.svg`,
}
