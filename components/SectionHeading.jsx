"use client";

import { Reveal } from "./Reveal";

export function SectionHeading({ eyebrow, title, subtitle, center = true, light = false }) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
          <span className="h-px w-6 bg-gold-500/60" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-3 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem] ${
          light ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed ${light ? "text-white/60" : "text-ink-500"}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
