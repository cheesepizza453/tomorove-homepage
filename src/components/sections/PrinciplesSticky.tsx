"use client";

import { useEffect, useRef, useState } from "react";
import FadeIn from "@/components/motion/FadeIn";

interface Principle {
  title: string;
  description: string;
}

const PRINCIPLES: Principle[] = [
  { title: "Brand-first", description: "단기 성과보다 오래 남는 브랜드를 우선합니다." },
  { title: "Data-driven", description: "감이 아닌 숫자로 말하고, 데이터로 결정합니다." },
  { title: "Fast & Careful", description: "빠르게 움직이되, 세심하게 챙깁니다." },
];

export default function PrinciplesSticky_() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const items = itemRefs.current.filter((el): el is HTMLDivElement => el !== null);
    if (items.length === 0) return;

    // 화면 중앙(상하 45% 지점)을 지나가는 항목을 활성 항목으로 취급한다.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = items.indexOf(entry.target as HTMLDivElement);
          if (index !== -1) setActiveIndex(index);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="mx-auto w-full max-w-[1440px] px-6 md:px-[50px]">
      <div className="flex flex-row gap-6 md:gap-24">
        <div className="sticky top-0 flex h-screen basis-2/5 flex-col justify-center">
          <span
            key={activeIndex}
            className="principle-counter text-sm font-medium tracking-[0.3em] text-gray-400"
          >
            {String(activeIndex + 1).padStart(2, "0")} / {String(PRINCIPLES.length).padStart(2, "0")}
          </span>
          <h2 className="mt-4 text-[28px] leading-[1.15] font-semibold md:text-[64px]">
            Our
            <br />
            principles
          </h2>
        </div>

        <div className="flex basis-3/5 flex-col">
          {PRINCIPLES.map((principle, i) => (
            <div
              key={principle.title}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className="flex min-h-[60vh] items-center border-t border-gray-200 first:border-t-0 md:min-h-screen"
            >
              <FadeIn>
                <div>
                  <span className="text-sm font-medium tracking-[0.3em] text-gray-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-2xl font-semibold md:text-4xl">{principle.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
                    {principle.description}
                  </p>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
