"use client";

import siteConfig from "@/lib/config";
import { Phone, Mail, MapPin, Facebook, Instagram, MapPinned, ChevronRight } from "lucide-react";

export function Footer() {
  return (
    <footer 
      className="relative overflow-hidden"
      style={{ 
        background: `linear-gradient(135deg, ${siteConfig.colors.primaryDark} 0%, #001a33 100%)`
      }}
    >
      {/* Decorative elements */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: siteConfig.colors.primaryLight }}
      />
      <div 
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: siteConfig.colors.accent }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Entreprise */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg"
                style={{ 
                  background: `linear-gradient(135deg, ${siteConfig.colors.primary} 0%, ${siteConfig.colors.primaryLight} 100%)`
                }}
              >
                {siteConfig.business.name.charAt(0)}
              </div>
              <h3 className="text-lg font-bold text-white">{siteConfig.footer.companyName}</h3>
            </div>
            <div className="space-y-4">
              <a 
                href={`tel:${siteConfig.footer.phone}`}
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm">{siteConfig.footer.phone}</span>
              </a>
              <a 
                href={`mailto:${siteConfig.footer.email}`}
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">{siteConfig.footer.email}</span>
              </a>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm">{siteConfig.footer.address}</span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Certifications</h3>
            <ul className="space-y-3">
              {siteConfig.footer.certifications.map((cert: string, idx: number) => (
                <li key={idx} className="flex items-center gap-3 text-gray-300">
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs"
                    style={{ backgroundColor: `${siteConfig.colors.success}20`, color: siteConfig.colors.success }}
                  >
                    ✓
                  </div>
                  <span className="text-sm">{cert}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Liens légaux */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Légal</h3>
            <ul className="space-y-3">
              {siteConfig.footer.links.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href} 
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 group text-sm"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Suivez-nous</h3>
            <div className="flex gap-3">
              <a 
                href={siteConfig.footer.socialLinks.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href={siteConfig.footer.socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={siteConfig.footer.socialLinks.google} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Google Maps"
              >
                <MapPinned className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div 
          className="h-px mb-8"
          style={{ 
            background: `linear-gradient(90deg, transparent, ${siteConfig.colors.primaryLight}30, transparent)`
          }}
        />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-gray-400">
            {siteConfig.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
