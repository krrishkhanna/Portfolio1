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
    ["LinkedIn", "GitHub"].includes(item.label),
  );
  const subtitle = mode === "ai" ? "Applied AI Builder" : site.title;
  const status = mode === "ai" ? "Building Applied AI Systems" : "Co-founding OdinSub";

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-black/72 backdrop-blur-xl">
      <div className="site-shell py-3">
        <div className="flex flex-col gap-2.5 lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-center">
          <Link href="/" className="flex min-w-0 items-center gap-3 lg:justify-self-start">
            <div className="flex h-10 w-10 items-center justify-center rounded-[1.15rem] border border-white/10 bg-white/4 text-sm font-semibold text-white">
              KK
            </div>
            <div className="min-w-0">
              <div className="text-sm font-semibold tracking-tight text-white">{site.name}</div>
              <div className="mono-label text-[11px] text-neutral-500">{subtitle}</div>
              <div className="mt-1 flex items-center gap-1.5 text-[11px] text-neutral-400">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
                <span className="truncate">{status}</span>
              </div>
            </div>
          </Link>
          <div className="flex justify-center lg:justify-self-center">
            <ModeToggle />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 lg:justify-self-end">
            <div className="flex items-center justify-center gap-2">
              {topSocials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="button-secondary rounded-full px-3 py-1.5 text-xs font-medium text-neutral-300 sm:text-sm"
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
              Get in Touch
            </Link>
          </div>
        </div>
        <nav className="mt-2.5 flex gap-1 overflow-x-auto rounded-full border border-white/8 bg-white/[0.03] px-1.5 py-1.5">
          {nav.primary.map((item) => {
            const isActive =
              pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`shrink-0 rounded-full px-3.5 py-1.25 text-sm transition ${
                  isActive
                    ? "bg-white/88 font-medium text-neutral-950 shadow-[0_8px_18px_rgba(255,255,255,0.12)]"
                    : "text-neutral-400 hover:bg-white/6 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          {nav.secondary.length ? (
            <>
              <div className="mx-1 hidden h-7 w-px self-center bg-white/8 md:block" />
              {nav.secondary.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`hidden shrink-0 rounded-full px-3 py-1.25 text-sm transition md:inline-flex ${
                      isActive
                        ? "bg-white/12 font-medium text-white"
                        : "text-neutral-500 hover:bg-white/6 hover:text-neutral-300"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </>
          ) : null}
        </nav>
      </div>
    </header>
  );
}
