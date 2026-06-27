import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import {
  experiences,
  leadership,
  selectedCredentials,
} from "@/lib/site-data";

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="Experience"
        title="How I turn ambiguity into structure."
        description="The roles below matter less as resume lines and more as proof of a repeatable pattern: understand the problem, define the system, align the stakeholders, and execute cleanly."
      />
      <div className="site-shell pb-20">
        <SectionShell
          eyebrow="Selected Roles"
          title="Experience framed through ambiguity, structure, and proof."
          copy="I care less about listing responsibilities and more about showing the pattern behind the work."
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
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="surface-subtle rounded-[1.25rem] p-4">
                    <p className="mono-label text-[11px] text-neutral-500">What was ambiguous</p>
                    <p className="mt-3 text-sm leading-7 text-neutral-300">{experience.ambiguity}</p>
                  </div>
                  <div className="surface-subtle rounded-[1.25rem] p-4">
                    <p className="mono-label text-[11px] text-neutral-500">What I structured</p>
                    <p className="mt-3 text-sm leading-7 text-neutral-300">{experience.structured}</p>
                  </div>
                  <div className="surface-subtle rounded-[1.25rem] p-4">
                    <p className="mono-label text-[11px] text-neutral-500">What changed</p>
                    <p className="mt-3 text-sm leading-7 text-neutral-300">{experience.changed}</p>
                  </div>
                  <div className="surface-subtle rounded-[1.25rem] p-4">
                    <p className="mono-label text-[11px] text-neutral-500">What it proved</p>
                    <p className="mt-3 text-sm leading-7 text-neutral-300">{experience.proved}</p>
                  </div>
                </div>
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
          eyebrow="Leadership & Global Programs"
          title="Signal that supports the operating narrative without turning into a certificate wall."
          copy="These programs and roles are included because they strengthen the story around leadership, execution, and global perspective."
        >
          <div className="grid gap-5 lg:grid-cols-2">
            {leadership.map((item) => (
              <article key={item.title} className="surface-panel rounded-[1.75rem] p-6">
                <p className="mono-label text-[11px] text-neutral-500">{item.category}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-neutral-300">{item.detail}</p>
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Selected Credentials"
          title="Kept intentional and secondary."
          copy="Only the most relevant credentials are featured here. The main proof still comes from work, writing, and shipped systems."
        >
          <div className="grid gap-5 lg:grid-cols-2">
            {selectedCredentials.map((item) => (
              <article key={item.title} className="surface-panel rounded-[1.75rem] p-6">
                <p className="mono-label text-[11px] text-neutral-500">{item.category}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-neutral-300">{item.detail}</p>
              </article>
            ))}
          </div>
        </SectionShell>

      </div>
    </>
  );
}
