// TODO: 브랜드 카테고리 확정 후 유니온 타입 값 채울 것
export type BrandCategory = string;

export interface BrandProduct {
  image: string;
  link: string;
}

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
  /** 브랜드 상세 페이지 하단에 노출할 제품 이미지(최대 3개). 비워두면 섹션이 렌더링되지 않는다 */
  products?: BrandProduct[];
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
