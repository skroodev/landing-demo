"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import siteConfig from "@/lib/config";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const rafRef = useRef<number | undefined>(undefined);

  const handleScroll = useCallback(() => {
    if (rafRef.current) return;
    
    rafRef.current = requestAnimationFrame(() => {
      setScrolled(window.scrollY > 20);
      rafRef.current = undefined;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll]);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5" 
          : "bg-white/50 backdrop-blur-md"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
              style={{ 
                background: `linear-gradient(135deg, ${siteConfig.colors.primary} 0%, ${siteConfig.colors.primaryDark} 100%)`,
                boxShadow: `0 4px 15px ${siteConfig.colors.primary}40`
              }}
            >
              {siteConfig.business.name.charAt(0)}
            </div>
            <h1 
              className="text-xl font-bold transition-colors duration-300"
              style={{ color: siteConfig.colors.primary }}
            >
              {siteConfig.business.name}
            </h1>
          </a>

          {/* Menu Desktop */}
          <div className="hidden md:flex gap-1 items-center">
            {[
              { href: "#services", label: "Services" },
              { href: "#how-it-works", label: "Comment ça marche" },
              { href: "#faq", label: "FAQ" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-gray-600 font-medium transition-colors duration-300 hover:text-gray-900 group"
              >
                {item.label}
                <span 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-3/4"
                  style={{ backgroundColor: siteConfig.colors.primary }}
                />
              </a>
            ))}
            <Button
              onClick={() => window.location.href = `tel:${siteConfig.business.phone}`}
              className="ml-4 btn-premium text-white font-semibold px-6 py-2 rounded-xl transition-transform duration-300 hover:scale-105"
              style={{ 
                background: `linear-gradient(135deg, ${siteConfig.colors.secondary} 0%, #ff8533 100%)`,
                boxShadow: `0 4px 15px ${siteConfig.colors.secondary}40`
              }}
            >
              {siteConfig.hero.cta.text}
            </Button>
          </div>

          {/* Menu Burger Mobile */}
          <button
            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span 
              className={`w-6 h-0.5 bg-gray-900 block transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span 
              className={`w-6 h-0.5 bg-gray-900 block transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0 scale-0" : ""
              }`}
            />
            <span 
              className={`w-6 h-0.5 bg-gray-900 block transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-4 pb-4 space-y-1 border-t border-gray-100 pt-4">
            {[
              { href: "#services", label: "Services" },
              { href: "#how-it-works", label: "Comment ça marche" },
              { href: "#faq", label: "FAQ" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-gray-700 font-medium rounded-xl transition-colors duration-300 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              onClick={() => window.location.href = `tel:${siteConfig.business.phone}`}
              className="w-full mt-4 btn-premium text-white font-semibold py-3 rounded-xl"
              style={{ 
                background: `linear-gradient(135deg, ${siteConfig.colors.secondary} 0%, #ff8533 100%)`,
                boxShadow: `0 4px 15px ${siteConfig.colors.secondary}40`
              }}
            >
              {siteConfig.hero.cta.text}
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
