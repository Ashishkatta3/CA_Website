// MSS Advisory Services — "Trail Summit". A coin holding an M of two peaks; a
// winding S-trail climbs the tall peak to a saffron flag. Standalone SVGs live
// in /public/brand; the favicon is src/app/icon.svg.

const NAVY = "var(--color-ink)";
const CREAM = "var(--color-cream)";
const SAFFRON = "var(--color-saffron)";

// "full" carries the trail and flagpole; "compact" drops them so the mark stays
// crisp at nav size (under ~40px), as in the brand sheet's small-size lockups.
export function LogoMark({
  className = "size-8",
  title,
  detail = "full",
}: {
  className?: string;
  title?: string;
  detail?: "full" | "compact";
}) {
  return (
    <svg viewBox="0 0 100 100" className={className} role={title ? "img" : undefined} aria-label={title} aria-hidden={title ? undefined : true}>
      <circle cx="50" cy="50" r="48" fill={NAVY} />
      <polygon points="22,76 38,36 54,76" fill={CREAM} />
      <polygon points="46,76 64,22 82,76" fill={CREAM} />
      {detail === "full" ? (
        <>
          <path d="M59,76 C45,66 80,57 63,47 C55,41 70,37 64,31" fill="none" stroke={NAVY} strokeWidth="3.2" strokeLinecap="round" />
          <line x1="64" y1="22" x2="64" y2="11" stroke={SAFFRON} strokeWidth="1.8" strokeLinecap="round" />
          <polygon points="64,11 75,14.5 64,18" fill={SAFFRON} />
        </>
      ) : (
        <polygon points="64,8 76,13 64,18" fill={SAFFRON} />
      )}
    </svg>
  );
}

export function Wordmark({ className = "", caption = false, dark = false }: { className?: string; caption?: boolean; dark?: boolean }) {
  return (
    <span className={`flex flex-col leading-none font-brand ${dark ? "text-white" : "text-ink"} ${className}`}>
      <span className="font-black tracking-[-0.03em]">MSS</span>
      <span className="mt-[0.3em] text-[0.42em] font-bold tracking-[0.34em] uppercase">Advisory Services</span>
      {caption && <span className={`mt-[0.55em] text-[0.42em] font-medium tracking-[0.04em] ${dark ? "text-white/70" : "text-ink-2"}`}>Chartered Accountants · Business Advisory</span>}
    </span>
  );
}
