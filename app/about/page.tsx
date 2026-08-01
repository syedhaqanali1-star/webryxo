"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Check,
  Code2,
  Gauge,
  Globe2,
  HeartHandshake,
  Layers3,
  MonitorSmartphone,
  Palette,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
} from "lucide-react";

const values = [
  {
    icon: Palette,
    title: "Modern design",
    description:
      "Clean, polished websites designed to make businesses look established and trustworthy.",
  },
  {
    icon: Gauge,
    title: "Fast performance",
    description:
      "Responsive, optimized experiences that feel smooth across phones, tablets, and computers.",
  },
  {
    icon: MonitorSmartphone,
    title: "Mobile-first",
    description:
      "Every website is built to work properly on the devices customers use most.",
  },
  {
    icon: Search,
    title: "SEO foundations",
    description:
      "Strong technical structure that helps search engines understand your website.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable setup",
    description:
      "Professional deployment, secure connections, and careful launch testing.",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing support",
    description:
      "We stay available after launch for hosting, maintenance, updates, and guidance.",
  },
];

const industries = [
  "Restaurants",
  "Barber Shops",
  "Auto Repair",
  "Pet Grooming",
  "Dental",
  "Roofing",
  "Real Estate",
  "Local Small Businesses",
];

const process = [
  {
    number: "01",
    title: "Free consultation",
    description:
      "We learn about your business, goals, customers, and what you want the website to accomplish.",
  },
  {
    number: "02",
    title: "Website preview",
    description:
      "We create a direction you can review before deciding whether to move forward.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We refine the look, content structure, and user experience around your business.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "We build the website, add the required features, and optimize it for different devices.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "We connect your domain, test the final website, and make it available to customers.",
  },
  {
    number: "06",
    title: "Support",
    description:
      "We can continue helping with hosting, maintenance, updates, and future improvements.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#040404] text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-[-170px] h-[760px] w-[760px] -translate-x-1/2 rounded-full bg-violet-600/[0.09] blur-[190px]" />
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
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black"
          >
            Start a Project
            <ArrowRight size={16} />
          </a>
        </div>
      </header>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-24">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to Home
        </a>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-12 max-w-5xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/60">
            <Sparkles size={15} className="text-violet-300" />
            About Webryxo
          </div>

          <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl md:text-7xl">
            We build websites that help
            <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">
              local businesses grow.
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/50 md:text-xl">
            Webryxo creates modern, professional websites for businesses that
            want to look established, build trust, and make it easier for
            customers to take action.
          </p>
        </motion.div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-28">
        <div className="grid gap-8 rounded-[34px] border border-white/10 bg-white/[0.025] p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
          <div>
            <div className="inline-flex items-center gap-2 text-sm text-violet-300">
              <Rocket size={17} />
              Our mission
            </div>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Better websites. Honest process. Real support.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-white/45">
            <p>
              Webryxo exists to make professional website design more
              accessible to local and growing businesses.
            </p>

            <p>
              We focus on modern design, clear communication, practical
              features, honest pricing, and long-term support instead of
              confusing businesses with unnecessary complexity.
            </p>

            <p>
              Our free website preview gives business owners a chance to see a
              direction before deciding whether they want to move forward.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/60">
            <BadgeCheck size={15} className="text-violet-300" />
            Why choose Webryxo
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl md:text-6xl">
            Built around what
            <span className="block text-white/35">
              businesses actually need.
            </span>
          </h2>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                whileHover={{ y: -8 }}
                className="rounded-[28px] border border-white/10 bg-white/[0.025] p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10">
                  <Icon size={22} className="text-violet-300" />
                </div>

                <h3 className="mt-7 text-xl font-medium">{value.title}</h3>

                <p className="mt-4 leading-7 text-white/40">
                  {value.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="inline-flex items-center gap-2 text-sm text-violet-300">
              <Users size={17} />
              Industries we work with
            </div>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Flexible enough for many types of businesses.
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-white/45">
              Every business is different, so we tailor the structure,
              messaging, and features around the industry and customer journey.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {industries.map((industry) => (
              <div
                key={industry}
                className="flex items-center gap-3 rounded-[22px] border border-white/10 bg-white/[0.025] p-5"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-400/10">
                  <Check size={15} className="text-violet-300" />
                </div>
                <span className="font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/60">
            <Layers3 size={15} className="text-violet-300" />
            Our process
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl md:text-6xl">
            A clear path from
            <span className="block text-white/35">idea to launch.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {process.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="rounded-[28px] border border-white/10 bg-white/[0.025] p-7"
            >
              <p className="text-sm font-semibold text-violet-300">
                {step.number}
              </p>

              <h3 className="mt-5 text-xl font-medium">{step.title}</h3>

              <p className="mt-4 leading-7 text-white/40">
                {step.description}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-32 pt-20">
        <div className="relative overflow-hidden rounded-[36px] border border-violet-400/20 bg-gradient-to-br from-violet-500/[0.12] via-white/[0.03] to-fuchsia-500/[0.08] px-7 py-14 text-center sm:px-12 sm:py-16">
          <Sparkles className="mx-auto text-violet-300" size={25} />

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Let’s build something great together.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/50">
            Tell us about your business and request a free website preview
            before deciding whether to move forward.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-medium text-black transition hover:scale-[1.03]"
            >
              Get a Free Preview
              <ArrowRight size={18} />
            </a>

            <a
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-7 py-3.5 font-medium"
            >
              View Portfolio
              <Globe2 size={17} />
            </a>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-6 py-10 text-sm text-white/30 sm:flex-row">
          <p>© {new Date().getFullYear()} Webryxo. All rights reserved.</p>
          <p>Designed & developed by Webryxo.</p>
        </div>
      </footer>
    </main>
  );
}
