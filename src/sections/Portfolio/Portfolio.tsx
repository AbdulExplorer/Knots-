import React, { useState } from "react";
import { portfolioItems, type PortfolioItem } from "../../data/portfolio";
import { SectionLabel } from "../../components/ui/SectionLabel";
import { LightboxModal } from "../../components/ui/LightboxModal";
import { Eye, Info } from "lucide-react";
import "./Portfolio.css";

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filterCategories = [
    { id: "all", label: "All Curations" },
    { id: "Floral & Spatial Design", label: "Floral & Spatial" },
    { id: "Table Styling", label: "Tablescapes" },
    { id: "Production & Stage", label: "Stage & Lighting" },
    { id: "Live Experience", label: "Live Performance" },
    { id: "Private Gathering", label: "Private Banquets" },
  ];

  const filteredItems = activeFilter === "all"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="portfolio-section" aria-label="Visual Portfolio and Concept Studies">
      <div className="site-container">
        {/* Header Block */}
        <div className="portfolio-header">
          <SectionLabel number="05" label="VISUAL PREVIEW" />
          <div className="portfolio-header-grid">
            <div>
              <h2 className="heading-section">
                SCENOGRAPHY &amp; <span className="font-italic-accent">LIGHTING STUDIES</span>
              </h2>
              <p className="portfolio-intro body-standard">
                A preview of our spatial language. These concept studies examine atmospheric lighting, suspended botanical installations, and the choreography of intimate and monolithic spaces.
              </p>
            </div>

            <div className="portfolio-disclaimer-box">
              <Info size={16} className="disclaimer-icon" />
              <div className="disclaimer-text">
                <span className="disclaimer-title">EDITORIAL PREVIEW NOTICE</span>
                <p>
                  Curated visual direction and mood studies. These images represent our spatial aesthetic and lighting standards prior to private client portfolio reveal.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="portfolio-filter-bar" role="tablist" aria-label="Portfolio Filters">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeFilter === cat.id}
              className={`portfolio-filter-btn ${activeFilter === cat.id ? "active" : ""}`}
              onClick={() => setActiveFilter(cat.id)}
              data-cursor="interactive"
            >
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Editorial Asymmetric Masonry Grid */}
        <div className="portfolio-editorial-grid">
          {filteredItems.map((item, index) => {
            const isSpan2 = item.aspect === "wide" && (index === 0 || index === 3);
            return (
              <div
                key={item.id}
                className={`portfolio-card ${isSpan2 ? "span-two" : ""} aspect-${item.aspect}`}
                onClick={() => setSelectedItem(item)}
                data-cursor="explore"
                data-cursor-label="EXPAND"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedItem(item);
                  }
                }}
                aria-label={`Open concept study details for ${item.title}`}
              >
                <div className="portfolio-card-media">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="portfolio-card-img"
                    loading="lazy"
                  />
                  <div className="portfolio-card-overlay" />
                  <div className="portfolio-card-vignette" />
                </div>

                <div className="portfolio-card-content">
                  <div className="card-top-meta">
                    <span className="card-category">{item.category}</span>
                    <span className="card-expand-icon">
                      <Eye size={15} />
                    </span>
                  </div>

                  <div className="card-bottom-info">
                    <h3 className="card-title font-serif">{item.title}</h3>
                    <p className="card-subtitle">{item.subtitle}</p>
                    <span className="card-spec-tag">{item.locationSpec}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Accessible Full-Resolution Lightbox Modal */}
      <LightboxModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
};
