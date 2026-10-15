import React from "react";
import { siteConfig } from "../config/siteConfig";
import { ArrowUp, MessageCircle, Mail } from "lucide-react";
import "./Footer.css";

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const { brand, contact } = siteConfig;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="wedding-footer">
      <div className="container">
        
        {/* Top Footer Grid */}
        <div className="footer-grid">
          
          {/* Brand Info */}
          <div className="footer-col brand-col">
            <span className="footer-brand-title">{brand.name}</span>
            <span className="footer-brand-tagline">{brand.descriptor}</span>
            <p className="footer-desc">
              Dedicated exclusively to the planning, spatial scenography, and flawless execution of luxury Indian weddings.
            </p>
            <div className="footer-status-pill">
              <span className="pulse-dot" />
              <span>{brand.availability}</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="footer-col">
            <span className="footer-col-title">NAVIGATION</span>
            <ul className="footer-nav-list">
              <li><a href="#hero">Overview</a></li>
              <li><a href="#services">Wedding Experience</a></li>
              <li><a href="#approach">Our Approach</a></li>
              <li><a href="#gallery">Gallery Archive</a></li>
              <li><a href="#inquiry">Contact Atelier</a></li>
            </ul>
          </div>

          {/* Core Wedding Services */}
          <div className="footer-col">
            <span className="footer-col-title">SERVICES</span>
            <ul className="footer-nav-list">
              <li><span>Full-Service Wedding Planning</span></li>
              <li><span>Mandap &amp; Floral Architecture</span></li>
              <li><span>Sangeet Stage Scenography</span></li>
              <li><span>Hospitality &amp; Guest Management</span></li>
              <li><span>On-Ground Execution</span></li>
            </ul>
          </div>

          {/* Direct Communications */}
          <div className="footer-col">
            <span className="footer-col-title">COMMUNICATIONS</span>
            <p className="footer-contact-note">
              Direct inquiries regarding destination dates and wedding dates:
            </p>
            
            <a href={`mailto:${contact.email}`} className="footer-contact-link">
              <Mail size={15} />
              <span>{contact.email}</span>
            </a>

            <a
              href={`https://wa.me/${contact.whatsappNumber.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-link"
            >
              <MessageCircle size={15} />
              <span>{contact.whatsappNumber} (WhatsApp)</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="footer-bottom-row">
          <p className="footer-copyright">
            © {CURRENT_YEAR} {brand.name}. All wedding concepts and decor curations are bespoke.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="footer-back-to-top"
            aria-label="Back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
};
