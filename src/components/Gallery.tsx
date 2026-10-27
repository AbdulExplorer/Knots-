import React from "react";
import { siteConfig } from "../config/siteConfig";
import "./Gallery.css";

export const Gallery: React.FC = () => {
  const { gallery } = siteConfig;

  return (
    <section id="gallery" className="gallery-section section-padding" aria-label="Wedding Gallery">
      <div className="container">
        {/* Minimal Header */}
        <div className="section-header-minimal">
          <h2 className="heading-section section-title">{gallery.title}</h2>
          <p className="section-subtitle">{gallery.subtitle}</p>
        </div>

        {/* Editorial Photography Grid */}
        <div className="gallery-photo-grid">
          {gallery.items.map((item, index) => (
            <div
              key={item.id}
              className={`gallery-photo-item item-${index + 1} aspect-${item.aspect}`}
            >
              <div className="gallery-img-wrap">
                <img
                  src={item.imageSrc}
                  alt={item.caption}
                  className="gallery-image"
                  loading="lazy"
                />
                <div className="gallery-caption-overlay">
                  <span className="gallery-caption-category">{item.category}</span>
                  <p className="gallery-caption-text">{item.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
