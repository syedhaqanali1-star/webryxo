import { redirect } from "next/navigation";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  CircleDollarSign,
  LayoutDashboard,
  LogOut,
  Mail,
  Phone,
  UserRoundCheck,
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
  budget: string | null;
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

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/dashboard/login");
  }

  const { data: leads, error } = await supabase
    .from("leads")
    .select(
      "id, created_at, status, full_name, business_name, email, phone, business_type, selected_package, budget"
    )
    .order("created_at", { ascending: false });

  const safeLeads = (leads ?? []) as Lead[];

  const totalLeads = safeLeads.length;
  const newLeads = safeLeads.filter(
    (lead) => !lead.status || lead.status === "New Lead"
  ).length;
  const activeProspects = safeLeads.filter((lead) =>
    ["Contacted", "Proposal Sent"].includes(lead.status ?? "")
  ).length;
  const clients = safeLeads.filter((lead) =>
    ["Client", "Completed"].includes(lead.status ?? "")
  ).length;

  const stats = [
    {
      label: "Total leads",
      value: totalLeads,
      icon: UsersRound,
      description: "All consultation requests",
    },
    {
      label: "New leads",
      value: newLeads,
      icon: Mail,
      description: "Waiting for your reply",
    },
    {
      label: "Active prospects",
      value: activeProspects,
      icon: BriefcaseBusiness,
      description: "Contacted or proposal sent",
    },
    {
      label: "Clients",
      value: clients,
      icon: UserRoundCheck,
      description: "Converted or completed",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[20%] top-[-160px] h-[620px] w-[620px] rounded-full bg-violet-600/[0.08] blur-[180px]" />
        <div className="absolute right-[-160px] top-[500px] h-[500px] w-[500px] rounded-full bg-fuchsia-600/[0.06] blur-[170px]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-[1500px]">
        <aside className="hidden w-72 shrink-0 border-r border-white/[0.07] bg-black/40 p-6 lg:block">
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

          <nav className="mt-10 space-y-2">
            <a
              href="/dashboard"
              className="flex items-center gap-3 rounded-2xl bg-white/[0.07] px-4 py-3 text-sm font-medium"
            >
              <LayoutDashboard size={18} className="text-violet-300" />
              Overview
            </a>

            <a
              href="/dashboard/leads"
              className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-white/50 transition hover:bg-white/[0.05] hover:text-white"
            >
              <UsersRound size={18} />
              Leads
            </a>

            <div className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-white/25">
              <BriefcaseBusiness size={18} />
              Projects
              <span className="ml-auto text-[10px] uppercase tracking-wider">
                Soon
              </span>
            </div>

            <div className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-white/25">
              <CircleDollarSign size={18} />
              Payments
              <span className="ml-auto text-[10px] uppercase tracking-wider">
                Soon
              </span>
            </div>
          </nav>

          <div className="mt-10 rounded-[24px] border border-white/10 bg-white/[0.035] p-5">
            <p className="text-sm font-medium">Signed in as</p>
            <p className="mt-2 break-all text-xs leading-5 text-white/40">
              {user.email}
            </p>
          </div>

          <form action="/auth/signout" method="post" className="mt-4">
            <button
              type="submit"
              className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm text-white/45 transition hover:bg-white/[0.05] hover:text-white"
            >
              <LogOut size={18} />
              Sign out
            </button>
          </form>
        </aside>

        <section className="min-w-0 flex-1 px-5 py-6 sm:px-8 lg:px-10">
          <header className="flex flex-col gap-5 border-b border-white/[0.07] pb-7 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-violet-300">Webryxo CRM</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                Dashboard overview
              </h1>
              <p className="mt-3 text-white/40">
                Manage consultation requests and follow up with potential
                clients.
              </p>
            </div>

            <a
              href="/book"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black"
            >
              Open booking page
              <ArrowRight size={16} />
            </a>
          </header>

          {error && (
            <div className="mt-7 rounded-2xl border border-red-400/20 bg-red-400/[0.08] px-5 py-4 text-sm text-red-300">
              The dashboard could not load your leads. We will fix the database
              access policy next.
            </div>
          )}

          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <article
                  key={stat.label}
                  className="rounded-[26px] border border-white/10 bg-white/[0.03] p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10">
                      <Icon size={20} className="text-violet-300" />
                    </div>

                    <span className="text-3xl font-semibold">{stat.value}</span>
                  </div>

                  <h2 className="mt-6 font-medium">{stat.label}</h2>
                  <p className="mt-2 text-sm text-white/35">
                    {stat.description}
                  </p>
                </article>
              );
            })}
          </div>

          <section className="mt-8 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.025]">
            <div className="flex flex-col gap-4 border-b border-white/[0.07] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-medium">Recent leads</h2>
                <p className="mt-1 text-sm text-white/35">
                  Your newest consultation requests.
                </p>
              </div>

              <a
                href="/dashboard/leads"
                className="inline-flex items-center gap-2 text-sm text-violet-300"
              >
                View all leads
                <ArrowRight size={15} />
              </a>
            </div>

            {safeLeads.length === 0 ? (
              <div className="px-6 py-16 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                  <UsersRound size={23} className="text-white/35" />
                </div>

                <h3 className="mt-5 text-lg font-medium">No leads yet</h3>
                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-white/35">
                  Once the booking form is connected to Supabase, new requests
                  will appear here automatically.
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full min-w-[860px] text-left">
                  <thead className="border-b border-white/[0.07] text-xs uppercase tracking-wider text-white/30">
                    <tr>
                      <th className="px-6 py-4 font-medium">Lead</th>
                      <th className="px-6 py-4 font-medium">Package</th>
                      <th className="px-6 py-4 font-medium">Budget</th>
                      <th className="px-6 py-4 font-medium">Status</th>
                      <th className="px-6 py-4 font-medium">Submitted</th>
                      <th className="px-6 py-4 font-medium" />
                    </tr>
                  </thead>

                  <tbody>
                    {safeLeads.slice(0, 6).map((lead) => (
                      <tr
                        key={lead.id}
                        className="border-b border-white/[0.06] last:border-b-0"
                      >
                        <td className="px-6 py-5">
                          <p className="font-medium">{lead.full_name}</p>
                          <p className="mt-1 text-sm text-white/35">
                            {lead.business_name}
                          </p>
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
                            View
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

          <section className="mt-8 grid gap-5 lg:grid-cols-2">
            <article className="rounded-[26px] border border-white/10 bg-white/[0.025] p-6">
              <div className="flex items-center gap-3">
                <Mail size={19} className="text-violet-300" />
                <h2 className="font-medium">Email follow-up</h2>
              </div>

              <p className="mt-4 text-sm leading-7 text-white/40">
                New booking requests still send to your Webryxo email. The
                database will give you a second, organized record of every
                lead.
              </p>
            </article>

            <article className="rounded-[26px] border border-white/10 bg-white/[0.025] p-6">
              <div className="flex items-center gap-3">
                <Phone size={19} className="text-violet-300" />
                <h2 className="font-medium">Recommended response time</h2>
              </div>

              <p className="mt-4 text-sm leading-7 text-white/40">
                Try to contact new leads within one business day while their
                interest is still fresh.
              </p>
            </article>
          </section>
        </section>
      </div>
    </main>
  );
}