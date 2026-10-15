/**
 * ============================================================================
 * SITE CONFIGURATION — KNOTS BY DEVA JAIN
 * ============================================================================
 * This is the central control panel for your website.
 * You can change brand text, headlines, contact numbers, and media paths here
 * without digging through dozens of code files.
 */

export interface SiteConfig {
  brand: {
    /** The brand name displayed across the site */
    name: string;
    descriptor: string;
    availability: string;
    location: string;
  };

  hero: {
    eyebrow: string;
    headline: {
      line1: string;
      line2: string;
      line3: string;
    };
    supportingText: string;
    primaryCta: string;
    secondaryCta: string;
    /**
     * Put the file path to your hero photo or video here when ready.
     * Example: "/images/hero-wedding.jpg" or "/videos/hero-wedding.mp4"
     * Leave as "" to show the clean placeholder container.
     */
    mediaSrc: string;
    mediaType: "image" | "video";
  };

  weddingJourney: {
    sectionLabel: string;
    title: string;
    subtitle: string;
    /**
     * Set to true to show the "YOUR WEDDING FILM WILL LIVE HERE" badge.
     * Turn false when launching in production.
     */
    showPlaceholderBadge: boolean;
    /**
     * Path to your wedding cinematic video or frame sequence folder.
     * Example: "/videos/wedding-walkthrough.mp4"
     * Leave as "" while you do not have video files yet.
     */
    videoSrc: string;
    /** The 4 visual story beats as you scroll through the wedding venue */
    beats: Array<{
      step: string;
      title: string;
      description: string;
    }>;
  };

  services: {
    sectionLabel: string;
    title: string;
    subtitle: string;
    items: Array<{
      id: string;
      title: string;
      description: string;
      highlights: string[];
      /** Path to service photo (leave "" for placeholder) */
      imageSrc: string;
    }>;
  };

  approach: {
    sectionLabel: string;
    title: string;
    subtitle: string;
    steps: Array<{
      number: string;
      title: string;
      tagline: string;
      description: string;
    }>;
  };

  gallery: {
    sectionLabel: string;
    title: string;
    subtitle: string;
    /**
     * Add your wedding photographs here when ready.
     * Set imageSrc to "" to display the clean editorial placeholder box.
     */
    items: Array<{
      id: string;
      caption: string;
      category: string;
      aspect: "tall" | "wide" | "square";
      imageSrc: string;
    }>;
  };

  contact: {
    email: string;
    /** Put your 10-digit or international WhatsApp phone number here */
    whatsappNumber: string;
    whatsappMessage: string;
    successMessage: string;
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
    eyebrow: "THOUGHTFULLY PLANNED. BEAUTIFULLY REMEMBERED.",
    headline: {
      line1: "Your Story.",
      line2: "Our Craft.",
      line3: "A Wedding Beyond Ordinary.",
    },
    supportingText:
      "We bring your wedding vision to life through thoughtful planning, extraordinary design, and seamless execution.",
    primaryCta: "PLAN YOUR WEDDING",
    secondaryCta: "DISCOVER OUR APPROACH",
    // When you have an image or video, paste its path here (e.g. "/images/hero.jpg")
    mediaSrc: "",
    mediaType: "image",
  },

  weddingJourney: {
    sectionLabel: "THE CINEMATIC WALKTHROUGH",
    title: "A JOURNEY THROUGH SACRED SPACES",
    subtitle: "Scroll to step into the wedding venue — from the grand entrance to the radiant mandap.",
    showPlaceholderBadge: true, // Set to false when ready for final client launch
    videoSrc: "", // Paste path to video file (e.g. "/videos/journey.mp4") when ready
    beats: [
      {
        step: "01",
        title: "The Arrival & Grand Threshold",
        description: "Guests enter through monumental candlelit archways and botanical corridors, leaving the world behind.",
      },
      {
        step: "02",
        title: "Floral Installations & Spatial Art",
        description: "Sculptural jasmine, marigold cascading weaves, and atmospheric amber lanterns framing the courtyards.",
      },
      {
        step: "03",
        title: "The Sacred Mandap & Focal Vows",
        description: "The architectural centerpiece of the wedding, sculpted with sacred symmetry and golden light for the pheras.",
      },
      {
        step: "04",
        title: "The Celebration & Midnight Reverie",
        description: "A wide reveal of the starlit banquet tables, acoustic music, and unforgettable collective euphoria.",
      },
    ],
  },

  services: {
    sectionLabel: "OUR WEDDING SERVICES",
    title: "DEVOTED EXCLUSIVELY TO WEDDINGS",
    subtitle: "From multi-day royal palaces to modern coastal estates, we orchestrate every layer of your celebration with meticulous artistry.",
    items: [
      {
        id: "full-planning",
        title: "Full-Service Wedding Planning & Coordination",
        description: "Complete end-to-end guidance from venue scouting, budgeting, guest hospitality, and master timelines to every ceremonial milestone.",
        highlights: [
          "Destination selection & contract negotiation",
          "Comprehensive multi-day production schedules",
          "Seamless RSVPs, guest logistics & royal hospitality",
        ],
        imageSrc: "", // Set to your image path later
      },
      {
        id: "decor-scenography",
        title: "Bespoke Decor, Mandap & Spatial Design",
        description: "Transformative venue architecture, artisanal floral curation, mood lighting design, and personalized thematic styling for each ritual.",
        highlights: [
          "Custom mandap architecture & structural design",
          "Textured linens, bespoke tablescapes & artisanal tableware",
          "Sensory illumination & atmospheric lighting design",
        ],
        imageSrc: "", // Set to your image path later
      },
      {
        id: "ceremonial-production",
        title: "Ceremonial Production & Entertainment",
        description: "Direction for every sacred and celebratory ritual: vibrant Mehendi afternoons, electric Sangeet performances, sacred Pheras, and black-tie Receptions.",
        highlights: [
          "Bespoke Sangeet stage design & acoustic engineering",
          "Curated folk artists, classical musicians & live acts",
          "Choreographed bridal & groom entries",
        ],
        imageSrc: "", // Set to your image path later
      },
      {
        id: "on-day-execution",
        title: "On-Day Execution & Family Concierge",
        description: "Discrete, military-precision on-ground management so couples and families enjoy every sacred second without a single logistical distraction.",
        highlights: [
          "Dedicated bride & groom shadowing team",
          "Real-time schedule management & crisis prevention",
          "Flawless vendor coordination and banquet flow",
        ],
        imageSrc: "", // Set to your image path later
      },
    ],
  },

  approach: {
    sectionLabel: "OUR PHILOSOPHY",
    title: "HOW WE BRING YOUR VISION TO LIFE",
    subtitle: "A thoughtful, four-stage journey designed to make your wedding planning feel calm, personal, and exciting.",
    steps: [
      {
        number: "01",
        title: "Deep Listening & Vision Mapping",
        tagline: "Understanding who you are and what this milestone means to you.",
        description: "We begin by understanding your aesthetic sensibilities, family heritage, guest expectations, and the emotions you want everyone in the room to feel.",
      },
      {
        number: "02",
        title: "Spatial Scenography & Design Direction",
        tagline: "Translating feeling into tangible physical beauty.",
        description: "We craft mood boards, layout floorplans, floral palettes, and lighting schematics for each ceremony so you can visualize the entire experience beforehand.",
      },
      {
        number: "03",
        title: "Artisan Selection & Production Rigor",
        tagline: "Partnering only with master craftspeople and trusted teams.",
        description: "From Michelin-caliber caterers to master florists and lighting engineers, we align every artisan under a unified vision with exacting timelines.",
      },
      {
        number: "04",
        title: "The Living Moment & Seamless Execution",
        tagline: "Where you let go and live the most meaningful day of your life.",
        description: "As your celebration begins, our team operates quietly in the background, ensuring every transition feels effortless, beautiful, and deeply personal.",
      },
    ],
  },

  gallery: {
    sectionLabel: "VISUAL ARCHIVE",
    title: "CURATED WEDDING MOMENTS",
    subtitle: "A preview of the spaces, floral architecture, and ceremonial settings we design.",
    items: [
      {
        id: "gal-1",
        caption: "Sacred Mandap Architecture & Floral Canopy",
        category: "Ceremony Scenography",
        aspect: "wide",
        imageSrc: "", // Add your photo path here
      },
      {
        id: "gal-2",
        caption: "Bespoke Royal Banquet & Candlelit Tablescape",
        category: "Dinner & Hospitality",
        aspect: "tall",
        imageSrc: "", // Add your photo path here
      },
      {
        id: "gal-3",
        caption: "Sangeet Stage Production & Dynamic Beam Lighting",
        category: "Celebration Stage",
        aspect: "square",
        imageSrc: "", // Add your photo path here
      },
      {
        id: "gal-4",
        caption: "Floral Corridor & Atmospheric Guest Arrival",
        category: "Entrance Scenography",
        aspect: "wide",
        imageSrc: "", // Add your photo path here
      },
      {
        id: "gal-5",
        caption: "Intimate Haldi Courtyard with Marigold Weaves",
        category: "Traditional Rituals",
        aspect: "tall",
        imageSrc: "", // Add your photo path here
      },
      {
        id: "gal-6",
        caption: "Grand Reception Pavilion & Crystal Chandeliers",
        category: "Reception Design",
        aspect: "square",
        imageSrc: "", // Add your photo path here
      },
    ],
  },

  contact: {
    email: "weddings@knotsbydevajain.com",
    whatsappNumber: "+919876543210", // Replace with your actual WhatsApp number
    whatsappMessage: "Hello Knots by Deva Jain team, I would like to inquire about wedding planning services.",
    successMessage: "Thank you! We have received your wedding inquiry and will reach out within 24 hours.",
  },
};
