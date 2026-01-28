"use client";

import { Card } from "@/components/ui/card";
import AnimatedContent from "@/components/AnimatedContent";
import siteConfig from "@/lib/config";

export function Qualifications() {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedContent distance={50} direction="up" duration={0.4}>
          <h2 className="text-3xl font-bold text-center mb-12">Pourquoi nous choisir?</h2>
        </AnimatedContent>

        <div className="grid md:grid-cols-3 gap-8">
          {siteConfig.qualifications.map((qual, index) => (
            <AnimatedContent 
              key={index} 
              distance={40} 
              direction="up" 
              duration={0.4}
              delay={index * 0.08}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4 text-center">{qual.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-center">{qual.title}</h3>
                <p className="text-gray-700 text-center">{qual.description}</p>
              </Card>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
