"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { firm } from "@/content/site";

const KEY = "ca-disclaimer-accepted";

const listeners = new Set<() => void>();
const subscribe = (cb: () => void) => {
  listeners.add(cb);
  return () => listeners.delete(cb);
};
let dismissedThisSession = false;
const readAccepted = () => {
  if (dismissedThisSession) return true;
  try {
    return window.localStorage.getItem(KEY) === "1";
  } catch {
    return false;
  }
};

// First-visit disclaimer commonly shown by CA firm websites in line with ICAI
// guidance on advertising and solicitation. Have the firm review the wording.
export function DisclaimerGate() {
  const show = !useSyncExternalStore(subscribe, readAccepted, () => true);

  const accept = () => {
    try {
      window.localStorage.setItem(KEY, "1");
    } catch {}
    dismissedThisSession = true;
    listeners.forEach((l) => l());
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/40 p-4 backdrop-blur-sm sm:items-center" role="dialog" aria-modal="true" aria-labelledby="disclaimer-title">
      <div className="w-full max-w-lg animate-[fadeUp_.5s_var(--ease-apple)] rounded-[22px] bg-white p-7 shadow-2xl sm:p-9">
        <h2 id="disclaimer-title" className="font-display text-[24px] font-semibold">Disclaimer</h2>
        <div className="mt-3 space-y-3 text-[14px] leading-relaxed text-ink-2">
          <p>
            The rules of the Institute of Chartered Accountants of India (ICAI) do not permit chartered accountants to solicit work or
            advertise. By clicking “I agree”, you acknowledge that:
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>You are seeking information about {firm.name} of your own accord.</li>
            <li>There has been no advertisement, solicitation or inducement by the firm or its members.</li>
            <li>Information on this website is for general information only and is not professional advice.</li>
          </ul>
        </div>
        <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <Link href="/legal/disclaimer" onClick={accept} className="rounded-full px-5 py-2.5 text-center text-[15px] text-link hover:underline">
            Read full disclaimer
          </Link>
          <button type="button" onClick={accept} autoFocus className="rounded-full bg-accent px-6 py-2.5 text-[15px] text-white transition-colors hover:bg-accent-hover">
            I agree
          </button>
        </div>
      </div>
    </div>
  );
}
