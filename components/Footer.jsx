"use client";

import { Building2, Phone, Mail, MapPin } from "lucide-react";
import { useLang } from "./LanguageProvider";
import { company } from "@/lib/content";
import { projects } from "@/lib/projects";

export function Footer() {
  const { t, lang } = useLang();

  const quick = [
    { href: "#projects", label: t.nav.projects },
    { href: "#design", label: t.nav.design },
    { href: "#location", label: t.nav.location },
    { href: "#invest", label: t.nav.invest },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <footer className="border-t border-white/5 bg-night-950">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold-gradient text-night-950">
                <Building2 className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <span className="text-sm font-semibold text-white">{company.short[lang]}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">{t.footer.tagline}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">{t.footer.quick}</h4>
            <ul className="mt-4 space-y-2.5">
              {quick.map((q) => (
                <li key={q.href}>
                  <a href={q.href} className="text-sm text-white/55 transition-colors hover:text-gold-300">
                    {q.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">{t.footer.projectsHead}</h4>
            <ul className="mt-4 space-y-2.5">
              {projects.map((p) => (
                <li key={p.slug}>
                  <a href="#projects" className="text-sm text-white/55 transition-colors hover:text-gold-300">
                    {p.name[lang]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">{t.footer.contactHead}</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/55">
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 flex-shrink-0 text-gold-400" />
                {company.phone} · {company.phone2} · {company.phone3}
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-400" />
                {company.address[lang]}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/45">
            © {new Date().getFullYear()} {company.name[lang]}. {t.footer.rights}
          </p>
          <p className="max-w-md text-xs text-white/35">{t.footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
