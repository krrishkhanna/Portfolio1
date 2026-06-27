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
      <div className="site-shell py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/4 text-sm font-semibold text-white">
              KK
            </div>
            <div>
              <div className="text-sm font-semibold tracking-tight text-white">{site.name}</div>
              <div className="mono-label text-[11px] text-neutral-500">{site.title}</div>
            </div>
          </Link>
          <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-3">
            <ModeToggle />
            <div className="flex items-center gap-2">
              {topSocials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="button-secondary rounded-full px-3 py-2 text-xs font-medium text-white sm:text-sm"
                >
                  {social.label}
                </a>
              ))}
            </div>
            <ThemeToggle />
            <Link
              href="/contact"
              className="button-secondary rounded-full px-4 py-2 text-sm font-medium text-white"
            >
              Contact
            </Link>
          </div>
        </div>
        <nav className="mt-4 flex gap-1 overflow-x-auto rounded-full border border-white/8 bg-white/[0.03] px-2 py-2">
          {nav.primary.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`shrink-0 rounded-full px-4 py-2 text-sm transition ${
                  isActive
                    ? "bg-white font-medium text-neutral-950 shadow-[0_8px_24px_rgba(255,255,255,0.18)]"
                    : "text-neutral-400 hover:bg-white/6 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="mx-1 hidden h-8 w-px self-center bg-white/8 md:block" />
          {nav.secondary.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`shrink-0 rounded-full px-4 py-2 text-sm transition ${
                  isActive
                    ? "bg-white/14 font-medium text-white"
                    : "text-neutral-500 hover:bg-white/6 hover:text-white"
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
