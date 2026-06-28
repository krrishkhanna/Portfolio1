import Image from "next/image";

import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="How I Think"
        title="Not a biography. The operating logic behind how I work."
        description="I enjoy problems that sit at the intersection of technology, business, execution, people, and systems, especially when there is no single correct answer and someone needs to bring structure."
      />
      <div className="site-shell pb-20">
        <section className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="surface-panel vision-frame glass-panel rounded-[2rem] p-5">
            <Image
              src="/krrish-khanna-profile.PNG"
              alt="Portrait of Krrish Khanna"
              width={1600}
              height={1600}
              className="h-full rounded-[1.5rem] object-cover object-center"
              priority
            />
          </div>
          <div className="surface-panel glass-panel rounded-[2rem] p-8 md:p-10">
            <div className="space-y-5 text-base leading-8 text-neutral-300">
              <p>
                I care less about being identified with one narrow function and more about
                being useful in environments where the work cuts across product,
                technology, strategy, analytics, and execution.
              </p>
              <p>
                I naturally ask why because I want to understand the reasoning behind a
                system before I try to improve it. That usually leads me toward messy
                workflows, unclear briefs, and situations where the path is still being
                figured out.
              </p>
              <p>
                The common thread across the work I enjoy is ownership. The interesting
                problems are usually the ones where someone has to connect the dots,
                simplify the moving parts, and keep momentum real.
              </p>
            </div>
          </div>
        </section>

        <SectionShell
          eyebrow="Core Questions"
          title="The questions I keep returning to are usually the useful ones."
          copy="What is the actual problem. What is the bottleneck. What decision matters most. What part of this system is doing more work than it should."
        >
          <div className="grid gap-5 md:grid-cols-2">
            {[
              "What problem is worth solving before we get attached to a tool or approach?",
              "Which metric or user outcome should actually move if this work is successful?",
              "What is the simplest system that can reliably produce the result we want?",
              "What tradeoff are we implicitly making if we choose speed, complexity, cost, or quality?",
            ].map((item) => (
              <div key={item} className="surface-panel glass-panel liquid-hover rounded-[1.5rem] p-6 text-sm leading-7 text-neutral-300">
                {item}
              </div>
            ))}
          </div>
        </SectionShell>
      </div>
    </>
  );
}
