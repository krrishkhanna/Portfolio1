import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { writing } from "@/lib/site-data";

export default function WritingPage() {
  return (
    <>
      <PageHero
        eyebrow="Writing"
        title="Writing that makes my thinking legible."
        description="Essays and notes on systems, ownership, ambiguity, product thinking, and the kind of work that sits between product, technology, strategy, and operations."
      />
      <div className="site-shell pb-20">
        <div className="surface-panel mb-5 rounded-[1.75rem] p-6">
          <p className="mono-label text-[11px] text-neutral-500">Featured Essay</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
            Why I’m Drawn to Messy Problems
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-300">
            A reflection on systems thinking, ambiguity, ownership, and why I enjoy work
            that sits between product, technology, strategy, and operations.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/writing/why-im-drawn-to-messy-problems"
              className="button-primary rounded-full px-5 py-3 text-sm font-medium"
            >
              Read the essay
            </Link>
            <Link
              href="/startup-thinking"
              className="button-secondary rounded-full px-5 py-3 text-sm font-medium text-white"
            >
              View Startup Thinking
            </Link>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {writing.map((piece) => (
          <Link
            key={piece.slug}
            href={`/writing/${piece.slug}`}
            className="surface-panel card-hover rounded-[1.75rem] p-6"
          >
            <p className="mono-label text-[11px] text-neutral-500">
              {piece.category} • {piece.readTime}
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">{piece.title}</h2>
            <p className="mt-4 text-sm leading-7 text-neutral-300">{piece.summary}</p>
          </Link>
        ))}
        </div>
      </div>
    </>
  );
}
