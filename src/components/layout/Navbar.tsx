import React, { useState, useEffect } from "react";
import { siteConfig } from "../../config/site";
import { navItems } from "../../config/navigation";
import { MagneticButton } from "../ui/MagneticButton";
import { Menu, X, ArrowUpRight } from "lucide-react";
import "./Navbar.css";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple active section spy
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
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
    <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="site-container header-inner">
        {/* Brand Wordmark */}
        <a href="#hero" className="brand-lockup" data-cursor="interactive">
          <span className="brand-name">{siteConfig.brand.name}</span>
          <span className="brand-descriptor">{siteConfig.brand.descriptor}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navItems.slice(1, 6).map((item) => (
              <li key={item.id} className="nav-item">
                <a
                  href={item.href}
                  className={`nav-link ${activeSection === item.id ? "active" : ""}`}
                  data-cursor="interactive"
                >
                  <span className="nav-label">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Header Right Action */}
        <div className="header-actions">
          <div className="desktop-cta">
            <MagneticButton
              variant="outline"
              size="sm"
              href="#inquiry"
            >
              <span>INQUIRE</span>
              <ArrowUpRight size={14} />
            </MagneticButton>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            data-cursor="interactive"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        className={`mobile-menu-overlay ${mobileMenuOpen ? "open" : ""}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-menu-content">
          <div className="mobile-menu-top">
            <span className="mobile-menu-brand">{siteConfig.brand.name}</span>
            <span className="mobile-menu-status">{siteConfig.brand.availability}</span>
          </div>

          <nav className="mobile-nav" aria-label="Mobile Navigation">
            <ul className="mobile-nav-list">
              {navItems.map((item, index) => (
                <li key={item.id} className="mobile-nav-item">
                  <a
                    href={item.href}
                    className="mobile-nav-link"
                    onClick={closeMenu}
                  >
                    <span className="mobile-nav-index">0{index + 1}</span>
                    <span className="mobile-nav-text">{item.label}</span>
                    {item.description && (
                      <span className="mobile-nav-desc">{item.description}</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mobile-menu-footer">
            <MagneticButton
              variant="primary"
              size="md"
              href="#inquiry"
              onClick={closeMenu}
              className="w-full"
            >
              <span>COMMENCE INQUIRY</span>
              <ArrowUpRight size={16} />
            </MagneticButton>
            <p className="mobile-menu-note">{siteConfig.brand.locationNote}</p>
          </div>
        </div>
      </div>
    </header>
  );
};
