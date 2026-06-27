import { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
};

export function PageHero({ eyebrow, title, description, actions }: PageHeroProps) {
  return (
    <section className="page-space">
      <div className="site-shell">
        <div className="surface-panel rounded-[2rem] p-8 md:p-12">
          <span className="eyebrow">{eyebrow}</span>
          <div className="mt-6 max-w-4xl space-y-6">
            <h1 className="text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
              {title}
            </h1>
            <p className="max-w-3xl text-base leading-8 text-neutral-300 md:text-lg">
              {description}
            </p>
            {actions ? <div className="flex flex-wrap gap-4">{actions}</div> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
