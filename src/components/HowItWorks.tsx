"use client";

import { Card } from "@/components/ui/card";
import AnimatedContent from "@/components/AnimatedContent";
import siteConfig from "@/lib/config";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedContent distance={50} direction="up" duration={0.4}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Comment ça marche?</h2>
        </AnimatedContent>

        <div className="grid md:grid-cols-3 gap-8">
          {siteConfig.processSteps.map((step, index) => (
            <AnimatedContent 
              key={index} 
              distance={40} 
              direction="up" 
              duration={0.4}
              delay={index * 0.08}
            >
              <Card className="p-8 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                <div className="flex justify-center mb-8">
                  <div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full text-white font-bold text-lg"
                    style={{ backgroundColor: siteConfig.colors.success }}
                  >
                    {step.number}
                  </div>
                </div>

                <div className="flex gap-3 items-start mb-4">
                  <div className="text-2xl flex-shrink-0">{step.icon}</div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                </div>

                <p className="text-gray-700 text-sm mb-2">{step.description}</p>

                <p className="text-sm text-gray-600 flex-grow">{step.details}</p>
              </Card>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
