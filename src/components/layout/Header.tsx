"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_ITEMS: { href: string; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/brands", label: "Brands" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full md:transition-[background-color,backdrop-filter] md:duration-500 md:ease-out ${
        isMenuOpen
          ? "bg-white"
          : isScrolled
            ? "bg-white/70 backdrop-blur-md"
            : "bg-transparent"
      }`}
    >
      <div className="relative mx-auto flex h-[65px] max-w-[1440px] items-center justify-between px-[20px] md:h-[55px]">
        <Link href="/" className="text-lg font-bold" onClick={() => setIsMenuOpen(false)}>
          <Image src="/images/home/logo.png" alt="TOMOROVE" width={120} height={32} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-gray-900 transition-colors hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="absolute right-5 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={isMenuOpen}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 3.75l16.5 16.5m0-16.5-16.5 16.5"
              />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <nav
          aria-label="모바일 메뉴"
          className="fixed inset-x-0 top-[65px] bottom-0 flex flex-col items-center justify-center gap-7 bg-white px-6 pb-[65px] md:hidden"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[24px] font-normal text-[#222] transition-opacity duration-200 hover:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
