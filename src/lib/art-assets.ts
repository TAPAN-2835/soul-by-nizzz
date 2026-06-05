import logoUrl from "@/assets/art/logo.jpeg";

// ── Sketch results ────────────────────────────────────────────────────────────
import pUrl    from "@/assets/art/p1.jpeg";     // sketch of cp1.jpeg
import p3Url   from "@/assets/art/p3.jpeg";     // sketch of cp3.jpeg
import cUrl    from "@/assets/art/c1.jpeg";     // sketch of cc1.jpeg
import c2Url   from "@/assets/art/c2.jpeg";     // sketch of cc2.jpeg
import dpUrl   from "@/assets/art/dp.jpeg";     // sketch of cdp.jpeg
import familyUrl from "@/assets/art/family.jpeg"; // sketch of cfamily.jpeg

// ── Original source photos (uploaded by client) ────────────────────────────────
import cp1Url    from "@/assets/art/cp1.jpeg";
import cc1Url    from "@/assets/art/cc1.jpeg";
import cp3Url    from "@/assets/art/cp3.jpeg";
import cc2Url    from "@/assets/art/cc2.jpeg";
import cdpUrl    from "@/assets/art/cdp.jpeg";
import cfamilyUrl from "@/assets/art/cfamily.jpeg";

export type ArtPiece = { src: string; alt: string; id: string };

/** Exact before → after transformation pairs, in display order */
export type TransformationPair = {
  id: string;
  originalSrc: string;
  originalAlt: string;
  sketchSrc: string;
  sketchAlt: string;
};

// Desktop row pattern: Original | Sketch | Original | Sketch (4 per row)
// Order: cp1→p1, cc1→c1, cp3→p3, cc2→c2, cdp→dp, cfamily→family
export const transformationPairs: TransformationPair[] = [
  // Row 1 (desktop) / Rows 1–2 (mobile)
  { id: "detailed",    originalSrc: cdpUrl,      originalAlt: "Original photo – detailed portrait", sketchSrc: dpUrl,     sketchAlt: "Detailed pencil portrait sketch" },
  { id: "portrait-3",  originalSrc: cp3Url,      originalAlt: "Original photo – portrait 3",        sketchSrc: p3Url,     sketchAlt: "Pencil portrait sketch – outdoors" },
  // Row 2 (desktop) / Rows 3–4 (mobile)
  { id: "portrait-1",  originalSrc: cp1Url,      originalAlt: "Original photo – portrait 1",        sketchSrc: pUrl,      sketchAlt: "Pencil portrait sketch" },
  { id: "couple-1",    originalSrc: cc1Url,      originalAlt: "Original photo – couple 1",          sketchSrc: cUrl,      sketchAlt: "Couple pencil sketch" },
  // Row 3 (desktop) / Rows 5–6 (mobile)
  { id: "couple-2",    originalSrc: cc2Url,      originalAlt: "Original photo – couple 2",          sketchSrc: c2Url,     sketchAlt: "Two-figure pencil sketch" },
  { id: "family",      originalSrc: cfamilyUrl,  originalAlt: "Original photo – family",            sketchSrc: familyUrl, sketchAlt: "Family portrait sketch" },
];

/** Standalone pieces used on /gallery page */
export const artGallery: ArtPiece[] = [
  { id: "p",      src: pUrl,      alt: "Pencil portrait sketch" },
  { id: "p3",     src: p3Url,     alt: "Pencil portrait sketch – outdoors" },
  { id: "dp",     src: dpUrl,     alt: "Detailed pencil portrait sketch" },
  { id: "c",      src: cUrl,      alt: "Couple wedding pencil sketch" },
  { id: "c2",     src: c2Url,     alt: "Two-figure pencil sketch" },
  { id: "family", src: familyUrl, alt: "Hand-drawn family portrait sketch" },
];

export {
  logoUrl,
  pUrl, p3Url, cUrl, c2Url, dpUrl, familyUrl,
  cp1Url, cc1Url, cp3Url, cc2Url, cdpUrl, cfamilyUrl,
};