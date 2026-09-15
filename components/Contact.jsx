"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { useLang } from "./LanguageProvider";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { company } from "@/lib/content";
import { projects } from "@/lib/projects";

// To collect leads, create a free form at https://formspree.io and paste the
// endpoint here (e.g. "https://formspree.io/f/xxxxxxx"). Left empty, the form
// simply confirms submission on the client.
const FORMSPREE_ENDPOINT = "";

export function Contact() {
  const { t, lang } = useLang();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      if (FORMSPREE_ENDPOINT) {
        await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: new FormData(e.currentTarget),
        });
      } else {
        await new Promise((r) => setTimeout(r, 700));
      }
      setSent(true);
      e.target.reset();
    } catch (err) {
      setSent(true);
    } finally {
      setLoading(false);
    }
  };

  const cards = [
    { icon: Phone, label: t.contact.callUs, value: company.phone, href: `tel:${company.phone.replace(/\s/g, "")}` },
    { icon: Mail, label: t.contact.emailUs, value: company.email, href: `mailto:${company.email}` },
    { icon: MapPin, label: t.contact.visitUs, value: company.address[lang] },
  ];

  const inputCls =
    "w-full rounded-xl border border-ink-900/15 bg-white px-4 py-3 text-sm text-ink-900 placeholder-ink-400 outline-none transition-colors focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20";

  return (
    <section id="contact" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5 lg:gap-10">
          <div className="space-y-4 lg:col-span-2">
            {cards.map((c, i) => (
              <Reveal key={i} delay={0.08 * i}>
                <a
                  href={c.href || undefined}
                  className="flex items-start gap-4 rounded-2xl border border-ink-900/10 bg-cream-50 p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gold-500/40 hover:shadow-lg"
                >
                  <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-gold-500/10 text-gold-600">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-ink-400">{c.label}</div>
                    <div className="mt-1 text-sm font-medium text-ink-900">{c.value}</div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15} className="lg:col-span-3">
            <div className="rounded-3xl border border-ink-900/10 bg-cream-50 p-6 shadow-sm sm:p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle2 className="h-14 w-14 text-jade-600" />
                  <p className="mt-4 max-w-sm text-base text-ink-700">{t.contact.success}</p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 text-sm font-semibold text-gold-600 underline-offset-4 hover:underline"
                  >
                    ↺
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input name="name" required placeholder={t.contact.name} className={inputCls} />
                    <input name="phone" required placeholder={t.contact.phone} className={inputCls} />
                  </div>
                  <input name="email" type="email" placeholder={t.contact.email} className={inputCls} />
                  <select name="interest" className={inputCls} defaultValue="">
                    <option value="" disabled>
                      {t.contact.interest}
                    </option>
                    {projects.map((p) => (
                      <option key={p.slug} value={p.name.en}>
                        {p.name[lang]}
                      </option>
                    ))}
                  </select>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder={t.contact.message}
                    className={`${inputCls} resize-none`}
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold-gradient px-6 py-3.5 text-sm font-semibold text-night-950 shadow-lg shadow-gold-500/20 transition-transform hover:scale-[1.02] disabled:opacity-60"
                  >
                    {loading ? "..." : (
                      <>
                        {t.contact.submit}
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
