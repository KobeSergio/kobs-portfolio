import type { ReactNode } from "react";

// Skill and topic chips.
export function TopicChip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full bg-topic-bg px-2.5 text-xs font-medium leading-[22px] text-topic-fg">
      {children}
    </span>
  );
}

// Location, status and "+N more" pills.
export function OutlinePill({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`rounded-full border px-[7px] text-xs font-medium leading-[18px] text-fg-muted ${className}`}
    >
      {children}
    </span>
  );
}

// Tab and "Builds N" count badges.
export function CountBadge({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`rounded-full bg-counter px-[7px] text-xs font-medium leading-[18px] text-fg ${className}`}
    >
      {children}
    </span>
  );
}
