import { cn } from "@/lib/utils";

// Splits "**bold**" markers into <strong> runs.
export function renderBold(text: string) {
  return text.split("**").map((part, index) =>
    index % 2 === 1 ? (
      <strong key={index} className="font-semibold">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

export default function Bullets({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul className={cn("flex list-disc flex-col gap-2 pl-6", className)}>
      {items.map((item, index) => (
        <li key={index}>{renderBold(item)}</li>
      ))}
    </ul>
  );
}
