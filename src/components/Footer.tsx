import React from "react";
import { siteConfig } from "../config/siteConfig";
import { ArrowUp, MessageCircle, Mail } from "lucide-react";
import "./Footer.css";

const CURRENT_YEAR = new Date().getFullYear();

const FOOTER_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const Footer: React.FC = () => {
  const { brand, contact } = siteConfig;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="minimal-footer">
      <div className="container">
        {/* Main Footer Row */}
        <div className="footer-top-row">
          <div className="footer-brand-wrap">
            <span className="footer-brand-name">{brand.name}</span>
            <span className="footer-brand-descriptor">{brand.descriptor}</span>
          </div>

          {/* Quick Links */}
          <nav className="footer-nav" aria-label="Footer Navigation">
            <ul className="footer-nav-list">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Communications */}
          <div className="footer-comms">
            <a
              href={`https://wa.me/${contact.whatsappNumber.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-comm-link"
            >
              <MessageCircle size={15} />
              <span>WhatsApp Direct</span>
            </a>
            <a href={`mailto:${contact.email}`} className="footer-comm-link">
              <Mail size={15} />
              <span>{contact.email}</span>
            </a>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="footer-bottom-row">
          <p className="footer-copyright">
            © {CURRENT_YEAR} {brand.name}. All wedding concepts are bespoke.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="footer-back-to-top"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
