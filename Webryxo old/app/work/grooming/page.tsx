"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  Heart,
  MapPin,
  PawPrint,
  Phone,
  Scissors,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

const services = [
  {
    title: "Bath & Brush",
    price: "$45+",
    description:
      "A refreshing bath, gentle dry, full brushing, ear cleaning, and finishing spray.",
  },
  {
    title: "Full Groom",
    price: "$70+",
    description:
      "Bath, brush, haircut, nail trim, ear cleaning, and a polished finish tailored to your pet.",
  },
  {
    title: "Puppy Intro",
    price: "$35+",
    description:
      "A gentle first grooming experience designed to help young pets feel comfortable and confident.",
  },
  {
    title: "Nail Trim",
    price: "$18",
    description:
      "Quick nail trimming with calm handling and care to keep your pet comfortable.",
  },
];

const reviews = [
  {
    name: "Sarah M.",
    text: "My dog came home looking amazing and was completely relaxed. The team was kind, patient, and professional.",
  },
  {
    name: "Emily R.",
    text: "Booking was easy, the shop was spotless, and they really listened to how I wanted my dog groomed.",
  },
  {
    name: "Jason T.",
    text: "You can tell they genuinely care about the animals. Great service and a beautiful result every time.",
  },
];

const features = [
  "Gentle handling",
  "Online appointments",
  "Clean environment",
  "Personalized grooming",
];

export default function GroomingDemoPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0d0b10] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[-130px] top-[-100px] h-[450px] w-[450px] rounded-full bg-fuchsia-500/10 blur-[150px]" />
        <div className="absolute right-[-150px] top-[520px] h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[160px]" />
      </div>

      {/* Navbar */}
      <header className="relative z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-fuchsia-400/20 bg-fuchsia-400/10">
              <PawPrint size={20} className="text-fuchsia-300" />
            </span>

            <div>
              <p className="text-lg font-semibold tracking-tight">
                Paw & Polish
              </p>
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/30">
                Grooming • Care • Comfort
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/55 md:flex">
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#reviews" className="transition hover:text-white">
              Reviews
            </a>
            <a href="/book" className="transition hover:text-white">
              Contact
            </a>
          </nav>

          <a
            href="#booking"
            className="rounded-full bg-fuchsia-300 px-5 py-2.5 text-sm font-medium text-black transition hover:scale-[1.03]"
          >
            Book Appointment
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
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/15 bg-fuchsia-400/[0.06] px-4 py-2 text-sm text-fuchsia-100/70">
            <Sparkles size={15} className="text-fuchsia-300" />
            Gentle grooming. Happy pets.
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl md:text-7xl">
            Fresh, clean,
            <span className="block text-fuchsia-300">
              and feeling their best.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/50 md:text-xl">
            Professional pet grooming in a calm, clean environment with gentle
            care and personalized service for every pet.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#booking"
              className="group inline-flex items-center gap-2 rounded-full bg-fuchsia-300 px-7 py-3.5 font-medium text-black transition hover:scale-[1.03]"
            >
              Book a Groom
              <ArrowRight
                size={17}
                className="transition group-hover:translate-x-1"
              />
            </a>

            <a
              href="#services"
              className="rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 font-medium text-white transition hover:bg-white/[0.06]"
            >
              View Services
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-5 text-sm text-white/40">
            {features.map((feature) => (
              <span key={feature} className="flex items-center gap-2">
                <Check size={15} className="text-fuchsia-300" />
                {feature}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Premium Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-[36px] bg-fuchsia-500/10 blur-[90px]" />

          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#1a1220] to-[#0d0911] p-6 shadow-2xl shadow-black/50 sm:p-8">
            <div className="flex min-h-[500px] flex-col justify-between rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(232,121,249,0.18),_transparent_45%)] p-7 sm:p-10">
              <div className="flex items-center justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-fuchsia-300/20 bg-fuchsia-300/10">
                  <PawPrint size={30} className="text-fuchsia-300" />
                </div>

                <div className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-white/35">
                  Gentle care first
                </div>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-fuchsia-200/50">
                  Paw & Polish Care
                </p>

                <h2 className="mt-3 text-4xl font-medium tracking-[-0.03em] sm:text-5xl">
                  Looking good should feel good too.
                </h2>

                <p className="mt-5 max-w-md leading-7 text-white/40">
                  Calm handling, quality products, and thoughtful grooming for
                  pets of all sizes and personalities.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-sm text-white/35">Average rating</p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-2xl font-medium">4.9</span>
                      <Star
                        size={18}
                        className="fill-fuchsia-300 text-fuchsia-300"
                      />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-sm text-white/35">Happy clients</p>
                    <p className="mt-2 text-2xl font-medium">800+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Trust Strip */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
        <div className="grid overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.025] md:grid-cols-3">
          <div className="border-b border-white/10 p-7 md:border-b-0 md:border-r">
            <Heart size={20} className="text-fuchsia-300" />
            <p className="mt-4 text-lg font-medium">Gentle care</p>
            <p className="mt-2 text-sm text-white/35">
              Comfort and patience always come first
            </p>
          </div>

          <div className="border-b border-white/10 p-7 md:border-b-0 md:border-r">
            <CalendarDays size={20} className="text-fuchsia-300" />
            <p className="mt-4 text-lg font-medium">Easy appointments</p>
            <p className="mt-2 text-sm text-white/35">
              Simple scheduling that fits your day
            </p>
          </div>

          <div className="p-7">
            <ShieldCheck size={20} className="text-fuchsia-300" />
            <p className="mt-4 text-lg font-medium">Clean & safe</p>
            <p className="mt-2 text-sm text-white/35">
              Professional grooming in a clean environment
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
          <p className="text-sm uppercase tracking-[0.2em] text-fuchsia-300/60">
            Grooming services
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl md:text-6xl">
            Care tailored to your pet.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/45">
            From a quick nail trim to a full groom, every appointment is
            handled with patience, care, and attention to detail.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              whileHover={{ y: -6 }}
              className="group rounded-[28px] border border-white/10 bg-white/[0.025] p-7 transition hover:bg-white/[0.04]"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-medium">{service.title}</h3>

                  <p className="mt-4 max-w-xl leading-7 text-white/40">
                    {service.description}
                  </p>
                </div>

                <span className="text-xl font-medium text-fuchsia-300">
                  {service.price}
                </span>
              </div>

              <div className="mt-8 h-px bg-white/10" />

              <a
                href="#booking"
                className="mt-6 inline-flex items-center gap-2 text-sm text-white/55 transition group-hover:text-white"
              >
                Book this service
                <ArrowRight size={15} />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="relative z-10 mx-auto grid max-w-7xl gap-14 px-6 py-28 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"
      >
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-fuchsia-500/15 via-white/[0.03] to-transparent p-8">
            <div className="flex h-full flex-col justify-between rounded-[24px] border border-white/10 bg-black/20 p-7">
              <div className="flex items-center justify-between">
                <Scissors size={26} className="text-fuchsia-300" />
                <span className="text-sm text-white/30">Paw & Polish</span>
              </div>

              <div>
                <p className="text-sm text-fuchsia-200/50">Comfort comes first</p>

                <p className="mt-3 text-3xl font-medium tracking-[-0.03em]">
                  Calm care.
                  <br />
                  Beautiful results.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-fuchsia-300/60">
            About us
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            Grooming built around trust.
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/45">
            Paw & Polish was created to make grooming feel easier for both pets
            and their owners.
          </p>

          <p className="mt-5 leading-7 text-white/35">
            We take time to understand your pet's needs, temperament, coat, and
            preferred style before beginning any service.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
              <p className="text-3xl font-medium text-fuchsia-300">800+</p>
              <p className="mt-2 text-sm text-white/35">
                Happy grooming visits
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
              <p className="text-3xl font-medium text-fuchsia-300">4.9★</p>
              <p className="mt-2 text-sm text-white/35">
                Average customer rating
              </p>
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
          <p className="text-sm uppercase tracking-[0.2em] text-fuchsia-300/60">
            Customer love
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            Happy pets. Happy owners.
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
                    className="fill-fuchsia-300 text-fuchsia-300"
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

      {/* Booking */}
      <section
        id="booking"
        className="relative z-10 mx-auto max-w-7xl px-6 py-28"
      >
        <div className="overflow-hidden rounded-[36px] border border-fuchsia-300/10 bg-gradient-to-br from-fuchsia-500/[0.14] via-white/[0.03] to-violet-500/[0.08] p-7 sm:p-10 lg:p-14">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-fuchsia-200/60">
                Book an appointment
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
                Ready for a fresh look?
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/45">
                Tell us what your pet needs and we'll help you choose the best
                service and appointment time.
              </p>

              <a
                href="tel:+14135550145"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-fuchsia-300 px-6 py-3 font-medium text-black"
              >
                <Phone size={17} />
                Call to Book
              </a>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-black/20 p-6">
              <div className="space-y-5">
                <div>
                  <p className="text-sm text-white/35">Hours</p>

                  <div className="mt-2 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Mon - Fri</span>
                      <span className="text-white/50">8:30 AM - 6:00 PM</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="text-white/50">9:00 AM - 4:00 PM</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-white/50">Closed</span>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-white/10" />

                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 text-fuchsia-300" />

                  <div>
                    <p className="text-sm font-medium">
                      82 Maple Avenue
                    </p>

                    <p className="mt-1 text-sm text-white/35">
                      Springfield, MA
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={18} className="mt-0.5 text-fuchsia-300" />

                  <div>
                    <p className="text-sm font-medium">
                      (413) 555-0145
                    </p>

                    <p className="mt-1 text-sm text-white/35">
                      Call or text
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock3 size={18} className="mt-0.5 text-fuchsia-300" />

                  <div>
                    <p className="text-sm font-medium">
                      Appointment friendly
                    </p>

                    <p className="mt-1 text-sm text-white/35">
                      Booking ahead is recommended
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
            <p className="text-xl font-medium">Questions before booking?</p>

            <p className="mt-2 text-sm text-white/35">
              Reach out and we'll help you choose the right grooming service.
            </p>
          </div>

          <a
            href="tel:+14135550145"
            className="inline-flex items-center gap-2 rounded-full bg-fuchsia-300 px-6 py-3 font-medium text-black"
          >
            <Phone size={17} />
            Call Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-6 py-10 text-sm text-white/30 sm:flex-row">
          <p>© {new Date().getFullYear()} Paw & Polish.</p>
          <p>Demo website by Webryxo.</p>
        </div>
      </footer>
    </main>
  );
}