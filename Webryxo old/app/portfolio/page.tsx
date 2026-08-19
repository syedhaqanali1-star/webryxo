"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Layers3,
  PawPrint,
  Scissors,
  Sparkles,
  Utensils,
  Wrench,
  Building2,
  House,
} from "lucide-react";

const projects = [
  {
    title: "Northline Barbers",
    category: "Barber Shop",
    description:
      "A bold, booking-focused website built to help a modern barber shop attract clients and make appointments easier.",
    href: "/work/barber",
    image: "/images/webryxo/1.jfif",
    icon: Scissors,
    tags: ["Booking", "Mobile", "Services"],
  },
  {
    title: "Taste of Lebanon Concept",
    category: "Restaurant",
    description:
      "A polished restaurant website concept with menu sections, food photography, ordering links, hours, and directions.",
    href: "/#contact",
    image: "/images/webryxo/2.jfif",
    icon: Utensils,
    tags: ["Menu", "Ordering", "Reservations"],
  },
  {
    title: "Apex Auto Works",
    category: "Auto Repair",
    description:
      "A professional automotive website with service information, diagnostics, quote requests, and trust-building sections.",
    href: "/work/auto",
    image: "/images/webryxo/3.jfif",
    icon: Wrench,
    tags: ["Quotes", "SEO", "Performance"],
  },
  {
    title: "Paw & Polish",
    category: "Pet Grooming",
    description:
      "A friendly, polished grooming website designed around appointments, services, galleries, and customer trust.",
    href: "/work/grooming",
    image: "/images/webryxo/4.jfif",
    icon: PawPrint,
    tags: ["Appointments", "Gallery", "Responsive"],
  },
  {
    title: "BrightSmile Dental",
    category: "Dental",
    description:
      "A clean dental website concept focused on trust, services, insurance information, and appointment requests.",
    href: "/#contact",
    image: "/images/webryxo/5.jfif",
    icon: Building2,
    tags: ["Appointments", "Trust", "Local SEO"],
  },
  {
    title: "Summit Roofing",
    category: "Roofing",
    description:
      "A conversion-focused roofing website concept with service areas, project photos, estimates, and strong calls to action.",
    href: "/#contact",
    image: "/images/webryxo/6.jfif",
    icon: House,
    tags: ["Estimates", "Service Areas", "Leads"],
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#040404] text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-[-180px] h-[760px] w-[760px] -translate-x-1/2 rounded-full bg-violet-600/[0.09] blur-[190px]" />
        <div className="absolute right-[-180px] top-[650px] h-[520px] w-[520px] rounded-full bg-fuchsia-600/[0.07] blur-[170px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-black/60 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-3">
            <img src="/icon.png" alt="Webryxo logo" className="h-11 w-11 rounded-xl object-cover" />
            <span className="text-xl font-semibold">Webryxo<span className="text-violet-400">.</span></span>
          </a>
          <a href="/#contact" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black">
            Start a Project <ArrowRight size={16} />
          </a>
        </div>
      </header>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-24">
        <a href="/" className="inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white">
          <ArrowLeft size={16} /> Back to Home
        </a>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mt-12 max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/60">
            <Layers3 size={15} className="text-violet-300" /> Webryxo portfolio
          </div>
          <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl md:text-7xl">
            Websites built for
            <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">real businesses.</span>
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/50 md:text-xl">
            Explore website concepts and demos designed for local businesses that want to look more professional, build trust, and turn more visitors into customers.
          </p>
        </motion.div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-32">
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.article key={project.title} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: index * 0.07 }} whileHover={{ y: -10 }} className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.025]">
                <div className="relative h-[250px] overflow-hidden bg-black">
                  <motion.img src={project.image} alt={`${project.title} website preview`} className="h-full w-full object-cover" whileHover={{ scale: 1.06 }} transition={{ duration: 0.5 }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-5 left-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/55 backdrop-blur-xl">
                    <Icon size={21} className="text-violet-300" />
                  </div>
                </div>

                <div className="p-7">
                  <p className="text-sm text-violet-300">{project.category}</p>
                  <h2 className="mt-3 text-2xl font-medium">{project.title}</h2>
                  <p className="mt-4 leading-7 text-white/40">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/40">{tag}</span>
                    ))}
                  </div>
                  <a href={project.href} className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black">
                    {project.href === "/#contact" ? "Request Similar Website" : "View Demo"}
                    <ExternalLink size={14} />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-32">
        <div className="relative overflow-hidden rounded-[36px] border border-violet-400/20 bg-gradient-to-br from-violet-500/[0.12] via-white/[0.03] to-fuchsia-500/[0.08] px-7 py-14 text-center sm:px-12 sm:py-16">
          <Sparkles className="mx-auto text-violet-300" size={25} />
          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Want a website like one of these?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/50">Tell us about your business and request a free website preview before deciding whether to move forward.</p>
          <a href="/#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-medium text-black transition hover:scale-[1.03]">
            Get a Free Website Preview <ArrowRight size={18} />
          </a>
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
