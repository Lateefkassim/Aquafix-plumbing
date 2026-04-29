"use client";

import { Phone, CalendarCheck, CheckCircle, Star } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
});

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gray-900">
      {/* Background photo with dark overlay */}
      <Image
        src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=80"
        alt="Professional cleaner working in a bright home"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Layered gradient overlay — darker at top, lighter at bottom for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/82 via-gray-900/72 to-gray-800/62" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 py-20 md:py-28">
        {/* Urgency pill */}
        <motion.div {...fadeUp(0)} className="mb-6">
          <span className="inline-flex items-center gap-2 bg-green-500/15 border border-green-300/30 text-green-100 text-xs font-semibold tracking-wide px-4 py-1.5 rounded-full backdrop-blur-sm">
            <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
            Trusted Local Team - Same Day Available
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.08)}
          className="text-4xl md:text-[4rem] font-extrabold text-white leading-[1.04] tracking-tight mb-6 max-w-3xl"
        >
          {siteConfig.hero.headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fadeUp(0.16)}
          className="text-lg md:text-xl text-slate-300 mb-9 max-w-2xl leading-relaxed"
        >
          {siteConfig.hero.subheadline}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          {...fadeUp(0.22)}
          className="flex flex-col sm:flex-row gap-3 mb-12"
        >
          <a
            href="/book-call"
            className="inline-flex items-center justify-center gap-2.5 bg-green-600 hover:bg-green-700 text-white font-bold text-base px-7 py-4 rounded-xl shadow-[0_14px_30px_-18px_rgba(22,163,74,0.85)] hover:-translate-y-0.5 active:translate-y-0 transition-all"
          >
            <CalendarCheck className="w-4 h-4" />
            Book a Clean
          </a>
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center justify-center gap-2.5 border border-white/45 bg-white/5 hover:bg-white/12 text-white font-bold text-base px-7 py-4 rounded-xl hover:-translate-y-0.5 active:translate-y-0 transition-all backdrop-blur-sm"
          >
            <Phone className="w-4 h-4" />
            Call {siteConfig.phone}
          </a>
        </motion.div>

        {/* Trust row */}
        <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-x-6 gap-y-3 items-center">
          {/* Star rating */}
          <div className="flex items-center gap-1.5">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 text-green-300 fill-green-300" />
              ))}
            </div>
            <span className="text-white text-sm font-semibold">{siteConfig.overallRating}</span>
            <span className="text-slate-400 text-sm">({siteConfig.reviewCount} reviews)</span>
          </div>

          <div className="w-px h-4 bg-white/20 hidden sm:block" />

          {/* Trust badges */}
          {siteConfig.trustBadges.map((badge) => (
            <div key={badge} className="flex items-center gap-1.5 text-slate-300 text-sm">
              <CheckCircle className="w-4 h-4 text-green-300 flex-shrink-0" />
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
