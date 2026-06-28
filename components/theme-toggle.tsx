"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const current = (document.documentElement.dataset.theme as Theme | undefined) ?? "dark";
    setTheme(current);
    setReady(true);
  }, []);

  function toggleTheme() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="button-secondary inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium text-white"
      aria-label="Toggle light and dark mode"
    >
      <span>{ready && theme === "light" ? "Light" : "Dark"}</span>
    </button>
  );
}
