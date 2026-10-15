import React from "react";
import { siteConfig } from "../config/siteConfig";
import { Camera } from "lucide-react";
import "./Gallery.css";

export const Gallery: React.FC = () => {
  const { gallery } = siteConfig;

  return (
    <section id="gallery" className="gallery-section section-padding" aria-label="Wedding Gallery Archive">
      <div className="container">
        
        {/* Header Block */}
        <div className="gallery-header">
          <span className="section-eyebrow">{gallery.sectionLabel}</span>
          <h2 className="heading-section gallery-title">
            {gallery.title}
          </h2>
          <p className="gallery-subtitle">
            {gallery.subtitle}
          </p>
        </div>

        {/* Editorial Masonry Grid of Empty Image Slots */}
        <div className="gallery-grid">
          {gallery.items.map((item, index) => (
            <div
              key={item.id}
              className={`gallery-card aspect-${item.aspect} ${item.aspect === "wide" && (index === 0 || index === 3) ? "col-span-2" : ""}`}
            >
              {item.imageSrc ? (
                // When you provide real wedding photos in siteConfig.ts, they will display here:
                <img
                  src={item.imageSrc}
                  alt={item.caption}
                  className="gallery-image"
                />
              ) : (
                // Clean empty photo container with caption & guidance
                <div className="gallery-placeholder">
                  <Camera size={24} className="placeholder-icon" />
                  <span className="media-placeholder-badge">{item.category}</span>
                  <p className="gallery-caption">{item.caption}</p>
                  <span className="gallery-hint">
                    Set <code>siteConfig.gallery.items[{index}].imageSrc</code>
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Gallery Guidance Notice */}
        <div className="gallery-note">
          <p className="gallery-note-text">
            These frames are reserved for your bespoke wedding portfolio. Add your image URLs in <code>src/config/siteConfig.ts</code>.
          </p>
        </div>

      </div>
    </section>
  );
};
