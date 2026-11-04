import { CalendarDays } from "lucide-react";
import { SiDiscord, SiGmail, SiLinkedin } from "react-icons/si";
import { profile } from "@/constants/site/site";

const secondary =
  "inline-flex min-h-10 flex-[1_1_140px] items-center justify-center gap-2 rounded-md border bg-btn px-4 font-semibold text-fg";

export default function CtaBox() {
  return (
    <section
      aria-labelledby="cta-title"
      className="flex flex-col gap-3.5 rounded-md border bg-surface p-6"
    >
      <h2 id="cta-title" className="text-xl font-semibold">
        Ready for your next product or MVP
      </h2>
      <p className="text-fg-muted">
        Prefer async? Drop a note with context and links, and I&apos;ll reply
        with next steps and availability.
      </p>
      <div className="flex flex-wrap gap-2">
        <a
          href={profile.calendly}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 flex-[1_1_100%] items-center justify-center gap-2 rounded-md border border-fg/10 bg-success px-4 font-semibold text-white"
        >
          <CalendarDays size={16} aria-hidden="true" />
          Book a 30-min call
        </a>
        <a href={`mailto:${profile.email}`} className={secondary}>
          <SiGmail size={16} aria-hidden="true" />
          Email me
        </a>
        <a
          href={profile.linkedin.href}
          target="_blank"
          rel="noopener noreferrer"
          className={secondary}
        >
          <SiLinkedin size={16} aria-hidden="true" />
          LinkedIn
        </a>
        <a
          href={profile.discord.href}
          target="_blank"
          rel="noopener noreferrer"
          className={secondary}
        >
          <SiDiscord size={16} aria-hidden="true" />
          Discord
        </a>
      </div>
    </section>
  );
}
