"use client";

import { Card } from "@/components/ui/card";
import AnimatedContent from "@/components/AnimatedContent";
import siteConfig from "@/lib/config";

export function Qualifications() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white" />
      
      {/* Decorative elements */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: siteConfig.colors.primary }}
      />
      <div 
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: siteConfig.colors.accent }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedContent distance={50} direction="vertical" duration={0.5}>
          <div className="text-center mb-16">
            <span 
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
              style={{ 
                backgroundColor: `${siteConfig.colors.primary}10`,
                color: siteConfig.colors.primary
              }}
            >
              Nos engagements
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">Pourquoi nous choisir?</h2>
          </div>
        </AnimatedContent>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {siteConfig.qualifications.map((qual, index) => (
            <AnimatedContent 
              key={index} 
              distance={40} 
              direction="vertical" 
              duration={0.5}
              delay={index * 0.08}
            >
              <Card className="glass-card border-0 p-8 card-hover-lift rounded-2xl group">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                  style={{ 
                    background: `linear-gradient(135deg, ${siteConfig.colors.primary}10 0%, ${siteConfig.colors.primaryLight}15 100%)`
                  }}
                >
                  {qual.icon}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: siteConfig.colors.text }}>
                  {qual.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{qual.description}</p>
              </Card>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
