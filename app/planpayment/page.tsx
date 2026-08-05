"use client";

import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CreditCard,
  LockKeyhole,
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
    checkoutUrl: "https://www.paypal.com/ncp/payment/VZ3MT75J2EEGU",
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
    checkoutUrl: "https://www.paypal.com/ncp/payment/B7A4777WLLMUS",
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
    checkoutUrl: "https://www.paypal.com/ncp/payment/X6ZAZ68LYXL3C",
  },
];

export default function PaymentPage() {
  const [selectedPlan, setSelectedPlan] = useState("business");

  const plan = useMemo(
    () => websitePlans.find((item) => item.id === selectedPlan)!,
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
            <img src="/icon.png" alt="Webryxo logo" className="h-11 w-11 rounded-xl object-cover" />
            <span className="text-xl font-semibold">Webryxo<span className="text-violet-400">.</span></span>
          </a>

          <a href="/" className="inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white">
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
            Choose your
            <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">
              website package.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/50">
            Select the website package you approved. After payment, you will continue to the hosting step.
          </p>
        </div>

        <div className="mt-14 grid gap-8 xl:grid-cols-[1.35fr_0.65fr]">
          <section>
            <div className="flex items-center gap-3">
              <CreditCard size={20} className="text-violet-300" />
              <h2 className="text-2xl font-medium">Choose a package</h2>
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-3">
              {websitePlans.map((item) => {
                const selected = item.id === selectedPlan;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedPlan(item.id)}
                    className={`relative rounded-[28px] border p-6 text-left transition ${selected ? "border-violet-400/60 bg-violet-500/[0.12]" : "border-white/10 bg-white/[0.025] hover:border-white/20"}`}
                  >
                    {item.popular && (
                      <span className="absolute right-4 top-4 rounded-full bg-violet-400/15 px-3 py-1 text-[11px] text-violet-200">Most Popular</span>
                    )}
                    <p className="text-lg font-medium">{item.name}</p>
                    <p className="mt-3 text-4xl font-semibold">{item.price}</p>
                    <p className="mt-4 text-sm leading-6 text-white/40">{item.description}</p>
                    <div className="mt-5 space-y-3">
                      {item.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2 text-sm text-white/60">
                          <Check size={15} className="mt-0.5 shrink-0 text-violet-300" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          <aside className="h-fit rounded-[32px] border border-white/10 bg-white/[0.035] p-6 xl:sticky xl:top-28">
            <div className="flex items-center gap-3">
              <LockKeyhole size={20} className="text-violet-300" />
              <h2 className="text-xl font-medium">Payment summary</h2>
            </div>

            <div className="mt-6 rounded-[22px] border border-white/[0.07] bg-black/20 p-5">
              <p className="text-xs uppercase tracking-wider text-white/30">Selected package</p>
              <div className="mt-3 flex items-center justify-between gap-4">
                <p className="font-medium">{plan.name}</p>
                <p className="text-lg font-semibold">{plan.price}</p>
              </div>
            </div>

            <div className="mt-5 rounded-[22px] border border-violet-400/20 bg-violet-500/[0.08] p-5">
              <div className="flex gap-3">
                <ShieldCheck size={20} className="mt-0.5 shrink-0 text-violet-300" />
                <p className="text-sm leading-6 text-white/55">
                  Your payment is processed securely through Stripe. After payment, you will continue to choose monthly or annual hosting.
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

            <p className="mt-5 text-center text-xs leading-6 text-white/30">
              This purchased cannot be canceled or undone once you pay.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}