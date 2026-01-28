"use client";

import AnimatedContent from "@/components/AnimatedContent";
import siteConfig from "@/lib/config";

export function ProblemSolution() {
  return (
    <section className="py-12 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Problèmes */}
          <div className="flex flex-col">
            <AnimatedContent distance={50} direction="horizontal" duration={0.4}>
              <h2 className="text-3xl md:text-4xl font-bold mb-12 min-h-24" style={{ color: siteConfig.colors.text }}>
                {siteConfig.problemSolution.problem.headline}
              </h2>
            </AnimatedContent>
            <div className="space-y-4">
              {siteConfig.problemSolution.problem.items.map((item, index) => (
                <AnimatedContent 
                  key={index} 
                  distance={20} 
                  direction="horizontal" 
                  duration={0.35}
                  delay={index * 0.04}
                >
                  <div className="flex gap-4 p-4 rounded-lg bg-red-50 hover:bg-red-100 transition-colors duration-300">
                    <span className="text-2xl flex-shrink-0 leading-none pt-0.5">⚠️</span>
                    <p className="text-gray-700 text-sm md:text-base pt-0.5">{item}</p>
                  </div>
                </AnimatedContent>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="flex flex-col">
            <AnimatedContent distance={50} direction="horizontal" duration={0.4}>
              <h2 className="text-3xl md:text-4xl font-bold mb-12 min-h-24" style={{ color: siteConfig.colors.success }}>
                {siteConfig.problemSolution.solution.headline}
              </h2>
            </AnimatedContent>
            <div className="space-y-4">
              {siteConfig.problemSolution.solution.items.map((item, index) => (
                <AnimatedContent 
                  key={index} 
                  distance={20} 
                  direction="horizontal" 
                  duration={0.35}
                  delay={index * 0.04}
                >
                  <div className="flex gap-4 p-4 rounded-lg hover:shadow-md transition-all duration-300" style={{ backgroundColor: `${siteConfig.colors.success}15` }}>
                    <span className="text-2xl flex-shrink-0 leading-none pt-0.5" style={{ color: siteConfig.colors.success }}>✓</span>
                    <p className="text-gray-700 text-sm md:text-base pt-0.5">{item}</p>
                  </div>
                </AnimatedContent>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
