"use client";

import { useActionState } from "react";
import { Icon } from "@/components/Icon";
import { submitEnquiry, type EnquiryState } from "./actions";
import { clientTypes, needOptions } from "./options";

function Field({ name, label, type = "text", error, autoComplete, defaultValue }: { name: string; label: string; type?: string; error?: string; autoComplete?: string; defaultValue?: string }) {
  return (
    <div>
      <div className="relative">
        <input
          id={name}
          name={name}
          type={type}
          placeholder=" "
          defaultValue={defaultValue}
          autoComplete={autoComplete}
          required
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
          className={`peer h-14 w-full rounded-xl border bg-white px-4 pt-5 text-[17px] outline-none transition-[border-color,box-shadow] focus:border-accent focus:ring-4 focus:ring-accent/15 ${error ? "border-[#e30000] bg-[#fff5f5]" : "border-ink-3"}`}
        />
        <label
          htmlFor={name}
          className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-[17px] text-ink-2 transition-all peer-focus:top-[15px] peer-focus:text-[12px] peer-[:not(:placeholder-shown)]:top-[15px] peer-[:not(:placeholder-shown)]:text-[12px]"
        >
          {label} <span aria-hidden="true">*</span>
        </label>
      </div>
      {error && <p id={`${name}-error`} className="mt-1.5 text-[13px] text-[#e30000]">{error}</p>}
    </div>
  );
}

function Chip({ type, name, value, label, defaultChecked }: { type: "radio" | "checkbox"; name: string; value: string; label: string; defaultChecked?: boolean }) {
  return (
    <label className="cursor-pointer">
      <input type={type} name={name} value={value} defaultChecked={defaultChecked} className="peer sr-only" />
      <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-3 px-4 py-2 text-[15px] transition-colors peer-checked:border-accent peer-checked:bg-accent peer-checked:text-white peer-focus-visible:ring-4 peer-focus-visible:ring-accent/25 hover:border-ink">
        {label}
      </span>
    </label>
  );
}

const initial: EnquiryState = { status: "idle" };

export function EnquiryForm({ defaultNeed, defaultClientType }: { defaultNeed?: string; defaultClientType?: string }) {
  const [state, action, pending] = useActionState(submitEnquiry, initial);
  const v = state.values;

  if (state.status === "success") {
    return (
      <div className="animate-[fadeUp_.6s_var(--ease-apple)] rounded-[28px] bg-white p-10 text-center sm:p-14" role="status">
        <span className="mx-auto grid size-16 place-items-center rounded-full bg-[#e6f7ec] text-[#1a9c47]">
          <Icon name="check" className="size-8" strokeWidth={2.2} />
        </span>
        <h2 className="mt-6 font-display text-[28px] font-semibold">Thank you.</h2>
        <p className="mx-auto mt-2 max-w-md text-ink-2">We&apos;ve received your enquiry and will get back to you shortly, usually within one working day.</p>
      </div>
    );
  }

  return (
    <form key={state.status === "error" ? JSON.stringify(v) : "initial"} action={action} noValidate className="space-y-10 rounded-[28px] bg-white p-7 sm:p-12">
      <fieldset className="space-y-4">
        <legend className="mb-4 font-display text-[21px] font-semibold">Your details</legend>
        <Field defaultValue={v?.name} name="name" label="Full name" autoComplete="name" error={state.errors?.name} />
        <div className="grid gap-4 sm:grid-cols-2">
          <Field defaultValue={v?.phone} name="phone" label="Phone" type="tel" autoComplete="tel" error={state.errors?.phone} />
          <Field defaultValue={v?.email} name="email" label="Email" type="email" autoComplete="email" error={state.errors?.email} />
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-4 font-display text-[21px] font-semibold">I am a…</legend>
        <div className="flex flex-wrap gap-2">
          {clientTypes.map((c) => (
            <Chip key={c.id} type="radio" name="clientType" value={c.id} label={c.label} defaultChecked={v ? v.clientType === c.id : c.id === defaultClientType} />
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-1 font-display text-[21px] font-semibold">I need help with</legend>
        <p className="mb-4 text-[14px] text-ink-2">Select all that apply.</p>
        <div className="flex flex-wrap gap-2">
          {needOptions.map((n) => (
            <Chip key={n.id} type="checkbox" name="needs" value={n.id} label={n.label} defaultChecked={v ? v.needs.includes(n.id) : n.id === defaultNeed} />
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="message" className="mb-4 block font-display text-[21px] font-semibold">Tell us about your requirement</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          maxLength={4000}
          defaultValue={v?.message}
          placeholder="A few lines about your situation and any deadlines."
          className="w-full rounded-xl border border-ink-3 bg-white p-4 text-[17px] outline-none transition-[border-color,box-shadow] placeholder:text-ink-3 focus:border-accent focus:ring-4 focus:ring-accent/15"
        />
      </div>

      {/* Honeypot */}
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div>
        <label className="flex items-start gap-3 text-[14px] text-ink-2">
          <input type="checkbox" name="consent" defaultChecked={v?.consent} className="mt-0.5 size-[18px] shrink-0 accent-accent" />
          I agree to be contacted about my enquiry. My information will be kept confidential and handled as described in the privacy policy.
        </label>
        {state.errors?.consent && <p className="mt-1.5 text-[13px] text-[#e30000]">{state.errors.consent}</p>}
      </div>

      {state.status === "error" && state.message && (
        <p role="alert" className="rounded-xl bg-[#fff5f5] px-4 py-3 text-[14px] text-[#e30000]">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-xl bg-accent py-4 text-[17px] text-white transition-colors hover:bg-accent-hover disabled:opacity-60 sm:w-auto sm:rounded-full sm:px-10 sm:py-3"
      >
        {pending ? "Sending…" : "Submit enquiry"}
      </button>
    </form>
  );
}
