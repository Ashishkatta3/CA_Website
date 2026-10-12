import type { Service } from "@/content/services";
import { Icon } from "./Icon";
import { MoreLink } from "./ui";

export const serviceGradient: Record<string, string> = {
  "income-tax": "from-[#2e4e73] to-[#4f7ca8]",
  gst: "from-[#c27a12] to-[#e8a33d]",
  accounting: "from-[#3b5f86] to-[#7fa6c9]",
  audit: "from-[#b5651d] to-[#e8a33d]",
  tds: "from-[#24476b] to-[#5d86b0]",
  advisory: "from-[#d98a1f] to-[#f2c46b]",
  registrations: "from-[#2e4e73] to-[#d98a1f]",
};

export function ServiceTile({ service, dark = false, wide = false }: { service: Service; dark?: boolean; wide?: boolean }) {
  const chips = service.offerings.slice(0, wide ? 6 : 4);
  return (
    <article
      className={`flex flex-col items-center overflow-hidden text-center ${wide ? "px-6 pt-14 pb-16" : "rounded-none px-6 pt-12 pb-12 sm:rounded-[28px]"} ${dark ? "bg-night text-cream" : wide ? "bg-canvas" : "bg-white"}`}
    >
      <h3 className={wide ? "type-headline" : "type-tile"}>{service.name}</h3>
      <p className={`mt-2 whitespace-pre-line ${wide ? "type-intro" : "text-[19px] leading-snug sm:text-[21px]"} ${dark ? "text-mute-dark" : "text-ink-2"}`}>
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
              className={`rounded-full px-4 py-2 text-[14px] ${dark ? "bg-night-2 text-cream" : wide ? "bg-white text-ink shadow-sm" : "bg-canvas text-ink"}`}
            >
              {o.title}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
