"use client";

import { ArrowRight, CalendarCheck } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import FadeIn from "./FadeIn";

export default function FinalCTASection() {
  return (
    <section className="relative bg-slate-950 py-20 md:py-28 overflow-hidden">
      {/* Subtle background photo */}
      <Image
        src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=1920&q=80"
        alt=""
        fill
        aria-hidden
        className="object-cover opacity-10"
        sizes="100vw"
      />
      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/90" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <FadeIn>
          <span className="inline-block text-teal-300 font-semibold uppercase tracking-widest text-xs mb-4">
            Need clarity before you decide?
          </span>
          <h2 className="text-3xl md:text-[3.1rem] font-extrabold text-white leading-[1.1] tracking-tight mb-5">
            Get a <span className="text-teal-300 whitespace-nowrap">Clear Fix Plan</span>
            <span className="block">Book a Call Today</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            We will review your issue, explain options in plain language, and
            help you move forward with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/book-call"
              className="inline-flex items-center gap-3 bg-[#00B896] hover:bg-[#00a786] text-slate-950 font-extrabold text-lg px-8 py-4 rounded-xl shadow-[0_18px_35px_-22px_rgba(0,184,150,0.85)] hover:-translate-y-1 transition-all"
            >
              <CalendarCheck className="w-5 h-5" />
              Book a Call
            </a>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white font-semibold text-base transition-colors"
            >
              Or call now {siteConfig.phone} <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <p className="mt-7 text-slate-500 text-sm">
            Available 24 hours a day, 7 days a week — including holidays
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
