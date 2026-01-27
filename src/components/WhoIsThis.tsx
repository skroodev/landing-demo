"use client";

import { Card } from "@/components/ui/card";
import siteConfig from "@/lib/config";

export function WhoIsThis() {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">À qui s'adresse notre service?</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Pour Vous */}
          <div>
            <h3 className="text-2xl font-bold mb-6" style={{ color: siteConfig.colors.success }}>
              ✅ C'est pour vous si...
            </h3>
            <div className="space-y-4">
              {siteConfig.whoIsThis.forYou.map((item, index) => (
                <Card key={index} className="p-4">
                  <p className="text-gray-700">{item}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Pas Pour Vous */}
          <div>
            <h3 className="text-2xl font-bold mb-6" style={{ color: "#ef4444" }}>
              ❌ Ce n'est pas pour vous si...
            </h3>
            <div className="space-y-4">
              {siteConfig.whoIsThis.notForYou.map((item, index) => (
                <Card key={index} className="p-4 bg-red-50">
                  <p className="text-gray-700">{item}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
