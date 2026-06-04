import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Story } from "@/components/sections/Story";
import { Collections } from "@/components/sections/Collections";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { WhyLoveIt } from "@/components/sections/WhyLoveIt";
import { Testimonials } from "@/components/sections/Testimonials";
import { GalleryWall } from "@/components/sections/GalleryWall";
import { Instagram } from "@/components/sections/Instagram";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Soul By Nizzz — Hand-drawn pencil sketches from your photos" },
      { name: "description", content: "Turn your photos into timeless hand-drawn pencil sketches. Portrait, couple, and family sketches starting at ₹120. Made with soul by Nizzz." },
      { property: "og:title", content: "Soul By Nizzz — Hand-drawn pencil sketches" },
      { property: "og:description", content: "Turn your photos into timeless hand-drawn pencil sketches." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Story />
      <Collections />
      <BeforeAfter />
      <WhyLoveIt />
      <Testimonials />
      <GalleryWall />
      <Instagram />
      <Faq />
      <FinalCta />
    </>
  );
}
