"use client";

import siteConfig from "@/lib/config";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Comment ça marche?</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {siteConfig.processSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl mb-4">{step.icon}</div>

              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-full text-white font-bold mb-4"
                style={{ backgroundColor: siteConfig.colors.primary }}
              >
                {step.number}
              </div>

              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>

              <p className="text-gray-700 mb-3">{step.description}</p>

              <p className="text-sm text-gray-600">{step.details}</p>

              {index < siteConfig.processSteps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 w-8 h-0.5 bg-gray-300 -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
