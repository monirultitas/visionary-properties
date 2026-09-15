"use client";

import { TrendingUp, ShieldCheck, Rocket } from "lucide-react";
import { useLang } from "./LanguageProvider";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const icons = [TrendingUp, ShieldCheck, Rocket];

export function WhyInvest() {
  const { t } = useLang();

  return (
    <section
      id="invest"
      className="relative overflow-hidden border-y border-white/5 bg-night-900/40 py-24 sm:py-32"
    >
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-gold-500/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-jade-500/5 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow={t.invest.eyebrow} title={t.invest.title} light />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.invest.items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={i} delay={0.1 * i}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-night-800/60 p-8">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold-gradient text-night-950">
                    <Icon className="h-7 w-7" strokeWidth={1.9} />
                  </span>
                  <div className="mt-6 font-display text-5xl font-semibold text-white/10">
                    0{i + 1}
                  </div>
                  <h3 className="-mt-6 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{item.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
