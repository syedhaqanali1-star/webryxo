import { NextResponse } from "next/server";
import { Resend } from "resend";

import { createClient } from "@/lib/supabase/server";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      business,
      email,
      phone,
      project,
      website,
      message,
      businessType,
      selectedPackage,
      selectedServices,
      budget,
      timeline,
      description,
    } = body;

    if (!name || !business || !email || !project || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    const { error: databaseError } = await supabase.from("leads").insert({
      full_name: name,
      business_name: business,
      email,
      phone: phone || null,
      business_type: businessType || null,
      current_website: website || null,
      selected_package: selectedPackage || project || null,
      requested_services: Array.isArray(selectedServices)
        ? selectedServices.join(", ")
        : selectedServices || null,
      budget: budget || null,
      timeline: timeline || null,
      project_description: description || message,
      status: "New Lead",
    });

    if (databaseError) {
      console.error("Supabase lead insert error:", databaseError);

      return NextResponse.json(
        { error: "Your request could not be saved." },
        { status: 500 }
      );
    }

    const { error: emailError } = await resend.emails.send({
      from: "Webryxo <hello@webryxo.com>",
      to: ["Webryxo@gmail.com"],
      replyTo: email,
      subject: `New Webryxo Lead - ${business}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Webryxo Website Inquiry</h2>

          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Business:</strong> ${escapeHtml(business)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
          <p><strong>Business Type:</strong> ${escapeHtml(
            businessType || "Not provided"
          )}</p>
          <p><strong>Package:</strong> ${escapeHtml(
            selectedPackage || project
          )}</p>
          <p><strong>Services:</strong> ${escapeHtml(
            Array.isArray(selectedServices)
              ? selectedServices.join(", ")
              : selectedServices || "Not provided"
          )}</p>
          <p><strong>Budget:</strong> ${escapeHtml(
            budget || "Not provided"
          )}</p>
          <p><strong>Timeline:</strong> ${escapeHtml(
            timeline || "Not provided"
          )}</p>
          <p><strong>Current Website:</strong> ${escapeHtml(
            website || "Not provided"
          )}</p>

          <hr />

          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    if (emailError) {
      console.error("Resend error:", emailError);

      // The lead is already safely stored in Supabase, so the customer
      // should still receive the success page instead of submitting twice.
      return NextResponse.json(
        { success: true, emailSent: false },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { success: true, emailSent: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
