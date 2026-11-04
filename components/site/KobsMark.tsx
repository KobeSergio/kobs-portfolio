// The "k." mark from public/assets/logos/kobs-mark.svg, inlined so it takes
// the current text color (white in the header, muted in the footer).
export default function KobsMark({
  size = 32,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
      className={className}
    >
      <rect x="3" y="3" width="26" height="26" rx="7" strokeWidth="2" />
      <path
        d="M10.5 8v16M18.5 12.5 10.5 19M14 16.2l4.8 7.8"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="21"
        y="21.6"
        width="4.5"
        height="2.4"
        rx="0.6"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}
