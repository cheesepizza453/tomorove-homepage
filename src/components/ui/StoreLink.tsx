"use client";

import { type MouseEvent, type ReactNode, useCallback } from "react";
import { buildStoreLinkUrl } from "@/lib/utils";
import { trackOutboundStoreClick } from "@/lib/analytics";

interface StoreLinkProps {
  href: string;
  brandSlug: string;
  productId?: string;
  position: string;
  children: ReactNode;
  className?: string;
}

/**
 * 자사몰로 나가는 모든 외부 링크는 이 컴포넌트만 사용한다.
 * - GA4 outbound_store_click 이벤트 발화
 * - UTM 자동 부착
 * - fbclid 허용 도메인 전달
 */
export default function StoreLink({
  href,
  brandSlug,
  productId,
  position,
  children,
  className,
}: StoreLinkProps) {
  // Keep the server and initial client markup identical. Parameters derived
  // from the current browser URL are added only when the link is clicked.
  const finalHref = buildStoreLinkUrl(href, brandSlug);

  const handleClick = useCallback((event: MouseEvent<HTMLAnchorElement>) => {
    event.currentTarget.href = buildStoreLinkUrl(
      href,
      brandSlug,
      window.location.href,
    );

    trackOutboundStoreClick({
      brand_slug: brandSlug,
      product_id: productId,
      position,
    });
  }, [brandSlug, href, productId, position]);

  return (
    <a
      href={finalHref}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}
