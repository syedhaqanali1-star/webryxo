import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export default function ThankYouPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#040404] px-6 py-16 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.12] blur-[190px]" />
      </div>

      <div className="relative w-full max-w-3xl rounded-[36px] border border-white/10 bg-white/[0.035] p-7 text-center backdrop-blur-xl sm:p-12">
        <a href="/" className="mx-auto flex w-fit items-center gap-3">
          <img
            src="/icon.png"
            alt="Webryxo logo"
            className="h-12 w-12 rounded-xl object-cover"
          />
          <span className="text-2xl font-semibold">
            Webryxo<span className="text-violet-400">.</span>
          </span>
        </a>

        <div className="mx-auto mt-10 flex h-20 w-20 items-center justify-center rounded-full border border-violet-400/20 bg-violet-500/10">
          <CheckCircle2 size={40} className="text-violet-300" />
        </div>

        <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/60">
          <Sparkles size={15} className="text-violet-300" />
          Request received
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
          Thank you for contacting Webryxo.
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/50">
          We received your project details successfully. A member of the
          Webryxo team will review your request and contact you within one
          business day.
        </p>

        <div className="mt-10 grid gap-4 text-left sm:grid-cols-3">
          <div className="rounded-[22px] border border-white/10 bg-black/20 p-5">
            <Clock3 size={19} className="text-violet-300" />
            <p className="mt-4 font-medium">Response time</p>
            <p className="mt-2 text-sm leading-6 text-white/40">
              Usually within one business day.
            </p>
          </div>

          <div className="rounded-[22px] border border-white/10 bg-black/20 p-5">
            <Mail size={19} className="text-violet-300" />
            <p className="mt-4 font-medium">Watch your inbox</p>
            <p className="mt-2 text-sm leading-6 text-white/40">
              We may reply by email with the next steps.
            </p>
          </div>

          <div className="rounded-[22px] border border-white/10 bg-black/20 p-5">
            <MessageSquare size={19} className="text-violet-300" />
            <p className="mt-4 font-medium">Next step</p>
            <p className="mt-2 text-sm leading-6 text-white/40">
              We’ll discuss your goals and website preview.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-medium text-black"
          >
            Return to Home
            <ArrowRight size={17} />
          </a>

          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-7 py-3.5 font-medium"
          >
            View Portfolio
          </a>
        </div>

        <p className="mt-8 text-sm text-white/35">
          Questions? Email us at info@webryxo.com
        </p>
      </div>
    </main>
  );
}
