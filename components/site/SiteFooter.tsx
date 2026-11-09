import { profile } from "@/constants/site/site";
import KobsMark from "./KobsMark";

// Overview only.
export default function SiteFooter() {
  const links = [
    { label: profile.email, href: `mailto:${profile.email}` },
    { label: "GitHub", href: profile.github.href },
    { label: "LinkedIn", href: profile.linkedin.href },
    { label: "Discord", href: profile.discord.href },
  ];

  return (
    <footer className="mx-auto flex w-full max-w-shell flex-wrap items-center justify-between gap-3 border-t px-[clamp(16px,4vw,32px)] pb-10 pt-6 text-xs text-fg-muted">
      <span className="flex items-center gap-2.5">
        <KobsMark size={20} />© {new Date().getFullYear()} Kobe Sergio
      </span>
      <span className="flex flex-wrap gap-4">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="text-link hover:underline"
          >
            {link.label}
          </a>
        ))}
      </span>
    </footer>
  );
}
