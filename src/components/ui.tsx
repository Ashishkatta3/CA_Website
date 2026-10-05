import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type LinkProps = ComponentProps<typeof Link>;

export function Button({ variant = "primary", size = "md", className = "", ...props }: LinkProps & { variant?: "primary" | "secondary" | "on-dark"; size?: "sm" | "md" }) {
  const sizes = { sm: "px-3.5 py-1.5 text-[13px]", md: "px-[22px] py-3 text-[17px]" };
  const variants = {
    primary: "bg-accent text-white hover:bg-accent-hover",
    secondary: "border border-accent text-accent hover:bg-accent hover:text-white",
    "on-dark": "border border-link-on-dark text-link-on-dark hover:bg-link-on-dark hover:text-black",
  };
  return (
    <Link
      {...props}
      className={`inline-flex items-center justify-center rounded-full font-normal tracking-[-0.022em] transition-colors duration-200 ${sizes[size]} ${variants[variant]} ${className}`}
    />
  );
}

export function Chevron({ className = "size-3" }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="m4.5 2 4 4-4 4" />
    </svg>
  );
}

export function MoreLink({ children, dark = false, className = "", ...props }: LinkProps & { dark?: boolean; children: ReactNode }) {
  return (
    <Link {...props} className={`group inline-flex items-center gap-1 ${dark ? "text-link-on-dark" : "text-link"} hover:underline ${className}`}>
      {children}
      <Chevron className="size-3 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

export function Container({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-[1024px] px-4 sm:px-6 ${className}`}>{children}</div>;
}

export function SectionHeading({ eyebrow, title, intro, className = "", dark = false }: { eyebrow?: string; title: ReactNode; intro?: ReactNode; className?: string; dark?: boolean }) {
  return (
    <div className={`text-center ${className}`}>
      {eyebrow && <p className={`type-eyebrow mb-2 ${dark ? "text-[#86868b]" : "text-ink-2"}`}>{eyebrow}</p>}
      <h2 className="type-headline whitespace-pre-line">{title}</h2>
      {intro && <p className={`type-intro mx-auto mt-4 max-w-2xl ${dark ? "text-[#a1a1a6]" : "text-ink-2"}`}>{intro}</p>}
    </div>
  );
}
