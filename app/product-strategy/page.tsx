import { PageHero } from "@/components/page-hero";
import { StrategyCard } from "@/components/strategy-card";
import { site, strategyMemos } from "@/lib/site-data";

export default function ProductStrategyPage() {
  return (
    <>
      <PageHero
        eyebrow="Product Strategy"
        title="How I study products through growth, retention, leverage, and behavior."
        description="I use product strategy memos to study how products grow, retain users, create leverage, and turn behavior into business outcomes. This is where I document how I think across growth loops, retention, monetization, user behavior, AI-native workflows, and operational leverage."
      />
      <div className="site-shell space-y-5 pb-20">
        <a
          href={site.notionPortfolioUrl}
          target="_blank"
          rel="noreferrer"
          className="button-secondary inline-flex rounded-full px-5 py-3 text-sm font-medium text-white"
        >
          View Notion Portfolio
        </a>
        {strategyMemos.map((memo) => (
          <StrategyCard key={memo.company} memo={memo} />
        ))}
      </div>
    </>
  );
}
