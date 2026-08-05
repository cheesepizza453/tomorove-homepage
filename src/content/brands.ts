import type { Brand } from "@/types";

/**
 * 브랜드 목록
 * - 단종/비활성 브랜드는 배열에서 삭제하지 않고 isActive=false로 처리한다.
 * - 화면에 브랜드 개수를 표시할 때는 brands.filter(b => b.isActive).length 사용.
 *   절대 숫자를 하드코딩하지 않는다.
 */
export const brands: Brand[] = [
  {
    slug: "brand-a",
    name: "TODO: 브랜드A 이름",
    nameEn: "TODO: Brand A",
    category: "TODO",
    tagline: "TODO: 태그라인",
    story: ["TODO: 브랜드 스토리 첫 번째 문단", "TODO: 두 번째 문단"],
    heroImage: "/images/brands/brand-a-hero.jpg",
    cardImage: "/images/brands/brand-a-card.jpg",
    storeUrl: "https://example.com/store-a",
    isActive: true,
  },
  {
    slug: "brand-b",
    name: "TODO: 브랜드B 이름",
    nameEn: "TODO: Brand B",
    category: "TODO",
    tagline: "TODO: 태그라인",
    story: ["TODO: 브랜드 스토리"],
    heroImage: "/images/brands/brand-b-hero.jpg",
    cardImage: "/images/brands/brand-b-card.jpg",
    storeUrl: "https://example.com/store-b",
    instagramUrl: "https://instagram.com/brand-b",
    isActive: true,
  },
  {
    slug: "brand-c",
    name: "TODO: 브랜드C 이름",
    nameEn: "TODO: Brand C",
    category: "TODO",
    tagline: "TODO: 태그라인",
    story: ["TODO: 브랜드 스토리"],
    heroImage: "/images/brands/brand-c-hero.jpg",
    cardImage: "/images/brands/brand-c-card.jpg",
    storeUrl: "https://example.com/store-c",
    isActive: false,
  },
];
