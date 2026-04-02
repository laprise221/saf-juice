"use client";

import { tickerWords } from "@/lib/data";

export default function Ticker() {
  const repeated = [...tickerWords, ...tickerWords];

  return (
    <section className="py-4 bg-[var(--color-primary)] overflow-hidden">
      <div className="flex animate-scroll-left whitespace-nowrap">
        {repeated.map((word, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 px-6 text-sm md:text-base font-[family-name:var(--font-heading)] font-bold text-white/90 uppercase tracking-widest"
          >
            {word}
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
          </span>
        ))}
      </div>
    </section>
  );
}
