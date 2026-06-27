import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Krrish Khanna Portfolio",
    short_name: "Krrish Portfolio",
    description:
      "Personal portfolio for Founder’s Office, Product, Strategy, and Technical Operations roles. Built with Next.js, TypeScript, Tailwind CSS v4, and deployed on Vercel.",
    start_url: "/",
    display: "standalone",
    background_color: "#050816",
    theme_color: "#050816",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
