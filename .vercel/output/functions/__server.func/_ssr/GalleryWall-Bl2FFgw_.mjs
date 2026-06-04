import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { p as p3Url, d as dpUrl, c as cUrl, f as familyUrl } from "./router-D8p7HfIi.mjs";
import { h as FiX, b as FiArrowRight } from "../_libs/react-icons.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
const pUrl = "/assets/p1-DGEE5TpZ.jpeg";
const c2Url = "/assets/c2-Cgehw6Gn.jpeg";
const artGallery = [
  { id: "p", src: pUrl, alt: "Pencil portrait sketch" },
  { id: "p3", src: p3Url, alt: "Pencil portrait sketch - outdoors" },
  { id: "dp", src: dpUrl, alt: "Detailed mixed-media portrait sketch" },
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
  const tiles = reactExports.useMemo(() => buildOrganicTiles(artGallery, 2), []);
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(OrganicMasonry, { tiles, onOpen: (t) => setOpen({ src: t.src, alt: t.alt }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbox, { src: open?.src ?? null, alt: open?.alt, onClose: () => setOpen(null) })
  ] });
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
    return {
      key: `${g.id}-${i}`,
      id: g.id,
      src: g.src,
      alt: g.alt,
      rot,
      delay,
      duration,
      featured,
      marginTop
    };
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
  buildOrganicTiles as b
};
