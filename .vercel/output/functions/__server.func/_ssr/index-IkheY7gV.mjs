import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { b as FiArrowRight, c as FiImage, d as FiCamera, e as FiEdit3, f as FiHeart, g as FiArrowUpRight, F as FiInstagram } from "../_libs/react-icons.mjs";
import { p as p3Url, c as cUrl, f as familyUrl, d as dpUrl, I as INSTAGRAM_URL, a as collections, w as whyFeatures, b as faqs, t as testimonials } from "./router-B350lCEM.mjs";
import { G as GalleryWall, c as cdpUrl } from "./GalleryWall-D_r2bGp6.mjs";
import { R as Root2, I as Item, H as Header, T as Trigger2, C as Content2 } from "../_libs/radix-ui__react-accordion.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { m as motion, u as useMotionValue, a as useSpring, b as useTransform } from "../_libs/framer-motion.mjs";
import { C as ChevronDown } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "../_libs/lenis.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-collapsible.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/radix-ui__react-direction.mjs";
function SparklesLayer({ count = 16 }) {
  const sparkles = reactExports.useMemo(
    () => Array.from({ length: count }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 4 + Math.random() * 10,
      delay: Math.random() * 4,
      dur: 4 + Math.random() * 4
    })),
    [count]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 overflow-hidden", children: sparkles.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: "sparkle",
      style: {
        top: `${s.top}%`,
        left: `${s.left}%`,
        width: s.size,
        height: s.size,
        animationDelay: `${s.delay}s`,
        animationDuration: `${s.dur}s`
      }
    },
    s.id
  )) });
}
const floats = [
  { src: p3Url, top: "12%", left: "6%", rot: -8, w: 150, d: 0 },
  { src: cUrl, top: "22%", right: "8%", rot: 6, w: 170, d: 0.15 },
  { src: familyUrl, top: "62%", left: "10%", rot: 7, w: 140, d: 0.3 },
  { src: dpUrl, top: "58%", right: "6%", rot: -10, w: 160, d: 0.45 }
];
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "hero", className: "relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 mesh-bg opacity-90" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent,var(--background)_75%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SparklesLayer, { count: 20 }),
    floats.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 40, rotate: f.rot - 5 },
        animate: { opacity: 1, y: 0, rotate: f.rot },
        transition: { duration: 1, delay: 0.4 + f.d, ease: [0.16, 1, 0.3, 1] },
        className: "float-y absolute hidden md:block",
        style: {
          top: f.top,
          ...f.left ? { left: f.left } : {},
          ...f.right ? { right: f.right } : {},
          ["--r"]: `${f.rot}deg`,
          animationDelay: `${f.d}s`
        },
        "data-hover": true,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[14px] bg-card p-3 shadow-[var(--shadow-soft)] ring-1 ring-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: f.src,
              alt: "",
              width: f.w,
              height: f.w * 1.25,
              style: { width: f.w, height: "auto" },
              className: "rounded-md",
              fetchPriority: "high"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-hand mt-2 text-center text-sm text-foreground/60", children: "a memory ✨" })
        ] })
      },
      i
    )),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-5xl px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.span,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "font-hand inline-block rounded-full border border-border bg-card/60 px-4 py-1 text-base text-foreground/70 backdrop-blur-md",
          children: "✨ hand-drawn pencil sketches, made with soul"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-balance mt-6 text-[clamp(3rem,11vw,9rem)] leading-[0.95] tracking-tight", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.span,
          {
            initial: { opacity: 0, y: 40 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] },
            className: "block",
            children: [
              "SOUL ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-[var(--brand-accent)]", children: "by" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.span,
          {
            initial: { opacity: 0, y: 40 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] },
            className: "block",
            children: "NIZZZ"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay: 0.55 },
          className: "font-serif text-balance mx-auto mt-6 max-w-2xl text-xl italic text-foreground/70 md:text-2xl",
          children: "Turning moments into timeless memories — one pencil stroke at a time."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay: 0.75 },
          className: "mt-10 flex flex-wrap items-center justify-center gap-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: INSTAGRAM_URL,
                target: "_blank",
                rel: "noreferrer",
                "data-hover": true,
                className: "group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-base font-medium text-background shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.04]",
                children: [
                  "Order Your Sketch",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FiArrowRight, { className: "transition-transform group-hover:translate-x-1" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "#gallery",
                "data-hover": true,
                className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-7 py-4 text-base font-medium backdrop-blur-md transition-colors hover:bg-card",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FiImage, {}),
                  " View Gallery"
                ]
              }
            )
          ]
        }
      )
    ] })
  ] });
}
const steps = [
  { icon: FiCamera, title: "Photo", text: "Share your favourite memory with us on Instagram." },
  { icon: FiEdit3, title: "Sketching", text: "Nizzz hand-draws every stroke on archival paper." },
  { icon: FiImage, title: "Final Artwork", text: "We scan, frame-ready, and ship it to your door." },
  { icon: FiHeart, title: "Happy Customer", text: "You open it. You cry a little. It's perfect." }
];
function Story() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "story", className: "relative py-28 md:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-hand text-2xl text-[var(--brand-accent)]", children: "— our process" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display mt-2 text-5xl leading-[1] tracking-tight md:text-7xl", children: [
        "Every picture has",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", children: "a story." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-xl text-foreground/70", children: "From the moment you share your photo to the day it hangs on your wall — here's how a memory becomes art." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-20 grid gap-10 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent md:block" }),
      steps.map((s, i) => {
        const Icon = s.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 40 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-80px" },
            transition: { duration: 0.6, delay: i * 0.12 },
            className: "relative text-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto flex h-18 w-18 items-center justify-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full bg-[var(--brand-mid)] opacity-50 blur-xl" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex h-18 w-18 items-center justify-center rounded-full border border-border bg-card text-2xl shadow-[var(--shadow-soft)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, {}) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-hand mt-3 text-lg text-[var(--brand-accent)]", children: [
                "step 0",
                i + 1
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display mt-1 text-2xl", children: s.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-foreground/70", children: s.text })
            ]
          },
          s.title
        );
      })
    ] })
  ] }) });
}
function TiltCard({ children, className = "" }) {
  const ref = reactExports.useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 15 });
  const rotY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 15 });
  const onMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      ref,
      onMouseMove: onMove,
      onMouseLeave: onLeave,
      style: { rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" },
      className,
      children
    }
  );
}
function Collections() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "collections", className: "relative py-28 md:py-36", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start justify-between gap-6 md:flex-row md:items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-hand text-2xl text-[var(--brand-accent)]", children: "— the collection" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display mt-2 text-5xl leading-[1] tracking-tight md:text-7xl", children: [
          "Sketches for every",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", children: "soul." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-md text-foreground/70", children: "Four styles. Endless memories. Pick the one that feels like you — or just DM us and we'll help." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: collections.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 60 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
        style: { perspective: 1e3 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(TiltCard, { className: "group relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: INSTAGRAM_URL,
            target: "_blank",
            rel: "noreferrer",
            "data-hover": true,
            className: "block overflow-hidden rounded-3xl border border-border bg-card p-3 shadow-[var(--shadow-soft)] transition-shadow duration-500 hover:shadow-[var(--shadow-glow)]",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-2xl bg-[var(--brand-soft)]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: c.image,
                    alt: c.title,
                    loading: "lazy",
                    className: "aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-3 top-3 rounded-full bg-card/85 px-3 py-1 text-xs backdrop-blur-md", children: c.tag }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-3 top-3 rotate-[8deg]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-full bg-foreground px-3.5 py-1.5 text-sm font-semibold text-background shadow-[var(--shadow-glow)]", children: c.price }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl leading-tight", children: c.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-foreground/70", children: c.blurb })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FiArrowUpRight, { className: "mt-1 shrink-0 text-xl transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })
              ] })
            ]
          }
        ) })
      },
      c.title
    )) })
  ] }) });
}
function BeforeAfter() {
  const [pos, setPos] = reactExports.useState(50);
  const ref = reactExports.useRef(null);
  const dragging = reactExports.useRef(false);
  const update = reactExports.useCallback((clientX) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const p = (clientX - r.left) / r.width * 100;
    setPos(Math.max(0, Math.min(100, p)));
  }, []);
  const onDown = (e) => {
    dragging.current = true;
    e.target.setPointerCapture(e.pointerId);
    update(e.clientX);
  };
  const onMove = (e) => {
    if (dragging.current) update(e.clientX);
  };
  const onUp = () => {
    dragging.current = false;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "before-after", className: "relative py-28 md:py-36", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-hand text-2xl text-[var(--brand-accent)]", children: "— see the magic" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display mt-2 text-5xl leading-[1] tracking-tight md:text-7xl", children: [
        "From photo",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", children: "to sketch." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-xl text-foreground/70", children: "Drag the slider. Watch a real moment become a hand-drawn keepsake." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.8 },
        className: "relative mx-auto mt-14 max-w-3xl",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              ref,
              onPointerDown: onDown,
              onPointerMove: onMove,
              onPointerUp: onUp,
              onPointerCancel: onUp,
              className: "relative aspect-square select-none overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)] touch-none",
              "data-hover": true,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: dpUrl, alt: "Hand-drawn sketch result", className: "absolute inset-0 h-full w-full object-cover" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: cdpUrl,
                    alt: "Original photo",
                    className: "absolute inset-0 h-full w-full object-cover",
                    style: { clipPath: `inset(0 ${100 - pos}% 0 0)` }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-hand absolute left-4 top-4 rounded-full bg-card/85 px-3 py-1 text-sm backdrop-blur-md", children: "photo" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-hand absolute right-4 top-4 rounded-full bg-foreground/85 px-3 py-1 text-sm text-background backdrop-blur-md", children: "sketch" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute inset-y-0 w-[2px] bg-white/90 shadow-[0_0_40px_8px_var(--brand-accent)]",
                    style: { left: `${pos}%` },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-foreground text-background ring-4 ring-white/70 shadow-[var(--shadow-glow)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", children: "⇄" }) })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-hand mt-4 text-center text-foreground/50", children: "drag the handle ←→" })
        ]
      }
    )
  ] }) });
}
function WhyLoveIt() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "why", className: "relative py-28 md:py-36", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-hand text-2xl text-[var(--brand-accent)]", children: "— the love" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display mt-2 text-5xl leading-[1] tracking-tight md:text-7xl", children: [
        "Why people",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", children: "fall in love with it." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid auto-rows-[1fr] gap-4 md:grid-cols-3", children: whyFeatures.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.5, delay: i * 0.07 },
        whileHover: { y: -6 },
        "data-hover": true,
        className: `group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-glow)] ${f.span}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[var(--brand-mid)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-60" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl", children: f.emoji }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display mt-4 text-2xl leading-tight", children: f.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-foreground/70", children: f.text })
          ] })
        ]
      },
      f.title
    )) })
  ] }) });
}
const SwiperBundle = reactExports.lazy(async () => {
  const [{ Swiper, SwiperSlide }, { Autoplay, Pagination }] = await Promise.all([
    import("../_libs/swiper.mjs").then(function(n) {
      return n.s;
    }),
    import("../_libs/swiper.mjs").then(function(n) {
      return n.i;
    })
  ]);
  await Promise.resolve({});
  await Promise.resolve({});
  function Carousel() {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Swiper,
      {
        modules: [Autoplay, Pagination],
        spaceBetween: 20,
        slidesPerView: 1.1,
        centeredSlides: true,
        loop: true,
        autoplay: { delay: 4200, disableOnInteraction: false },
        pagination: { clickable: true },
        breakpoints: {
          640: { slidesPerView: 1.6 },
          900: { slidesPerView: 2.4 },
          1200: { slidesPerView: 3.1 }
        },
        className: "!pb-14",
        children: testimonials.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(SwiperSlide, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative h-full rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display absolute right-5 top-1 text-7xl leading-none text-[var(--brand-accent)]/50", children: '"' }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-balance text-xl italic leading-snug", children: t.text }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-full bg-[var(--brand-mid)] text-xl", children: t.emoji }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: t.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-hand text-base text-[var(--brand-accent)]", children: t.handle })
            ] })
          ] })
        ] }) }, t.handle))
      }
    );
  }
  return { default: Carousel };
});
function StaticGrid() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: testimonials.slice(0, 3).map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display block text-6xl leading-none text-[var(--brand-accent)]/50", children: '"' }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-balance mt-2 text-xl italic", children: t.text }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-full bg-[var(--brand-mid)] text-xl", children: t.emoji }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: t.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-hand text-base text-[var(--brand-accent)]", children: t.handle })
      ] })
    ] })
  ] }, t.handle)) });
}
function Testimonials() {
  const [mounted, setMounted] = reactExports.useState(false);
  reactExports.useEffect(() => setMounted(true), []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "love", className: "relative overflow-hidden py-28 md:py-36", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 mesh-bg opacity-50" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-hand text-2xl text-[var(--brand-accent)]", children: "— from the fam" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display mt-2 text-5xl leading-[1] tracking-tight md:text-7xl", children: [
          "Real words. Real",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", children: "happy tears." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.7 },
          className: "mt-14",
          children: mounted ? /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(StaticGrid, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(SwiperBundle, {}) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(StaticGrid, {})
        }
      )
    ] })
  ] });
}
function Counter({ n, suffix }) {
  const [mounted, setMounted] = reactExports.useState(false);
  const [CU, setCU] = reactExports.useState(null);
  reactExports.useEffect(() => {
    setMounted(true);
    import("../_libs/react-countup.mjs").then(function(n2) {
      return n2.i;
    }).then((m) => setCU(() => m.default ?? m.CountUp ?? m));
  }, []);
  if (!mounted || !CU) return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    n,
    suffix
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CU, { end: n, duration: 2.4, enableScrollSpy: true, scrollSpyOnce: true, suffix });
}
const stats = [
  { isCounter: true, n: 20, suffix: "+", label: "Sketches Drawn" },
  { isCounter: false, text: "Join Our", label: "Art Family" },
  { isCounter: true, n: 100, suffix: "%", label: "Made With Heart" }
];
function Instagram() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "insta", className: "relative overflow-hidden py-28 md:py-36", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-hand text-2xl text-[var(--brand-accent)]", children: "— @soul_by_nizz" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display mt-2 text-5xl leading-[1] tracking-tight md:text-7xl", children: [
        "Your memory could",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", children: "be next." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-xl text-foreground/70", children: "A small studio, a steady hand, and a growing little family of memories — be part of the story." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 md:grid-cols-3", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        className: "rounded-3xl border border-border bg-card p-8 text-center shadow-[var(--shadow-soft)] transition-shadow duration-500 hover:shadow-[var(--shadow-glow)]",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-6xl tracking-tight md:text-7xl", children: s.isCounter ? /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { n: s.n, suffix: s.suffix }) : s.text }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-sm text-foreground/70 md:text-base", children: s.label })
        ]
      },
      s.label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: INSTAGRAM_URL,
        target: "_blank",
        rel: "noreferrer",
        "data-hover": true,
        className: "group inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-base font-medium text-background shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.04]",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FiInstagram, { size: 20 }),
          " Follow @soul_by_nizz"
        ]
      }
    ) })
  ] }) });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Accordion = Root2;
const AccordionItem = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Header, { className: "flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Trigger2,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = Trigger2.displayName;
const AccordionContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = Content2.displayName;
function Faq() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "faq", className: "relative py-28 md:py-36", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-hand text-2xl text-[var(--brand-accent)]", children: "— curious?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display mt-2 text-5xl leading-[1] tracking-tight md:text-7xl", children: [
        "Things you might",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", children: "be wondering." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        className: "mt-12 rounded-3xl border border-border bg-card p-2 shadow-[var(--shadow-soft)] md:p-4",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { type: "single", collapsible: true, className: "w-full", children: faqs.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: `item-${i}`, className: "px-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "font-display text-left text-xl hover:no-underline md:text-2xl", children: f.q }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "text-base text-foreground/75", children: f.a })
        ] }, i)) })
      }
    )
  ] }) });
}
function FinalCta() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "cta", className: "relative isolate overflow-hidden py-32 md:py-44", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 mesh-bg" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SparklesLayer, { count: 14 }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-4xl px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.h2,
        {
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-100px" },
          transition: { duration: 0.9 },
          className: "font-display text-balance text-5xl leading-[1.05] tracking-tight md:text-7xl",
          children: [
            "Your memories deserve more than a ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-[var(--brand-accent)]", children: "gallery folder." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.7, delay: 0.15 },
          className: "font-serif mx-auto mt-6 max-w-xl text-xl italic text-foreground/70",
          children: "Turn them into art that lives on a wall, not a phone."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.7, delay: 0.3 },
          className: "mt-10 flex flex-wrap items-center justify-center gap-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: INSTAGRAM_URL,
                target: "_blank",
                rel: "noreferrer",
                "data-hover": true,
                className: "group inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-base font-medium text-background shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.04]",
                children: [
                  "Order Now ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FiArrowRight, { className: "transition-transform group-hover:translate-x-1" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: INSTAGRAM_URL,
                target: "_blank",
                rel: "noreferrer",
                "data-hover": true,
                className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-8 py-4 text-base font-medium backdrop-blur-md hover:bg-card",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FiInstagram, {}),
                  " Message on Instagram"
                ]
              }
            )
          ]
        }
      )
    ] })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Story, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Collections, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BeforeAfter, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhyLoveIt, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GalleryWall, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Faq, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FinalCta, {})
  ] });
}
export {
  Index as component
};
