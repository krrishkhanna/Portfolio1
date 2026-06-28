"use client";

import { useEffect, useState } from "react";

type PortfolioMode = "operator" | "ai";

const MODES: { id: PortfolioMode; label: string }[] = [
  { id: "operator", label: "Operator Mode" },
  { id: "ai", label: "AI Lab Mode" },
];

export function ModeToggle() {
  const [mode, setMode] = useState<PortfolioMode>("operator");

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-mode");
    const nextMode = saved === "ai" ? "ai" : "operator";
    setMode(nextMode);
    document.documentElement.dataset.portfolioMode = nextMode;
  }, []);

  const updateMode = (nextMode: PortfolioMode) => {
    setMode(nextMode);
    window.localStorage.setItem("portfolio-mode", nextMode);
    document.documentElement.dataset.portfolioMode = nextMode;
    window.dispatchEvent(new CustomEvent("portfolio-mode-change", { detail: nextMode }));
  };

  return (
    <div className="flex items-center gap-1 rounded-full border border-white/8 bg-white/[0.03] p-1">
      {MODES.map((item) => {
        const isActive = item.id === mode;

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => updateMode(item.id)}
            className={`rounded-full px-3 py-1.5 text-xs transition sm:text-sm ${
              isActive
                ? "bg-white font-medium text-neutral-950 shadow-[0_8px_24px_rgba(255,255,255,0.16)]"
                : "text-neutral-400 hover:bg-white/6 hover:text-white"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
