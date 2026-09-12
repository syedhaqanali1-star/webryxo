"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Loader2, LockKeyhole, LogIn } from "lucide-react";

import { createClient } from "@/lib/supabase/client";

export default function DashboardLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signingIn, setSigningIn] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSigningIn(true);
    setError("");

    const supabase = createClient();

    const { error: signInError } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (signInError) {
      setError("The email or password is incorrect.");
      setSigningIn(false);
      return;
    }

    router.replace("/dashboard");
    router.refresh();
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#040404] px-6 py-16 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.12] blur-[190px]" />
      </div>

      <div className="relative w-full max-w-md rounded-[32px] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl sm:p-9">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/45 transition hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to Webryxo
        </a>

        <div className="mt-8 flex items-center gap-3">
          <img
            src="/icon.png"
            alt="Webryxo logo"
            className="h-12 w-12 rounded-xl object-cover"
          />

          <span className="text-2xl font-semibold">
            Webryxo<span className="text-violet-400">.</span>
          </span>
        </div>

        <div className="mt-9 flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10">
          <LockKeyhole size={22} className="text-violet-300" />
        </div>

        <h1 className="mt-6 text-3xl font-semibold tracking-[-0.035em]">
          Dashboard login
        </h1>

        <p className="mt-3 leading-7 text-white/45">
          Sign in with your private Webryxo administrator account.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm text-white/60"
            >
              Email address
            </label>

            <input
              id="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="admin@example.com"
              className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 outline-none transition focus:border-violet-400/50"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm text-white/60"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 outline-none transition focus:border-violet-400/50"
            />
          </div>

          {error && (
            <p className="rounded-2xl border border-red-400/20 bg-red-400/[0.08] px-4 py-3 text-sm text-red-300">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={signingIn}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 font-medium text-black transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {signingIn ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Signing in...
              </>
            ) : (
              <>
                <LogIn size={18} />
                Sign in to Dashboard
              </>
            )}
          </button>
        </form>

        <p className="mt-6 text-center text-xs leading-6 text-white/30">
          This page is only for authorized Webryxo administrators.
        </p>
      </div>
    </main>
  );
}