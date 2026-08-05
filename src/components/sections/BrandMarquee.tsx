import FadeIn from "@/components/motion/FadeIn";

const BRANDS = [
  { name: "DoDit", url: "https://dodit.kr" },
  { name: "BeneKid", url: "https://benekid.kr" },
  { name: "Oroshe", url: "https://oroshe.kr" },
  { name: "DailyPlan", url: "https://dailyplan.kr" },
  { name: "LIVDERM", url: "https://livderm.kr" },
  { name: "KiDZ:DAM", url: "https://kidzdam.kr" },
  { name: "MOYOKU", url: "https://moyoku.kr/" },
];

export default function BrandMarquee() {
  return (
    <section className="flex min-h-screen w-full items-center overflow-hidden bg-white py-24">
      <div className="shrink-0 pl-[max(1.5rem,calc((100vw-1440px)/2))]">
        <FadeIn>
          <p className="whitespace-nowrap text-[36px] font-bold leading-[1.3] sm:text-[44px] lg:text-[52px]">
            고민이 다르면
            <br />
            브랜드도 달라야 하니까
          </p>
        </FadeIn>
      </div>

      <div className="ml-12 min-w-0 flex-1 overflow-hidden lg:ml-20">
        <div className="flex w-max animate-brand-marquee gap-6">
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <a
              key={i}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-[420px] w-[340px] shrink-0 overflow-hidden rounded-[16px]"
            >
              <figure className="h-full w-full">
                <img
                  src={`/images/home/prod-${(i % BRANDS.length) + 1}.jpg`}
                  alt={brand.name}
                  className="h-full w-full object-cover"
                />
              </figure>

              <div className="absolute inset-0 flex items-center justify-center bg-black/45 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-2xl font-regular text-white">{brand.name}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
