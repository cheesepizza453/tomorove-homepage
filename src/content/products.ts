import type { Product } from "@/types";

/**
 * 제품 목록
 * - 단종 제품은 배열에서 삭제하지 않고 isActive=false로 처리한다.
 */
export const products: Product[] = [
  {
    id: "product-1",
    brandSlug: "brand-a",
    name: "TODO: 제품1 이름",
    summary: "TODO: 제품1 요약",
    image: "/images/products/product-1.jpg",
    storeUrl: "https://example.com/store-a/product-1",
    isActive: true,
  },
  {
    id: "product-2",
    brandSlug: "brand-a",
    name: "TODO: 제품2 이름",
    summary: "TODO: 제품2 요약",
    image: "/images/products/product-2.jpg",
    storeUrl: "https://example.com/store-a/product-2",
    isActive: true,
  },
  {
    id: "product-3",
    brandSlug: "brand-b",
    name: "TODO: 제품3 이름",
    summary: "TODO: 제품3 요약",
    image: "/images/products/product-3.jpg",
    storeUrl: "https://example.com/store-b/product-3",
    isActive: false,
  },
];
