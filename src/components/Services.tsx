import React from "react";
import { siteConfig } from "../config/siteConfig";
import { Check, Image as ImageIcon } from "lucide-react";
import "./Services.css";

export const Services: React.FC = () => {
  const { services } = siteConfig;

  return (
    <section id="services" className="services-section section-padding" aria-label="Wedding Services">
      <div className="container">
        
        {/* Section Header */}
        <div className="services-header">
          <span className="section-eyebrow">{services.sectionLabel}</span>
          <h2 className="heading-section services-title">
            {services.title}
          </h2>
          <p className="services-subtitle">
            {services.subtitle}
          </p>
        </div>

        {/* Services List with Empty Visual Slots */}
        <div className="services-grid">
          {services.items.map((service, index) => (
            <div key={service.id} className="service-card">
              
              {/* Left Column: Descriptive Editorial Text */}
              <div className="service-text-content">
                <span className="service-index">0{index + 1}</span>
                <h3 className="service-heading heading-sub">
                  {service.title}
                </h3>
                <p className="service-description">
                  {service.description}
                </p>

                <ul className="service-highlights">
                  {service.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="highlight-item">
                      <Check size={14} className="highlight-icon" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Empty Visual Slot for Service Media */}
              <div className="service-visual-slot">
                {service.imageSrc ? (
                  // When you provide an image path in siteConfig.ts, it will display here:
                  <img
                    src={service.imageSrc}
                    alt={service.title}
                    className="service-image"
                  />
                ) : (
                  // Clean empty media container with guidance
                  <div className="service-placeholder-box">
                    <ImageIcon size={22} className="placeholder-icon" />
                    <span className="media-placeholder-badge">IMAGE SLOT 0{index + 1}</span>
                    <span className="service-slot-hint">
                      Add photo path in <code>siteConfig.services.items[{index}].imageSrc</code>
                    </span>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="services-footer-cta">
          <p className="services-cta-text">
            Need bespoke ceremonial coordination or destination logistics?
          </p>
          <a href="#inquiry" className="btn btn-primary">
            DISCUSS YOUR CELEBRATION
          </a>
        </div>

      </div>
    </section>
  );
};
