"use client";

import { Layers, Home, Ruler } from "lucide-react";
import { useLang } from "./LanguageProvider";
import { Reveal } from "./Reveal";

export function FloorPlan() {
  const { t } = useLang();

  const towers = [
    { name: t.floor.towerA, units: t.floor.towerAunits, count: 5, accent: "gold" },
    { name: t.floor.towerB, units: t.floor.towerBunits, count: 6, accent: "jade" },
  ];

  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-night-900/40 py-24 sm:py-32">
      <div className="absolute inset-0 bg-mesh opacity-60" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
            <span className="h-px w-6 bg-gold-500/60" />
            {t.floor.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            {t.floor.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60">{t.floor.subtitle}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {towers.map((tower, i) => (
            <Reveal key={i} delay={0.1 * i}>
              <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-night-800/70 p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-white">{tower.name}</h3>
                    <p className="mt-1 text-sm text-white/60">{tower.units}</p>
                  </div>
                  <span
                    className={`grid h-14 w-14 place-items-center rounded-2xl text-night-950 ${
                      tower.accent === "gold" ? "bg-gold-gradient" : "bg-jade-500"
                    }`}
                  >
                    <Home className="h-6 w-6" />
                  </span>
                </div>
                {/* Unit visualization */}
                <div className="mt-8 flex flex-wrap gap-2.5">
                  {Array.from({ length: tower.count }).map((_, u) => (
                    <div
                      key={u}
                      className={`flex h-16 flex-1 min-w-[52px] items-center justify-center rounded-xl border text-xs font-semibold ${
                        tower.accent === "gold"
                          ? "border-gold-400/25 bg-gold-500/10 text-gold-300"
                          : "border-jade-400/25 bg-jade-500/10 text-jade-300"
                      }`}
                    >
                      {u + 1}
                    </div>
                  ))}
                </div>
                <p className="mt-4 flex items-center gap-2 text-xs text-white/45">
                  <Layers className="h-3.5 w-3.5" />
                  {t.floor.floorsValue}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {[
            { icon: Ruler, label: t.floor.share, value: t.floor.shareValue },
            { icon: Layers, label: t.floor.floors, value: t.floor.floorsValue },
            { icon: Home, label: t.floor.eyebrow, value: "Tower A + B" },
          ].map((c, i) => (
            <Reveal key={i} delay={0.08 * i}>
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-night-800/50 p-5">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 text-gold-300">
                  <c.icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-display text-lg font-semibold text-white">{c.value}</div>
                  <div className="text-xs text-white/45">{c.label}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
