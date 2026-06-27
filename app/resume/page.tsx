import { PageHero } from "@/components/page-hero";
import { resumeVariants } from "@/lib/site-data";

export default function ResumePage() {
  return (
    <>
      <PageHero
        eyebrow="Resume"
        title="Three role-targeted versions. One consistent positioning."
        description="Different versions are tailored for different role types, but all reflect the same core positioning: AI x Product x Strategy x Operations."
      />
      <div className="site-shell grid gap-5 pb-20 lg:grid-cols-3">
        {resumeVariants.map((resume) => (
          <article key={resume.title} className="surface card-hover rounded-[1.75rem] p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-sky-200/70">Resume Variant</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">{resume.title}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">{resume.description}</p>
            <a
              href={resume.file}
              download
              className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-sky-100"
            >
              Download
            </a>
          </article>
        ))}
      </div>
    </>
  );
}
