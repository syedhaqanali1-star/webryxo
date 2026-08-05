"use client";

import Script from "next/script";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  Check,
  CreditCard,
  Server,
  ShieldCheck,
} from "lucide-react";

const PAYPAL_CLIENT_ID =
  "BAAY09DoPcP9djMzy7qWcuKxHtZLPueOijopGbsOQ6BhySdFA7K4od_PS_y-rvNVNijH-CJD3swyYJMoNE";

const hostingPlans = [
  {
    id: "monthly",
    name: "Monthly Hosting",
    price: "$15",
    period: "/ month",
    description:
      "Flexible monthly hosting with SSL, backups, monitoring, updates, and ongoing maintenance.",
    features: [
      "Secure SSL certificate",
      "Website hosting",
      "Performance monitoring",
      "Regular backups",
      "Basic maintenance",
    ],
    planId: "P-4EF12423FL020402LNJZIZDI",
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
    planId: "P-3X029043PJ721692PNJZI2QI",
    popular: true,
  },
] as const;

type HostingPlanId = (typeof hostingPlans)[number]["id"];

type PayPalActions = {
  subscription: {
    create: (options: { plan_id: string }) => Promise<string>;
  };
};

type PayPalApproveData = {
  subscriptionID?: string;
};

declare global {
  interface Window {
    paypal?: {
      Buttons: (options: {
        style?: {
          shape?: "rect" | "pill";
          color?: "gold" | "blue" | "silver" | "white" | "black";
          layout?: "vertical" | "horizontal";
          label?: "paypal" | "checkout" | "buynow" | "pay" | "installment" | "subscribe";
        };
        createSubscription: (
          data: unknown,
          actions: PayPalActions
        ) => Promise<string>;
        onApprove: (data: PayPalApproveData) => void;
        onCancel?: () => void;
        onError?: (error: unknown) => void;
      }) => {
        render: (selector: string) => Promise<void>;
      };
    };
  }
}

export default function HostingPaymentPage() {
  const [selectedPlan, setSelectedPlan] = useState<HostingPlanId>("annual");
  const [sdkReady, setSdkReady] = useState(false);
  const [paypalError, setPaypalError] = useState("");

  const selected = useMemo(
    () =>
      hostingPlans.find((plan) => plan.id === selectedPlan) ??
      hostingPlans[1],
    [selectedPlan]
  );

  const renderPayPalButton = useCallback(() => {
    const container = document.getElementById("paypal-subscription-button");

    if (!sdkReady || !container || !window.paypal) return;

    container.innerHTML = "";
    setPaypalError("");

    const buttons = window.paypal.Buttons({
      style: {
        shape: "rect",
        color: "gold",
        layout: "vertical",
        label: "subscribe",
      },
      createSubscription: (_data, actions) =>
        actions.subscription.create({
          plan_id: selected.planId,
        }),
      onApprove: (data) => {
        const subscriptionId = data.subscriptionID ?? "";
        window.location.href = subscriptionId
          ? `/thank-you?subscription=${encodeURIComponent(subscriptionId)}`
          : "/thank-you";
      },
      onCancel: () => {
        setPaypalError(
          "The PayPal checkout was canceled. You can try again whenever you are ready."
        );
      },
      onError: (error) => {
        console.error("PayPal subscription error:", error);
        setPaypalError(
          "PayPal could not start the subscription. Please refresh the page and try again."
        );
      },
    });

    void buttons.render("#paypal-subscription-button");
  }, [sdkReady, selected.planId]);

  useEffect(() => {
    renderPayPalButton();
  }, [renderPayPalButton]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#040404] text-white">
      <Script
        id="paypal-subscriptions-sdk"
        src={`https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&components=buttons&vault=true&intent=subscription`}
        strategy="afterInteractive"
        onLoad={() => setSdkReady(true)}
        onError={() =>
          setPaypalError(
            "The PayPal payment system could not load. Please refresh the page."
          )
        }
      />

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
            Back to Plan Payment
          </a>
        </div>
      </header>

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] px-4 py-2 text-sm text-emerald-200">
            <Check size={15} />
            Final payment step
          </div>

          <h1 className="mt-6 text-5xl font-semibold tracking-[-0.045em] sm:text-6xl">
            Choose your
            <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">
              hosting plan.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/50">
            Choose monthly or annual hosting. PayPal will automatically renew
            the selected subscription until it is canceled.
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
                    {"popular" in plan && plan.popular && (
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
              <h2 className="text-xl font-medium">Subscription summary</h2>
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
                  Your subscription is processed securely through PayPal. You
                  will review and approve the recurring billing terms before
                  subscribing.
                </p>
              </div>
            </div>

            <div className="mt-6 min-h-[50px]">
              {!sdkReady && !paypalError && (
                <p className="text-center text-sm text-white/45">
                  Loading PayPal…
                </p>
              )}
              <div id="paypal-subscription-button" />
            </div>

            {paypalError && (
              <p className="mt-4 rounded-xl border border-red-400/20 bg-red-400/[0.08] p-3 text-sm leading-6 text-red-200">
                {paypalError}
              </p>
            )}

            <p className="mt-5 text-center text-xs leading-6 text-white/30">
              Recurring billing continues until the subscription is canceled.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
