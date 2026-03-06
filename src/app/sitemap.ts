import { MetadataRoute } from "next";
import { articles } from "@/content/articles";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/over-casper", "/diensten", "/expertise", "/werkwijze", "/inzichten", "/contact"];
  const staticEntries = pages.map((page) => ({
    url: `${siteConfig.url}${page}`,
    changeFrequency: "monthly" as const,
    priority: page === "" ? 1 : 0.8
  }));

  const articleEntries = articles.map((article) => ({
    url: `${siteConfig.url}/inzichten/${article.slug}`,
    lastModified: article.publishedAt,
    changeFrequency: "yearly" as const,
    priority: 0.6
  }));

  return [...staticEntries, ...articleEntries];
}
