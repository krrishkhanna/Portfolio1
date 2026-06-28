"use client";

import { useEffect, useRef, useState } from "react";

const TRANSITION_MS = 260;

export function ModeTransitionShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleModeChange = () => {
      setIsTransitioning(true);
      document.documentElement.dataset.modeTransition = "active";

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        setIsTransitioning(false);
        delete document.documentElement.dataset.modeTransition;
      }, TRANSITION_MS);
    };

    window.addEventListener("portfolio-mode-change", handleModeChange);

    return () => {
      window.removeEventListener("portfolio-mode-change", handleModeChange);

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className={`mode-transition-shell${isTransitioning ? " is-transitioning" : ""}`}>
      {children}
    </div>
  );
}
