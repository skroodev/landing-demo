#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Simple placeholder generator - creates base64 PNG images
const sizes = [
  { name: 'hero-plumber-at-work.jpg', w: 800, h: 600, label: 'Plombier intervenant chez un client' },
  { name: 'service1-before-leak.jpg', w: 400, h: 300, label: 'Fuite d\'eau visible' },
  { name: 'service1-after-repaired.jpg', w: 400, h: 300, label: 'Réparation complète' },
  { name: 'service2-before-old-bathroom.jpg', w: 400, h: 300, label: 'Salle de bain ancienne' },
  { name: 'service2-after-modern-bathroom.jpg', w: 400, h: 300, label: 'Salle de bain moderne' },
  { name: 'service3-before-old-heater.jpg', w: 400, h: 300, label: 'Vieille chaudière' },
  { name: 'service3-after-new-heater.jpg', w: 400, h: 300, label: 'Nouvelle chaudière' },
  { name: 'og-image.jpg', w: 1200, h: 630, label: 'Plomberie Martin' }
];

const imagesDir = path.join(__dirname, '..', 'public/images');

// Create SVG placeholder as data URL
const createSVG = (w, h, text, color = '#e5e7eb') => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
    <rect width="${w}" height="${h}" fill="${color}"/>
    <text x="${w/2}" y="${h/2}" font-size="18" fill="#333" text-anchor="middle" dy=".3em">
      ${text}
    </text>
  </svg>`;
  return svg;
};

// Generate each image file
sizes.forEach(img => {
  const svg = createSVG(img.w, img.h, img.label);
  const filepath = path.join(imagesDir, img.name);
  fs.writeFileSync(filepath, svg);
  console.log(`✓ Generated ${img.name}`);
});

console.log(`\n✓ All ${sizes.length} placeholder images generated successfully!`);
