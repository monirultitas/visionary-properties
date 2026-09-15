"use client";

import { MapPin, TrainFront, Plane, ShieldCheck, Building } from "lucide-react";
import { useLang } from "./LanguageProvider";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const icons = [Building, ShieldCheck, TrainFront, Plane];

export function Location() {
  const { t } = useLang();

  return (
    <section id="location" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t.location.eyebrow}
          title={t.location.title}
          subtitle={t.location.subtitle}
          light
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            {t.location.items.map((item, i) => {
              const Icon = icons[i % icons.length];
              return (
                <Reveal key={i} delay={0.08 * i}>
                  <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-night-800/50 p-5 transition-colors hover:border-jade-400/30">
                    <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-jade-500/10 text-jade-400">
                      <Icon className="h-6 w-6" strokeWidth={1.8} />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-white/60">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.15}>
            <div className="relative h-full min-h-[380px] overflow-hidden rounded-3xl border border-white/10">
              <iframe
                title="Alamnagar Housing Location"
                src="https://www.google.com/maps?q=Baunia,Mirpur,Dhaka&z=14&output=embed"
                className="absolute inset-0 h-full w-full grayscale-[0.3]"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="pointer-events-none absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/10 bg-night-950/80 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
                <MapPin className="h-3.5 w-3.5 text-gold-400" />
                Mouza Baunia, Dhaka
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
