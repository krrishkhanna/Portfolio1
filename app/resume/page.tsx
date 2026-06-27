"use client";

import { PageHero } from "@/components/page-hero";
import { resumeVariants } from "@/lib/site-data";
import { usePortfolioMode } from "@/lib/use-portfolio-mode";

export default function ResumePage() {
  const mode = usePortfolioMode();
  const sortedResumes = [...resumeVariants].sort((a, b) => {
    if (a.track === mode && b.track !== mode) return -1;
    if (b.track === mode && a.track !== mode) return 1;
    return 0;
  });

  return (
    <>
      <PageHero
        eyebrow="Resume"
        title="Resume Hub"
        description="Different resume variants emphasize different parts of the same profile. The highlighted version follows the currently selected portfolio mode."
      />
      <div className="site-shell pb-20">
        <div className="surface-panel mb-5 rounded-[1.75rem] p-6">
          <p className="mono-label text-[11px] text-neutral-500">Current Mode</p>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-neutral-300">
            {mode === "ai"
              ? "AI Lab Mode is active, so the Applied AI resume is surfaced first."
              : "Operator Mode is active, so Founder’s Office, Product, and TPM resumes are surfaced first."}
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {sortedResumes.map((resume) => (
            <article key={resume.title} className="surface-panel card-hover rounded-[1.75rem] p-6">
              <p className="mono-label text-[11px] text-neutral-500">
                {resume.track === "ai" ? "AI Track" : "Operator Track"}
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">{resume.title}</h2>
              <p className="mt-4 text-sm leading-7 text-neutral-300">{resume.description}</p>
              {resume.file ? (
                <a
                  href={resume.file}
                  download
                  className="button-primary mt-8 inline-flex rounded-full px-5 py-3 text-sm font-medium"
                >
                  Download PDF
                </a>
              ) : (
                <span className="button-secondary mt-8 inline-flex rounded-full px-5 py-3 text-sm font-medium text-white">
                  {resume.availabilityLabel}
                </span>
              )}
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
