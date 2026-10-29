/**
 * ============================================================================
 * SITE CONFIGURATION — KNOTS BY DEVA JAIN
 * Minimal, Premium & Photography-Focused Luxury Wedding Atelier
 * ============================================================================
 */

export interface SiteConfig {
  brand: {
    name: string;
    descriptor: string;
    availability: string;
    location: string;
  };

  hero: {
    slideshowImages: string[];
    slideIntervalMs: number;
  };

  services: {
    title: string;
    subtitle: string;
    items: Array<{
      id: string;
      title: string;
      shortDesc: string;
      imageSrc: string;
    }>;
  };

  gallery: {
    title: string;
    subtitle: string;
    items: Array<{
      id: string;
      caption: string;
      category: string;
      aspect: "tall" | "wide" | "square";
      imageSrc: string;
    }>;
  };

  testimonials: {
    title: string;
    subtitle: string;
    autoSlideIntervalMs?: number;
    items: Array<{
      id: string;
      quote: string;
      coupleNames?: string;
      weddingLocation?: string;
      weddingYear?: string;
      imageSrc?: string;
    }>;
  };

  about: {
    title: string;
    tagline: string;
    description: string;
    quote: string;
    founder: string;
    founderTitle: string;
    imageSrc: string;
  };

  contact: {
    title: string;
    subtitle: string;
    email: string;
    whatsappNumber: string;
    phone: string;
    whatsappMessage: string;
    successMessage: string;
    web3FormsAccessKey?: string;
  };

  hospitalityPartners: {
    heading: string;
    items: Array<{
      id: string;
      name: string;
      logoSrc: string;
      logoWidth?: number;
      logoHeight?: number;
    }>;
  };
}

export const siteConfig: SiteConfig = {
  brand: {
    name: "KNOTS BY DEVA JAIN",
    descriptor: "LUXURY WEDDING PLANNING & SPATIAL DESIGN",
    availability: "Accepting Commissions for 2026 / 2027",
    location: "Available Across India & Global Destinations",
  },

  hero: {
    slideshowImages: [
      "/images/wedding-journey/h1.jpg",
      "/images/wedding-journey/h2.jpg",
      "/images/wedding-journey/h3.jpg",
      "/images/wedding-journey/h4.jpg",




    ],
    slideIntervalMs: 5000,
  },

  services: {
    title: "Services",
    subtitle: "Thoughtfully planned, artistically designed, flawlessly executed.",
    items: [
      {
        id: "full-planning",
        title: "Full-Service Planning",
        shortDesc: "End-to-end guidance from venue curation and master timelines to guest hospitality.",
        imageSrc: "/images/wedding-journey/f3.png",
      },
      {
        id: "decor-scenography",
        title: "Mandap & Spatial Design",
        shortDesc: "Transformative venue architecture, artisanal floral curation, and sensory illumination.",
        imageSrc: "/images/wedding-journey/f5.png",
      },
      {
        id: "ceremonial-production",
        title: "Ceremonial Production",
        shortDesc: "Creative direction and seamless acoustics for Mehendi, Sangeet, and sacred Pheras.",
        imageSrc: "/images/wedding-journey/f7.png",
      },
      {
        id: "on-day-execution",
        title: "On-Ground Concierge",
        shortDesc: "Discrete, military-precision execution so couples immerse in every moment.",
        imageSrc: "/images/wedding-journey/f8.png",
      },
    ],
  },

  gallery: {
    title: "Gallery",
    subtitle: "A curated archive of spaces, florals, and ceremonial moments.",
    items: [
      {
        id: "gal-1",
        caption: "Sacred Mandap Architecture",
        category: "Mandap Scenography",
        aspect: "wide",
        imageSrc: "/images/wedding-journey/f1.png",
      },
      {
        id: "gal-2",
        caption: "Candlelit Royal Banquet",
        category: "Tablescape",
        aspect: "tall",
        imageSrc: "/images/wedding-journey/f2.png",
      },
      {
        id: "gal-3",
        caption: "Sangeet Production & Illumination",
        category: "Celebration",
        aspect: "square",
        imageSrc: "/images/wedding-journey/f4.png",
      },
      {
        id: "gal-4",
        caption: "Floral Corridor & Guest Arrival",
        category: "Entrance",
        aspect: "wide",
        imageSrc: "/images/wedding-journey/f6.png",
      },
      {
        id: "gal-5",
        caption: "Courtyard Haldi Celebration",
        category: "Traditional",
        aspect: "tall",
        imageSrc: "/images/wedding-journey/f9.png",
      },
      {
        id: "gal-6",
        caption: "Grand Reception Pavilion",
        category: "Reception",
        aspect: "square",
        imageSrc: "/images/wedding-journey/f10.png",
      },
    ],
  },

  testimonials: {
    title: "Kind Words",
    subtitle: "Memories that mean the world to us.",
    autoSlideIntervalMs: 6000,
    /**
     * Client Testimonials Array.
     * Kept empty until real client reviews, couple names, and wedding locations
     * are provided and explicitly approved for publication.
     *
     * Example structure to populate:
     * {
     *   id: "couple-1",
     *   quote: "Every moment was orchestrated with quiet magnificence and profound attention to detail.",
     *   coupleNames: "Ananya & Kabir",
     *   weddingLocation: "Udaipur, Rajasthan",
     *   weddingYear: "2025",
     *   imageSrc: "/images/wedding-journey/h1.jpg", // optional couple photo
     * }
     */
    items: [

      {
        id: "couple-1",
        quote: "Every moment was orchestrated with quiet magnificence and profound attention to detail.",
        coupleNames: "Ananya & Kabir",
        weddingLocation: "Udaipur, Rajasthan",
        weddingYear: "2025",
        imageSrc: "/images/wedding-journey/h1.jpg", // optional couple photo
      },

      {
        id: "couple-2",
        quote: "Every moment was orchestrated with quiet magnificence and profound attention to detail.",
        coupleNames: "Ananya & Kabir",
        weddingLocation: "Udaipur, Rajasthan",
        weddingYear: "2025",
        imageSrc: "/images/wedding-journey/h2.jpg", // optional couple photo
      },

      {
        id: "couple-3",
        quote: "Every moment was orchestrated with quiet magnificence and profound attention to detail.",
        coupleNames: "Ananya & Kabir",
        weddingLocation: "Udaipur, Rajasthan",
        weddingYear: "2025",
        imageSrc: "/images/wedding-journey/h3.jpg", // optional couple photo
      },

    ],
  },

  about: {
    title: "About",
    tagline: "Devoted Exclusively to Weddings",
    description:
      "Founded by Deva Jain, KNOTS orchestrates luxury weddings with quiet elegance and architectural grace. We believe the finest celebrations are born from deep listening, bespoke spatial scenography, and obsessive attention to nuance. From historic royal palaces to secluded coastal estates, we craft atmospheres that feel deeply personal, effortlessly timeless, and unforgettable.",
    quote: "Every wedding is an enduring work of art, sculpted with devotion and lived with joy.",
    founder: "Deva Jain",
    founderTitle: "Founder",
    imageSrc: "/images/wedding-journey/DevaJain.png",
  },

  contact: {
    title: "Contact",
    subtitle: "We accept a limited number of commissions each season to ensure absolute devotion.",
    email: "softwarestudiobhopal@gmail.com",
    whatsappNumber: "+91 8871820868",
    phone: "+91 8871820868",
    whatsappMessage: "Hello Knots by Deva Jain team, I would like to inquire about wedding planning services.",
    successMessage: "Thank you! We have received your wedding inquiry and will reach out within 24 hours.",
    web3FormsAccessKey: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "5be7b291-ed95-4f14-a551-90ec1f48da1c",
  },

  hospitalityPartners: {
    heading: "OUR HOSPITALITY PARTNERS",
    items: [
      { id: "jehan-numa", name: "Jehan Numa", logoSrc: "/images/Logo/L1.png", logoWidth: 200, logoHeight: 150, },
      { id: "graces-resorts", name: "Graces Resorts", logoSrc: "/images/Logo/L2.png", logoWidth: 200, logoHeight: 150, },
      { id: "utopia-resort", name: "Utopia Resort", logoSrc: "/images/Logo/L3.png", logoWidth: 200, logoHeight: 150, },
      { id: "crescent-resort", name: "Crescent Resort & Club", logoSrc: "/images/Logo/L4.png", logoWidth: 200, logoHeight: 150, },
      { id: "playotel-resort", name: "Playotel Resort", logoSrc: "/images/Logo/L5.png", logoWidth: 200, logoHeight: 150, },
      { id: "zuper-hotels", name: "Zuper Hotels & Resorts", logoSrc: "/images/Logo/L6.png", logoWidth: 200, logoHeight: 150, },
      { id: "courtyard-marriott", name: "Courtyard by Marriott", logoSrc: "/images/Logo/L7.png", logoWidth: 200, logoHeight: 150, },
      { id: "pebbles-resort", name: "Pebbles Resort", logoSrc: "/images/Logo/L8.png", logoWidth: 200, logoHeight: 150, },
    ],
  },
};
