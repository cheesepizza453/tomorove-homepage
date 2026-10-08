import Image from "next/image";
import Link from "next/link";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/brands", label: "Brands" },
];

export default function Footer() {
  return (
    <footer className="bg-[#ebebeb] text-[#222]">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:pt-[50px] lg:pb-[30px]">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <Link
            href="/"
            aria-label="TOMOROVE 홈"
            className="inline-flex w-fit"
          >
            <Image
              src="/images/home/logo.png"
              alt="TOMOROVE"
              width={2080}
              height={222}
              className="h-auto w-[155px] sm:w-[175px]"
            />
          </Link>

          <nav aria-label="푸터 메뉴" className="flex flex-wrap gap-x-7 gap-y-3 sm:gap-x-10">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[18px] font-bold transition-opacity duration-200 hover:opacity-50 sm:text-[16px]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-12 text-[13px] leading-[1.85] sm:mt-14 sm:text-[13px]">
          <p>상호명 : 주식회사 투모로브 | 대표 : 성준</p>
          <p>
            사업자번호 : 868-81-03566 <span className="hidden sm:inline">|</span>
            <br className="sm:hidden" /> 통신판매업신고번호 : 제2025-서울구로-2057호
          </p>
          <p>주소 : 서울특별시 구로구 디지털로 243, 지하이시티 2층 210호(구로동)</p>
          <p>
            개인정보책임관리자 : 성준 | 이메일 : possible@tomorove.com <span className="hidden sm:inline">|</span>
            <br className="sm:hidden" /> 연락처 : 02-2088-4944
          </p>

          <Link
            href="/privacy"
            className="mt-1 inline-block underline underline-offset-4 transition-opacity duration-200 hover:opacity-50"
          >
            개인정보처리방침
          </Link>
        </div>

        <div className="mt-10 border-t border-[#aaa] pt-8 sm:mt-9 sm:pt-9">
          <p className="text-left text-[13px] sm:text-right sm:text-[13px]">
            &copy; {new Date().getFullYear()} TOMOROVE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
