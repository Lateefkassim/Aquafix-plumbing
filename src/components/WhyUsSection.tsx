"use client";

import { Clock, ShieldCheck, DollarSign, PhoneCall } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import FadeIn from "./FadeIn";
const iconMap: Record<string, React.ElementType> = {
  clock: Clock,
  "shield-check": ShieldCheck,
  "dollar-sign": DollarSign,
  "phone-call": PhoneCall,
};

export default function WhyUsSection() {
  return (
    <section id="why-us" className="bg-gray-900 text-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left — text content */}
          <div>
            <FadeIn direction="left">
              <span className="inline-block text-green-300 font-semibold uppercase tracking-widest text-xs mb-4">
                Why Homeowners Trust Us
              </span>
              <h2 className="text-3xl md:text-[2.9rem] font-extrabold leading-tight tracking-tight mb-5">
                The <span className="text-green-300">SparkClean</span> Difference
              </h2>
              <p className="text-slate-400 text-[17px] leading-relaxed mb-10 max-w-xl">
                We don&apos;t just clean homes — we give you your time back.
                Every clean comes with vetted professionals, upfront pricing, and
                our satisfaction guarantee.
              </p>
            </FadeIn>

            <div className="space-y-6">
              {siteConfig.whyUs.map((item, i) => {
                const Icon = iconMap[item.icon] ?? Clock;
                return (
                  <FadeIn key={item.title} delay={i * 0.1} direction="left">
                    <div className="flex items-start gap-4 group">
                      <div className="w-11 h-11 bg-green-400/10 border border-green-300/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-400 group-hover:border-green-400 transition-all duration-300">
                        <Icon className="w-5 h-5 text-green-300 group-hover:text-gray-900 transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-sm mb-0.5">
                          {item.title}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>

          {/* Right — photo */}
          <FadeIn direction="right" className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-[0_24px_60px_-32px_rgba(2,6,23,0.9)]">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80"
                alt="Professional house cleaner actively working in a bright home"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

              {/* Floating stat card */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/12 backdrop-blur-md border border-white/20 rounded-xl p-4 flex items-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-extrabold text-white">500+</div>
                  <div className="text-xs text-slate-300 font-medium">Homes Cleaned</div>
                </div>
                <div className="w-px h-8 bg-white/20" />
                <div className="text-center">
                  <div className="text-2xl font-extrabold text-green-300">{siteConfig.overallRating}★</div>
                  <div className="text-xs text-slate-300 font-medium">Avg. Rating</div>
                </div>
                <div className="w-px h-8 bg-white/20" />
                <div className="text-center">
                  <div className="text-2xl font-extrabold text-white">Same Day</div>
                  <div className="text-xs text-slate-300 font-medium">Booking</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
