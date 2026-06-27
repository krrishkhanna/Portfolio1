import { notFound } from "next/navigation";

import { writing } from "@/lib/site-data";

type WritingPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return writing.map((piece) => ({ slug: piece.slug }));
}

export default async function WritingDetailPage({ params }: WritingPageProps) {
  const { slug } = await params;
  const piece = writing.find((item) => item.slug === slug);

  if (!piece) {
    notFound();
  }

  return (
    <div className="page-space">
      <article className="site-shell pb-20">
        <div className="surface rounded-[2rem] p-8 md:p-12">
          <p className="text-xs uppercase tracking-[0.24em] text-sky-200/70">
            {piece.category} • {piece.readTime}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
            {piece.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">{piece.summary}</p>
          <div className="mt-10 space-y-6 text-base leading-8 text-slate-300">
            {piece.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
