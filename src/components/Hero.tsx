import React, { useState, useEffect } from "react";
import { siteConfig } from "../config/siteConfig";
import "./Hero.css";

export const Hero: React.FC = () => {
  const { hero } = siteConfig;
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % hero.slideshowImages.length);
    }, hero.slideIntervalMs);

    return () => clearInterval(timer);
  }, [hero.slideshowImages.length, hero.slideIntervalMs]);

  return (
    <section id="hero" className="hero-section" aria-label="Hero Wedding Photography">
      {/* Cinematic Automatic Slideshow Layer */}
      <div className="hero-slideshow-container" aria-hidden="true">
        {hero.slideshowImages.map((imgSrc, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={imgSrc}
              className={`hero-slide-item ${isActive ? "active" : ""}`}
            >
              <img
                src={imgSrc}
                alt="KNOTS Luxury Wedding Photography"
                className="hero-slide-image"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          );
        })}
      </div>

      {/* Subtle top scrim to preserve pristine navbar legibility without darkening the photo */}
      <div className="hero-top-scrim" aria-hidden="true" />
    </section>
  );
};
