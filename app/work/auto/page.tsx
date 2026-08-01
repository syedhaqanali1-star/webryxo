"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BatteryCharging,
  Check,
  CircleDollarSign,
  Clock3,
  Gauge,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "General Repair",
    description:
      "Reliable diagnosis and repair for everyday mechanical issues, from worn components to unexpected problems.",
  },
  {
    icon: Gauge,
    title: "Diagnostics",
    description:
      "Modern diagnostic testing to identify warning lights, performance issues, and electrical faults quickly.",
  },
  {
    icon: BatteryCharging,
    title: "Battery & Electrical",
    description:
      "Battery replacement, charging-system checks, starter issues, and electrical troubleshooting.",
  },
  {
    icon: ShieldCheck,
    title: "Preventive Maintenance",
    description:
      "Routine inspections and maintenance to help prevent expensive repairs and keep your vehicle dependable.",
  },
];

const reviews = [
  {
    name: "Chris M.",
    text: "They explained the problem clearly, gave me a fair estimate, and had my car back on the road quickly.",
  },
  {
    name: "Alex R.",
    text: "Professional shop, honest communication, and no pressure to buy repairs I didn't need.",
  },
  {
    name: "Jamie T.",
    text: "Fast service and very easy to deal with. I finally found a repair shop I feel comfortable coming back to.",
  },
];

const benefits = [
  "Clear estimates before work begins",
  "Experienced technicians",
  "Modern diagnostic equipment",
  "Fast communication",
];

export default function AutoDemoPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07090d] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[-140px] top-[-100px] h-[460px] w-[460px] rounded-full bg-blue-500/10 blur-[150px]" />
        <div className="absolute right-[-160px] top-[520px] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[160px]" />
      </div>

      {/* Navbar */}
      <header className="relative z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/10">
              <Wrench size={20} className="text-blue-300" />
            </span>

            <div>
              <p className="text-lg font-semibold tracking-tight">
                Apex Auto Works
              </p>
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/30">
                Service • Repair • Diagnostics
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/55 md:flex">
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#about" className="transition hover:text-white">
              Why Apex
            </a>
            <a href="#reviews" className="transition hover:text-white">
              Reviews
            </a>
            <a href="/book" className="transition hover:text-white">
              Contact
            </a>
          </nav>

          <a
            href="#quote"
            className="rounded-full bg-blue-400 px-5 py-2.5 text-sm font-medium text-black transition hover:scale-[1.03]"
          >
            Request a Quote
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="relative mx-auto grid min-h-[86vh] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr]"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/15 bg-blue-400/[0.06] px-4 py-2 text-sm text-blue-100/70">
            <Sparkles size={15} className="text-blue-300" />
            Honest repairs. Clear communication.
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl md:text-7xl">
            Auto repair
            <span className="block text-blue-300">
              without the guesswork.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/50 md:text-xl">
            Dependable diagnostics, maintenance, and repair with straightforward
            estimates and service you can feel confident about.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#quote"
              className="group inline-flex items-center gap-2 rounded-full bg-blue-400 px-7 py-3.5 font-medium text-black transition hover:scale-[1.03]"
            >
              Get a Repair Quote
              <ArrowRight
                size={17}
                className="transition group-hover:translate-x-1"
              />
            </a>

            <a
              href="tel:+14135550123"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 font-medium text-white transition hover:bg-white/[0.06]"
            >
              <Phone size={17} />
              Call the Shop
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-5 text-sm text-white/40">
            {benefits.map((benefit) => (
              <span key={benefit} className="flex items-center gap-2">
                <Check size={15} className="text-blue-300" />
                {benefit}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Diagnostic panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-[36px] bg-blue-500/10 blur-[90px]" />

          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#111722] to-[#080b10] p-6 shadow-2xl shadow-black/50 sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-white/35">Vehicle Health Check</p>
                <p className="mt-1 text-2xl font-medium">Diagnostic Overview</p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-400/10">
                <Search size={22} className="text-blue-300" />
              </div>
            </div>

            <div className="mt-8 rounded-[26px] border border-white/10 bg-black/20 p-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/40">Engine status</span>
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                  Good
                </span>
              </div>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[88%] rounded-full bg-blue-400" />
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs text-white/30">Battery</p>
                  <p className="mt-2 text-xl font-medium">12.6V</p>
                  <p className="mt-1 text-xs text-white/30">Healthy charge</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs text-white/30">Oil life</p>
                  <p className="mt-2 text-xl font-medium">72%</p>
                  <p className="mt-1 text-xs text-white/30">No action needed</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs text-white/30">Brake system</p>
                  <p className="mt-2 text-xl font-medium">Normal</p>
                  <p className="mt-1 text-xs text-white/30">Inspection passed</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs text-white/30">Tire condition</p>
                  <p className="mt-2 text-xl font-medium">Good</p>
                  <p className="mt-1 text-xs text-white/30">Even wear</p>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between rounded-2xl border border-blue-400/10 bg-blue-400/[0.05] px-5 py-4">
              <div>
                <p className="text-sm font-medium">Need an inspection?</p>
                <p className="mt-1 text-xs text-white/35">
                  We can diagnose the issue before major repairs begin.
                </p>
              </div>

              <ArrowRight size={18} className="text-blue-300" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Trust Strip */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
        <div className="grid overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.025] md:grid-cols-3">
          <div className="border-b border-white/10 p-7 md:border-b-0 md:border-r">
            <Clock3 size={20} className="text-blue-300" />
            <p className="mt-4 text-lg font-medium">Fast turnaround</p>
            <p className="mt-2 text-sm text-white/35">
              Clear timelines and regular updates
            </p>
          </div>

          <div className="border-b border-white/10 p-7 md:border-b-0 md:border-r">
            <CircleDollarSign size={20} className="text-blue-300" />
            <p className="mt-4 text-lg font-medium">Upfront estimates</p>
            <p className="mt-2 text-sm text-white/35">
              Know the cost before work begins
            </p>
          </div>

          <div className="p-7">
            <ShieldCheck size={20} className="text-blue-300" />
            <p className="mt-4 text-lg font-medium">Trusted service</p>
            <p className="mt-2 text-sm text-white/35">
              Repair recommendations you can understand
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="relative z-10 mx-auto max-w-7xl px-6 py-28"
      >
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-300/60">
            What we do
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl md:text-6xl">
            Complete care for your vehicle.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/45">
            From routine maintenance to complicated diagnostics, Apex Auto
            Works helps keep your vehicle reliable and safe.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                whileHover={{ y: -6 }}
                className="group rounded-[28px] border border-white/10 bg-white/[0.025] p-7 transition hover:bg-white/[0.04]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-blue-400/[0.08]">
                  <Icon size={22} className="text-blue-300" />
                </div>

                <h3 className="mt-7 text-2xl font-medium">{service.title}</h3>

                <p className="mt-4 leading-7 text-white/40">
                  {service.description}
                </p>

                <a
                  href="#quote"
                  className="mt-8 inline-flex items-center gap-2 text-sm text-white/55 transition group-hover:text-white"
                >
                  Request service
                  <ArrowRight size={15} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Why Apex */}
      <section
        id="about"
        className="relative z-10 mx-auto grid max-w-7xl gap-14 px-6 py-28 lg:grid-cols-[1fr_1fr] lg:items-center"
      >
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-blue-300/60">
            Why Apex
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            Better information means better decisions.
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/45">
            Car repairs can be stressful when you don't know what is actually
            wrong or what a repair should cost. That's why we focus on clear
            communication before any major work begins.
          </p>

          <div className="mt-9 space-y-4">
            {[
              "We explain what we found.",
              "We tell you what should be fixed now.",
              "We tell you what can wait.",
              "We give you a clear estimate before work begins.",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-4"
              >
                <Check size={17} className="text-blue-300" />
                <p className="text-white/55">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-blue-500/15 via-white/[0.03] to-transparent p-7 sm:p-9">
          <div className="rounded-[26px] border border-white/10 bg-black/20 p-7">
            <p className="text-sm text-blue-200/50">Today's shop snapshot</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-3xl font-medium">18</p>
                <p className="mt-2 text-sm text-white/35">Vehicles serviced</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-3xl font-medium">4.9★</p>
                <p className="mt-2 text-sm text-white/35">
                  Average customer rating
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-3xl font-medium">Same day</p>
                <p className="mt-2 text-sm text-white/35">
                  For many common repairs
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-3xl font-medium">100%</p>
                <p className="mt-2 text-sm text-white/35">
                  Estimate before repair
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section
        id="reviews"
        className="relative z-10 mx-auto max-w-7xl px-6 py-28"
      >
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-300/60">
            Customer reviews
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            Trust starts with transparency.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-[26px] border border-white/10 bg-white/[0.025] p-7"
            >
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={16}
                    className="fill-blue-300 text-blue-300"
                  />
                ))}
              </div>

              <p className="mt-6 leading-7 text-white/45">
                “{review.text}”
              </p>

              <p className="mt-7 text-sm font-medium">{review.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section
        id="quote"
        className="relative z-10 mx-auto max-w-7xl px-6 py-28"
      >
        <div className="overflow-hidden rounded-[36px] border border-blue-400/10 bg-gradient-to-br from-blue-500/[0.14] via-white/[0.03] to-cyan-500/[0.08] p-7 sm:p-10 lg:p-14">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-blue-200/60">
                Request service
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
                Tell us what's going on.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/45">
                Give us a few details about your vehicle and the issue you're
                experiencing. We'll help you figure out the next step.
              </p>

              <div className="mt-9 space-y-4">
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-blue-300" />
                  <span className="text-white/50">(413) 555-0198</span>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-blue-300" />
                  <span className="text-white/50">
                    225 Commerce Drive, Springfield, MA
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Clock3 size={18} className="text-blue-300" />
                  <span className="text-white/50">
                    Mon-Fri 8 AM-6 PM • Sat 8 AM-2 PM
                  </span>
                </div>
              </div>
            </div>

            <form
              onSubmit={(event) => event.preventDefault()}
              className="rounded-[28px] border border-white/10 bg-black/20 p-6"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="auto-name"
                    className="text-sm text-white/55"
                  >
                    Name
                  </label>

                  <input
                    id="auto-name"
                    type="text"
                    placeholder="Your name"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 outline-none placeholder:text-white/20 focus:border-blue-400/50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="auto-phone"
                    className="text-sm text-white/55"
                  >
                    Phone
                  </label>

                  <input
                    id="auto-phone"
                    type="tel"
                    placeholder="(413) 555-0000"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 outline-none placeholder:text-white/20 focus:border-blue-400/50"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="vehicle"
                  className="text-sm text-white/55"
                >
                  Vehicle
                </label>

                <input
                  id="vehicle"
                  type="text"
                  placeholder="Example: 2018 Honda Accord"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 outline-none placeholder:text-white/20 focus:border-blue-400/50"
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="issue"
                  className="text-sm text-white/55"
                >
                  What's happening?
                </label>

                <textarea
                  id="issue"
                  rows={5}
                  placeholder="Describe the problem, warning lights, noises, or service you need..."
                  className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 outline-none placeholder:text-white/20 focus:border-blue-400/50"
                />
              </div>

              <button
                type="submit"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-400 px-5 py-4 font-medium text-black transition hover:bg-blue-300"
              >
                Request Estimate
                <ArrowRight size={17} />
              </button>

              <p className="mt-3 text-center text-xs text-white/25">
                Demo form for Webryxo portfolio.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative z-10 mx-auto max-w-7xl px-6 pb-24"
      >
        <div className="flex flex-col items-start justify-between gap-8 rounded-[30px] border border-white/10 bg-white/[0.025] p-7 sm:flex-row sm:items-center">
          <div>
            <p className="text-xl font-medium">Need help today?</p>
            <p className="mt-2 text-sm text-white/35">
              Call Apex Auto Works and speak with the shop directly.
            </p>
          </div>

          <a
            href="tel:+14135550198"
            className="inline-flex items-center gap-2 rounded-full bg-blue-400 px-6 py-3 font-medium text-black"
          >
            <Phone size={17} />
            Call Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-6 py-10 text-sm text-white/30 sm:flex-row">
          <p>© {new Date().getFullYear()} Apex Auto Works.</p>
          <p>Demo website by Webryxo.</p>
        </div>
      </footer>
    </main>
  );
}