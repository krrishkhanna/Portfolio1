import Link from "next/link";

import { navigation, site } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 py-10">
      <div className="site-shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <p className="text-lg font-semibold tracking-tight text-white">{site.name}</p>
          <p className="max-w-xl text-sm leading-7 text-neutral-500">
            Technical Operator working across AI, product, strategy, and operations.
            Building products, designing systems, and driving execution.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-sm text-neutral-500 md:items-end">
          <div className="flex flex-wrap gap-4">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            {site.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                className="transition hover:text-white"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
