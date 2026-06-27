"use client";

import Image from "next/image";
import Link from "next/link";

import { ProjectCard } from "@/components/project-card";
import { SectionShell } from "@/components/section-shell";
import {
  aiLabCapabilities,
  experiences,
  impactStats,
  proofCards,
  projects,
  researchHighlights,
  resumeVariants,
  site,
  strategyMemos,
} from "@/lib/site-data";
import { usePortfolioMode } from "@/lib/use-portfolio-mode";

export default function HomePage() {
  const mode = usePortfolioMode();
  const isAiMode = mode === "ai";

  const hero = isAiMode
    ? {
        title: "Building Intelligent Systems. Applying Machine Learning. Shipping Production AI.",
        subtitle:
          "I build applied AI systems across machine learning, deep learning, NLP, computer vision, RAG, GenAI, data science, and enterprise deployment.",
        ctas: [
          { href: "/ai-lab", label: "View AI Lab", primary: true },
          { href: "/projects", label: "View AI Projects" },
          { href: "/resume", label: "Download Applied AI Resume" },
        ],
        focus: [
          ["GenAI Applications", "RAG, semantic search, vector databases, and enterprise knowledge systems."],
          ["ML & Deep Learning", "NLP, OCR, model evaluation, benchmarking, and applied AI iteration."],
          ["AI Systems & Deployment", "APIs, monitoring, inference tradeoffs, and production workflow reliability."],
        ],
      }
    : {
        title: "Building Products. Designing Systems. Driving Execution.",
        subtitle:
          "I solve ambiguous business problems by combining product thinking, AI, systems design, analytics, and execution.",
        ctas: [
          { href: "/projects", label: "View Product Work", primary: true },
          { href: "/proof-of-work", label: "View Proof of Work" },
          { href: "/resume", label: "Download Operator Resume" },
        ],
        focus: [
          ["Product Strategy", "Investment-style product memos on growth loops, retention, monetization, and KPI logic."],
          ["Execution Systems", "KPMG, Git Software, and VeriLoad as structured systems built from ambiguity."],
          ["Founder’s Office Signal", "Ownership, prioritization, stakeholder communication, and business execution."],
        ],
      };

  const featuredProjects = isAiMode
    ? ["vachan", "lucid-ai", "sebscan", "veriload", "odinsub"]
        .map((slug) => projects.find((item) => item.slug === slug))
        .filter((item): item is (typeof projects)[number] => Boolean(item))
    : ["product-strategy-portfolio", "odinsub", "veriload", "lucid-ai"]
        .map((slug) => projects.find((item) => item.slug === slug))
        .filter((item): item is (typeof projects)[number] => Boolean(item));

  const featuredProofs = isAiMode
    ? proofCards.filter((item) =>
        ["Git Software Technologies", "Lucid AI", "Vachan", "SebScan"].includes(item.title),
      )
    : proofCards.filter((item) =>
        ["KPMG India", "VeriLoad", "McKinsey Forward Program", "Waseda University Exchange"].includes(item.title),
      );

  const highlightedResume = resumeVariants.find((item) => item.track === mode) ?? resumeVariants[0];

  return (
    <div className="page-space">
      <div className="site-shell space-y-12">
        <section className="hero-glow overflow-hidden rounded-[2rem] border border-white/10 bg-black/70 px-6 py-8 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl md:px-10 md:py-12">
          <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="space-y-7">
              <span className="eyebrow motion-rise">
                {isAiMode ? "AI-native Technical Operator" : site.title}
              </span>
              <div className="space-y-5">
                <p className="mono-label motion-rise motion-delay-1 text-xs text-neutral-500">
                  {isAiMode
                    ? "Applied AI × GenAI × Systems × Deployment"
                    : site.subtitle}
                </p>
                <h1 className="motion-rise motion-delay-2 page-title max-w-5xl text-white">
                  {site.name}
                  <span className="mt-3 block gradient-text">{hero.title}</span>
                </h1>
                <p className="motion-rise motion-delay-3 max-w-3xl text-base leading-8 text-neutral-300 md:text-lg">
                  {hero.subtitle}
                </p>
                <p className="motion-rise motion-delay-4 text-sm font-medium text-neutral-200">
                  {site.positioningLine}
                </p>
              </div>
              <div className="motion-rise motion-delay-5 flex flex-wrap gap-3">
                {hero.ctas.map((cta) => (
                  <Link
                    key={cta.label}
                    href={cta.href}
                    className={`rounded-full px-5 py-3 text-sm font-medium ${
                      cta.primary ? "button-primary orbital-chip" : "button-secondary text-white"
                    }`}
                  >
                    {cta.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="motion-rise motion-delay-4 flex flex-col gap-4">
              <div className="mx-auto w-full max-w-[430px] surface-panel shine-border vision-frame glass-panel media-frame overflow-hidden rounded-[2rem]">
                <div className="relative min-h-[560px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_48%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent)] lg:min-h-[620px]">
                  <Image
                    src="/home-portrait-2026.png"
                    alt="Portrait of Krrish Khanna on the homepage"
                    fill
                    className={`object-cover transition-transform duration-700 ease-out hover:scale-[1.01] ${
                      isAiMode ? "object-[center_14%]" : "object-[center_12%]"
                    }`}
                    priority
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),transparent_28%,rgba(0,0,0,0.16)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/55 to-transparent" />
                </div>
              </div>

              <div className="surface-panel glass-panel rounded-[1.75rem] p-5">
                <div className="flex items-center justify-between gap-4 border-b border-white/8 pb-4">
                  <div>
                    <p className="mono-label text-[11px] text-neutral-500">Mode</p>
                    <p className="mt-2 text-xl font-semibold tracking-tight text-white">
                      {isAiMode ? "AI Lab Mode" : "Operator Mode"}
                    </p>
                  </div>
                  <div className="micro-grid h-14 w-14 rounded-2xl border border-white/10" />
                </div>
                <div className="mt-4 grid gap-3">
                  {hero.focus.map(([title, copy], index) => (
                    <div
                      key={title}
                      className={`surface-subtle liquid-hover rounded-[1.25rem] p-4 motion-rise motion-delay-${Math.min(index + 2, 5)}`}
                    >
                      <p className="text-sm font-medium text-white">{title}</p>
                      <p className="mt-2 text-sm leading-7 text-neutral-400">{copy}</p>
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
          copy="The point is not breadth for its own sake. The point is showing repeatable signal across products, systems, research, and execution."
        >
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {impactStats.map((stat) => (
              <div
                key={stat.label}
                className="surface-panel card-hover rounded-[1.5rem] px-5 py-5 text-sm font-medium text-neutral-200"
              >
                <span className="mono-label text-[11px] text-neutral-500">Signal</span>
                <p className="mt-3 text-xl font-semibold text-white">{stat.value}</p>
                <p className="mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow={isAiMode ? "AI Lab" : "Operator Mode"}
          title={isAiMode ? "AI capabilities, systems, and deployment thinking." : "Products, systems, and execution that prove the positioning."}
          copy={
            isAiMode
              ? "The AI track emphasizes production AI systems, model behavior, reliability, and enterprise deployment."
              : "The operator track emphasizes ownership, ambiguity, customer understanding, tradeoffs, and cross-functional delivery."
          }
        >
          <div className="grid gap-5 lg:grid-cols-3">
            {hero.focus.map(([title, copy]) => (
              <article key={title} className="surface-panel card-hover rounded-[1.75rem] p-6">
                <p className="mono-label text-[11px] text-neutral-500">{isAiMode ? "AI focus" : "Operator focus"}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-neutral-300">{copy}</p>
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow={isAiMode ? "Research & Optimization" : "Selected Experience"}
          title={
            isAiMode
              ? "Research-adjacent work that differentiates the AI systems story."
              : "Ambiguous environments where structure, ownership, and delivery mattered."
          }
          copy={
            isAiMode
              ? "This is where experimentation, technical recommendations, benchmarking, and applied AI execution become visible."
              : "Different environments, similar pattern: understand the mess, structure the work, align stakeholders, and deliver outcomes."
          }
        >
          <div className="grid gap-5 lg:grid-cols-3">
            {(isAiMode ? researchHighlights : experiences.slice(0, 3)).map((item) => (
              <article
                key={"company" in item ? item.company : item.title}
                className="surface-panel glass-panel card-hover rounded-[1.75rem] p-6"
              >
                <p className="mono-label text-[11px] text-neutral-500">
                  {"company" in item ? item.period : "Research signal"}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                  {"company" in item ? item.company : item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-neutral-300">
                  {"company" in item ? item.summary : item.detail}
                </p>
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow={isAiMode ? "Applied AI Systems" : "Products I've Built"}
          title={isAiMode ? "Applied AI systems across NLP, behavioral analytics, OCR, decision systems, and speech workflows." : "Products built across strategy, pricing, operations, AI, and execution."}
          copy={
            isAiMode
              ? "The strongest AI projects here are not model demos. They are workflow systems with measurable quality, latency, or trust implications."
              : "Every project is framed around the problem, insight, what got built, what changed, and what I would improve next."
          }
        >
          <div className="grid gap-5 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow={isAiMode ? "AI Lab Preview" : "Product Strategy Preview"}
          title={isAiMode ? "Core AI systems areas I build across." : "Memos that show product, operator, and strategy thinking."}
          copy={
            isAiMode
              ? "The AI track covers model systems, retrieval, deployment, and enterprise automation rather than isolated experimentation."
              : "These memos are where product strategy, user behavior, monetization, and operating leverage become more legible."
          }
        >
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {(isAiMode ? aiLabCapabilities.slice(0, 8) : strategyMemos.slice(0, 4)).map((item) =>
              typeof item === "string" ? (
                <article key={item} className="surface-panel card-hover rounded-[1.75rem] p-6">
                  <p className="mono-label text-[11px] text-neutral-500">AI capability</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">{item}</h3>
                </article>
              ) : (
                <article key={item.company} className="surface-panel card-hover rounded-[1.75rem] p-6">
                  <p className="mono-label text-[11px] text-neutral-500">{item.theme}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">{item.company}</h3>
                  <p className="mt-4 text-sm leading-7 text-neutral-300">{item.keyQuestion}</p>
                </article>
              ),
            )}
          </div>
          <div className="mt-6">
            <Link
              href={isAiMode ? "/ai-lab" : "/product-strategy"}
              className="button-secondary inline-flex rounded-full px-5 py-3 text-sm font-medium text-white"
            >
              {isAiMode ? "Open AI Lab" : "Explore Product Strategy"}
            </Link>
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Proof"
          title={isAiMode ? "Research, systems, and deployment proof." : "Recommendations, case studies, demos, and operating proof."}
          copy="Proof should answer why the claims are credible. This section keeps the strongest evidence close to the top."
        >
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featuredProofs.map((item) => (
              <article key={item.title} className="surface-panel card-hover rounded-[1.75rem] p-6">
                <p className="mono-label text-[11px] text-neutral-500">{item.category}</p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-neutral-300">{item.explanation}</p>
              </article>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/proof-of-work"
              className="button-primary inline-flex rounded-full px-5 py-3 text-sm font-medium"
            >
              Open Proof Vault
            </Link>
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Resume"
          title={isAiMode ? "Mode-aware resume surface." : "Role-shaped resumes for the operator track."}
          copy="The highlighted resume changes with the selected mode, but all variants stay available in one place."
        >
          <article className="surface-panel rounded-[1.75rem] p-6">
            <p className="mono-label text-[11px] text-neutral-500">Highlighted Resume</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
              {highlightedResume.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-neutral-300">{highlightedResume.description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {highlightedResume.file ? (
                <a
                  href={highlightedResume.file}
                  download
                  className="button-primary inline-flex rounded-full px-5 py-3 text-sm font-medium"
                >
                  Download Highlighted Resume
                </a>
              ) : null}
              <Link
                href="/resume"
                className="button-secondary inline-flex rounded-full px-5 py-3 text-sm font-medium text-white"
              >
                Open Resume Hub
              </Link>
            </div>
          </article>
        </SectionShell>
      </div>
    </div>
  );
}
