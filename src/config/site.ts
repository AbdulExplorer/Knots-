/**
 * AFTERGLOW — Central Brand & Site Configuration
 * All core brand names, descriptors, contact coordinates, hero copy,
 * and high-resolution visual imagery are managed here for effortless re-branding.
 */

export interface SiteConfig {
  brand: {
    name: string;
    descriptor: string;
    tagline: string;
    foundingConcept: string;
    availability: string;
    locationNote: string;
  };
  contact: {
    email: string;
    whatsappNumber: string; // E.164 format or empty if unset
    whatsappDefaultMessage: string;
    inquiryNotice: string;
  };
  socials: {
    instagram: { label: string; handle: string; url: string };
    pinterest: { label: string; handle: string; url: string };
    linkedin: { label: string; handle: string; url: string };
  };
  hero: {
    eyebrow: string;
    headlinePart1: string;
    headlinePart2: string;
    headlinePart3: string;
    headlinePart4: string;
    supportingCopy: string;
    primaryCtaText: string;
    secondaryCtaText: string;
    primaryCtaTarget: string;
    secondaryCtaTarget: string;
    scrollIndicatorText: string;
    backgroundImageUrl: string;
    overlayGradient: string;
  };
}

export const siteConfig: SiteConfig = {
  brand: {
    name: "AFTERGLOW",
    descriptor: "EVENTS • EXPERIENCES • EMOTIONS",
    tagline: "The feeling that lingers long after the lights fade.",
    foundingConcept: "Concept Design Studio",
    availability: "Accepting Commissions for 2026 / 2027",
    locationNote: "Available Worldwide for Select Engagements",
  },
  contact: {
    email: "inquiries@afterglow-studio.com",
    // Configurable WhatsApp placeholder. Empty string disables direct link gracefully
    whatsappNumber: "+18005550199",
    whatsappDefaultMessage: "Hello AFTERGLOW Studio, I would like to inquire about designing an upcoming event.",
    inquiryNotice: "Direct studio concierge preview. Real inquiries can be submitted directly via email or scheduled consultation.",
  },
  socials: {
    instagram: {
      label: "Instagram",
      handle: "@afterglow.experiences",
      url: "https://instagram.com",
    },
    pinterest: {
      label: "Visual Board",
      handle: "@afterglow_curations",
      url: "https://pinterest.com",
    },
    linkedin: {
      label: "Editorial",
      handle: "AFTERGLOW Atelier",
      url: "https://linkedin.com",
    },
  },
  hero: {
    eyebrow: "ATELIER FOR BESPOKE GATHERINGS",
    headlinePart1: "WE DON'T JUST",
    headlinePart2: "PLAN EVENTS.",
    headlinePart3: "WE CREATE",
    headlinePart4: "AFTERGLOW.",
    supportingCopy: "From intimate gatherings to extraordinary celebrations, we turn your ideas into experiences people carry with them.",
    primaryCtaText: "LET'S CREATE SOMETHING",
    secondaryCtaText: "EXPLORE OUR WORLD",
    primaryCtaTarget: "#inquiry",
    secondaryCtaTarget: "#experiences",
    scrollIndicatorText: "SCROLL TO DISCOVER",
    // Magnificent warm candlelit grand hall / banquet installation
    backgroundImageUrl: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2200&q=85",
    overlayGradient: "linear-gradient(180deg, rgba(9, 9, 11, 0.5) 0%, rgba(9, 9, 11, 0.3) 50%, rgba(9, 9, 11, 0.85) 100%)",
  },
};
