import React from "react";
import { siteConfig } from "../config/siteConfig";
import { ArrowDown, ArrowUpRight, Camera } from "lucide-react";
import "./Hero.css";

export const Hero: React.FC = () => {
  const { hero, brand } = siteConfig;

  return (
    <section id="hero" className="hero-section" aria-label="Introduction">
      <div className="container hero-container">
        
        {/* Top Eyebrow & Brand Location */}
        <div className="hero-meta-row">
          <span className="section-eyebrow">{hero.eyebrow}</span>
          <span className="hero-availability-pill">{brand.availability}</span>
        </div>

        {/* Dramatic Minimalist Headline */}
        <div className="hero-headline-wrap">
          <h1 className="hero-title heading-hero">
            <span className="hero-line">{hero.headline.line1}</span>
            <span className="hero-line">{hero.headline.line2}</span>
            <span className="hero-line text-italic-accent">{hero.headline.line3}</span>
          </h1>
        </div>

        {/* Supporting Copy & CTAs */}
        <div className="hero-action-row">
          <p className="hero-supporting-text">
            {hero.supportingText}
          </p>

          <div className="hero-btn-group">
            <a href="#inquiry" className="btn btn-primary">
              <span>{hero.primaryCta}</span>
              <ArrowUpRight size={16} />
            </a>

            <a href="#approach" className="btn btn-secondary">
              <span>{hero.secondaryCta}</span>
            </a>
          </div>
        </div>

        {/* =========================================================================
            EMPTY HERO MEDIA CONTAINER
            This space is intentionally designed to remain visually premium and
            editorial while waiting for your actual wedding photography or film.

            WHEN READY TO ADD YOUR MEDIA:
            1. Put your image in /public/images/hero-wedding.jpg (or video in /public/videos/hero.mp4)
            2. Set `mediaSrc: "/images/hero-wedding.jpg"` in src/config/siteConfig.ts
            ========================================================================= */}
        <div className="hero-media-wrapper">
          {hero.mediaSrc ? (
            // If you provided a media path in siteConfig.ts, it will render here:
            hero.mediaType === "video" ? (
              <video
                src={hero.mediaSrc}
                autoPlay
                muted
                loop
                playsInline
                className="hero-media-element"
              />
            ) : (
              <img
                src={hero.mediaSrc}
                alt="Luxury wedding ceremony decor"
                className="hero-media-element"
              />
            )
          ) : (
            // Dedicated empty media stage with clean dark styling & guidance
            <div className="hero-media-placeholder">
              <div className="placeholder-content">
                <Camera size={28} className="placeholder-icon" />
                <span className="media-placeholder-badge">HERO MEDIA STAGE</span>
                <p className="media-placeholder-hint">
                  Reserved for your cinematic wedding hero film or photograph.
                  <br />
                  <span className="placeholder-subhint">
                    Set <code>mediaSrc</code> in <code>src/config/siteConfig.ts</code> when ready.
                  </span>
                </p>
              </div>

              {/* Editorial framing marks */}
              <div className="corner-mark top-left" aria-hidden="true" />
              <div className="corner-mark top-right" aria-hidden="true" />
              <div className="corner-mark bottom-left" aria-hidden="true" />
              <div className="corner-mark bottom-right" aria-hidden="true" />
            </div>
          )}
        </div>

        {/* Bottom Scroll Cue */}
        <div className="hero-scroll-cue">
          <a href="#journey" className="scroll-cue-link">
            <span>SCROLL TO EXPERIENCE WEDDING JOURNEY</span>
            <ArrowDown size={14} className="bounce-arrow" />
          </a>
        </div>

      </div>
    </section>
  );
};
