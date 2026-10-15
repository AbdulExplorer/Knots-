import React, { useState } from "react";
import { motion } from "motion/react";
import { siteConfig } from "../../config/site";
import { MagneticButton } from "../../components/ui/MagneticButton";
import { SectionLabel } from "../../components/ui/SectionLabel";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { ArrowDown, ArrowUpRight, Compass, Sparkles } from "lucide-react";
import "./Hero.css";

export const Hero: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const [imageLoaded, setImageLoaded] = useState(false);

  const headlineLines = [
    siteConfig.hero.headlinePart1,
    siteConfig.hero.headlinePart2,
    siteConfig.hero.headlinePart3,
    siteConfig.hero.headlinePart4,
  ];

  return (
    <section id="hero" className="hero-section" aria-label="Introduction">
      {/* Background Cinematic Visual with Mask & Subtle Drift */}
      <div className="hero-visual-viewport">
        <div className={`hero-image-wrapper ${imageLoaded ? "loaded" : "loading"}`}>
          <img
            src={siteConfig.hero.backgroundImageUrl}
            alt="Bespoke luxury banquet hall with dramatic amber lighting, floating floral installations and candlelit tables"
            className="hero-background-img"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            onLoad={() => setImageLoaded(true)}
          />
          <div className="hero-cinematic-mask" />
          <div className="hero-gradient-overlay" />
          <div className="cinematic-vignette" />
        </div>
      </div>

      {/* Main Content Layer */}
      <div className="site-container hero-content-container">
        {/* Top Editorial Eyebrow & Status */}
        <motion.div
          className="hero-eyebrow-row"
          initial={reducedMotion ? {} : { opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <SectionLabel
            number="01"
            label={siteConfig.hero.eyebrow}
          />
          <div className="hero-availability-badge">
            <span className="badge-dot" />
            <span>{siteConfig.brand.availability}</span>
          </div>
        </motion.div>

        {/* Hero Choreographed Headline */}
        <div className="hero-headline-block">
          <h1 className="hero-title display-hero">
            {headlineLines.map((line, idx) => {
              const isAccent = line === siteConfig.hero.headlinePart4;
              return (
                <span key={idx} className="hero-title-line-mask">
                  <motion.span
                    className={`hero-title-line ${isAccent ? "accent-headline" : ""}`}
                    initial={reducedMotion ? {} : { y: "110%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.95,
                      delay: 0.35 + idx * 0.14,
                      ease: [0.19, 1, 0.22, 1],
                    }}
                  >
                    {isAccent ? <em>{line}</em> : line}
                  </motion.span>
                </span>
              );
            })}
          </h1>
        </div>

        {/* Supporting Copy & CTAs */}
        <div className="hero-bottom-grid">
          <motion.div
            className="hero-copy-column"
            initial={reducedMotion ? {} : { opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.9, ease: [0.19, 1, 0.22, 1] }}
          >
            <p className="hero-supporting-copy body-lead">
              {siteConfig.hero.supportingCopy}
            </p>

            <div className="hero-editorial-tags">
              <span className="hero-tag">
                <Compass size={13} className="hero-tag-icon" />
                <span>{siteConfig.brand.locationNote}</span>
              </span>
              <span className="hero-tag">
                <Sparkles size={13} className="hero-tag-icon" />
                <span>Private Curations</span>
              </span>
            </div>
          </motion.div>

          <motion.div
            className="hero-cta-column"
            initial={reducedMotion ? {} : { opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 1.05, ease: [0.19, 1, 0.22, 1] }}
          >
            <div className="hero-cta-group">
              <MagneticButton
                variant="primary"
                size="lg"
                href={siteConfig.hero.primaryCtaTarget}
              >
                <span>{siteConfig.hero.primaryCtaText}</span>
                <ArrowUpRight size={18} />
              </MagneticButton>

              <MagneticButton
                variant="secondary"
                size="lg"
                href={siteConfig.hero.secondaryCtaTarget}
              >
                <span>{siteConfig.hero.secondaryCtaText}</span>
              </MagneticButton>
            </div>
          </motion.div>
        </div>

        {/* Editorial Footprint & Scroll Cue */}
        <motion.div
          className="hero-footer-bar"
          initial={reducedMotion ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.25 }}
        >
          <div className="hero-meta-block">
            <span className="meta-label">DISCIPLINES</span>
            <span className="meta-value">WEDDINGS • GALAS • CONCERTS • BRAND PREMIERES</span>
          </div>

          <a
            href="#statement"
            className="hero-scroll-indicator"
            aria-label="Scroll down to statement manifesto"
            data-cursor="interactive"
          >
            <span className="scroll-cue-text">{siteConfig.hero.scrollIndicatorText}</span>
            <div className="scroll-cue-arrow-wrap">
              <ArrowDown size={14} className="scroll-cue-arrow" />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
