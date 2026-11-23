"use server";

import { firm } from "@/content/site";

export type EnquiryState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "phone" | "email" | "consent", string>>;
  // Echoed back on error, because React resets the form after an action runs.
  values?: { name: string; phone: string; email: string; clientType: string; needs: string[]; message: string; consent: boolean };
};

export async function submitEnquiry(_prev: EnquiryState, formData: FormData): Promise<EnquiryState> {
  // Honeypot: real users never fill this hidden field.
  if (formData.get("company_website")) return { status: "success" };

  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const clientType = String(formData.get("clientType") ?? "");
  const needs = formData.getAll("needs").map(String);
  const message = String(formData.get("message") ?? "").trim().slice(0, 4000);

  const errors: EnquiryState["errors"] = {};
  if (name.length < 2) errors.name = "Please enter your name.";
  if (phone.replace(/\D/g, "").length < 10) errors.phone = "Please enter a valid phone number.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Please enter a valid email address.";
  if (!formData.get("consent")) errors.consent = "Please confirm so we can contact you.";

  if (Object.keys(errors).length) {
    return {
      status: "error",
      errors,
      message: "Please check the highlighted fields.",
      values: { name, phone, email, clientType, needs, message, consent: !!formData.get("consent") },
    };
  }

  const enquiry = { name, phone, email, clientType, needs, message, receivedAt: new Date().toISOString() };

  // Always logged, so nothing is lost if email delivery fails.
  console.info("[enquiry]", JSON.stringify(enquiry));

  if (!(await sendEnquiryEmail(enquiry))) {
    return {
      status: "error",
      message: `Sorry, we couldn't send your enquiry. Please call us on ${firm.phone} or email ${firm.email}.`,
      values: { name, phone, email, clientType, needs, message, consent: true },
    };
  }

  return { status: "success" };
}

type Enquiry = { name: string; phone: string; email: string; clientType: string; needs: string[]; message: string; receivedAt: string };

// Sends via Resend (https://resend.com). Set in Vercel:
//   RESEND_API_KEY — required; without it enquiries are only logged
//   ENQUIRY_TO     — recipient(s), comma-separated (defaults to the firm email)
//   ENQUIRY_FROM   — sender on a verified domain (defaults to Resend's test
//                    sender, which can only deliver to the Resend account's own email)
async function sendEnquiryEmail(e: Enquiry): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  if (!key) return true;

  const to = (process.env.ENQUIRY_TO ?? firm.email).split(",").map((s) => s.trim()).filter(Boolean);
  const text = [
    `Name: ${e.name}`,
    `Phone: ${e.phone}`,
    `Email: ${e.email}`,
    `Client type: ${e.clientType || "—"}`,
    `Needs: ${e.needs.join(", ") || "—"}`,
    "",
    e.message || "(no message)",
    "",
    `Received ${e.receivedAt}`,
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.ENQUIRY_FROM ?? `${firm.name} Website <onboarding@resend.dev>`,
        to,
        reply_to: e.email,
        subject: `New enquiry from ${e.name}`,
        text,
      }),
    });
    if (!res.ok) console.error("[enquiry] email failed", res.status, await res.text());
    return res.ok;
  } catch (err) {
    console.error("[enquiry] email failed", err);
    return false;
  }
}
