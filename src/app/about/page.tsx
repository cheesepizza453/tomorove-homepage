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
        className={'relative w-full min-h-screen flex justify-between justify-center items-center flex-col md:flex-row px-[30px] md:px-[240px]'}>
        <div className={'w-full md:w-half flex-1 mt-[60px] md:mt-0'}>
          <FadeIn><h5 className={'font-bold text-[40px] md:text-[60px]'}>Brand-first</h5></FadeIn>
          <FadeIn delay={100}><p className={'font-bold text-[16px] md:text-[25px] leading-0'}>브랜드 우선</p></FadeIn>
          <FadeIn delay={200}><p className={'font-bold text-[26px] md:text-[40px] mt-[40px] leading-[1.2]'}>단기 성과보다<br/>오래
            남는 브랜드를 우선합니다.</p>
          </FadeIn>
        </div>
        <div className={'relative md:w-half flex-1 flex md:justify-end md:items-center'}>
          <div>
            <FadeIn>
              <svg
                viewBox="0 0 300 500"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[123px] md:w-[247px] h-[224px] md:h-[448px] absolute top-[0] right-[0px] md:right-[220px]"
              >
                <path
                  d="M 0 500 L 0 150 A 150 150 0 0 1 300 150 L 300 500 Z"
                  fill="#F1661E"
                />
              </svg>
            </FadeIn>
            <FadeIn delay={100}>
              <svg
                viewBox="0 0 300 300"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[130px] md:w-[260px] h-[130px] md:h-[260px] absolute top-[-120px] md:top-[-180px] right-[-90px] md:right-0"
              >
                <circle cx="150" cy="150" r="150" fill="#3F4348"/>
              </svg>
            </FadeIn>
            <FadeIn delay={200}>
              <svg
                viewBox="0 0 300 150"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[157px] md:w-[315px] h-[95px] md:h-[190px] absolute top-[120px] md:top-[240px] right-[-110px] md:right-[20px]"
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
        className={'relative w-full min-h-screen flex justify-between justify-center md:items-center flex-col-reverse md:flex-row px-[30px] md:px-[240px]'}>
        <div className={'relative md:w-half md:min-h-screen flex-1'}>
          <div>
            <FadeIn className={'relative min-h-screen'}>
              <svg
                viewBox="0 0 220 300"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[55px] md:left-[10px] md:left-0 bottom-[100px] md:bottom-0 w-[75px] md:w-[150px] h-[85px] md:h-[170px]"
              >
                <rect x="0" y="0" width="220" height="300" fill="#3F4248"/>
              </svg>
            </FadeIn>
            <FadeIn delay={100}>
              <svg
                viewBox="0 0 220 550"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[135px] md:left-[-35px] md:left-[190px] bottom-[100px] md:bottom-0 w-[75px] md:w-[150px] h-[160px] md:h-[320px]"
              >
                <rect x="0" y="0" width="220" height="550" fill="#3F4248"/>
              </svg>
            </FadeIn>
            <FadeIn delay={200}>
              <svg
                viewBox="0 0 220 800"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[220px] md:left-[50px] md:left-[380px] bottom-[100px] md:bottom-0 w-[75px] md:w-[150px] h-[245px] md:h-[490px]"
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
        className={'relative w-full min-h-screen flex justify-between justify-center md:items-center flex-col md:flex-row px-[30px] md:px-[240px]'}>
        <div className={'md:w-half flex-1 mt-[60px] md:mt-0'}>
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
        <div className={'relative w-half flex-1 flex justify-end items-center md:mt-[-300px]'}>
          <div>
            <FadeIn className={'relative sm:min-h-screen'}>
              <svg
                viewBox="0 0 480 480"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-[-50px] md:bottom-[0] left-[-260px] md:left-[-110px] md:left-[-550px] w-[150px] md:w-[300px] h-[150px]md:h-[300px]"
              >
                <polygon points="240,0 480,240 240,480 0,240" fill="#F1661E"/>
              </svg>
            </FadeIn>
            <FadeIn delay={100}>
              <svg
                viewBox="0 0 406 406"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-[-50px] md:bottom-[0] left-[-150px] md:left-[-300px] w-[150px] md:w-[300px] h-[150px] md:h-[300px]"
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
              <Link className="text-black text-[20px] font-semibold text-center inline-block border border-black px-[30px] py-[15px] rounded-[40px]" href="/brands">브랜드 바로가기</Link>
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
        </div>
      </div>


    </div>
  );
}
