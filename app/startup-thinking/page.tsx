import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import { startupThinkingSections, writing } from "@/lib/site-data";

export default function StartupThinkingPage() {
  return (
    <>
      <PageHero
        eyebrow="Startup Thinking"
        title="How I think about startups, leverage, product learning, and ownership."
        description="This page is meant to be useful for founders and startup readers: how I choose problems, how I think about tradeoffs, and how building fits into the bigger direction of my work."
      />
      <div className="site-shell space-y-10 pb-20">
        {startupThinkingSections.map((section) => (
          <SectionShell
            key={section.title}
            eyebrow="Startup Thinking"
            title={section.title}
            copy="Founder-friendly thinking, written to make the decision process legible."
          >
            <article className="surface-panel rounded-[1.75rem] p-8">
              <div className="space-y-5">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-neutral-300">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          </SectionShell>
        ))}

        <SectionShell
          eyebrow="Related Writing"
          title="Adjacent essays and notes."
          copy="If you want the more reflective side of the same thinking, these pieces extend it."
        >
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
        </SectionShell>
      </div>
    </>
  );
}
