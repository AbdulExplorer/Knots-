import React, { useEffect, useState, useRef } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import "./CustomCursor.css";

interface CursorState {
  label: string;
  variant: "default" | "hover" | "interactive" | "explore" | "drag" | "hidden";
}

export const CustomCursor: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const [cursorState, setCursorState] = useState<CursorState>({
    label: "",
    variant: "default",
  });

  const mousePos = useRef({ x: -100, y: -100 });
  const followerPos = useRef({ x: -100, y: -100 });
  const dotRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on fine pointer devices (desktop with mouse) and when not reduced motion
    if (reducedMotion) return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    let animFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (!isVisible) setIsVisible(true);

      // Check for contextual targets
      const target = e.target as HTMLElement | null;
      if (target) {
        const cursorAttr = target.closest("[data-cursor]");
        if (cursorAttr) {
          const type = cursorAttr.getAttribute("data-cursor") || "interactive";
          const label = cursorAttr.getAttribute("data-cursor-label") || "";
          setCursorState({
            variant: type as CursorState["variant"],
            label: label,
          });
          return;
        }

        const isInteractive = target.closest("button, a, input, textarea, select, [role='button']");
        if (isInteractive) {
          setCursorState({ variant: "interactive", label: "" });
          return;
        }
      }

      setCursorState({ variant: "default", label: "" });
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    // Smooth lerp loop for the follower
    const renderLoop = () => {
      // Lerp follower towards mouse
      const ease = 0.16;
      followerPos.current.x += (mousePos.current.x - followerPos.current.x) * ease;
      followerPos.current.y += (mousePos.current.y - followerPos.current.y) * ease;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${followerPos.current.x}px, ${followerPos.current.y}px, 0)`;
      }

      animFrameId = requestAnimationFrame(renderLoop);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    animFrameId = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(animFrameId);
    };
  }, [reducedMotion, isVisible]);

  if (reducedMotion) return null;

  return (
    <div
      className={`custom-cursor-container ${isVisible ? "visible" : "hidden"} variant-${cursorState.variant}`}
      aria-hidden="true"
    >
      <div ref={dotRef} className="cursor-dot" />
      <div ref={followerRef} className="cursor-follower">
        {cursorState.label && <span className="cursor-text">{cursorState.label}</span>}
      </div>
    </div>
  );
};
