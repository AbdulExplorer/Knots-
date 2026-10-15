import React from "react";
import { motion } from "motion/react";
import { SectionLabel } from "../../components/ui/SectionLabel";
import { AnimatedText } from "../../components/ui/AnimatedText";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import "./Statement.css";

export const Statement: React.FC = () => {
  const reducedMotion = useReducedMotion();

  const manifestoLines = [
    "EVERY MOMENT",
    "HAS A FEELING.",
    "WE GIVE IT",
    "A PLACE TO LIVE.",
  ];

  return (
    <section id="statement" className="statement-section" aria-label="Brand Manifesto">
      <div className="site-container">
        {/* Editorial Section Label */}
        <div className="statement-header-row">
          <SectionLabel number="02" label="THE MANIFESTO" />
          <span className="statement-year-tag">VOL. MMXXVI</span>
        </div>

        {/* Large Editorial Typography */}
        <div className="statement-headline-block">
          <AnimatedText
            lines={manifestoLines}
            tag="h2"
            className="statement-title display-statement"
            highlightWords={["FEELING", "PLACE"]}
          />
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="statement-editorial-grid">
          {/* Left Inset Concept Image */}
          <motion.div
            className="statement-image-frame"
            initial={reducedMotion ? {} : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
          >
            <div
              className="statement-image-inner"
              data-cursor="explore"
              data-cursor-label="ETHOS"
            >
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85"
                alt="Long candlelit evening dinner table with ambient amber glow and curated stoneware"
                className="statement-img"
                loading="lazy"
                decoding="async"
              />
              <div className="statement-image-caption">
                <span className="caption-number">FIG. 02.1</span>
                <span className="caption-text">SPATIAL HARMONY & TACTILE CALIBRATION</span>
              </div>
            </div>
          </motion.div>

          {/* Right Supporting Essay */}
          <div className="statement-text-column">
            <motion.p
              className="statement-lead body-lead"
              initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              True distinction in event design is not born from excess or predictable spectacle. It arises from invisible calibration—the precise temperature of candlelight, the acoustic resonance of laughter against vaulted stone, and the gentle slowing of time.
            </motion.p>

            <motion.div
              className="statement-details-block"
              initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              <p className="body-standard statement-body">
                We believe an event is not merely an assembly of vendors, but a living, breathing emotional architecture. From the entrance threshold to the final farewell, every sensory touchpoint is composed to leave an indelible impression.
              </p>

              <div className="statement-quote-box">
                <blockquote className="statement-quote font-serif">
                  "Spectacle fades by dawn. The lingering afterglow of how people felt remains for a lifetime."
                </blockquote>
                <span className="statement-author">— AFTERGLOW Studio Philosophy</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
