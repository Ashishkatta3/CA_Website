import type { Service } from "@/content/services";
import { Icon } from "./Icon";
import { MoreLink } from "./ui";

export const serviceGradient: Record<string, string> = {
  "income-tax": "from-[#2997ff] to-[#7a5af8]",
  gst: "from-[#00c6a7] to-[#1e88e5]",
  accounting: "from-[#ff9f0a] to-[#ff375f]",
  audit: "from-[#30d158] to-[#0a84ff]",
  tds: "from-[#5e5ce6] to-[#bf5af2]",
  corporate: "from-[#64748b] to-[#1d1d1f]",
  advisory: "from-[#ff6b00] to-[#ffb340]",
  registrations: "from-[#0a84ff] to-[#64d2ff]",
};

export function ServiceTile({ service, dark = false, wide = false }: { service: Service; dark?: boolean; wide?: boolean }) {
  const chips = service.offerings.slice(0, wide ? 6 : 4);
  return (
    <article
      className={`flex flex-col items-center overflow-hidden text-center ${wide ? "px-6 pt-14 pb-16" : "rounded-none px-6 pt-12 pb-12 sm:rounded-[28px]"} ${dark ? "bg-black text-[#f5f5f7]" : wide ? "bg-canvas" : "bg-white"}`}
    >
      <h3 className={wide ? "type-headline" : "type-tile"}>{service.name}</h3>
      <p className={`mt-2 whitespace-pre-line ${wide ? "type-intro" : "text-[19px] leading-snug sm:text-[21px]"} ${dark ? "text-[#a1a1a6]" : "text-ink-2"}`}>
        {service.headline.replace("\n", " ")}
      </p>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[17px]">
        <MoreLink href={`/services/${service.slug}`} dark={dark}>Learn more</MoreLink>
        <MoreLink href={`/contact?service=${service.slug}`} dark={dark}>Enquire</MoreLink>
      </div>

      <div className={`relative mt-10 flex w-full max-w-xl flex-col items-center ${wide ? "md:max-w-3xl" : ""}`}>
        <div className={`grid size-24 place-items-center rounded-[26px] bg-linear-to-br text-white shadow-lg ${serviceGradient[service.slug]} ${wide ? "sm:size-28" : ""}`}>
          <Icon name={service.icon} className={wide ? "size-12 sm:size-14" : "size-11"} strokeWidth={1.4} />
        </div>
        <ul className="mt-8 flex flex-wrap justify-center gap-2">
          {chips.map((o) => (
            <li
              key={o.title}
              className={`rounded-full px-4 py-2 text-[14px] ${dark ? "bg-[#1d1d1f] text-[#f5f5f7]" : wide ? "bg-white text-ink shadow-sm" : "bg-canvas text-ink"}`}
            >
              {o.title}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
