import Image from 'next/image'
import Link from 'next/link'
import BrandHeroSlider from '@/components/sections/BrandHeroSlider'

const brandLogos = [
  "benekid",
  "dailyplan",
  "dewora",
  "dodit",
  // "drbite",
  // "elikorea",
  "kidzdam",
  "kidzplan",
  //"livature",
  "livderm",
  "moyoku",
  "oroshe",
  "planlight",
];

export default function BrandsPage() {
  return (
    <main className='flex flex-col w-full mt-[65px] mb-[120px]'>
      <BrandHeroSlider />
      <div className='sm:max-w-[1400px] sm:w-full sm:mx-auto'>
      <h2 className='text-[40px] sm:text-[60px] text-center sm:mt-[80px] font-extrabold text-[#222]'>Brands</h2>
      </div>
      <ul className="mt-[40px] sm:mt-[40px] sm:max-w-[1440px] w-full mx-auto grid sm:grid-cols-3 sm:gap-[50px] ">
        {brandLogos.map((slug) => (
          <li key={slug} className="group ">
            <Link className="flex items-center justify-center h-[250px] sm:px-[120px] border border-[#ddd] rounded-[6px] transition-colors hover:bg-[#222]" href={`/brands/${slug}`}>
              <figure className="relative h-[50px] w-[150px]">
                <Image
                  src={`/images/brands/black_${slug}.png`}
                  alt={slug}
                  fill
                  className="object-contain transition-opacity group-hover:opacity-0"
                />
                <Image
                  src={`/images/brands/white_${slug}.png`}
                  alt={slug}
                  fill
                  className="object-contain opacity-0 transition-opacity group-hover:opacity-100"
                />
              </figure>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
