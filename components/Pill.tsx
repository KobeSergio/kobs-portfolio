import type { ReactNode } from "react";

type PillProps = {
  children: ReactNode;
  size?: "sm" | "xs";
};

export default function Pill({ children, size = "sm" }: PillProps) {
  const sizing = size === "xs" ? "px-2 py-1 text-xs" : "px-3 py-1 text-sm";

  return (
    <span
      className={`rounded-full border border-white/10 bg-white/5 ${sizing} text-slate-100`}
    >
      {children}
    </span>
  );
}

