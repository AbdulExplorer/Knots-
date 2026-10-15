import React from "react";
import { siteConfig } from "../../config/site";
import { navItems } from "../../config/navigation";
import { ArrowUp, Bookmark } from "lucide-react";
import "./Footer.css";

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const currentYear = CURRENT_YEAR;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="site-container">
        {/* Top Editorial Grid */}
        <div className="footer-top-grid">
          <div className="footer-brand-col">
            <span className="footer-brand-name">{siteConfig.brand.name}</span>
            <span className="footer-brand-descriptor">{siteConfig.brand.descriptor}</span>
            <p className="footer-brand-statement">
              An atelier dedicated to the emotional geometry of gatherings. We architect environments that resonate in memory long after the music rests.
            </p>
            <div className="footer-availability-tag">
              <span className="pulse-indicator" />
              <span>{siteConfig.brand.availability}</span>
            </div>
          </div>

          <div className="footer-nav-col">
            <span className="footer-col-title">NAVIGATION</span>
            <ul className="footer-links">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={item.href} className="footer-link" data-cursor="interactive">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-disciplines-col">
            <span className="footer-col-title">DISCIPLINES</span>
            <ul className="footer-links">
              <li><span>Weddings &amp; Unions</span></li>
              <li><span>Corporate Summits</span></li>
              <li><span>Private Banquets</span></li>
              <li><span>Milestone Anniversaries</span></li>
              <li><span>Live Concert Scenography</span></li>
              <li><span>Brand Pavilions</span></li>
            </ul>
          </div>

          <div className="footer-contact-col">
            <span className="footer-col-title">COMMUNICATIONS</span>
            <p className="footer-contact-text">
              Direct all creative briefs, location scouting inquiries, and atelier collaborations to:
            </p>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="footer-email-link"
              data-cursor="interactive"
            >
              {siteConfig.contact.email}
            </a>

            <div className="footer-social-row">
              <a
                href={siteConfig.socials.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-badge"
                title={siteConfig.socials.instagram.handle}
                data-cursor="interactive"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>{siteConfig.socials.instagram.handle}</span>
              </a>
              <a
                href={siteConfig.socials.pinterest.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-badge"
                title={siteConfig.socials.pinterest.handle}
                data-cursor="interactive"
              >
                <Bookmark size={15} />
                <span>Concept Boards</span>
              </a>
              <a
                href={siteConfig.socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-badge"
                title={siteConfig.socials.linkedin.handle}
                data-cursor="interactive"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span>Editorial</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-legal">
            <span>© {currentYear} {siteConfig.brand.name}. All visual works and concept layouts are proprietary.</span>
            <span className="footer-disclaimer-note">
              Visual preview presented as concept direction studies.
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Back to top of page"
            data-cursor="interactive"
          >
            <span>RETURN TO SUMMIT</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
