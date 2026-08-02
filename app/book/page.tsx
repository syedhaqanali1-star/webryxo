"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Loader2,
  Sparkles,
} from "lucide-react";

const packages = [
  {
    value: "Starter",
    name: "Starter",
    price: "$299",
    description: "Best for a simple 1–3 page business website.",
  },
  {
    value: "Business",
    name: "Business",
    price: "$499",
    description: "Best for a more complete business website.",
    popular: true,
  },
  {
    value: "Premium",
    name: "Premium",
    price: "$799+",
    description: "Best for custom pages, features, and advanced design.",
  },
];

const serviceOptions = [
  "New Website",
  "Website Redesign",
  "Hosting",
  "SEO Setup",
  "Website Maintenance",
  "Booking System",
  "Online Store",
];

const budgetOptions = [
  "Under $300",
  "$300–$700",
  "$700–$1,500",
  "$1,500+",
];

export default function BookPage() {
  const router = useRouter();

  const [selectedPackage, setSelectedPackage] = useState("Business");
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "New Website",
  ]);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  function toggleService(service: string) {
    setSelectedServices((current) =>
      current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service]
    );
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSending(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "");
    const business = String(formData.get("business") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const businessType = String(formData.get("businessType") || "");
    const website = String(formData.get("website") || "");
    const budget = String(formData.get("budget") || "");
    const timeline = String(formData.get("timeline") || "");
    const description = String(formData.get("description") || "");

    const message = `
New Free Consultation Request

Selected package: ${selectedPackage}
Requested services: ${selectedServices.join(", ") || "Not selected"}
Business type: ${businessType || "Not provided"}
Budget: ${budget || "Not provided"}
Preferred timeline: ${timeline || "Not provided"}

Project details:
${description}
    `.trim();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          business,
          email,
          phone,
          project: `${selectedPackage} Package`,
          website,
          message,
          businessType,
          selectedPackage,
          selectedServices,
          budget,
          timeline,
          description,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Your request could not be sent.");
      }

      router.push("/thank-you");
    } catch (submitError) {
      console.error(submitError);
      setError(
        "Your request could not be sent. Please check your information and try again."
      );
      setSending(false);
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#040404] text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-[-180px] h-[760px] w-[760px] -translate-x-1/2 rounded-full bg-violet-600/[0.09] blur-[190px]" />
        <div className="absolute right-[-180px] top-[720px] h-[520px] w-[520px] rounded-full bg-fuchsia-600/[0.07] blur-[170px]" />
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

      <section className="relative z-10 mx-auto max-w-5xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/60">
            <Sparkles size={15} className="text-violet-300" />
            Free consultation
          </div>

          <h1 className="mt-6 text-5xl font-semibold tracking-[-0.045em] sm:text-6xl">
            Tell us about
            <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">
              your next website.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/50">
            Complete the form below and Webryxo will review your project.
            We usually respond within one business day.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-14 space-y-8 rounded-[34px] border border-white/10 bg-white/[0.025] p-6 sm:p-9"
        >
          <section>
            <p className="text-sm font-medium text-violet-300">
              1. Your information
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <input
                name="name"
                required
                placeholder="Full name"
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 outline-none transition focus:border-violet-400/50"
              />

              <input
                name="business"
                required
                placeholder="Business name"
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 outline-none transition focus:border-violet-400/50"
              />

              <input
                name="email"
                type="email"
                required
                placeholder="Email address"
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 outline-none transition focus:border-violet-400/50"
              />

              <input
                name="phone"
                placeholder="Phone number"
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 outline-none transition focus:border-violet-400/50"
              />

              <input
                name="businessType"
                required
                placeholder="Business type, e.g. restaurant"
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 outline-none transition focus:border-violet-400/50"
              />

              <input
                name="website"
                placeholder="Current website (optional)"
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 outline-none transition focus:border-violet-400/50"
              />
            </div>
          </section>

          <section>
            <p className="text-sm font-medium text-violet-300">
              2. Choose a package
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {packages.map((item) => {
                const selected = selectedPackage === item.value;

                return (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => setSelectedPackage(item.value)}
                    className={`relative rounded-[24px] border p-5 text-left transition ${
                      selected
                        ? "border-violet-400/60 bg-violet-500/[0.12]"
                        : "border-white/10 bg-black/20 hover:border-white/20"
                    }`}
                  >
                    {item.popular && (
                      <span className="absolute right-4 top-4 rounded-full bg-violet-400/15 px-2.5 py-1 text-[11px] text-violet-200">
                        Popular
                      </span>
                    )}

                    <p className="font-medium">{item.name}</p>
                    <p className="mt-2 text-3xl font-semibold">{item.price}</p>
                    <p className="mt-3 text-sm leading-6 text-white/40">
                      {item.description}
                    </p>

                    {selected && (
                      <div className="mt-4 flex items-center gap-2 text-sm text-violet-300">
                        <Check size={15} />
                        Selected
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </section>

          <section>
            <p className="text-sm font-medium text-violet-300">
              3. What services do you need?
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {serviceOptions.map((service) => {
                const selected = selectedServices.includes(service);

                return (
                  <button
                    key={service}
                    type="button"
                    onClick={() => toggleService(service)}
                    className={`flex items-center gap-3 rounded-2xl border px-4 py-3.5 text-left transition ${
                      selected
                        ? "border-violet-400/50 bg-violet-500/[0.1]"
                        : "border-white/10 bg-white/[0.025]"
                    }`}
                  >
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        selected ? "bg-violet-400 text-black" : "bg-white/10"
                      }`}
                    >
                      {selected && <Check size={13} />}
                    </span>

                    <span className="text-sm">{service}</span>
                  </button>
                );
              })}
            </div>
          </section>

          <section>
            <p className="text-sm font-medium text-violet-300">
              4. Project details
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <select
                name="budget"
                required
                defaultValue=""
                className="rounded-2xl border border-white/10 bg-[#111] px-4 py-3.5 outline-none"
              >
                <option value="" disabled>
                  Select your budget
                </option>

                {budgetOptions.map((budget) => (
                  <option key={budget} value={budget}>
                    {budget}
                  </option>
                ))}
              </select>

              <select
                name="timeline"
                required
                defaultValue=""
                className="rounded-2xl border border-white/10 bg-[#111] px-4 py-3.5 outline-none"
              >
                <option value="" disabled>
                  Preferred timeline
                </option>
                <option value="As soon as possible">As soon as possible</option>
                <option value="Within 2–4 weeks">Within 2–4 weeks</option>
                <option value="Within 1–2 months">Within 1–2 months</option>
                <option value="Still planning">Still planning</option>
              </select>
            </div>

            <textarea
              name="description"
              required
              rows={6}
              placeholder="Tell us what you want the website to include, what your business does, and any ideas you already have..."
              className="mt-4 w-full resize-none rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 outline-none transition focus:border-violet-400/50"
            />
          </section>

          {error && (
            <p className="rounded-2xl border border-red-400/20 bg-red-400/[0.08] px-4 py-3 text-sm text-red-300">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={sending}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 font-medium text-black transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {sending ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Sending your request...
              </>
            ) : (
              <>
                Book My Free Consultation
                <ArrowRight size={18} />
              </>
            )}
          </button>

          <p className="text-center text-xs leading-6 text-white/30">
            No payment is required to submit this consultation request.
          </p>
        </form>
      </section>
    </main>
  );
}
