import Link from "next/link";

import type { Project } from "@/lib/site-data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="surface-panel shine-border card-hover flex h-full flex-col rounded-[1.75rem] p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-2xl font-semibold tracking-tight text-white">{project.name}</h3>
          <span className="mono-label rounded-full border border-white/10 px-3 py-1 text-[11px] text-neutral-400">
            Case Study
          </span>
        </div>
        <p className="text-sm leading-7 text-neutral-400">{project.tagline}</p>
        <p className="text-sm leading-7 text-neutral-200">{project.problem}</p>
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
