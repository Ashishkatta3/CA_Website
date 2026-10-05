import type { IconName } from "@/components/Icon";

// Keep every claim here something the firm can substantiate.

export const trustPoints: { icon: IconName; title: string; text: string }[] = [
  { icon: "award", title: "ICAI-registered firm", text: "Practising chartered accountants, registered with the Institute." },
  { icon: "users", title: "Experienced professionals", text: "A qualified team across tax, audit and advisory." },
  { icon: "lock", title: "Confidential & secure", text: "Your financial information is handled with care." },
  { icon: "chat", title: "Client-focused", text: "Clear answers and practical guidance, not jargon." },
];

export const whyChoose: { icon: IconName; eyebrow: string; title: string }[] = [
  { icon: "award", eyebrow: "Professional expertise", title: "Qualified chartered accountants on every engagement." },
  { icon: "chat", eyebrow: "Transparent communication", title: "Clear scope, clear timelines, no surprises." },
  { icon: "lock", eyebrow: "Confidentiality", title: "Your financial information stays private." },
  { icon: "compass", eyebrow: "Practical guidance", title: "Advice that fits how your business actually runs." },
  { icon: "calendar", eyebrow: "Compliance-focused", title: "Deadlines tracked so you don't have to." },
  { icon: "users", eyebrow: "Long-term relationships", title: "A team that knows your history, year after year." },
];

export const processSteps: { title: string; text: string }[] = [
  { title: "Tell us your requirement", text: "Share a few details through the enquiry form, phone or email." },
  { title: "Initial consultation", text: "We talk through your situation and ask the right questions." },
  { title: "Scope & proposal", text: "We recommend the right service and share a clear scope." },
  { title: "Engagement & documents", text: "We formalise the engagement and collect what's needed." },
  { title: "Service delivery", text: "We do the work and keep you updated along the way." },
  { title: "Ongoing support", text: "We stay on top of future deadlines and changes." },
];

export const approach: { title: string; text: string }[] = [
  { title: "Understand first", text: "Every engagement starts with understanding your business, your history and what you're trying to achieve." },
  { title: "Get it right", text: "Accuracy and compliance come first. We review our work before anything is filed." },
  { title: "Explain clearly", text: "We tell you what we did, why it matters and what you need to do next — in plain language." },
  { title: "Stay ahead", text: "We track deadlines and regulatory changes so you hear about them from us, early." },
];

// Placeholder team — replace with real partners and members, or remove the section.
export const team: { name: string; role: string; qualifications: string; initials: string }[] = [
  { name: "[Partner Name]", role: "Founding Partner", qualifications: "FCA", initials: "PN" },
  { name: "[Partner Name]", role: "Partner — Audit & Assurance", qualifications: "FCA", initials: "PN" },
  { name: "[Partner Name]", role: "Partner — Direct Tax", qualifications: "ACA", initials: "PN" },
  { name: "[Member Name]", role: "Manager — GST", qualifications: "ACA", initials: "MN" },
];
