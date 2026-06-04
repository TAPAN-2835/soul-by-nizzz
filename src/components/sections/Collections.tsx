import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { collections, INSTAGRAM_URL } from "@/lib/site-data";
import { FiArrowUpRight } from "react-icons/fi";

function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 15 });
  const rotY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 15 });

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Collections() {
  return (
    <section id="collections" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="font-hand text-2xl text-[var(--brand-accent)]">— the collection</span>
            <h2 className="font-display mt-2 text-5xl leading-[1] tracking-tight md:text-7xl">
              Sketches for every<br /><span className="italic">soul.</span>
            </h2>
          </div>
          <p className="max-w-md text-foreground/70">
            Four styles. Endless memories. Pick the one that feels like you — or just DM us and we'll help.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{ perspective: 1000 }}
            >
              <TiltCard className="group relative">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  data-hover
                  className="block overflow-hidden rounded-3xl border border-border bg-card p-3 shadow-[var(--shadow-soft)] transition-shadow duration-500 hover:shadow-[var(--shadow-glow)]"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-[var(--brand-soft)]">
                    <img
                      src={c.image}
                      alt={c.title}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-card/85 px-3 py-1 text-xs backdrop-blur-md">
                      {c.tag}
                    </span>
                    <div className="absolute right-3 top-3 rotate-[8deg]">
                      <div className="rounded-full bg-foreground px-3.5 py-1.5 text-sm font-semibold text-background shadow-[var(--shadow-glow)]">
                        {c.price}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start justify-between gap-3 p-4">
                    <div>
                      <h3 className="font-display text-2xl leading-tight">{c.title}</h3>
                      <p className="mt-1 text-sm text-foreground/70">{c.blurb}</p>
                    </div>
                    <FiArrowUpRight className="mt-1 shrink-0 text-xl transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </a>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
