import React from "react";
import { siteConfig } from "../config/siteConfig";
import "./Services.css";

export const Services: React.FC = () => {
  const { services } = siteConfig;

  return (
    <section id="services" className="services-section section-padding" aria-label="Wedding Services">
      <div className="container">
        {/* Minimal Section Header */}
        <div className="section-header-minimal">
          <h2 className="heading-section section-title">{services.title}</h2>
          <p className="section-subtitle">{services.subtitle}</p>
        </div>

        {/* Clean Photography-First Services Grid */}
        <div className="services-photo-grid">
          {services.items.map((service, index) => (
            <div key={service.id} className="service-photo-card">
              <div className="service-image-wrap">
                <img
                  src={service.imageSrc}
                  alt={service.title}
                  className="service-image"
                  loading="lazy"
                />
                <span className="service-number">0{index + 1}</span>
              </div>
              <div className="service-caption-wrap">
                <h3 className="service-title heading-sub">{service.title}</h3>
                <p className="service-desc">{service.shortDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
