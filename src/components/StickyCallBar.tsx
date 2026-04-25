"use client";

import { Phone, CalendarCheck } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function StickyCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-slate-950 border-t border-slate-800 shadow-2xl">
      <div className="grid grid-cols-2">
        <a
          href="/book-call"
          className="flex items-center justify-center gap-2 bg-teal-500 active:bg-teal-400 text-slate-950 font-extrabold py-4 text-sm transition-colors"
        >
          <CalendarCheck className="w-4 h-4" />
          Book Call
        </a>
        <a
          href={siteConfig.phoneHref}
          className="flex items-center justify-center gap-2 bg-slate-800 active:bg-slate-700 text-white font-extrabold py-4 text-sm transition-colors"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
      </div>
    </div>
  );
}
