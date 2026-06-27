import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import Link from "next/link";

import { proofCards, researchCaseStudies, researchHighlights } from "@/lib/site-data";

export default function ResearchPage() {
  const researchProof = proofCards.filter((item) => item.category === "Research & Technical Work");

  return (
    <>
      <PageHero
        eyebrow="Research"
        title="Research, optimization, benchmarking, and technical proof."
        description="This section surfaces the parts of the portfolio that look strongest through a research and experimentation lens: Samsung, Waseda-adjacent work, optimization thinking, and technical proof."
      />
      <div className="site-shell space-y-10 pb-20">
        <SectionShell
          eyebrow="Research Highlights"
          title="Why the research layer matters."
          copy="This is one of the biggest differentiators in the profile: not just building things, but also working through experiments, tradeoffs, and technical reasoning."
        >
          <div className="grid gap-5 lg:grid-cols-3">
            {researchHighlights.map((item) => (
              <article key={item.title} className="surface-panel rounded-[1.75rem] p-6">
                <h2 className="text-2xl font-semibold tracking-tight text-white">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-neutral-300">{item.detail}</p>
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Research Reproductions"
          title="Paper implementations, reproductions, and applied exploration."
          copy="This section is for research engineering work: understanding papers, reproducing ideas honestly, and learning through implementation rather than claiming authorship."
        >
          <div className="grid gap-5 lg:grid-cols-2">
            {researchCaseStudies.map((item) => (
              <article key={item.slug} className="surface-panel card-hover rounded-[1.75rem] p-6">
                <p className="mono-label text-[11px] text-neutral-500">Research engineering case study</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-neutral-300">{item.overview}</p>
                <div className="mt-5 grid gap-3">
                  <div className="surface-subtle rounded-[1.25rem] p-4">
                    <p className="mono-label text-[11px] text-neutral-500">Original research</p>
                    <p className="mt-3 text-sm leading-7 text-neutral-300">{item.originalResearch}</p>
                  </div>
                  <div className="surface-subtle rounded-[1.25rem] p-4">
                    <p className="mono-label text-[11px] text-neutral-500">My implementation</p>
                    <p className="mt-3 text-sm leading-7 text-neutral-300">{item.myImplementation}</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={`/research/${item.slug}`}
                    className="button-primary inline-flex rounded-full px-5 py-3 text-sm font-medium"
                  >
                    Open case study
                  </Link>
                  <a
                    href={item.proof.paper}
                    target="_blank"
                    rel="noreferrer"
                    className="button-secondary inline-flex rounded-full px-5 py-3 text-sm font-medium text-white"
                  >
                    View paper
                  </a>
                </div>
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Proof"
          title="Clickable research-oriented proof."
          copy="Where possible, these cards link out to the bundled proof document."
        >
          <div className="grid gap-5 lg:grid-cols-2">
            {researchProof.map((item) => (
              <article key={item.title} className="surface-panel rounded-[1.75rem] p-6">
                <p className="mono-label text-[11px] text-neutral-500">{item.category}</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-neutral-300">{item.explanation}</p>
                <p className="mt-4 text-sm leading-7 text-neutral-400">{item.whyItMatters}</p>
                {item.docHref ? (
                  <a
                    href={item.docHref}
                    target="_blank"
                    rel="noreferrer"
                    className="button-primary mt-6 inline-flex rounded-full px-5 py-3 text-sm font-medium"
                  >
                    Open proof document
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </SectionShell>
      </div>
    </>
  );
}
