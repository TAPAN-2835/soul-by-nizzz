import { AnimatePresence, motion } from "framer-motion";
import { useTheme, type ThemeName } from "@/hooks/useTheme";

const SWATCH: Record<ThemeName, string> = {
  peach: "#FEC89A",
  cloud: "#A7C7E7",
  lavender: "#D8B4FE",
};

const LABELS: Record<ThemeName, string> = {
  peach: "Peach Cream",
  cloud: "Cloud Blue Dream",
  lavender: "Soft Lavender",
};

export function ThemeSwitcher() {
  const { theme, cycle } = useTheme();
  return (
    <button
      onClick={cycle}
      aria-label={`Theme: ${LABELS[theme]}. Click to switch.`}
      title={`Theme: ${LABELS[theme]} — click to switch`}
      data-hover
      className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-border bg-card/70 backdrop-blur-md transition-transform hover:scale-105 active:scale-95"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ scale: 0, rotate: -90, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          exit={{ scale: 0, rotate: 90, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="block h-5 w-5 rounded-full ring-2 ring-foreground/20"
          style={{ background: SWATCH[theme], boxShadow: `0 0 18px ${SWATCH[theme]}` }}
        />
      </AnimatePresence>
    </button>
  );
}
