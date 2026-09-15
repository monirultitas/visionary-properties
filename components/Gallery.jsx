"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useLang } from "./LanguageProvider";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { galleryImages } from "@/lib/projects";

export function Gallery() {
  const { t, lang } = useLang();
  const [active, setActive] = useState(null);

  return (
    <section id="gallery" className="relative border-y border-ink-900/5 bg-cream-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t.gallery.eyebrow}
          title={t.gallery.title}
          subtitle={t.gallery.subtitle}
        />

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {galleryImages.map((img, i) => (
            <Reveal
              key={i}
              delay={0.05 * (i % 4)}
              className={i % 6 === 0 ? "col-span-2 row-span-2" : ""}
            >
              <button
                onClick={() => setActive(img)}
                className="group relative block h-full w-full overflow-hidden rounded-2xl border border-ink-900/10 shadow-sm"
              >
                <img
                  src={img.src}
                  alt={img.alt[lang]}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    i % 6 === 0 ? "h-full min-h-[220px]" : "h-40 sm:h-52"
                  }`}
                />
                <div className="absolute inset-0 bg-ink-900/0 transition-colors group-hover:bg-ink-900/25" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] grid place-items-center bg-night-950/90 p-4 backdrop-blur-sm"
          >
            <button
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white"
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              src={active.src}
              alt={active.alt[lang]}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-full rounded-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
