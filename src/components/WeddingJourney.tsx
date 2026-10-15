import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "../config/siteConfig";
import { Film, Sparkles } from "lucide-react";
import "./WeddingJourney.css";

gsap.registerPlugin(ScrollTrigger);

export const WeddingJourney: React.FC = () => {
  const { weddingJourney } = siteConfig;
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [activeBeatIndex, setActiveBeatIndex] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const video = videoRef.current;

    // Create the GSAP ScrollTrigger to scrub the journey
    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=2200", // Scroll distance that controls the journey speed
      pin: true,
      scrub: 0.5, // Smooth scrubbing physics
      onUpdate: (self) => {
        const progress = self.progress; // 0 to 1
        setScrollPercent(Math.round(progress * 100));

        // Calculate which of the 4 story beats is currently active
        const beatCount = weddingJourney.beats.length;
        const currentBeat = Math.min(Math.floor(progress * beatCount), beatCount - 1);
        setActiveBeatIndex(currentBeat);

        // If a real video file is configured, map scroll progress to video playback time
        if (video && video.duration) {
          video.currentTime = progress * video.duration;
        }
      },
    });

    return () => {
      // Clean up ScrollTrigger instance when component unmounts
      trigger.kill();
    };
  }, [weddingJourney.beats.length, weddingJourney.videoSrc]);

  const activeBeat = weddingJourney.beats[activeBeatIndex] || weddingJourney.beats[0];

  return (
    <section id="journey" ref={sectionRef} className="journey-section" aria-label="Wedding Walkthrough Journey">
      <div className="container journey-container">
        
        {/* Section Header */}
        <div className="journey-header">
          <span className="section-eyebrow">{weddingJourney.sectionLabel}</span>
          <h2 className="heading-section journey-title">
            {weddingJourney.title}
          </h2>
          <p className="journey-subtitle">
            {weddingJourney.subtitle}
          </p>
        </div>

        {/* =========================================================================
            CINEMATIC SCRUB STAGE
            When scrolling, this container remains pinned while the camera moves.
            If `videoSrc` is empty, it displays an editorial dark stage with
            real-time story beat progression.
           ========================================================================= */}
        <div className="journey-stage">
          {weddingJourney.videoSrc ? (
            /* REAL VIDEO MODE: Scroll will control currentTime */
            <video
              ref={videoRef}
              src={weddingJourney.videoSrc}
              muted
              playsInline
              preload="metadata"
              className="journey-video-element"
            />
          ) : (
            /* PLACEHOLDER MODE: Waiting for wedding footage */
            <div className="journey-stage-placeholder">
              
              {/* Development status badge (toggle off in siteConfig.ts) */}
              {weddingJourney.showPlaceholderBadge && (
                <div className="film-placeholder-pill">
                  <Film size={14} className="film-icon" />
                  <span>YOUR WEDDING FILM WILL LIVE HERE</span>
                </div>
              )}

              {/* Atmospheric visual simulation of camera moving through the space */}
              <div
                className="journey-ambient-glow"
                style={{
                  transform: `scale(${1 + scrollPercent * 0.006})`,
                  opacity: 0.4 + (scrollPercent / 100) * 0.4,
                }}
              />

              {/* Central stage guide for student */}
              <div className="journey-stage-notes">
                <span className="stage-note-title">SCROLL-CONTROLLED CAMERA ENGINE</span>
                <p className="stage-note-desc">
                  This viewport is connected to GSAP ScrollTrigger. As you scroll, progress increases from 0% to 100%, seamlessly advancing through the 4 ceremonial moments below.
                </p>
              </div>

              {/* Corner framing marks */}
              <div className="stage-corner top-left" aria-hidden="true" />
              <div className="stage-corner top-right" aria-hidden="true" />
              <div className="stage-corner bottom-left" aria-hidden="true" />
              <div className="stage-corner bottom-right" aria-hidden="true" />
            </div>
          )}

          {/* Real-Time Story Beat Overlay (Updated by scroll position) */}
          <div className="journey-beat-card">
            <div className="beat-card-top">
              <span className="beat-step-badge">
                MOMENT {activeBeat.step} OF 04
              </span>
              <span className="beat-progress-text">{scrollPercent}% SCROLL PROGRESS</span>
            </div>

            <h3 className="beat-card-title heading-sub">
              {activeBeat.title}
            </h3>

            <p className="beat-card-desc">
              {activeBeat.description}
            </p>

            {/* Micro Progress Bar */}
            <div className="beat-meter-bar" aria-hidden="true">
              <div className="beat-meter-fill" style={{ width: `${scrollPercent}%` }} />
            </div>
          </div>
        </div>

        {/* 4 Story Beats Indicator Row */}
        <div className="journey-beats-strip">
          {weddingJourney.beats.map((beat, index) => {
            const isActive = activeBeatIndex === index;
            return (
              <div
                key={beat.step}
                className={`journey-beat-node ${isActive ? "active" : ""}`}
              >
                <div className="node-marker">
                  <span className="node-num">{beat.step}</span>
                  {isActive && <Sparkles size={12} className="node-sparkle" />}
                </div>
                <div className="node-text">
                  <span className="node-title">{beat.title}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
