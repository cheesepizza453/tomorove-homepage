type OutboundStoreClickParams = {
  brand_slug: string;
  product_id?: string;
  position: string;
};

/**
 * GA4 커스텀 이벤트: outbound_store_click
 * gtag가 로드되지 않은 환경에서는 아무 동작도 하지 않는다.
 */
export function trackOutboundStoreClick(
  params: OutboundStoreClickParams,
): void {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "outbound_store_click", params);
  }
}
