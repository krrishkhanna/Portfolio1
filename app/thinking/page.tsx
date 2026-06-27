import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import { strategyMemos, writing } from "@/lib/site-data";

const operatingPrinciples = [
  "Start with the problem, not the technology.",
  "Every feature should move a metric.",
  "Ambiguity is where interesting work happens.",
  "Measure before optimizing.",
  "Simplicity beats unnecessary complexity.",
  "AI should reduce cognitive load, not add to it.",
  "Good systems outlast clever hacks.",
];

const decisionFrames = [
  ["RICE / ICE", "When I need to prioritize multiple opportunities quickly and make tradeoffs visible."],
  ["JTBD", "When I need to understand what outcome the user is actually hiring the product to produce."],
  ["North Star", "When a team needs one metric that keeps execution aligned instead of drifting into activity."],
  ["Tradeoff Analysis", "When the right answer depends on competing constraints like speed, complexity, risk, or adoption."],
  ["Cost vs Latency", "When AI or infrastructure decisions need to balance user experience, reliability, and economics."],
  ["Product Intuition", "When incomplete information still requires a call and judgment matters more than perfect certainty."],
];

const aiApproach = [
  "Understand the business problem",
  "Understand the data",
  "Build the simplest model",
  "Evaluate",
  "Deploy",
  "Measure",
  "Iterate",
];

const learningLoop = ["Read", "Deconstruct", "Build", "Benchmark", "Document", "Ship"];

const changedMind = [
  [
    "Bigger models are not always the answer.",
    "I care more now about evaluation quality, workflow fit, and whether the system is reliable enough to trust.",
  ],
  [
    "Features are not the same as progress.",
    "I optimize more for customer outcomes, time-to-value, and leverage than for shipping the most surface area.",
  ],
  [
    "Clever architecture is not automatically good architecture.",
    "The better system is usually the one that stays understandable, measurable, and easy to evolve.",
  ],
];

export default function ThinkingPage() {
  return (
    <>
      <PageHero
        eyebrow="How I Think"
        title="Decision-making, principles, and the operating logic behind the work."
        description="Projects show what I built. Experience shows where I worked. This page explains how I think: what kinds of problems I like, how I make decisions, how I approach AI, and how I keep learning."
      />
      <div className="site-shell space-y-10 pb-20">
        <SectionShell
          eyebrow="What Problems I Like Solving"
          title="I enjoy problems that sit between technology, business, execution, people, and systems."
          copy="The most interesting work usually has no single correct answer. It lives in the spaces where the goal is important, the inputs are incomplete, and the system still needs to be shaped."
        >
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {["Technology", "Business", "Execution", "People", "Systems"].map((item) => (
              <article key={item} className="surface-panel glass-panel liquid-hover rounded-[1.75rem] p-6">
                <h2 className="text-2xl font-semibold tracking-tight text-white">{item}</h2>
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Operating Principles"
          title="The rules I try to follow."
          copy="These are the principles that help me stay grounded when the environment is messy or the brief is still evolving."
        >
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {operatingPrinciples.map((item) => (
              <article key={item} className="surface-panel glass-panel liquid-hover rounded-[1.75rem] p-6">
                <p className="text-sm leading-7 text-neutral-300">{item}</p>
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="How I Make Decisions"
          title="Frameworks are useful when they clarify the decision, not when they become theater."
          copy="I use different lenses depending on the kind of uncertainty I am dealing with."
        >
          <div className="grid gap-5 lg:grid-cols-2">
            {decisionFrames.map(([title, copy]) => (
              <article key={title} className="surface-panel glass-panel liquid-hover rounded-[1.75rem] p-6">
                <h2 className="text-2xl font-semibold tracking-tight text-white">{title}</h2>
                <p className="mt-4 text-sm leading-7 text-neutral-300">{copy}</p>
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="How I Approach AI"
          title="Applied AI should reduce confusion, not create more of it."
          copy="I care more about whether an AI system solves a real workflow problem cleanly than whether it uses the trendiest stack."
        >
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {aiApproach.map((step, index) => (
              <article key={step} className="surface-panel glass-panel liquid-hover rounded-[1.5rem] p-5">
                <p className="mono-label text-[11px] text-neutral-500">Step {index + 1}</p>
                <p className="mt-3 text-sm leading-7 text-neutral-300">{step}</p>
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="How I Learn"
          title="When I enter a new domain, I try to close the loop quickly."
          copy="The goal is not just to consume information. The goal is to turn it into judgment, benchmarks, and shipped work."
        >
          <div className="grid gap-3 md:grid-cols-3 xl:grid-cols-6">
            {learningLoop.map((step) => (
              <article key={step} className="surface-panel glass-panel liquid-hover rounded-[1.5rem] p-5 text-center">
                <p className="text-sm leading-7 text-neutral-300">{step}</p>
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Things I've Changed My Mind About"
          title="Growth is often visible in the tradeoffs you stop making."
          copy="A useful operating system keeps evolving as the work gets more real."
        >
          <div className="grid gap-5 lg:grid-cols-3">
            {changedMind.map(([title, copy]) => (
              <article key={title} className="surface-panel glass-panel liquid-hover rounded-[1.75rem] p-6">
                <h2 className="text-2xl font-semibold tracking-tight text-white">{title}</h2>
                <p className="mt-4 text-sm leading-7 text-neutral-300">{copy}</p>
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Now"
          title="What I am currently building, learning, and exploring."
          copy="This section is intentionally short. It is meant to give a founder or hiring manager a current snapshot."
        >
          <div className="grid gap-5 lg:grid-cols-3">
            {[
              ["Building", "AI-native products and workflow systems that turn ambiguous operating problems into structured tools."],
              ["Learning", "More about evaluation, deployment reliability, and how AI systems behave once they leave the notebook."],
              ["Exploring", "How product thinking, AI systems, and founder-style execution can reinforce each other in early-stage teams."],
            ].map(([title, copy]) => (
              <article key={title} className="surface-panel glass-panel liquid-hover rounded-[1.75rem] p-6">
                <p className="mono-label text-[11px] text-neutral-500">{title}</p>
                <p className="mt-4 text-sm leading-7 text-neutral-300">{copy}</p>
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Related Work"
          title="Where the same thinking becomes visible in practice."
          copy="If you want to see these principles expressed through memos and shipped work, start here."
        >
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {writing.map((piece) => (
              <Link
                key={piece.slug}
                href={`/writing/${piece.slug}`}
                className="surface-panel glass-panel liquid-hover rounded-[1.75rem] p-6"
              >
                <p className="mono-label text-[11px] text-neutral-500">
                  {piece.category} • {piece.readTime}
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">{piece.title}</h2>
                <p className="mt-4 text-sm leading-7 text-neutral-300">{piece.summary}</p>
              </Link>
            ))}
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {strategyMemos.map((memo) => (
              <article key={memo.company} className="surface-panel glass-panel liquid-hover rounded-[1.75rem] p-6">
                <p className="mono-label text-[11px] text-neutral-500">{memo.theme}</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">{memo.company}</h2>
                <p className="mt-4 text-sm leading-7 text-neutral-300">{memo.keyQuestion}</p>
              </article>
            ))}
          </div>
        </SectionShell>
      </div>
    </>
  );
}
