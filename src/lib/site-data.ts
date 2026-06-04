import { pUrl, p3Url, dpUrl, cUrl, cdpUrl, familyUrl, artGallery } from "@/lib/art-assets";

export const INSTAGRAM_URL =
  "https://www.instagram.com/soul_by_nizz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

export const collections = [
  {
    title: "Simple Sketch",
    price: "₹120",
    blurb: "A delicate line portrait — perfect for everyday memories.",
    image: p3Url,
    tag: "Starter",
  },
  {
    title: "Detailed Portrait",
    price: "₹180",
    blurb: "Rich graphite shading, soulful eyes, every little detail.",
    image: dpUrl,
    tag: "Bestseller",
  },
  {
    title: "Couple Sketch",
    price: "₹240",
    blurb: "Two souls, one frame — the perfect anniversary gift.",
    image: cUrl,
    tag: "Romantic",
  },
  {
    title: "Family Sketch",
    price: "₹280",
    blurb: "Up to 4 people in one timeless hand-drawn keepsake.",
    image: familyUrl,
    tag: "Forever",
  },
] as const;

export const whyFeatures = [
  { title: "Handmade Feel", text: "Every stroke is drawn by hand — no filters, no shortcuts.", emoji: "✍️", span: "md:col-span-2" },
  { title: "Affordable Pricing", text: "Premium art that doesn't break the bank.", emoji: "💸", span: "" },
  { title: "Perfect Gift", text: "Anniversaries, birthdays, just because.", emoji: "🎁", span: "" },
  { title: "High Quality Artwork", text: "Archival paper, fine graphite, gallery finish.", emoji: "🖼️", span: "md:col-span-2" },
  { title: "Fast Delivery", text: "Ready in 5–7 days, shipped pan-India.", emoji: "✈️", span: "" },
  { title: "Personalized Memories", text: "Tell us the story. We'll draw the feeling.", emoji: "💌", span: "md:col-span-2" },
] as const;

export const testimonials = [
  { name: "Ananya R.", handle: "@ananya.r", text: "I cried when I unwrapped it. It looked exactly like my dadi's smile. ✨", emoji: "🌸" },
  { name: "Karan & Mehak", handle: "@karanmehak", text: "Our anniversary gift to ourselves. It's hanging above our bed now.", emoji: "💕" },
  { name: "Priya S.", handle: "@priyaaaa", text: "Genuinely the most thoughtful gift I've ever given. 10/10.", emoji: "🥹" },
  { name: "Rhea M.", handle: "@rhea.m", text: "The texture, the shading — it feels alive. Pinterest-worthy fr.", emoji: "🤎" },
  { name: "Ishaan V.", handle: "@ishaan.v", text: "Got one made of my late grandfather. Best decision ever.", emoji: "🕊️" },
  { name: "Tara K.", handle: "@taraaa", text: "Soft girl era unlocked. My wall finally has a soul.", emoji: "🌷" },
] as const;

export const galleryImages = artGallery;
export { pUrl, p3Url, c2Url, dpUrl, cUrl, cdpUrl, familyUrl };

export const faqs = [
  {
    q: "How do I order?",
    a: "DM us on Instagram @soul_by_nizz with the photo and which sketch style you'd like. We'll confirm the price, share the payment link, and start drawing.",
  },
  {
    q: "How long does it take?",
    a: "Most sketches are finished in 5–7 days. Rush orders are possible — just ask when you message us.",
  },
  {
    q: "What photos work best?",
    a: "High-resolution, well-lit photos with the face clearly visible. Natural daylight portraits look stunning. We'll guide you if you're unsure.",
  },
  {
    q: "Can I order couples and family sketches?",
    a: "Absolutely. Couple sketches and family sketches (up to 4 people) are some of our most loved pieces.",
  },
] as const;
