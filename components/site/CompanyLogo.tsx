import Image from "next/image";
import { SiSolana } from "react-icons/si";

const SIZES = {
  20: { tile: "size-5 rounded", icon: 11, letter: "text-[11px]" },
  28: { tile: "size-7 rounded-md", icon: 14, letter: "text-[13px]" },
  32: { tile: "size-8 rounded-md", icon: 16, letter: "text-sm" },
} as const;

// A company logo on a surface tile. Falls back to a brand icon, then to the
// first letter in a dashed tile (projects have no logos).
export default function CompanyLogo({
  name,
  logo,
  icon,
  size,
}: {
  name: string;
  logo?: string;
  icon?: "solana";
  size: keyof typeof SIZES;
}) {
  const { tile, icon: iconSize, letter } = SIZES[size];

  if (icon === "solana") {
    return (
      <span
        aria-hidden="true"
        className={`flex shrink-0 items-center justify-center border bg-surface text-fg ${tile}`}
      >
        <SiSolana size={iconSize} />
      </span>
    );
  }

  if (logo) {
    return (
      <Image
        src={logo}
        alt=""
        width={size}
        height={size}
        unoptimized
        className={`shrink-0 border bg-surface object-contain ${tile}`}
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      className={`flex shrink-0 items-center justify-center border border-dashed bg-surface font-semibold text-fg-muted ${tile} ${letter}`}
    >
      {name.charAt(0)}
    </span>
  );
}
