"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import AnimatedContent from "@/components/AnimatedContent";
import CountUp from "@/components/CountUp";
import SplitText from "@/components/SplitText";
import siteConfig from "@/lib/config";
import { Users, Star, Clock } from "lucide-react";

export function SocialProof() {
  const stats = [
    {
      icon: Users,
      value: siteConfig.socialProof.clientCount,
      suffix: "+",
      label: "Clients satisfaits",
      sublabel: siteConfig.socialProof.clientLocation,
    },
    {
      icon: Star,
      value: parseFloat(siteConfig.socialProof.averageRating.toString()),
      suffix: "★",
      label: "Note moyenne",
      sublabel: `(${siteConfig.socialProof.reviewCount} avis)`,
    },
    {
      icon: Clock,
      value: null,
      display: "24/7",
      label: "Disponible",
      sublabel: "365 jours par an",
    },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, ${siteConfig.colors.background} 0%, #ffffff 50%, ${siteConfig.colors.background} 100%)`
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {stats.map((stat, index) => (
            <AnimatedContent 
              key={index} 
              distance={40} 
              direction="vertical" 
              duration={0.5}
              delay={index * 0.1}
            >
              <div 
                className="glass-card rounded-2xl p-8 text-center card-hover-lift"
              >
                <div 
                  className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center"
                  style={{ 
                    background: `linear-gradient(135deg, ${siteConfig.colors.primary}15 0%, ${siteConfig.colors.primaryLight}15 100%)`
                  }}
                >
                  <stat.icon 
                    className="w-8 h-8" 
                    style={{ color: siteConfig.colors.primary }}
                  />
                </div>
                <h3 
                  className="text-4xl md:text-5xl font-extrabold mb-2"
                  style={{ color: siteConfig.colors.primary }}
                >
                  {stat.value !== null ? (
                    <CountUp to={stat.value} separator="," duration={0.15} />
                  ) : (
                    stat.display
                  )}
                  {stat.suffix}
                </h3>
                <p className="text-gray-700 font-medium">{stat.label}</p>
                <p className="text-sm text-gray-500">{stat.sublabel}</p>
              </div>
            </AnimatedContent>
          ))}
        </div>

        {/* Testimonials */}
        <div>
          <AnimatedContent distance={50} direction="vertical" duration={0.5}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="hidden md:inline">
                <SplitText
                  text={`${siteConfig.socialProof.clientCount}+ clients nous font confiance`}
                  className="text-3xl md:text-4xl font-bold text-center"
                  delay={15}
                  duration={0.15}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"
                />
              </span>
              <span className="md:hidden">{siteConfig.socialProof.clientCount}+ clients nous font confiance</span>
            </h2>
          </AnimatedContent>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {siteConfig.socialProof.testimonials.map((testimonial, index) => {
              const avatarNames = ["jean", "marie", "pierre"];
              const avatarName = avatarNames[index];
              const fullStars = Math.floor(testimonial.score);
              const hasPartialStar = testimonial.score % 1 !== 0;
              const partialFill = (testimonial.score % 1) * 100;
              
              return (
                <AnimatedContent 
                  key={index} 
                  distance={40} 
                  direction="vertical" 
                  duration={0.6}
                  delay={index * 0.15}
                >
                  <Card className="glass-card border-0 p-8 flex flex-col justify-between h-full card-hover-lift rounded-2xl">
                    {/* Quote icon */}
                    <div>
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                        style={{ 
                          background: `linear-gradient(135deg, ${siteConfig.colors.primary}10 0%, ${siteConfig.colors.primaryLight}10 100%)`
                        }}
                      >
                        <span 
                          className="text-2xl font-serif"
                          style={{ color: siteConfig.colors.primary }}
                        >
                          &ldquo;
                        </span>
                      </div>
                      <p className="text-gray-700 mb-6 leading-relaxed italic">
                        &ldquo;{testimonial.text}&rdquo;
                      </p>

                      <div className="flex items-center gap-4 mt-auto mb-4">
                        <div className="relative">
                          <Image
                            src={`/images/webp/avatar-${avatarName}.webp`}
                            alt={testimonial.author}
                            width={48}
                            height={48}
                            className="rounded-full ring-2 ring-white shadow-md"
                          />
                          <div 
                            className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs"
                            style={{ backgroundColor: siteConfig.colors.success }}
                          >
                            ✓
                          </div>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{testimonial.author}</p>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-0.5 pt-4 border-t border-gray-100">
                      {/* Étoiles pleines */}
                      {Array.from({ length: fullStars }).map((_, i) => (
                        <span key={`full-${i}`} className="text-yellow-400 text-lg">★</span>
                      ))}
                      {/* Étoile partielle avec gradient */}
                      {hasPartialStar && (
                        <span
                          key="partial"
                          className="text-gray-300 relative text-lg"
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
                        <span key={`empty-${i}`} className="text-gray-300 text-lg">★</span>
                      ))}
                      <span className="ml-2 text-sm text-gray-500 font-medium">
                        {testimonial.score.toFixed(1)}
                      </span>
                    </div>
                  </Card>
                </AnimatedContent>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
