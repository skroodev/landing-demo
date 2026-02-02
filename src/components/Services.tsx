"use client";

import { Card } from "@/components/ui/card";
import AnimatedContent from "@/components/AnimatedContent";
import siteConfig from "@/lib/config";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 relative overflow-hidden">
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
                backgroundColor: `${siteConfig.colors.primary}10`,
                color: siteConfig.colors.primary
              }}
            >
              Nos réalisations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">Nos services en avant/après</h2>
          </div>
        </AnimatedContent>

        <div className="space-y-8 md:space-y-12">
          {siteConfig.services.map((service, index) => (
            <AnimatedContent 
              key={service.id} 
              distance={50} 
              direction={index % 2 === 0 ? "horizontal" : "horizontal"} 
              duration={0.5}
              delay={index * 0.1}
            >
              <Card className="glass-card border-0 overflow-hidden rounded-3xl card-hover-lift">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  {/* Content */}
                  <div className={`p-8 md:p-12 flex flex-col justify-center ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-6"
                      style={{ 
                        background: `linear-gradient(135deg, ${siteConfig.colors.primary}15 0%, ${siteConfig.colors.primaryLight}15 100%)`
                      }}
                    >
                      {index === 0 ? "🔧" : index === 1 ? "🚿" : "🔥"}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: siteConfig.colors.text }}>
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">{service.description}</p>
                    <button
                      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                      className="inline-flex items-center gap-2 font-semibold transition-all duration-300 hover:gap-4 group"
                      style={{ color: siteConfig.colors.primary }}
                    >
                      Demander un devis
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>

                  {/* Images Before/After */}
                  <div className={`grid grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    {/* Avant */}
                    <div className="relative group overflow-hidden">
                      <div className="absolute top-4 left-4 z-20">
                        <span className="px-3 py-1.5 bg-red-500/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                          AVANT
                        </span>
                      </div>
                      <div className="relative h-64 md:h-80 lg:h-full min-h-64">
                        <Image
                          src={service.images.before.src}
                          alt={service.images.before.alt}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
                      </div>
                    </div>

                    {/* Après */}
                    <div className="relative group overflow-hidden">
                      <div className="absolute top-4 right-4 z-20">
                        <span 
                          className="px-3 py-1.5 backdrop-blur-sm text-white text-xs font-semibold rounded-full"
                          style={{ backgroundColor: `${siteConfig.colors.success}e6` }}
                        >
                          APRÈS
                        </span>
                      </div>
                      <div className="relative h-64 md:h-80 lg:h-full min-h-64">
                        <Image
                          src={service.images.after.src}
                          alt={service.images.after.alt}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
