"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import GlareHover from "@/components/GlareHover";
import siteConfig from "@/lib/config";
import Image from "next/image";
import { Phone, FileText } from "lucide-react";

export function Hero() {
  return (
    <section 
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Background avec gradient et image */}
      <div className="absolute inset-0">
        <Image
          src={siteConfig.hero.image.src}
          alt={siteConfig.hero.image.alt}
          fill
          className="object-cover"
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={75}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAKAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgcI/8QAIhAAAgICAgEFAQAAAAAAAAAAAQIDBAUGESEABxITFDFB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEEG/9k="
        />
        {/* Overlay gradient sophistiqué */}
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, 
              rgba(255, 255, 255, 0.95) 0%, 
              rgba(255, 255, 255, 0.85) 40%, 
              rgba(248, 249, 250, 0.7) 100%)`
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu */}
          <div className="max-w-2xl">
            {/* Badge - CSS animation */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0ms' }}>
              {siteConfig.hero.badge.show && (
                <div className="inline-flex mb-6">
                  <Badge 
                    className="px-4 py-2 text-sm font-medium text-white border-0 rounded-full animate-pulse-glow"
                    style={{ 
                      background: `linear-gradient(135deg, ${siteConfig.colors.success} 0%, ${siteConfig.colors.accent} 100%)`,
                      boxShadow: `0 4px 15px ${siteConfig.colors.success}40`
                    }}
                  >
                    {siteConfig.hero.badge.text}
                  </Badge>
                </div>
              )}
            </div>

            {/* Headline - CSS animation */}
            <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
                style={{ 
                  fontFamily: "var(--font-poppins)",
                  color: siteConfig.colors.text 
                }}
              >
                {siteConfig.hero.headline.split(" ").map((word, i) => {
                  const highlightWords = ["24/7", "urgence", "rapide", "garantie"];
                  const isHighlight = highlightWords.some(hw => word.toLowerCase().includes(hw.toLowerCase()));
                  return (
                    <span 
                      key={i} 
                      className={isHighlight ? "gradient-text-primary" : ""}
                    >
                      {word}{" "}
                    </span>
                  );
                })}
              </h1>
            </div>

            {/* Subheadline - CSS animation */}
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <p 
                className="text-lg md:text-xl mb-10 leading-relaxed"
                style={{ color: siteConfig.colors.textLight }}
              >
                {siteConfig.hero.subheadline}
              </p>
            </div>

            {/* CTA Buttons - CSS animation */}
            <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <div className="flex flex-col sm:flex-row gap-4">
                <GlareHover
                  glareColor="#ffffff"
                  glareOpacity={0.3}
                  glareAngle={-30}
                  glareSize={300}
                  transitionDuration={800}
                  playOnce={false}
                  className="rounded-2xl"
                >
                  <Button
                    size="lg"
                    onClick={() => window.location.href = siteConfig.hero.cta.link}
                    className="btn-premium w-full sm:w-auto text-white font-semibold px-8 py-6 text-lg rounded-2xl transition-transform duration-300 hover:scale-105 flex items-center gap-3"
                    style={{ 
                      background: `linear-gradient(135deg, ${siteConfig.colors.secondary} 0%, #ff8533 100%)`,
                      boxShadow: `0 8px 30px ${siteConfig.colors.secondary}40`
                    }}
                  >
                    <Phone className="w-5 h-5" />
                    {siteConfig.hero.cta.text}
                  </Button>
                </GlareHover>
                <Button
                  size="lg"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="w-full sm:w-auto font-semibold px-8 py-6 text-lg rounded-2xl transition-transform duration-300 hover:scale-105 flex items-center gap-3 bg-white/80 backdrop-blur-sm"
                  style={{
                    border: `2px solid ${siteConfig.colors.primary}`,
                    color: siteConfig.colors.primary,
                  }}
                >
                  <FileText className="w-5 h-5" />
                  Demander un devis
                </Button>
              </div>
            </div>

            {/* Trust indicators - CSS animation */}
            <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm" style={{ color: siteConfig.colors.textLight }}>
                {siteConfig.socialProof.trustLogos.map((logo, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span 
                      className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs"
                      style={{ backgroundColor: siteConfig.colors.success }}
                    >
                      ✓
                    </span>
                    {logo}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Hero - Desktop */}
          <div className="hidden lg:block relative animate-fade-in-left" style={{ animationDelay: '200ms' }}>
            <div 
              className="relative h-125 rounded-3xl overflow-hidden shadow-2xl"
              style={{ 
                boxShadow: `0 25px 60px -15px ${siteConfig.colors.primary}30`
              }}
            >
              <Image
                src={siteConfig.hero.image.src}
                alt={siteConfig.hero.image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 0vw, 50vw"
                quality={75}
                loading="eager"
              />
              {/* Overlay gradient */}
              <div 
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(180deg, transparent 60%, ${siteConfig.colors.primaryDark}90 100%)`
                }}
              />
              {/* Badge flottant */}
              <div 
                className="absolute bottom-6 left-6 right-6 glass-card rounded-2xl p-4"
              >
                <div className="flex items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{ backgroundColor: `${siteConfig.colors.success}20` }}
                  >
                    ⚡
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Intervention rapide</p>
                    <p className="text-sm text-gray-600">Moins d&apos;1h garantie</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
