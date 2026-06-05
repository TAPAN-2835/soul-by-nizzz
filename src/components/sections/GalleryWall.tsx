import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { transformationPairs, artGallery } from "@/lib/art-assets";
import { Lightbox } from "@/components/site/Lightbox";
import { FiArrowRight } from "react-icons/fi";

type LightboxItem = { src: string; alt: string };

export function GalleryWall() {
  const [open, setOpen] = useState<LightboxItem | null>(null);

  return (
    <section id="gallery" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="font-hand text-2xl text-[var(--brand-accent)]">— the wall</span>
            <h2 className="font-display mt-2 text-5xl leading-[1] tracking-tight md:text-7xl">
              A wall of<br /><span className="italic">tiny universes.</span>
            </h2>
          </div>
          <Link
            to="/gallery"
            data-hover
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
          >
            See full gallery <FiArrowRight />
          </Link>
        </div>

        {/* Transformation grid */}
        <TransformationGrid onOpen={setOpen} />
      </div>

      <Lightbox src={open?.src ?? null} alt={open?.alt} onClose={() => setOpen(null)} />
    </section>
  );
}

function TransformationGrid({ onOpen }: { onOpen: (item: LightboxItem) => void }) {
  return (
    /**
     * Desktop: 4 cols  → Original | Sketch | Original | Sketch
     * Mobile:  2 cols  → Original | Sketch  (one pair per row)
     *
     * We flatten each pair into [original, sketch] and lay them in a 4-col
     * (desktop) / 2-col (mobile) grid. Because we have 6 pairs = 12 images,
     * desktop shows rows of 4 (2 pairs per row) and mobile shows rows of 2
     * (1 pair per row). No duplicates, no repeats.
     */
    <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
      {transformationPairs.map((pair, pairIdx) => (
        <>
          {/* Original card */}
          <GalleryCard
            key={`${pair.id}-original`}
            src={pair.originalSrc}
            alt={pair.originalAlt}
            badge="Original"
            badgeStyle="bg-card/90 text-foreground"
            delay={pairIdx * 0.08}
            onOpen={onOpen}
          />
          {/* Sketch card */}
          <GalleryCard
            key={`${pair.id}-sketch`}
            src={pair.sketchSrc}
            alt={pair.sketchAlt}
            badge="Sketch"
            badgeStyle="bg-foreground/90 text-background"
            delay={pairIdx * 0.08 + 0.04}
            onOpen={onOpen}
          />
        </>
      ))}
    </div>
  );
}

function GalleryCard({
  src,
  alt,
  badge,
  badgeStyle,
  delay,
  onOpen,
}: {
  src: string;
  alt: string;
  badge: "Original" | "Sketch";
  badgeStyle: string;
  delay: number;
  onOpen: (item: LightboxItem) => void;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onOpen({ src, alt })}
      data-hover
      className="group relative block w-full break-inside-avoid overflow-hidden rounded-2xl border border-border bg-card p-2 text-left shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
    >
      {/* Image */}
      <div className="overflow-hidden rounded-xl">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="block w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-[1.07]"
        />
      </div>

      {/* Badge */}
      <span
        className={`font-hand absolute left-3 top-3 rounded-full px-3 py-0.5 text-xs backdrop-blur-sm ${badgeStyle}`}
      >
        {badge}
      </span>
    </motion.button>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Legacy exports used by /gallery full-page route
// ─────────────────────────────────────────────────────────────────────────────

export type OrganicTile = {
  key: string;
  id: string;
  src: string;
  alt: string;
  rot: number;
  delay: number;
  duration: number;
  featured: boolean;
  marginTop: number;
};

/** Deterministic pseudo-shuffle with per-tile organic params. */
export function buildOrganicTiles(list: typeof artGallery, repeats = 2): OrganicTile[] {
  const expanded = Array.from({ length: repeats }, () => list).flat();
  return expanded.map((g, i) => {
    const s1 = ((i + 1) * 9301 + 49297) % 233280;
    const s2 = ((i + 7) * 4801 + 9173) % 99991;
    const s3 = ((i + 3) * 7919 + 1237) % 65537;
    const rot = (s1 / 233280 - 0.5) * 6;
    const delay = (s2 / 99991) * 4;
    const duration = 5 + (s3 / 65537) * 4;
    const featured = s1 % 5 === 0;
    const marginTop = (s2 % 4) * 6;
    return { key: `${g.id}-${i}`, id: g.id, src: g.src, alt: g.alt, rot, delay, duration, featured, marginTop };
  });
}

export function OrganicMasonry({
  tiles,
  onOpen,
}: {
  tiles: OrganicTile[];
  onOpen: (t: OrganicTile) => void;
}) {
  return (
    <div className="mt-14 columns-2 gap-5 sm:columns-2 md:columns-3 lg:columns-4 [column-fill:_balance]">
      {tiles.map((g) => (
        <button
          key={g.key}
          onClick={() => onOpen(g)}
          data-hover
          style={{
            transform: `rotate(${g.rot}deg)`,
            marginTop: g.marginTop,
            animationDelay: `${g.delay}s`,
            animationDuration: `${g.duration}s`,
            ["--r" as string]: `${g.rot}deg`,
          }}
          className={[
            "float-y group mb-5 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-border bg-card p-2 text-left shadow-[var(--shadow-soft)] transition-all duration-500 hover:!rotate-0 hover:-translate-y-2 hover:shadow-[var(--shadow-glow)]",
            g.featured ? "ring-1 ring-[var(--brand-accent)]/30" : "",
          ].join(" ")}
        >
          <div className="overflow-hidden rounded-xl">
            <img
              src={g.src}
              alt={g.alt}
              loading="lazy"
              className="block w-full transition-transform duration-700 group-hover:scale-[1.07]"
            />
          </div>
        </button>
      ))}
    </div>
  );
}

