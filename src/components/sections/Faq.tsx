import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/lib/site-data";
import { motion } from "framer-motion";

export function Faq() {
  return (
    <section id="faq" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="font-hand text-2xl text-[var(--brand-accent)]">— curious?</span>
          <h2 className="font-display mt-2 text-5xl leading-[1] tracking-tight md:text-7xl">
            Things you might<br /><span className="italic">be wondering.</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-3xl border border-border bg-card p-2 shadow-[var(--shadow-soft)] md:p-4"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="px-4">
                <AccordionTrigger className="font-display text-left text-xl hover:no-underline md:text-2xl">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-base text-foreground/75">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
