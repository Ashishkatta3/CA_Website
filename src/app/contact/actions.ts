"use server";

import { firm } from "@/content/site";
import { enquiryHtml, enquirySubject, enquiryText, type Enquiry } from "./email";

export type EnquiryState = {
  status: "idle" | "success" | "error" | "mailto";
  message?: string;
  // Set when email delivery isn't configured: the browser opens this pre-filled draft instead.
  mailto?: string;
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

  const result = await sendEnquiryEmail(enquiry);
  if (result === "not-configured") return { status: "mailto", mailto: buildMailto(enquiry) };
  if (result === "failed") {
    return {
      status: "error",
      message: `Sorry, we couldn't send your enquiry. Please call us on ${firm.phone} or email ${firm.email}.`,
      values: { name, phone, email, clientType, needs, message, consent: true },
    };
  }

  return { status: "success" };
}

// Sends via Resend (https://resend.com). Set in Vercel:
//   RESEND_API_KEY — required; without it enquiries are only logged
//   ENQUIRY_TO     — recipient(s), comma-separated (defaults to the firm email)
//   ENQUIRY_FROM   — sender on a verified domain (defaults to Resend's test
//                    sender, which can only deliver to the Resend account's own email)
//   Without RESEND_API_KEY the visitor's own email app opens with the enquiry
//   pre-filled to firm.email (mailto), so enquiries still reach the firm.
async function sendEnquiryEmail(e: Enquiry): Promise<"sent" | "failed" | "not-configured"> {
  const key = process.env.RESEND_API_KEY;
  if (!key) return "not-configured";

  const to = (process.env.ENQUIRY_TO ?? firm.email).split(",").map((s) => s.trim()).filter(Boolean);

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.ENQUIRY_FROM ?? `${firm.name} Website <onboarding@resend.dev>`,
        to,
        reply_to: e.email,
        subject: enquirySubject(e),
        html: enquiryHtml(e),
        text: enquiryText(e),
      }),
    });
    if (!res.ok) console.error("[enquiry] email failed", res.status, await res.text());
    return res.ok ? "sent" : "failed";
  } catch (err) {
    console.error("[enquiry] email failed", err);
    return "failed";
  }
}

// Some mail apps truncate very long mailto links, so the message is capped.
function buildMailto(e: Enquiry) {
  const subject = encodeURIComponent(enquirySubject(e));
  const body = encodeURIComponent(enquiryText(e, 1200)).replace(/%0A/g, "%0D%0A");
  return `mailto:${firm.email}?subject=${subject}&body=${body}`;
}
