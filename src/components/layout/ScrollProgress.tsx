import React from "react";
import { useScrollProgress } from "../../hooks/useScrollProgress";
import "./ScrollProgress.css";

export const ScrollProgress: React.FC = () => {
  const progress = useScrollProgress();

  return (
    <div className="scroll-progress-container" aria-hidden="true">
      <div
        className="scroll-progress-bar"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
};
