"use client";

import { useState } from "react";
import Link from "next/link";
import { buildHref, type Repo } from "@/lib/repos";
import CompanyLogo from "@/components/site/CompanyLogo";
import { CountBadge, TopicChip } from "@/components/site/Chips";
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  LinkIcon,
} from "@/components/site/Icons";

export default function AboutPanel({ repo }: { repo: Repo }) {
  // Below 980px the skills and builds sit behind a toggle.
  const [showMore, setShowMore] = useState(false);
  const isProjects = repo.kind === "projects";
  const moreLabel = showMore
    ? isProjects
      ? "Hide skills"
      : "Hide skills and builds"
    : isProjects
      ? "Show skills"
      : "Show skills and builds";

  return (
    <aside className="flex flex-col gap-4 xl:sticky xl:top-6">
      <div className="flex items-center gap-2.5">
        <CompanyLogo
          name={repo.name}
          logo={repo.logo}
          icon={repo.logoIcon}
          size={32}
        />
        <h2 className="text-base font-semibold">About</h2>
      </div>
      <p className="text-[15px]">{repo.summary}</p>

      {repo.links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-semibold text-link [overflow-wrap:anywhere] hover:underline"
        >
          <LinkIcon className="shrink-0" />
          {link.label}
        </a>
      ))}

      {repo.role ? (
        <ul className="flex flex-col gap-2 text-fg-muted">
          <li className="flex items-start gap-2">
            <BriefcaseIcon stroke="currentColor" className="mt-0.5 shrink-0" />
            <span className="text-fg">{repo.role}</span>
          </li>
          <li className="flex items-center gap-2">
            <CalendarIcon stroke="currentColor" className="shrink-0" />
            {repo.period}
          </li>
        </ul>
      ) : null}

      <button
        type="button"
        onClick={() => setShowMore((value) => !value)}
        aria-expanded={showMore}
        className="-ml-1.5 inline-flex min-h-9 items-center gap-1.5 self-start rounded-md pl-1.5 pr-2.5 text-[13px] font-semibold text-fg min-[980px]:hidden"
      >
        <ChevronRightIcon
          className={`motion-safe:transition-transform ${
            showMore ? "rotate-90" : ""
          }`}
        />
        {moreLabel}
      </button>

      <div
        className={`flex flex-col gap-4 ${showMore ? "" : "max-[979px]:hidden"}`}
      >
        <div className="flex flex-wrap gap-1.5">
          {repo.skills.map((skill) => (
            <TopicChip key={skill}>{skill}</TopicChip>
          ))}
        </div>

        {repo.builds.length > 0 ? (
          <div className="flex flex-col gap-2 border-t pt-4">
            <h2 className="flex items-center gap-2 text-base font-semibold">
              Builds <CountBadge>{repo.builds.length}</CountBadge>
            </h2>
            <ul className="flex flex-col gap-1">
              {repo.builds.map((build) => (
                <li
                  key={build.slug}
                  className="flex items-center justify-between gap-2"
                >
                  <Link
                    href={buildHref(repo, build)}
                    className="inline-flex min-h-9 items-center text-fg hover:underline"
                  >
                    {build.title}
                  </Link>
                  {build.link ? (
                    <a
                      href={build.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${build.title} live`}
                      className="inline-flex items-center gap-1 text-xs text-success-fg hover:underline"
                    >
                      <CheckCircleIcon size={14} stroke="currentColor" />
                      Live
                    </a>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </aside>
  );
}
