"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AnimatedContent from "@/components/AnimatedContent";
import siteConfig from "@/lib/config";

export function Pricing() {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedContent distance={50} direction="up" duration={0.4}>
          <h2 className="text-3xl font-bold text-center mb-4">Nos tarifs</h2>
          <p className="text-center text-gray-600 mb-12">{siteConfig.pricing.disclaimer}</p>
        </AnimatedContent>

        <div className="grid md:grid-cols-3 gap-8">
          {siteConfig.pricing.packages.map((pkg, index) => (
            <AnimatedContent 
              key={pkg.id} 
              distance={40} 
              direction="up" 
              duration={0.4}
              delay={index * 0.08}
            >
              <Card
                className={`p-8 flex flex-col ${
                  pkg.highlighted
                    ? "border-2 transform md:scale-105"
                    : ""
                }`}
                style={pkg.highlighted ? { borderColor: siteConfig.colors.secondary } : {}}
              >
                {pkg.highlighted && (
                  <Badge className="mb-4 w-fit" style={{ backgroundColor: siteConfig.colors.secondary }}>
                    Populaire
                  </Badge>
                )}

                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  {pkg.price === "150" && (
                    <span className="text-gray-600">{siteConfig.pricing.currency}</span>
                  )}
                </div>

                <div className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex gap-2 items-start">
                      <span className="text-green-500 font-bold">✓</span>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-full transition-transform duration-200 hover:scale-105"
                  style={{
                    backgroundColor: pkg.highlighted ? siteConfig.colors.secondary : siteConfig.colors.primary,
                  }}
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
