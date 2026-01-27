"use client";

import { Button } from "@/components/ui/button";
import siteConfig from "@/lib/config";

export function CTAFinal() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">{siteConfig.ctaFinal.headline}</h2>

        <p className="text-lg mb-8 opacity-90">{siteConfig.ctaFinal.text}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            size="lg"
            onClick={() => window.location.href = siteConfig.ctaFinal.primaryButton.link}
            style={{ backgroundColor: siteConfig.colors.secondary }}
            className="text-white"
          >
            {siteConfig.ctaFinal.primaryButton.text}
          </Button>
          <Button
            size="lg"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="!border-2 !border-white !text-white bg-transparent hover:!bg-white hover:!text-blue-600"
          >
            {siteConfig.ctaFinal.secondaryButton.text}
          </Button>
        </div>

        <p className="text-base opacity-80">{siteConfig.ctaFinal.reassurance}</p>
      </div>
    </section>
  );
}
