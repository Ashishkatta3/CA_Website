import Image from "next/image";

// MSS Advisory Services wordmark: Georgia "MSS", a gold rule, then
// "ADVISORY SERVICES" and "CHARTERED ACCOUNTANTS" in letter-spaced Arial Bold.
// The lettering is converted to outlines in /public/brand so it renders the
// same on every device. "compact" drops the "Chartered Accountants" line,
// which is unreadable at header size.
const variants = {
  full: { src: "/brand/logo.svg", width: 548, height: 218, alt: "MSS Advisory Services, Chartered Accountants" },
  compact: { src: "/brand/logo-compact.svg", width: 548, height: 168, alt: "MSS Advisory Services" },
};

export function BrandLogo({ variant = "full", className = "", priority = false }: { variant?: keyof typeof variants; className?: string; priority?: boolean }) {
  const v = variants[variant];
  return <Image src={v.src} width={v.width} height={v.height} alt={v.alt} priority={priority} className={`w-auto ${className}`} />;
}
