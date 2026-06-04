import { useCallback, useEffect, useState } from "react";

export type ThemeName = "peach" | "cloud" | "lavender";
export const THEMES: ThemeName[] = ["peach", "cloud", "lavender"];

const KEY = "sbn-theme";

function applyTheme(t: ThemeName) {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", t);
}

export function useTheme() {
  const [theme, setTheme] = useState<ThemeName>("peach");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem(KEY)) as ThemeName | null;
    if (saved && THEMES.includes(saved)) {
      setTheme(saved);
      applyTheme(saved);
    } else {
      applyTheme("peach");
    }
  }, []);

  const update = useCallback((t: ThemeName) => {
    setTheme(t);
    applyTheme(t);
    try { localStorage.setItem(KEY, t); } catch {}
  }, []);

  const cycle = useCallback(() => {
    setTheme((cur) => {
      const next = THEMES[(THEMES.indexOf(cur) + 1) % THEMES.length];
      applyTheme(next);
      try { localStorage.setItem(KEY, next); } catch {}
      return next;
    });
  }, []);

  return { theme, setTheme: update, cycle };
}
