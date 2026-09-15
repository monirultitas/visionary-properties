"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { content } from "@/lib/content";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("bn"); // Bengali default

  useEffect(() => {
    try {
      const saved = localStorage.getItem("vpd-lang");
      if (saved === "en" || saved === "bn") setLang(saved);
    } catch (e) {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("vpd-lang", lang);
    } catch (e) {
      /* ignore */
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const toggle = () => setLang((l) => (l === "bn" ? "en" : "bn"));

  const t = content[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
