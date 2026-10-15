import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { experiencesData, type ExperienceCategory } from "../../data/experiences";
import { SectionLabel } from "../../components/ui/SectionLabel";
import { MagneticButton } from "../../components/ui/MagneticButton";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import "./Experiences.css";

export const Experiences: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(experiencesData[0].id);
  const reducedMotion = useReducedMotion();

  const activeCategory: ExperienceCategory =
    experiencesData.find((cat) => cat.id === activeId) || experiencesData[0];

  return (
    <section id="experiences" className="experiences-section" aria-label="Event Experiences">
      <div className="site-container">
        {/* Header Block */}
        <div className="experiences-header">
          <SectionLabel number="03" label="DISCIPLINE CATALOGUE" />
          <div className="experiences-title-row">
            <h2 className="heading-section">
              CURATED DISCIPLINES &amp; <span className="font-italic-accent">ENVIRONMENTS</span>
            </h2>
            <p className="experiences-subtitle body-standard">
              We reject formulaic packages. Every gathering is treated as a bespoke commission requiring custom spatial choreography, acoustic balancing, and sensory resonance.
            </p>
          </div>
        </div>

        {/* Category Navigation Bar */}
        <div className="category-nav-scroll-wrapper">
          <div className="category-nav-bar" role="tablist" aria-label="Event Disciplines">
            {experiencesData.map((cat, idx) => {
              const isActive = cat.id === activeId;
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${cat.id}`}
                  id={`tab-${cat.id}`}
                  className={`category-tab-btn ${isActive ? "active" : ""}`}
                  onClick={() => setActiveId(cat.id)}
                  data-cursor="interactive"
                >
                  <span className="category-tab-num">0{idx + 1}</span>
                  <span className="category-tab-label">{cat.shortLabel}</span>
                  {isActive && (
                    <motion.div
                      layoutId="categoryActiveIndicator"
                      className="category-active-underline"
                      transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetrical Showcase Panel */}
        <div
          id={`panel-${activeCategory.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeCategory.id}`}
          className="experiences-showcase"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory.id}
              className="showcase-grid"
              initial={reducedMotion ? {} : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? {} : { opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
            >
              {/* Left Visual Composition (Primary + Overlap Detail) */}
              <div className="showcase-visuals">
                {/* Main Large Visual Frame */}
                <div
                  className="showcase-main-frame"
                  data-cursor="explore"
                  data-cursor-label="VIEW"
                >
                  <img
                    src={activeCategory.imageUrl}
                    alt={activeCategory.name}
                    className="showcase-main-img"
                    loading="lazy"
                  />
                  <div className="showcase-atmosphere-tag">
                    <span className="atmosphere-label">ATMOSPHERE:</span>
                    <span className="atmosphere-value">{activeCategory.atmosphere}</span>
                  </div>
                </div>

                {/* Overlapping Secondary Detail Frame */}
                <div className="showcase-overlap-frame">
                  <img
                    src={activeCategory.detailImageUrl}
                    alt={`${activeCategory.name} sensory detail`}
                    className="showcase-detail-img"
                    loading="lazy"
                  />
                  <div className="overlap-badge">
                    <span>DETAIL SPEC</span>
                  </div>
                </div>
              </div>

              {/* Right Narrative & Deliverables Column */}
              <div className="showcase-narrative">
                <div className="narrative-top">
                  <span className="narrative-category-label">{activeCategory.name}</span>
                  <h3 className="narrative-headline heading-sub">
                    {activeCategory.headline}
                  </h3>
                  <p className="narrative-description body-standard">
                    {activeCategory.description}
                  </p>
                </div>

                <div className="narrative-quote-block">
                  <blockquote className="narrative-quote">
                    "{activeCategory.accentQuote}"
                  </blockquote>
                </div>

                <div className="narrative-deliverables">
                  <span className="deliverables-title">CURATION DELIVERABLES</span>
                  <ul className="deliverables-list">
                    {activeCategory.deliverables.map((item, i) => (
                      <li key={i} className="deliverable-item">
                        <CheckCircle2 size={16} className="deliverable-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="narrative-cta">
                  <MagneticButton
                    variant="primary"
                    size="md"
                    href={`#inquiry`}
                  >
                    <span>INQUIRE FOR {activeCategory.shortLabel.toUpperCase()}</span>
                    <ArrowUpRight size={16} />
                  </MagneticButton>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
