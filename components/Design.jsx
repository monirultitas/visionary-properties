"use client";

import { Building2, Wind, Warehouse, ArrowUpDown, Flame, Trees } from "lucide-react";
import { useLang } from "./LanguageProvider";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const icons = [Building2, Wind, Warehouse, ArrowUpDown, Flame, Trees];

export function Design() {
  const { t } = useLang();

  return (
    <section id="design" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t.design.eyebrow}
          title={t.design.title}
          subtitle={t.design.subtitle}
          light
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.design.items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={i} delay={0.06 * i}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-night-800/60 p-7 transition-colors hover:border-gold-400/30">
                  <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gold-500/5 blur-2xl transition-all group-hover:bg-gold-500/10" />
                  <span className="relative grid h-12 w-12 place-items-center rounded-xl border border-gold-400/20 bg-gold-500/10 text-gold-300">
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </span>
                  <h3 className="relative mt-5 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-white/60">{item.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
