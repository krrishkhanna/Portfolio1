import type { Metadata } from "next";

import "./globals.css";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.title}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Krrish Khanna",
    "Technical Operator",
    "AI × Product × Strategy × Operations",
    "Founder’s Office",
    "Product Strategy",
    "TPM",
    "Strategy & Operations",
    "Startup",
  ],
  openGraph: {
    title: `${site.name} | ${site.title}`,
    description: site.description,
    type: "website",
    url: site.url,
    siteName: `${site.name} Portfolio`,
    images: [
      {
        url: `${site.url}/home-portrait-2026.png`,
        alt: `${site.name} portfolio preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.title}`,
    description: site.description,
    images: [`${site.url}/home-portrait-2026.png`],
  },
  alternates: {
    canonical: site.url,
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.title,
  description: site.description,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.location,
  },
  sameAs: site.socials.flatMap((social) => (social.href?.startsWith("http") ? [social.href] : [])),
  url: site.url,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (() => {
                const saved = localStorage.getItem("theme");
                const theme = saved === "light" || saved === "dark" ? saved : "dark";
                document.documentElement.dataset.theme = theme;
                const savedMode = localStorage.getItem("portfolio-mode");
                const mode = savedMode === "ai" ? "ai" : "operator";
                document.documentElement.dataset.portfolioMode = mode;
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
