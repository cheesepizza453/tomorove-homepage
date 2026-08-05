import BrandMarquee from "@/components/sections/BrandMarquee";
import ScrollGrowCircle from "@/components/motion/ScrollGrowCircle";
import FadeIn from "@/components/motion/FadeIn";

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col">
      <main className="relative flex flex-1 flex-col bg-[url('/images/home/main2.png')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/30" />
        <div className={'relative z-10 w-full min-h-screen flex justify-center items-center'}>
          <FadeIn>
            <p className={'text-[72px] leading-[1.2] font-semibold text-center text-white'}>오늘의 선택이 더 나은 내일이 되도록,<br/>
              TOMOROVE</p>
          </FadeIn>
        </div>
        <div>
        </div>
      </main>
      <div className={'overflow-hidden w-[100vw]'}>
        <BrandMarquee />
      </div>
      <ScrollGrowCircle
        circleClassName={'bg-orange-500'}
        heading={
          <FadeIn>
            <p className={'text-[72px] leading-[1.2] font-semibold text-center'}>TOMOROVE는 사람들의 일상을 바꾸는<br/>
브랜드 컴퍼니입니다.</p>
          </FadeIn>
        }
      >
        <div className={'w-full flex justify-center flex-col items-center text-white'}>
          <div className={'mt-[100px] max-w-[1440px] w-full'}>
            <p className={'text-3xl font-bold text-left'}>TOMOROVE는 끊임 없는 고민과 열정으로 <br/>빠른 성장을 이뤄내고 있습니다.</p>
          </div>
          <div className={'mt-[30px] flex flex-col gap-[50px] flex-wrap max-w-[1440px] w-full'}>
            <p><span className={'block text-2xl'}>23년</span><strong className={'font-bold text-7xl'}>14.4억원</strong></p>
            <p><span className={'block text-2xl'}>24년</span><strong className={'font-bold text-7xl'}>209억원</strong></p>
            <p><span className={'block text-2xl'}>25년</span><strong className={'font-bold text-7xl'}>256억원</strong></p>
          </div>
        </div>
      </ScrollGrowCircle>
      <section className="relative flex flex-1 flex-col overflow-hidden">
        <div className="absolute inset-0 scale-110" />
        <div className={'relative z-10 w-full min-h-screen flex justify-center items-center'}>
          <FadeIn>
            <p className={'text-[72px] leading-[1.2] font-semibold text-center'}>매일의 건강을<br/>
              브랜드로 설계합니다.</p>
          </FadeIn>
        </div>
        <div>
        </div>
      </section>
    </div>
  );
}
