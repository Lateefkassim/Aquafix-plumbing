import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function HowWeHelpPage() {
  return (
    <main className="bg-white">
      <section className="bg-slate-950 text-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4">
          <span className="inline-block text-teal-300 font-semibold uppercase tracking-widest text-xs mb-4">
            How We Help
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl">
            A simple process that makes stressful plumbing issues manageable.
          </h1>
          <p className="text-slate-300 mt-6 max-w-2xl leading-relaxed">
            You always know what happens next, what it costs, and what outcome to
            expect. No confusion and no pressure.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="space-y-4">
            {siteConfig.processSteps.map((step, i) => (
              <article
                key={step.title}
                className="rounded-2xl border border-slate-200 p-6 md:p-7 bg-white"
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-teal-100 text-teal-800 font-bold text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-xl font-bold text-slate-900">{step.title}</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="/book-call"
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-7 py-3.5 rounded-xl transition-colors"
            >
              Start with a Call <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
