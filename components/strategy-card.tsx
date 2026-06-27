import type { StrategyMemo } from "@/lib/site-data";

export function StrategyCard({ memo }: { memo: StrategyMemo }) {
  return (
    <article className="surface-panel card-hover rounded-[1.75rem] p-6">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="mono-label text-[11px] text-neutral-500">{memo.theme}</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">{memo.company}</h3>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <ListBlock title="What I analyzed" items={[memo.whatIAnalyzed]} />
        <ListBlock title="Key question" items={[memo.keyQuestion]} />
      </div>
      <div className="space-y-4 text-sm leading-7 text-slate-300">
        <p>
          <span className="text-white">Core conflict:</span> {memo.coreConflict}
        </p>
        <p>
          <span className="text-white">Retention loop:</span> {memo.retentionLoop}
        </p>
        <p>
          <span className="text-white">Operator lens:</span> {memo.operatorLens}
        </p>
        <p>
          <span className="text-white">Operator takeaway:</span> {memo.operatorTakeaway}
        </p>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <ListBlock title="Priorities" items={memo.priorities} />
        <ListBlock title="Risks" items={memo.risks} />
        <ListBlock title="Opportunities" items={memo.opportunities} />
      </div>
    </article>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-white/8 bg-white/4 p-4">
      <p className="text-sm font-medium text-white">{title}</p>
      <ul className="mt-3 space-y-2 text-sm text-slate-400">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
