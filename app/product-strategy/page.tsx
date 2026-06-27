import { PageHero } from "@/components/page-hero";
import { StrategyCard } from "@/components/strategy-card";
import { strategyMemos } from "@/lib/site-data";

export default function ProductStrategyPage() {
  return (
    <>
      <PageHero
        eyebrow="Product Strategy"
        title="From teardown to execution lens."
        description="This portfolio shows how I break products down through retention loops, monetization, operational bottlenecks, and the specific decisions I would prioritize if I were inside the company."
      />
      <div className="site-shell space-y-5 pb-20">
        {strategyMemos.map((memo) => (
          <StrategyCard key={memo.company} memo={memo} />
        ))}
      </div>
    </>
  );
}
