// TODO: 브랜드 카테고리 확정 후 유니온 타입 값 채울 것
export type BrandCategory = string;

export interface Brand {
  slug: string;
  name: string;
  nameEn: string;
  category: BrandCategory;
  tagline: string;
  story: string[];
  heroImage: string;
  cardImage: string;
  storeUrl: string;
  instagramUrl?: string;
  /** 단종/비활성 브랜드는 배열에서 삭제하지 않고 isActive=false로 처리 */
  isActive: boolean;
}

export interface Product {
  id: string;
  brandSlug: string;
  name: string;
  summary: string;
  image: string;
  storeUrl: string;
  /** 단종 제품은 배열에서 삭제하지 않고 isActive=false로 처리 */
  isActive: boolean;
}
