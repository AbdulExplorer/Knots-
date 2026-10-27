import React from "react";
import { siteConfig } from "../config/siteConfig";
import "./About.css";

export const About: React.FC = () => {
  const { about } = siteConfig;

  return (
    <section id="about" className="about-section section-padding" aria-label="About KNOTS by Deva Jain">
      <div className="container">
        <div className="about-grid">
          {/* High-Resolution Wedding Portrait / Scenography Image */}
          <div className="about-image-column">
            <div className="about-image-wrap">
              <img
                src={about.imageSrc}
                alt={about.founder}
                className="about-image"
                loading="lazy"
              />
            </div>
          </div>

          {/* Minimal Editorial Narrative */}
          <div className="about-text-column">
            <span className="section-eyebrow-minimal">{about.title}</span>
            <h2 className="heading-section about-title">{about.tagline}</h2>
            <p className="about-description">{about.description}</p>

            <blockquote className="about-quote">
              <p className="about-quote-text">"{about.quote}"</p>
              <footer className="about-signature">
                <span className="founder-name">{about.founder}</span>
                <span className="founder-title">{about.founderTitle}</span>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};
