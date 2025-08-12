import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mbzolfaghari.ir";
  const routes = [
    "/fa", "/fa/about", "/fa/articles", "/fa/books", "/fa/videos",
    "/en", "/en/about", "/en/articles", "/en/books", "/en/videos",
  ];
  const now = new Date();
  return routes.map((r) => ({
    url: base + r,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));
}
