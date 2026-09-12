import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

/**
 * Public, read-only stats endpoint.
 *
 * Returns ONLY a numeric count of rows in the `leads` table — no names,
 * emails, phone numbers, or any other lead detail is ever exposed here.
 * It uses the Supabase service role key (server-side only) so the count
 * is accurate even though Row Level Security restricts the `leads` table
 * to authenticated dashboard users.
 *
 * Requires SUPABASE_SERVICE_ROLE_KEY to be set in your environment.
 * Get this from: Supabase Dashboard -> Project Settings -> API -> service_role key.
 * Never prefix this variable with NEXT_PUBLIC_ — it must stay server-only.
 */
export async function GET() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !serviceRoleKey) {
      // Env not configured yet — fail quietly, homepage just hides the stat.
      return NextResponse.json({ count: null });
    }

    const supabase = createClient(supabaseUrl, serviceRoleKey, {
      auth: { persistSession: false },
    });

    const { count, error } = await supabase
      .from("leads")
      .select("*", { count: "exact", head: true });

    if (error) {
      console.error("Stats route error:", error);
      return NextResponse.json({ count: null });
    }

    return NextResponse.json({ count: count ?? 0 });
  } catch (error) {
    console.error("Stats route error:", error);
    return NextResponse.json({ count: null });
  }
}
