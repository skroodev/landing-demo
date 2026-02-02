"use client";

import { Button } from "@/components/ui/button";
import GlareHover from "@/components/GlareHover";
import AnimatedContent from "@/components/AnimatedContent";
import siteConfig from "@/lib/config";
import { Phone, FileText, CheckCircle } from "lucide-react";

export function CTAFinal() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient dynamique */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${siteConfig.colors.primary} 0%, ${siteConfig.colors.primaryDark} 100%)`
        }}
      />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-30"
          style={{ backgroundColor: siteConfig.colors.primaryLight }}
        />
        <div 
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: siteConfig.colors.accent }}
        />
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <AnimatedContent distance={50} direction="vertical" duration={0.5}>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white leading-tight">
            {siteConfig.ctaFinal.headline}
          </h2>
        </AnimatedContent>

        <AnimatedContent distance={30} direction="vertical" duration={0.5} delay={0.1}>
          <p className="text-lg md:text-xl mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed">
            {siteConfig.ctaFinal.text}
          </p>
        </AnimatedContent>

        <AnimatedContent distance={30} direction="vertical" duration={0.5} delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
                onClick={() => window.location.href = siteConfig.ctaFinal.primaryButton.link}
                className="btn-premium text-white font-semibold px-10 py-7 text-lg w-full rounded-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                style={{ 
                  background: `linear-gradient(135deg, ${siteConfig.colors.secondary} 0%, #ff8533 100%)`,
                  boxShadow: `0 8px 30px ${siteConfig.colors.secondary}50`
                }}
              >
                <Phone className="w-5 h-5" />
                {siteConfig.ctaFinal.primaryButton.text}
              </Button>
            </GlareHover>
            <Button
              size="lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold px-10 py-7 text-lg rounded-2xl transition-all duration-300 hover:bg-white hover:text-gray-900 hover:scale-105 flex items-center gap-3"
            >
              <FileText className="w-5 h-5" />
              {siteConfig.ctaFinal.secondaryButton.text}
            </Button>
          </div>
        </AnimatedContent>

        <AnimatedContent distance={20} direction="vertical" duration={0.5} delay={0.3}>
          <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm">
            {siteConfig.ctaFinal.reassurance.split("|").map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-white/60" />
                <span>{item.trim().replace("✓ ", "")}</span>
              </div>
            ))}
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
