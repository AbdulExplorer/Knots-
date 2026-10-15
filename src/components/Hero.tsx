import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "../config/siteConfig";
import { ArrowDown, ArrowUpRight, Film, Sparkles } from "lucide-react";
import "./Hero.css";

gsap.registerPlugin(ScrollTrigger);

export const Hero: React.FC = () => {
  const { hero, brand } = siteConfig;

  // Refs for scroll container and media elements
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const pinnedViewportRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Scroll state
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  // Setup GSAP ScrollTrigger for the hero background walkthrough
  useEffect(() => {
    const wrapper = scrollWrapperRef.current;
    const pinned = pinnedViewportRef.current;
    if (!wrapper || !pinned) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const totalFrames = hero.frameCount;

    // Optional Frame sequence cache
    const frameImages: HTMLImageElement[] = [];
    if (canvas && totalFrames > 0 && hero.framesPattern) {
      // Preload first batch of frames for smooth rendering
      const loadCount = Math.min(totalFrames, 30);
      for (let i = 1; i <= loadCount; i++) {
        const img = new Image();
        const formattedNum = String(i).padStart(4, "0");
        img.src = hero.framesPattern.replace("%04d", formattedNum);
        frameImages.push(img);
      }
    }

    // Draw frame to canvas helper
    const renderFrame = (frameIndex: number) => {
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const img = frameImages[frameIndex];
      if (img && img.complete) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Draw centered with cover aspect ratio
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShiftX = (canvas.width - img.width * ratio) / 2;
        const centerShiftY = (canvas.height - img.height * ratio) / 2;
        ctx.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          centerShiftX,
          centerShiftY,
          img.width * ratio,
          img.height * ratio
        );
      }
    };

    // Responsive scroll distance (shorter on mobile for natural scrolling)
    const isMobile = window.innerWidth <= 768;
    const scrollDistance = isMobile ? 1200 : 2000;

    // Create the pinned ScrollTrigger for the Hero
    const trigger = ScrollTrigger.create({
      trigger: wrapper,
      start: "top top",
      end: `+=${scrollDistance}`,
      pin: pinned,
      pinSpacing: true,
      scrub: 0.6, // Smooth cinematic scrub physics
      onUpdate: (self) => {
        const progress = self.progress; // 0.0 to 1.0
        setScrollProgress(Math.round(progress * 100));

        // Update active walkthrough stage (0 to 3)
        const stageCount = hero.walkthroughStages.length;
        const currentStage = Math.min(Math.floor(progress * stageCount), stageCount - 1);
        setActiveStageIndex(currentStage);

        // CASE 1: Video scrub mode
        if (video && video.duration) {
          video.currentTime = progress * video.duration;
        }

        // CASE 2: Frame sequence scrub mode
        if (canvas && totalFrames > 0) {
          const frameIndex = Math.min(
            Math.floor(progress * (totalFrames - 1)),
            totalFrames - 1
          );
          renderFrame(frameIndex);
        }
      },
    });

    return () => {
      // Clean up ScrollTrigger instance on unmount
      trigger.kill();
    };
  }, [hero.frameCount, hero.framesPattern, hero.videoSrc, hero.walkthroughStages.length]);

  const activeStage = hero.walkthroughStages[activeStageIndex] || hero.walkthroughStages[0];

  return (
    <div ref={scrollWrapperRef} className="hero-scroll-wrapper" id="hero">
      {/* Pinned Full-Viewport Container */}
      <section ref={pinnedViewportRef} className="hero-pinned-viewport" aria-label="Hero Introduction">
        
        {/* =======================================================================
            LAYER 1 (BACK): FULL-VIEWPORT CINEMATIC BACKGROUND MEDIA
            ======================================================================= */}
        <div className="hero-bg-media-layer">
          {hero.videoSrc ? (
            /* Option A: Real video element (time scrubbed by scroll) */
            <video
              ref={videoRef}
              src={hero.videoSrc}
              muted
              playsInline
              preload="metadata"
              className="hero-video-element"
            />
          ) : hero.frameCount > 0 && hero.framesPattern ? (
            /* Option B: Canvas element for frame sequence */
            <canvas ref={canvasRef} className="hero-canvas-element" />
          ) : (
            /* Option C: Clean empty cinematic dark stage */
            <div className="hero-empty-stage">
              {/* Subtle ambient lighting that breathes with scroll progress */}
              <div
                className="hero-ambient-light"
                style={{
                  transform: `scale(${1 + scrollProgress * 0.005})`,
                  opacity: 0.35 + (scrollProgress / 100) * 0.45,
                }}
              />

              {/* Developer guidance badge (toggle off in siteConfig.ts) */}
              {hero.showPlaceholderBadge && (
                <div className="hero-stage-badge">
                  <Film size={13} className="stage-badge-icon" />
                  <span>CINEMATIC WALKTHROUGH LAYER (Configure videoSrc in siteConfig.ts)</span>
                </div>
              )}

              {/* Architectural corner marks */}
              <div className="hero-corner top-left" aria-hidden="true" />
              <div className="hero-corner top-right" aria-hidden="true" />
              <div className="hero-corner bottom-left" aria-hidden="true" />
              <div className="hero-corner bottom-right" aria-hidden="true" />
            </div>
          )}
        </div>

        {/* =======================================================================
            LAYER 2 (MIDDLE): DARK READABILITY OVERLAY & VIGNETTE
            ======================================================================= */}
        <div className="hero-dark-overlay" aria-hidden="true" />

        {/* =======================================================================
            LAYER 3 (FOREGROUND): HERO TEXT, CTAS & WALKTHROUGH PROGRESS
            ======================================================================= */}
        <div className="container hero-foreground-container">
          
          {/* Top Eyebrow & Availability pill */}
          <div className="hero-top-meta">
            <span className="section-eyebrow">{hero.eyebrow}</span>
            <span className="hero-availability-tag">{brand.availability}</span>
          </div>

          {/* Prominent Editorial Headline */}
          <div className="hero-headline-block">
            <h1 className="heading-hero hero-title">
              <span className="hero-title-line">{hero.headline.line1}</span>
              <span className="hero-title-line">{hero.headline.line2}</span>
              <span className="hero-title-line text-italic-accent">{hero.headline.line3}</span>
            </h1>
          </div>

          {/* Supporting Text & Inquiry CTAs */}
          <div className="hero-action-block">
            <p className="hero-supporting-copy">
              {hero.supportingText}
            </p>

            <div className="hero-cta-group">
              <a href={hero.primaryCtaTarget} className="btn btn-primary">
                <span>{hero.primaryCta}</span>
                <ArrowUpRight size={16} />
              </a>

              <a href={hero.secondaryCtaTarget} className="btn btn-secondary">
                <span>{hero.secondaryCta}</span>
              </a>
            </div>
          </div>

          {/* Bottom Live Walkthrough Beat Indicator (Advances as you scroll) */}
          <div className="hero-walkthrough-footer">
            
            {/* Active Venue Stage Card */}
            <div className="walkthrough-stage-card">
              <div className="stage-card-meta">
                <span className="stage-step-tag">
                  STAGE {activeStage.step} OF 04
                </span>
                <span className="stage-progress-number">{scrollProgress}% WALKTHROUGH</span>
              </div>

              <div className="stage-card-info">
                <div className="stage-title-wrap">
                  <Sparkles size={14} className="stage-sparkle" />
                  <span className="stage-title">{activeStage.title}</span>
                </div>
                <p className="stage-desc">{activeStage.description}</p>
              </div>

              {/* Progress Line */}
              <div className="stage-meter" aria-hidden="true">
                <div className="stage-meter-fill" style={{ width: `${scrollProgress}%` }} />
              </div>
            </div>

            {/* Scroll Down Cue */}
            <div className="hero-scroll-cue">
              <span className="scroll-cue-text">SCROLL TO WALK THROUGH VENUE</span>
              <ArrowDown size={14} className="scroll-cue-arrow" />
            </div>

          </div>

        </div>

      </section>
    </div>
  );
};
