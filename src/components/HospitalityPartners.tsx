import React from "react";
import { siteConfig } from "../config/siteConfig";
import "./HospitalityPartners.css";

interface PartnerItem {
  id: string;
  name: string;
  logoSrc: string;
  logoWidth?: number;
  logoHeight?: number;
}

interface HospitalityPartnersProps {
  /** Optional override for section heading text */
  heading?: string;
  /**
   * Optional custom list of partners.
   * Defaults to siteConfig.hospitalityPartners.items.
   * If an empty list is passed, the section safely returns null.
   */
  partners?: PartnerItem[];
  /** Optional custom class name */
  className?: string;
}

export const HospitalityPartners: React.FC<HospitalityPartnersProps> = ({
  heading,
  partners,
  className = "",
}) => {
  const config = siteConfig.hospitalityPartners;
  const resolvedHeading = heading ?? config.heading;
  const resolvedPartners = partners ?? config.items;

  // If no partner logos are configured, gracefully return null
  if (!resolvedPartners || resolvedPartners.length === 0) {
    return null;
  }

  return (
    <section
      id="hospitality-partners"
      className={`hospitality-partners-section ${className}`.trim()}
      aria-label="Our Hospitality Partners"
    >
      <div className="partners-header">
        <h2 className="partners-heading">{resolvedHeading}</h2>
      </div>

      <div
        className="partners-marquee-container"
        tabIndex={0}
        aria-label="Partner hotel and resort logos marquee"
      >
        <div className="partners-marquee-track">
          {/* Primary accessible list for screen readers (Group 1) */}
          <ul className="partners-marquee-group" role="list">
            {resolvedPartners.map((partner) => (
              <li key={`g1-${partner.id}`} className="partner-logo-item">
                <img
                  src={partner.logoSrc}
                  alt={partner.name}
                  className="partner-logo-img"
                  style={{
                    width: `${partner.logoWidth ?? 120}px`,
                    height: `${partner.logoHeight ?? 80}px`,
                    objectFit: "contain",
                  }}
                  loading="lazy"
                />
              </li>
            ))}
          </ul>

          {/* Duplicated groups (2, 3, 4) ensuring seamless loop on all screen widths */}
          <ul className="partners-marquee-group" role="list" aria-hidden="true">
            {resolvedPartners.map((partner) => (
              <li key={`g2-${partner.id}`} className="partner-logo-item" tabIndex={-1}>
                <img
                  src={partner.logoSrc}
                  alt=""
                  className="partner-logo-img"
                  style={{
                    width: `${partner.logoWidth ?? 120}px`,
                    height: `${partner.logoHeight ?? 80}px`,
                    objectFit: "contain",
                  }}
                  loading="lazy"
                />
              </li>
            ))}
          </ul>

          <ul className="partners-marquee-group" role="list" aria-hidden="true">
            {resolvedPartners.map((partner) => (
              <li key={`g3-${partner.id}`} className="partner-logo-item" tabIndex={-1}>
                <img
                  src={partner.logoSrc}
                  alt=""
                  className="partner-logo-img"
                  style={{
                    width: `${partner.logoWidth ?? 120}px`,
                    height: `${partner.logoHeight ?? 80}px`,
                    objectFit: "contain",
                  }}
                  loading="lazy"
                />
              </li>
            ))}
          </ul>

          <ul className="partners-marquee-group" role="list" aria-hidden="true">
            {resolvedPartners.map((partner) => (
              <li key={`g4-${partner.id}`} className="partner-logo-item" tabIndex={-1}>
                <img
                  src={partner.logoSrc}
                  alt=""
                  className="partner-logo-img"
                  style={{
                    width: `${partner.logoWidth ?? 120}px`,
                    height: `${partner.logoHeight ?? 80}px`,
                    objectFit: "contain",
                  }}
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HospitalityPartners;
