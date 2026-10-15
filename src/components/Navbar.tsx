import React, { useState, useEffect } from "react";
import { siteConfig } from "../config/siteConfig";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Add subtle background shadow and blur when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container header-container">
        
        {/* =========================================================================
            EMPTY LOGO CONTAINER
            IMPORTANT: Do not put text or generated icons here.
            When you have your logo file ready (e.g., logo.png or logo.svg),
            place it inside this container:
            <img src="/images/logo.svg" alt={siteConfig.brand.name} className="logo-image" />
           ========================================================================= */}
        <a href="#hero" className="logo-placeholder-container" aria-label={siteConfig.brand.name}>
          {/* 
            --- INSERT YOUR LOGO IMAGE BELOW ---
            Example: <img src="/images/your-logo.svg" alt="Knots by Deva Jain" className="brand-logo-img" />
          */}
          <div className="empty-logo-box">
            {/* The box is intentionally empty for you to place your logo later */}
            <span className="empty-logo-guide" aria-hidden="true">
              [ LOGO AREA ]
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-links">
            <li>
              <a href="#services" className="nav-link">
                Wedding Experience
              </a>
            </li>
            <li>
              <a href="#approach" className="nav-link">
                Our Approach
              </a>
            </li>
            <li>
              <a href="#gallery" className="nav-link">
                Gallery
              </a>
            </li>
            <li>
              <a href="#inquiry" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Header Right Action Button */}
        <div className="header-actions">
          <a href="#inquiry" className="btn btn-outline nav-cta-btn">
            PLAN YOUR WEDDING
          </a>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? "open" : ""}`} aria-hidden={!mobileMenuOpen}>
        <ul className="mobile-nav-links">
          <li>
            <a href="#services" className="mobile-nav-link" onClick={closeMenu}>
              Wedding Experience
            </a>
          </li>
          <li>
            <a href="#approach" className="mobile-nav-link" onClick={closeMenu}>
              Our Approach
            </a>
          </li>
          <li>
            <a href="#gallery" className="mobile-nav-link" onClick={closeMenu}>
              Gallery
            </a>
          </li>
          <li>
            <a href="#inquiry" className="mobile-nav-link" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>

        <div className="mobile-nav-footer">
          <a href="#inquiry" className="btn btn-primary w-full" onClick={closeMenu}>
            PLAN YOUR WEDDING
          </a>
          <p className="mobile-nav-tagline">{siteConfig.brand.descriptor}</p>
        </div>
      </div>
    </header>
  );
};
