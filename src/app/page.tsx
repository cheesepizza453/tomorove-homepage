import BrandMarquee from "@/components/sections/BrandMarquee";
import ScrollGrowCircle from "@/components/motion/ScrollGrowCircle";
import FadeIn from "@/components/motion/FadeIn";
import ScrollBlurReveal from "@/components/motion/ScrollBlurReveal";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex min-w-0 flex-1 flex-col">
      <main className="relative flex flex-1 flex-col bg-[url('/images/home/main_mo.jpg')] sm:bg-[url('/images/home/main2.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/30" />
        <div className={'relative z-10 w-full min-h-screen flex justify-center items-center'}>
          <div className={'md:hidden text-[42px] leading-[1.2] font-semibold text-center text-white'}>
            <FadeIn>
              <p>오늘의 선택이</p>
            </FadeIn>
            <FadeIn delay={300}>
              <p>더 나은 내일이 되도록</p>
            </FadeIn>
            <FadeIn delay={600}>
              <p>TOMOROVE</p>
            </FadeIn>
          </div>
          <div className={'hidden md:block text-[30px] md:text-[42px] xl:text-[70px] leading-[1.2] font-semibold text-center text-white'}>
            <FadeIn>
              <p>오늘의 선택이 더 나은 내일이 되도록</p>
            </FadeIn>
            <FadeIn delay={300}>
              <p>TOMOROVE</p>
            </FadeIn>
          </div>
        </div>
        <div>
        </div>
      </main>
      <div className="w-full min-w-0 overflow-hidden">
        <BrandMarquee />
      </div>
      <ScrollGrowCircle
        circleClassName={'bg-orange-500'}
        heading={
          <>
          <FadeIn>
            <p className={'md:hidden text-[36px] md:text-[72px] leading-[1.2] font-semibold text-center'}>TOMOROVE는</p>
          </FadeIn>
          <FadeIn delay={300}>
            <p className={'md:hidden text-[36px] md:text-[72px] leading-[1.2] font-semibold text-center'}>사람들의 일상을 바꾸는</p>
          </FadeIn>
          <FadeIn delay={600}>
            <p className={'md:hidden text-[36px] md:text-[72px] leading-[1.2] font-semibold text-center'}>브랜드 컴퍼니입니다.</p>
          </FadeIn>
          <FadeIn>
            <p className={'hidden md:block text-[36px] md:text-[72px] leading-[1.2] font-semibold text-center'}>TOMOROVE는 <br/>사람들의 일상을 바꾸는<br/>
브랜드 컴퍼니입니다.</p>
          </FadeIn>
          </>
        }
      >
        <div className={'w-full flex justify-center flex-col items-center text-white px-[30px] md:px-[50px]'}>
          <div className={'mt-[100px] max-w-[1440px] w-full'}>
            <p className={'text-[26px] leading-[1.2] font-bold text-left'}>TOMOROVE는 <br className={'md:hidden'}/>끊임 없는 고민과 열정으로 <br/>빠른 성장을 이뤄내고 있습니다.</p>
          </div>
          <div className={'mt-[50px] flex flex-col gap-[50px] flex-wrap max-w-[1440px] w-full'}>
            <p><span className={'block text-[18px] leading-1'}>23년</span><strong className={'font-bold text-[60px] md:text-[80px]'}>14.4억원</strong></p>
            <p><span className={'block text-[18px] leading-1'}>24년</span><strong className={'font-bold text-[60px] md:text-[80px]'}>209억원</strong></p>
            <p><span className={'block text-[18px] leading-1'}>25년</span><strong className={'font-bold text-[60px] md:text-[80px]'}>256억원</strong></p>
          </div>
        </div>
      </ScrollGrowCircle>
      <ScrollBlurReveal imageSrc="/images/home/bg-3.png">
        <FadeIn>
          <p className={'text-[42px] md:text-[72px] leading-[1.2] font-semibold text-center text-white'}>매일의 건강을<br/>
            브랜드로 설계합니다.</p>
            <div className="flex justify-center mt-[30px] sm:mt-[50px]">
            <Link
              className="inline-block rounded-[40px] border border-white px-[30px] py-[15px] text-center text-[16px] sm:text-[20px] font-semibold text-white transition-colors duration-300 ease-out hover:bg-white hover:text-black focus-visible:bg-white focus-visible:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              href="/brands"
            >
              브랜드 바로가기
            </Link>
            </div>
        </FadeIn>
      </ScrollBlurReveal>
    </div>
  );
}
