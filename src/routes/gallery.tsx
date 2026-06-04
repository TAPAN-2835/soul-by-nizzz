import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { artGallery } from "@/lib/art-assets";
import { INSTAGRAM_URL } from "@/lib/site-data";
import { Lightbox } from "@/components/site/Lightbox";
import { FiArrowLeft, FiInstagram } from "react-icons/fi";
import { buildOrganicTiles, OrganicMasonry } from "@/components/sections/GalleryWall";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Soul By Nizzz" },
      { name: "description", content: "A wall of hand-drawn pencil sketches by Soul By Nizzz — portraits, couples, families, pets, and memories you'll want to hold forever." },
      { property: "og:title", content: "Gallery — Soul By Nizzz" },
      { property: "og:description", content: "Hand-drawn pencil sketch gallery." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [open, setOpen] = useState<{ src: string; alt: string } | null>(null);
  const tiles = useMemo(() => buildOrganicTiles(artGallery, 3), []);

  return (
    <div className="relative pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground" data-hover>
          <FiArrowLeft /> back home
        </Link>

        <div className="mt-8 text-center">
          <span className="font-hand text-2xl text-[var(--brand-accent)]">— the full collection</span>
          <h1 className="font-display mt-2 text-6xl leading-[1] tracking-tight md:text-8xl">
            Gallery <span className="italic">wall.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-foreground/70">
            Every sketch on this page started as a photograph someone loved.
            Tap any piece to feel it bigger.
          </p>
        </div>

        <OrganicMasonry tiles={tiles} onOpen={(t) => setOpen({ src: t.src, alt: t.alt })} />

        <div className="mt-16 text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            data-hover
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-base font-medium text-background shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.04]"
          >
            <FiInstagram /> Order yours on Instagram
          </a>
        </div>
      </div>

      <Lightbox src={open?.src ?? null} alt={open?.alt} onClose={() => setOpen(null)} />
    </div>
  );
}
