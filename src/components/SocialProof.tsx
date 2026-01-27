"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import siteConfig from "@/lib/config";

export function SocialProof() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Statistiques */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <h3 className="text-4xl font-bold" style={{ color: siteConfig.colors.primary }}>
              {siteConfig.socialProof.clientCount.toLocaleString()}+
            </h3>
            <p className="text-gray-600 mt-2">Clients satisfaits</p>
            <p className="text-sm text-gray-500">{siteConfig.socialProof.clientLocation}</p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold" style={{ color: siteConfig.colors.primary }}>
              {siteConfig.socialProof.averageRating}★
            </h3>
            <p className="text-gray-600 mt-2">Note moyenne</p>
            <p className="text-sm text-gray-500">({siteConfig.socialProof.reviewCount} avis)</p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold" style={{ color: siteConfig.colors.primary }}>
              24/7
            </h3>
            <p className="text-gray-600 mt-2">Disponible</p>
            <p className="text-sm text-gray-500">365 jours par an</p>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">{siteConfig.socialProof.clientCount}+ clients nous font confiance</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {siteConfig.socialProof.testimonials.map((testimonial, index) => {
              const avatarNames = ["jean", "marie", "pierre"];
              const avatarName = avatarNames[index];
              const fullStars = Math.floor(testimonial.score);
              const hasPartialStar = testimonial.score % 1 !== 0;
              const partialFill = (testimonial.score % 1) * 100;
              
              return (
                <Card key={index} className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="font-semibold text-gray-900">{testimonial.score}</span>
                      <div className="flex gap-0.5">
                        {/* Étoiles pleines */}
                        {Array.from({ length: fullStars }).map((_, i) => (
                          <span key={`full-${i}`} className="text-yellow-400">★</span>
                        ))}
                        {/* Étoile partielle avec gradient */}
                        {hasPartialStar && (
                          <span
                            key="partial"
                            className="text-gray-300 relative"
                            style={{
                              background: `linear-gradient(to right, #FBBF24 0%, #FBBF24 ${partialFill}%, #D1D5DC ${partialFill}%, #D1D5DC 100%)`,
                              backgroundClip: "text",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                            }}
                          >
                            ★
                          </span>
                        )}
                        {/* Étoiles vides */}
                        {Array.from({ length: 5 - fullStars - (hasPartialStar ? 1 : 0) }).map((_, i) => (
                          <span key={`empty-${i}`} className="text-gray-300">★</span>
                        ))}
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  </div>

                  <div className="flex items-center gap-3 mt-6">
                    <Image
                      src={`/images/webp/avatar-${avatarName}.webp`}
                      alt={testimonial.author}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Trust Logos */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Certifications et reconnaissances:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {siteConfig.socialProof.trustLogos.map((logo, index) => (
              <Badge key={index} variant="outline">
                ✓ {logo}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
