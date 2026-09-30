"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const SLIDE_INTERVAL = 4000;

interface Slide {
  slug: string;
  image: string;
  heading: string[];
  button: string;
}

const SLIDES: Slide[] = [
  {
    slug: "oroshe",
    image: "/images/brands/brand_main_oroshe.jpg",
    heading: ["새로운 시작을 위한 루틴,", "함께를 위한 한 알"],
    button: "바로가기",
  },
  {
    slug: "dewora",
    image: "/images/brands/brand_main_dewora.jpg",
    heading: ["사막에서 찾은", "수분 저장의 힘"],
    button: "바로가기",
  },
];

export default function BrandHeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (SLIDES.length <= 1 || isPaused) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section
      className="relative h-[420px] w-full overflow-hidden sm:h-[570px]"
      aria-label="주요 브랜드"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      {SLIDES.map((slide, i) => (
        <div
          key={slide.slug}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== current}
        >
          <Image
            src={slide.image}
            alt={slide.heading.join(" ")}
            fill
            className="object-cover object-[77%_center] sm:object-center"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-black/30" />

          <div className="absolute inset-0 mx-auto flex w-full max-w-[1440px] flex-col items-start justify-center gap-6 px-6 text-white sm:px-10 lg:px-12">
            <p className="text-[28px] font-bold leading-[1.4] sm:text-[36px]">
              {slide.heading.map((line, idx) => (
                <span key={idx}>
                  {line}
                  {idx < slide.heading.length - 1 && <br />}
                </span>
              ))}
            </p>
            <Link
              href={`/brands/${slide.slug}`}
              className="rounded-full border border-white px-6 py-2 text-sm transition-colors hover:bg-white hover:text-black"
            >
              {slide.button}
            </Link>
          </div>
        </div>
      ))}

      {SLIDES.length > 1 && (
        <div className="absolute bottom-3 right-3 flex sm:bottom-4 sm:right-4">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`${i + 1}번 슬라이드`}
              aria-current={i === current ? "true" : undefined}
              onClick={() => setCurrent(i)}
              className="flex h-10 w-10 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === current ? "bg-white" : "bg-white/40"
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
