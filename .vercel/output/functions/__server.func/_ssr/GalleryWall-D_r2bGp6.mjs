import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { p as p3Url, d as dpUrl, c as cUrl, f as familyUrl } from "./router-B350lCEM.mjs";
import { h as FiX, b as FiArrowRight } from "../_libs/react-icons.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
const pUrl = "/assets/p1-DGEE5TpZ.jpeg";
const c2Url = "/assets/c2-Cgehw6Gn.jpeg";
const cp1Url = "/assets/cp1-ByEzG515.jpeg";
const cc1Url = "/assets/cc1-DKUCd0E5.jpeg";
const cp3Url = "/assets/p3-CkeG7N1t.jpeg";
const cc2Url = "/assets/cc2-BtYDypMm.jpeg";
const cdpUrl = "/assets/cdp-DPf5lNtV.jpeg";
const cfamilyUrl = "/assets/cfamily-nPFRnc8V.jpeg";
const transformationPairs = [
  // Row 1 (desktop) / Rows 1–2 (mobile)
  { id: "detailed", originalSrc: cdpUrl, originalAlt: "Original photo – detailed portrait", sketchSrc: dpUrl, sketchAlt: "Detailed pencil portrait sketch" },
  { id: "portrait-3", originalSrc: cp3Url, originalAlt: "Original photo – portrait 3", sketchSrc: p3Url, sketchAlt: "Pencil portrait sketch – outdoors" },
  // Row 2 (desktop) / Rows 3–4 (mobile)
  { id: "portrait-1", originalSrc: cp1Url, originalAlt: "Original photo – portrait 1", sketchSrc: pUrl, sketchAlt: "Pencil portrait sketch" },
  { id: "couple-1", originalSrc: cc1Url, originalAlt: "Original photo – couple 1", sketchSrc: cUrl, sketchAlt: "Couple pencil sketch" },
  // Row 3 (desktop) / Rows 5–6 (mobile)
  { id: "couple-2", originalSrc: cc2Url, originalAlt: "Original photo – couple 2", sketchSrc: c2Url, sketchAlt: "Two-figure pencil sketch" },
  { id: "family", originalSrc: cfamilyUrl, originalAlt: "Original photo – family", sketchSrc: familyUrl, sketchAlt: "Family portrait sketch" }
];
const artGallery = [
  { id: "p", src: pUrl, alt: "Pencil portrait sketch" },
  { id: "p3", src: p3Url, alt: "Pencil portrait sketch – outdoors" },
  { id: "dp", src: dpUrl, alt: "Detailed pencil portrait sketch" },
  { id: "c", src: cUrl, alt: "Couple wedding pencil sketch" },
  { id: "c2", src: c2Url, alt: "Two-figure pencil sketch" },
  { id: "family", src: familyUrl, alt: "Hand-drawn family portrait sketch" }
];
function Lightbox({
  src,
  alt,
  onClose
}) {
  reactExports.useEffect(() => {
    if (!src) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [src, onClose]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: src && /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      onClick: onClose,
      className: "fixed inset-0 z-[150] flex items-center justify-center bg-black/70 p-6 backdrop-blur-md",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: onClose,
            "aria-label": "Close preview",
            className: "absolute right-6 top-6 rounded-full bg-white/15 p-2 text-white backdrop-blur-md hover:bg-white/25",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(FiX, { size: 22 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.img,
          {
            initial: { scale: 0.92, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            exit: { scale: 0.92, opacity: 0 },
            transition: { type: "spring", stiffness: 200, damping: 24 },
            src,
            alt: alt ?? "",
            onClick: (e) => e.stopPropagation(),
            className: "max-h-[88vh] max-w-[92vw] rounded-2xl shadow-2xl"
          }
        )
      ]
    }
  ) });
}
function GalleryWall() {
  const [open, setOpen] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "gallery", className: "relative py-28 md:py-36", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start justify-between gap-6 md:flex-row md:items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-hand text-2xl text-[var(--brand-accent)]", children: "— the wall" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display mt-2 text-5xl leading-[1] tracking-tight md:text-7xl", children: [
            "A wall of",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", children: "tiny universes." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/gallery",
            "data-hover": true,
            className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium transition-colors hover:bg-foreground hover:text-background",
            children: [
              "See full gallery ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(FiArrowRight, {})
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TransformationGrid, { onOpen: setOpen })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbox, { src: open?.src ?? null, alt: open?.alt, onClose: () => setOpen(null) })
  ] });
}
function TransformationGrid({ onOpen }) {
  return (
    /**
     * Desktop: 4 cols  → Original | Sketch | Original | Sketch
     * Mobile:  2 cols  → Original | Sketch  (one pair per row)
     *
     * We flatten each pair into [original, sketch] and lay them in a 4-col
     * (desktop) / 2-col (mobile) grid. Because we have 6 pairs = 12 images,
     * desktop shows rows of 4 (2 pairs per row) and mobile shows rows of 2
     * (1 pair per row). No duplicates, no repeats.
     */
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5", children: transformationPairs.map((pair, pairIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        GalleryCard,
        {
          src: pair.originalSrc,
          alt: pair.originalAlt,
          badge: "Original",
          badgeStyle: "bg-card/90 text-foreground",
          delay: pairIdx * 0.08,
          onOpen
        },
        `${pair.id}-original`
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        GalleryCard,
        {
          src: pair.sketchSrc,
          alt: pair.sketchAlt,
          badge: "Sketch",
          badgeStyle: "bg-foreground/90 text-background",
          delay: pairIdx * 0.08 + 0.04,
          onOpen
        },
        `${pair.id}-sketch`
      )
    ] })) })
  );
}
function GalleryCard({
  src,
  alt,
  badge,
  badgeStyle,
  delay,
  onOpen
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.button,
    {
      initial: { opacity: 0, y: 32 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-60px" },
      transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] },
      onClick: () => onOpen({ src, alt }),
      "data-hover": true,
      className: "group relative block w-full break-inside-avoid overflow-hidden rounded-2xl border border-border bg-card p-2 text-left shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src,
            alt,
            loading: "lazy",
            className: "block w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-[1.07]"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: `font-hand absolute left-3 top-3 rounded-full px-3 py-0.5 text-xs backdrop-blur-sm ${badgeStyle}`,
            children: badge
          }
        )
      ]
    }
  );
}
function buildOrganicTiles(list, repeats = 2) {
  const expanded = Array.from({ length: repeats }, () => list).flat();
  return expanded.map((g, i) => {
    const s1 = ((i + 1) * 9301 + 49297) % 233280;
    const s2 = ((i + 7) * 4801 + 9173) % 99991;
    const s3 = ((i + 3) * 7919 + 1237) % 65537;
    const rot = (s1 / 233280 - 0.5) * 6;
    const delay = s2 / 99991 * 4;
    const duration = 5 + s3 / 65537 * 4;
    const featured = s1 % 5 === 0;
    const marginTop = s2 % 4 * 6;
    return { key: `${g.id}-${i}`, id: g.id, src: g.src, alt: g.alt, rot, delay, duration, featured, marginTop };
  });
}
function OrganicMasonry({
  tiles,
  onOpen
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 columns-2 gap-5 sm:columns-2 md:columns-3 lg:columns-4 [column-fill:_balance]", children: tiles.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick: () => onOpen(g),
      "data-hover": true,
      style: {
        transform: `rotate(${g.rot}deg)`,
        marginTop: g.marginTop,
        animationDelay: `${g.delay}s`,
        animationDuration: `${g.duration}s`,
        ["--r"]: `${g.rot}deg`
      },
      className: [
        "float-y group mb-5 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-border bg-card p-2 text-left shadow-[var(--shadow-soft)] transition-all duration-500 hover:!rotate-0 hover:-translate-y-2 hover:shadow-[var(--shadow-glow)]",
        g.featured ? "ring-1 ring-[var(--brand-accent)]/30" : ""
      ].join(" "),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: g.src,
          alt: g.alt,
          loading: "lazy",
          className: "block w-full transition-transform duration-700 group-hover:scale-[1.07]"
        }
      ) })
    },
    g.key
  )) });
}
export {
  GalleryWall as G,
  Lightbox as L,
  OrganicMasonry as O,
  artGallery as a,
  buildOrganicTiles as b,
  cdpUrl as c
};
