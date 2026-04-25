"use client";

import { useState } from "react";
import { CalendarCheck, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/86 backdrop-blur-2xl border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 h-[4.25rem] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center group-hover:bg-teal-500 transition-colors">
            <svg
              className="w-4 h-4 text-white transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </div>
          <span className="font-extrabold text-slate-900 text-base tracking-tight">
            {siteConfig.businessName}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600">
          <Link
            href="/#services"
            className="hover:text-slate-900 transition-colors"
          >
            Services
          </Link>
          <Link href="/#reviews" className="hover:text-slate-900 transition-colors">
            Reviews
          </Link>
          <Link href="/#quote" className="hover:text-slate-900 transition-colors">
            Get Quote
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center gap-2 border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 font-bold text-sm px-3.5 py-2.5 rounded-xl transition-all"
          >
            <Phone className="w-4 h-4" />
            Call
          </a>
          <Link
            href="/book-call"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-teal-600 text-white font-bold text-sm px-4 py-2.5 rounded-xl transition-all shadow-[0_8px_20px_-14px_rgba(2,6,23,0.9)]"
          >
            <CalendarCheck className="w-4 h-4" />
            Book a Call
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          className="sm:hidden w-10 h-10 rounded-xl border border-slate-200 bg-white shadow-[0_6px_18px_-14px_rgba(2,6,23,0.65)] flex items-center justify-center text-slate-700"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="sm:hidden border-t border-slate-200/80 bg-white/95 backdrop-blur-2xl">
          <div className="max-w-5xl mx-auto px-4 py-4">
            <nav className="grid gap-1 text-[15px] font-semibold text-slate-700">
              <Link onClick={closeMobile} href="/#services" className="px-3 py-2.5 rounded-lg hover:bg-slate-100">
                Services
              </Link>
              <Link onClick={closeMobile} href="/#reviews" className="px-3 py-2.5 rounded-lg hover:bg-slate-100">
                Reviews
              </Link>
              <Link onClick={closeMobile} href="/#quote" className="px-3 py-2.5 rounded-lg hover:bg-slate-100">
                Get Quote
              </Link>
            </nav>

            <div className="grid grid-cols-2 gap-2 mt-4">
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center justify-center gap-2 border border-slate-200 text-slate-800 font-bold py-3 rounded-xl"
              >
                <Phone className="w-4 h-4" />
                Call
              </a>
              <Link
                onClick={closeMobile}
                href="/book-call"
                className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white font-bold py-3 rounded-xl"
              >
                <CalendarCheck className="w-4 h-4" />
                Book
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
