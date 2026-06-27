"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ThemeToggle } from "@/components/theme-toggle";
import { navigation, site } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-black/72 backdrop-blur-xl">
      <div className="site-shell flex items-center justify-between gap-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/4 text-sm font-semibold text-white">
            KK
          </div>
          <div>
            <div className="text-sm font-semibold tracking-tight text-white">{site.name}</div>
            <div className="mono-label text-[11px] text-neutral-500">{site.title}</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-1 rounded-full border border-white/8 bg-white/[0.03] px-2 py-2 lg:flex">
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm transition ${
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
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="button-secondary rounded-full px-4 py-2 text-sm font-medium text-white"
          >
            Let's talk
          </Link>
        </div>
      </div>
    </header>
  );
}
