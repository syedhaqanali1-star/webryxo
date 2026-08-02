"use client";

import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CreditCard,
  ExternalLink,
  LockKeyhole,
  Server,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const websitePlans = [
  {
    id: "starter",
    name: "Starter",
    price: "$299",
    description: "A professional website for a small business or new brand.",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Contact form",
      "SEO foundations",
      "Performance optimization",
    ],
    checkoutUrl:
      "https://buy.stripe.com/test_3cI00j7Vh0w1cU00QC5kk00",
  },
  {
    id: "business",
    name: "Business",
    price: "$499",
    description: "A more complete website for a growing local business.",
    features: [
      "Up to 10 pages",
      "Premium responsive design",
      "Advanced contact sections",
      "Google Maps integration",
      "Analytics setup",
    ],
    checkoutUrl:
      "https://buy.stripe.com/test_9B6aEX3F1ceJdY4eHs5kk01",
    popular: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: "$799",
    description: "A custom solution with advanced design and functionality.",
    features: [
      "Custom page structure",
      "Advanced UI and UX",
      "Booking integrations",
      "Custom functionality",
      "Priority support",
    ],
    checkoutUrl:
      "https://buy.stripe.com/test_3cI5kD0sP0w1g6cfLw5kk02",
  },
];

const hostingOptions = [
  {
    id: "monthly",
    name: "Monthly Hosting",
    price: "$15",
    period: "/ month",
    description: "Flexible monthly hosting, maintenance, and support.",
    checkoutUrl:
      "https://buy.stripe.com/test_9B63cvb7t6Up1bi6aW5kk03",
  },
  {
    id: "annual",
    name: "Annual Hosting",
    price: "$150",
    period: "/ year",
    description: "One year of hosting with two months effectively free.",
    checkoutUrl:
      "https://buy.stripe.com/test_fZu3cvgrNceJ3jq8j45kk04",
    bestValue: true,
  },
];

export default function PaymentPage() {
  const [selectedPlan, setSelectedPlan] = useState("business");
  const [selectedHosting, setSelectedHosting] = useState("annual");

  const plan = useMemo(
    () => websitePlans.find((item) => item.id === selectedPlan)!,
    [selectedPlan]
  );

  const hosting = useMemo(
    () => hostingOptions.find((item) => item.id === selectedHosting)!,
    [selectedHosting]
  );

  return (
    <main className="min-h-screen overflow-hidden bg-[#040404] text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-[-180px] h-[760px] w-[760px] -translate-x-1/2 rounded-full bg-violet-600/[0.1] blur-[190px]" />
        <div className="absolute right-[-180px] top-[780px] h-[520px] w-[520px] rounded-full bg-fuchsia-600/[0.07] blur-[170px]" />
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
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Home
          </a>
        </div>
      </header>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/60">
            <Sparkles size={15} className="text-violet-300" />
            Secure Webryxo payment
          </div>

          <h1 className="mt-6 text-5xl font-semibold tracking-[-0.045em] sm:text-6xl">
            Choose your website
            <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">
              and hosting plan.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/50">
            Select your approved package below. Payments are processed securely
            through Stripe.
          </p>
        </div>

        <div className="mt-14 grid gap-8 xl:grid-cols-[1.35fr_0.65fr]">
          <div className="space-y-8">
            <section>
              <div className="flex items-center gap-3">
                <CreditCard size={20} className="text-violet-300" />
                <h2 className="text-2xl font-medium">1. Website package</h2>
              </div>

              <div className="mt-5 grid gap-5 md:grid-cols-3">
                {websitePlans.map((item) => {
                  const selected = item.id === selectedPlan;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSelectedPlan(item.id)}
                      className={`relative rounded-[28px] border p-6 text-left transition ${
                        selected
                          ? "border-violet-400/60 bg-violet-500/[0.12]"
                          : "border-white/10 bg-white/[0.025] hover:border-white/20"
                      }`}
                    >
                      {item.popular && (
                        <span className="absolute right-4 top-4 rounded-full bg-violet-400/15 px-3 py-1 text-[11px] text-violet-200">
                          Most Popular
                        </span>
                      )}

                      <p className="text-lg font-medium">{item.name}</p>
                      <p className="mt-3 text-4xl font-semibold">{item.price}</p>
                      <p className="mt-4 text-sm leading-6 text-white/40">
                        {item.description}
                      </p>

                      <div className="mt-5 space-y-3">
                        {item.features.map((feature) => (
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

            <section>
              <div className="flex items-center gap-3">
                <Server size={20} className="text-violet-300" />
                <h2 className="text-2xl font-medium">2. Hosting plan</h2>
              </div>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                {hostingOptions.map((item) => {
                  const selected = item.id === selectedHosting;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSelectedHosting(item.id)}
                      className={`relative rounded-[28px] border p-6 text-left transition ${
                        selected
                          ? "border-violet-400/60 bg-violet-500/[0.12]"
                          : "border-white/10 bg-white/[0.025] hover:border-white/20"
                      }`}
                    >
                      {item.bestValue && (
                        <span className="absolute right-4 top-4 rounded-full bg-emerald-400/10 px-3 py-1 text-[11px] text-emerald-200">
                          Best Value
                        </span>
                      )}

                      <p className="text-lg font-medium">{item.name}</p>
                      <p className="mt-3 text-4xl font-semibold">
                        {item.price}
                        <span className="ml-1 text-sm font-normal text-white/35">
                          {item.period}
                        </span>
                      </p>
                      <p className="mt-4 text-sm leading-6 text-white/40">
                        {item.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </section>
          </div>

          <aside className="h-fit rounded-[32px] border border-white/10 bg-white/[0.035] p-6 xl:sticky xl:top-28">
            <div className="flex items-center gap-3">
              <LockKeyhole size={20} className="text-violet-300" />
              <h2 className="text-xl font-medium">Payment summary</h2>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-[22px] border border-white/[0.07] bg-black/20 p-5">
                <p className="text-xs uppercase tracking-wider text-white/30">
                  Website package
                </p>
                <div className="mt-3 flex items-center justify-between gap-4">
                  <p className="font-medium">{plan.name}</p>
                  <p className="text-lg font-semibold">{plan.price}</p>
                </div>
              </div>

              <div className="rounded-[22px] border border-white/[0.07] bg-black/20 p-5">
                <p className="text-xs uppercase tracking-wider text-white/30">
                  Hosting
                </p>
                <div className="mt-3 flex items-center justify-between gap-4">
                  <p className="font-medium">{hosting.name}</p>
                  <p className="text-lg font-semibold">
                    {hosting.price}
                    <span className="ml-1 text-xs font-normal text-white/35">
                      {hosting.period}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-[22px] border border-violet-400/20 bg-violet-500/[0.08] p-5">
              <div className="flex gap-3">
                <ShieldCheck
                  size={20}
                  className="mt-0.5 shrink-0 text-violet-300"
                />
                <p className="text-sm leading-6 text-white/55">
                  Website and hosting are processed as separate secure Stripe
                  checkouts. Complete the website payment first, then return to
                  this page for hosting.
                </p>
              </div>
            </div>

            <a
              href={plan.checkoutUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 font-medium text-black transition hover:scale-[1.01]"
            >
              Pay for {plan.name}
              <ArrowRight size={18} />
            </a>

            <a
              href={hosting.checkoutUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 font-medium"
            >
              Choose {hosting.name}
              <ExternalLink size={17} />
            </a>

            <p className="mt-5 text-center text-xs leading-6 text-white/30">
              These are Stripe test-mode links. No real payment will be
              collected until live-mode links replace them.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
