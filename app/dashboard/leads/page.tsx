import { redirect } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Mail,
  Phone,
  Search,
  UsersRound,
} from "lucide-react";

import { createClient } from "@/lib/supabase/server";

type Lead = {
  id: string;
  created_at: string;
  status: string | null;
  full_name: string;
  business_name: string;
  email: string;
  phone: string | null;
  business_type: string | null;
  selected_package: string | null;
  requested_services: string | null;
  budget: string | null;
  timeline: string | null;
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

function getStatusClasses(status: string | null) {
  switch (status) {
    case "Contacted":
      return "border-blue-400/20 bg-blue-400/10 text-blue-200";
    case "Proposal Sent":
      return "border-amber-400/20 bg-amber-400/10 text-amber-200";
    case "Client":
      return "border-emerald-400/20 bg-emerald-400/10 text-emerald-200";
    case "Completed":
      return "border-violet-400/20 bg-violet-400/10 text-violet-200";
    default:
      return "border-white/10 bg-white/[0.05] text-white/60";
  }
}

export default async function LeadsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/dashboard/login");
  }

  const params = await searchParams;
  const query = (params.q ?? "").trim();

  let request = supabase
    .from("leads")
    .select(
      "id, created_at, status, full_name, business_name, email, phone, business_type, selected_package, requested_services, budget, timeline"
    )
    .order("created_at", { ascending: false });

  if (query) {
    request = request.or(
      `full_name.ilike.%${query}%,business_name.ilike.%${query}%,email.ilike.%${query}%`
    );
  }

  const { data: leads, error } = await request;

  const safeLeads = (leads ?? []) as Lead[];

  return (
    <main className="min-h-screen bg-[#050505] px-5 py-8 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <a
          href="/dashboard"
          className="inline-flex items-center gap-2 text-sm text-white/45 transition hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to Dashboard
        </a>

        <div className="mt-8 flex flex-col gap-5 border-b border-white/[0.07] pb-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm text-violet-300">Lead management</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
              All consultation leads
            </h1>
            <p className="mt-3 text-white/40">
              Review every booking request and open the full lead details.
            </p>
          </div>

          <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/50">
            {safeLeads.length} {safeLeads.length === 1 ? "lead" : "leads"}
          </div>
        </div>

        <form className="mt-7 flex max-w-xl gap-3" action="/dashboard/leads">
          <div className="relative flex-1">
            <Search
              size={17}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
            />
            <input
              name="q"
              defaultValue={query}
              placeholder="Search name, business, or email"
              className="w-full rounded-2xl border border-white/10 bg-white/[0.035] py-3.5 pl-11 pr-4 outline-none transition focus:border-violet-400/50"
            />
          </div>

          <button
            type="submit"
            className="rounded-2xl bg-white px-5 py-3.5 text-sm font-medium text-black"
          >
            Search
          </button>
        </form>

        {error && (
          <div className="mt-7 rounded-2xl border border-red-400/20 bg-red-400/[0.08] px-5 py-4 text-sm text-red-300">
            Leads could not be loaded yet. We’ll fix the Supabase access policy
            next.
          </div>
        )}

        <section className="mt-8 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.025]">
          {safeLeads.length === 0 ? (
            <div className="px-6 py-20 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                <UsersRound size={23} className="text-white/35" />
              </div>

              <h2 className="mt-5 text-lg font-medium">
                {query ? "No matching leads" : "No leads yet"}
              </h2>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-white/35">
                {query
                  ? "Try a different name, business, or email address."
                  : "New booking requests will appear here after the form is connected to Supabase."}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1080px] text-left">
                <thead className="border-b border-white/[0.07] text-xs uppercase tracking-wider text-white/30">
                  <tr>
                    <th className="px-6 py-4 font-medium">Lead</th>
                    <th className="px-6 py-4 font-medium">Contact</th>
                    <th className="px-6 py-4 font-medium">Package</th>
                    <th className="px-6 py-4 font-medium">Budget</th>
                    <th className="px-6 py-4 font-medium">Status</th>
                    <th className="px-6 py-4 font-medium">Submitted</th>
                    <th className="px-6 py-4 font-medium" />
                  </tr>
                </thead>

                <tbody>
                  {safeLeads.map((lead) => (
                    <tr
                      key={lead.id}
                      className="border-b border-white/[0.06] last:border-b-0"
                    >
                      <td className="px-6 py-5">
                        <p className="font-medium">{lead.full_name}</p>
                        <p className="mt-1 text-sm text-white/35">
                          {lead.business_name}
                        </p>
                        {lead.business_type && (
                          <p className="mt-1 text-xs text-violet-300">
                            {lead.business_type}
                          </p>
                        )}
                      </td>

                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2 text-sm text-white/55">
                          <Mail size={14} />
                          {lead.email}
                        </div>

                        {lead.phone && (
                          <div className="mt-2 flex items-center gap-2 text-sm text-white/35">
                            <Phone size={14} />
                            {lead.phone}
                          </div>
                        )}
                      </td>

                      <td className="px-6 py-5 text-sm text-white/55">
                        {lead.selected_package || "Not selected"}
                      </td>

                      <td className="px-6 py-5 text-sm text-white/55">
                        {lead.budget || "Not provided"}
                      </td>

                      <td className="px-6 py-5">
                        <span
                          className={`inline-flex rounded-full border px-3 py-1.5 text-xs ${getStatusClasses(
                            lead.status
                          )}`}
                        >
                          {lead.status || "New Lead"}
                        </span>
                      </td>

                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2 text-sm text-white/40">
                          <CalendarDays size={15} />
                          {formatDate(lead.created_at)}
                        </div>
                      </td>

                      <td className="px-6 py-5 text-right">
                        <a
                          href={`/dashboard/leads/${lead.id}`}
                          className="inline-flex items-center gap-2 text-sm text-violet-300"
                        >
                          View details
                          <ArrowRight size={14} />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
