import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { b as buildOrganicTiles, O as OrganicMasonry, L as Lightbox, a as artGallery } from "./GalleryWall-D6jcunZw.mjs";
import { I as INSTAGRAM_URL } from "./router-B4wiJK9H.mjs";
import { a as FiArrowLeft, F as FiInstagram } from "../_libs/react-icons.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/lenis.mjs";
function GalleryPage() {
  const [open, setOpen] = reactExports.useState(null);
  const tiles = reactExports.useMemo(() => buildOrganicTiles(artGallery, 3), []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative pt-32 pb-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground", "data-hover": true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FiArrowLeft, {}),
        " back home"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-hand text-2xl text-[var(--brand-accent)]", children: "— the full collection" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display mt-2 text-6xl leading-[1] tracking-tight md:text-8xl", children: [
          "Gallery ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", children: "wall." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-xl text-foreground/70", children: "Every sketch on this page started as a photograph someone loved. Tap any piece to feel it bigger." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(OrganicMasonry, { tiles, onOpen: (t) => setOpen({
        src: t.src,
        alt: t.alt
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: INSTAGRAM_URL, target: "_blank", rel: "noreferrer", "data-hover": true, className: "inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-base font-medium text-background shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.04]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FiInstagram, {}),
        " Order yours on Instagram"
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbox, { src: open?.src ?? null, alt: open?.alt, onClose: () => setOpen(null) })
  ] });
}
export {
  GalleryPage as component
};
