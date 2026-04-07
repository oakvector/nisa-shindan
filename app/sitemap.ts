import type { MetadataRoute } from "next";

const siteUrl = "https://nisa-shindan-lwkc87cdv-oakvectors-projects.vercel.app/";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/how-it-works",
    "/privacy",
    "/disclosure",
    "/shindan",
    "/shindan/style",
    "/shindan/failure-safe",
    "/shindan/continue-style",
    "/articles",
    "/articles/sbi-vs-rakuten",
    "/articles/nisa-beginner-choice",
    "/articles/credit-card-tsumitate",
    "/articles/matsui-for-beginners",
    "/articles/monex-for-who",
    "/articles/musmart-for-who",
    "/articles/sbi-for-who",
    "/articles/rakuten-for-who",
    "/services/sbi-sec",
    "/services/rakuten-sec",
    "/services/matsui-sec",
    "/services/monex-sec",
    "/services/musmart-sec",
  ];

  const now = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/shindan" || route === "/articles" ? 0.9 : 0.7,
  }));
}