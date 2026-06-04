import { testimonials } from "@/lib/site-data";
import { motion } from "framer-motion";
import { lazy, Suspense, useEffect, useState } from "react";

const SwiperBundle = lazy(async () => {
  const [{ Swiper, SwiperSlide }, { Autoplay, Pagination }] = await Promise.all([
    import("swiper/react"),
    import("swiper/modules"),
  ]);
  await import("swiper/css");
  await import("swiper/css/pagination");

  function Carousel() {
    return (
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1.1}
        centeredSlides
        loop
        autoplay={{ delay: 4200, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1.6 },
          900: { slidesPerView: 2.4 },
          1200: { slidesPerView: 3.1 },
        }}
        className="!pb-14"
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.handle}>
            <div className="group relative h-full rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1">
              <span className="font-display absolute right-5 top-1 text-7xl leading-none text-[var(--brand-accent)]/50">"</span>
              <div className="font-serif text-balance text-xl italic leading-snug">{t.text}</div>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--brand-mid)] text-xl">
                  {t.emoji}
                </div>
                <div>
                  <div className="font-medium">{t.name}</div>
                  <div className="font-hand text-base text-[var(--brand-accent)]">{t.handle}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
  return { default: Carousel };
});

function StaticGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {testimonials.slice(0, 3).map((t) => (
        <div key={t.handle} className="rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]">
          <span className="font-display block text-6xl leading-none text-[var(--brand-accent)]/50">"</span>
          <div className="font-serif text-balance mt-2 text-xl italic">{t.text}</div>
          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--brand-mid)] text-xl">{t.emoji}</div>
            <div>
              <div className="font-medium">{t.name}</div>
              <div className="font-hand text-base text-[var(--brand-accent)]">{t.handle}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Testimonials() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="love" className="relative overflow-hidden py-28 md:py-36">
      <div className="absolute inset-0 -z-10 mesh-bg opacity-50" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="font-hand text-2xl text-[var(--brand-accent)]">— from the fam</span>
          <h2 className="font-display mt-2 text-5xl leading-[1] tracking-tight md:text-7xl">
            Real words. Real<br /><span className="italic">happy tears.</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14"
        >
          {mounted ? (
            <Suspense fallback={<StaticGrid />}>
              <SwiperBundle />
            </Suspense>
          ) : (
            <StaticGrid />
          )}
        </motion.div>
      </div>
    </section>
  );
}
