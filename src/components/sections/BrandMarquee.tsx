import FadeIn from "@/components/motion/FadeIn";

const BRAND_PLACEHOLDER_COUNT = 7;
const brandPlaceholders = Array.from({ length: BRAND_PLACEHOLDER_COUNT });

export default function BrandMarquee() {
  return (
    <section className="flex min-h-screen w-full items-center overflow-hidden bg-white py-24">
      <div className="shrink-0 pl-[max(1.5rem,calc((100vw-1440px)/2))]">
        <FadeIn>
          <p className="whitespace-nowrap text-[36px] font-bold leading-[1.3] sm:text-[44px] lg:text-[52px]">
            고민이 다르면,
            <br />
            브랜드도 달라야 하니까
          </p>
        </FadeIn>
      </div>

      <div className="ml-12 min-w-0 flex-1 overflow-hidden lg:ml-20">
        <div className="flex w-max animate-brand-marquee gap-6">
          {[...brandPlaceholders, ...brandPlaceholders].map((_, i) => (
            <div
              key={i}
              className="h-[420px] w-[340px] shrink-0 overflow-hidden rounded-2xl"
            >
              <figure className="h-full w-full">
                <img
                  src={`/images/home/prod-${(i % BRAND_PLACEHOLDER_COUNT) + 1}.jpg`}
                  alt="img"
                  className="h-full w-full object-cover"
                />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
