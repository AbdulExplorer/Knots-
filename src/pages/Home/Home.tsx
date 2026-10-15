import React from "react";
import { Hero } from "../../sections/Hero/Hero";
import { Statement } from "../../sections/Statement/Statement";
import { Experiences } from "../../sections/Experiences/Experiences";
import { Process } from "../../sections/Process/Process";
import { Portfolio } from "../../sections/Portfolio/Portfolio";
import { Philosophy } from "../../sections/Philosophy/Philosophy";
import { Inquiry } from "../../sections/Inquiry/Inquiry";
import "./Home.css";

export const Home: React.FC = () => {
  return (
    <main className="home-main-flow">
      {/* 01 — Hero Introduction */}
      <Hero />

      {/* 02 — Manifesto & Perspective */}
      <Statement />

      {/* 03 — Curated Event Disciplines */}
      <Experiences />

      {/* 04 — Methodology & Planning Philosophy */}
      <Process />

      {/* 05 — Visual Concept Preview Gallery & Lightbox */}
      <Portfolio />

      {/* 06 — Sensual Geometry & Brand Ethos */}
      <Philosophy />

      {/* 07 — Inquiry & Commission Brief */}
      <Inquiry />
    </main>
  );
};
