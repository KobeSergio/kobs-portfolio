import type { ReactNode } from "react";

type PillProps = {
  children: ReactNode;
  size?: "sm" | "xs";
  color?: "white" | "emerald" | "amber";
  icon?: ReactNode;
};

export default function Pill({
  children,
  size = "sm",
  color = "white",
}: PillProps) {
  const sizing = size === "xs" ? "px-2 py-1 text-xs" : "px-3 py-1 text-sm";
  const colorClasses: Record<NonNullable<PillProps["color"]>, string> = {
    white: "border-white/10 bg-white/5 text-slate-100",
    emerald:
      "border-emerald-300/40 bg-emerald-300/15 text-emerald-50 shadow-sm shadow-emerald-300/20",
    amber:
      "border-amber-300/40 bg-amber-300/15 text-amber-50 shadow-sm shadow-amber-300/20",
  };

  return (
    <span className={`rounded-full ${colorClasses[color]} ${sizing}`}>
      <span className="inline-flex items-center gap-2">{children}</span>
    </span>
  );
}
