import React, { useState, useEffect } from "react";
import { siteConfig } from "../config/siteConfig";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Close mobile drawer if screen is resized past breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 860 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        className={`site-header ${isScrolled ? "scrolled" : ""} ${
          mobileMenuOpen ? "menu-open" : ""
        }`}
      >
        <div className="container header-container">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="brand-logo-link"
            aria-label={siteConfig.brand.name}
            onClick={closeMenu}
          >
            <img
              src={logo}
              alt={siteConfig.brand.name}
              className="brand-logo-img"
            />
          </a>

          {/* Minimal Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-links">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Simple Mobile Hamburger Toggle */}
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation (rendered outside <header> so its containing block is the viewport) */}
      <div
        id="mobile-nav-drawer"
        className={`mobile-nav-drawer ${mobileMenuOpen ? "open" : ""}`}
        aria-hidden={!mobileMenuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
      >
        <div className="mobile-nav-content">
          <ul className="mobile-nav-links">
            {NAV_LINKS.map((link, index) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={closeMenu}
                >
                  <span className="mobile-nav-num">0{index + 1}</span>
                  <span className="mobile-nav-text">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-nav-footer">
            <a
              href="#contact"
              className="mobile-nav-cta btn btn-primary"
              onClick={closeMenu}
            >
              Plan Your Celebration
            </a>

            <div className="mobile-nav-contact-info">
              {siteConfig.contact.phone && (
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                  className="mobile-nav-contact-item"
                >
                  {siteConfig.contact.phone}
                </a>
              )}
              {siteConfig.contact.phone && siteConfig.contact.email && (
                <span className="mobile-nav-separator">•</span>
              )}
              {siteConfig.contact.email && (
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="mobile-nav-contact-item"
                >
                  {siteConfig.contact.email}
                </a>
              )}
            </div>

            <span className="mobile-nav-brand-descriptor">
              {siteConfig.brand.descriptor}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
