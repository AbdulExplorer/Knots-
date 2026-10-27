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

  const closeMenu = () => setMobileMenuOpen(false);

  return (
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
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        className={`mobile-nav-drawer ${mobileMenuOpen ? "open" : ""}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-nav-content">
          <ul className="mobile-nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-nav-footer">
            <span className="mobile-nav-brand-descriptor">
              {siteConfig.brand.descriptor}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
