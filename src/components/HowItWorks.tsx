"use client";

import { Card } from "@/components/ui/card";
import AnimatedContent from "@/components/AnimatedContent";
import siteConfig from "@/lib/config";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, ${siteConfig.colors.background} 0%, #ffffff 50%, ${siteConfig.colors.background} 100%)`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedContent distance={50} direction="vertical" duration={0.5}>
          <div className="text-center mb-16">
            <span 
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
              style={{ 
                backgroundColor: `${siteConfig.colors.accent}15`,
                color: siteConfig.colors.accent
              }}
            >
              Simple et rapide
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">Comment ça marche?</h2>
          </div>
        </AnimatedContent>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Ligne de connexion entre les étapes - desktop */}
          <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-0.5 bg-linear-to-r from-transparent via-gray-200 to-transparent" />
          
          {siteConfig.processSteps.map((step, index) => (
            <AnimatedContent 
              key={index} 
              distance={40} 
              direction="vertical" 
              duration={0.5}
              delay={index * 0.15}
            >
              <Card className="glass-card border-0 p-8 card-hover-lift flex flex-col h-full rounded-2xl relative">
                {/* Numéro flottant */}
                <div className="flex justify-center mb-8">
                  <div
                    className="relative w-16 h-16 rounded-2xl text-white font-bold text-xl flex items-center justify-center shadow-lg"
                    style={{ 
                      background: `linear-gradient(135deg, ${siteConfig.colors.success} 0%, ${siteConfig.colors.accent} 100%)`,
                      boxShadow: `0 8px 25px ${siteConfig.colors.success}40`
                    }}
                  >
                    {step.number}
                    {/* Effet de pulsation */}
                    <div 
                      className="absolute inset-0 rounded-2xl animate-ping opacity-20"
                      style={{ backgroundColor: siteConfig.colors.success }}
                    />
                  </div>
                </div>

                <div className="text-center grow">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="text-3xl">{step.icon}</span>
                    <h3 className="text-xl font-bold" style={{ color: siteConfig.colors.text }}>
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-gray-700 mb-4 font-medium">{step.description}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.details}</p>
                </div>

                {/* Flèche vers la prochaine étape - mobile */}
                {index < siteConfig.processSteps.length - 1 && (
                  <div className="md:hidden flex justify-center mt-6">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${siteConfig.colors.primary}10` }}
                    >
                      <span style={{ color: siteConfig.colors.primary }}>↓</span>
                    </div>
                  </div>
                )}
              </Card>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
