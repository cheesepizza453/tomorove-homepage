import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center text-sm text-gray-500">
          <p>상호명 : 주식회사 투모로브 | 대표 : 성준 | 사업자번호 : 868-81-03566 | 통신판매업신고번호 : 제2025-서울구로-2057호<br/>
          주소 : 서울특별시 구로구 디지털로 243, 지하이시티 2층 210호(구로동) | 개인정보책임관리자 : 성준 (possible@tomorove.com)</p>

          <Link
            href="/privacy"
            className="text-gray-500 underline transition-colors hover:text-gray-700"
          >
            개인정보처리방침
          </Link>

          <p>&copy; {new Date().getFullYear()} TOMOROVE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

