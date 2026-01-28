"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedContent from "@/components/AnimatedContent";
import siteConfig from "@/lib/config";

export function FAQ() {
  return (
    <section id="faq" className="py-12 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedContent distance={50} direction="vertical" duration={0.4}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Questions fréquemment posées</h2>
        </AnimatedContent>

        <AnimatedContent distance={40} direction="vertical" duration={0.4} delay={0.1}>
          <Accordion type="single" collapsible>
            {siteConfig.faq.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedContent>
      </div>
    </section>
  );
}
