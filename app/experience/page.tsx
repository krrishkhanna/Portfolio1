import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import { experiences, leadership, selectedCertifications } from "@/lib/site-data";

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="Experience"
        title="Three different environments. One consistent pattern of ownership."
        description="The path spans enterprise systems, AI infrastructure, and AI-native workflow design, but the value proposition stays the same: define the bottleneck, build the system, and move the work forward."
      />
      <div className="site-shell pb-20">
        <SectionShell
          eyebrow="Selected Roles"
          title="Operating across business ambiguity and technical complexity."
          copy="Each role built a different part of the operator toolkit: stakeholder judgment, system design, performance thinking, and execution speed."
        >
          <div className="space-y-5">
            {experiences.map((experience) => (
              <article key={experience.company} className="surface-panel rounded-[1.75rem] p-8">
                <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="mono-label text-[11px] text-neutral-500">{experience.period}</p>
                    <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">
                      {experience.company}
                    </h2>
                    <p className="mt-1 text-neutral-500">{experience.role}</p>
                  </div>
                </div>
                <p className="mt-6 max-w-4xl text-base leading-8 text-neutral-300">{experience.summary}</p>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {experience.highlights.map((item) => (
                    <div key={item} className="surface-subtle rounded-[1.25rem] p-4 text-sm text-neutral-300">
                      {item}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Leadership & Recognition"
          title="Signal that supports the operating narrative."
          copy="The emphasis here is intentional: a few strong leadership and certification markers instead of a long undifferentiated list."
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="surface-panel rounded-[1.75rem] p-6">
              <p className="mono-label text-[11px] text-neutral-500">Leadership</p>
              <div className="mt-5 grid gap-4">
                {leadership.map((item) => (
                  <div key={item.title} className="surface-subtle rounded-[1.25rem] p-4">
                    <p className="text-sm font-medium text-white">{item.title}</p>
                    <p className="mt-2 text-sm leading-7 text-neutral-400">{item.detail}</p>
                  </div>
                ))}
              </div>
            </article>
            <article className="surface-panel rounded-[1.75rem] p-6">
              <p className="mono-label text-[11px] text-neutral-500">Selected Certifications</p>
              <div className="mt-5 grid gap-4">
                {selectedCertifications.map((item) => (
                  <div key={item.title} className="surface-subtle rounded-[1.25rem] p-4">
                    <p className="text-sm font-medium text-white">{item.title}</p>
                    <p className="mt-2 text-sm leading-7 text-neutral-400">{item.detail}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </SectionShell>
      </div>
    </>
  );
}
