import { motion } from "framer-motion";
import { FiArrowRight, FiImage } from "react-icons/fi";
import { SparklesLayer } from "@/components/site/SparklesLayer";
import { INSTAGRAM_URL } from "@/lib/site-data";
import { p3Url, cUrl, familyUrl, dpUrl } from "@/lib/art-assets";

const floats = [
  { src: p3Url, top: "12%", left: "6%",  rot: -8,  w: 150, d: 0 },
  { src: cUrl, top: "22%", right: "8%", rot: 6,   w: 170, d: 0.15 },
  { src: familyUrl, top: "62%", left: "10%", rot: 7,   w: 140, d: 0.3 },
  { src: dpUrl,    top: "58%", right: "6%", rot: -10, w: 160, d: 0.45 },
];

export function Hero() {
  return (
    <section id="hero" className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24">
      {/* mesh background */}
      <div className="absolute inset-0 -z-10 mesh-bg opacity-90" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent,var(--background)_75%)]" />
      <SparklesLayer count={20} />

      {/* floating sketch frames */}
      {floats.map((f, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40, rotate: f.rot - 5 }}
          animate={{ opacity: 1, y: 0, rotate: f.rot }}
          transition={{ duration: 1, delay: 0.4 + f.d, ease: [0.16, 1, 0.3, 1] }}
          className="float-y absolute hidden md:block"
          style={{
            top: f.top,
            ...(f.left ? { left: f.left } : {}),
            ...(f.right ? { right: f.right } : {}),
            ["--r" as string]: `${f.rot}deg`,
            animationDelay: `${f.d}s`,
          }}
          data-hover
        >
          <div className="rounded-[14px] bg-card p-3 shadow-[var(--shadow-soft)] ring-1 ring-border">
            <img
              src={f.src}
              alt=""
              width={f.w}
              height={f.w * 1.25}
              style={{ width: f.w, height: "auto" }}
              className="rounded-md"
              fetchPriority="high"
            />
            <div className="font-hand mt-2 text-center text-sm text-foreground/60">a memory ✨</div>
          </div>
        </motion.div>
      ))}

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-hand inline-block rounded-full border border-border bg-card/60 px-4 py-1 text-base text-foreground/70 backdrop-blur-md"
        >
          ✨ hand-drawn pencil sketches, made with soul
        </motion.span>

        <h1 className="font-display text-balance mt-6 text-[clamp(3rem,11vw,9rem)] leading-[0.95] tracking-tight">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            SOUL <span className="italic text-[var(--brand-accent)]">by</span>
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            NIZZZ
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="font-serif text-balance mx-auto mt-6 max-w-2xl text-xl italic text-foreground/70 md:text-2xl"
        >
          Turning moments into timeless memories — one pencil stroke at a time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            data-hover
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-base font-medium text-background shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.04]"
          >
            Order Your Sketch
            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#gallery"
            data-hover
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-7 py-4 text-base font-medium backdrop-blur-md transition-colors hover:bg-card"
          >
            <FiImage /> View Gallery
          </a>
        </motion.div>

      </div>
    </section>
  );
}
