import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-slate-400 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-slate-800">
          {/* Brand */}
          <div>
            <p className="text-white font-extrabold text-lg mb-2">
              {siteConfig.businessName}
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
              Professional home cleaning for {siteConfig.city} and surrounding
              areas. Trusted teams, flexible schedules, and spotless results.
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="text-slate-300 font-semibold text-sm mb-4">
              Contact Us
            </p>
            <div className="space-y-2.5">
              <a
                href="/book-call"
                className="flex items-center gap-2.5 text-sm hover:text-green-300 transition-colors"
              >
                Book a Clean
              </a>
              <a
                href={siteConfig.phoneHref}
                className="flex items-center gap-2.5 text-sm hover:text-green-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-green-300 flex-shrink-0" />
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 text-sm hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-500 flex-shrink-0" />
                {siteConfig.email}
              </a>
              <div className="flex items-center gap-2.5 text-sm">
                <MapPin className="w-4 h-4 text-slate-500 flex-shrink-0" />
                {siteConfig.city}, {siteConfig.state}
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <p className="text-slate-300 font-semibold text-sm mb-4">
              Service Hours
            </p>
            <div className="space-y-1.5 text-sm mb-4">
              <div className="flex justify-between">
                <span>Regular Bookings</span>
                <span className="text-green-300 font-semibold">Mon-Sat 8am-6pm</span>
              </div>
              <div className="flex justify-between">
                <span>Emergency/Same Day</span>
                <span className="text-slate-300">Subject to availability</span>
              </div>
              <div className="flex justify-between">
                <span>Sundays</span>
                <span className="text-slate-300">Selected bookings only</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.businessName}. All
            rights reserved.
          </p>
          <p>Serving {siteConfig.city}, {siteConfig.state} &amp; surrounding areas</p>
        </div>
      </div>
    </footer>
  );
}
