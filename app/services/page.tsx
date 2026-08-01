"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Code2,
  ExternalLink,
  Gauge,
  Globe2,
  Layers3,
  MonitorSmartphone,
  Palette,
  Search,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: MonitorSmartphone,
    title: "Business Website Design",
    description:
      "Modern, professional websites built around your business, your customers, and the actions you want visitors to take.",
    features: [
      "Custom page layouts",
      "Mobile-responsive design",
      "Clear calls to action",
      "Contact and inquiry forms",
    ],
  },
  {
    icon: Code2,
    title: "Website Development",
    description:
      "Fast, reliable website development using modern tools and clean structure so your site feels smooth and professional.",
    features: [
      "Modern development stack",
      "Fast loading performance",
      "Responsive functionality",
      "Custom interactive features",
    ],
  },
  {
    icon: Palette,
    title: "Website Redesign",
    description:
      "A complete visual and structural upgrade for businesses whose current website feels outdated, confusing, or difficult to use.",
    features: [
      "Modern visual direction",
      "Improved navigation",
      "Better mobile experience",
      "Stronger trust and conversion",
    ],
  },
  {
    icon: Search,
    title: "SEO Foundations",
    description:
      "Technical and on-page foundations that help search engines understand your website and make it easier for local customers to find you.",
    features: [
      "SEO-friendly structure",
      "Page titles and descriptions",
      "Sitemap and robots setup",
      "Local-business page structure",
    ],
  },
  {
    icon: Gauge,
    title: "Speed & Performance",
    description:
      "Performance-focused improvements that help your website load quickly and feel responsive across phones, tablets, and computers.",
    features: [
      "Image optimization",
      "Mobile performance",
      "Cleaner page structure",
      "Reduced unnecessary loading",
    ],
  },
  {
    icon: Globe2,
    title: "Domain & Launch Setup",
    description:
      "Help connecting your domain, publishing your website, configuring HTTPS, and making sure your site is ready for customers.",
    features: [
      "Domain connection",
      "HTTPS configuration",
      "Deployment setup",
      "Launch testing",
    ],
  },
  {
    icon: Wrench,
    title: "Hosting & Maintenance",
    description:
      "Ongoing support to keep your website online, updated, and functioning properly after launch.",
    features: [
      "$15 monthly or $150 yearly",
      "Hosting management",
      "Minor content updates",
      "Technical support",
    ],
  },
  {
    icon: Layers3,
    title: "Custom Features",
    description:
      "Extra functionality based on your business needs, including booking sections, quote forms, menus, galleries, and more.",
    features: [
      "Booking and quote flows",
      "Service and menu sections",
      "Photo galleries",
      "Custom business tools",
    ],
  },
];

const process = [
  "Tell us about your business",
  "Choose the services you need",
  "Review your free website preview",
  "Approve the project and launch",
];

export default function ServicesPage() {
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

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-24">
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
          className="mt-12 max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/60">
            <Sparkles size={15} className="text-violet-300" />
            Webryxo services
          </div>

          <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl md:text-7xl">
            Everything your business needs
            <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">
              to look better online.
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/50 md:text-xl">
            From design and development to launch, hosting, SEO foundations,
            and ongoing support, Webryxo can handle the full website process.
          </p>
        </motion.div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-28">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                whileHover={{ y: -8 }}
                className="rounded-[30px] border border-white/10 bg-white/[0.025] p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10">
                  <Icon size={22} className="text-violet-300" />
                </div>

                <h2 className="mt-7 text-2xl font-medium">{service.title}</h2>

                <p className="mt-4 leading-7 text-white/45">
                  {service.description}
                </p>

                <div className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 text-sm text-white/65"
                    >
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-400/10">
                        <Check size={13} className="text-violet-300" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-28">
        <div className="grid gap-8 rounded-[34px] border border-white/10 bg-white/[0.025] p-8 lg:grid-cols-[0.85fr_1.15fr] lg:p-12">
          <div>
            <div className="inline-flex items-center gap-2 text-sm text-violet-300">
              <ShieldCheck size={17} />
              Simple process
            </div>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Clear from start to launch.
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-white/45">
              You stay involved throughout the project and can review the
              direction before deciding whether to move forward.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {process.map((step, index) => (
              <div
                key={step}
                className="rounded-[24px] border border-white/10 bg-black/20 p-6"
              >
                <p className="text-sm text-violet-300">
                  0{index + 1}
                </p>
                <p className="mt-4 text-lg font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-32">
        <div className="relative overflow-hidden rounded-[36px] border border-violet-400/20 bg-gradient-to-br from-violet-500/[0.12] via-white/[0.03] to-fuchsia-500/[0.08] px-7 py-14 text-center sm:px-12 sm:py-16">
          <Sparkles className="mx-auto text-violet-300" size={25} />

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Not sure which service you need?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/50">
            Tell us about your business and we’ll help you choose the right
            website package and features.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-medium text-black transition hover:scale-[1.03]"
            >
              Request a Free Preview
              <ArrowRight size={18} />
            </a>

            <a
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-7 py-3.5 font-medium"
            >
              View Portfolio
              <ExternalLink size={17} />
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
