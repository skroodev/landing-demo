"use client";

import { Card } from "@/components/ui/card";
import AnimatedContent from "@/components/AnimatedContent";
import siteConfig from "@/lib/config";
import Image from "next/image";

export function Services() {

  return (
    <section id="services" className="py-12 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedContent distance={50} direction="vertical" duration={0.4}>
          <h2 className="text-3xl font-bold text-center mb-12">Nos services en avant/après</h2>
        </AnimatedContent>

        <div className="space-y-12">
          {siteConfig.services.map((service, index) => (
            <AnimatedContent 
              key={service.id} 
              distance={40} 
              direction={index % 2 === 0 ? "horizontal" : "horizontal"} 
              duration={0.4}
            >
              <Card className="overflow-hidden">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-700 mb-6">{service.description}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Avant */}
                    <div>
                      <p className="text-sm font-semibold text-gray-600 mb-2">AVANT</p>
                      <div
                        className="relative h-64 bg-gray-200 rounded-lg overflow-hidden"
                      >
                        <Image
                          src={service.images.before.src}
                          alt={service.images.before.alt}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                          unoptimized
                        />
                      </div>
                    </div>

                    {/* Après */}
                    <div>
                      <p className="text-sm font-semibold text-gray-600 mb-2">APRÈS</p>
                      <div
                        className="relative h-64 bg-gray-200 rounded-lg overflow-hidden"
                      >
                        <Image
                          src={service.images.after.src}
                          alt={service.images.after.alt}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                          unoptimized
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
