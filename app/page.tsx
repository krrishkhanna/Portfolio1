import { PerspectiveSwitch } from "@/components/perspective-switch";
import Image from "next/image";
import Link from "next/link";

import { ProjectCard } from "@/components/project-card";
import { SectionShell } from "@/components/section-shell";
import {
  experiences,
  impactStats,
  leadership,
  projects,
  selectedCertifications,
  site,
  strategyMemos,
  writing,
} from "@/lib/site-data";

export default function HomePage() {
  return (
    <div className="page-space">
      <div className="site-shell space-y-12">
        <section className="hero-glow overflow-hidden rounded-[2rem] border border-white/10 bg-black/70 px-6 py-8 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl md:px-10 md:py-12">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="space-y-7">
              <span className="eyebrow motion-rise">Technical Operator</span>
              <div className="space-y-5">
                <p className="mono-label motion-rise motion-delay-1 text-xs text-neutral-500">
                  {site.subtitle}
                </p>
                <h1 className="motion-rise motion-delay-2 max-w-5xl text-5xl font-semibold tracking-[-0.08em] text-white md:text-7xl md:leading-[0.92]">
                  Krrish Khanna
                  <span className="mt-3 block gradient-text">{site.statement}</span>
                </h1>
                <p className="motion-rise motion-delay-3 max-w-3xl text-base leading-8 text-neutral-300 md:text-lg">
                  I work at the intersection of AI, product, strategy, and operations,
                  turning ambiguous problems into structured systems, products, and
                  execution workflows.
                </p>
              </div>
              <div className="motion-rise motion-delay-4 flex flex-wrap gap-3">
                <Link href="/projects" className="button-primary rounded-full px-5 py-3 text-sm font-medium">
                  View Projects
                </Link>
                <Link href="/resume" className="button-secondary rounded-full px-5 py-3 text-sm font-medium text-white">
                  View Resume
                </Link>
                <Link
                  href="/product-strategy"
                  className="button-secondary rounded-full px-5 py-3 text-sm font-medium text-white"
                >
                  Product Strategy Portfolio
                </Link>
              </div>
              <div className="motion-rise motion-delay-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {[
                  "500k+ records processed",
                  "1.5-2x faster LLM inference",
                  "4+ shipped product projects",
                  "10+ product strategy memos",
                ].map((item) => (
                  <div key={item} className="surface-subtle rounded-2xl px-4 py-4 text-sm text-neutral-300">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="motion-rise motion-delay-4 flex flex-col gap-4">
              <div className="surface-panel shine-border overflow-hidden rounded-[1.75rem]">
                <div className="grid gap-0 md:grid-cols-[0.92fr_1.08fr]">
                  <div className="relative min-h-[320px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_48%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]">
                    <Image
                      src="/home-visual.png"
                      alt="Portrait of Krrish Khanna"
                      fill
                      className="object-cover object-center"
                      priority
                    />
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/45 to-transparent" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-4 border-b border-white/8 pb-4">
                      <div>
                        <p className="mono-label text-[11px] text-neutral-500">Positioning</p>
                        <p className="mt-2 text-xl font-semibold tracking-tight text-white">
                          Founder&apos;s Office-ready operator
                        </p>
                      </div>
                      <div className="micro-grid h-14 w-14 rounded-2xl border border-white/10" />
                    </div>
                    <div className="mt-4 space-y-4">
                      {[
                        "AI x Product x Strategy x Operations",
                        "Builds systems out of ambiguity",
                        "Comfortable across technical and business layers",
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-3 text-sm leading-7 text-neutral-300">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/80" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="surface-panel rounded-[1.75rem] p-5">
                <div className="flex items-center justify-between gap-4 border-b border-white/8 pb-4">
                  <div>
                    <p className="mono-label text-[11px] text-neutral-500">Current Focus</p>
                    <p className="mt-2 text-xl font-semibold tracking-tight text-white">
                      Shipping, systems, and strategic thinking
                    </p>
                  </div>
                  <div className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-neutral-400">
                    2026
                  </div>
                </div>
                <div className="mt-4 space-y-4">
                  {[
                    "Shipped products across translation, OCR, and validation workflows.",
                    "Building execution systems that convert ambiguity into structure.",
                    "Writing strategy memos with priorities, risks, and operating tradeoffs.",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm leading-7 text-neutral-300">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/80" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionShell
          eyebrow="Impact Snapshot"
          title="Execution evidence, not generic claims."
          copy="The signal here is operating leverage: shipping under ambiguity, building systems, and making messy environments measurable."
        >
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {impactStats.map((stat, index) => (
              <div
                key={stat}
                className={`surface-panel card-hover rounded-[1.5rem] px-5 py-5 text-sm font-medium text-neutral-200 motion-rise motion-delay-${(index % 5) + 1}`}
              >
                <span className="mono-label text-[11px] text-neutral-500">Signal</span>
                <p className="mt-3">{stat}</p>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Selected Experience"
          title="Built across enterprise ops, AI infrastructure, and product systems."
          copy="A cross-functional path by design: learning how technology, operations, and decision-making connect inside real environments."
        >
          <div className="grid gap-5 lg:grid-cols-3">
            {experiences.map((experience) => (
              <article key={experience.company} className="surface-panel card-hover rounded-[1.75rem] p-6">
                <p className="mono-label text-[11px] text-neutral-500">{experience.period}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                  {experience.company}
                </h3>
                <p className="mt-1 text-sm text-neutral-500">{experience.role}</p>
                <p className="mt-4 text-sm leading-7 text-neutral-200">{experience.summary}</p>
                <ul className="mt-5 space-y-2 text-sm text-neutral-400">
                  {experience.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Featured Projects"
          title="Products shipped from problem framing to live systems."
          copy="Every flagship project is structured around the same questions: what was broken, what mattered, what got built, and what changed as a result."
        >
          <div className="grid gap-5 lg:grid-cols-2">
            {projects.slice(0, 5).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </SectionShell>

        <PerspectiveSwitch />

        <SectionShell
          eyebrow="Product Strategy Portfolio"
          title="Market analysis translated into operator decisions."
          copy="Noticing patterns is useful. Turning them into priorities, risks, and execution moves is where the real strategic value appears."
        >
          <div className="grid gap-5 md:grid-cols-2">
            {strategyMemos.slice(0, 2).map((memo) => (
              <article key={memo.company} className="surface-panel card-hover rounded-[1.75rem] p-6">
                <p className="mono-label text-[11px] text-neutral-500">{memo.region}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">{memo.company}</h3>
                <p className="mt-4 text-sm leading-7 text-neutral-200">{memo.operatorTakeaway}</p>
                <Link
                  href="/product-strategy"
                  className="button-secondary mt-6 inline-flex rounded-full px-4 py-2 text-sm font-medium text-white"
                >
                  View the portfolio
                </Link>
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Writing / Thinking"
          title="Short essays on leverage, judgment, and systems."
          copy="The through-line across the writing is simple: speed matters, but only when paired with clarity, sequencing, and taste."
        >
          <div className="grid gap-5 md:grid-cols-3">
            {writing.map((piece) => (
              <Link
                key={piece.slug}
                href={`/writing/${piece.slug}`}
                className="surface-panel card-hover rounded-[1.75rem] p-6"
              >
                <p className="mono-label text-[11px] text-neutral-500">
                  {piece.category} • {piece.readTime}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">{piece.title}</h3>
                <p className="mt-4 text-sm leading-7 text-neutral-200">{piece.summary}</p>
              </Link>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Leadership & Recognition"
          title="High-signal leadership, certifications, and credibility markers."
          copy="I’m intentionally selective here. The goal is signal, not volume."
        >
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="surface-panel rounded-[1.75rem] p-6">
              <p className="mono-label text-[11px] text-neutral-500">Leadership</p>
              <div className="mt-5 grid gap-4">
                {leadership.map((item) => (
                  <div key={item.title} className="surface-subtle rounded-[1.25rem] p-4">
                    <p className="text-sm font-medium text-white">{item.title}</p>
                    <p className="mt-2 text-sm leading-7 text-neutral-400">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="surface-panel rounded-[1.75rem] p-6">
              <p className="mono-label text-[11px] text-neutral-500">Selected Certifications</p>
              <div className="mt-5 grid gap-4">
                {selectedCertifications.map((item) => (
                  <div key={item.title} className="surface-subtle rounded-[1.25rem] p-4">
                    <p className="text-sm font-medium text-white">{item.title}</p>
                    <p className="mt-2 text-sm leading-7 text-neutral-400">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionShell>

        <div className="section-rule" />

        <section className="surface-panel rounded-[2rem] p-8 md:p-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-4">
              <span className="eyebrow">Contact CTA</span>
              <h2 className="section-title">Looking for an operator who can move from ambiguity to execution.</h2>
              <p className="section-copy">
                I&apos;m most interested in roles where ownership is real, the problems are not
                fully defined yet, and the work sits between technology, product, and strategy.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="button-primary rounded-full px-5 py-3 text-sm font-medium">
                Start a conversation
              </Link>
              <a
                href="mailto:krrishkhanna08@gmail.com"
                className="button-secondary rounded-full px-5 py-3 text-sm font-medium text-white"
              >
                Email directly
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
