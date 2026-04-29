import { ShieldCheck, Clock3, Sparkles, PhoneCall } from "lucide-react";
import { siteConfig } from "@/config/site";

const values = [
  {
    icon: ShieldCheck,
    title: "Vetted and Accountable",
    description:
      "Every clean is handled by trained professionals who are background checked and quality reviewed.",
  },
  {
    icon: Clock3,
    title: "Respect for Your Time",
    description:
      "We communicate clear windows, show up prepared, and keep you updated throughout the clean.",
  },
  {
    icon: Sparkles,
    title: "Spotless Standards",
    description:
      "We follow a consistent room-by-room checklist so your home gets dependable results every visit.",
  },
  {
    icon: PhoneCall,
    title: "Human Support",
    description:
      "You can always reach a real person for booking help, updates, and post-clean follow-up.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      <section className="bg-gray-900 text-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4">
          <span className="inline-block text-green-300 font-semibold uppercase tracking-widest text-xs mb-4">
            About {siteConfig.businessName}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl">
            Built to earn trust before, during, and after every cleaning visit.
          </h1>
          <p className="text-slate-300 mt-6 max-w-2xl leading-relaxed">
            We serve homeowners across {siteConfig.city} with transparent pricing,
            vetted professionals, and dependable scheduling. Our goal is simple:
            make cleaning effortless and give you more time back every week.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-5">
            {values.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-200 bg-[#F8F7F4] p-6"
              >
                <div className="w-11 h-11 rounded-xl bg-green-100 text-green-700 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-bold text-slate-900">{title}</h2>
                <p className="text-slate-600 mt-2 leading-relaxed">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
