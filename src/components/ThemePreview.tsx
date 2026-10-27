import React, { useState, useEffect, useRef } from "react";
import { THEMES, DEFAULT_THEME_ID, type ThemeConfig } from "../config/themes";
import { Palette, X, Check } from "lucide-react";
import "./ThemePreview.css";

const STORAGE_KEY = "knots_theme";

export const ThemePreview: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeThemeId, setActiveThemeId] = useState<string>(() => {
    try {
      const savedTheme = localStorage.getItem(STORAGE_KEY);
      const validTheme = THEMES.find((t) => t.id === savedTheme);
      return validTheme ? validTheme.id : DEFAULT_THEME_ID;
    } catch {
      return DEFAULT_THEME_ID;
    }
  });
  const panelRef = useRef<HTMLDivElement>(null);

  // Synchronize document attribute with active theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", activeThemeId);
  }, [activeThemeId]);

  // Handle Theme Selection
  const handleSelectTheme = (theme: ThemeConfig) => {
    setActiveThemeId(theme.id);
    document.documentElement.setAttribute("data-theme", theme.id);
    try {
      localStorage.setItem(STORAGE_KEY, theme.id);
    } catch {
      // Ignore localStorage write error if blocked in iframe/private mode
    }
  };

  // Close when clicking outside panel
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const activeTheme = THEMES.find((t) => t.id === activeThemeId) || THEMES[0];

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        type="button"
        className="theme-floating-toggle"
        onClick={() => setIsOpen((prev: boolean) => !prev)}
        aria-label="Toggle Theme Preview Panel"
        aria-expanded={isOpen}
      >
        <span className="theme-toggle-swatch-dot" style={{ backgroundColor: activeTheme.colors.primaryAccent }} />
        <Palette size={16} className="theme-toggle-icon" />
        <span className="theme-toggle-label">Preview Themes</span>
      </button>

      {/* Floating Modal / Panel */}
      {isOpen && (
        <div className="theme-panel-overlay">
          <div
            ref={panelRef}
            className="theme-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="theme-panel-title"
          >
            {/* Panel Header */}
            <div className="theme-panel-header">
              <div>
                <span className="theme-panel-eyebrow">Aesthetic Curation</span>
                <h3 id="theme-panel-title" className="theme-panel-title">
                  Wedding Color Themes
                </h3>
              </div>
              <button
                type="button"
                className="theme-panel-close"
                onClick={() => setIsOpen(false)}
                aria-label="Close theme preview"
              >
                <X size={18} />
              </button>
            </div>

            <p className="theme-panel-desc">
              Select one of our 5 signature palettes to preview subtle changes in atmosphere across typography, borders, and accents in real time.
            </p>

            {/* List of 5 Curated Themes */}
            <div className="theme-options-list">
              {THEMES.map((theme) => {
                const isActive = theme.id === activeThemeId;
                return (
                  <button
                    key={theme.id}
                    type="button"
                    className={`theme-option-card ${isActive ? "active" : ""}`}
                    onClick={() => handleSelectTheme(theme)}
                  >
                    <div className="theme-option-info">
                      <div className="theme-name-row">
                        <span className="theme-name">{theme.name}</span>
                        {isActive && (
                          <span className="theme-active-tag">
                            <Check size={12} />
                            <span>Active</span>
                          </span>
                        )}
                      </div>
                      <span className="theme-tagline">{theme.tagline}</span>
                    </div>

                    {/* Color Swatches */}
                    <div className="theme-swatches-strip" aria-hidden="true">
                      <span
                        className="theme-swatch"
                        style={{ backgroundColor: theme.colors.bg }}
                        title={`Background: ${theme.colors.bg}`}
                      />
                      <span
                        className="theme-swatch"
                        style={{ backgroundColor: theme.colors.surface }}
                        title={`Surface: ${theme.colors.surface}`}
                      />
                      <span
                        className="theme-swatch"
                        style={{ backgroundColor: theme.colors.primaryAccent }}
                        title={`Primary Accent: ${theme.colors.primaryAccent}`}
                      />
                      <span
                        className="theme-swatch"
                        style={{ backgroundColor: theme.colors.secondaryAccent }}
                        title={`Secondary Accent: ${theme.colors.secondaryAccent}`}
                      />
                      <span
                        className="theme-swatch"
                        style={{ backgroundColor: theme.colors.text }}
                        title={`Text: ${theme.colors.text}`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Panel Footer */}
            <div className="theme-panel-footer">
              <span className="theme-hint-text">
                Selection persists across page navigation via local storage.
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
