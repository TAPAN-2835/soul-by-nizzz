import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, L as Link, a as createRootRouteWithContext, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Lenis } from "../_libs/lenis.mjs";
import { F as FiInstagram } from "../_libs/react-icons.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
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
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const appCss = "/assets/styles-B3FR2rl0.css";
function LenisProvider({ children }) {
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });
    let raf = 0;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    const onClick = (e) => {
      const t = e.target;
      const a = t.closest("a[href^='#']");
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el, { offset: -60 });
      }
    };
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
}
function LoadingScreen() {
  const [open, setOpen] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const t = setTimeout(() => setOpen(false), 1700);
    return () => clearTimeout(t);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 1 },
      exit: { opacity: 0, y: "-100%" },
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
      className: "fixed inset-0 z-[200] flex items-center justify-center bg-[var(--brand-cream)]",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 600 120", className: "mx-auto w-[min(80vw,600px)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.text,
          {
            x: "50%",
            y: "78",
            textAnchor: "middle",
            fontFamily: "Playfair Display, serif",
            fontSize: "84",
            fontStyle: "italic",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.2",
            initial: { strokeDasharray: 2e3, strokeDashoffset: 2e3 },
            animate: { strokeDashoffset: 0 },
            transition: { duration: 1.4, ease: "easeInOut" },
            className: "text-foreground",
            children: "soul by nizzz"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 0.9 },
            className: "font-hand mt-3 text-xl text-[var(--brand-accent)]",
            children: "sketching your memory…"
          }
        )
      ] })
    }
  ) });
}
function CustomCursor() {
  const dot = reactExports.useRef(null);
  const ring = reactExports.useRef(null);
  const [enabled, setEnabled] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    document.documentElement.classList.add("cursor-none");
    let x = window.innerWidth / 2, y = window.innerHeight / 2;
    let rx = x, ry = y;
    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
    };
    let raf = 0;
    const loop = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (dot.current) dot.current.style.transform = `translate3d(${x - 4}px, ${y - 4}px, 0)`;
      if (ring.current) ring.current.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    const onOver = (e) => {
      const t = e.target.closest("a, button, [data-hover]");
      if (ring.current) ring.current.dataset.hover = t ? "1" : "0";
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.classList.remove("cursor-none");
    };
  }, []);
  if (!enabled) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: dot,
        "aria-hidden": true,
        className: "pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 rounded-full bg-foreground mix-blend-difference"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: ring,
        "aria-hidden": true,
        "data-hover": "0",
        className: "pointer-events-none fixed left-0 top-0 z-[100] h-9 w-9 rounded-full border border-foreground/40 backdrop-blur-[2px] transition-[width,height,opacity,border-color] duration-200 data-[hover='1']:h-14 data-[hover='1']:w-14 data-[hover='1']:bg-[color-mix(in_oklab,var(--brand-accent)_25%,transparent)] data-[hover='1']:border-transparent",
        style: { marginLeft: 0, marginTop: 0 }
      }
    )
  ] });
}
const THEMES = ["peach", "cloud", "lavender"];
const KEY = "sbn-theme";
function applyTheme(t) {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", t);
}
function useTheme() {
  const [theme, setTheme] = reactExports.useState("peach");
  reactExports.useEffect(() => {
    const saved = typeof window !== "undefined" && localStorage.getItem(KEY);
    if (saved && THEMES.includes(saved)) {
      setTheme(saved);
      applyTheme(saved);
    } else {
      applyTheme("peach");
    }
  }, []);
  const update = reactExports.useCallback((t) => {
    setTheme(t);
    applyTheme(t);
    try {
      localStorage.setItem(KEY, t);
    } catch {
    }
  }, []);
  const cycle = reactExports.useCallback(() => {
    setTheme((cur) => {
      const next = THEMES[(THEMES.indexOf(cur) + 1) % THEMES.length];
      applyTheme(next);
      try {
        localStorage.setItem(KEY, next);
      } catch {
      }
      return next;
    });
  }, []);
  return { theme, setTheme: update, cycle };
}
const SWATCH = {
  peach: "#FEC89A",
  cloud: "#A7C7E7",
  lavender: "#D8B4FE"
};
const LABELS = {
  peach: "Peach Cream",
  cloud: "Cloud Blue Dream",
  lavender: "Soft Lavender"
};
function ThemeSwitcher() {
  const { theme, cycle } = useTheme();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick: cycle,
      "aria-label": `Theme: ${LABELS[theme]}. Click to switch.`,
      title: `Theme: ${LABELS[theme]} — click to switch`,
      "data-hover": true,
      className: "group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-border bg-card/70 backdrop-blur-md transition-transform hover:scale-105 active:scale-95",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", initial: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.span,
        {
          initial: { scale: 0, rotate: -90, opacity: 0 },
          animate: { scale: 1, rotate: 0, opacity: 1 },
          exit: { scale: 0, rotate: 90, opacity: 0 },
          transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
          className: "block h-5 w-5 rounded-full ring-2 ring-foreground/20",
          style: { background: SWATCH[theme], boxShadow: `0 0 18px ${SWATCH[theme]}` }
        },
        theme
      ) })
    }
  );
}
const logoUrl = "/assets/logo-D_ZI9e5e.jpeg";
const p3Url = "/assets/p3-6OEHgyAc.jpeg";
const cUrl = "/assets/c1-BPZZV6W0.jpeg";
const dpUrl = "/assets/dp-LbYOb29w.jpeg";
const familyUrl = "/assets/family-SXEI9GNu.jpeg";
const INSTAGRAM_URL = "https://www.instagram.com/soul_by_nizz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
const collections = [
  {
    title: "Simple Sketch",
    price: "₹120",
    blurb: "A delicate line portrait — perfect for everyday memories.",
    image: p3Url,
    tag: "Starter"
  },
  {
    title: "Detailed Portrait",
    price: "₹180",
    blurb: "Rich graphite shading, soulful eyes, every little detail.",
    image: dpUrl,
    tag: "Bestseller"
  },
  {
    title: "Couple Sketch",
    price: "₹240",
    blurb: "Two souls, one frame — the perfect anniversary gift.",
    image: cUrl,
    tag: "Romantic"
  },
  {
    title: "Family Sketch",
    price: "₹280",
    blurb: "Up to 4 people in one timeless hand-drawn keepsake.",
    image: familyUrl,
    tag: "Forever"
  }
];
const whyFeatures = [
  { title: "Handmade Feel", text: "Every stroke is drawn by hand — no filters, no shortcuts.", emoji: "✍️", span: "md:col-span-2" },
  { title: "Affordable Pricing", text: "Premium art that doesn't break the bank.", emoji: "💸", span: "" },
  { title: "Perfect Gift", text: "Anniversaries, birthdays, just because.", emoji: "🎁", span: "" },
  { title: "High Quality Artwork", text: "Archival paper, fine graphite, gallery finish.", emoji: "🖼️", span: "md:col-span-2" },
  { title: "Fast Delivery", text: "Ready in 5–7 days, shipped pan-India.", emoji: "✈️", span: "" },
  { title: "Personalized Memories", text: "Tell us the story. We'll draw the feeling.", emoji: "💌", span: "md:col-span-2" }
];
const testimonials = [
  { name: "Ananya R.", handle: "@ananya.r", text: "I cried when I unwrapped it. It looked exactly like my dadi's smile. ✨", emoji: "🌸" },
  { name: "Karan & Mehak", handle: "@karanmehak", text: "Our anniversary gift to ourselves. It's hanging above our bed now.", emoji: "💕" },
  { name: "Priya S.", handle: "@priyaaaa", text: "Genuinely the most thoughtful gift I've ever given. 10/10.", emoji: "🥹" },
  { name: "Rhea M.", handle: "@rhea.m", text: "The texture, the shading — it feels alive. Pinterest-worthy fr.", emoji: "🤎" },
  { name: "Ishaan V.", handle: "@ishaan.v", text: "Got one made of my late grandfather. Best decision ever.", emoji: "🕊️" },
  { name: "Tara K.", handle: "@taraaa", text: "Soft girl era unlocked. My wall finally has a soul.", emoji: "🌷" }
];
const faqs = [
  {
    q: "How do I order?",
    a: "DM us on Instagram @soul_by_nizz with the photo and which sketch style you'd like. We'll confirm the price, share the payment link, and start drawing."
  },
  {
    q: "How long does it take?",
    a: "Most sketches are finished in 5–7 days. Rush orders are possible — just ask when you message us."
  },
  {
    q: "What photos work best?",
    a: "High-resolution, well-lit photos with the face clearly visible. Natural daylight portraits look stunning. We'll guide you if you're unsure."
  },
  {
    q: "Can I order couples and family sketches?",
    a: "Absolutely. Couple sketches and family sketches (up to 4 people) are some of our most loved pieces."
  }
];
const links = [
  { href: "/#story", label: "Story" },
  { href: "/#collections", label: "Collections" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#faq", label: "FAQ" }
];
function Nav() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "header",
    {
      className: `fixed inset-x-0 top-0 z-40 transition-all ${scrolled ? "py-2" : "py-4"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `mx-auto flex max-w-7xl items-center justify-between gap-2 rounded-full px-3 transition-all sm:gap-4 sm:px-4 md:px-6 ${scrolled ? "bg-card/70 backdrop-blur-xl border border-border shadow-[var(--shadow-soft)] py-2 mx-3 md:mx-6" : "py-3"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "group flex min-w-0 items-center gap-2.5", "data-hover": true, "aria-label": "Soul By Nizzz — home", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-9 w-9 shrink-0 overflow-hidden rounded-full ring-1 ring-border shadow-[var(--shadow-soft)] sm:h-10 sm:w-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoUrl, alt: "Soul By Nizzz", className: "h-full w-full object-cover" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display truncate text-base tracking-tight sm:text-lg md:text-xl", children: [
                "soul ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-hand text-xl text-[var(--brand-accent)] sm:text-2xl md:text-3xl", children: "by" }),
                " nizzz"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-7 md:flex", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: l.href,
                "data-hover": true,
                className: "text-sm text-foreground/70 transition-colors hover:text-foreground",
                children: l.label
              },
              l.href
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeSwitcher, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: INSTAGRAM_URL,
                  target: "_blank",
                  rel: "noreferrer",
                  "data-hover": true,
                  "aria-label": "Soul by Nizzz on Instagram",
                  className: "hidden h-9 items-center gap-2 rounded-full bg-foreground px-4 text-sm font-medium text-background transition-transform hover:scale-[1.03] md:inline-flex",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FiInstagram, {}),
                    " Follow"
                  ]
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative border-t border-border bg-[color-mix(in_oklab,var(--brand-soft)_70%,var(--background))]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-14 md:flex-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-center md:text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-14 w-14 overflow-hidden rounded-full ring-1 ring-border shadow-[var(--shadow-soft)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoUrl, alt: "Soul By Nizzz", className: "h-full w-full object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-2xl tracking-tight", children: [
            "soul ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-hand text-3xl text-[var(--brand-accent)]", children: "by" }),
            " nizzz"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Hand-drawn memories, made with love." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex items-center gap-6 text-sm text-foreground/70", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#story", className: "hover:text-foreground", children: "Story" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#collections", className: "hover:text-foreground", children: "Collections" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/gallery", className: "hover:text-foreground", children: "Gallery" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#faq", className: "hover:text-foreground", children: "FAQ" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: INSTAGRAM_URL,
          target: "_blank",
          rel: "noreferrer",
          className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-transform hover:scale-[1.03]",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FiInstagram, {}),
            " @soul_by_nizz"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border py-4 text-center text-xs text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Soul By Nizzz — Every line drawn with a soul."
    ] })
  ] });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$2 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SOUL BY NIZZZ | Custom Sketch Art" },
      { name: "description", content: "Soul By Nizzz transforms your photos into timeless hand-drawn pencil sketches. Custom portraits, couple, and family sketches starting at ₹120." },
      { name: "author", content: "Soul By Nizzz" },
      { property: "og:title", content: "SOUL BY NIZZZ | Custom Sketch Art" },
      { property: "og:description", content: "Custom pencil sketch art from your favourite photos. Hand-drawn with soul." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Soul By Nizzz" },
      { property: "og:image", content: "/logo.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@soul_by_nizz" },
      { name: "theme-color", content: "#FFF1E6" }
    ],
    links: [
      {
        rel: "icon",
        type: "image/jpeg",
        href: "/logo.jpg"
      },
      {
        rel: "stylesheet",
        href: appCss
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600&family=Caveat:wght@400;600&family=Sacramento&display=swap"
      }
    ],
    scripts: [
      {
        children: "try{var t=localStorage.getItem('sbn-theme');if(!t||!['peach','cloud','lavender'].includes(t))t='peach';document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','peach');}"
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Soul By Nizzz",
          description: "Custom hand-drawn pencil sketches from photos — portrait, couple, and family.",
          sameAs: [
            "https://www.instagram.com/soul_by_nizz"
          ]
        })
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$2.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(LenisProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingScreen, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CustomCursor, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "grain relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] }) });
}
const $$splitComponentImporter$1 = () => import("./gallery-CFd8nwMq.mjs");
const Route$1 = createFileRoute("/gallery")({
  head: () => ({
    meta: [{
      title: "Gallery — Soul By Nizzz"
    }, {
      name: "description",
      content: "A wall of hand-drawn pencil sketches by Soul By Nizzz — portraits, couples, families, pets, and memories you'll want to hold forever."
    }, {
      property: "og:title",
      content: "Gallery — Soul By Nizzz"
    }, {
      property: "og:description",
      content: "Hand-drawn pencil sketch gallery."
    }, {
      property: "og:url",
      content: "/gallery"
    }],
    links: [{
      rel: "canonical",
      href: "/gallery"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-OFWzZMR0.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Soul By Nizzz — Hand-drawn pencil sketches from your photos"
    }, {
      name: "description",
      content: "Turn your photos into timeless hand-drawn pencil sketches. Portrait, couple, and family sketches starting at ₹120. Made with soul by Nizzz."
    }, {
      property: "og:title",
      content: "Soul By Nizzz — Hand-drawn pencil sketches"
    }, {
      property: "og:description",
      content: "Turn your photos into timeless hand-drawn pencil sketches."
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const GalleryRoute = Route$1.update({
  id: "/gallery",
  path: "/gallery",
  getParentRoute: () => Route$2
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$2
});
const rootRouteChildren = {
  IndexRoute,
  GalleryRoute
};
const routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultNotFoundComponent: NotFoundComponent
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  INSTAGRAM_URL as I,
  collections as a,
  faqs as b,
  cUrl as c,
  dpUrl as d,
  familyUrl as f,
  p3Url as p,
  router as r,
  testimonials as t,
  whyFeatures as w
};
