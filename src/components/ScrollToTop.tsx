"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import siteConfig from "@/lib/config";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const rafRef = useRef<number | undefined>(undefined);

  const toggleVisibility = useCallback(() => {
    if (rafRef.current) return;
    
    rafRef.current = requestAnimationFrame(() => {
      setIsVisible(window.scrollY > 300);
      rafRef.current = undefined;
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [toggleVisibility]);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-transform duration-200 hover:scale-110 flex items-center justify-center"
          style={{ backgroundColor: siteConfig.colors.secondary }}
          aria-label="Remonter vers le haut"
        >
          <svg
            className="w-6 h-6 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      )}
    </>
  );
}
