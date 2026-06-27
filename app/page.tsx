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
          "I build production-ready intelligent systems across machine learning, deep learning, NLP, computer vision, RAG, GenAI, data science, and enterprise deployment.",
        ctas: [
          { href: "/ai-lab", label: "View AI Lab", primary: true },
          { href: "/projects", label: "View Applied AI Systems" },
          { href: "/resume", label: "Download Applied AI Resume" },
        ],
        focusTitle: "AI Lab Mode",
        focusAreas: [
          ["Focus", "ML, GenAI, systems, research"],
          ["Proof", "Vachan, Lucid AI, Samsung, Git Software"],
          ["Next click", "Open AI Lab"],
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
        focusTitle: "Operator Mode",
        focusAreas: [
          ["Focus", "Product, strategy, execution"],
          ["Proof", "Product Strategy, OdinSub, VeriLoad, KPMG"],
          ["Next click", "View Product Work"],
        ],
      };

  const featuredProjects = isAiMode
    ? ["vachan", "lucid-ai", "sebscan", "veriload", "odinsub"]
        .map((slug) => projects.find((item) => item.slug === slug))
        .filter((item): item is (typeof projects)[number] => Boolean(item))
    : ["product-strategy-portfolio", "odinsub", "veriload", "lucid-ai", "vachan", "sebscan"]
        .map((slug) => projects.find((item) => item.slug === slug))
        .filter((item): item is (typeof projects)[number] => Boolean(item));

  const proofStrip = isAiMode
    ? [
        { title: "Vachan", detail: "15K+ claims and 28% precision improvement", href: "/projects/vachan" },
        { title: "Lucid AI", detail: "Scoring, prediction, recommendations, and dashboard", href: "/projects/lucid-ai" },
        { title: "SebScan", detail: "87% parse accuracy and 75+ labels", href: "/projects/sebscan" },
        { title: "Samsung", detail: "1.5-2x inference speedup and 40% memory reduction", href: "/research" },
        { title: "Git Software", detail: "Enterprise RAG and 65% faster query-to-insight", href: "/experience" },
        { title: "MagicEraser", detail: "Research reproduction for diffusion-based object erasure", href: "/research/magiceraser" },
      ]
    : [
        { title: "Product Strategy", detail: "10+ investment-style product memos", href: "/product-strategy" },
        { title: "OdinSub", detail: "Live product with pricing, onboarding, and roadmap", href: "/projects/odinsub" },
        { title: "VeriLoad", detail: "91% reconciliation accuracy across 120+ scenarios", href: "/projects/veriload" },
        { title: "KPMG", detail: "500k+ records processed and stakeholder-facing delivery", href: "/experience" },
        { title: "Git Software", detail: "65% reduction in query-to-insight time", href: "/experience" },
        { title: "Samsung", detail: "1.5-2x inference speedup and 40% memory reduction", href: "/research" },
      ];

  const whyStay = isAiMode
    ? [
        "I do not only use AI. I connect AI to systems, deployment, and measurable workflow outcomes.",
        "I do not only show demos. I show architecture, proof, tradeoffs, and next iterations.",
        "I can move between research engineering, applied AI systems, and product-facing execution.",
        "I treat evaluation, reliability, and deployment as part of the product, not as afterthoughts.",
      ]
    : [
        "I do not only build projects. I document decisions, tradeoffs, and operating logic.",
        "I do not only use AI. I connect AI to products, systems, and measurable outcomes.",
        "I do not only show work. I show proof, architecture, and next iterations.",
        "I can switch between operator thinking and applied AI execution without losing clarity.",
      ];

  const recommendedPaths = isAiMode
    ? [
        ["Applied AI", "AI Lab -> Vachan -> Lucid AI -> Samsung -> Git Software"],
        ["Research", "Research -> Samsung -> R2C2 -> MagicEraser"],
        ["AI Product", "Lucid AI -> Vachan -> OdinSub -> Resume"],
      ]
    : [
        ["Founders", "Product Strategy -> VeriLoad -> OdinSub -> Thinking -> Proof"],
        ["Product", "Product Strategy -> OdinSub -> Lucid AI -> Vachan -> Resume"],
        ["TPM", "VeriLoad -> KPMG -> Samsung -> Thinking -> Proof"],
      ];

  const featuredProofs = isAiMode
    ? proofCards.filter((item) =>
        ["Samsung Research / PRISM", "MagicEraser - Research Reproduction", "Git Software Technologies", "Lucid AI"].includes(item.title),
      )
    : proofCards.filter((item) =>
        ["Odin / OdinSub", "VeriLoad", "KPMG India", "Lucid AI"].includes(item.title),
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
                  {isAiMode ? "Applied AI x GenAI x Systems x Deployment" : site.subtitle}
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
                    <p className="mt-2 text-xl font-semibold tracking-tight text-white">{hero.focusTitle}</p>
                  </div>
                  <div className="micro-grid h-14 w-14 rounded-2xl border border-white/10" />
                </div>
                <div className="mt-4 grid gap-3">
                  {hero.focusAreas.map(([title, copy], index) => (
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

        <section className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {proofStrip.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="surface-panel card-hover rounded-[1.5rem] p-5 transition"
            >
              <p className="mono-label text-[11px] text-neutral-500">Selected proof</p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-neutral-300">{item.detail}</p>
            </Link>
          ))}
        </section>

        <SectionShell
          eyebrow="What This Proves"
          title="Why this portfolio is different."
          copy="The goal is not to look broad for the sake of it. The goal is to make the thinking, systems, proof, and next click obvious early."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            {whyStay.map((item) => (
              <article key={item} className="surface-panel rounded-[1.5rem] p-5 text-sm leading-7 text-neutral-300">
                {item}
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Start Here"
          title="Recommended paths based on what you are evaluating."
          copy="A recruiter, founder, TPM manager, or AI hiring manager should know exactly where to click next."
        >
          <div className="grid gap-5 lg:grid-cols-3">
            {recommendedPaths.map(([title, path]) => (
              <article key={title} className="surface-panel rounded-[1.75rem] p-6">
                <p className="mono-label text-[11px] text-neutral-500">{title}</p>
                <p className="mt-4 text-sm leading-8 text-neutral-300">{path}</p>
              </article>
            ))}
          </div>
        </SectionShell>

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
            {(isAiMode
              ? [
                  ["Behavioral AI", "Lucid AI turns structured signals into scoring, recommendations, and weekly intelligence."],
                  ["Production Systems", "Vachan, Git Software, and Samsung show evaluation, retrieval, and deployment thinking."],
                  ["Research Layer", "Samsung, R2C2, and MagicEraser show optimization, benchmarking, and reproduction work."],
                ]
              : [
                  ["Product Strategy", "Investment-style memos show prioritization, growth logic, monetization, and tradeoff quality."],
                  ["Execution Systems", "KPMG, Git Software, and VeriLoad show structure under ambiguity and stakeholder-facing delivery."],
                  ["Founder Signal", "OdinSub, Lucid AI, and product framing show pricing, packaging, recommendations, and ownership."],
                ]).map(([title, copy]) => (
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
              : "Every featured card answers what it is, why it matters, what proof exists, and what to click next."
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
          title={isAiMode ? "Research, systems, and deployment proof." : "Proof of product, execution, and operating judgment."}
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
