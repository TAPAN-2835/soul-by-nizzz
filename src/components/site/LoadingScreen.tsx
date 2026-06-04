import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setOpen(false), 1700);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[var(--brand-cream)]"
        >
          <div className="text-center">
            <svg viewBox="0 0 600 120" className="mx-auto w-[min(80vw,600px)]">
              <motion.text
                x="50%"
                y="78"
                textAnchor="middle"
                fontFamily="Playfair Display, serif"
                fontSize="84"
                fontStyle="italic"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                initial={{ strokeDasharray: 2000, strokeDashoffset: 2000 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
                className="text-foreground"
              >
                soul by nizzz
              </motion.text>
            </svg>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="font-hand mt-3 text-xl text-[var(--brand-accent)]"
            >
              sketching your memory…
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
