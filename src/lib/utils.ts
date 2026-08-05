/**
 * fbclid 전달을 허용하는 도메인 화이트리스트.
 * 자사몰 도메인이 확정되면 여기에 추가한다.
 */
export const FBCLID_ALLOWED_DOMAINS = [
  "example.com",
  // TODO: 실제 자사몰 도메인 추가
] as const;

/**
 * href에 UTM 파라미터를 부착한다.
 * - 이미 utm_source가 있으면 덮어쓰지 않는다.
 * - 현재 URL에 fbclid가 있으면 허용 도메인에 한해 전달한다.
 */
export function buildStoreLinkUrl(
  href: string,
  brandSlug: string,
  currentUrl?: string,
): string {
  const url = new URL(href);

  // UTM 부착 (이미 utm_source가 있으면 건드리지 않음)
  if (!url.searchParams.has("utm_source")) {
    url.searchParams.set("utm_source", "tomorove");
    url.searchParams.set("utm_medium", "holdings");
    url.searchParams.set("utm_campaign", brandSlug);
  }

  // fbclid 전달: 허용 도메인 체크
  if (currentUrl) {
    try {
      const current = new URL(currentUrl);
      const fbclid = current.searchParams.get("fbclid");
      if (fbclid && isDomainAllowed(url.hostname)) {
        url.searchParams.set("fbclid", fbclid);
      }
    } catch {
      // currentUrl 파싱 실패 시 무시
    }
  }

  return url.toString();
}

function isDomainAllowed(hostname: string): boolean {
  return FBCLID_ALLOWED_DOMAINS.some(
    (domain) => hostname === domain || hostname.endsWith(`.${domain}`),
  );
}
