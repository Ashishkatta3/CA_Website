"use server";

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

  // Delivery: connect this to email (e.g. Resend/SES), a CRM, or the future
  // /portal database. Until then enquiries are only written to the server log.
  console.info("[enquiry]", JSON.stringify(enquiry));

  return { status: "success" };
}
