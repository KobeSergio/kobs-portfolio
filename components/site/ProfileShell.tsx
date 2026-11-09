import type { ReactNode } from "react";

// The two-column profile frame: a 296px sidebar from lg, stacked below it.
// Fluid up to the shell width (1600px), so wide monitors get content, not gutters.
export default function ProfileShell({
  sidebar,
  children,
}: {
  sidebar: ReactNode;
  children?: ReactNode;
}) {
  return (
    <main className="mx-auto flex w-full max-w-shell flex-col gap-6 px-[clamp(16px,4vw,32px)] py-8 lg:grid lg:grid-cols-[296px_minmax(0,1fr)] lg:items-start">
      <aside className="flex min-w-0 flex-col gap-4">{sidebar}</aside>
      <section className="flex min-w-0 flex-col gap-6">{children}</section>
    </main>
  );
}
