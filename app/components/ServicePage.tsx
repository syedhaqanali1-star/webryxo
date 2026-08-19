"use client";

import Image from "next/image";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Globe2,
  Search,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

export type ServicePageProps = {
  eyebrow: string;
  title: string;
  accentTitle: string;
  description: string;
  intro: string;
  outcomes: string[];
  deliverables: {
    title: string;
    description: string;
  }[];
  process: {
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedLinks: {
    label: string;
    href: string;
  }[];
};

export default function ServicePage({
  eyebrow,
  title,
  accentTitle,
  description,
  intro,
  outcomes,
  deliverables,
  process,
  faqs,
  relatedLinks,
}: ServicePageProps) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#040404] text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-[-180px] h-[760px] w-[760px] -translate-x-1/2 rounded-full bg-violet-600/[0.09] blur-[190px]" />
        <div className="absolute right-[-180px] top-[760px] h-[520px] w-[520px] rounded-full bg-fuchsia-600/[0.06] blur-[170px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-black/65 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-xl">
              <Image
                src="/icon.png"
                alt="Webryxo logo"
                fill
                sizes="40px"
                className="object-cover"
              />
            </div>
            <span className="text-xl font-semibold">
              Webryxo<span className="text-violet-400">.</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-white/55 md:flex">
            <a href="/web-design" className="transition hover:text-white">
              Web Design
            </a>
            <a href="/seo" className="transition hover:text-white">
              SEO
            </a>
            <a href="/local-seo" className="transition hover:text-white">
              Local SEO
            </a>
            <a href="/blog" className="transition hover:text-white">
              Blog
            </a>
          </nav>

          <a
            href="/book"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black"
          >
            Start a Project
          </a>
        </div>
      </header>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-20 sm:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl"
        >
          <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-white/45">
            <span className="h-px w-9 bg-violet-400/70" />
            {eyebrow}
          </div>

          <h1 className="mt-7 text-5xl font-semibold leading-[0.94] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-8xl">
            {title}
            <span className="block bg-gradient-to-r from-white via-violet-200 to-fuchsia-400 bg-clip-text text-transparent">
              {accentTitle}
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/50 md:text-xl">
            {description}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="/book"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-medium text-black transition hover:scale-[1.03]"
            >
              Request a Free Preview
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </a>
            <a
              href="#details"
              className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.035] px-7 py-3.5 text-white/75 transition hover:border-white/20"
            >
              See What’s Included
            </a>
          </div>
        </motion.div>
      </section>

      <section
        id="details"
        className="relative z-10 mx-auto max-w-7xl px-6 py-24"
      >
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-violet-300">
              The goal
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Built around outcomes,
              <span className="block text-white/35">not buzzwords.</span>
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-white/48">{intro}</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.025] p-4 text-sm text-white/60"
                >
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-400/10">
                    <Check size={13} className="text-violet-300" />
                  </div>
                  {outcome}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.22em] text-violet-300">
            What’s included
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            A complete service,
            <span className="block text-white/35">not one isolated task.</span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {deliverables.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-[28px] border border-white/10 bg-white/[0.025] p-7"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/25">
                  {index % 2 === 0 ? (
                    <Search size={19} className="text-violet-300" />
                  ) : (
                    <Globe2 size={19} className="text-violet-300" />
                  )}
                </div>
                <span className="text-xs uppercase tracking-[0.18em] text-white/20">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-7 text-2xl font-medium">{item.title}</h3>
              <p className="mt-4 leading-7 text-white/42">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-violet-300">
              Our process
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Clear from
              <span className="block text-white/35">start to finish.</span>
            </h2>
          </div>

          <div className="space-y-4">
            {process.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[26px] border border-white/10 bg-white/[0.025] p-6"
              >
                <div className="flex gap-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-sm text-violet-300">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">{step.title}</h3>
                    <p className="mt-3 leading-7 text-white/42">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-5xl px-6 py-24">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-violet-300">
            FAQ
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Common questions
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-[24px] border border-white/10 bg-white/[0.025] p-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                {faq.question}
                <ChevronRight
                  size={18}
                  className="text-violet-300 transition group-open:rotate-90"
                />
              </summary>
              <p className="mt-4 max-w-3xl leading-7 text-white/45">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[38px] border border-violet-400/20 bg-gradient-to-br from-violet-500/[0.13] via-white/[0.03] to-fuchsia-500/[0.08] p-8 text-center sm:p-12">
          <Sparkles className="mx-auto text-violet-300" size={24} />
          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Ready to improve how your business shows up online?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/45">
            Tell us about your business and we’ll recommend the right next step.
          </p>
          <a
            href="/book"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-medium text-black"
          >
            Start a Project
            <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <p className="text-xs uppercase tracking-[0.22em] text-white/25">
          Explore Webryxo
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          {relatedLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-sm text-white/50 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 py-9 text-sm text-white/30 sm:flex-row">
          <p>© {new Date().getFullYear()} Webryxo. All rights reserved.</p>
          <a href="mailto:info@webryxo.com" className="hover:text-white">
            info@webryxo.com
          </a>
        </div>
      </footer>
    </main>
  );
}
