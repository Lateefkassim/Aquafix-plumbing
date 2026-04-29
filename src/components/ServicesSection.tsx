"use client";

import { Sparkles, ScanSearch, PackageOpen, Building2, ArrowRight, CalendarCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import FadeIn from "./FadeIn";

const iconMap: Record<string, React.ElementType> = {
  zap: Sparkles,
  droplets: ScanSearch,
  waves: PackageOpen,
  flame: Building2,
};

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#F8F7F4] py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section header */}
        <FadeIn className="text-center mb-16">
          <span className="inline-block text-green-700 font-semibold uppercase tracking-widest text-xs mb-3">
            What We Clean
          </span>
          <h2 className="text-3xl md:text-[2.7rem] font-extrabold text-slate-900 leading-tight tracking-tight">
            Our Cleaning Services
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto text-[17px] leading-relaxed">
            Professional cleaning tailored to your home. Consistent results every visit.
          </p>
        </FadeIn>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {siteConfig.services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Sparkles;
            return (
              <FadeIn key={service.title} delay={i * 0.08}>
                <div
                  className="group relative bg-white border border-slate-200 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.07)] hover:shadow-[0_14px_30px_-18px_rgba(2,6,23,0.35)] hover:border-green-500/35 hover:-translate-y-1 transition-all duration-300 cursor-default h-full"
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 bg-[#F8F7F4] text-green-700"
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
                  <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-slate-500 group-hover:text-green-700 transition-colors">
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
            className="inline-flex items-center gap-2.5 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:-translate-y-0.5 transition-all"
          >
            <CalendarCheck className="w-4 h-4" />
            Book Your Clean Today
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
