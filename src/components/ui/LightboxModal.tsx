import React, { useEffect } from "react";
import { X, Sparkles, Sliders, MapPin } from "lucide-react";
import type { PortfolioItem } from "../../data/portfolio";
import "./LightboxModal.css";

interface LightboxModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (item) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="lightbox-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      onClick={onClose}
    >
      <div
        className="lightbox-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="lightbox-close-btn"
          onClick={onClose}
          aria-label="Close lightbox modal"
          data-cursor="interactive"
        >
          <X size={20} />
          <span className="close-text">CLOSE</span>
        </button>

        <div className="lightbox-content-grid">
          <div className="lightbox-image-container">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="lightbox-image"
            />
            <div className="lightbox-image-badge">
              <span>CONCEPT STUDY PREVIEW</span>
            </div>
          </div>

          <div className="lightbox-details-panel">
            <div className="lightbox-meta-top">
              <span className="lightbox-category">{item.category}</span>
              <span className="lightbox-disclaimer">VISUAL DIRECTION STUDY</span>
            </div>

            <h3 id="lightbox-title" className="lightbox-title">
              {item.title}
            </h3>
            <p className="lightbox-subtitle">{item.subtitle}</p>

            <div className="lightbox-specs-list">
              <div className="lightbox-spec-item">
                <MapPin size={16} className="spec-icon" />
                <div>
                  <span className="spec-label">Environment</span>
                  <p className="spec-value">{item.locationSpec}</p>
                </div>
              </div>

              <div className="lightbox-spec-item">
                <Sparkles size={16} className="spec-icon" />
                <div>
                  <span className="spec-label">Atmospheric Lighting</span>
                  <p className="spec-value">{item.lightingType}</p>
                </div>
              </div>

              <div className="lightbox-spec-item">
                <Sliders size={16} className="spec-icon" />
                <div>
                  <span className="spec-label">Material & Color Palette</span>
                  <p className="spec-value">{item.paletteDescription}</p>
                </div>
              </div>
            </div>

            <div className="lightbox-curator-note">
              <span className="note-label">SCENOGRAPHY NOTE</span>
              <p className="note-text">{item.notes}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
