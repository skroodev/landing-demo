"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AnimatedContent from "@/components/AnimatedContent";
import siteConfig from "@/lib/config";
import { Check, Sparkles } from "lucide-react";

export function Pricing() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white" />
      
      {/* Decorative gradient orbs */}
      <div 
        className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: siteConfig.colors.secondary }}
      />
      <div 
        className="absolute bottom-20 right-10 w-72 h-72 rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: siteConfig.colors.primary }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedContent distance={50} direction="vertical" duration={0.5}>
          <div className="text-center mb-16">
            <span 
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
              style={{ 
                backgroundColor: `${siteConfig.colors.secondary}15`,
                color: siteConfig.colors.secondary
              }}
            >
              Tarifs transparents
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos tarifs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{siteConfig.pricing.disclaimer}</p>
          </div>
        </AnimatedContent>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-start">
          {siteConfig.pricing.packages.map((pkg, index) => (
            <AnimatedContent 
              key={pkg.id} 
              distance={40} 
              direction="vertical" 
              duration={0.5}
              delay={index * 0.1}
            >
              <Card
                className={`relative p-8 flex flex-col rounded-2xl transition-all duration-500 ${
                  pkg.highlighted
                    ? "md:scale-105 md:-mt-4 md:mb-4 shadow-2xl"
                    : "glass-card border-0 card-hover-lift"
                }`}
                style={pkg.highlighted ? { 
                  background: `linear-gradient(135deg, ${siteConfig.colors.primary} 0%, ${siteConfig.colors.primaryDark} 100%)`,
                  boxShadow: `0 25px 50px -12px ${siteConfig.colors.primary}50`
                } : {}}
              >
                {/* Badge populaire */}
                {pkg.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge 
                      className="px-4 py-2 text-sm font-semibold shadow-lg flex items-center gap-2"
                      style={{ 
                        background: `linear-gradient(135deg, ${siteConfig.colors.secondary} 0%, #ff8533 100%)`,
                        border: 'none'
                      }}
                    >
                      <Sparkles className="w-4 h-4" />
                      Populaire
                    </Badge>
                  </div>
                )}

                <div className={pkg.highlighted ? "text-white" : ""}>
                  <h3 className={`text-2xl font-bold mb-2 ${pkg.highlighted ? "text-white" : ""}`}>
                    {pkg.name}
                  </h3>
                  <p className={`text-sm mb-6 ${pkg.highlighted ? "text-white/80" : "text-gray-600"}`}>
                    {pkg.description}
                  </p>

                  <div className="mb-8">
                    <span className={`text-4xl font-extrabold ${pkg.highlighted ? "text-white" : ""}`}>
                      {pkg.price}
                    </span>
                  </div>

                  <div className="space-y-4 mb-8 flex-1">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex gap-3 items-start">
                        <div 
                          className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            pkg.highlighted ? "bg-white/20" : ""
                          }`}
                          style={!pkg.highlighted ? { backgroundColor: `${siteConfig.colors.success}20` } : {}}
                        >
                          <Check 
                            className="w-3 h-3" 
                            style={{ color: pkg.highlighted ? "#ffffff" : siteConfig.colors.success }}
                          />
                        </div>
                        <span className={`text-sm ${pkg.highlighted ? "text-white/90" : "text-gray-700"}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  className={`w-full btn-premium py-6 text-base font-semibold rounded-xl transition-transform duration-300 hover:scale-105 ${
                    pkg.highlighted ? "bg-white hover:bg-white/90" : ""
                  }`}
                  style={
                    pkg.highlighted 
                      ? { color: siteConfig.colors.primary }
                      : { 
                          background: `linear-gradient(135deg, ${siteConfig.colors.primary} 0%, ${siteConfig.colors.primaryDark} 100%)`,
                          boxShadow: `0 4px 15px ${siteConfig.colors.primary}30`
                        }
                  }
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Choisir ce plan
                </Button>
              </Card>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
