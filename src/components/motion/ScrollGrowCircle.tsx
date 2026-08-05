"use client";

import { type ReactNode, useEffect, useRef } from "react";
import Image from "next/image";

interface ScrollGrowCircleProps {
  heading?: ReactNode;
  children: ReactNode;
  circleClassName?: string;
  trackHeight?: string;
  baseSize?: number;
}

// 스크롤 진행도에 따른 3단계 전환 지점.
// 0 ~ PHASE1_END: 정지된 원(주황색)
// PHASE1_END ~ PHASE2_END: 원 -> 가로 3:1 비율의 둥근 알약 모양으로 확장(계속 주황색)
// PHASE2_END ~ 1: 사진으로 페이드인 + 라운드 제거 + 화면 전체를 덮도록 확대
const PHASE1_END = 0.3;
const PHASE2_END = 0.6;

// heading이 사라지는 데 걸리는 진행도(0~REST_FADE_END). 다 사라진 뒤에는 원이
// heading과 자리를 나눠 갖지 않고 화면 정중앙에 오도록 오프셋을 0으로 만든다.
const REST_FADE_END = 0.25;
const REST_OFFSET = 110;

export default function ScrollGrowCircle({
  heading,
  children,
  circleClassName = "",
  trackHeight = "300vh",
  baseSize = 100,
}: ScrollGrowCircleProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const circle = circleRef.current;
    const image = imageRef.current;
    const content = contentRef.current;
    const headingEl = headingRef.current;
    if (!track || !circle || !image || !content) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const applyShape = (progress: number) => {
      const pillWidth = baseSize * 3;
      const coverWidth = window.innerWidth * 1.05;
      const coverHeight = window.innerHeight * 1.05;

      let width = baseSize;
      let height = baseSize;
      let radius = baseSize / 2;
      let imageOpacity = 0;

      if (progress <= PHASE1_END) {
        width = baseSize;
        height = baseSize;
        radius = baseSize / 2;
        imageOpacity = 0;
      } else if (progress <= PHASE2_END) {
        const t = (progress - PHASE1_END) / (PHASE2_END - PHASE1_END);
        width = baseSize + (pillWidth - baseSize) * t;
        height = baseSize;
        radius = height / 2;
        imageOpacity = 0;
      } else {
        const t = (progress - PHASE2_END) / (1 - PHASE2_END);
        width = pillWidth + (coverWidth - pillWidth) * t;
        height = baseSize + (coverHeight - baseSize) * t;
        radius = (baseSize / 2) * (1 - t);
        imageOpacity = t;
      }

      circle.style.width = `${width}px`;
      circle.style.height = `${height}px`;
      circle.style.borderRadius = `${radius}px`;
      image.style.opacity = String(imageOpacity);
    };

    // heading이 차지하던 자리를 원과 나눠 쓰지 않도록, heading이 사라지는 진행도에 맞춰
    // 원을 화면 정중앙(오프셋 0)으로 모은다. 그래야 다 커졌을 때 뷰포트 높이를 꽉 채운다.
    const applyOffsets = (headingProgress: number) => {
      const circleOffset = (1 - headingProgress) * REST_OFFSET;
      circle.style.transform = `translate(-50%, calc(-50% + ${circleOffset}px))`;

      if (headingEl) {
        headingEl.style.opacity = String(1 - headingProgress);
        headingEl.style.transform = `translate(-50%, calc(-50% - ${REST_OFFSET}px - ${headingProgress * 24}px))`;
      }
    };

    if (prefersReducedMotion) {
      applyShape(1);
      applyOffsets(1);
      content.style.opacity = "1";
      content.style.transform = "none";
      return;
    }

    let ticking = false;

    const update = () => {
      ticking = false;
      const rect = track.getBoundingClientRect();
      const scrollRange = rect.height - window.innerHeight;
      const progress =
        scrollRange > 0 ? Math.min(Math.max(-rect.top / scrollRange, 0), 1) : 0;

      applyShape(progress);

      const headingProgress = Math.min(Math.max(progress / REST_FADE_END, 0), 1);
      applyOffsets(headingProgress);

      const revealProgress = Math.min(
        Math.max((progress - PHASE2_END) / (1 - PHASE2_END), 0),
        1,
      );
      content.style.opacity = String(revealProgress);
      content.style.transform = `translateY(${(1 - revealProgress) * 24}px)`;
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
  }, [baseSize]);

  return (
    <div ref={trackRef} className="relative" style={{ height: trackHeight }}>
      <div className="sticky top-0 h-screen overflow-clip">
        {heading && (
          <div
            ref={headingRef}
            className="absolute top-1/2 left-1/2 w-max max-w-[90vw]"
            style={{ transform: `translate(-50%, calc(-50% - ${REST_OFFSET}px))` }}
          >
            {heading}
          </div>
        )}

        <div
          ref={circleRef}
          className={`absolute top-1/2 left-1/2 overflow-hidden ${circleClassName}`}
          style={{
            width: baseSize,
            height: baseSize,
            borderRadius: baseSize / 2,
            transform: `translate(-50%, calc(-50% + ${REST_OFFSET}px))`,
            willChange: "width, height, border-radius, transform",
          }}
        >
          <div ref={imageRef} className="absolute inset-0" style={{ opacity: 0 }}>
            <Image
              src="/images/home/office.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div
          ref={contentRef}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6"
          style={{ opacity: 0 }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
