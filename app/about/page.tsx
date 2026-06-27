import Image from "next/image";

import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A technical operator wired for leverage, systems, and high-ambiguity execution."
        description="I am a 20-year-old builder with a computer science background who gravitates toward the work that sits between functions. AI, product, strategy, and operations are not separate tracks to me. They are parts of the same system."
      />
      <div className="site-shell pb-20">
        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="surface-panel rounded-[2rem] p-5">
            <Image
              src="/about-visual.jpg"
              alt="Portrait of Krrish Khanna"
              width={814}
              height={1448}
              className="h-full rounded-[1.5rem] object-cover"
              priority
            />
          </div>
          <div className="surface-panel rounded-[2rem] p-8 md:p-10">
            <div className="space-y-5 text-base leading-8 text-neutral-300">
              <p>
                I care about the kind of work where someone has to turn ambiguity into a
                system. That could mean shipping a product, designing an operating
                framework, defining metrics, or getting a messy workflow into a form that a
                team can actually use.
              </p>
              <p>
                Over time, that instinct has pulled me into enterprise data environments, AI
                infrastructure work, multilingual product systems, and product strategy
                writing. The common thread is not the surface domain. It is the desire to
                understand what is producing the outcome and how to improve it.
              </p>
              <p>
                Long term, I want to build companies. Right now, I want to learn inside
                ambitious teams where ownership is real, judgment matters, and execution is
                expected to be fast, rigorous, and high-leverage.
              </p>
            </div>
          </div>
        </section>

        <SectionShell
          eyebrow="How I'm Wired"
          title="The questions I return to are always the same."
          copy="What is the bottleneck. What is the highest-leverage action. What system is producing this result. How do we make it scale."
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              "I do my best work when I am trusted with an outcome and given room to figure out the path.",
              "I naturally connect product, analytics, operations, and technical execution instead of staying inside one lane.",
              "I think in leverage first. The goal is not more effort. The goal is a better system.",
              "I am deeply curious about how markets, products, organizations, and user behavior interact.",
            ].map((item) => (
              <div key={item} className="surface-panel rounded-[1.5rem] p-6 text-sm leading-7 text-neutral-300">
                {item}
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Global Lens"
          title="A perspective shaped by different systems."
          copy="The places that mattered most are the ones that changed how I think."
        >
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["India", "Scale, price sensitivity, and building under constraints."],
              ["Japan", "Precision, system quality, and process discipline."],
              ["Australia", "Autonomy and lean product-led execution."],
              ["Singapore", "Trust, standards, and infrastructure at scale."],
            ].map(([place, lesson]) => (
              <div key={place} className="surface-panel rounded-[1.5rem] p-6">
                <p className="mono-label text-[11px] text-neutral-500">{place}</p>
                <p className="mt-3 text-sm leading-7 text-neutral-300">{lesson}</p>
              </div>
            ))}
          </div>
        </SectionShell>
      </div>
    </>
  );
}
