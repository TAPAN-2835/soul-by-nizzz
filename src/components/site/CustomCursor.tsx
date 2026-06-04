import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    document.documentElement.classList.add("cursor-none");

    let x = window.innerWidth / 2, y = window.innerHeight / 2;
    let rx = x, ry = y;

    const onMove = (e: MouseEvent) => { x = e.clientX; y = e.clientY; };

    let raf = 0;
    const loop = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (dot.current) dot.current.style.transform = `translate3d(${x - 4}px, ${y - 4}px, 0)`;
      if (ring.current) ring.current.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onOver = (e: MouseEvent) => {
      const t = (e.target as HTMLElement).closest("a, button, [data-hover]");
      if (ring.current) ring.current.dataset.hover = t ? "1" : "0";
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.classList.remove("cursor-none");
    };
  }, []);

  if (!enabled) return null;
  return (
    <>
      <div
        ref={dot}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 rounded-full bg-foreground mix-blend-difference"
      />
      <div
        ref={ring}
        aria-hidden
        data-hover="0"
        className="pointer-events-none fixed left-0 top-0 z-[100] h-9 w-9 rounded-full border border-foreground/40 backdrop-blur-[2px] transition-[width,height,opacity,border-color] duration-200 data-[hover='1']:h-14 data-[hover='1']:w-14 data-[hover='1']:bg-[color-mix(in_oklab,var(--brand-accent)_25%,transparent)] data-[hover='1']:border-transparent"
        style={{ marginLeft: 0, marginTop: 0 }}
      />
    </>
  );
}
