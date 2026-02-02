"use client";

import AnimatedContent from "@/components/AnimatedContent";
import siteConfig from "@/lib/config";
import { AlertTriangle, CheckCircle } from "lucide-react";

export function ProblemSolution() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, ${siteConfig.colors.background} 0%, #ffffff 50%, ${siteConfig.colors.background} 100%)`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Problèmes */}
          <AnimatedContent distance={50} direction="horizontal" duration={0.5}>
            <div 
              className="p-8 md:p-10 rounded-3xl h-full"
              style={{ backgroundColor: "#fef2f2" }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: "#fee2e2" }}
                >
                  <AlertTriangle className="w-7 h-7 text-red-500" />
                </div>
                <h2 
                  className="text-2xl md:text-3xl font-bold"
                  style={{ color: siteConfig.colors.text }}
                >
                  {siteConfig.problemSolution.problem.headline}
                </h2>
              </div>
              <div className="space-y-4">
                {siteConfig.problemSolution.problem.items.map((item, index) => (
                  <AnimatedContent 
                    key={index} 
                    distance={20} 
                    direction="horizontal" 
                    duration={0.4}
                    delay={index * 0.08}
                  >
                    <div 
                      className="flex gap-4 p-5 rounded-2xl bg-white/80 backdrop-blur-sm transition-colors duration-300 hover:bg-white hover:shadow-md group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                        <span className="text-xl">⚠️</span>
                      </div>
                      <p className="text-gray-700 pt-2">{item}</p>
                    </div>
                  </AnimatedContent>
                ))}
              </div>
            </div>
          </AnimatedContent>

          {/* Solutions */}
          <AnimatedContent distance={50} direction="horizontal" duration={0.5} delay={0.1}>
            <div 
              className="p-8 md:p-10 rounded-3xl h-full"
              style={{ backgroundColor: `${siteConfig.colors.success}08` }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${siteConfig.colors.success}20` }}
                >
                  <CheckCircle className="w-7 h-7" style={{ color: siteConfig.colors.success }} />
                </div>
                <h2 
                  className="text-2xl md:text-3xl font-bold"
                  style={{ color: siteConfig.colors.success }}
                >
                  {siteConfig.problemSolution.solution.headline}
                </h2>
              </div>
              <div className="space-y-4">
                {siteConfig.problemSolution.solution.items.map((item, index) => (
                  <AnimatedContent 
                    key={index} 
                    distance={20} 
                    direction="horizontal" 
                    duration={0.4}
                    delay={index * 0.08}
                  >
                    <div 
                      className="flex gap-4 p-5 rounded-2xl bg-white/80 backdrop-blur-sm transition-colors duration-300 hover:bg-white hover:shadow-md group"
                    >
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `${siteConfig.colors.success}15` }}
                      >
                        <CheckCircle className="w-5 h-5" style={{ color: siteConfig.colors.success }} />
                      </div>
                      <p className="text-gray-700 pt-2">{item}</p>
                    </div>
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
