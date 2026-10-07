'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, type CSSProperties } from 'react'
import { brands } from '@/content/brands'

const categories = ['ALL', 'KIDS', 'BEAUTY', 'WELLNESS', 'HEALTH'] as const
type BrandCategory = (typeof categories)[number]

const brandLogos = [
  { slug: "benekid", category: "KIDS", backgroundColor: "#ffffff" },
  { slug: "dailyplan", category: "KIDS", backgroundColor: "#ffffff" },
  { slug: "dewora", category: "BEAUTY", backgroundColor: "#ffffff" },
  { slug: "dodit", category: "WELLNESS", backgroundColor: "#ffffff" },
  { slug: "drbite", category: "HEALTH", backgroundColor: "#ffffff" },
  { slug: "elikorea", category: "WELLNESS", backgroundColor: "#ffffff" },
  { slug: "kidzdam", category: "KIDS", backgroundColor: "#ffffff" },
  { slug: "kidzplan", category: "KIDS", backgroundColor: "#ffffff" },
  { slug: "livature", category: "WELLNESS", backgroundColor: "#ffffff" },
  { slug: "livderm", category: "WELLNESS", backgroundColor: "#ffffff" },
  { slug: "moyoku", category: "WELLNESS", backgroundColor: "#ffffff" },
  { slug: "oroshe", category: "HEALTH", backgroundColor: "#ffffff" },
  { slug: "planlight", category: "WELLNESS", backgroundColor: "#ffffff" },
];

export default function BrandsPage() {
  const [activeCategory, setActiveCategory] = useState<BrandCategory>('ALL')
  const visibleBrands = activeCategory === 'ALL'
    ? brandLogos
    : brandLogos.filter((brand) => brand.category === activeCategory)

  return (
    <main className='flex flex-col w-full mt-[65px] mb-[120px]'>
      {/* <BrandHeroSlider /> */}
      <div className='mx-auto w-full max-w-[1400px]'>
        <h1 className='mt-[56px] text-center text-[40px] font-extrabold text-[#222] sm:mt-[80px] sm:text-[60px]'>Brands</h1>
        <p className='font-light text-center text-[#222] sm:text-[16px]'>다양한 일상의 고민에서 시작된 투모로브의 브랜드를 소개합니다.</p>
        <div
          role="tablist"
          aria-label="브랜드 카테고리"
          className="mt-10 flex w-full items-center gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mt-12 sm:justify-center sm:gap-[10px] [&::-webkit-scrollbar]:hidden"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category

            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 rounded-full border px-[10px] py-[10px] text-[14px] font-semibold transition-colors duration-300 sm:px-[20px] sm:text-[15px] ${
                  isActive
                    ? 'border-[#222] bg-[#222] text-white'
                    : 'border-[#ddd] bg-white text-[#777] hover:border-[#222] hover:text-[#222]'
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>
      </div>
      <ul className="mx-auto mt-[40px] grid w-full max-w-[1440px] grid-cols-2 gap-3 px-4 sm:mt-[30px] sm:grid-cols-3 sm:gap-[50px] sm:px-5">
        {visibleBrands.map(({ slug, backgroundColor }) => {
          const brand = brands.find((item) => item.slug === slug);
          if (!brand) return null;

          return (
            <li key={slug} className="group">
              <Link
                href={`/brands/${slug}`}
                aria-label={`${brand.name} 브랜드 보기`}
                style={{ "--brand-card-background": backgroundColor } as CSSProperties}
                className="relative flex h-[180px] flex-col items-center justify-center gap-5 overflow-hidden rounded-[6px] border border-[#efefef] bg-[var(--brand-card-background)] px-4 text-center transition-colors hover:bg-[#222] focus-visible:bg-[#222] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222] sm:h-[250px] sm:px-8"
              >
                <Image
                  src={brand.heroImage}
                  alt=""
                  fill
                  sizes="(min-width: 640px) 33vw, 50vw"
                  className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-20 group-focus-within:opacity-20"
                />
                <figure className="relative z-10 h-[30px] w-[90px] sm:h-[50px] sm:w-[150px]">
                  <Image
                    src={`/images/brands/black_${slug}.png`}
                    alt={`${brand.name} 로고`}
                    fill
                    className="object-contain transition-opacity group-hover:opacity-0 group-focus-visible:opacity-0"
                  />
                  <Image
                    src={`/images/brands/white_${slug}.png`}
                    alt=""
                    fill
                    className="object-contain opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                  />
                </figure>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
