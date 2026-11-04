import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiDiscord, SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import { experiences } from "@/constants/site/Experiences";
import { profile, stats } from "@/constants/site/site";
import CompanyLogo from "./CompanyLogo";

const detailIcon = {
  pin: (
    <>
      <path d="M8 14s4.5-4.2 4.5-7.5a4.5 4.5 0 0 0-9 0C3.5 9.8 8 14 8 14z" />
      <circle cx="8" cy="6.5" r="1.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="8" cy="8" r="6" />
      <path d="M8 5v3l2 1.5" />
    </>
  ),
  globe: (
    <>
      <circle cx="8" cy="8" r="6" />
      <path d="M2 8h12M8 2c1.8 2 1.8 10 0 12M8 2c-1.8 2-1.8 10 0 12" />
    </>
  ),
  check: (
    <>
      <circle cx="8" cy="8" r="6" />
      <path d="M5.5 8l1.8 1.8L10.5 6.3" />
    </>
  ),
  people: (
    <>
      <circle cx="6" cy="5.5" r="2.2" />
      <path d="M2 13c0-2.2 1.8-3.8 4-3.8s4 1.6 4 3.8" />
      <circle cx="11.5" cy="6" r="1.8" />
      <path d="M11 9.4c1.8 0 3 1.4 3 3.2" />
    </>
  ),
};

function DetailIcon({ name }: { name: keyof typeof detailIcon }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0 text-fg-muted"
    >
      {detailIcon[name]}
    </svg>
  );
}

function StatLine({ items }: { items: typeof stats }) {
  return (
    <>
      {items.map((stat, index) => (
        <Fragment key={stat.label}>
          {index > 0 ? " · " : null}
          <strong className="text-fg">{stat.value}</strong> {stat.label}
        </Fragment>
      ))}
    </>
  );
}

// Full version on Overview; the short version (avatar through "Email me")
// sits on the Experience and Projects lists.
export default function ProfileSidebar({
  variant = "full",
}: {
  variant?: "full" | "short";
}) {
  const contacts = [
    {
      icon: <SiGmail size={16} aria-hidden="true" />,
      label: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: <SiLinkedin size={16} aria-hidden="true" />,
      ...profile.linkedin,
    },
    { icon: <SiGithub size={16} aria-hidden="true" />, ...profile.github },
    { icon: <SiDiscord size={16} aria-hidden="true" />, ...profile.discord },
  ];

  return (
    <>
      <div className="flex flex-wrap items-center gap-4">
        <Image
          src={profile.avatar}
          alt="Portrait of Kobe Sergio"
          width={296}
          height={296}
          priority
          sizes="(min-width: 1024px) 296px, 28vw"
          className="aspect-square w-[min(296px,28vw)] shrink-0 rounded-full border object-cover"
        />
        <div className="flex min-w-0 flex-[1_1_160px] flex-col gap-0.5">
          <h1 className="text-[26px] font-semibold leading-[1.25]">
            {profile.name}
          </h1>
          <p className="text-xl font-light leading-[1.3] text-fg-muted">
            {profile.fullName}
          </p>
          <span className="mt-2 inline-flex items-center gap-1.5 self-start rounded-full border px-2.5 py-[3px] text-xs font-semibold text-fg">
            <span className="size-2 rounded-full bg-success-fg" />
            Open to work
          </span>
        </div>
      </div>

      <p className="text-base">{profile.bio}</p>

      <a
        href={`mailto:${profile.email}`}
        className="flex min-h-9 items-center justify-center rounded-md border bg-btn font-semibold text-fg"
      >
        Email me
      </a>

      {variant === "full" ? (
        <>
          <div className="flex flex-col gap-1 text-fg-muted">
            <span className="flex items-center gap-1.5">
              <DetailIcon name="people" />
              <span>
                <StatLine items={stats.slice(0, 2)} />
              </span>
            </span>
            <span className="pl-[22px]">
              <StatLine items={stats.slice(2, 4)} />
            </span>
          </div>

          <ul className="flex flex-col gap-1.5">
            <li className="flex items-center gap-2">
              <DetailIcon name="pin" />
              {profile.location}
            </li>
            <li className="flex items-center gap-2">
              <DetailIcon name="clock" />
              {profile.timezone}
            </li>
            <li className="flex items-center gap-2">
              <DetailIcon name="globe" />
              {profile.languages}
            </li>
            <li className="flex items-center gap-2">
              <DetailIcon name="check" />
              {profile.availability}
            </li>
            {contacts.map((contact) => (
              <li
                key={contact.href}
                className="flex items-center gap-2 text-fg-muted"
              >
                {contact.icon}
                <a
                  href={contact.href}
                  target={
                    contact.href.startsWith("mailto:") ? undefined : "_blank"
                  }
                  rel="noopener noreferrer"
                  className="text-fg hover:underline"
                >
                  {contact.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="border-t pt-4">
            <h2 className="mb-2 text-base font-semibold">Organizations</h2>
            <div className="flex flex-wrap gap-1.5">
              {experiences.map((experience) => (
                <Link
                  key={experience.slug}
                  href={`/experience/${experience.slug}`}
                  aria-label={experience.company}
                  className="block rounded-md"
                >
                  <CompanyLogo
                    name={experience.company}
                    logo={experience.companyLogo}
                    icon={experience.logoIcon}
                    size={32}
                  />
                </Link>
              ))}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
