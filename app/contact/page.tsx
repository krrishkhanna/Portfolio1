import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="If the work needs structure, momentum, and ownership, let’s talk."
        description="I’m especially interested in Founder’s Office, product, strategy, and TPM opportunities where the mandate is broad and the standards are high."
      />
      <div className="site-shell grid gap-5 pb-20 md:grid-cols-2">
        <article className="surface rounded-[1.75rem] p-8">
          <p className="text-xs uppercase tracking-[0.24em] text-sky-200/70">Direct</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">{site.email}</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Email is the fastest path for opportunities, operator roles, or product strategy conversations.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-sky-100"
          >
            Send an email
          </a>
        </article>
        <article className="surface rounded-[1.75rem] p-8">
          <p className="text-xs uppercase tracking-[0.24em] text-sky-200/70">Focus Areas</p>
          <div className="mt-4 grid gap-3">
            {[
              "Founder's Office",
              "Technical Operator",
              "Product & Strategy",
              "Technical Program Management",
              "AI-native startups",
            ].map((item) => (
              <div key={item} className="rounded-[1.25rem] border border-white/8 bg-white/4 px-4 py-3 text-sm text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </article>
      </div>
    </>
  );
}
