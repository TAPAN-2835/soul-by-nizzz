import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiInstagram } from "react-icons/fi";
import { INSTAGRAM_URL } from "@/lib/site-data";

function Counter({ n, suffix }: { n: number; suffix: string }) {
  const [mounted, setMounted] = useState(false);
  const [CU, setCU] = useState<any>(null);
  useEffect(() => {
    setMounted(true);
    import("react-countup").then((m) => setCU(() => m.default ?? (m as any).CountUp ?? m));
  }, []);
  if (!mounted || !CU) return <>{n}{suffix}</>;
  return <CU end={n} duration={2.4} enableScrollSpy scrollSpyOnce suffix={suffix} />;
}

const stats = [
  { isCounter: true, n: 20, suffix: "+", label: "Sketches Drawn" },
  { isCounter: false, text: "Join Our", label: "Art Family" },
  { isCounter: true, n: 100, suffix: "%", label: "Made With Heart" },
];

export function Instagram() {
  return (
    <section id="insta" className="relative overflow-hidden py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="font-hand text-2xl text-[var(--brand-accent)]">— @soul_by_nizz</span>
          <h2 className="font-display mt-2 text-5xl leading-[1] tracking-tight md:text-7xl">
            Your memory could<br /><span className="italic">be next.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-foreground/70">
            A small studio, a steady hand, and a growing little family of memories — be part of the story.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {stats.map((s) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-border bg-card p-8 text-center shadow-[var(--shadow-soft)] transition-shadow duration-500 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="font-display text-6xl tracking-tight md:text-7xl">
                {s.isCounter ? <Counter n={s.n!} suffix={s.suffix!} /> : s.text}
              </div>
              <div className="mt-3 text-sm text-foreground/70 md:text-base">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            data-hover
            className="group inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-base font-medium text-background shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.04]"
          >
            <FiInstagram size={20} /> Follow @soul_by_nizz
          </a>
        </div>
      </div>
    </section>
  );
}
