import type { IconName } from "@/components/Icon";

// Keep every claim here something the firm can substantiate.

export const trustPoints: { icon: IconName; title: string; text: string }[] = [
  { icon: "award", title: "ICAI-registered firm", text: "Practising chartered accountants, registered with the Institute." },
  { icon: "users", title: "Experienced professionals", text: "Chartered accountants and specialists with over two decades of practice." },
  { icon: "lock", title: "Confidential & secure", text: "Your financial information is handled with care." },
  { icon: "chat", title: "Client-focused", text: "Clear answers and practical guidance, not jargon." },
];

export const whyChoose: { icon: IconName; eyebrow: string; title: string }[] = [
  { icon: "award", eyebrow: "Two decades of excellence", title: "Over twenty years of professional practice behind every engagement." },
  { icon: "compass", eyebrow: "Integrated solutions", title: "Taxation, compliance and advisory, all under one roof." },
  { icon: "users", eyebrow: "Experienced team", title: "Chartered accountants and specialists who know their field." },
  { icon: "clock", eyebrow: "Timely & accurate", title: "Practical business guidance, delivered on time and done right." },
  { icon: "heart", eyebrow: "Client-centric", title: "Focused on long-term value, not one-off transactions." },
  { icon: "chart", eyebrow: "Sustainable growth", title: "Committed to your growth, and to staying compliant along the way." },
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

export type TeamMember = { name: string; title?: string; experience?: string; qualifications?: string[]; initials: string; photo?: string };

export const managingDirector: TeamMember = {
  name: "Venkata Vidya Sagar Reddy Karumuri",
  title: "Managing Director & CEO",
  initials: "VS",
  photo: "/team/venkata-vidya-sagar-reddy-karumuri.jpg",
};

export const team: TeamMember[] = [
  { name: "CA V. Bala Murali Krishna Reddy", experience: "20+ years of professional excellence", qualifications: ["FCA"], initials: "BR", photo: "/team/bala-murali-krishna-reddy.jpg" },
  { name: "P. Srinivas Rao", experience: "15+ years in Accounting & Compliance", qualifications: ["B.Com"], initials: "SR", photo: "/team/srinivas.jpg" },
  { name: "CA G. Siva Sankar Reddy", experience: "5+ years in Taxation, GST & Advisory Services", qualifications: ["ACA"], initials: "SS", photo: "/team/siva-sankar-reddy.jpg" },
  { name: "CA Sainadh Velugula", experience: "3+ years in Taxation, Corporate Law & Financial Advisory", qualifications: ["ACA", "CMA", "LLB"], initials: "SV", photo: "/team/sainadh-velugula.jpg" },
];
