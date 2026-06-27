"use client";

import { PageHero } from "@/components/page-hero";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/site-data";
import { usePortfolioMode } from "@/lib/use-portfolio-mode";

export default function ProjectsPage() {
  const mode = usePortfolioMode();
  const isAiMode = mode === "ai";

  const orderedProjects = (
    isAiMode
      ? ["vachan", "lucid-ai", "sebscan", "veriload", "odinsub", "product-strategy-portfolio"]
      : ["product-strategy-portfolio", "odinsub", "veriload", "lucid-ai", "vachan", "sebscan"]
  )
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is (typeof projects)[number] => Boolean(project));

  return (
    <>
      <PageHero
        eyebrow={isAiMode ? "Applied AI Systems" : "Products I've Built"}
        title={
          isAiMode
            ? "Applied AI systems across NLP, behavioral analytics, OCR, validation, and speech workflows."
            : "Products built across strategy, SaaS, operations, dashboards, and execution."
        }
        description={
          isAiMode
            ? "This mode frames the work through system design: signals, models, scoring, parsing, validation, forecasting, and production-minded workflows."
            : "This mode frames the work through customer understanding, product decisions, monetization, operating structure, and what it took to ship useful systems."
        }
      />
      <div className="site-shell grid gap-5 pb-20 lg:grid-cols-2">
        {orderedProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
