import { ShieldCheck, Clock3, Wrench, PhoneCall } from "lucide-react";
import { siteConfig } from "@/config/site";

const values = [
  {
    icon: ShieldCheck,
    title: "Licensed and Accountable",
    description:
      "Every job is handled by trained professionals who follow code and stand behind their work.",
  },
  {
    icon: Clock3,
    title: "Respect for Your Time",
    description:
      "We communicate clear windows, show up prepared, and keep you updated throughout the repair.",
  },
  {
    icon: Wrench,
    title: "Fixes That Last",
    description:
      "We focus on root-cause solutions, not quick patches that lead to repeat issues.",
  },
  {
    icon: PhoneCall,
    title: "Human Support",
    description:
      "You can always reach a real person for help, updates, and follow-up after service.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      <section className="bg-slate-950 text-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4">
          <span className="inline-block text-teal-300 font-semibold uppercase tracking-widest text-xs mb-4">
            About {siteConfig.businessName}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl">
            Built to earn trust before, during, and after every plumbing job.
          </h1>
          <p className="text-slate-300 mt-6 max-w-2xl leading-relaxed">
            We serve homeowners across {siteConfig.city} with transparent pricing,
            licensed workmanship, and emergency response when minutes matter.
            Our goal is simple: solve the issue clearly and make the process easy
            for your household.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-5">
            {values.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="w-11 h-11 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-4">
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
