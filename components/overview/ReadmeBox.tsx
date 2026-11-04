import { bioParagraphs, profile, skills } from "@/constants/site/site";
import { FileIcon } from "@/components/site/Icons";
import AsciiBanner from "./AsciiBanner";

export default function ReadmeBox() {
  return (
    <article className="flex flex-col gap-4 rounded-md border p-[clamp(16px,4vw,24px)]">
      <p className="flex items-center gap-1.5 font-mono text-xs text-fg-muted">
        <FileIcon stroke="currentColor" />
        {profile.handle} / README.md
      </p>
      <h2 className="sr-only">Hi, I&apos;m Kobs</h2>
      <AsciiBanner />

      <div className="flex max-w-[72ch] flex-col gap-3 text-base leading-[1.6] text-pretty">
        {bioParagraphs.map((paragraph, index) => (
          <p
            key={index}
            className={
              index === bioParagraphs.length - 1 ? "text-fg-muted" : undefined
            }
          >
            {paragraph}
          </p>
        ))}
      </div>

      <div>
        <h3 className="mb-2.5 text-sm font-semibold">Tech stack</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill.label}
              className="inline-flex items-center gap-1.5 rounded-full border bg-surface py-[3px] pl-2.5 pr-3 text-[13px] font-medium [&>svg]:size-4"
            >
              {skill.icon}
              {skill.label}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
