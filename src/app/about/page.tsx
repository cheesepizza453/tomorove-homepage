import FadeIn from "@/components/motion/FadeIn";
import ScrollSVGHighlight from "@/components/sections/ScrollSVGHighlight";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col">
      <main>
        <div className={'relative z-10 w-full min-h-screen flex justify-center items-center'}>
          <div className={'hidden md:block text-[36px] md:text-[72px] leading-[1.2] font-semibold text-center'}>
            <FadeIn>
              <p>좋은 제품이 좋은 브랜드가 됩니다. </p>
            </FadeIn>
            <FadeIn delay={300}>
              <p>TOMOROVE는 그렇게 시작합니다.</p>
            </FadeIn>
          </div>
          <div className={'md:hidden text-[28px] md:text-[72px] leading-[1.2] font-semibold text-center'}>
            <FadeIn>
              <p>좋은 제품이</p>
            </FadeIn>
            <FadeIn delay={200}>
              <p>좋은 브랜드가 됩니다.</p>
            </FadeIn>
            <FadeIn delay={400}>
              <p>투모로브는 그렇게 시작합니다.</p>
            </FadeIn>
          </div>
        </div>
      </main>
      <div className={'relative bg-black w-full min-h-screen flex justify-center items-center'}>
        <div className={'text-[36px] md:text-[72px] leading-[1.2] font-semibold text-center text-white'}>
          <FadeIn>
            <p>우리가 일하는 방식을</p>
          </FadeIn>
          <FadeIn delay={300}>
            <p>결정하는 세 가지 원칙</p>
          </FadeIn>
        </div>
        <ScrollSVGHighlight/>
      </div>

      <div
        className={'relative flex min-h-screen w-full flex-col items-center justify-center px-[30px] py-16 md:flex-row md:justify-between md:px-[240px] md:py-0'}>
        <div className={'mt-[60px] w-full flex-none md:mt-0 md:w-half md:flex-1'}>
          <FadeIn><h5 className={'font-bold text-[40px] md:text-[60px]'}>Brand-first</h5></FadeIn>
          <FadeIn delay={100}><p className={'font-bold text-[16px] md:text-[25px] leading-0'}>브랜드 우선</p></FadeIn>
          <FadeIn delay={200}><p className={'font-bold text-[26px] md:text-[40px] mt-[40px] leading-[1.2]'}>단기 성과보다<br/>오래
            남는 브랜드를 우선합니다.</p>
          </FadeIn>
        </div>
        <div className={'relative mt-12 h-[320px] w-full flex-none md:mt-0 md:flex md:h-auto md:w-half md:flex-1 md:items-center md:justify-end'}>
          <div>
            <FadeIn className="absolute inset-0 md:static">
              <svg
                viewBox="0 0 300 500"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-[20px] left-1/2 h-[224px] w-[123px] -translate-x-1/2 md:top-0 md:right-[220px] md:bottom-auto md:left-auto md:h-[448px] md:w-[247px] md:translate-x-0"
              >
                <path
                  d="M 0 500 L 0 150 A 150 150 0 0 1 300 150 L 300 500 Z"
                  fill="#F1661E"
                />
              </svg>
            </FadeIn>
            <FadeIn className="absolute inset-0 md:static" delay={100}>
              <svg
                viewBox="0 0 300 300"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-[10px] left-1/2 ml-[25px] h-[130px] w-[130px] md:top-[-180px] md:right-0 md:left-auto md:ml-0 md:h-[260px] md:w-[260px]"
              >
                <circle cx="150" cy="150" r="150" fill="#3F4348"/>
              </svg>
            </FadeIn>
            <FadeIn className="absolute inset-0 md:static" delay={200}>
              <svg
                viewBox="0 0 300 150"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-[10px] left-1/2 ml-[25px] h-[95px] w-[157px] md:top-[240px] md:right-[20px] md:bottom-auto md:left-auto md:ml-0 md:h-[190px] md:w-[315px]"
              >
                <path
                  d="M 0 0 H 300 A 150 150 0 0 1 0 0 Z"
                  fill="#DCDEDF"
                />
              </svg>
            </FadeIn>
          </div>
        </div>
      </div>

      <div
        className={'relative flex min-h-screen w-full flex-col-reverse justify-center px-[30px] py-16 md:flex-row md:items-center md:justify-between md:px-[240px] md:py-0'}>
        <div className={'relative mt-12 h-[320px] w-full flex-none md:mt-0 md:min-h-screen md:w-half md:flex-1'}>
          <div>
            <FadeIn className="absolute inset-0 md:relative md:min-h-screen">
              <svg
                viewBox="0 0 220 300"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-[20px] left-1/2 ml-[-120px] h-[85px] w-[75px] md:bottom-0 md:left-0 md:ml-0 md:h-[170px] md:w-[150px]"
              >
                <rect x="0" y="0" width="220" height="300" fill="#3F4248"/>
              </svg>
            </FadeIn>
            <FadeIn className="absolute inset-0 md:static" delay={100}>
              <svg
                viewBox="0 0 220 550"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-[20px] left-1/2 ml-[-37px] h-[160px] w-[75px] md:bottom-0 md:left-[190px] md:ml-0 md:h-[320px] md:w-[150px]"
              >
                <rect x="0" y="0" width="220" height="550" fill="#3F4248"/>
              </svg>
            </FadeIn>
            <FadeIn className="absolute inset-0 md:static" delay={200}>
              <svg
                viewBox="0 0 220 800"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-[20px] left-1/2 ml-[46px] h-[245px] w-[75px] md:bottom-0 md:left-[380px] md:ml-0 md:h-[490px] md:w-[150px]"
              >
                <rect x="0" y="0" width="220" height="800" fill="#F1661E"/>
              </svg>
            </FadeIn>
          </div>
        </div>
        <div className={'mt-[60px] md:mt-[180px] md:ml-[300px] md:w-half flex-1'}>
          <FadeIn><h5 className={'font-bold text-[40px] md:text-[60px]'}>Data-driven</h5></FadeIn>
          <FadeIn delay={100}><p className={'font-bold text-[16px] md:text-[25px] leading-0'}>데이터 기반</p></FadeIn>
          <FadeIn delay={200}><p className={'font-bold text-[26px] md:text-[40px] mt-[40px] leading-[1.2]'}>감이 아닌 숫자로
            말하고,<br/>데이터로 결정합니다.</p>
          </FadeIn>
        </div>
      </div>

      <div
        className={'relative flex min-h-screen w-full flex-col justify-center px-[30px] py-16 md:flex-row md:items-center md:justify-between md:px-[240px] md:py-0'}>
        <div className={'mt-[60px] w-full flex-none md:mt-0 md:w-half md:flex-1'}>
          <FadeIn><h5 className={'font-bold text-[40px] md:text-[60px]'}>Fast & Careful</h5></FadeIn>
          <FadeIn delay={100}><p className={'font-bold text-[16px] md:text-[25px] leading-0'}>신속함과 세심함</p></FadeIn>
          <FadeIn delay={200}><p
            className={'hidden md:block font-bold text-[26px] md:text-[40px] mt-[40px] leading-[1.2]'}>빠르게 움직이되, 세심하게
            챙깁니다.</p></FadeIn>
          <FadeIn delay={200}><p
            className={'md:hidden font-bold text-[26px] md:text-[40px] mt-[20px] leading-[1.2]'}>빠르게 움직이되,<br/>세심하게
            챙깁니다.</p>
          </FadeIn>
        </div>
        <div className={'relative mt-12 h-[260px] w-full flex-none md:mt-[-300px] md:h-auto md:w-half md:flex-1'}>
          <div>
            <FadeIn className="absolute inset-0 md:relative md:min-h-screen">
              <svg
                viewBox="0 0 480 480"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-[20px] left-1/2 ml-[-100px] h-[150px] w-[150px] md:bottom-0 md:left-[60px] md:ml-0 md:h-[300px] md:w-[300px]"
              >
                <polygon points="240,0 480,240 240,480 0,240" fill="#F1661E"/>
              </svg>
            </FadeIn>
            <FadeIn className="absolute inset-0 md:static" delay={100}>
              <svg
                viewBox="0 0 406 406"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-[20px] left-1/2 ml-[-10px] h-[150px] w-[150px] md:bottom-0 md:left-[300px] md:ml-0 md:h-[300px] md:w-[300px]"
              >
                <circle cx="203" cy="203" r="200" fill="#3F4248"/>
              </svg>
            </FadeIn>
          </div>
        </div>
      </div>

      <div className={'relative w-full min-h-screen flex justify-between'}>
        <div className={'absolute top-0 left-0 w-full h-full'}>
          <Image
            src="/images/home/bg-2.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className={'w-full flex justify-center flex-col items-center text-white px-[30px] md:px-[50px] z-2'}>
          <div className={'mt-[100px] max-w-[1440px] w-full'}>
            <p className={'text-[26px] leading-[1.2] font-bold text-left'}>TOMOROVE는 <br className={'md:hidden'}/>끊임 없는
              고민과 열정으로 <br/>빠른 성장을 이뤄내고 있습니다.</p>
          </div>
          <div className={'mt-[50px] flex flex-col gap-[50px] flex-wrap max-w-[1440px] w-full'}>
            <p><span className={'block text-[18px] leading-1'}>23년</span><strong
              className={'font-bold text-[60px] md:text-[80px]'}>14.4억원</strong></p>
            <p><span className={'block text-[18px] leading-1'}>24년</span><strong
              className={'font-bold text-[60px] md:text-[80px]'}>209억원</strong></p>
            <p><span className={'block text-[18px] leading-1'}>25년</span><strong
              className={'font-bold text-[60px] md:text-[80px]'}>256억원</strong></p>
          </div>
        </div>
      </div>

      <div className={'relative z-10 w-full min-h-screen flex justify-center items-center'}>
        <div className={'hidden md:block text-[36px] md:text-[72px] leading-[1.2] font-semibold text-center'}>
          <FadeIn>
            <p>TOMOROVE의 다양한 브랜드들이</p>
          </FadeIn>
          <FadeIn delay={300}>
            <p>궁금하신가요?</p>
          </FadeIn>
          <FadeIn>
            <div className="flex justify-center mt-[50px]">
              <Link
                className="inline-block rounded-[40px] border border-black px-[30px] py-[15px] text-center text-[20px] font-semibold text-black transition-colors duration-300 ease-out hover:bg-black hover:text-white focus-visible:bg-black focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
                href="/brands"
              >
                브랜드 바로가기
              </Link>
            </div>
          </FadeIn>
          
        </div>
        <div className={'md:hidden text-[38px] md:text-[72px] leading-[1.2] font-semibold text-center'}>
          <FadeIn>
            <p>TOMOROVE의</p>
          </FadeIn>
          <FadeIn delay={200}>
            <p>다양한 브랜드들이</p>
          </FadeIn>
          <FadeIn delay={400}>
            <p>궁금하신가요?</p>
          </FadeIn>
          <FadeIn>
            <div className="flex justify-center mt-[30px]">
              <Link
                className="inline-block rounded-[40px] border border-black px-[30px] py-[15px] text-center text-[16px] font-semibold text-black transition-colors duration-300 ease-out hover:bg-black hover:text-white focus-visible:bg-black focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
                href="/brands"
              >
                브랜드 바로가기
              </Link>
            </div>
          </FadeIn>
          
        </div>
      </div>


    </div>
  );
}
