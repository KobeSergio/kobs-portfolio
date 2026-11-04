import type { SVGProps } from "react";

// 16px stroke icons from the design reference. Color comes from `stroke`
// (defaults to the muted text color) so each use can override it.
function Icon({
  children,
  size = 16,
  stroke = "#9198a1",
  ...props
}: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

export function FileIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 1.5h5.5l3 3V14a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V2a.5.5 0 0 1 .5-.5zM9.5 1.5v3h3" />
    </Icon>
  );
}

export function FolderIcon(props: IconProps) {
  return (
    <svg
      width={props.size ?? 16}
      height={props.size ?? 16}
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={props.className}
    >
      <path
        d="M1.75 2.5h4.1l1.5 1.5h6.9c.41 0 .75.34.75.75v8.5c0 .41-.34.75-.75.75H1.75A.75.75 0 0 1 1 13.25V3.25c0-.41.34-.75.75-.75z"
        fill="#9198a1"
      />
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <Icon strokeWidth="1.75" {...props}>
      <path d="M6 4l4 4-4 4" />
    </Icon>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <Icon strokeWidth="1.75" {...props}>
      <path d="M4 6l4 4 4-4" />
    </Icon>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <Icon strokeWidth="1.75" {...props}>
      <path d="M3 8h10M9 4l4 4-4 4" />
    </Icon>
  );
}

export function ArrowLeftIcon(props: IconProps) {
  return (
    <Icon strokeWidth="1.75" {...props}>
      <path d="M13 8H3M7 4 3 8l4 4" />
    </Icon>
  );
}

export function ExternalIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M9.5 2.5h4v4M13.5 2.5 8 8M11.5 9.5v3a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h3" />
    </Icon>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <Icon strokeWidth="1.75" {...props}>
      <path d="M5 11 11 5M5.5 5H11v5.5" />
    </Icon>
  );
}

export function LinkIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6.5 9.5l3-3M7 4.5l1-1a2.5 2.5 0 0 1 3.5 3.5l-1 1M9 11.5l-1 1A2.5 2.5 0 0 1 4.5 9l1-1" />
    </Icon>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <Icon strokeWidth="1.75" {...props}>
      <path d="M3.5 8.5l3 3 6-7" />
    </Icon>
  );
}

export function CheckCircleIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="8" cy="8" r="6" />
      <path d="M5.5 8l1.8 1.8L10.5 6.3" />
    </Icon>
  );
}

export function BriefcaseIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="2" y="5" width="12" height="8.5" rx="1.5" />
      <path d="M6 5V3.5h4V5M2 8.5h12" />
    </Icon>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="2" y="3" width="12" height="11" rx="1.5" />
      <path d="M2 6.5h12M5.5 1.5v3M10.5 1.5v3" />
    </Icon>
  );
}

export function SidebarIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="2" y="2.5" width="12" height="11" rx="1.5" />
      <path d="M6 2.5v11" />
    </Icon>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <Icon strokeWidth="1.75" {...props}>
      <path d="M3 8h10M8 3v10" />
    </Icon>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <Icon strokeWidth="1.75" {...props}>
      <path d="M4 4l8 8M12 4l-8 8" />
    </Icon>
  );
}

export function HexIcon(props: IconProps) {
  return (
    <Icon strokeLinecap="butt" {...props}>
      <path d="M8 1.8l5.5 3.1v6.2L8 14.2 2.5 11.1V4.9z" />
    </Icon>
  );
}
