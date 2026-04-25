"use client";

import { Zap, Droplets, Waves, Flame, ArrowRight, CalendarCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import FadeIn from "./FadeIn";

const iconMap: Record<string, React.ElementType> = {
  zap: Zap,
  droplets: Droplets,
  waves: Waves,
  flame: Flame,
};

export default function ServicesSection() {
  return (
    <section id="services" className="bg-slate-100 py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section header */}
        <FadeIn className="text-center mb-16">
          <span className="inline-block text-teal-700 font-semibold uppercase tracking-widest text-xs mb-3">
            What We Fix
          </span>
          <h2 className="text-3xl md:text-[2.7rem] font-extrabold text-slate-900 leading-tight tracking-tight">
            Our Plumbing Services
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto text-[17px] leading-relaxed">
            Fast diagnosis, clear options, and repairs that last. No guesswork.
          </p>
        </FadeIn>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {siteConfig.services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Zap;
            return (
              <FadeIn key={service.title} delay={i * 0.08}>
                <div
                  className="group relative bg-white border border-slate-200 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.07)] hover:shadow-[0_14px_30px_-18px_rgba(2,6,23,0.35)] hover:border-[#00B896]/35 hover:-translate-y-1 transition-all duration-300 cursor-default h-full"
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 bg-slate-100 text-teal-700"
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Text */}
                  <h3 className="text-[17px] font-bold text-slate-900 mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Learn more link */}
                  <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-slate-500 group-hover:text-[#007f69] transition-colors">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Quick CTA */}
        <FadeIn delay={0.35} className="text-center mt-12">
          <a
            href="/book-call"
            className="inline-flex items-center gap-2.5 bg-slate-900 hover:bg-teal-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:-translate-y-0.5 transition-all"
          >
            <CalendarCheck className="w-4 h-4" />
            Book a Service Call
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
