"use client";

import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site-data";
import { usePortfolioMode } from "@/lib/use-portfolio-mode";

export default function ContactPage() {
  const mode = usePortfolioMode();
  const isAiMode = mode === "ai";

  const content = isAiMode
    ? {
        title: "If the work needs applied AI systems, research-minded execution, and clean shipping, let’s talk.",
        description:
          "I’m especially interested in Applied AI, AI Systems, research engineering, product-minded ML, and AI-native startup opportunities where technical judgment and execution both matter.",
        emailCopy:
          "Email is the fastest path for applied AI roles, research engineering conversations, or product-minded AI system work.",
        cta: "Discuss AI work",
        focusAreas: [
          "Applied AI",
          "AI Systems",
          "Research Engineering",
          "Computer Vision & NLP",
          "AI-native startups",
        ],
      }
    : {
        title: "If the work needs structure, momentum, and ownership, let’s talk.",
        description:
          "I’m especially interested in Founder’s Office, Product, Strategy & Operations, and TPM opportunities where ownership is real and the problems are still a little messy.",
        emailCopy:
          "Email is the fastest path for opportunities, operator roles, or product strategy conversations.",
        cta: "Send an email",
        focusAreas: [
          "Founder's Office",
          "Technical Operator",
          "Product & Strategy",
          "Technical Program Management",
          "AI-native startups",
        ],
      };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={content.title}
        description={content.description}
      />
      <div className="site-shell grid gap-5 pb-20 md:grid-cols-2">
        <article className="surface-panel rounded-[1.75rem] p-8">
          <p className="mono-label text-[11px] text-neutral-500">Direct</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">{site.email}</h2>
          <p className="mt-4 text-sm leading-7 text-neutral-300">{content.emailCopy}</p>
          <a
            href={`mailto:${site.email}`}
            className="button-primary mt-8 inline-flex rounded-full px-5 py-3 text-sm font-medium"
          >
            {content.cta}
          </a>
        </article>
        <article className="surface-panel rounded-[1.75rem] p-8">
          <p className="mono-label text-[11px] text-neutral-500">Focus Areas</p>
          <div className="mt-4 grid gap-3">
            {content.focusAreas.map((item) => (
              <div key={item} className="surface-subtle rounded-[1.25rem] px-4 py-3 text-sm text-neutral-300">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {site.socials
              .filter((item) => item.href)
              .map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href?.startsWith("http") ? "_blank" : undefined}
                  rel={item.href?.startsWith("http") ? "noreferrer" : undefined}
                  className="button-secondary rounded-full px-4 py-2 text-sm font-medium text-white"
                >
                  {item.label}
                </a>
              ))}
          </div>
        </article>
      </div>
    </>
  );
}
