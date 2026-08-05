import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 | TOMOROVE",
};

export default function PrivacyPage() {
  return (
    <main className="pt-[65px]">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">(주)투모로브 개인정보 처리방침</h1>
        <p className="mt-4 text-sm leading-relaxed text-gray-500">
          (주)투모로브(이하 &quot;회사&quot;)는 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고
          관련 고충을 원활히 처리하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
        </p>

        <div className="mt-12 flex flex-col gap-10 text-sm leading-relaxed text-gray-700">
          <section>
            <h2 className="text-lg font-bold text-gray-900">1. 개인정보의 처리 목적 및 항목</h2>
            <div className="mt-3 flex flex-col gap-3">
              <p>회사는 본 웹사이트(tomorove.com) 운영을 위해 최소한의 정보만을 자동 수집합니다.</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>수집 항목: IP 주소, 접속 일시, User-Agent, 접속 페이지</li>
                <li>수집 목적: 서비스 안정성 유지, 부정 접근 방지, 장애 대응</li>
                <li>수집 방법: 웹 호스팅 서비스(Vercel)의 자동 서버 로그</li>
              </ul>
              <p>
                본 웹사이트는 회원가입, 문의 폼, 뉴스레터 구독 등 정보주체로부터 개인정보를 직접 수집하는
                기능을 제공하지 않습니다.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900">2. 개인정보의 보유 및 이용 기간</h2>
            <p className="mt-3">수집된 접속 로그는 수집일로부터 최대 90일간 보관 후 파기됩니다.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900">3. 개인정보의 제3자 제공</h2>
            <p className="mt-3">회사는 정보주체의 개인정보를 제3자에게 제공하지 않습니다.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900">4. 개인정보 처리업무의 위탁</h2>
            <p className="mt-3">회사는 웹사이트 운영을 위해 다음과 같이 처리업무를 위탁합니다.</p>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full min-w-[400px] border-collapse border border-gray-200 text-left">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-2 font-bold">수탁자</th>
                    <th className="border border-gray-200 px-4 py-2 font-bold">위탁 업무</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">Vercel Inc.</td>
                    <td className="border border-gray-200 px-4 py-2">웹사이트 호스팅 및 서버 로그 관리</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900">5. 개인정보의 국외 이전</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>이전받는 자: Vercel Inc.</li>
              <li>이전 국가: 미국</li>
              <li>이전 항목: IP 주소, 접속 로그</li>
              <li>이전 목적: 웹사이트 호스팅</li>
              <li>보유 기간: 위탁 계약 종료 시까지</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900">6. 정보주체의 권리·의무 및 행사 방법</h2>
            <p className="mt-3">
              정보주체는 언제든지 개인정보 열람·정정·삭제·처리정지를 요구할 수 있으며, 아래 개인정보
              보호책임자에게 이메일로 요청 시 지체 없이 조치합니다.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900">7. 개인정보 자동 수집 장치</h2>
            <div className="mt-3 flex flex-col gap-2">
              <p>본 웹사이트는 쿠키, Google Analytics, 광고 픽셀 등 자동 수집 장치를 사용하지 않습니다.</p>
              <p className="text-gray-500">(※ 향후 도입 시 본 방침을 사전 개정하여 안내합니다.)</p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900">8. 개인정보의 안전성 확보 조치</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>HTTPS(TLS) 통신 암호화</li>
              <li>접근 권한 관리</li>
              <li>로그 접근 통제</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900">9. 개인정보 보호책임자</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>성명: 김미리</li>
              <li>연락처: earlykim@tomorove.com</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900">10. 권익침해 구제 방법</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>개인정보분쟁조정위원회: 1833-6972 (www.kopico.go.kr)</li>
              <li>개인정보침해신고센터: 118 (privacy.kisa.or.kr)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900">11. 처리방침의 변경</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>공고일자: 2026-08-05</li>
              <li>시행일자: 2026-08-05</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
