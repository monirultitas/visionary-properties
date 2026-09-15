"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Phone } from "lucide-react";
import { company } from "@/lib/content";

export function FloatingContact() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <a
        href={`tel:${company.phone.replace(/\s/g, "")}`}
        className="group flex items-center gap-2 rounded-full bg-jade-500 px-4 py-3 text-sm font-semibold text-night-950 shadow-xl shadow-jade-500/30 transition-transform hover:scale-105"
        aria-label="Call"
      >
        <Phone className="h-5 w-5" />
        <span className="hidden sm:inline">Call Now</span>
      </a>
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-night-800/90 text-white backdrop-blur-md transition-colors hover:bg-night-700"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
