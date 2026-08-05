import type { MetadataRoute } from "next";

export const dynamic = "force-static";

// TODO: 실제 도메인으로 변경
const BASE_URL = "https://tomorove.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}