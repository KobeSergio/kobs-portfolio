"use client";

import { useState } from "react";
import Link from "next/link";
import { buildHref, hostOf, repoHref, type Repo } from "@/lib/repos";
import CompanyLogo from "@/components/site/CompanyLogo";
import { OutlinePill, TopicChip } from "@/components/site/Chips";
import {
  ArrowRightIcon,
  ChevronRightIcon,
  ExternalIcon,
} from "@/components/site/Icons";
import Bullets from "./Bullets";

const MAX_CHIPS = 10;

export default function RepoListRow({ repo }: { repo: Repo }) {
  const [open, setOpen] = useState(false);
  const href = repoHref(repo);
  const { builds, readme } = repo;
  const buildMode = builds.length > 0;
  const chips = repo.skills.slice(0, MAX_CHIPS);
  const moreChips = repo.skills.length - MAX_CHIPS;
  const toggleLabel = open
    ? buildMode
      ? "Hide builds"
      : "Hide details"
    : buildMode
      ? `Show ${builds.length} builds`
      : "Show details";

  return (
    <li className="flex flex-wrap items-start justify-between gap-x-6 gap-y-4 border-b py-6">
      <div className="flex min-w-0 flex-[999_1_420px] flex-col gap-2">
        <div className="flex flex-wrap items-center gap-2.5">
          <CompanyLogo
            name={repo.name}
            logo={repo.logo}
            icon={repo.logoIcon}
            size={28}
          />
          <Link
            href={href}
            className="py-1 text-xl font-semibold leading-[1.4] text-link [overflow-wrap:anywhere] hover:underline"
          >
            {repo.slug}
          </Link>
          {repo.pills.map((pill) => (
            <OutlinePill key={pill}>{pill}</OutlinePill>
          ))}
        </div>

        {repo.role ? <p className="font-semibold">{repo.role}</p> : null}
        <p className="max-w-[72ch] text-fg-muted">{repo.summary}</p>

        <div className="flex flex-wrap gap-1.5">
          {chips.map((skill) => (
            <TopicChip key={skill}>{skill}</TopicChip>
          ))}
          {moreChips > 0 ? (
            <OutlinePill className="px-[9px] leading-5">
              +{moreChips} more
            </OutlinePill>
          ) : null}
        </div>

        {repo.period ? (
          <p className="mt-1 flex flex-wrap items-center gap-4 text-xs text-fg-muted">
            <span>{repo.period}</span>
            {buildMode ? <span>{builds.length} builds</span> : null}
          </p>
        ) : null}

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          className="-ml-1.5 inline-flex min-h-8 items-center gap-1.5 self-start rounded-md pl-1.5 pr-2.5 text-[13px] font-semibold text-fg"
        >
          <ChevronRightIcon
            className={`motion-safe:transition-transform ${open ? "rotate-90" : ""}`}
          />
          {toggleLabel}
        </button>

        {open && buildMode ? (
          <ul className="overflow-hidden rounded-md border">
            {builds.map((build, index) => (
              <li
                key={build.slug}
                className={`flex items-start justify-between gap-4 px-4 py-3 ${
                  index > 0 ? "border-t" : ""
                }`}
              >
                <div className="flex min-w-0 flex-col gap-0.5">
                  <Link
                    href={buildHref(repo, build)}
                    className="self-start font-semibold text-link hover:underline"
                  >
                    {build.title}
                  </Link>
                  <span className="text-[13px] text-fg-muted">
                    {build.impact}
                  </span>
                </div>
                {build.link ? (
                  <a
                    href={build.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap text-xs text-fg-muted hover:underline"
                  >
                    Live
                    <ExternalIcon size={12} stroke="currentColor" />
                  </a>
                ) : null}
              </li>
            ))}
          </ul>
        ) : null}

        {open && !buildMode && readme ? (
          <div className="flex flex-col gap-2.5 rounded-md border p-4">
            {readme.impact ? (
              <p className="font-semibold">{readme.impact}</p>
            ) : null}
            <Bullets items={readme.bullets} className="gap-1.5 pl-5" />
            {readme.link ? (
              <a
                href={readme.link}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start font-semibold text-link hover:underline"
              >
                View build: {hostOf(readme.link)}
              </a>
            ) : null}
          </div>
        ) : null}
      </div>

      <div className="flex-[1_0_auto]">
        <Link
          href={href}
          className="flex min-h-9 w-full items-center justify-center gap-1.5 whitespace-nowrap rounded-md border bg-btn px-3 text-xs font-semibold text-fg"
        >
          View more
          <ArrowRightIcon size={14} />
        </Link>
      </div>
    </li>
  );
}
