import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import { proofCards } from "@/lib/site-data";

const sections = [
  "Research & Technical Work",
  "Industry Experience",
  "Shipped Products",
  "Leadership & Global Programs",
  "Awards & Recognition",
  "Selected Credentials",
] as const;

export default function ProofOfWorkPage() {
  const missingProofs = proofCards.filter((item) => item.proofStatus === "missing");

  return (
    <>
      <PageHero
        eyebrow="Proof of Work"
        title="Curated evidence behind the operating narrative."
        description="This is not a certificates page. It is a selective proof layer showing the work, shipped systems, leadership programs, and credentials that best support the portfolio, with clickable documents where available."
      />
      <div className="site-shell space-y-10 pb-20">
        {sections.map((section) => {
          const items = proofCards.filter((item) => item.category === section);

          if (!items.length) {
            return null;
          }

          return (
            <SectionShell
              key={section}
              eyebrow={section}
              title={section}
              copy="Each card includes what the proof is, why it matters, and what part of the broader story it strengthens."
            >
              <div className="grid gap-5 lg:grid-cols-2">
                {items.map((item) => (
                  <article key={item.title} className="surface-panel card-hover rounded-[1.75rem] p-6">
                    <p className="mono-label text-[11px] text-neutral-500">{item.category}</p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">{item.title}</h2>
                    <p className="mt-4 text-sm leading-7 text-neutral-300">{item.explanation}</p>
                    <div className="mt-5 grid gap-3">
                      <div className="surface-subtle rounded-[1.25rem] p-4">
                        <p className="mono-label text-[11px] text-neutral-500">Why it matters</p>
                        <p className="mt-3 text-sm leading-7 text-neutral-300">{item.whyItMatters}</p>
                      </div>
                      <div className="surface-subtle rounded-[1.25rem] p-4">
                        <p className="mono-label text-[11px] text-neutral-500">Related theme</p>
                        <p className="mt-3 text-sm leading-7 text-neutral-300">{item.relatedTheme}</p>
                      </div>
                      {item.asset ? (
                        <div className="surface-subtle rounded-[1.25rem] p-4">
                          <p className="mono-label text-[11px] text-neutral-500">Proof source</p>
                          <p className="mt-3 text-sm leading-7 text-neutral-300">{item.asset}</p>
                        </div>
                      ) : null}
                      {item.proofStatus === "missing" && item.missingLabel ? (
                        <div className="surface-subtle rounded-[1.25rem] border border-amber-400/20 p-4">
                          <p className="mono-label text-[11px] text-amber-300">Document needed</p>
                          <p className="mt-3 text-sm leading-7 text-neutral-300">{item.missingLabel}</p>
                        </div>
                      ) : null}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
                      {item.docHref ? (
                        <a
                          href={item.docHref}
                          target="_blank"
                          rel="noreferrer"
                          className="button-primary inline-flex rounded-full px-5 py-3 text-sm font-medium"
                        >
                          Open document
                        </a>
                      ) : null}
                      {item.githubHref ? (
                        <a
                          href={item.githubHref}
                          target="_blank"
                          rel="noreferrer"
                          className="button-secondary inline-flex rounded-full px-5 py-3 text-sm font-medium text-white"
                        >
                          Open GitHub
                        </a>
                      ) : null}
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="button-secondary inline-flex rounded-full px-5 py-3 text-sm font-medium text-white"
                        >
                          Open live proof
                        </a>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </SectionShell>
          );
        })}

        {missingProofs.length ? (
          <SectionShell
            eyebrow="Missing Proof Queue"
            title="Documents to add next."
            copy="Send these whenever you have them, and they can be turned into clickable proof documents immediately."
          >
            <div className="grid gap-5 lg:grid-cols-2">
              {missingProofs.map((item) => (
                <article key={item.title} className="surface-panel rounded-[1.75rem] p-6">
                  <p className="mono-label text-[11px] text-neutral-500">{item.category}</p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">{item.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-neutral-300">{item.missingLabel}</p>
                </article>
              ))}
            </div>
          </SectionShell>
        ) : null}
      </div>
    </>
  );
}
