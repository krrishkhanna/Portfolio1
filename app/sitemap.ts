import type { MetadataRoute } from "next";

import { site } from "@/lib/site-data";

const routes = [
  "",
  "/about",
  "/experience",
  "/projects",
  "/product-strategy",
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
