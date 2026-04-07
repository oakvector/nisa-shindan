import type { MetadataRoute } from "next";

const siteUrl = "https://nisa-shindan-lwkc87cdv-oakvectors-projects.vercel.app/";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}