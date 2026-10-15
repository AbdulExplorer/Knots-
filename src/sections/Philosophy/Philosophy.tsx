import React from "react";
import { motion } from "motion/react";
import { SectionLabel } from "../../components/ui/SectionLabel";
import { AnimatedText } from "../../components/ui/AnimatedText";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { Flame, Waves, Feather } from "lucide-react";
import "./Philosophy.css";

export const Philosophy: React.FC = () => {
  const reducedMotion = useReducedMotion();

  const statementLines = [
    "THE DETAILS",
    "BECOME THE MEMORY.",
  ];

  const sensoryDetails = [
    {
      icon: Flame,
      title: "The Temperature of Light",
      description: "Low-kelvin candlelight and hidden architectural washes calibrated to soften room contours and awaken warmth.",
    },
    {
      icon: Waves,
      title: "Acoustic Attunement",
      description: "Soundscapes engineered so whispered confessions and orchestral crescendos coexist in pure harmony.",
    },
    {
      icon: Feather,
      title: "Tactile Restraint",
      description: "Hand-spun Irish linens, chilled hand-blown crystal, and unlacquered brass that warm naturally in the guest's hand.",
    },
  ];

  return (
    <section id="philosophy" className="philosophy-section" aria-label="Brand Philosophy and Sensory Details">
      <div className="philosophy-ambient-glow" aria-hidden="true" />

      <div className="site-container-narrow">
        {/* Section Header */}
        <div className="philosophy-header-center">
          <SectionLabel number="06" label="SENSUAL GEOMETRY" align="center" />
        </div>

        {/* Large Statement Reveal */}
        <div className="philosophy-statement-wrap">
          <AnimatedText
            lines={statementLines}
            tag="h2"
            className="philosophy-title display-statement"
            highlightWords={["DETAILS", "MEMORY."]}
          />
        </div>

        <p className="philosophy-lead body-lead">
          Years later, no one recalls the exact seating chart or the run of show. What survives is a montage of sensory fragments: the sudden hush when strings swelled, the warmth of amber light against a lover's cheek, and the intoxicating weight of belonging.
        </p>

        {/* Three Sensory Details Columns */}
        <div className="sensory-grid">
          {sensoryDetails.map((detail, index) => {
            const IconComponent = detail.icon;
            return (
              <motion.div
                key={index}
                className="sensory-card"
                initial={reducedMotion ? {} : { opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
              >
                <div className="sensory-icon-wrap">
                  <IconComponent size={20} className="sensory-icon" />
                </div>
                <h3 className="sensory-title font-serif">{detail.title}</h3>
                <p className="sensory-desc body-standard">{detail.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Studio Ethos Signature */}
        <div className="philosophy-signature-block">
          <div className="signature-line" />
          <p className="signature-quote font-serif">
            "We design for the emotional afterglow—the timeless resonance that outlasts the night."
          </p>
          <span className="signature-role">AFTERGLOW ATELIER DIRECTIVE</span>
        </div>
      </div>
    </section>
  );
};
