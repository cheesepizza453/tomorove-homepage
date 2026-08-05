import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-4 text-gray-600">페이지를 찾을 수 없습니다.</p>
      <Link
        href="/"
        className="mt-6 text-sm font-medium underline transition-colors hover:text-gray-900"
      >
        홈으로 돌아가기
      </Link>
    </main>
  );
}