"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";

interface ImageModalProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ImageModal({ src, alt, isOpen, onClose }: ImageModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!mounted || !isOpen || !src) return null;

  const content = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl sm:max-w-3xl md:max-w-4xl rounded-lg overflow-hidden bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxHeight: "90vh",
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-[10000] bg-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Fermer"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex items-center justify-center" style={{ maxHeight: "90vh" }}>
          <Image
            src={src}
            alt={alt}
            width={0}
            height={0}
            sizes="90vw"
            className="object-contain"
            style={{ maxWidth: "90vw", maxHeight: "90vh", width: "auto", height: "auto" }}
            priority
            unoptimized
          />
        </div>
      </div>
    </div>
  );

  return createPortal(content, document.body);
}
