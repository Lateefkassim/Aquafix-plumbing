"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  CheckCircle,
  Loader2,
  AlertCircle,
  Phone,
  Clock,
  Star,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import FadeIn from "./FadeIn";

type FormData = {
  name: string;
  phone: string;
  email: string;
  service: string;
  homeSize: string;
  message: string;
};

const trustPoints = [
  { icon: Clock, text: "We confirm your booking within minutes" },
  { icon: ShieldCheck, text: "Background checked and fully insured" },
  { icon: Star, text: `${siteConfig.overallRating}★ rated by ${siteConfig.reviewCount} customers` },
  { icon: Phone, text: "No spam. Direct service communication only" },
];

export default function QuoteFormSection() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="quote" className="bg-white py-10 md:py-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section header */}
        <FadeIn className="text-center mb-14">
          <span className="inline-block text-green-700 font-semibold uppercase tracking-widest text-xs mb-3">
            Book Now
          </span>
          <h2 className="text-3xl md:text-[2.7rem] font-extrabold text-slate-900 tracking-tight">
            Book Your Clean Today
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto text-[17px] leading-relaxed">
            Tell us about your home and we&apos;ll confirm your booking within
            minutes.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-5 gap-8 md:gap-10 items-start">
          {/* ── Left: Trust sidebar ── */}
          <FadeIn direction="left" className="md:col-span-2">
            <div className="bg-gray-900 text-white rounded-2xl p-7 h-full shadow-[0_18px_40px_-25px_rgba(2,6,23,0.9)]">
              {/* Photo */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=900&q=80"
                  alt="Smiling cleaner in uniform inside a bright home"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 280px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
              </div>

              <h3 className="text-lg font-bold mb-1">{siteConfig.businessName}</h3>
              <p className="text-slate-400 text-sm mb-6">
                Serving {siteConfig.city} & surrounding areas
              </p>

              <div className="space-y-4">
                {trustPoints.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-400/10 border border-green-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-green-300" />
                    </div>
                    <span className="text-slate-300 text-sm">{text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-slate-400 text-xs mb-2">
                  Need immediate help instead?
                </p>
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center gap-2 text-green-300 font-bold hover:text-green-200 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {siteConfig.phone}
                </a>
              </div>
            </div>
          </FadeIn>

          {/* ── Right: Form ── */}
          <FadeIn direction="right" className="md:col-span-3">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-7 md:p-8 shadow-[0_1px_2px_rgba(2,6,23,0.05)]">
              {status === "success" ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Request Received!
                  </h3>
                  <p className="text-slate-500 mb-6 text-sm leading-relaxed">
                    We&apos;ll reach out shortly to confirm your cleaning slot.
                  </p>
                  <a
                    href={siteConfig.phoneHref}
                    className="inline-flex items-center gap-2 bg-slate-900 text-white font-bold px-6 py-3 rounded-xl hover:bg-slate-800 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Urgent issue? Call now
                  </a>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="space-y-5"
                >
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-slate-700 mb-1.5"
                    >
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="John Smith"
                      {...register("name", { required: "Name is required" })}
                      className={`w-full bg-white border rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition ${
                        errors.name
                          ? "border-red-400 bg-red-50"
                          : "border-slate-200"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-slate-700 mb-1.5"
                    >
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="(555) 000-1234"
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[\d\s\-().+]{7,}$/,
                          message: "Enter a valid phone number",
                        },
                      })}
                      className={`w-full bg-white border rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition ${
                        errors.phone
                          ? "border-red-400 bg-red-50"
                          : "border-slate-200"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-slate-700 mb-1.5"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Enter a valid email address",
                        },
                      })}
                      className={`w-full bg-white border rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition ${
                        errors.email
                          ? "border-red-400 bg-red-50"
                          : "border-slate-200"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Service */}
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-semibold text-slate-700 mb-1.5"
                    >
                      Service Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      {...register("service", {
                        required: "Please select a service",
                      })}
                      className={`w-full bg-white border rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition ${
                        errors.service
                          ? "border-red-400 bg-red-50"
                          : "border-slate-200"
                      }`}
                    >
                      <option value="">— Select a service —</option>
                      {siteConfig.serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.service.message}
                      </p>
                    )}
                  </div>

                  {/* Home size */}
                  <div>
                    <label
                      htmlFor="homeSize"
                      className="block text-sm font-semibold text-slate-700 mb-1.5"
                    >
                      Home Size <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="homeSize"
                      {...register("homeSize", {
                        required: "Please select a home size",
                      })}
                      className={`w-full bg-white border rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition ${
                        errors.homeSize
                          ? "border-red-400 bg-red-50"
                          : "border-slate-200"
                      }`}
                    >
                      <option value="">— Select home size —</option>
                      <option value="Studio/1BR">Studio/1BR</option>
                      <option value="2-3 Bedrooms">2-3 Bedrooms</option>
                      <option value="4+ Bedrooms">4+ Bedrooms</option>
                      <option value="Commercial Space">Commercial Space</option>
                    </select>
                    {errors.homeSize && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.homeSize.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-slate-700 mb-1.5"
                    >
                      Message{" "}
                      <span className="text-slate-400 font-normal">
                        (optional)
                      </span>
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Any specific instructions or areas to focus on?"
                      {...register("message")}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition resize-none"
                    />
                  </div>

                  {/* Error state */}
                  {status === "error" && (
                    <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>
                        Something went wrong. Please call us directly at{" "}
                        <a
                          href={siteConfig.phoneHref}
                          className="font-semibold underline"
                        >
                          {siteConfig.phone}
                        </a>
                      </span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-60 text-white font-bold text-base py-4 rounded-xl shadow-[0_14px_30px_-20px_rgba(22,163,74,0.75)] hover:-translate-y-0.5 disabled:translate-y-0 transition-all flex items-center justify-center gap-2"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5" />
                        Book My Clean →
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-400">
                    No spam. We&apos;ll only contact you about your request.
                  </p>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
