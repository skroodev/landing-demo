export const siteConfig = {
  // IDENTITÉ MÉTIER
  business: {
    name: "Plomberie Martin",
    tagline: "Dépannage 24/7 - Cannes et région",
    description: "Expert en plomberie depuis 15 ans. Dépannage d'urgence, installation, rénovation. Intervention rapide garantie en moins d'1h.",
    type: "Plomberie",
    phone: "+33 6 07 08 09 10",
    email: "contact@plomberie-martin.fr",
    address: "123 Rue de Paris, 06400 Cannes",
    serviceArea: "Cannes, Antibes, Mougins, Grasse",
    keywords: "plombier cannes, dépannage 24/7, plomberie d'urgence",
    foundedYear: "2009",
  },

  // DESIGN SYSTEM - COULEURS
  colors: {
    primary: "#0066cc",
    primaryLight: "#4d94ff",
    primaryDark: "#0047a3",
    secondary: "#ff6600",
    accent: "#00cc99",
    background: "#f8f9fa",
    backgroundAlt: "#ffffff",
    text: "#1a1a1a",
    textLight: "#666666",
    border: "#e0e0e0",
    success: "#00cc99",
  },

  // TYPOGRAPHIE
  typography: {
    bodyFont: "Inter, sans-serif",
    headingFont: "Poppins, sans-serif",
  },

  // PREUVES SOCIALES
  socialProof: {
    clientCount: 1500,
    clientLocation: "Cannes et région PACA",
    averageRating: 4.9,
    reviewCount: 156,
    testimonials: [
      {
        text: "Fuite d'eau critique dans ma salle de bain. Martin est intervenu en moins d'une heure, très professionnel. Le problème a été résolu rapidement et les prix sont justes.",
        author: "Jean Dupont",
        role: "Propriétaire, Cannes",
        rating: 5,
        score: 4.5,
      },
      {
        text: "J'avais besoin d'une rénovation complète de salle de bain. Plomberie Martin a fait un travail impeccable, à l'écoute, respectueux des délais et du budget. Je recommande vivement!",
        author: "Marie Laurent",
        role: "Propriétaire, Antibes",
        rating: 5,
        score: 5.0,
      },
      {
        text: "Problème de tuyauterie un dimanche soir. Ils ont répondu à l'appel et sont venus immédiatement. Très réactifs, très compétents. Un vrai pro!",
        author: "Pierre Moreau",
        role: "Locataire, Mougins",
        rating: 5,
        score: 4.8,
      },
    ],
    trustLogos: ["RGE Certified", "Garantie Décennale", "Agrément Travaux"],
  },

  // HÉRO SECTION
  hero: {
    headline: "Fuite d'eau? Dépannage 24/7 en moins d'une heure",
    subheadline: "Plombier professionnel à Cannes - 15 ans d'expertise - Intervention rapide garantie",
    cta: {
      text: "Appeler maintenant",
      link: "tel:+33607080910",
      variant: "primary",
    },
    image: {
      src: "/images/webp/hero-plumber-at-work.webp",
      alt: "Plombier intervenant chez un client",
    },
    badge: {
      show: true,
      text: "✓ Intervention garantie en moins d'une heure",
    },
  },

  // À QUI ÇA S'ADRESSE
  whoIsThis: {
    forYou: [
      "Vous avez une fuite d'eau urgente et besoin d'intervention rapide",
      "Vous envisagez de rénover votre salle de bain ou cuisine",
      "Votre installation de chauffage nécessite une révision ou remplacement",
      "Vous cherchez un plombier de confiance pour des petits dépannages réguliers",
    ],
    notForYou: [
      "Vous cherchez du bricolage basique sans professionnel",
      "Vous avez un budget extrêmement limité et refusez tout conseil expert",
      "Vous habitez à plus de 30km de Cannes",
    ],
  },

  // PROBLÈME & SOLUTION
  problemSolution: {
    problem: {
      headline: "Les problèmes courants de plomberie",
      items: [
        "Fuites d'eau qui s'aggravent et coûtent cher à réparer",
        "Installation obsolète causant des dégâts réguliers",
        "Plombiers indisponibles en urgence, services peu réactifs",
      ],
    },
    solution: {
      headline: "Notre approche",
      items: [
        "Diagnostic rapide et intervention en moins d'1h garantie",
        "Travaux durables avec matériaux de qualité et garantie 10 ans",
        "Équipe disponible 24/7, 365 jours par an, pricing transparent",
      ],
    },
  },

  // PROCESSUS (HOW IT WORKS)
  processSteps: [
    {
      number: "1",
      title: "Appel & diagnostic",
      description: "Vous appelez, nous comprenons votre problème en 2 minutes.",
      details: "Nous posons les bonnes questions pour évaluer la situation et vous donner un délai d'intervention.",
      icon: "📞",
    },
    {
      number: "2",
      title: "Intervention rapide",
      description: "Notre équipe arrive avec tout le matériel nécessaire.",
      details: "Moins d'1h de délai d'intervention. Diagnostic sur place. Tarif transparent avant de commencer.",
      icon: "🔧",
    },
    {
      number: "3",
      title: "Réparation & suivi",
      description: "Travail professionnel avec garantie décennale.",
      details: "Travaux réalisés, site nettoyé. Facture détaillée. Vous restez en contact pour le suivi.",
      icon: "✓",
    },
  ],

  // SERVICES & RÉALISATIONS (BEFORE/AFTER)
  services: [
    {
      id: "service1",
      title: "Dépannage d'urgence",
      description: "Fuite d'eau, robinet cassé, canalisation bouchée. Intervention rapide 24/7 avec tarification transparente.",
      images: {
        before: { src: "/images/webp/service1-before-leak.webp", alt: "Fuite d'eau visible" },
        after: { src: "/images/webp/service1-after-repaired.webp", alt: "Réparation complète" },
      },
    },
    {
      id: "service2",
      title: "Rénovation salle de bain",
      description: "Installation complète: tuyauterie, robinetterie, douche. Transformation spectaculaire.",
      images: {
        before: { src: "/images/webp/service2-before-old-bathroom.webp", alt: "Salle de bain ancienne" },
        after: { src: "/images/webp/service2-after-modern-bathroom.webp", alt: "Salle de bain moderne" },
      },
    },
    {
      id: "service3",
      title: "Installation chauffage",
      description: "Remplacement chaudière, installation radiateurs, tuyauterie. Système performant.",
      images: {
        before: { src: "/images/webp/service3-before-old-heater.webp", alt: "Vieille chaudière" },
        after: { src: "/images/webp/service3-after-new-heater.webp", alt: "Nouvelle chaudière" },
      },
    },
  ],

  // QUALIFICATIONS (6 POINTS CLÉS)
  qualifications: [
    {
      icon: "🏆",
      title: "15 ans d'expérience",
      description: "Expert depuis 2009. Plus de 2000 clients satisfaits.",
    },
    {
      icon: "⚡",
      title: "Intervention rapide",
      description: "Moins d'1h d'intervention garantie. Disponible 24/7.",
    },
    {
      icon: "🛡️",
      title: "Garantie décennale",
      description: "Tous les travaux couverts par garantie 10 ans.",
    },
    {
      icon: "💰",
      title: "Tarifs transparents",
      description: "Pas de surprise à la fin. Devis détaillé avant.",
    },
    {
      icon: "👥",
      title: "Travail professionnel",
      description: "Équipe formée et courtoise. Chantier respecté.",
    },
    {
      icon: "✔️",
      title: "RGE & certifications",
      description: "Artisan RGE reconnu. Agrément travaux.",
    },
  ],

  // FAQ
  faq: [
    {
      question: "Quel est le délai d'intervention en cas d'urgence?",
      answer: "Nous garantissons une intervention en moins d'1h pour les urgences. Il suffit d'appeler le +33 6 12 34 56 78.",
    },
    {
      question: "Quels sont les tarifs pour une fuite ou un dépannage?",
      answer: "Comptez 150€ pour une visite + diagnostic, puis le coût des réparations selon la complexité. Devis gratuit avant intervention.",
    },
    {
      question: "Vous intervenez le dimanche et les jours fériés?",
      answer: "Oui, nous sommes disponibles 24/7. Les interventions le soir/dimanche peuvent avoir un surcoût de 30%.",
    },
    {
      question: "Vous acceptez les chèques/CB/virement?",
      answer: "Oui, tous les moyens de paiement: chèque, carte, espèces, virement. Facture détaillée fournie.",
    },
    {
      question: "Quelle est la garantie sur les travaux?",
      answer: "Tous nos travaux sont couverts par une garantie décennale. Assurances responsabilité civile à jour.",
    },
    {
      question: "Comment demander un devis?",
      answer: "Remplissez le formulaire ci-dessous ou appelez. Nous venons évaluer et proposons un devis sans engagement.",
    },
  ],

  // TARIFICATION
  pricing: {
    currency: "€",
    disclaimer: "Prix HT. Devis sur demande pour travaux importants.",
    packages: [
      {
        id: "package1",
        name: "Dépannage urgence",
        price: "À partir de 150€",
        description: "Fuites, robinets, tuyauterie",
        features: ["Visite + diagnostic", "Moins d'1h garantie", "24/7"],
        highlighted: false,
      },
      {
        id: "package2",
        name: "Installation standard",
        price: "À partir de 800€",
        description: "Robinetterie, tuyauterie, radiateurs",
        features: ["Devis détaillé", "Matériaux qualité", "Garantie 10 ans"],
        highlighted: true,
      },
      {
        id: "package3",
        name: "Rénovation complète",
        price: "À partir de 2500€",
        description: "Salle de bain, chauffage, tuyauterie",
        features: ["Suivi personnalisé", "Matériaux premium", "Garantie 10 ans"],
        highlighted: false,
      },
    ],
  },

  // CTA FINAL
  ctaFinal: {
    headline: "Prêt à résoudre votre problème de plomberie?",
    text: "Contactez-nous maintenant. Intervention rapide garantie, tarifs transparents, professionnalisme assuré.",
    primaryButton: {
      text: "Appeler maintenant",
      link: "tel:+33612345678",
    },
    secondaryButton: {
      text: "Demander un devis",
      link: "#contact",
    },
    reassurance: "✓ Intervention garantie en moins d'1h | ✓ Tarifs transparents | ✓ Garantie 10 ans",
  },

  // FORMULAIRE DE CONTACT (RGPD)
  contact: {
    show: true,
    headline: "Demander un devis gratuit",
    subheadline: "Remplissez le formulaire ci-dessous. Nous vous répondrons dans les 2 heures.",
    submitButtonText: "Envoyer ma demande",
    successMessage: "✓ Merci! Nous avons reçu votre demande. Nous vous recontacterons sous 2h.",
    errorMessage: "❌ Une erreur est survenue. Veuillez réessayer ou appeler directement.",
    fields: [
      {
        id: "name",
        label: "Votre nom complet",
        type: "text",
        required: true,
        placeholder: "Jean Dupont",
      },
      {
        id: "email",
        label: "Votre email",
        type: "email",
        required: true,
        placeholder: "jean@example.com",
      },
      {
        id: "phone",
        label: "Numéro de téléphone",
        type: "tel",
        required: true,
        placeholder: "+33 6 12 34 56 78",
      },
      {
        id: "subject",
        label: "Type de problème",
        type: "text",
        required: true,
        placeholder: "Ex: Fuite d'eau, rénovation salle de bain",
      },
      {
        id: "message",
        label: "Décrivez votre situation",
        type: "textarea",
        required: true,
        placeholder: "Décrivez en détail (localisation, urgence, budget)",
      },
    ],
    gdprConsent: {
      show: true,
      text: "J'accepte que mes données soient utilisées pour traiter ma demande. Aucun stockage en base de données.",
      required: true,
    },
    endpoint: "/api/contact",
  },

  // MAPS & LOCALISATION
  maps: {
    show: true,
    latitude: 43.5527,
    longitude: 7.0174,
    zoom: 14,
    markerTitle: "Plomberie Martin",
    markerAddress: "123 Rue de Paris, 06400 Cannes, France",
  },

  // FOOTER
  footer: {
    companyName: "Plomberie Martin SARL",
    phone: "+33 6 12 34 56 78",
    email: "contact@plomberie-martin.fr",
    address: "123 Rue de Paris, 06400 Cannes",
    certifications: ["RGE Certified", "Garantie Décennale", "Agrément Travaux"],
    socialLinks: {
      facebook: "https://facebook.com/plomberiemartin",
      instagram: "https://instagram.com/plomberiemartin",
      google: "https://maps.google.com/?q=Plomberie+Martin+Cannes",
    },
    links: [
      { label: "Politique de confidentialité", href: "#" },
      { label: "Mentions légales", href: "#" },
      { label: "Conditions générales", href: "#" },
    ],
    copyright: "© 2024 Plomberie Martin. Tous droits réservés.",
  },

  // SEO & METADATA
  seo: {
    title: "Plombier Cannes 24/7 - Dépannage d'urgence en moins d'1h",
    description: "Plombier professionnel à Cannes. Dépannage d'urgence 24/7 en moins d'1h. 15 ans d'expertise. Garantie 10 ans.",
    ogImage: "/images/webp/og-image.webp",
    ogImageAlt: "Plomberie Martin - Expert en plomberie à Cannes",
  },
};

export default siteConfig;
