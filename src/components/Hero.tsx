"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AnimatedContent from "@/components/AnimatedContent";
import GlareHover from "@/components/GlareHover";
import siteConfig from "@/lib/config";
import Image from "next/image";

export function Hero() {
  return (
    <section className="py-12 md:py-20 bg-linear-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Contenu */}
          <AnimatedContent distance={50} direction="vertical" duration={0.4}>
            <div>
              {siteConfig.hero.badge.show && (
                <Badge className="mb-4 px-1.5 py-1 text-white border-0" style={{ backgroundColor: siteConfig.colors.success }}>
                  {siteConfig.hero.badge.text}
                </Badge>
              )}

              <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: siteConfig.colors.text }}>
                {siteConfig.hero.headline}
              </h1>

              <AnimatedContent distance={30} direction="vertical" duration={0.5} delay={0.15}>
                <p className="text-lg text-gray-600 mb-8">{siteConfig.hero.subheadline}</p>
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

          {/* Image Hero */}
          <AnimatedContent distance={50} direction="horizontal" duration={0.4}>
            <div className="relative h-96 md:h-full min-h-96 bg-gray-200 rounded-lg overflow-hidden">
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
