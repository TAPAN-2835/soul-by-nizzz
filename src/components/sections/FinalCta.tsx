import { motion } from "framer-motion";
import { FiInstagram, FiArrowRight } from "react-icons/fi";
import { SparklesLayer } from "@/components/site/SparklesLayer";
import { INSTAGRAM_URL } from "@/lib/site-data";

export function FinalCta() {
  return (
    <section id="cta" className="relative isolate overflow-hidden py-32 md:py-44">
      <div className="absolute inset-0 -z-10 mesh-bg" />
      <SparklesLayer count={14} />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="font-display text-balance text-5xl leading-[1.05] tracking-tight md:text-7xl"
        >
          Your memories deserve more than a <span className="italic text-[var(--brand-accent)]">gallery folder.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-serif mx-auto mt-6 max-w-xl text-xl italic text-foreground/70"
        >
          Turn them into art that lives on a wall, not a phone.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            data-hover
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-base font-medium text-background shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.04]"
          >
            Order Now <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            data-hover
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-8 py-4 text-base font-medium backdrop-blur-md hover:bg-card"
          >
            <FiInstagram /> Message on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
