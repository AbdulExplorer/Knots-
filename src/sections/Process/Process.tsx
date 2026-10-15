import React, { useState } from "react";
import { motion } from "motion/react";
import { processSteps } from "../../data/process";
import { SectionLabel } from "../../components/ui/SectionLabel";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { ArrowRight, Compass } from "lucide-react";
import "./Process.css";

export const Process: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number>(0);
  const reducedMotion = useReducedMotion();

  return (
    <section id="process" className="process-section" aria-label="Planning Philosophy and Process">
      <div className="site-container">
        {/* Section Header */}
        <div className="process-header">
          <SectionLabel number="04" label="THE METHODOLOGY" />
          <div className="process-header-grid">
            <h2 className="heading-section">
              FROM IMPRESSION TO <span className="font-italic-accent">IMMORTALITY</span>
            </h2>
            <p className="process-intro body-standard">
              Exceptional gatherings do not happen by chance. They are the synthesis of deep psychological listening, architectural scenography, and quiet logistical perfection.
            </p>
          </div>
        </div>

        {/* Interactive Method Timeline */}
        <div className="process-timeline-layout">
          {/* Step Selector Column */}
          <div className="process-steps-nav" role="tablist" aria-label="Methodology Steps">
            <div className="timeline-connecting-line" aria-hidden="true">
              <div
                className="timeline-connecting-progress"
                style={{ height: `${((selectedStep + 1) / processSteps.length) * 100}%` }}
              />
            </div>

            {processSteps.map((step, idx) => {
              const isSelected = selectedStep === idx;
              return (
                <button
                  key={step.number}
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`step-panel-${idx}`}
                  id={`step-tab-${idx}`}
                  className={`process-step-nav-item ${isSelected ? "selected" : ""}`}
                  onClick={() => setSelectedStep(idx)}
                  data-cursor="interactive"
                >
                  <div className="step-nav-indicator">
                    <span className="step-nav-number">{step.number}</span>
                    <span className="step-nav-dot" />
                  </div>
                  <div className="step-nav-labels">
                    <span className="step-nav-title">{step.title}</span>
                    <span className="step-nav-sub">{step.subtitle}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Detailed Content Card */}
          <div className="process-detail-card" role="tabpanel" id={`step-panel-${selectedStep}`}>
            <motion.div
              key={selectedStep}
              className="step-card-inner"
              initial={reducedMotion ? {} : { opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
            >
              <div className="step-card-header">
                <div className="step-card-badge">
                  <span>PHASE {processSteps[selectedStep].number}</span>
                  <span className="badge-divider">/</span>
                  <span>04</span>
                </div>
                <span className="step-card-roman">
                  {selectedStep === 0 ? "I" : selectedStep === 1 ? "II" : selectedStep === 2 ? "III" : "IV"}
                </span>
              </div>

              <h3 className="step-card-title heading-sub">
                {processSteps[selectedStep].title}: {processSteps[selectedStep].subtitle}
              </h3>

              <p className="step-card-tagline font-italic-accent">
                "{processSteps[selectedStep].tagline}"
              </p>

              <p className="step-card-description body-standard">
                {processSteps[selectedStep].description}
              </p>

              <div className="step-card-focus-block">
                <span className="focus-block-title">CRITICAL PILLARS</span>
                <ul className="focus-list">
                  {processSteps[selectedStep].focus.map((item, i) => (
                    <li key={i} className="focus-list-item">
                      <ArrowRight size={14} className="focus-item-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="step-card-footer">
                <div className="step-progress-indicator">
                  <span className="indicator-label">STAGE READINESS</span>
                  <div className="indicator-bar">
                    <div
                      className="indicator-fill"
                      style={{ width: `${((selectedStep + 1) / 4) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="step-nav-buttons">
                  <button
                    className="step-arrow-btn"
                    disabled={selectedStep === 0}
                    onClick={() => setSelectedStep((prev) => Math.max(0, prev - 1))}
                    aria-label="Previous methodology step"
                    data-cursor="interactive"
                  >
                    PREVIOUS
                  </button>
                  <button
                    className="step-arrow-btn next"
                    disabled={selectedStep === processSteps.length - 1}
                    onClick={() => setSelectedStep((prev) => Math.min(processSteps.length - 1, prev + 1))}
                    aria-label="Next methodology step"
                    data-cursor="interactive"
                  >
                    NEXT STAGE
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Process Footnote */}
        <div className="process-bottom-note">
          <Compass size={16} className="process-compass-icon" />
          <p className="body-small">
            Every timeline is fully bespoke. We coordinate directly with private estates, sovereign authorities, and international cultural venues to secure total spatial autonomy.
          </p>
        </div>
      </div>
    </section>
  );
};
