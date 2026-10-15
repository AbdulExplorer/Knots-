import React from "react";
import "./SectionLabel.css";

interface SectionLabelProps {
  number?: string;
  label: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  number,
  label,
  align = "left",
  className = "",
}) => {
  return (
    <div className={`section-label-wrapper align-${align} ${className}`}>
      {number && <span className="section-label-number">{number}</span>}
      <span className="section-label-divider" />
      <span className="section-label-text">{label}</span>
    </div>
  );
};
