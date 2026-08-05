import { notFound } from "next/navigation";
import { brands } from "@/content/brands";

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
    <main>
      <p>{brand.name} - placeholder</p>
    </main>
  );
}