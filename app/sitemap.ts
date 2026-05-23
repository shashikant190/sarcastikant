import type { MetadataRoute } from "next";
import { brand } from "./siteMetadata";

const routes = [
  "",
  "/library",
  "/books/dear-non-biological-god",
  "/systems",
  "/fragments"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: new URL(route, brand.url).toString(),
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/library" ? 0.9 : 0.75
  }));
}
