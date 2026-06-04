import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cdpUrl, dpUrl } from "@/lib/art-assets";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  }, []);

  const onDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    update(e.clientX);
  };
  const onMove = (e: React.PointerEvent) => {
    if (dragging.current) update(e.clientX);
  };
  const onUp = () => { dragging.current = false; };

  return (
    <section id="before-after" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="font-hand text-2xl text-[var(--brand-accent)]">— see the magic</span>
          <h2 className="font-display mt-2 text-5xl leading-[1] tracking-tight md:text-7xl">
            From photo<br /><span className="italic">to sketch.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-foreground/70">
            Drag the slider. Watch a real moment become a hand-drawn keepsake.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto mt-14 max-w-3xl"
        >
          <div
            ref={ref}
            onPointerDown={onDown}
            onPointerMove={onMove}
            onPointerUp={onUp}
            onPointerCancel={onUp}
            className="relative aspect-square select-none overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)] touch-none"
            data-hover
          >
            <img src={dpUrl} alt="Hand-drawn sketch result" className="absolute inset-0 h-full w-full object-cover" />
            <img
              src={cdpUrl}
              alt="Original photo"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            />

            <span className="font-hand absolute left-4 top-4 rounded-full bg-card/85 px-3 py-1 text-sm backdrop-blur-md">photo</span>
            <span className="font-hand absolute right-4 top-4 rounded-full bg-foreground/85 px-3 py-1 text-sm text-background backdrop-blur-md">sketch</span>

            <div
              className="absolute inset-y-0 w-[2px] bg-white/90 shadow-[0_0_40px_8px_var(--brand-accent)]"
              style={{ left: `${pos}%` }}
            >
              <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-foreground text-background ring-4 ring-white/70 shadow-[var(--shadow-glow)]">
                <span className="text-lg">⇄</span>
              </div>
            </div>
          </div>
          <p className="font-hand mt-4 text-center text-foreground/50">drag the handle ←→</p>
        </motion.div>
      </div>
    </section>
  );
}
