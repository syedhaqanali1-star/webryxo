import { notFound, redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import {
  ArrowLeft,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  Globe2,
  Mail,
  MessageSquareText,
  Phone,
  Save,
  UserRound,
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
  current_website: string | null;
  selected_package: string | null;
  requested_services: string | null;
  budget: string | null;
  timeline: string | null;
  project_description: string | null;
};

const statuses = [
  "New Lead",
  "Contacted",
  "Proposal Sent",
  "Client",
  "Completed",
];

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "short",
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

export default async function LeadDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/dashboard/login");
  }

  const { data, error } = await supabase
    .from("leads")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    notFound();
  }

  const lead = data as Lead;

  async function updateStatus(formData: FormData) {
    "use server";

    const selectedStatus = String(formData.get("status") || "");
    const allowedStatus = statuses.includes(selectedStatus);

    if (!allowedStatus) {
      return;
    }

    const serverSupabase = await createClient();

    const {
      data: { user: currentUser },
    } = await serverSupabase.auth.getUser();

    if (!currentUser) {
      redirect("/dashboard/login");
    }

    await serverSupabase
      .from("leads")
      .update({ status: selectedStatus })
      .eq("id", id);

    revalidatePath(`/dashboard/leads/${id}`);
    revalidatePath("/dashboard/leads");
    revalidatePath("/dashboard");
  }

  return (
    <main className="min-h-screen bg-[#050505] px-5 py-8 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <a
          href="/dashboard/leads"
          className="inline-flex items-center gap-2 text-sm text-white/45 transition hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to Leads
        </a>

        <header className="mt-8 flex flex-col gap-6 border-b border-white/[0.07] pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                {lead.full_name}
              </h1>

              <span
                className={`inline-flex rounded-full border px-3 py-1.5 text-xs ${getStatusClasses(
                  lead.status
                )}`}
              >
                {lead.status || "New Lead"}
              </span>
            </div>

            <p className="mt-3 text-lg text-white/45">
              {lead.business_name}
            </p>

            <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/35">
              <span className="inline-flex items-center gap-2">
                <CalendarDays size={15} />
                Submitted {formatDate(lead.created_at)}
              </span>

              {lead.business_type && (
                <span className="inline-flex items-center gap-2">
                  <BriefcaseBusiness size={15} />
                  {lead.business_type}
                </span>
              )}
            </div>
          </div>

          <form action={updateStatus} className="flex flex-wrap gap-3">
            <select
              name="status"
              defaultValue={lead.status || "New Lead"}
              className="rounded-2xl border border-white/10 bg-[#111] px-4 py-3 text-sm outline-none"
            >
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black"
            >
              <Save size={16} />
              Save status
            </button>
          </form>
        </header>

        <section className="mt-8 grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="space-y-6">
            <article className="rounded-[28px] border border-white/10 bg-white/[0.025] p-6">
              <div className="flex items-center gap-3">
                <UserRound size={19} className="text-violet-300" />
                <h2 className="text-lg font-medium">Contact information</h2>
              </div>

              <div className="mt-6 space-y-4">
                <a
                  href={`mailto:${lead.email}`}
                  className="flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-black/20 p-4 transition hover:border-violet-400/30"
                >
                  <Mail size={18} className="mt-0.5 text-violet-300" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/30">
                      Email
                    </p>
                    <p className="mt-1 break-all text-sm">{lead.email}</p>
                  </div>
                </a>

                {lead.phone && (
                  <a
                    href={`tel:${lead.phone}`}
                    className="flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-black/20 p-4 transition hover:border-violet-400/30"
                  >
                    <Phone size={18} className="mt-0.5 text-violet-300" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/30">
                        Phone
                      </p>
                      <p className="mt-1 text-sm">{lead.phone}</p>
                    </div>
                  </a>
                )}

                {lead.current_website && (
                  <a
                    href={
                      lead.current_website.startsWith("http")
                        ? lead.current_website
                        : `https://${lead.current_website}`
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-black/20 p-4 transition hover:border-violet-400/30"
                  >
                    <Globe2 size={18} className="mt-0.5 text-violet-300" />
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wider text-white/30">
                        Current website
                      </p>
                      <p className="mt-1 truncate text-sm">
                        {lead.current_website}
                      </p>
                    </div>

                    <ExternalLink
                      size={15}
                      className="ml-auto shrink-0 text-white/30"
                    />
                  </a>
                )}
              </div>
            </article>

            <article className="rounded-[28px] border border-white/10 bg-white/[0.025] p-6">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={19} className="text-violet-300" />
                <h2 className="text-lg font-medium">Project summary</h2>
              </div>

              <dl className="mt-6 space-y-5">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-white/30">
                    Package
                  </dt>
                  <dd className="mt-2 text-sm text-white/75">
                    {lead.selected_package || "Not selected"}
                  </dd>
                </div>

                <div>
                  <dt className="text-xs uppercase tracking-wider text-white/30">
                    Budget
                  </dt>
                  <dd className="mt-2 text-sm text-white/75">
                    {lead.budget || "Not provided"}
                  </dd>
                </div>

                <div>
                  <dt className="text-xs uppercase tracking-wider text-white/30">
                    Timeline
                  </dt>
                  <dd className="mt-2 text-sm text-white/75">
                    {lead.timeline || "Not provided"}
                  </dd>
                </div>

                <div>
                  <dt className="text-xs uppercase tracking-wider text-white/30">
                    Requested services
                  </dt>
                  <dd className="mt-2 whitespace-pre-wrap text-sm leading-7 text-white/75">
                    {lead.requested_services || "Not provided"}
                  </dd>
                </div>
              </dl>
            </article>
          </div>

          <article className="rounded-[28px] border border-white/10 bg-white/[0.025] p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <MessageSquareText size={19} className="text-violet-300" />
              <h2 className="text-lg font-medium">Project description</h2>
            </div>

            <div className="mt-6 min-h-[320px] whitespace-pre-wrap rounded-[22px] border border-white/[0.07] bg-black/20 p-5 text-sm leading-8 text-white/60">
              {lead.project_description ||
                "The customer did not provide a project description."}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href={`mailto:${lead.email}?subject=Your Webryxo project request`}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-sm font-medium text-black"
              >
                <Mail size={16} />
                Email lead
              </a>

              {lead.phone ? (
                <a
                  href={`tel:${lead.phone}`}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3.5 text-sm font-medium"
                >
                  <Phone size={16} />
                  Call lead
                </a>
              ) : (
                <div className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-3.5 text-sm text-white/25">
                  No phone provided
                </div>
              )}
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
