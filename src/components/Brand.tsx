import { useId } from "react";

// Sagar Reddy & Co. — "Sagar Rise". Sagar means ocean: layered waves carry
// rising bars, the tallest a gold arrow for growth. Standalone SVGs live in
// /public/brand; the favicon is src/app/icon.svg.

export function LogoMark({ className = "size-8", title }: { className?: string; title?: string }) {
  const id = useId();
  return (
    <svg viewBox="0 0 64 64" className={className} role={title ? "img" : undefined} aria-label={title} aria-hidden={title ? undefined : true}>
      <defs>
      <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="0" y2="64" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#0f3277"/><stop offset="1" stopColor="#06142f"/></linearGradient>
      <radialGradient id={`${id}-glow`} cx="42" cy="22" r="26" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#3b82f6" stopOpacity=".45"/><stop offset="1" stopColor="#3b82f6" stopOpacity="0"/></radialGradient>
      <linearGradient id={`${id}-gold`} x1="0" y1="9" x2="0" y2="50" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ffe29a"/><stop offset="1" stopColor="#e59a2f"/></linearGradient>
      <linearGradient id={`${id}-bar`} x1="0" y1="20" x2="0" y2="50" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fff"/><stop offset="1" stopColor="#c7d6f5"/></linearGradient>
      <linearGradient id={`${id}-wave1`} x1="0" y1="0" x2="64" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#38bdf8"/><stop offset="1" stopColor="#2563eb"/></linearGradient>
      <linearGradient id={`${id}-wave2`} x1="0" y1="0" x2="64" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#1d4ed8"/><stop offset="1" stopColor="#1e3a8a"/></linearGradient>
      <clipPath id={`${id}-clip`}><rect width="64" height="64" rx="15"/></clipPath>
      </defs>
      <g clipPath={`url(#${id}-clip)`}>
      <rect width="64" height="64" fill={`url(#${id}-bg)`}/>
      <rect width="64" height="64" fill={`url(#${id}-glow)`}/>
      <rect x="15.5" y="31" width="7" height="24" rx="2" fill={`url(#${id}-bar)`} opacity=".55"/>
      <rect x="26.5" y="23.5" width="7" height="32" rx="2" fill={`url(#${id}-bar)`} opacity=".8"/>
      <path d="M37.5 56V19.5h-3L41 9.5l6.5 10h-3V56z" fill={`url(#${id}-gold)`} stroke={`url(#${id}-gold)`} strokeWidth="1" strokeLinejoin="round"/>
      <path d="M-2 45c10-7.5 18-7 26-2.5S40 51 51 44s15-4 15-4v26H-2z" fill={`url(#${id}-wave1)`}/>
      <path d="M-2 45c10-7.5 18-7 26-2.5S40 51 51 44s15-4 15-4" fill="none" stroke="#e0f2fe" strokeWidth="1.2" strokeLinecap="round" opacity=".7"/>
      <path d="M-2 52c9-5 16-4.5 24-1.5S38 57 49 51.5s17-3 17-3V66H-2z" fill={`url(#${id}-wave2)`}/>
      </g>
    </svg>
  );
}

export function Wordmark({ className = "", caption = false, dark = false }: { className?: string; caption?: boolean; dark?: boolean }) {
  return (
    <span className={`flex flex-col leading-none ${className}`}>
      <span className={`font-display font-semibold tracking-[-0.01em] ${dark ? "text-white" : "text-ink"}`}>
        Sagar Reddy <span className="font-normal text-ink-3">&amp;</span> Co.
      </span>
      {caption && <span className="mt-1 text-[0.55em] font-medium tracking-[0.18em] text-ink-2 uppercase">Chartered Accountants</span>}
    </span>
  );
}
