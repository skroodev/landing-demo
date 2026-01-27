"use client";

import { Card } from "@/components/ui/card";
import siteConfig from "@/lib/config";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const MapComponent = dynamic(() => import("./MapComponent"), {
  loading: () => (
    <div style={{ height: "400px", backgroundColor: "#e5e5e5" }} className="flex items-center justify-center">
      <p className="text-gray-600">Chargement de la carte...</p>
    </div>
  ),
  ssr: false,
});

export function Map() {
  if (!siteConfig.maps.show) return null;

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Localisez-nous</h2>

        <Card className="overflow-hidden">
          <Suspense
            fallback={
              <div style={{ height: "400px", backgroundColor: "#e5e5e5" }} className="flex items-center justify-center">
                <p className="text-gray-600">Chargement de la carte...</p>
              </div>
            }
          >
            <div style={{ height: "400px", width: "100%" }}>
              <MapComponent />
            </div>
          </Suspense>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{siteConfig.maps.markerTitle}</h3>
            <p className="text-gray-700">{siteConfig.maps.markerAddress}</p>
          </div>
        </Card>
      </div>
    </section>
  );
}
