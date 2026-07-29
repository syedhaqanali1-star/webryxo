"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  MapPin,
  Menu,
  Phone,
  Scissors,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

const services = [
  {
    title: "Classic Cut",
    price: "$35",
    description:
      "Clean, precise haircut tailored to your face shape and personal style.",
  },
  {
    title: "Skin Fade",
    price: "$40",
    description:
      "Sharp fade with seamless blending and a clean finish around the edges.",
  },
  {
    title: "Cut + Beard",
    price: "$55",
    description:
      "Full haircut paired with beard shaping, lining, and detailed finishing.",
  },
  {
    title: "Kids Cut",
    price: "$28",
    description:
      "A comfortable, professional haircut experience for younger clients.",
  },
];

const reviews = [
  {
    name: "Marcus T.",
    text: "Best fade I've had in a long time. Clean shop, great atmosphere, and the cut was exactly what I wanted.",
  },
  {
    name: "Jordan R.",
    text: "Easy booking, no long wait, and the barber actually took the time to get every detail right.",
  },
  {
    name: "Daniel M.",
    text: "Professional from start to finish. This is the kind of barber shop you keep coming back to.",
  },
];

const features = [
  "Walk-ins welcome",
  "Online booking",
  "Professional barbers",
  "Clean, modern shop",
];

export default function BarberDemoPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0907] text-[#f7f1e8]">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-amber-500/10 blur-[140px]" />
        <div className="absolute right-[-120px] top-[500px] h-[420px] w-[420px] rounded-full bg-orange-500/10 blur-[150px]" />
      </div>

      {/* Navbar */}
      <header className="relative z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a
            href="#top"
            className="flex items-center gap-3 text-xl font-semibold tracking-tight"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-300/20 bg-amber-300/10">
              <Scissors size={20} className="text-amber-300" />
            </span>

            Northline Barbers
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/60 md:flex">
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#reviews" className="transition hover:text-white">
              Reviews
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#booking"
              className="hidden rounded-full bg-amber-300 px-5 py-2.5 text-sm font-medium text-black transition hover:scale-[1.03] sm:inline-flex"
            >
              Book Now
            </a>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 md:hidden"
              aria-label="Open menu"
            >
              <Menu size={18} />
            </button>
          </div>
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
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/15 bg-amber-300/[0.06] px-4 py-2 text-sm text-amber-100/70">
            <Sparkles size={15} className="text-amber-300" />
            Springfield's modern barber experience
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl md:text-7xl">
            Sharp cuts.
            <span className="block text-amber-300">Clean confidence.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/50 md:text-xl">
            Premium haircuts, fades, beard work, and a relaxed shop atmosphere
            built around quality, consistency, and attention to detail.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#booking"
              className="group inline-flex items-center gap-2 rounded-full bg-amber-300 px-7 py-3.5 font-medium text-black transition hover:scale-[1.03]"
            >
              Book Your Cut
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
                <Check size={15} className="text-amber-300" />
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
          <div className="absolute inset-0 rounded-[36px] bg-amber-500/10 blur-[80px]" />

          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#1a1510] to-[#0e0b08] p-6 shadow-2xl shadow-black/50 sm:p-8">
            <div className="absolute right-6 top-6 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-white/40">
              Est. 2026
            </div>

            <div className="flex min-h-[500px] flex-col justify-end rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.16),_transparent_45%)] p-7 sm:p-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-amber-300/20 bg-amber-300/10">
                <Scissors size={30} className="text-amber-300" />
              </div>

              <p className="mt-8 text-sm uppercase tracking-[0.25em] text-amber-200/50">
                Northline Standard
              </p>

              <h2 className="mt-3 text-4xl font-medium tracking-[-0.03em] sm:text-5xl">
                Detail makes the difference.
              </h2>

              <p className="mt-5 max-w-md leading-7 text-white/40">
                Precision cuts, sharp lineups, clean fades, and service that
                feels personal every time.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-sm text-white/35">Average appointment</p>
                  <p className="mt-2 text-2xl font-medium">35 min</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-sm text-white/35">Client rating</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-2xl font-medium">4.9</span>
                    <Star size={18} className="fill-amber-300 text-amber-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Service Strip */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
        <div className="grid overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.025] md:grid-cols-3">
          <div className="border-b border-white/10 p-7 md:border-b-0 md:border-r">
            <Clock3 size={20} className="text-amber-300" />
            <p className="mt-4 text-lg font-medium">Open 6 days</p>
            <p className="mt-2 text-sm text-white/35">
              Tuesday through Sunday
            </p>
          </div>

          <div className="border-b border-white/10 p-7 md:border-b-0 md:border-r">
            <CalendarDays size={20} className="text-amber-300" />
            <p className="mt-4 text-lg font-medium">Easy booking</p>
            <p className="mt-2 text-sm text-white/35">
              Reserve online in seconds
            </p>
          </div>

          <div className="p-7">
            <ShieldCheck size={20} className="text-amber-300" />
            <p className="mt-4 text-lg font-medium">Consistent quality</p>
            <p className="mt-2 text-sm text-white/35">
              Professional service every visit
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
          <p className="text-sm uppercase tracking-[0.2em] text-amber-300/60">
            Services
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl md:text-6xl">
            Your look, handled properly.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/45">
            Straightforward pricing and professional barbering with no rushed
            appointments.
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

                <span className="text-xl font-medium text-amber-300">
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
          <div className="aspect-[4/5] overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-amber-500/15 via-white/[0.03] to-transparent p-8">
            <div className="flex h-full flex-col justify-between rounded-[24px] border border-white/10 bg-black/20 p-7">
              <div className="flex items-center justify-between">
                <Scissors size={26} className="text-amber-300" />
                <span className="text-sm text-white/30">Northline</span>
              </div>

              <div>
                <p className="text-sm text-amber-200/50">Built on craft</p>
                <p className="mt-3 text-3xl font-medium tracking-[-0.03em]">
                  No shortcuts.
                  <br />
                  Just clean work.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-amber-300/60">
            About the shop
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            A barber shop built around consistency.
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/45">
            Northline Barbers is focused on quality cuts, a comfortable
            environment, and making sure every client leaves looking sharp and
            feeling confident.
          </p>

          <p className="mt-5 leading-7 text-white/35">
            Whether you want a simple clean-up, a detailed fade, or a complete
            cut and beard service, the goal stays the same: take the time to do
            it properly.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
              <p className="text-3xl font-medium text-amber-300">1,200+</p>
              <p className="mt-2 text-sm text-white/35">
                Cuts completed
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
              <p className="text-3xl font-medium text-amber-300">4.9★</p>
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
          <p className="text-sm uppercase tracking-[0.2em] text-amber-300/60">
            Reviews
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            People notice the difference.
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
                    className="fill-amber-300 text-amber-300"
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
        <div className="overflow-hidden rounded-[36px] border border-amber-300/10 bg-gradient-to-br from-amber-300/[0.12] via-white/[0.03] to-orange-500/[0.08] p-7 sm:p-10 lg:p-14">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-amber-200/60">
                Book your appointment
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
                Ready for a cleaner look?
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/45">
                Pick your service, choose your time, and reserve your spot.
                Walk-ins are welcome too, but booking ahead is recommended.
              </p>

              <a
                href="tel:+14135550123"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber-300 px-6 py-3 font-medium text-black"
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
                      <span>Tue - Fri</span>
                      <span className="text-white/50">9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="text-white/50">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-white/50">10:00 AM - 4:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-white/10" />

                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 text-amber-300" />
                  <div>
                    <p className="text-sm font-medium">
                      123 Main Street
                    </p>
                    <p className="mt-1 text-sm text-white/35">
                      Springfield, MA
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={18} className="mt-0.5 text-amber-300" />
                  <div>
                    <p className="text-sm font-medium">
                      (413) 555-0123
                    </p>
                    <p className="mt-1 text-sm text-white/35">
                      Call or text
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
              Reach out and we'll help you choose the right service.
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href="tel:+14135550123"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]"
              aria-label="Call Northline Barbers"
            >
              <Phone size={18} />
            </a>

            <a
              href="#"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]"
              aria-label="Instagram"
            >
              <Sparkles size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-6 py-10 text-sm text-white/30 sm:flex-row">
          <p>© {new Date().getFullYear()} Northline Barbers.</p>
          <p>Demo website by Webryxo.</p>
        </div>
      </footer>
    </main>
  );
}