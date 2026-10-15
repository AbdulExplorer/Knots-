import React from "react";
import { motion } from "motion/react";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import "./AnimatedText.css";

interface AnimatedTextProps {
  lines: string[];
  tag?: "h1" | "h2" | "h3" | "p" | "div";
  className?: string;
  delay?: number;
  highlightWords?: string[];
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  lines,
  tag = "div",
  className = "",
  delay = 0,
  highlightWords = [],
}) => {
  const reducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: delay,
      },
    },
  };

  const lineVariants = {
    hidden: {
      opacity: 0,
      y: "110%",
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.9,
        ease: [0.19, 1, 0.22, 1] as [number, number, number, number],
      },
    },
  };

  if (reducedMotion) {
    const Tag = tag;
    return (
      <Tag className={`animated-text-container ${className}`}>
        {lines.map((line, idx) => (
          <span key={idx} className="animated-text-line-wrapper">
            <span className="animated-text-line">
              {renderLineContent(line, highlightWords)}
            </span>
          </span>
        ))}
      </Tag>
    );
  }

  const MotionTag = motion[tag] as unknown as typeof motion.div;

  return (
    <MotionTag
      className={`animated-text-container ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {lines.map((line, idx) => (
        <span key={idx} className="animated-text-line-wrapper">
          <motion.span
            className="animated-text-line"
            variants={lineVariants}
          >
            {renderLineContent(line, highlightWords)}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
};

function renderLineContent(text: string, highlightWords: string[]) {
  if (!highlightWords || highlightWords.length === 0) {
    return text;
  }

  // Split and wrap matched words in italic accent class
  const regex = new RegExp(`(${highlightWords.join("|")})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, i) => {
    const isHighlight = highlightWords.some(
      (w) => w.toLowerCase() === part.toLowerCase()
    );
    if (isHighlight) {
      return (
        <span key={i} className="font-italic-accent">
          {part}
        </span>
      );
    }
    return part;
  });
}
