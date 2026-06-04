import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { artGallery } from "@/lib/art-assets";
import { Lightbox } from "@/components/site/Lightbox";
import { FiArrowRight } from "react-icons/fi";

export function GalleryWall() {
  const [open, setOpen] = useState<{ src: string; alt: string } | null>(null);
  const tiles = useMemo(() => buildOrganicTiles(artGallery, 2), []);

  return (
    <section id="gallery" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
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

        <OrganicMasonry tiles={tiles} onOpen={(t) => setOpen({ src: t.src, alt: t.alt })} />
      </div>

      <Lightbox src={open?.src ?? null} alt={open?.alt} onClose={() => setOpen(null)} />
    </section>
  );
}

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

/**
 * Deterministic pseudo-shuffle + per-tile organic params (rotation, float
 * timing, occasional "featured" emphasis, vertical offset). Pure function of
 * the input list so new images added to `artGallery` flow in automatically.
 */
export function buildOrganicTiles(list: typeof artGallery, repeats = 2): OrganicTile[] {
  const expanded = Array.from({ length: repeats }, () => list).flat();
  return expanded.map((g, i) => {
    const s1 = ((i + 1) * 9301 + 49297) % 233280;
    const s2 = ((i + 7) * 4801 + 9173) % 99991;
    const s3 = ((i + 3) * 7919 + 1237) % 65537;
    const rot = (s1 / 233280 - 0.5) * 6; // -3..+3 deg
    const delay = (s2 / 99991) * 4;       // 0..4s
    const duration = 5 + (s3 / 65537) * 4; // 5..9s
    const featured = s1 % 5 === 0;         // ~20%
    const marginTop = (s2 % 4) * 6;        // 0,6,12,18 px stagger
    return {
      key: `${g.id}-${i}`,
      id: g.id,
      src: g.src,
      alt: g.alt,
      rot,
      delay,
      duration,
      featured,
      marginTop,
    };
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
