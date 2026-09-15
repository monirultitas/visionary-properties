"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";
import { useLang } from "./LanguageProvider";
import { Counter } from "./Counter";

export function Hero() {
  const { t } = useLang();

  const stats = [
    { value: 2, label: t.hero.stat1 },
    { value: 12, prefix: "G+", label: t.hero.stat2 },
    { value: 1452, label: t.hero.stat3 },
    { value: 11, suffix: "+", label: t.hero.stat4 },
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night-950/85 via-night-950/75 to-night-950" />
        <div className="absolute inset-0 bg-mesh" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pb-16 pt-32 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-gold-400/30 bg-gold-500/10 px-4 py-1.5 text-xs font-medium text-gold-300 backdrop-blur-sm"
        >
          <Sparkles className="h-3.5 w-3.5" />
          {t.hero.badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-4xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          {t.hero.title.split(t.hero.highlight)[0]}
          <span className="bg-gold-gradient bg-clip-text text-transparent">
            {t.hero.highlight}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <a
            href="#about"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-semibold text-night-950 shadow-xl shadow-gold-500/25 transition-transform hover:scale-105"
          >
            {t.hero.ctaPrimary}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            {t.hero.ctaSecondary}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md sm:grid-cols-4"
        >
          {stats.map((s, i) => (
            <div key={i} className="bg-night-900/40 px-5 py-6 text-center sm:text-left">
              <div className="font-display text-3xl font-semibold text-gold-300 sm:text-4xl">
                <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wide text-white/50">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* location chip */}
      <div className="pointer-events-none absolute bottom-6 right-6 hidden items-center gap-2 rounded-full border border-white/10 bg-night-900/60 px-4 py-2 text-xs text-white/70 backdrop-blur-md lg:flex">
        <MapPin className="h-3.5 w-3.5 text-jade-400" />
        Mouza Baunia, Dhaka
      </div>
    </section>
  );
}
