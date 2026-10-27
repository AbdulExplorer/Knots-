export interface ThemeConfig {
  id: string;
  name: string;
  tagline: string;
  colors: {
    bg: string;
    surface: string;
    primaryAccent: string;
    secondaryAccent: string;
    text: string;
  };
}

export const THEMES: ThemeConfig[] = [
  {
    id: "ivory-champagne",
    name: "Ivory & Champagne",
    tagline: "Timeless royal palace warmth and refined golden tones",
    colors: {
      bg: "#FAF8F3",
      surface: "#FFFFFF",
      primaryAccent: "#B89B72",
      secondaryAccent: "#D8C3A5",
      text: "#393630",
    },
  },
  {
    id: "blush-sage",
    name: "Blush & Sage",
    tagline: "Romantic botanical garden celebrations and soft florals",
    colors: {
      bg: "#FFF9F6",
      surface: "#FFFFFF",
      primaryAccent: "#A7B5A0",
      secondaryAccent: "#E8CFCB",
      text: "#393633",
    },
  },
  {
    id: "beige-taupe",
    name: "Beige & Taupe",
    tagline: "Minimalist earthy luxury with understated modern poise",
    colors: {
      bg: "#F5F0E8",
      surface: "#FFFFFF",
      primaryAccent: "#8A7D70",
      secondaryAccent: "#D8CBBB",
      text: "#393530",
    },
  },
  {
    id: "dusty-rose",
    name: "Dusty Rose",
    tagline: "Opulent ceremonial grandeur with romantic dusk nuances",
    colors: {
      bg: "#FBF6F5",
      surface: "#FFFFFF",
      primaryAccent: "#A77C83",
      secondaryAccent: "#D8B3B8",
      text: "#3D3335",
    },
  },
  {
    id: "sage-ivory",
    name: "Sage & Ivory",
    tagline: "Fresh heritage courtyard architecture and serene foliage",
    colors: {
      bg: "#F8F8F0",
      surface: "#FFFFFF",
      primaryAccent: "#78836B",
      secondaryAccent: "#C7CFB8",
      text: "#34372F",
    },
  },
];

export const DEFAULT_THEME_ID = "ivory-champagne";
