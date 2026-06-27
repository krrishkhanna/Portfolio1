import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { writing } from "@/lib/site-data";

export default function WritingPage() {
  return (
    <>
      <PageHero
        eyebrow="Writing"
        title="Notes on leverage, AI, systems, and product thinking."
        description="Short pieces that reflect how I think: compress ambiguity, protect judgment, and build systems that make execution easier."
      />
      <div className="site-shell grid gap-5 pb-20 md:grid-cols-2 xl:grid-cols-3">
        {writing.map((piece) => (
          <Link
            key={piece.slug}
            href={`/writing/${piece.slug}`}
            className="surface card-hover rounded-[1.75rem] p-6"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-sky-200/70">
              {piece.category} • {piece.readTime}
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">{piece.title}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">{piece.summary}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
