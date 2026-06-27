import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import { researchCaseStudies } from "@/lib/site-data";

type ResearchPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return researchCaseStudies.map((study) => ({ slug: study.slug }));
}

export default async function ResearchDetailPage({ params }: ResearchPageProps) {
  const { slug } = await params;
  const study = researchCaseStudies.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow="Research Case Study"
        title={study.title}
        description={study.subtitle}
        actions={
          <>
            <a
              href={study.proof.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="button-primary rounded-full px-5 py-3 text-sm font-medium"
            >
              Open live demo
            </a>
            <a
              href={study.proof.github}
              target="_blank"
              rel="noreferrer"
              className="button-secondary rounded-full px-5 py-3 text-sm font-medium text-white"
            >
              Open GitHub
            </a>
            <a
              href={study.proof.paper}
              target="_blank"
              rel="noreferrer"
              className="button-secondary rounded-full px-5 py-3 text-sm font-medium text-white"
            >
              View research paper
            </a>
          </>
        }
      />
      <div className="site-shell space-y-10 pb-20">
        <SectionShell
          eyebrow="Overview"
          title="Original research vs my implementation."
          copy={study.overview}
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="surface-panel rounded-[1.75rem] p-6">
              <p className="mono-label text-[11px] text-neutral-500">Original research</p>
              <p className="mt-4 text-sm leading-8 text-neutral-300">{study.originalResearch}</p>
            </article>
            <article className="surface-panel rounded-[1.75rem] p-6">
              <p className="mono-label text-[11px] text-neutral-500">My implementation</p>
              <p className="mt-4 text-sm leading-8 text-neutral-300">{study.myImplementation}</p>
            </article>
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Research Problem"
          title="Why semantics-aware object removal is hard."
          copy="This case study is about understanding the object-erasure problem as a research engineering workflow, not presenting it as a consumer product."
        >
          <div className="grid gap-4 lg:grid-cols-3">
            {study.researchProblem.map((item) => (
              <article key={item} className="surface-panel rounded-[1.5rem] p-5 text-sm leading-7 text-neutral-300">
                {item}
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Paper Summary"
          title="What the paper contributes at a high level."
          copy="The summary below is intentionally paraphrased and high-level. It references the original work without copying it."
        >
          <div className="grid gap-4 lg:grid-cols-3">
            {study.paperSummary.map((item) => (
              <article key={item} className="surface-panel rounded-[1.5rem] p-5 text-sm leading-7 text-neutral-300">
                {item}
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Implementation"
          title="How the reproduction was structured."
          copy="The implementation emphasis was image preprocessing, masking, inpainting flow, model inference, and a minimal interface for experimentation."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            {study.implementation.map((item) => (
              <article key={item} className="surface-panel rounded-[1.5rem] p-5 text-sm leading-7 text-neutral-300">
                {item}
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Architecture"
          title="Pipeline from image input to erased output."
          copy="The diagram is shown as a step-by-step flow to match the existing visual language of the site."
        >
          <div className="grid gap-3 md:grid-cols-5">
            {study.architecture.map((step, index) => (
              <article key={step} className="surface-panel rounded-[1.5rem] p-5 text-center">
                <p className="mono-label text-[11px] text-neutral-500">Step {index + 1}</p>
                <p className="mt-3 text-sm font-medium leading-7 text-white">{step}</p>
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Engineering Challenges"
          title="Where the implementation gets messy in practice."
          copy="This is the part that makes research reproduction valuable: seeing where theory and implementation friction actually show up."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            {study.engineeringChallenges.map((item) => (
              <article key={item} className="surface-panel rounded-[1.5rem] p-5 text-sm leading-7 text-neutral-300">
                {item}
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Research Learnings"
          title="What I learned from reproducing the paper."
          copy="The point of this case study is not novelty signaling. It is showing technical understanding through implementation, observation, and clearer engineering judgment."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            {study.learnings.map((item) => (
              <article key={item} className="surface-panel rounded-[1.5rem] p-5 text-sm leading-7 text-neutral-300">
                {item}
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Metrics"
          title="Measurement placeholders kept honest."
          copy="Metrics are intentionally marked as TODO where proof has not been finalized yet."
        >
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {study.metrics.map((item) => (
              <article key={item.label} className="surface-panel rounded-[1.5rem] p-5">
                <p className="mono-label text-[11px] text-neutral-500">{item.label}</p>
                <p className="mt-3 text-2xl font-semibold tracking-tight text-white">{item.value}</p>
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Engineering Tradeoffs"
          title="Tradeoffs that shaped the reproduction."
          copy="This work was as much about choosing constraints as it was about getting outputs."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            {study.tradeoffs.map((item) => (
              <article key={item} className="surface-panel rounded-[1.5rem] p-5 text-sm leading-7 text-neutral-300">
                {item}
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Roadmap"
          title="How the reproduction could evolve."
          copy="The goal over time is to deepen the research engineering layer rather than just keep adding unrelated demos."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            {study.roadmap.map((item) => (
              <article key={item.phase} className="surface-panel rounded-[1.5rem] p-5">
                <p className="mono-label text-[11px] text-neutral-500">{item.phase}</p>
                <p className="mt-3 text-sm leading-7 text-neutral-300">{item.detail}</p>
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Lessons Learned"
          title="Implementation lessons that carry forward."
          copy="These are the takeaways that matter for future applied AI and research-oriented work."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            {study.lessons.map((item) => (
              <article key={item} className="surface-panel rounded-[1.5rem] p-5 text-sm leading-7 text-neutral-300">
                {item}
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Proof"
          title="Links, notes, and implementation references."
          copy="This case study is anchored in real artifacts: the paper, the implementation repo, the demo, and implementation documentation."
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="surface-panel rounded-[1.75rem] p-6">
              <p className="mono-label text-[11px] text-neutral-500">Primary links</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={study.proof.github}
                  target="_blank"
                  rel="noreferrer"
                  className="button-secondary rounded-full px-5 py-3 text-sm font-medium text-white"
                >
                  GitHub
                </a>
                <a
                  href={study.proof.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="button-primary rounded-full px-5 py-3 text-sm font-medium"
                >
                  Live demo
                </a>
                <a
                  href={study.proof.paper}
                  target="_blank"
                  rel="noreferrer"
                  className="button-secondary rounded-full px-5 py-3 text-sm font-medium text-white"
                >
                  Research paper
                </a>
              </div>
            </article>
            <article className="surface-panel rounded-[1.75rem] p-6">
              <p className="mono-label text-[11px] text-neutral-500">Additional references</p>
              <div className="mt-5 grid gap-3">
                <a
                  href={study.proof.implementationNotes}
                  target="_blank"
                  rel="noreferrer"
                  className="surface-subtle rounded-[1.25rem] p-4 text-sm leading-7 text-neutral-300 transition hover:text-white"
                >
                  Implementation notes
                </a>
                <a
                  href={study.proof.readme}
                  target="_blank"
                  rel="noreferrer"
                  className="surface-subtle rounded-[1.25rem] p-4 text-sm leading-7 text-neutral-300 transition hover:text-white"
                >
                  README
                </a>
                <div className="surface-subtle rounded-[1.25rem] p-4 text-sm leading-7 text-neutral-400">
                  Screenshots and walkthrough video: TODO
                </div>
              </div>
            </article>
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Tags"
          title="How this work is best categorized."
        >
          <div className="flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </SectionShell>

        <div className="pb-4">
          <Link
            href="/research"
            className="button-secondary inline-flex rounded-full px-5 py-3 text-sm font-medium text-white"
          >
            Back to Research
          </Link>
        </div>
      </div>
    </>
  );
}
