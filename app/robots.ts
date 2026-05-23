import type { MetadataRoute } from "next";
import { brand } from "./siteMetadata";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      allow: "/",
      userAgent: "*"
    },
    sitemap: new URL("/sitemap.xml", brand.url).toString()
  };
}
