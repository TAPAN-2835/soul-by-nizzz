import logoUrl from "@/assets/art/logo.jpeg";
import pUrl from "@/assets/art/p1.jpeg";
import p3Url from "@/assets/art/p3.jpeg";
import cUrl from "@/assets/art/c1.jpeg";
import c2Url from "@/assets/art/c2.jpeg";
import dpUrl from "@/assets/art/dp.jpeg";
import cdpUrl from "@/assets/art/cdp.jpeg";
import familyUrl from "@/assets/art/family.jpeg";

export type ArtPiece = { src: string; alt: string; id: string };

export const artGallery: ArtPiece[] = [
  { id: "p",     src: pUrl,     alt: "Pencil portrait sketch" },
  { id: "p3",     src: p3Url,     alt: "Pencil portrait sketch - outdoors" },
  { id: "dp",     src: dpUrl,     alt: "Detailed mixed-media portrait sketch" },
  { id: "c",     src: cUrl,     alt: "Couple wedding pencil sketch" },
  { id: "c2",     src: c2Url,     alt: "Two-figure pencil sketch" },
  { id: "family", src: familyUrl, alt: "Hand-drawn family portrait sketch" },
];

export { logoUrl, pUrl, p3Url, cUrl, c2Url, dpUrl, cdpUrl, familyUrl };