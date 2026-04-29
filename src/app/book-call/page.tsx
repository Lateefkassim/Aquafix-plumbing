import { CalendarCheck, Phone } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function BookCallPage() {
  return (
    <main className="bg-white">
      <section className="bg-gray-900 text-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="inline-block text-green-300 font-semibold uppercase tracking-widest text-xs mb-4">
            Book a Clean
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Talk to our cleaning team and book your perfect slot.
          </h1>
          <p className="text-slate-300 mt-5 leading-relaxed">
            Choose your preferred way to start. Call now or use our quick booking
            form to schedule your cleaning.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 grid sm:grid-cols-2 gap-4">
          <a
            href={siteConfig.phoneHref}
            className="rounded-2xl border border-slate-200 p-6 bg-white hover:border-green-300 transition-colors"
          >
            <Phone className="w-6 h-6 text-green-700" />
            <h2 className="text-xl font-bold text-slate-900 mt-4">Call Now</h2>
            <p className="text-slate-600 mt-2">{siteConfig.phone}</p>
          </a>
          <Link
            href="/#quote"
            className="rounded-2xl border border-slate-200 p-6 bg-white hover:border-green-300 transition-colors"
          >
            <CalendarCheck className="w-6 h-6 text-green-700" />
            <h2 className="text-xl font-bold text-slate-900 mt-4">
              Book with Form
            </h2>
            <p className="text-slate-600 mt-2">
              Share your details and we will follow up quickly.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
