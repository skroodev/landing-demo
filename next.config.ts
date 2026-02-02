import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimisation des images
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 31536000, // 1 an
  },
  // Optimisations expérimentales
  experimental: {
    optimizePackageImports: ['lucide-react', 'gsap', 'motion'],
  },
};

export default nextConfig;
