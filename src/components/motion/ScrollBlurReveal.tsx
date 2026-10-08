"use client";

import { type ReactNode, useEffect, useRef } from "react";
import Image from "next/image";

interface ScrollBlurRevealProps {
  children: ReactNode;
  imageSrc: string;
  trackHeight?: string;
  maxBlur?: number;
  minBlur?: number;
  overlayFrom?: number;
  overlayTo?: number;
}

export default function ScrollBlurReveal({
  children,
  imageSrc,
  trackHeight = "200vh",
  maxBlur = 28,
  minBlur = 0,
  overlayFrom = 1,
  overlayTo = 0.4,
}: ScrollBlurRevealProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const image = imageRef.current;
    const overlay = overlayRef.current;
    if (!track || !image || !overlay) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const applyProgress = (progress: number) => {
      image.style.filter = `blur(${minBlur + (maxBlur - minBlur) * progress}px)`;
      overlay.style.opacity = String(overlayFrom + (overlayTo - overlayFrom) * progress);
    };

    if (prefersReducedMotion) {
      applyProgress(1);
      return;
    }

    let ticking = false;

    const update = () => {
      ticking = false;
      const rect = track.getBoundingClientRect();
      const scrollRange = rect.height - window.innerHeight;
      const progress =
        scrollRange > 0 ? Math.min(Math.max(-rect.top / scrollRange, 0), 1) : 0;
      applyProgress(progress);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [maxBlur, minBlur, overlayFrom, overlayTo]);

  return (
    <div ref={trackRef} className="relative" style={{ height: trackHeight }}>
      <div className="sticky top-0 h-screen h-[100dvh] w-full overflow-hidden bg-black">
        <div ref={imageRef} className="absolute inset-0" style={{ filter: `blur(${minBlur}px)` }}>
          <Image src={imageSrc} alt="" fill sizes="100vw" className="object-cover" />
        </div>

        <div
          ref={overlayRef}
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayFrom }}
        />

        <div className="relative z-10 flex h-full w-full items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}
