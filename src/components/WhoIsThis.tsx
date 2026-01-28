"use client";

import { Card } from "@/components/ui/card";
import AnimatedContent from "@/components/AnimatedContent";
import siteConfig from "@/lib/config";

export function WhoIsThis() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedContent distance={50} direction="up" duration={0.4}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">À qui s'adresse notre service?</h2>
        </AnimatedContent>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Pour Vous */}
          <div>
            <h3 className="text-lg font-semibold mb-6" style={{ color: siteConfig.colors.success }}>✓ Idéal pour vous si:</h3>
            <div className="space-y-3">
              {siteConfig.whoIsThis.forYou.map((item, index) => (
                <AnimatedContent 
                  key={index} 
                  distance={20} 
                  direction="left" 
                  duration={0.35}
                  delay={index * 0.04}
                >
                  <Card className="p-4 hover:shadow-md transition-all duration-300">
                    <p className="text-gray-700 text-sm md:text-base">{item}</p>
                  </Card>
                </AnimatedContent>
              ))}
            </div>
          </div>

          {/* Pas Pour Vous */}
          <div>
            <h3 className="text-lg font-semibold mb-6" style={{ color: "#ef4444" }}>✕ À éviter si:</h3>
            <div className="space-y-3">
              {siteConfig.whoIsThis.notForYou.map((item, index) => (
                <AnimatedContent 
                  key={index} 
                  distance={20} 
                  direction="right" 
                  duration={0.35}
                  delay={index * 0.04}
                >
                  <Card className="p-4 hover:shadow-md transition-all duration-300">
                    <p className="text-gray-700 text-sm md:text-base">{item}</p>
                  </Card>
                </AnimatedContent>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
