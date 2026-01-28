"use client";

import siteConfig from "@/lib/config";

export function Footer() {
  return (
    <footer className="text-white py-12" style={{ backgroundColor: siteConfig.colors.primaryDark }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Entreprise */}
          <div>
            <h3 className="text-lg font-bold mb-4">{siteConfig.footer.companyName}</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>📞 {siteConfig.footer.phone}</p>
              <p>📧 {siteConfig.footer.email}</p>
              <p>📍 {siteConfig.footer.address}</p>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-lg font-bold mb-4">Certifications</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {siteConfig.footer.certifications.map((cert: string, idx: number) => (
                <li key={idx}>✓ {cert}</li>
              ))}
            </ul>
          </div>

          {/* Liens légaux */}
          <div>
            <h3 className="text-lg font-bold mb-4">Légal</h3>
            <ul className="space-y-2 text-sm">
              {siteConfig.footer.links.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-gray-300 hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="text-lg font-bold mb-4">Réseaux sociaux</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={siteConfig.footer.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href={siteConfig.footer.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  Instagram
                </a>
              </li>
              <li>
                <a href={siteConfig.footer.socialLinks.google} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t pt-8 text-center text-sm text-gray-200" style={{ borderColor: `${siteConfig.colors.primaryLight}40` }}>
          {siteConfig.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
