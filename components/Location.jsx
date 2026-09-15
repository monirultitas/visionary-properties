"use client";

import { MapPin, TrainFront, Plane, ShieldCheck, Building } from "lucide-react";
import { useLang } from "./LanguageProvider";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const icons = [Building, ShieldCheck, TrainFront, Plane];

export function Location() {
  const { t } = useLang();

  return (
    <section id="location" className="relative border-y border-ink-900/5 bg-cream-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t.location.eyebrow}
          title={t.location.title}
          subtitle={t.location.subtitle}
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            {t.location.items.map((item, i) => {
              const Icon = icons[i % icons.length];
              return (
                <Reveal key={i} delay={0.08 * i}>
                  <div className="flex items-start gap-4 rounded-2xl border border-ink-900/10 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-jade-500/40 hover:shadow-lg">
                    <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-jade-500/10 text-jade-600">
                      <Icon className="h-6 w-6" strokeWidth={1.8} />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-ink-900">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-500">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.15}>
            <div className="relative h-full min-h-[380px] overflow-hidden rounded-3xl border border-ink-900/10 shadow-lg">
              <iframe
                title="Alamnagar Housing Location"
                src="https://www.google.com/maps?q=Baunia,Mirpur,Dhaka&z=14&output=embed"
                className="absolute inset-0 h-full w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="pointer-events-none absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-ink-900/10 bg-white/90 px-4 py-2 text-xs font-medium text-ink-900 shadow-md backdrop-blur-md">
                <MapPin className="h-3.5 w-3.5 text-gold-600" />
                Mouza Baunia, Dhaka
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
