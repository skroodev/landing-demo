"use client";

import { Card } from "@/components/ui/card";
import AnimatedContent from "@/components/AnimatedContent";
import siteConfig from "@/lib/config";
import { CheckCircle, XCircle } from "lucide-react";

export function WhoIsThis() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white" />
      
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
              Pour qui ?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">À qui s&apos;adresse notre service?</h2>
          </div>
        </AnimatedContent>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Pour Vous */}
          <AnimatedContent distance={40} direction="horizontal" duration={0.5}>
            <div 
              className="p-8 rounded-3xl h-full"
              style={{ backgroundColor: `${siteConfig.colors.success}08` }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${siteConfig.colors.success}20` }}
                >
                  <CheckCircle className="w-6 h-6" style={{ color: siteConfig.colors.success }} />
                </div>
                <h3 className="text-xl font-bold" style={{ color: siteConfig.colors.success }}>
                  Idéal pour vous si:
                </h3>
              </div>
              <div className="space-y-4">
                {siteConfig.whoIsThis.forYou.map((item, index) => (
                  <AnimatedContent 
                    key={index} 
                    distance={20} 
                    direction="horizontal" 
                    duration={0.4}
                    delay={index * 0.05}
                  >
                    <Card className="glass-card border-0 p-5 rounded-xl transition-transform duration-300 hover:translate-x-2 group">
                      <div className="flex gap-4 items-start">
                        <div 
                          className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110"
                          style={{ backgroundColor: `${siteConfig.colors.success}20` }}
                        >
                          <CheckCircle className="w-4 h-4" style={{ color: siteConfig.colors.success }} />
                        </div>
                        <p className="text-gray-700">{item}</p>
                      </div>
                    </Card>
                  </AnimatedContent>
                ))}
              </div>
            </div>
          </AnimatedContent>

          {/* Pas Pour Vous */}
          <AnimatedContent distance={40} direction="horizontal" duration={0.5} delay={0.1}>
            <div 
              className="p-8 rounded-3xl h-full"
              style={{ backgroundColor: "#ef444408" }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "#ef444420" }}
                >
                  <XCircle className="w-6 h-6" style={{ color: "#ef4444" }} />
                </div>
                <h3 className="text-xl font-bold" style={{ color: "#ef4444" }}>
                  À éviter si:
                </h3>
              </div>
              <div className="space-y-4">
                {siteConfig.whoIsThis.notForYou.map((item, index) => (
                  <AnimatedContent 
                    key={index} 
                    distance={20} 
                    direction="horizontal" 
                    duration={0.4}
                    delay={index * 0.05}
                  >
                    <Card className="glass-card border-0 p-5 rounded-xl transition-transform duration-300 hover:translate-x-2 group">
                      <div className="flex gap-4 items-start">
                        <div 
                          className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110"
                          style={{ backgroundColor: "#ef444420" }}
                        >
                          <XCircle className="w-4 h-4" style={{ color: "#ef4444" }} />
                        </div>
                        <p className="text-gray-700">{item}</p>
                      </div>
                    </Card>
                  </AnimatedContent>
                ))}
              </div>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}
