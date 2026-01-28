"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import siteConfig from "@/lib/config";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center hover:opacity-80 transition-opacity">
            <h1 className="text-2xl font-bold" style={{ color: siteConfig.colors.primary }}>
              {siteConfig.business.name}
            </h1>
          </a>

          {/* Menu Desktop */}
          <div className="hidden md:flex gap-6 items-center">
            <a href="#services" className="text-gray-700 hover:text-gray-900">
              Services
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-gray-900">
              Comment ça marche
            </a>
            <a href="#faq" className="text-gray-700 hover:text-gray-900">
              FAQ
            </a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </a>
            <Button
              onClick={() => window.location.href = `tel:${siteConfig.business.phone}`}
              className="ml-4 transition-transform duration-200 hover:scale-105"
              style={{ backgroundColor: siteConfig.colors.secondary }}
            >
              {siteConfig.hero.cta.text}
            </Button>
          </div>

          {/* Menu Burger Mobile */}
          <button
            className="md:hidden flex flex-col gap-1.5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="w-6 h-0.5 bg-gray-900 block"></span>
            <span className="w-6 h-0.5 bg-gray-900 block"></span>
            <span className="w-6 h-0.5 bg-gray-900 block"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t pt-4">
            <a href="#services" className="block text-gray-700 hover:text-gray-900">
              Services
            </a>
            <a href="#how-it-works" className="block text-gray-700 hover:text-gray-900">
              Comment ça marche
            </a>
            <a href="#faq" className="block text-gray-700 hover:text-gray-900">
              FAQ
            </a>
            <a href="#contact" className="block text-gray-700 hover:text-gray-900">
              Contact
            </a>
            <Button
              onClick={() => window.location.href = `tel:${siteConfig.business.phone}`}
              className="w-full transition-transform duration-200 hover:scale-105"
              style={{ backgroundColor: siteConfig.colors.secondary }}
            >
              {siteConfig.hero.cta.text}
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}
