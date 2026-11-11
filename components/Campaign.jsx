"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useLang } from "./LanguageProvider";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const posts = [
  { src: "/posts/post-03-glance.jpg", alt: { en: "Project at a glance", bn: "এক নজরে আলমনগর হাউজিং" } },
  { src: "/posts/post-35-iso.jpg", alt: { en: "Two towers, one dream", bn: "দুটি টাওয়ার, একটি স্বপ্ন" } },
  { src: "/posts/post-09-layout.jpg", alt: { en: "Tower layout", bn: "টাওয়ারের ফ্লোর কনফিগারেশন" } },
  { src: "/posts/post-05-location.jpg", alt: { en: "Project location", bn: "প্রকল্পের অবস্থান" } },
  { src: "/posts/post-32-line.jpg", alt: { en: "Every route made easy", bn: "সব পথ সহজ" } },
  { src: "/posts/post-21-bento.jpg", alt: { en: "Connected living", bn: "সংযুক্ত জীবন, সহজ যাতায়াত" } },
  { src: "/posts/post-31-grid.jpg", alt: { en: "The project in numbers", bn: "সংখ্যায় আলমনগর হাউজিং" } },
  { src: "/posts/post-23-glass.jpg", alt: { en: "All amenities in one address", bn: "সব সুবিধা এক ঠিকানায়" } },
  { src: "/posts/post-13-reasons.jpg", alt: { en: "Why buy a share", bn: "কেন কিনবেন শেয়ার" } },
  { src: "/posts/post-14-share.jpg", alt: { en: "What a share means", bn: "১টি শেয়ার মানে আপনার নিজের অংশ" } },
  { src: "/posts/post-27-questions.jpg", alt: { en: "Three questions to ask first", bn: "নিজেকে ৩টি প্রশ্ন করুন" } },
  { src: "/posts/post-16-booking.jpg", alt: { en: "Share booking is open", bn: "শেয়ার বুকিং চলছে" } },
];

export function Campaign() {
  const { t, lang } = useLang();
  const [active, setActive] = useState(null);

  return (
    <section id="story" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t.campaign.eyebrow}
          title={t.campaign.title}
          subtitle={t.campaign.subtitle}
        />

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
          {posts.map((p, i) => (
            <Reveal key={p.src} delay={0.04 * (i % 4)}>
              <button
                onClick={() => setActive(p)}
                className="group relative block w-full overflow-hidden rounded-2xl border border-ink-900/10 bg-cream-100 shadow-sm transition-shadow hover:shadow-xl hover:shadow-ink-900/15"
                aria-label={p.alt[lang]}
              >
                <img
                  src={p.src}
                  alt={p.alt[lang]}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
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
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 text-white"
              onClick={() => setActive(null)}
              aria-label={t.campaign.close}
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              src={active.src}
              alt={active.alt[lang]}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[88vh] max-w-full rounded-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
