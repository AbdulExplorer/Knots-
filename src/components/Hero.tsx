import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "../config/siteConfig";
import { ArrowDown, ArrowUpRight, Film, Sparkles } from "lucide-react";
import "./Hero.css";

gsap.registerPlugin(ScrollTrigger);

/**
 * Helper function to format frame sequence URL.
 * Supports patterns like /images/wedding-journey/f%d.png or frame_%04d.jpg.
 */
function formatFrameUrl(pattern: string, index: number): string {
  if (pattern.includes("%04d")) {
    return pattern.replace("%04d", String(index).padStart(4, "0"));
  }
  if (pattern.includes("%03d")) {
    return pattern.replace("%03d", String(index).padStart(3, "0"));
  }
  if (pattern.includes("%02d")) {
    return pattern.replace("%02d", String(index).padStart(2, "0"));
  }
  if (pattern.includes("%d")) {
    return pattern.replace("%d", String(index));
  }
  return pattern;
}

export const Hero: React.FC = () => {
  const { hero, brand } = siteConfig;

  // Refs for scroll container and media elements
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const pinnedViewportRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Track the current active frame index across renders & async callbacks
  const activeFrameRef = useRef<number>(0);

  // Scroll state for progress bar & walkthrough stage text
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  useEffect(() => {
    const wrapper = scrollWrapperRef.current;
    const pinned = pinnedViewportRef.current;
    if (!wrapper || !pinned) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const totalFrames = hero.frameCount;

    // Cache of loaded HTMLImageElement instances
    const frameImages: HTMLImageElement[] = [];

    /**
     * Render a frame to canvas with high-DPI support and aspect-ratio cover crop.
     */
    const renderFrame = (frameIndex: number) => {
      const currentCanvas = canvasRef.current;
      if (!currentCanvas) return;

      const ctx = currentCanvas.getContext("2d");
      if (!ctx) return;

      // Prefer requested frame, or fallback to closest loaded frame so canvas is never black
      let img = frameImages[frameIndex];
      if (!img || !img.complete || !img.naturalWidth) {
        for (let offset = 1; offset < totalFrames; offset++) {
          const prev = frameImages[frameIndex - offset];
          if (prev && prev.complete && prev.naturalWidth) {
            img = prev;
            break;
          }
          const next = frameImages[frameIndex + offset];
          if (next && next.complete && next.naturalWidth) {
            img = next;
            break;
          }
        }
      }

      if (!img || !img.complete || !img.naturalWidth || !img.naturalHeight) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const displayWidth = currentCanvas.clientWidth || window.innerWidth || 1920;
      const displayHeight = currentCanvas.clientHeight || window.innerHeight || 1080;

      const targetWidth = Math.round(displayWidth * dpr);
      const targetHeight = Math.round(displayHeight * dpr);

      if (currentCanvas.width !== targetWidth || currentCanvas.height !== targetHeight) {
        currentCanvas.width = targetWidth;
        currentCanvas.height = targetHeight;
      }

      // Calculate cover scale: image covers the full canvas without distortion
      const scale = Math.max(
        currentCanvas.width / img.naturalWidth,
        currentCanvas.height / img.naturalHeight
      );

      const drawWidth = Math.round(img.naturalWidth * scale);
      const drawHeight = Math.round(img.naturalHeight * scale);
      const offsetX = Math.round((currentCanvas.width - drawWidth) / 2);
      const offsetY = Math.round((currentCanvas.height - drawHeight) / 2);

      ctx.clearRect(0, 0, currentCanvas.width, currentCanvas.height);
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // Load all frame images if frame sequence is configured
    if (canvas && totalFrames > 0 && hero.framesPattern) {
      for (let i = 1; i <= totalFrames; i++) {
        const img = new Image();
        const frameIdx = i - 1;

        img.onload = () => {
          // If this loaded frame is the one currently selected by scroll, draw it immediately!
          if (activeFrameRef.current === frameIdx) {
            renderFrame(frameIdx);
          }
        };

        img.onerror = () => {
          console.error(`Failed to load wedding frame ${i}: ${img.src}`);
        };

        img.src = formatFrameUrl(hero.framesPattern, i);
        frameImages.push(img);

        // If the image was already cached by the browser, draw initial frame immediately
        if (img.complete && img.naturalWidth > 0 && activeFrameRef.current === frameIdx) {
          renderFrame(frameIdx);
        }
      }

      // Initial draw attempt for frame 0
      renderFrame(0);
    }

    // Window resize handler: redraw active frame at new canvas dimensions
    const handleResize = () => {
      renderFrame(activeFrameRef.current);
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    // Setup ScrollTrigger scrubbing only if reduced motion is not preferred
    let trigger: ScrollTrigger | null = null;

    if (!prefersReducedMotion) {
      const isMobile = window.innerWidth <= 768;
      const scrollDistance = isMobile ? 1200 : 2000;

      trigger = ScrollTrigger.create({
        trigger: wrapper,
        start: "top top",
        end: `+=${scrollDistance}`,
        pin: pinned,
        pinSpacing: true,
        scrub: 0.5, // Responsive, smooth scrub
        onUpdate: (self) => {
          const progress = self.progress; // 0.0 to 1.0
          setScrollProgress(Math.round(progress * 100));

          // Map scroll to 4 walkthrough stages (Entrance -> Decor -> Mandap -> Celebration)
          const stageCount = hero.walkthroughStages.length;
          const currentStage = Math.min(Math.floor(progress * stageCount), stageCount - 1);
          setActiveStageIndex(currentStage);

          // CASE 1: Video scrub mode (if videoSrc configured)
          if (video && video.duration) {
            video.currentTime = progress * video.duration;
          }

          // CASE 2: Frame sequence mode (if frame images configured)
          if (canvas && totalFrames > 0) {
            const frameIndex = Math.min(
              Math.floor(progress * totalFrames),
              totalFrames - 1
            );
            activeFrameRef.current = frameIndex;
            renderFrame(frameIndex);
          }
        },
      });
    }

    return () => {
      if (trigger) trigger.kill();
      window.removeEventListener("resize", handleResize);
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
            /* Option B: Canvas element for frame sequence (images f1.png to f6.png) */
            <canvas ref={canvasRef} className="hero-canvas-element" />
          ) : (
            /* Option C: Clean empty cinematic dark stage */
            <div className="hero-empty-stage">
              <div
                className="hero-ambient-light"
                style={{
                  transform: `scale(${1 + scrollProgress * 0.005})`,
                  opacity: 0.35 + (scrollProgress / 100) * 0.45,
                }}
              />

              {hero.showPlaceholderBadge && (
                <div className="hero-stage-badge">
                  <Film size={13} className="stage-badge-icon" />
                  <span>CINEMATIC WALKTHROUGH LAYER (Configure videoSrc in siteConfig.ts)</span>
                </div>
              )}

              <div className="hero-corner top-left" aria-hidden="true" />
              <div className="hero-corner top-right" aria-hidden="true" />
              <div className="hero-corner bottom-left" aria-hidden="true" />
              <div className="hero-corner bottom-right" aria-hidden="true" />
            </div>
          )}
        </div>

        {/* =======================================================================
            LAYER 2 (MIDDLE): DARK READABILITY OVERLAY & VIGNETTE
            Calibrated so background images remain vivid & clear while text is crisp.
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
