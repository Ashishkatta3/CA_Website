// How an enquiry looks as an email. The plain-text version is used for the
// pre-filled mailto draft (mail apps only accept plain text there) and as the
// text part of the Resend email; the HTML version is the Resend email body.

import { firm } from "@/content/site";
import { clientTypes, needOptions } from "./options";

export type Enquiry = { name: string; phone: string; email: string; clientType: string; needs: string[]; message: string; receivedAt: string };

const label = (list: { id: string; label: string }[], id: string) => list.find((o) => o.id === id)?.label ?? id;
const clientTypeLabel = (e: Enquiry) => (e.clientType ? label(clientTypes, e.clientType) : "Not specified");
const needLabels = (e: Enquiry) => e.needs.map((n) => label(needOptions, n));

const receivedAt = (e: Enquiry) =>
  new Date(e.receivedAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata", dateStyle: "medium", timeStyle: "short" }) + " IST";

export function enquirySubject(e: Enquiry) {
  const needs = needLabels(e);
  return `Enquiry from ${e.name}${needs.length ? ` – ${needs.join(", ")}` : ""}`;
}

const rule = "────────────────────────";

// Written in the visitor's voice, since in the mailto case they send it.
export function enquiryText(e: Enquiry, maxMessage = Infinity) {
  const msg = e.message.length > maxMessage ? `${e.message.slice(0, maxMessage)}…` : e.message;
  const needs = needLabels(e);
  return [
    `Dear ${firm.name} team,`,
    "",
    "I would like to enquire about your services. My details are below.",
    "",
    "CONTACT DETAILS",
    rule,
    `Name:     ${e.name}`,
    `Phone:    ${e.phone}`,
    `Email:    ${e.email}`,
    `I am a:   ${clientTypeLabel(e)}`,
    "",
    "SERVICES NEEDED",
    rule,
    ...(needs.length ? needs.map((n) => `•  ${n}`) : ["Not specified"]),
    "",
    "MY REQUIREMENT",
    rule,
    msg || "No additional details provided.",
    "",
    "I look forward to hearing from you.",
    "",
    "Regards,",
    e.name,
    e.phone,
    "",
    `— Sent via the ${firm.name} website enquiry form`,
  ].join("\n");
}

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

// Email clients ignore <style> blocks and modern CSS, so this is table-based with inline styles.
export function enquiryHtml(e: Enquiry) {
  const navy = "#0D1B2A", saffron = "#E8A33D", cream = "#F2EDE3", muted = "#5b6573";
  const needs = needLabels(e);
  const row = (k: string, v: string) =>
    `<tr><td style="padding:8px 0;color:${muted};font-size:14px;width:110px;vertical-align:top">${k}</td><td style="padding:8px 0;color:${navy};font-size:15px;font-weight:600">${v}</td></tr>`;
  const heading = (t: string) =>
    `<p style="margin:28px 0 10px;font-size:12px;letter-spacing:1.5px;text-transform:uppercase;color:${saffron};font-weight:700">${t}</p>`;
  const chips = needs.length
    ? needs.map((n) => `<span style="display:inline-block;margin:0 6px 8px 0;padding:6px 14px;border-radius:999px;background:${cream};color:${navy};font-size:14px">${esc(n)}</span>`).join("")
    : `<span style="color:${muted};font-size:15px">Not specified</span>`;
  const message = e.message
    ? esc(e.message).replace(/\n/g, "<br>")
    : `<span style="color:${muted}">No additional details provided.</span>`;
  const replyHref = `mailto:${encodeURIComponent(e.email)}?subject=${encodeURIComponent(`Re: your enquiry to ${firm.name}`)}`;
  const telHref = `tel:${e.phone.replace(/[^\d+]/g, "")}`;

  return `<!doctype html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(enquirySubject(e))}</title></head>
<body style="margin:0;padding:0;background:${cream};font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${cream};padding:24px 12px"><tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden">
  <tr><td style="background:${navy};padding:24px 32px">
    <p style="margin:0;color:#ffffff;font-size:20px;font-weight:700;letter-spacing:.3px">${esc(firm.name)}</p>
    <p style="margin:4px 0 0;color:${saffron};font-size:13px">${esc(firm.tagline)}</p>
  </td></tr>
  <tr><td style="padding:32px">
    <p style="margin:0;font-size:13px;color:${muted}">New website enquiry · ${esc(receivedAt(e))}</p>
    <h1 style="margin:6px 0 0;font-size:24px;color:${navy}">${esc(e.name)}</h1>
    ${heading("Contact details")}
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
      ${row("Phone", `<a href="${telHref}" style="color:${navy};text-decoration:none">${esc(e.phone)}</a>`)}
      ${row("Email", `<a href="mailto:${esc(e.email)}" style="color:${navy};text-decoration:none">${esc(e.email)}</a>`)}
      ${row("I am a", esc(clientTypeLabel(e)))}
    </table>
    ${heading("Services needed")}
    <div>${chips}</div>
    ${heading("Requirement")}
    <div style="border-left:3px solid ${saffron};background:#faf8f4;padding:14px 18px;font-size:15px;line-height:1.6;color:${navy}">${message}</div>
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:32px"><tr>
      <td style="background:${navy};border-radius:999px"><a href="${replyHref}" style="display:inline-block;padding:12px 26px;color:#ffffff;font-size:15px;font-weight:600;text-decoration:none">Reply to ${esc(e.name.split(" ")[0])}</a></td>
      <td style="width:10px"></td>
      <td style="border:1px solid ${navy};border-radius:999px"><a href="${telHref}" style="display:inline-block;padding:11px 24px;color:${navy};font-size:15px;font-weight:600;text-decoration:none">Call</a></td>
    </tr></table>
  </td></tr>
  <tr><td style="padding:18px 32px;border-top:1px solid #eee;font-size:12px;color:${muted}">Sent from the enquiry form on the ${esc(firm.name)} website. Replying to this email goes straight to ${esc(e.name)}.</td></tr>
</table>
</td></tr></table>
</body></html>`;
}
