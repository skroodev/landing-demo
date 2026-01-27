"use client";

import { Card } from "@/components/ui/card";
import siteConfig from "@/lib/config";

export function Qualifications() {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Pourquoi nous choisir?</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {siteConfig.qualifications.map((qual, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">{qual.icon}</div>
              <h3 className="text-xl font-bold mb-2">{qual.title}</h3>
              <p className="text-gray-700">{qual.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
