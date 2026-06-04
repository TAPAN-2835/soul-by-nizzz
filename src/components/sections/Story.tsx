import { motion } from "framer-motion";
import { FiCamera, FiEdit3, FiImage, FiHeart } from "react-icons/fi";

const steps = [
  { icon: FiCamera, title: "Photo",          text: "Share your favourite memory with us on Instagram." },
  { icon: FiEdit3,  title: "Sketching",      text: "Nizzz hand-draws every stroke on archival paper." },
  { icon: FiImage,  title: "Final Artwork",  text: "We scan, frame-ready, and ship it to your door." },
  { icon: FiHeart,  title: "Happy Customer", text: "You open it. You cry a little. It's perfect." },
];

export function Story() {
  return (
    <section id="story" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="font-hand text-2xl text-[var(--brand-accent)]">— our process</span>
          <h2 className="font-display mt-2 text-5xl leading-[1] tracking-tight md:text-7xl">
            Every picture has<br />
            <span className="italic">a story.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-foreground/70">
            From the moment you share your photo to the day it hangs on your wall —
            here's how a memory becomes art.
          </p>
        </div>

        <div className="relative mt-20 grid gap-10 md:grid-cols-4">
          <div className="absolute inset-x-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent md:block" />
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative text-center"
              >
                <div className="relative mx-auto flex h-18 w-18 items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-[var(--brand-mid)] opacity-50 blur-xl" />
                  <div className="relative flex h-18 w-18 items-center justify-center rounded-full border border-border bg-card text-2xl shadow-[var(--shadow-soft)]">
                    <Icon />
                  </div>
                </div>
                <div className="font-hand mt-3 text-lg text-[var(--brand-accent)]">step 0{i + 1}</div>
                <h3 className="font-display mt-1 text-2xl">{s.title}</h3>
                <p className="mt-2 text-sm text-foreground/70">{s.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
