"use client";

import { Check, Building } from "lucide-react";
import { useLang } from "./LanguageProvider";
import { Reveal } from "./Reveal";

export function About() {
  const { t } = useLang();
  const points = [t.about.point1, t.about.point2, t.about.point3];

  return (
    <section id="about" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-ink-900/10 shadow-xl shadow-ink-900/10">
            <img
              src="https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=1200&q=80"
              alt={t.about.title}
              className="h-[520px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-2 hidden rounded-2xl border border-ink-900/10 bg-white p-5 shadow-xl shadow-ink-900/10 sm:block lg:-right-6">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold-gradient text-night-950">
                <Building className="h-5 w-5" />
              </span>
              <div>
                <div className="font-display text-2xl font-semibold text-ink-900">1500</div>
                <div className="text-xs text-ink-400">sq.ft / share</div>
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
              <span className="h-px w-6 bg-gold-500/60" />
              {t.about.eyebrow}
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-ink-900 sm:text-4xl lg:text-[2.75rem]">
              {t.about.title}
            </h2>
            <p className="mt-1 text-sm font-medium uppercase tracking-wide text-jade-600">
              {t.about.subtitle}
            </p>
            <p className="mt-6 text-base leading-relaxed text-ink-600">{t.about.body}</p>
          </Reveal>

          <div className="mt-8 space-y-4">
            {points.map((p, i) => (
              <Reveal key={i} delay={0.1 * i}>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-jade-500/15 text-jade-600">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <p className="text-sm leading-relaxed text-ink-600">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
