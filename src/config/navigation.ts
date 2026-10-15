export interface NavItem {
  id: string;
  label: string;
  href: string;
  description?: string;
}

export const navItems: NavItem[] = [
  { id: "hero", label: "Overview", href: "#hero", description: "The Atelier" },
  { id: "statement", label: "Manifesto", href: "#statement", description: "Our Perspective" },
  { id: "experiences", label: "Disciplines", href: "#experiences", description: "What We Shape" },
  { id: "process", label: "Method", href: "#process", description: "The Journey" },
  { id: "portfolio", label: "Visual Preview", href: "#portfolio", description: "Concept Gallery" },
  { id: "philosophy", label: "Ethos", href: "#philosophy", description: "The Details" },
  { id: "inquiry", label: "Inquire", href: "#inquiry", description: "Start a Conversation" },
];
