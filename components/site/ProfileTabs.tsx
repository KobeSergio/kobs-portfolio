"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CountBadge } from "./Chips";

type Tab = {
  href: string;
  label: string;
  count?: number;
  icon: React.ReactNode;
};

export default function ProfileTabs({
  counts,
}: {
  counts: { experience: number; projects: number };
}) {
  const pathname = usePathname();

  const tabs: Tab[] = [
    {
      href: "/",
      label: "Overview",
      icon: (
        <path d="M2 3.5h4a2 2 0 0 1 2 2V13a1.5 1.5 0 0 0-1.5-1.5H2zM14 3.5h-4a2 2 0 0 0-2 2V13a1.5 1.5 0 0 1 1.5-1.5H14z" />
      ),
    },
    {
      href: "/experience",
      label: "Experience",
      count: counts.experience,
      icon: (
        <>
          <rect x="2" y="5" width="12" height="8.5" rx="1.5" />
          <path d="M6 5V3.5h4V5M2 8.5h12" />
        </>
      ),
    },
    {
      href: "/projects",
      label: "Projects",
      count: counts.projects,
      icon: (
        <path d="M3.5 13V3a1 1 0 0 1 1-1h8v10h-8a1 1 0 0 0-1 1 1 1 0 0 0 1 1h8" />
      ),
    },
    {
      href: "/resume",
      label: "Resume",
      icon: <path d="M8 1.8l5.5 3.1v6.2L8 14.2 2.5 11.1V4.9z" />,
    },
  ];

  return (
    <nav
      aria-label="Profile sections"
      className="mt-3 flex gap-1 overflow-x-auto no-scrollbar"
    >
      {tabs.map((tab) => {
        // The file views count as their list's tab.
        const active =
          tab.href === "/"
            ? pathname === "/"
            : pathname === tab.href || pathname.startsWith(`${tab.href}/`);
        return (
          <Link
            key={tab.href}
            href={tab.href}
            aria-current={active ? "page" : undefined}
            className={`flex items-center whitespace-nowrap border-b-2 px-[clamp(4px,1.6vw,8px)] pb-3 pt-2.5 text-fg ${
              active ? "border-ring font-semibold" : "border-transparent"
            }`}
          >
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
              className="mr-2 hidden shrink-0 text-fg-muted min-[480px]:block"
            >
              {tab.icon}
            </svg>
            {tab.label}
            {tab.count !== undefined ? (
              <CountBadge className="ml-1.5">{tab.count}</CountBadge>
            ) : null}
          </Link>
        );
      })}
    </nav>
  );
}
