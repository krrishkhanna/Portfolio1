"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ModeToggle } from "@/components/mode-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { modeNavigation, site } from "@/lib/site-data";
import { usePortfolioMode } from "@/lib/use-portfolio-mode";

export function SiteHeader() {
  const pathname = usePathname();
  const mode = usePortfolioMode();
  const nav = modeNavigation[mode];
  const topSocials = site.socials.filter((item) =>
    ["LinkedIn", "Instagram", "GitHub"].includes(item.label),
  );

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-black/72 backdrop-blur-xl">
      <div className="site-shell py-3">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-[1.15rem] border border-white/10 bg-white/4 text-sm font-semibold text-white">
              KK
            </div>
            <div>
              <div className="text-sm font-semibold tracking-tight text-white">{site.name}</div>
              <div className="mono-label text-[11px] text-neutral-500">{site.title}</div>
            </div>
          </Link>
          <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-2.5">
            <ModeToggle />
            <div className="flex items-center gap-2">
              {topSocials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="button-secondary rounded-full px-3 py-1.5 text-xs font-medium text-white sm:text-sm"
                >
                  {social.label}
                </a>
              ))}
            </div>
            <ThemeToggle />
            <Link
              href="/contact"
              className="button-secondary rounded-full px-4 py-1.5 text-sm font-medium text-white"
            >
              Contact
            </Link>
          </div>
        </div>
        <nav className="mt-3 flex gap-1 overflow-x-auto rounded-full border border-white/8 bg-white/[0.03] px-1.5 py-1.5">
          {nav.primary.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`shrink-0 rounded-full px-3.5 py-1.5 text-sm transition ${
                  isActive
                    ? "bg-white font-medium text-neutral-950 shadow-[0_8px_24px_rgba(255,255,255,0.18)]"
                    : "text-neutral-400 hover:bg-white/6 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
