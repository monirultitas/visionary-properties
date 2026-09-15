"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useLang } from "./LanguageProvider";

const bnDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

export function toLocaleNum(num, lang) {
  const s = String(num);
  if (lang !== "bn") return s;
  return s.replace(/[0-9]/g, (d) => bnDigits[Number(d)]);
}

export function Counter({ value, prefix = "", suffix = "", duration = 1600 }) {
  const { lang } = useLang();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {toLocaleNum(display, lang)}
      {suffix}
    </span>
  );
}
