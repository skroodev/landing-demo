"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedContent from "@/components/AnimatedContent";
import siteConfig from "@/lib/config";
import { HelpCircle } from "lucide-react";

export function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, ${siteConfig.colors.background} 0%, #ffffff 50%, ${siteConfig.colors.background} 100%)`
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedContent distance={50} direction="vertical" duration={0.5}>
          <div className="text-center mb-16">
            <span 
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
              style={{ 
                backgroundColor: `${siteConfig.colors.primary}10`,
                color: siteConfig.colors.primary
              }}
            >
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">Questions fréquemment posées</h2>
          </div>
        </AnimatedContent>

        <AnimatedContent distance={40} direction="vertical" duration={0.5} delay={0.1}>
          <div className="glass-card rounded-3xl p-6 md:p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {siteConfig.faq.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-0 bg-white/60 rounded-2xl px-6 overflow-hidden transition-all duration-300 hover:bg-white data-[state=open]:bg-white data-[state=open]:shadow-lg"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5 group">
                    <div className="flex items-center gap-4">
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 group-data-[state=open]:bg-opacity-100"
                        style={{ 
                          backgroundColor: `${siteConfig.colors.primary}10`
                        }}
                      >
                        <HelpCircle 
                          className="w-5 h-5 transition-colors duration-300"
                          style={{ color: siteConfig.colors.primary }}
                        />
                      </div>
                      <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pl-14 pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
