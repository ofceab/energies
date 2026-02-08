// Professional, royalty-free imagery (Unsplash). Replace with local paths in public/ if preferred.
const W = (w, q = 85) => `?w=${w}&q=${q}`

export const images = {
  hero: `https://images.unsplash.com/photo-1473341304170-971dccb5ac1e${W(1600)}`,
  refinery: `https://images.unsplash.com/photo-1473341304170-971dccb5ac1e${W(1200)}`,
  terminal: `https://images.unsplash.com/photo-1581092160562-40aa08e78837${W(1200)}`,
  aviation: `https://images.unsplash.com/photo-1436498594115-2d1ec2f42849${W(800)}`,
  marine: `https://images.unsplash.com/photo-1566576721346-d4a3b4eaad35${W(800)}`,
  office: `https://images.unsplash.com/photo-1497366216548-37526070297c${W(1000)}`,
  pipeline: `https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1${W(1200)}`,
  global: `https://images.unsplash.com/photo-1524661135-423995f22d0b${W(1200)}`,
  handshake: `https://images.unsplash.com/photo-1557804506-669a67965ba0${W(800)}`,
}
