"use client";

import { ArrowRight, CalendarCheck } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import FadeIn from "./FadeIn";

export default function FinalCTASection() {
  return (
    <section className="relative bg-gray-900 py-20 md:py-28 overflow-hidden">
      {/* Subtle background photo */}
      <Image
        src="https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?auto=format&fit=crop&w=1920&q=80"
        alt=""
        fill
        aria-hidden
        className="object-cover opacity-10"
        sizes="100vw"
      />
      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-gray-900/90" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <FadeIn>
          <span className="inline-block text-green-300 font-semibold uppercase tracking-widest text-xs mb-4">
            Ready to book?
          </span>
          <h2 className="text-3xl md:text-[3.1rem] font-extrabold text-white leading-[1.1] tracking-tight mb-5">
            Ready for a <span className="text-green-300 whitespace-nowrap">Spotless Home?</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Book online in 60 seconds. We&apos;ll handle everything else.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/book-call"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-extrabold text-lg px-8 py-4 rounded-xl shadow-[0_18px_35px_-22px_rgba(22,163,74,0.85)] hover:-translate-y-1 transition-all"
            >
              <CalendarCheck className="w-5 h-5" />
              Book a Clean
            </a>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white font-semibold text-base transition-colors"
            >
              Or call now {siteConfig.phone} <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <p className="mt-7 text-slate-500 text-sm">
            Mon-Sat 8am-6pm. Same-day bookings subject to availability.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
