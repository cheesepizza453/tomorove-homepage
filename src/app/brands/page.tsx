import Image from 'next/image'
import Link from 'next/link'
import type { CSSProperties } from 'react'
import BrandHeroSlider from '@/components/sections/BrandHeroSlider'
import { brands } from '@/content/brands'

const brandLogos = [
  { slug: "benekid", backgroundColor: "#ffffff" },
  { slug: "dailyplan", backgroundColor: "#ffffff" },
  { slug: "dewora", backgroundColor: "#ffffff" },
  { slug: "dodit", backgroundColor: "#ffffff" },
  // { slug: "drbite", backgroundColor: "#ffffff" },
  // { slug: "elikorea", backgroundColor: "#ffffff" },
  { slug: "kidzdam", backgroundColor: "#ffffff" },
  { slug: "kidzplan", backgroundColor: "#ffffff" },
  // { slug: "livature", backgroundColor: "#ffffff" },
  { slug: "livderm", backgroundColor: "#ffffff" },
  { slug: "moyoku", backgroundColor: "#ffffff" },
  { slug: "oroshe", backgroundColor: "#ffffff" },
  { slug: "planlight", backgroundColor: "#ffffff" },
];

export default function BrandsPage() {
  return (
    <main className='flex flex-col w-full mt-[65px] mb-[120px]'>
      <BrandHeroSlider />
      <div className='mx-auto w-full max-w-[1400px]'>
        <h1 className='mt-[56px] text-center text-[40px] font-extrabold text-[#222] sm:mt-[80px] sm:text-[60px]'>Brands</h1>
      </div>
      <ul className="mx-auto mt-[32px] grid w-full max-w-[1440px] grid-cols-2 gap-3 px-4 sm:mt-[40px] sm:grid-cols-3 sm:gap-[50px] sm:px-5">
        {brandLogos.map(({ slug, backgroundColor }) => {
          const brand = brands.find((item) => item.slug === slug);
          if (!brand) return null;

          return (
            <li key={slug} className="group">
              <Link
                href={`/brands/${slug}`}
                aria-label={`${brand.name} 브랜드 보기`}
                style={{ "--brand-card-background": backgroundColor } as CSSProperties}
                className="flex h-[180px] flex-col items-center justify-center gap-5 rounded-[6px] border border-[#eee] bg-[var(--brand-card-background)] px-4 text-center transition-colors hover:bg-[#222] focus-visible:bg-[#222] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222] sm:h-[250px] sm:px-8"
              >
                <figure className="relative h-[30px] w-[90px] sm:h-[50px] sm:w-[150px]">
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
