"use client";

import { Star, Quote } from "lucide-react";
import { siteConfig } from "@/config/site";
import FadeIn from "./FadeIn";

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < count ? "text-green-600 fill-green-600" : "text-slate-200"
          }`}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="bg-[#F8F7F4] py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <span className="inline-block text-green-700 font-semibold uppercase tracking-widest text-xs mb-3">
            Customer Reviews
          </span>
          <h2 className="text-3xl md:text-[2.7rem] font-extrabold text-slate-900 tracking-tight">
            Trusted by Homeowners Across {siteConfig.city}
          </h2>

          {/* Overall rating badge */}
          <div className="inline-flex items-center gap-3 bg-white border border-slate-200 rounded-2xl px-6 py-3 mt-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)]">
            <span className="text-4xl font-extrabold text-slate-900">
              {siteConfig.overallRating}
            </span>
            <div>
              <div className="flex gap-0.5 mb-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-green-600 fill-green-600"
                  />
                ))}
              </div>
              <p className="text-slate-400 text-xs font-medium">
                {siteConfig.reviewCount} verified reviews
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Review grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {siteConfig.testimonials.map((review, i) => (
            <FadeIn key={review.name} delay={i * 0.08}>
              <div className="bg-white border border-slate-200 rounded-2xl p-7 shadow-[0_1px_2px_rgba(2,6,23,0.06)] hover:shadow-[0_20px_35px_-20px_rgba(2,6,23,0.28)] hover:border-slate-300 transition-all duration-300 h-full flex flex-col">
                {/* Quote icon */}
                <Quote className="w-6 h-6 text-green-200 mb-3 flex-shrink-0" />

                <StarRating count={review.rating} />

                <p className="text-slate-700 mt-4 mb-6 leading-relaxed text-[15px] flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    >
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm leading-tight">
                        {review.name}
                      </p>
                      <p className="text-slate-400 text-xs">{review.location}</p>
                    </div>
                  </div>
                  <span className="text-xs text-emerald-700 font-semibold bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                    ✓ Verified
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
