import Image from "next/image";
import { notFound } from "next/navigation";
import { brands } from "@/content/brands";
import StoreLink from "@/components/ui/StoreLink";

interface BrandDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return brands
    .filter((b) => b.isActive)
    .map((b) => ({ slug: b.slug }));
}

export default async function BrandDetailPage({ params }: BrandDetailPageProps) {
  const { slug } = await params;
  const brand = brands.find((b) => b.slug === slug && b.isActive);

  if (!brand) {
    notFound();
  }

  return (
    <main className="flex flex-1 flex-col pb-[120px]">
      <div className="relative w-full min-h-screen overflow-hidden">
        <Image
          src={brand.heroImage}
          alt={brand.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="h-full flex flex-col justify-center items-center relative mx-auto max-w-3xl px-6 sm:py-24 text-center text-white">
          <figure className="w-[34vw] sm:w-[300px] mx-auto">
            <Image
              src={`/images/brands/white_${brand.slug}.png`}
              alt={brand.name}
              width={160}
              height={54}
              className="mx-auto h-auto w-auto object-contain"
            />
          </figure>

          <h1 className="mt-[16px] whitespace-pre-line text-[18px] sm:text-[28px] font-light leading-[1.4] sm:text-[30px]">
            {brand.tagline}
          </h1>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            {/* <span className="text-[11px] tracking-[0.2em] text-white/70">SCROLL</span> */}
            <div className="relative h-14 w-px overflow-hidden bg-white/20">
              <span className="absolute left-0 top-0 h-1/2 w-px bg-white animate-scroll-line" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[120px] mx-auto max-w-[1000px] px-6 text-center sm:text-[18px]">
        {brand.story.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
      <StoreLink
            href={brand.storeUrl}
            brandSlug={brand.slug}
            position="brand_detail"
            className="mt-[80px] self-center inline-block bg-[#222] text-white px-8 py-3 text-center sm:text-[16px] transition-colors hover:bg-[#333] rounded-[6px]"
          >
            브랜드 스토어 바로가기
      </StoreLink>

      {brand.products && brand.products.length > 0 && (
        <div className="mx-auto mt-[200px] w-full max-w-[1440px] flex flex-col items-center sm:flex-row justify-center gap-[40px] sm:gap-[20px]">
          {brand.products.map((product, i) => (
            <StoreLink
              key={i}
              href={product.link}
              brandSlug={brand.slug}
              productId={`product-${i + 1}`}
              position="brand_detail_product"
              className="group relative block aspect-square overflow-hidden w-[80vw] sm:w-[350px] rounded-[6px] overflow-hidden "
            >
              <Image
                src={product.image}
                alt={`${brand.name} 제품 ${i + 1}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/50 group-hover:opacity-100">
                <span className="text-sm tracking-[0.2em] text-white">MORE</span>
              </div>
            </StoreLink>
          ))}
        </div>
      )}
    </main>
  );
}