"use client";

import siteConfig from "@/lib/config";

export function ProblemSolution() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Problèmes */}
          <div>
            <h2 className="text-3xl font-bold mb-8" style={{ color: siteConfig.colors.text }}>
              {siteConfig.problemSolution.problem.headline}
            </h2>
            <div className="space-y-6">
              {siteConfig.problemSolution.problem.items.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <span className="text-3xl">⚠️</span>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h2 className="text-3xl font-bold mb-8" style={{ color: siteConfig.colors.primary }}>
              {siteConfig.problemSolution.solution.headline}
            </h2>
            <div className="space-y-6">
              {siteConfig.problemSolution.solution.items.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <span className="text-3xl">✅</span>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
