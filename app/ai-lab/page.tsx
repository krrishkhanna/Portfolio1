import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import { aiLabCapabilities, aiWorkflow, experiences, projects } from "@/lib/site-data";

export default function AiLabPage() {
  const aiProjects = ["vachan", "lucid-ai", "sebscan", "veriload", "odinsub"]
    .map((slug) => projects.find((item) => item.slug === slug))
    .filter((item): item is (typeof projects)[number] => Boolean(item));
  const aiExperience = experiences.filter((item) =>
    ["Samsung Research Institute", "Git Software Technologies"].includes(item.company),
  );

  return (
    <>
      <PageHero
        eyebrow="AI Lab"
        title="Applied AI systems across LLMs, retrieval, computer vision, enterprise automation, and deployment."
        description="This page reframes the same body of work through an AI systems lens: production readiness, model behavior, reliability, retrieval, benchmarking, and technical tradeoffs."
      />
      <div className="site-shell space-y-10 pb-20">
        <SectionShell
          eyebrow="What I Build"
          title="Production-minded AI capabilities."
          copy="The emphasis here is not just modeling. It is applied systems work that needs to perform in real workflows."
        >
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {aiLabCapabilities.map((item) => (
              <article key={item} className="surface-panel rounded-[1.75rem] p-6">
                <h2 className="text-2xl font-semibold tracking-tight text-white">{item}</h2>
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="AI Engineering Workflow"
          title="How I think about applied AI delivery."
          copy="A useful AI workflow is not just a model. It is the full path from business requirement to reliable monitoring."
        >
          <div className="grid gap-3 md:grid-cols-3 xl:grid-cols-4">
            {aiWorkflow.map((step, index) => (
              <article key={step} className="surface-panel rounded-[1.5rem] p-5">
                <p className="mono-label text-[11px] text-neutral-500">Step {index + 1}</p>
                <p className="mt-3 text-sm leading-7 text-neutral-300">{step}</p>
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="AI Experience"
          title="Where the AI systems work became tangible."
          copy="The strongest signal comes from places where experimentation, deployment, and system quality all mattered."
        >
          <div className="grid gap-5 lg:grid-cols-2">
            {aiExperience.map((item) => (
              <article key={item.company} className="surface-panel rounded-[1.75rem] p-6">
                <p className="mono-label text-[11px] text-neutral-500">{item.period}</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">{item.company}</h2>
                <p className="mt-2 text-sm text-neutral-500">{item.role}</p>
                <p className="mt-4 text-sm leading-7 text-neutral-300">{item.summary}</p>
                <div className="mt-5 grid gap-3">
                  {item.highlights.map((highlight) => (
                    <div key={highlight} className="surface-subtle rounded-[1.25rem] p-4 text-sm text-neutral-300">
                      {highlight}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="AI Projects"
          title="Applied AI projects with workflow impact."
          copy="These projects are strongest when evaluated as systems: latency, quality, observability, retrieval, and user trust."
        >
          <div className="grid gap-5 lg:grid-cols-3">
            {aiProjects.map((project) => (
              <article key={project.slug} className="surface-panel rounded-[1.75rem] p-6">
                <h2 className="text-2xl font-semibold tracking-tight text-white">{project.name}</h2>
                <p className="mt-4 text-sm leading-7 text-neutral-300">{project.built}</p>
                <p className="mt-4 text-sm leading-7 text-neutral-400">{project.improveNext}</p>
              </article>
            ))}
          </div>
        </SectionShell>
      </div>
    </>
  );
}
