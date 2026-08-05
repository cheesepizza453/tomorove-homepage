import type { MetadataRoute } from "next";
import { brands } from "@/content/brands";

export const dynamic = "force-static";

// TODO: 실제 도메인으로 변경
const BASE_URL = "https://tomorove.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date() },
    { url: `${BASE_URL}/about`, lastModified: new Date() },
    { url: `${BASE_URL}/brands`, lastModified: new Date() },
  ];

  const brandPages: MetadataRoute.Sitemap = brands
    .filter((b) => b.isActive)
    .map((b) => ({
      url: `${BASE_URL}/brands/${b.slug}`,
      lastModified: new Date(),
    }));

  return [...staticPages, ...brandPages];
}