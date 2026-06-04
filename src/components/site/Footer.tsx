import { Link } from "@tanstack/react-router";
import { FiInstagram } from "react-icons/fi";
import { INSTAGRAM_URL } from "@/lib/site-data";
import { logoUrl } from "@/lib/art-assets";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-[color-mix(in_oklab,var(--brand-soft)_70%,var(--background))]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-14 md:flex-row">
        <div className="flex items-center gap-4 text-center md:text-left">
          <span className="inline-flex h-14 w-14 overflow-hidden rounded-full ring-1 ring-border shadow-[var(--shadow-soft)]">
            <img src={logoUrl} alt="Soul By Nizzz" className="h-full w-full object-cover" />
          </span>
          <div>
            <div className="font-display text-2xl tracking-tight">
              soul <span className="font-hand text-3xl text-[var(--brand-accent)]">by</span> nizzz
            </div>
            <p className="mt-1 text-sm text-muted-foreground">Hand-drawn memories, made with love.</p>
          </div>
        </div>

        <nav className="flex items-center gap-6 text-sm text-foreground/70">
          <a href="/#story" className="hover:text-foreground">Story</a>
          <a href="/#collections" className="hover:text-foreground">Collections</a>
          <Link to="/gallery" className="hover:text-foreground">Gallery</Link>
          <a href="/#faq" className="hover:text-foreground">FAQ</a>
        </nav>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-transform hover:scale-[1.03]"
        >
          <FiInstagram /> @soul_by_nizz
        </a>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Soul By Nizzz — Every line drawn with a soul.
      </div>
    </footer>
  );
}
