import Link from "next/link";
import { notFound } from "next/navigation";

import { projects } from "@/lib/site-data";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="page-space">
      <div className="site-shell space-y-6 pb-20">
        <section className="surface-panel rounded-[2rem] p-8 md:p-12">
          <span className="eyebrow">Project Detail</span>
          <div className="mt-6 max-w-4xl space-y-4">
            <h1 className="page-title text-white">
              {project.name}
            </h1>
            <p className="max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              {project.tagline}
            </p>
            {project.overview ? (
              <p className="max-w-3xl text-sm leading-8 text-neutral-400 md:text-base">
                {project.overview}
              </p>
            ) : null}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.liveDemo ? (
              <a
                href={project.links.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="button-primary rounded-full px-5 py-3 text-sm font-medium"
              >
                Live Demo
              </a>
            ) : null}
            {project.links.github ? (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="button-secondary rounded-full px-5 py-3 text-sm font-medium text-white"
              >
                GitHub
              </a>
            ) : (
              <span className="button-secondary rounded-full px-5 py-3 text-sm text-slate-400">
                GitHub on request
              </span>
            )}
            <Link
              href="/projects"
              className="button-secondary rounded-full px-5 py-3 text-sm font-medium text-white"
            >
              Back to Projects
            </Link>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <DetailBlock title="Problem" copy={project.problem} />
            <DetailBlock title="Insight" copy={project.insight} />
            <DetailBlock title="What I Built" copy={project.built} />
            {project.users?.length ? <ListBlock title="Users" items={project.users} /> : null}
            {project.productDecisions?.length ? <ListBlock title="Product Decisions" items={project.productDecisions} /> : null}
            {project.systemArchitecture?.length ? <ArchitectureBlock title="System Architecture" items={project.systemArchitecture} /> : null}
            {project.technicalArchitecture ? (
              <TechnicalArchitectureBlock
                frontend={project.technicalArchitecture.frontend}
                backend={project.technicalArchitecture.backend}
                intelligence={project.technicalArchitecture.intelligence}
              />
            ) : null}
            {project.intelligenceComponents?.length ? (
              <ListBlock title="AI / Intelligence Components" items={project.intelligenceComponents} />
            ) : null}
            {project.metrics?.length ? <MetricsBlock items={project.metrics} /> : null}
            {project.engineeringTradeoffs?.length ? (
              <ListBlock title="Engineering Tradeoffs" items={project.engineeringTradeoffs} />
            ) : null}
            {project.roadmap?.length ? <RoadmapBlock items={project.roadmap} /> : null}
            {project.lessonsLearned?.length ? <ListBlock title="Lessons Learned" items={project.lessonsLearned} /> : null}
            <DetailBlock title="What I’d Improve Next" copy={project.improveNext} />
            <div className="surface-panel rounded-[1.75rem] p-6">
              <h2 className="text-2xl font-semibold tracking-tight text-white">Proof / Links</h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {project.links.liveDemo ? (
                  <a
                    href={project.links.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="button-primary rounded-full px-5 py-3 text-sm font-medium"
                  >
                    Live Demo
                  </a>
                ) : null}
                {project.links.github ? (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="button-secondary rounded-full px-5 py-3 text-sm font-medium text-white"
                  >
                    GitHub
                  </a>
                ) : (
                  <span className="button-secondary rounded-full px-5 py-3 text-sm text-slate-400">
                    GitHub on request
                  </span>
                )}
              </div>
              {project.proofItems?.length ? (
                <div className="mt-5 grid gap-3">
                  {project.proofItems.map((item) => (
                    item.href ? (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="surface-subtle rounded-[1.25rem] p-4 text-sm leading-7 text-neutral-300 transition hover:text-white"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <div
                        key={item.label}
                        className="surface-subtle rounded-[1.25rem] p-4 text-sm leading-7 text-neutral-400"
                      >
                        {item.label}: {item.note}
                      </div>
                    )
                  ))}
                </div>
              ) : null}
            </div>
          </div>
          <div className="space-y-5">
            <DetailBlock title="My Role" copy={project.role} />
            <div className="surface-panel rounded-[1.75rem] p-6">
              <h2 className="text-2xl font-semibold tracking-tight text-white">Tech Stack</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.techStack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-neutral-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="surface-panel rounded-[1.75rem] p-6">
              <h2 className="text-2xl font-semibold tracking-tight text-white">Outcome</h2>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
                {project.outcome.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function DetailBlock({ title, copy }: { title: string; copy: string }) {
  return (
    <article className="surface-panel rounded-[1.75rem] p-6">
      <h2 className="text-2xl font-semibold tracking-tight text-white">{title}</h2>
      <p className="mt-4 text-sm leading-8 text-neutral-300">{copy}</p>
    </article>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="surface-panel rounded-[1.75rem] p-6">
      <h2 className="text-2xl font-semibold tracking-tight text-white">{title}</h2>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <div key={item} className="surface-subtle rounded-[1.25rem] p-4 text-sm leading-7 text-neutral-300">
            {item}
          </div>
        ))}
      </div>
    </article>
  );
}

function ArchitectureBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="surface-panel rounded-[1.75rem] p-6">
      <h2 className="text-2xl font-semibold tracking-tight text-white">{title}</h2>
      <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => (
          <div key={item} className="surface-subtle rounded-[1.25rem] p-4">
            <p className="mono-label text-[11px] text-neutral-500">Step {index + 1}</p>
            <p className="mt-3 text-sm leading-7 text-neutral-300">{item}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

function TechnicalArchitectureBlock({
  frontend,
  backend,
  intelligence,
}: {
  frontend: string[];
  backend: string[];
  intelligence: string[];
}) {
  const groups = [
    { title: "Frontend", items: frontend },
    { title: "Backend", items: backend },
    { title: "Intelligence Layer", items: intelligence },
  ];

  return (
    <article className="surface-panel rounded-[1.75rem] p-6">
      <h2 className="text-2xl font-semibold tracking-tight text-white">Technical Architecture</h2>
      <div className="mt-5 grid gap-5 lg:grid-cols-3">
        {groups.map((group) => (
          <div key={group.title} className="surface-subtle rounded-[1.25rem] p-4">
            <p className="mono-label text-[11px] text-neutral-500">{group.title}</p>
            <div className="mt-3 grid gap-2">
              {group.items.map((item) => (
                <div key={item} className="text-sm leading-7 text-neutral-300">
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

function MetricsBlock({ items }: { items: { label: string; value: string }[] }) {
  return (
    <article className="surface-panel rounded-[1.75rem] p-6">
      <h2 className="text-2xl font-semibold tracking-tight text-white">Metrics</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <div key={item.label} className="surface-subtle rounded-[1.25rem] p-4">
            <p className="mono-label text-[11px] text-neutral-500">{item.label}</p>
            <p className="mt-3 text-xl font-semibold tracking-tight text-white">{item.value}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

function RoadmapBlock({ items }: { items: { phase: string; detail: string }[] }) {
  return (
    <article className="surface-panel rounded-[1.75rem] p-6">
      <h2 className="text-2xl font-semibold tracking-tight text-white">Roadmap</h2>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <div key={item.phase} className="surface-subtle rounded-[1.25rem] p-4">
            <p className="mono-label text-[11px] text-neutral-500">{item.phase}</p>
            <p className="mt-3 text-sm leading-7 text-neutral-300">{item.detail}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
