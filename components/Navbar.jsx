"use client";

import { useEffect, useState } from "react";
import { Menu, X, Building2, Globe } from "lucide-react";
import { useLang } from "./LanguageProvider";
import { company } from "@/lib/content";

export function Navbar() {
  const { t, lang, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#projects", label: t.nav.projects },
    { href: "#design", label: t.nav.design },
    { href: "#location", label: t.nav.location },
    { href: "#invest", label: t.nav.invest },
    { href: "#contact", label: t.nav.contact },
  ];

  // Dark text when scrolled (over light page), light text over the dark hero.
  const onLight = scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-ink-900/10 bg-cream-50/85 py-3 backdrop-blur-xl shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="group flex items-center gap-2.5">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold-gradient text-night-950 shadow-lg shadow-gold-500/20">
            <Building2 className="h-5 w-5" strokeWidth={2.2} />
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className={`text-sm font-semibold tracking-wide ${onLight ? "text-ink-900" : "text-white"}`}>
              {company.short[lang]}
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-gold-600">
              Properties & Development
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative text-sm font-medium transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold-500 after:transition-all after:duration-300 hover:after:w-full ${
                onLight ? "text-ink-700 hover:text-ink-900" : "text-white/80 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-all hover:border-gold-500/60 hover:text-gold-600 ${
              onLight
                ? "border-ink-900/15 bg-white text-ink-700"
                : "border-white/15 bg-white/10 text-white/90"
            }`}
            aria-label="Toggle language"
          >
            <Globe className="h-3.5 w-3.5" />
            {lang === "bn" ? "EN" : "বাং"}
          </button>

          <a
            href="#contact"
            className="hidden rounded-full bg-gold-gradient px-5 py-2 text-sm font-semibold text-night-950 shadow-lg shadow-gold-500/25 transition-transform hover:scale-105 sm:inline-block"
          >
            {t.nav.cta}
          </a>

          <button
            onClick={() => setOpen((o) => !o)}
            className={`grid h-10 w-10 place-items-center rounded-lg border lg:hidden ${
              onLight ? "border-ink-900/15 bg-white text-ink-900" : "border-white/15 bg-white/10 text-white"
            }`}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-4 mt-3 rounded-2xl border border-ink-900/10 bg-white/95 p-4 shadow-xl backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-ink-700 transition-colors hover:bg-cream-100 hover:text-gold-600"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-gold-gradient px-4 py-3 text-center text-sm font-semibold text-night-950"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
