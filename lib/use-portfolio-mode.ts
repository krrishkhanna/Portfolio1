"use client";

import { useEffect, useState } from "react";

export type PortfolioMode = "operator" | "ai";

export function usePortfolioMode(defaultMode: PortfolioMode = "operator") {
  const [mode, setMode] = useState<PortfolioMode>(defaultMode);

  useEffect(() => {
    const syncFromStorage = () => {
      const saved = window.localStorage.getItem("portfolio-mode");
      const nextMode = saved === "ai" ? "ai" : "operator";
      setMode(nextMode);
      document.documentElement.dataset.portfolioMode = nextMode;
    };

    syncFromStorage();
    window.addEventListener("portfolio-mode-change", syncFromStorage);

    return () => {
      window.removeEventListener("portfolio-mode-change", syncFromStorage);
    };
  }, []);

  return mode;
}
