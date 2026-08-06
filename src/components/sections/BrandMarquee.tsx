import FadeIn from "@/components/motion/FadeIn";

const BRANDS = [
  { name: "DoDit", url: "https://dodit.kr", description: "여성들의 다이어트 파트너" },
  { name: "BeneKid", url: "https://benekid.kr", description: "성장기 자녀를 위한 프리미엄 뉴트리션" },
  { name: "Oroshe", url: "https://oroshe.kr", description: "여성을 위한 균형을 디자인합니다." },
  { name: "DailyPlan", url: "https://dailyplan.kr", description: "성장기 아이들의 든든한 하루" },
  { name: "LIVDERM", url: "https://livderm.kr", description: "눈가 고민의 유일한 해답, 리브덤" },
  { name: "KiDZ:DAM", url: "https://kidzdam.kr", description: "아이에게 필요한 것들만 담았습니다." },
  { name: "MOYOKU", url: "https://moyoku.kr/", description: "일본 바디케어 루틴" },
  { name: "KIDZPLAN", url: "https://kidzplan.kr", description: "성장기 어린이들을 위한 영양계획" },
  { name: "Eli Korea", url: "https://elikorea.kr", description: "지중해식 식탁에서 시작된 식후 루틴" },
];

export default function BrandMarquee() {
  return (
    <section className="mt-[100px] md:mt-0 flex flex-col md:flex-row min-h-screen w-full items-start md:items-center overflow-hidden bg-white py-24">
      <div className="shrink-0 pl-[max(1.5rem,calc((100vw-1440px)/2))]">
        <FadeIn>
          <p className="whitespace-nowrap text-[36px] font-bold leading-[1.3] sm:text-[44px] lg:text-[52px]">
            고민이 다르면
            <br />
            브랜드도 달라야 하니까
          </p>
        </FadeIn>
      </div>

      <div className="mt-[50px] md:mt-0 ml-0 md:ml-12 min-w-0 flex-1 overflow-hidden lg:ml-20">
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

              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/45 px-6 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <img
                  src={`/images/home/prod-logo-${(i % BRANDS.length) + 1}.png`}
                  alt={brand.name}
                  className="h-10 w-auto object-contain"
                />
                <span className="text-sm text-white">{brand.description}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
