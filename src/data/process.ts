export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  focus: string[];
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    subtitle: "The Unspoken Essence",
    tagline: "We listen for what words leave unsaid.",
    description: "Before a single sketch is drawn or a venue evaluated, we examine the emotional core of your gathering. Who is in the room? What tension or joy do we wish to evoke? We map your memories, aesthetic inclinations, and musical instincts into a foundational creative brief.",
    focus: [
      "Psychological & emotional mapping",
      "Venue acoustic and architectural assessment",
      "Creative brief & sensory direction deck",
    ],
  },
  {
    number: "02",
    title: "Imagine",
    subtitle: "Spatial Poetry & Scenography",
    tagline: "Translating feeling into three dimensions.",
    description: "Here, conceptual narratives become tactile realities. We develop spatial layout studies, bespoke lighting schematics, custom botanical compositions, culinary sequences, and sonic atmospheres. You experience your gathering through cohesive mood studies and architectural renderings.",
    focus: [
      "Spatial choreography & flow diagrams",
      "Tactile sample curation (linens, metals, floral)",
      "Atmospheric lighting & acoustic modeling",
    ],
  },
  {
    number: "03",
    title: "Orchestrate",
    subtitle: "Rigorous Precision, Invisible Execution",
    tagline: "The complex machinery of effortless beauty.",
    description: "Magic is the byproduct of meticulous logistics. We coordinate master artisans, Michelin-caliber chefs, lighting technicians, acoustic engineers, and florists under a single unified artistic direction. Every contingency is anticipated; every milestone calibrated to the second.",
    focus: [
      "Micro-timeline & production schedules",
      "Artisan & vendor alignment symposia",
      "On-site build supervision & acoustic calibration",
    ],
  },
  {
    number: "04",
    title: "Experience",
    subtitle: "The Living Moment & Afterglow",
    tagline: "When time slows down and memories take form.",
    description: "As the doors open, our team fades into the background. You step into an unrepeatable world where every transition feels natural, every light beam flatters, and every conversation is nurtured. What remains afterward is the warmth—the afterglow—that lingers for years.",
    focus: [
      "Frictionless guest journey & discrete concierge",
      "Live atmospheric adaptation & light shifting",
      "Preservation of post-event emotional resonance",
    ],
  },
];
