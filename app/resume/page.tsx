import type { Metadata } from "next";
import Image from "next/image";
import { profile } from "@/constants/site/site";
import { resumeFaq, resumeIpfsUrl, resumePage } from "@/constants/site/resume";
import { ArrowUpRightIcon, FileIcon, HexIcon } from "@/components/site/Icons";
import ResumeMint from "@/components/resume/ResumeMint";
import Faq from "@/components/resume/Faq";

export const metadata: Metadata = {
  title: "Resume",
};

// A full-bleed mint page with no sidebar, set in Mona Sans.
export default function ResumePage() {
  return (
    <main className="relative min-h-dvh overflow-hidden bg-bg-inset font-mona">
      {/* Background: the art blurred, a dot grid, then a fade to solid. */}
      <Image
        src={resumePage.art}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="scale-125 object-cover opacity-35 blur-[90px] saturate-[1.4]"
      />
      <div
        aria-hidden="true"
        className="resume-dots absolute inset-0"
      />
      <div
        aria-hidden="true"
        className="resume-fade absolute inset-0"
      />

      <section
        aria-labelledby="mint-title"
        className="relative mx-auto flex max-w-[1440px] flex-wrap items-center gap-[clamp(32px,6vw,64px)] px-[clamp(16px,4vw,32px)] pb-16 pt-[clamp(32px,7vw,72px)]"
      >
        <div className="flex min-w-0 flex-[1_1_380px] justify-center">
          <div className="relative w-full max-w-[520px]">
            <Image
              src={resumePage.art}
              alt={resumePage.artAlt}
              width={520}
              height={520}
              priority
              sizes="(min-width: 640px) 520px, 100vw"
              className="resume-art block aspect-square w-full rounded-[20px] object-cover"
            />
            <span className="absolute left-3.5 top-3.5 inline-flex items-center gap-2 rounded-full border border-fg/14 bg-bg-inset/72 px-3 py-1.5 font-jetbrains text-xs font-medium">
              <HexIcon size={14} stroke="currentColor" className="text-link" />
              {resumePage.chip}
            </span>
          </div>
        </div>

        <div className="flex min-w-0 flex-[1_1_400px] flex-col gap-5">
          <div className="flex flex-col gap-3.5">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="font-jetbrains text-[13px] text-fg-muted">
                {profile.handle} / <span className="text-fg">{resumePage.file}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-fg/16 bg-bg-inset/50 px-2.5 text-xs font-semibold leading-[22px] text-fg-soft">
                <span className="size-1.5 rounded-full bg-success-fg" />
                {resumePage.pill}
              </span>
            </div>
            <h1
              id="mint-title"
              className="text-balance text-[clamp(36px,9vw,60px)] font-extrabold leading-[0.98] tracking-[-0.035em] [font-stretch:112.5%]"
            >
              {resumePage.title}
            </h1>
            <p className="max-w-[36ch] text-pretty text-[clamp(16px,4vw,19px)] leading-[1.55] text-fg-soft">
              {resumePage.lede}
            </p>
          </div>

          <div className="flex flex-col gap-3 rounded-[14px] border border-fg/16 bg-bg-inset/60 p-5">
            <div className="flex items-center gap-2.5">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-fg/8">
                <FileIcon stroke="currentColor" className="text-fg" />
              </span>
              <h2 className="text-lg font-bold">{resumePage.readCard.title}</h2>
            </div>
            <p className="text-[15px] text-fg-muted">{resumePage.readCard.body}</p>
            <a
              href={resumeIpfsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[52px] items-center justify-center gap-2 rounded-[10px] bg-fg px-6 text-base font-bold text-bg"
            >
              {resumePage.readCard.cta}
              <ArrowUpRightIcon size={14} stroke="currentColor" />
            </a>
          </div>

          <ResumeMint />
        </div>
      </section>

      <section
        aria-labelledby="faq-title"
        className="relative mx-auto flex max-w-[840px] flex-col gap-5 px-[clamp(16px,4vw,32px)] pb-24"
      >
        <div className="flex flex-col gap-1.5">
          <h2
            id="faq-title"
            className="text-[clamp(24px,6vw,32px)] font-extrabold leading-[1.1] tracking-[-0.02em] [font-stretch:112.5%]"
          >
            {resumePage.faqTitle}
          </h2>
          <p className="text-base text-fg-muted">{resumePage.faqLede}</p>
        </div>
        <Faq items={resumeFaq} />
      </section>
    </main>
  );
}
