import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { FiInstagram } from "react-icons/fi";
import { INSTAGRAM_URL } from "@/lib/site-data";
import { logoUrl } from "@/lib/art-assets";

const links = [
  { href: "/#story", label: "Story" },
  { href: "/#collections", label: "Collections" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#faq", label: "FAQ" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${scrolled ? "py-2" : "py-4"
        }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-2 rounded-full px-3 transition-all sm:gap-4 sm:px-4 md:px-6 ${scrolled ? "bg-card/70 backdrop-blur-xl border border-border shadow-[var(--shadow-soft)] py-2 mx-3 md:mx-6" : "py-3"
          }`}
      >
        <Link to="/" className="group flex min-w-0 items-center gap-2.5" data-hover aria-label="Soul By Nizzz — home">
          <span className="relative inline-flex h-9 w-9 shrink-0 overflow-hidden rounded-full ring-1 ring-border shadow-[var(--shadow-soft)] sm:h-10 sm:w-10">
            <img src={logoUrl} alt="Soul By Nizzz" className="h-full w-full object-cover" />
          </span>
          <span className="font-display truncate text-base tracking-tight sm:text-lg md:text-xl">
            soul <span className="font-hand text-xl text-[var(--brand-accent)] sm:text-2xl md:text-3xl">by</span> nizzz
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-hover
              className="text-sm text-foreground/70 transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeSwitcher />
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            data-hover
            aria-label="Soul by Nizzz on Instagram"
            className="hidden h-9 items-center gap-2 rounded-full bg-foreground px-4 text-sm font-medium text-background transition-transform hover:scale-[1.03] md:inline-flex"
          >
            <FiInstagram /> Follow
          </a>
        </div>
      </div>
    </header>
  );
}
