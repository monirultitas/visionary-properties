"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Bell } from "lucide-react";
import { useLang } from "./LanguageProvider";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { projects } from "@/lib/projects";

function StatusBadge({ status, t }) {
  const map = {
    flagship: { label: t.projects.flagship, cls: "bg-gold-gradient text-night-950" },
    ongoing: { label: t.projects.ongoing, cls: "bg-jade-500 text-white" },
    upcoming: { label: t.projects.upcoming, cls: "bg-ink-900/80 text-white backdrop-blur-sm" },
  };
  const s = map[status] || map.upcoming;
  return (
    <span className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide shadow-sm ${s.cls}`}>
      {s.label}
    </span>
  );
}

export function Projects() {
  const { t, lang } = useLang();

  return (
    <section id="projects" className="relative border-y border-ink-900/5 bg-cream-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          subtitle={t.projects.subtitle}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const featured = p.status === "flagship";
            return (
              <Reveal
                key={p.slug}
                delay={0.08 * i}
                className={featured ? "md:col-span-2 lg:col-span-2" : ""}
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink-900/10 bg-white shadow-sm transition-shadow hover:shadow-2xl hover:shadow-ink-900/10"
                >
                  <div className={`relative overflow-hidden ${featured ? "h-72 lg:h-80" : "h-56"}`}>
                    <img
                      src={p.image}
                      alt={p.name[lang]}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute left-4 top-4">
                      <StatusBadge status={p.status} t={t} />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-1.5 text-xs font-medium text-jade-600">
                      <MapPin className="h-3.5 w-3.5" />
                      {p.location[lang]}
                    </div>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-ink-900">
                      {p.name[lang]}
                    </h3>
                    <p className="mt-1 text-sm text-ink-400">{p.type[lang]}</p>
                    <p className="mt-3 text-sm leading-relaxed text-ink-500">{p.tagline[lang]}</p>

                    <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
                      {p.facts.map((f, j) => (
                        <div key={j}>
                          <span className="font-display text-lg font-semibold text-gold-600">
                            {f.value}
                          </span>
                          <span className="ml-1.5 text-xs text-ink-400">{f.label[lang]}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-1">
                      {featured ? (
                        <a
                          href="#about"
                          className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-night-950 shadow-lg shadow-gold-500/20 transition-transform hover:scale-105"
                        >
                          {t.projects.viewDetails}
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      ) : (
                        <a
                          href="#contact"
                          className="inline-flex items-center gap-2 rounded-full border border-ink-900/15 px-5 py-2.5 text-sm font-semibold text-ink-800 transition-colors hover:bg-cream-100"
                        >
                          <Bell className="h-4 w-4" />
                          {t.projects.notify}
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
