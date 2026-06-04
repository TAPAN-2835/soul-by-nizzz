import { motion } from "framer-motion";
import { whyFeatures } from "@/lib/site-data";

export function WhyLoveIt() {
  return (
    <section id="why" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="font-hand text-2xl text-[var(--brand-accent)]">— the love</span>
          <h2 className="font-display mt-2 text-5xl leading-[1] tracking-tight md:text-7xl">
            Why people<br /><span className="italic">fall in love with it.</span>
          </h2>
        </div>

        <div className="mt-14 grid auto-rows-[1fr] gap-4 md:grid-cols-3">
          {whyFeatures.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -6 }}
              data-hover
              className={`group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-glow)] ${f.span}`}
            >
              <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[var(--brand-mid)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-60" />
              <div className="relative">
                <div className="text-4xl">{f.emoji}</div>
                <h3 className="font-display mt-4 text-2xl leading-tight">{f.title}</h3>
                <p className="mt-2 text-sm text-foreground/70">{f.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
