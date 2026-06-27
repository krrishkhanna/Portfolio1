import type { MetadataRoute } from "next";

import { site } from "@/lib/site-data";

const routes = [
  "",
  "/ai-lab",
  "/experience",
  "/projects",
  "/product-strategy",
  "/proof-of-work",
  "/research",
  "/research/magiceraser",
  "/thinking",
  "/writing",
  "/resume",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
  }));
}
