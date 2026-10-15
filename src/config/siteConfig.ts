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
    primaryCtaTarget: string;
    secondaryCtaTarget: string;

    /**
     * =======================================================================
     * HERO CINEMATIC SCROLL-CONTROLLED MEDIA
     * =======================================================================
     * Option A (Video): Put your video path here (e.g., "/videos/wedding-walkthrough.mp4")
     * Option B (Frames): Put framesPattern and frameCount (e.g., "/frames/seq_%03d.jpg")
     * 
     * When left as "", the hero renders an elegant, dark placeholder stage
     * with real-time scroll progress through the 4 wedding venue zones.
     */
    videoSrc: string;
    framesPattern: string;
    frameCount: number;
    showPlaceholderBadge: boolean;

    /** The 4 walkthrough stages that advance as the visitor scrolls the hero */
    walkthroughStages: Array<{
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
    eyebrow: "",
    headline: {
      line1: "Your Story.",
      line2: "Our Craft.",
      line3: "A Wedding Beyond Ordinary.",
    },
    supportingText:
      "We bring your wedding vision to life through thoughtful planning, extraordinary design, and seamless execution.",
    primaryCta: "PLAN YOUR WEDDING",
    secondaryCta: "DISCOVER OUR APPROACH",
    primaryCtaTarget: "#inquiry",
    secondaryCtaTarget: "#approach",

    // =========================================================================
    // EDIT THIS PATH TO ADD YOUR WEDDING WALKTHROUGH VIDEO:
    // Place your mp4 in public/videos/wedding-walkthrough.mp4
    // Then set: videoSrc: "/videos/wedding-walkthrough.mp4"
    // =========================================================================
    videoSrc: "",
    framesPattern: "/images/wedding-journey/f%d.png",
    frameCount: 11,
    showPlaceholderBadge: false,

    walkthroughStages: [
      {
        step: "01",
        title: "The Venue Entrance",
        description: "Guests cross the threshold through candlelit archways and botanical corridors.",
      },
      {
        step: "02",
        title: "Decor & Floral Sculptures",
        description: "Cascading jasmine installations, textured fabrics, and amber lanterns.",
      },
      {
        step: "03",
        title: "The Sacred Mandap",
        description: "The architectural centerpiece sculpted with golden light for the pheras.",
      },
      {
        step: "04",
        title: "The Grand Celebration",
        description: "A wide reveal of starlit banquet tables, music, and midnight reverie.",
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
        imageSrc: "", // Set to your image path later, e.g. "/images/planning.jpg"
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
        imageSrc: "", // Add your photo path here, e.g. "/images/mandap.jpg"
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
    email: "******@knotsbydevajain.com",
    whatsappNumber: "**********", // Replace with your actual WhatsApp number
    whatsappMessage: "Hello Knots by Deva Jain team, I would like to inquire about wedding planning services.",
    successMessage: "Thank you! We have received your wedding inquiry and will reach out within 24 hours.",
  },
};
