"use client";

import { useState } from "react";

import { perspectives } from "@/lib/site-data";

export function PerspectiveSwitch() {
  const [activeId, setActiveId] = useState<(typeof perspectives)[number]["id"]>("founder");
  const active = perspectives.find((item) => item.id === activeId) ?? perspectives[0];

  return (
    <section className="surface-panel rounded-[2rem] p-6 md:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-2xl space-y-4">
          <span className="eyebrow">Perspective Switch</span>
          <h2 className="section-title">See the same profile through different lenses.</h2>
          <p className="section-copy">
            Founder-side, operator-side, or engineer-side. The underlying signal is the
            same, but the emphasis changes depending on what the role needs most.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {perspectives.map((item) => {
            const isActive = item.id === active.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveId(item.id)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  isActive
                    ? "bg-white font-medium text-neutral-950 shadow-[0_8px_24px_rgba(255,255,255,0.16)]"
                    : "button-secondary text-white"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="surface-subtle rounded-[1.5rem] p-6">
          <p className="mono-label text-[11px] text-neutral-500">Selected View</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">{active.title}</h3>
          <p className="mt-4 text-base leading-8 text-neutral-300">{active.summary}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {active.bullets.map((bullet) => (
            <div key={bullet} className="surface-subtle rounded-[1.5rem] p-5">
              <p className="text-sm leading-7 text-neutral-300">{bullet}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
