import Link from "next/link";

import type { Project } from "@/lib/site-data";
import { usePortfolioMode } from "@/lib/use-portfolio-mode";

export function ProjectCard({ project }: { project: Project }) {
  const mode = usePortfolioMode();
  const isAiMode = mode === "ai";
  const summary = isAiMode ? project.aiSummary ?? project.built : project.operatorSummary ?? project.problem;
  const proof = isAiMode ? project.aiProof : project.operatorProof;
  const bestFor = isAiMode ? project.aiBestFor : project.operatorBestFor;
  const showCofounderBadge = !isAiMode && project.slug === "odinsub";
  const displayTitle = showCofounderBadge ? "OdinSub - Co-founder" : project.name;

  return (
    <article className="surface-panel shine-border card-hover flex h-full flex-col rounded-[1.75rem] p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-2xl font-semibold tracking-tight text-white">{displayTitle}</h3>
          <div className="flex flex-wrap items-center justify-end gap-2">
            {showCofounderBadge ? (
              <span className="mono-label rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-[11px] text-sky-200">
                Co-founder
              </span>
            ) : null}
            <span className="mono-label rounded-full border border-white/10 px-3 py-1 text-[11px] text-neutral-400">
              Case Study
            </span>
          </div>
        </div>
        <p className="text-sm leading-7 text-neutral-400">{project.tagline}</p>
        <p className="text-sm leading-7 text-neutral-200">{summary}</p>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.techStack.slice(0, 4).map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-neutral-300"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="mt-6 rounded-2xl border border-white/8 bg-white/[0.02] p-4">
        <p className="mono-label text-[11px] text-neutral-500">Proof</p>
        <p className="mt-3 text-sm leading-7 text-neutral-300">{proof ?? project.improveNext}</p>
      </div>
      {bestFor ? (
        <div className="mt-4 rounded-2xl border border-white/8 bg-white/[0.02] p-4">
          <p className="mono-label text-[11px] text-neutral-500">Best for</p>
          <p className="mt-3 text-sm leading-7 text-neutral-300">{bestFor}</p>
        </div>
      ) : null}
      <div className="mt-4 rounded-2xl border border-white/8 bg-white/[0.02] p-4">
        <p className="mono-label text-[11px] text-neutral-500">Next click</p>
        <p className="mt-3 text-sm leading-7 text-neutral-300">Open the case study for architecture, tradeoffs, proof, and next iterations.</p>
      </div>
      <div className="mt-auto pt-8">
        <Link
          href={project.links.caseStudy}
          className="button-secondary inline-flex rounded-full px-4 py-2 text-sm font-medium text-white"
        >
          Explore project
        </Link>
      </div>
    </article>
  );
}
