import { ReactNode } from "react";

type SectionShellProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
  children: ReactNode;
};

export function SectionShell({ eyebrow, title, copy, children }: SectionShellProps) {
  return (
    <section className="py-10 md:py-14">
      <div className="mb-8 space-y-4 md:mb-10">
        {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        <h2 className="section-title">{title}</h2>
        {copy ? <p className="section-copy">{copy}</p> : null}
      </div>
      {children}
    </section>
  );
}
