import Link from "next/link";
import { experiences } from "@/constants/site/Experiences";
import CompanyLogo from "@/components/site/CompanyLogo";
import { OutlinePill } from "@/components/site/Chips";

// The 4 newest companies as cards. The slug link covers the whole card.
export default function ExperienceCards() {
  return (
    <section aria-labelledby="exp-title" className="flex flex-col gap-2">
      <div className="flex items-baseline justify-between gap-3">
        <h2 id="exp-title" className="text-base font-normal">
          Experience
        </h2>
        <Link href="/experience" className="text-xs text-link hover:underline">
          See all {experiences.length} experiences
        </Link>
      </div>
      <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(320px,100%),1fr))]">
        {experiences.slice(0, 4).map((experience) => (
          <article
            key={experience.slug}
            className="relative flex flex-col gap-2 rounded-md border p-4"
          >
            <div className="flex flex-wrap items-center gap-2">
              <CompanyLogo
                name={experience.company}
                logo={experience.companyLogo}
                icon={experience.logoIcon}
                size={20}
              />
              <Link
                href={`/experience/${experience.slug}`}
                className="font-semibold text-link hover:underline after:absolute after:inset-0"
              >
                {experience.slug}
              </Link>
              <OutlinePill>{experience.location}</OutlinePill>
            </div>
            <p className="text-xs font-semibold">{experience.role}</p>
            <p className="flex-1 text-xs text-fg-muted">{experience.summary}</p>
            <p className="flex flex-wrap gap-4 text-xs text-fg-muted">
              <span>{experience.time}</span>
              <span>{experience.contributions.length} builds</span>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
