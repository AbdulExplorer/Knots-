import React from "react";
import { siteConfig } from "../config/siteConfig";
import "./Approach.css";

export const Approach: React.FC = () => {
  const { approach } = siteConfig;

  return (
    <section id="approach" className="approach-section section-padding" aria-label="Our Wedding Planning Approach">
      <div className="container">
        
        {/* Header Block */}
        <div className="approach-header">
          <span className="section-eyebrow">{approach.sectionLabel}</span>
          <h2 className="heading-section approach-title">
            {approach.title}
          </h2>
          <p className="approach-subtitle">
            {approach.subtitle}
          </p>
        </div>

        {/* 4-Step Editorial Grid */}
        <div className="approach-grid">
          {approach.steps.map((step) => (
            <div key={step.number} className="approach-card">
              <div className="approach-card-top">
                <span className="step-number">{step.number}</span>
                <span className="step-roman">
                  {step.number === "01" ? "I" : step.number === "02" ? "II" : step.number === "03" ? "III" : "IV"}
                </span>
              </div>

              <h3 className="step-title heading-sub">
                {step.title}
              </h3>

              <p className="step-tagline text-italic-accent">
                "{step.tagline}"
              </p>

              <p className="step-desc">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
