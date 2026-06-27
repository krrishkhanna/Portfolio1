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
        <section className="surface rounded-[2rem] p-8 md:p-12">
          <span className="eyebrow">Project Detail</span>
          <div className="mt-6 max-w-4xl space-y-4">
            <h1 className="text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
              {project.name}
            </h1>
            <p className="max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              {project.tagline}
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.liveDemo ? (
              <a
                href={project.links.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-sky-100"
              >
                Live Demo
              </a>
            ) : null}
            {project.links.github ? (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/12 px-5 py-3 text-sm font-medium text-white transition hover:border-sky-300/28 hover:bg-sky-400/10"
              >
                GitHub
              </a>
            ) : (
              <span className="rounded-full border border-white/10 px-5 py-3 text-sm text-slate-400">
                GitHub on request
              </span>
            )}
            <Link
              href="/projects"
              className="rounded-full border border-sky-300/20 bg-sky-400/10 px-5 py-3 text-sm font-medium text-sky-100 transition hover:border-sky-300/36 hover:bg-sky-400/16"
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
          </div>
          <div className="space-y-5">
            <DetailBlock title="My Role" copy={project.role} />
            <div className="surface rounded-[1.75rem] p-6">
              <h2 className="text-2xl font-semibold tracking-tight text-white">Tech Stack</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.techStack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-sky-300/14 bg-sky-400/8 px-3 py-2 text-sm text-sky-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="surface rounded-[1.75rem] p-6">
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
    <article className="surface rounded-[1.75rem] p-6">
      <h2 className="text-2xl font-semibold tracking-tight text-white">{title}</h2>
      <p className="mt-4 text-sm leading-8 text-slate-300">{copy}</p>
    </article>
  );
}
