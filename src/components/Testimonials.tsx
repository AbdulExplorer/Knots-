import React, { useState, useEffect, useCallback } from "react";
import { siteConfig } from "../config/siteConfig";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Testimonials.css";

interface TestimonialItem {
  id: string;
  quote: string;
  coupleNames?: string;
  weddingLocation?: string;
  weddingYear?: string;
  imageSrc?: string;
}

interface TestimonialsProps {
  /** Optional custom title override (defaults to "Kind Words") */
  title?: string;
  /** Optional custom subtitle override (defaults to "Memories that mean the world to us.") */
  subtitle?: string;
  /** Optional custom testimonials list (defaults to siteConfig.testimonials.items) */
  items?: TestimonialItem[];
  /** Optional auto-slide interval in ms (defaults to siteConfig.testimonials.autoSlideIntervalMs or 6000) */
  autoSlideIntervalMs?: number;
  /** Optional CSS class name */
  className?: string;
}

export const Testimonials: React.FC<TestimonialsProps> = ({
  title,
  subtitle,
  items,
  autoSlideIntervalMs,
  className = "",
}) => {
  const config = siteConfig.testimonials;
  const resolvedTitle = title ?? config.title;
  const resolvedSubtitle = subtitle ?? config.subtitle;
  const resolvedItems = items ?? config.items;
  const resolvedAutoSlideIntervalMs =
    autoSlideIntervalMs ?? config.autoSlideIntervalMs ?? 6000;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Derive safe index in bounds during render
  const safeIndex =
    resolvedItems.length > 0
      ? (currentIndex % resolvedItems.length + resolvedItems.length) % resolvedItems.length
      : 0;

  const changeSlide = useCallback(
    (nextIndex: number) => {
      if (isFading || resolvedItems.length <= 1) return;
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex(nextIndex);
        setIsFading(false);
      }, 200);
    },
    [isFading, resolvedItems.length]
  );

  const handlePrev = useCallback(() => {
    const next = (safeIndex - 1 + resolvedItems.length) % resolvedItems.length;
    changeSlide(next);
  }, [safeIndex, resolvedItems.length, changeSlide]);

  const handleNext = useCallback(() => {
    const next = (safeIndex + 1) % resolvedItems.length;
    changeSlide(next);
  }, [safeIndex, resolvedItems.length, changeSlide]);

  // Automatic slide rotation after delay (with pause on hover/focus & accessibility checks)
  useEffect(() => {
    if (resolvedItems.length <= 1 || isPaused || resolvedAutoSlideIntervalMs <= 0) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      return;
    }

    const timer = setInterval(() => {
      handleNext();
    }, resolvedAutoSlideIntervalMs);

    return () => clearInterval(timer);
  }, [resolvedItems.length, isPaused, resolvedAutoSlideIntervalMs, handleNext]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (resolvedItems.length <= 1) return;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    }
  };

  const hasTestimonials = resolvedItems.length > 0;
  const currentItem = hasTestimonials ? resolvedItems[safeIndex] : null;

  return (
    <section
      id="testimonials"
      className={`testimonials-section section-padding ${className}`.trim()}
      aria-label="Client Testimonials"
    >
      <div className="container">
        {/* Minimal Editorial Section Header */}
        <div className="section-header-minimal">
          <h2 className="heading-section section-title">{resolvedTitle}</h2>
          <p className="section-subtitle">{resolvedSubtitle}</p>
        </div>

        {/* Testimonials Body */}
        {hasTestimonials && currentItem ? (
          <div
            className="testimonial-carousel-container"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            aria-roledescription="carousel"
            aria-label="Client testimonials carousel"
          >
            <div
              className={`testimonial-single-stage ${isFading ? "fade-out" : "fade-in"}`}
              key={currentItem.id}
            >
              {/* Optional Couple Photograph */}
              {currentItem.imageSrc && (
                <div className="testimonial-image-column">
                  <div className="testimonial-photo-wrap">
                    <img
                      src={currentItem.imageSrc}
                      alt={
                        currentItem.coupleNames
                          ? `${currentItem.coupleNames} wedding celebration`
                          : "Wedding photograph"
                      }
                      className="testimonial-photo"
                      loading="lazy"
                    />
                  </div>
                </div>
              )}

              {/* Editorial Quote & Details */}
              <div
                className={`testimonial-content-column ${
                  !currentItem.imageSrc ? "centered" : ""
                }`}
              >
                <span className="testimonial-quote-glyph" aria-hidden="true">
                  “
                </span>

                <blockquote className="testimonial-blockquote">
                  <p className="testimonial-quote-text">{currentItem.quote}</p>
                </blockquote>

                {(currentItem.coupleNames ||
                  currentItem.weddingLocation ||
                  currentItem.weddingYear) && (
                  <div className="testimonial-meta">
                    {currentItem.coupleNames && (
                      <span className="testimonial-client-name">
                        {currentItem.coupleNames}
                      </span>
                    )}

                    {(currentItem.weddingLocation || currentItem.weddingYear) && (
                      <span className="testimonial-location-year">
                        {[currentItem.weddingLocation, currentItem.weddingYear]
                          .filter(Boolean)
                          .join(" · ")}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Navigation Controls: Rendered only when multiple testimonials exist */}
            {resolvedItems.length > 1 && (
              <div className="testimonial-nav-bar">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="testimonial-nav-arrow prev"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} />
                </button>

                <div className="testimonial-indicators">
                  <span className="testimonial-counter" aria-live="polite">
                    {String(safeIndex + 1).padStart(2, "0")} /{" "}
                    {String(resolvedItems.length).padStart(2, "0")}
                  </span>
                  <div className="testimonial-dots" role="tablist">
                    {resolvedItems.map((item, idx) => (
                      <button
                        key={item.id}
                        type="button"
                        role="tab"
                        aria-selected={idx === safeIndex}
                        aria-label={`Go to testimonial ${idx + 1}`}
                        onClick={() => changeSlide(idx)}
                        className={`testimonial-dot ${
                          idx === safeIndex ? "active" : ""
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  className="testimonial-nav-arrow next"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Sensible, Discreet Placeholder State (No Fake Testimonials) */
          <div className="testimonials-discreet-placeholder">
            <span className="placeholder-eyebrow">A Note on Privacy</span>
            <blockquote className="placeholder-quote">
              <p>
                "Every celebration we orchestrate is held with absolute discretion.
                Reflections and private moments from our couples are archived with care and
                shared only with gracious consent."
              </p>
            </blockquote>

            <div className="placeholder-footer">
              <p className="placeholder-concierge-hint">
                Private references and past wedding dossiers are available upon direct concierge inquiry.
              </p>
              <a href="#contact" className="placeholder-contact-link">
                <span>Inquire With Our Atelier</span>
                <span className="link-arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
