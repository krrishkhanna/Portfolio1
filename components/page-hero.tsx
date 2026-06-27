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
        <div className="surface-panel glass-panel rounded-[2rem] p-8 md:p-12">
          <span className="eyebrow motion-rise">{eyebrow}</span>
          <div className="mt-6 max-w-[56rem] space-y-6">
            <h1 className="page-title motion-rise motion-delay-1 text-white">
              {title}
            </h1>
            <p className="motion-rise motion-delay-2 max-w-3xl text-base leading-8 text-neutral-300 md:text-lg">
              {description}
            </p>
            {actions ? <div className="motion-rise motion-delay-3 flex flex-wrap gap-4">{actions}</div> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
