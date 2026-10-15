export interface PortfolioItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  aspect: "tall" | "wide" | "square";
  imageUrl: string;
  locationSpec: string;
  lightingType: string;
  paletteDescription: string;
  notes: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "portfolio-1",
    title: "The Glass Orangerie",
    subtitle: "Botanical Chandelier Architecture",
    category: "Floral & Spatial Design",
    aspect: "wide",
    imageUrl: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=85",
    locationSpec: "Concept Study — Glasshouse Conservatory",
    lightingType: "Low Amber Candlelight + Concealed 2700K Washes",
    paletteDescription: "Smoked glass, brass, wild eucalyptus, gardenia white",
    notes: "A dialogue between antique architecture and contemporary floral suspended sculpture.",
  },
  {
    id: "portfolio-2",
    title: "Twilight Banquet Table",
    subtitle: "Artisan Stoneware & Raw Linens",
    category: "Table Styling",
    aspect: "tall",
    imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85",
    locationSpec: "Concept Study — Private Villa Courtyard",
    lightingType: "Taper candles & ambient twilight fill",
    paletteDescription: "Unbleached flax, burnished bronze, deep olive",
    notes: "Every place setting is calibrated for warmth, tactile discovery, and unhurried conversation.",
  },
  {
    id: "portfolio-3",
    title: "Monolithic Keynote Stage",
    subtitle: "Linear Beam Scenography",
    category: "Production & Stage",
    aspect: "tall",
    imageUrl: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=85",
    locationSpec: "Concept Study — Contemporary Forum",
    lightingType: "Precision collimated 3200K profiles & diffused back-projection",
    paletteDescription: "Matte obsidian, brushed aluminum, slate gray",
    notes: "Restrained architectural forms commanding focus and presence without visual clutter.",
  },
  {
    id: "portfolio-4",
    title: "The Golden Hour Concert",
    subtitle: "Haze, Acoustic Fidelity & Sunset Rays",
    category: "Live Experience",
    aspect: "wide",
    imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1600&q=85",
    locationSpec: "Concept Study — Open-air Amphitheater",
    lightingType: "Golden haze backlight & warm followspotting",
    paletteDescription: "Amber dusk, twilight sapphire, golden flare",
    notes: "Immersive soundscapes enveloped in natural golden light and dramatic silhouette framing.",
  },
  {
    id: "portfolio-5",
    title: "Intimate Courtyard Reverie",
    subtitle: "Champagne Toast & Cloistered Geometry",
    category: "Private Gathering",
    aspect: "square",
    imageUrl: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=85",
    locationSpec: "Concept Study — Cloistered Tuscan Estate",
    lightingType: "Fairy light canopy and floating hurricane lamps",
    paletteDescription: "Warm terracotta, aged limestone, sparkling champagne",
    notes: "An environment intentionally designed to soften defenses and foster heartfelt connection.",
  },
  {
    id: "portfolio-6",
    title: "Modernist Gala Pavilion",
    subtitle: "Sculptural Draping & Kinetic Centerpieces",
    category: "Corporate Gala",
    aspect: "wide",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=85",
    locationSpec: "Concept Study — Waterfront Pavilion",
    lightingType: "Indirect architectural cove uplighting",
    paletteDescription: "Deep navy, platinum, champagne highlights",
    notes: "Sleek spatial proportions balanced with theatrical warmth for an unforgettable evening.",
  },
];
