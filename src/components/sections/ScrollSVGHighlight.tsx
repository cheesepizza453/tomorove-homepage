'use client';

import { useEffect, useRef, useState } from 'react';

const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * 359.5; // ≈ 2260.9

export default function ScrollSVGHighlight() {
  const ref = useRef<HTMLSpanElement>(null);
  const [progress, setProgress] = useState(0);
  const [lineLength, setLineLength] = useState(480);

  useEffect(() => {
    const updateLineLength = () => {
      setLineLength(window.innerWidth < 768 ? 900 : 680);
    };
    updateLineLength();
    window.addEventListener('resize', updateLineLength);
    return () => window.removeEventListener('resize', updateLineLength);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const section = ref.current?.parentElement;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      // p=0: 섹션 진입, p=1: 섹션 완전히 퇴장
      // 분모 = 섹션 실제 높이 + vh (섹션이 뷰포트를 통과하는 총 스크롤량)
      const p = Math.min(1, Math.max(0, (vh - rect.top) / (section.offsetHeight + vh)));
      setProgress(p);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // 전체 스크롤의 60% 동안 원, 나머지 40% 동안 선
  const circleP = Math.min(1, progress / 0.45);
  const lineP = Math.min(1, Math.max(0, (progress - 0.55) / 0.4));

  return (
    <span
      ref={ref}
      className="pointer-events-none absolute mt-[-100px] md:mt-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <svg
        className="mt-[450px] w-[360px] h-[720px] md:w-[720px] md:h-[1200px]"
        viewBox="0 0 720 1200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* 원 - base */}
        <circle
          cx="360"
          cy="360"
          r="359.5"
          stroke="white"
          strokeOpacity="0.5"
          strokeWidth="1"
        />
        {/* 원 - highlight */}
        <circle
          cx="360"
          cy="360"
          r="359.5"
          stroke="white"
          strokeWidth="3"
          strokeDasharray={CIRCLE_CIRCUMFERENCE}
          strokeDashoffset={CIRCLE_CIRCUMFERENCE * (1 - circleP)}
          strokeLinecap="round"
          transform="rotate(-90 360 360)"
        />
        {/* 세로선 - base */}
        <line
          x1="360"
          y1="720"
          x2="360"
          y2={lineLength + 720}
          stroke="white"
          strokeOpacity="0.5"
          strokeWidth="1"
        />
        {/* 세로선 - highlight */}
        <line
          x1="360"
          y1="720"
          x2="360"
          y2={720 + lineLength * lineP}
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
