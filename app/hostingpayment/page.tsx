"use client";

import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CreditCard,
  Server,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const hostingPlans = [
  {
    id: "monthly",
    name: "Monthly Hosting",
    price: "$15",
    period: "/ month",
    description:
      "Flexible monthly hosting with SSL, backups, monitoring, and ongoing maintenance.",
    features: [
      "Secure SSL certificate",
      "Website hosting",
      "Performance monitoring",
      "Regular backups",
      "Basic maintenance",
    ],
    checkoutUrl:
      "https://buy.stripe.com/test_9B63cvb7t6Up1bi6aW5kk03",
  },
  {
    id: "annual",
    name: "Annual Hosting",
    price: "$150",
    period: "/ year",
    description:
      "One full year of hosting and maintenance at a discounted annual rate.",
    features: [
      "Everything in monthly hosting",
      "One annual payment",
      "Save $30 per year",
      "Priority renewal support",
      "No monthly billing to manage",
    ],
    checkoutUrl:
      "https://buy.stripe.com/test_fZu3cvgrNceJ3jq8j45kk04",
    popular: true,
  },
];

export default function HostingPage() {
  const [selectedPlan, setSelectedPlan] = useState("annual");

  const selected = useMemo(
    () =>
      hostingPlans.find((plan) => plan.id === selectedPlan) ?? hostingPlans[1],
    [selectedPlan]
  );

  return (
    <main className="min-h-screen overflow-hidden bg-[#040404] text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-[-180px] h-[760px] w-[760px] -translate-x-1/2 rounded-full bg-violet-600/[0.1] blur-[190px]" />
        <div className="absolute right-[-180px] top-[700px] h-[520px] w-[520px] rounded-full bg-fuchsia-600/[0.07] blur-[170px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-black/60 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-3">
            <img
              src="/icon.png"
              alt="Webryxo logo"
              className="h-11 w-11 rounded-xl object-cover"
            />
            <span className="text-xl font-semibold">
              Webryxo<span className="text-violet-400">.</span>
            </span>
          </a>

          <a
            href="/planpayment"
            className="inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Payment
          </a>
        </div>
      </header>

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] px-4 py-2 text-sm text-emerald-200">
            <Check size={15} />
            Website payment complete
          </div>

          <h1 className="mt-6 text-5xl font-semibold tracking-[-0.045em] sm:text-6xl">
            Choose your
            <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">
              hosting plan.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/50">
            Your website package is reserved. The final step is choosing how
            you want your website hosted and maintained.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.72fr]">
          <section>
            <div className="flex items-center gap-3">
              <Server size={20} className="text-violet-300" />
              <h2 className="text-2xl font-medium">Select hosting</h2>
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {hostingPlans.map((plan) => {
                const isSelected = selectedPlan === plan.id;

                return (
                  <button
                    key={plan.id}
                    type="button"
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`relative rounded-[28px] border p-6 text-left transition ${
                      isSelected
                        ? "border-violet-400/60 bg-violet-500/[0.12]"
                        : "border-white/10 bg-white/[0.025] hover:border-white/20"
                    }`}
                  >
                    {plan.popular && (
                      <span className="absolute right-4 top-4 rounded-full bg-emerald-400/10 px-3 py-1 text-[11px] text-emerald-200">
                        Best Value
                      </span>
                    )}

                    <p className="text-lg font-medium">{plan.name}</p>

                    <p className="mt-3 text-4xl font-semibold">
                      {plan.price}
                      <span className="ml-1 text-sm font-normal text-white/35">
                        {plan.period}
                      </span>
                    </p>

                    <p className="mt-4 text-sm leading-6 text-white/40">
                      {plan.description}
                    </p>

                    <div className="mt-5 space-y-3">
                      {plan.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-2 text-sm text-white/60"
                        >
                          <Check
                            size={15}
                            className="mt-0.5 shrink-0 text-violet-300"
                          />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          <aside className="h-fit rounded-[32px] border border-white/10 bg-white/[0.035] p-6 lg:sticky lg:top-28">
            <div className="flex items-center gap-3">
              <CreditCard size={20} className="text-violet-300" />
              <h2 className="text-xl font-medium">Hosting summary</h2>
            </div>

            <div className="mt-6 rounded-[22px] border border-white/[0.07] bg-black/20 p-5">
              <p className="text-xs uppercase tracking-wider text-white/30">
                Selected plan
              </p>

              <div className="mt-3 flex items-center justify-between gap-4">
                <p className="font-medium">{selected.name}</p>
                <p className="text-lg font-semibold">
                  {selected.price}
                  <span className="ml-1 text-xs font-normal text-white/35">
                    {selected.period}
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-[22px] border border-violet-400/20 bg-violet-500/[0.08] p-5">
              <div className="flex gap-3">
                <ShieldCheck
                  size={20}
                  className="mt-0.5 shrink-0 text-violet-300"
                />
                <p className="text-sm leading-6 text-white/55">
                  Payments are processed securely by Stripe. Choose the plan
                  that works best for your business.
                </p>
              </div>
            </div>

            <a
              href={selected.checkoutUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 font-medium text-black transition hover:scale-[1.01]"
            >
              Continue with {selected.name}
              <ArrowRight size={18} />
            </a>

            <div className="mt-5 flex items-center justify-center gap-2 text-xs text-white/30">
              <Sparkles size={14} className="text-violet-300" />
              Stripe test mode is currently active
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
