export interface ExperienceCategory {
  id: string;
  name: string;
  shortLabel: string;
  headline: string;
  description: string;
  atmosphere: string;
  deliverables: string[];
  imageUrl: string;
  detailImageUrl: string;
  accentQuote: string;
}

export const experiencesData: ExperienceCategory[] = [
  {
    id: "weddings",
    name: "Weddings & Unions",
    shortLabel: "Weddings",
    headline: "Unscripted Poetics in Extraordinary Spaces",
    description: "Multi-day ceremonies and evening gatherings shaped with spatial intimacy, bespoke floral architecture, and seamless emotional progression.",
    atmosphere: "Warm Candlelight • Botanical Sculptures • Golden Twilight",
    deliverables: ["Destination spatial curation", "Floral & botanical choreography", "Custom sensory lighting design", "Private banquet orchestration"],
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=85",
    detailImageUrl: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=85",
    accentQuote: "Not a template, but a sacred reflection of two converging stories.",
  },
  {
    id: "corporate",
    name: "Corporate Galas & Summits",
    shortLabel: "Corporate",
    headline: "High-Caliber Environments That Elevate Presence",
    description: "Annual gatherings, leadership summits, and black-tie galas engineered to inspire conviction, spark discourse, and honor enterprise milestones.",
    atmosphere: "Monolithic Staging • Directional Acoustics • Refined Hospitality",
    deliverables: ["Executive symposium scenography", "Bespoke keynote stage architecture", "VIP lounge choreography", "Curated banquet dining"],
    imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=85",
    detailImageUrl: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=85",
    accentQuote: "Where institutional prestige meets visionary visual restraint.",
  },
  {
    id: "private",
    name: "Private Celebrations & Dinners",
    shortLabel: "Private Dinners",
    headline: "Intimacy Elevated to an Art Form",
    description: "Exclusive dinners in historic villas, private estates, and cloistered courtyards where culinary mastery and ambient sound form an unforgettable communion.",
    atmosphere: "Low Amber Glow • Handcrafted Linens • Ambient Chamber Nuance",
    deliverables: ["Private residence transformation", "Artisan tableware & glassware curation", "Michelin-collaborative logistics", "Acoustic ambiance sculpting"],
    imageUrl: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1400&q=85",
    detailImageUrl: "https://images.unsplash.com/photo-1522413452208-996ff3f3e740?auto=format&fit=crop&w=800&q=85",
    accentQuote: "Conversations that linger past 3 AM, surrounded by quiet beauty.",
  },
  {
    id: "birthdays",
    name: "Milestone Birthdays & Anniversaries",
    shortLabel: "Milestones",
    headline: "Honoring Decades with Daring Visual Panache",
    description: "The celebration of a lifetime deserves an atmosphere that breaks routine. We compose dynamic environments balancing nostalgia, revelation, and euphoria.",
    atmosphere: "Sculptural Vignettes • Rare Vintage Pairings • Dusk Reverie",
    deliverables: ["Concept narrative development", "Immersive entrance sequences", "Live artist and performance curation", "Custom commemorative elements"],
    imageUrl: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1400&q=85",
    detailImageUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=85",
    accentQuote: "Life's most meaningful chapters rendered in vivid color and sound.",
  },
  {
    id: "concerts",
    name: "Concerts & Live Experiences",
    shortLabel: "Concerts",
    headline: "Visceral Soundscapes Clothed in Atmospheric Light",
    description: "Intimate acoustic sessions in cathedral ruins, amphitheater spectacles, and private festivals curated with museum-grade lighting and uncompromised fidelity.",
    atmosphere: "Golden Haze • Dynamic Beam Sculpture • Electric Reverberation",
    deliverables: ["Acoustic environment modeling", "Kinetic lighting choreography", "Audience flow and VIP hospitality", "Multi-sensory stage identity"],
    imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1400&q=85",
    detailImageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=85",
    accentQuote: "The goosebumps when sound, shadow, and collective pulse unite.",
  },
  {
    id: "brand",
    name: "Brand Launches & Premieres",
    shortLabel: "Brand Launches",
    headline: "Physicalizing Identity Through Spatial Drama",
    description: "Editorial unveilings, luxury product debuts, and immersive brand pavilions where every touchpoint communicates cultural relevance and prestige.",
    atmosphere: "High-Contrast Shadows • Monochromatic Focus • Tactile Materials",
    deliverables: ["Brand storytelling through spatial design", "Interactive media installations", "Press preview choreography", "Bespoke olfactory signatures"],
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=85",
    detailImageUrl: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=800&q=85",
    accentQuote: "Guests do not simply view a brand; they step into its soul.",
  },
];
