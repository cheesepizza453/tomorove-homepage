import type { Metadata } from "next";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

// TODO: Pretendard 폰트 파일을 public/fonts/에 추가한 뒤 아래 주석을 해제하고 적용
// 다운로드: https://github.com/orioncactus/pretendard
// import localFont from "next/font/local";
// const pretendard = localFont({
//   src: "../../public/fonts/PretendardVariable.subset.woff2",
//   weight: "100 900",
//   variable: "--font-pretendard",
//   display: "swap",
//   fallback: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
//   adjustFontFallback: false,
// });
// html className에 pretendard.variable 추가할 것

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export const metadata: Metadata = {
  // TODO: 실제 메타데이터로 교체
  title: "TOMOROVE",
  description: "TODO: 사이트 설명",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="flex min-h-full flex-col font-sans">
        <Header />
        <div className="flex flex-1">{children}</div>
        <Footer />

        {GA_ID && <GoogleAnalytics gaId={GA_ID} />}

        {META_PIXEL_ID && (
          <Script
            id="meta-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${META_PIXEL_ID}');
                fbq('track', 'PageView');
              `,
            }}
          />
        )}
      </body>
    </html>
  );
}
