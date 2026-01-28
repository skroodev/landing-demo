"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AnimatedContent from "@/components/AnimatedContent";
import GlareHover from "@/components/GlareHover";
import siteConfig from "@/lib/config";
import Image from "next/image";

export function Hero() {
  return (
    <section 
      className="py-12 md:py-20 relative md:bg-linear-to-r md:from-blue-50 md:to-indigo-50"
      style={{ 
        backgroundImage: `url('${siteConfig.hero.image.src}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay gradient blanc sur mobile */}
      <div className="absolute inset-0 md:hidden" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 1))' }} />
      {/* Gradient bleu sur desktop */}
      <div className="absolute inset-0 hidden md:block" style={{ backgroundImage: 'linear-gradient(to right, rgb(240, 245, 255), rgb(238, 242, 255))' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Contenu */}
          <AnimatedContent distance={50} direction="vertical" duration={0.4}>
            <div>
              {siteConfig.hero.badge.show && (
                <Badge className="mb-4 px-1.5 py-0.5 text-xs md:text-sm text-white border-0 whitespace-nowrap md:mb-4 md:px-1.5 md:py-1" style={{ backgroundColor: siteConfig.colors.success }}>
                  {siteConfig.hero.badge.text}
                </Badge>
              )}

              <h1 className="text-3xl md:text-5xl font-bold mb-6 text-black" style={{ color: 'inherit' }}>
                {siteConfig.hero.headline}
              </h1>

              <AnimatedContent distance={30} direction="vertical" duration={0.5} delay={0.15}>
                <p className="text-base md:text-lg text-gray-700 md:text-gray-600 mb-8">{siteConfig.hero.subheadline}</p>
              </AnimatedContent>

              <AnimatedContent distance={30} direction="vertical" duration={0.5} delay={0.25}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <GlareHover
                    glareColor="#ffffff"
                    glareOpacity={0.3}
                    glareAngle={-30}
                    glareSize={300}
                    transitionDuration={800}
                    playOnce={false}
                    className="rounded-lg"
                  >
                    <Button
                      size="lg"
                      onClick={() => window.location.href = siteConfig.hero.cta.link}
                      className="transition-transform duration-200 hover:scale-105 w-full"
                      style={{ backgroundColor: siteConfig.colors.secondary }}
                    >
                      {siteConfig.hero.cta.text}
                    </Button>
                  </GlareHover>
                  <Button
                    size="lg"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="!border-2 !text-blue-600 transition-transform duration-200 hover:scale-105"
                    style={{
                      borderColor: siteConfig.colors.primary,
                      backgroundColor: "transparent",
                    }}
                  >
                    Demander un devis
                  </Button>
                </div>
              </AnimatedContent>
            </div>
          </AnimatedContent>

          {/* Image Hero - visible seulement sur desktop */}
          <AnimatedContent distance={50} direction="horizontal" duration={0.4}>
            <div className="hidden md:block relative h-96 md:h-full min-h-96 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src={siteConfig.hero.image.src}
                alt={siteConfig.hero.image.alt}
                fill
                className="object-cover"
                priority
                fetchPriority="high"
                unoptimized
              />
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}
