"use client";

import SectionLabel from "../SectionLabel";
import { Contribution, Experience } from "@/constants/site/Experiences";
import { useState } from "react";
import { useReducedMotion } from "framer-motion";
import Image from "next/image";
import {
  ArrowUpRight,
  ChevronDown,
  Globe,
  ChartCandlestick,
} from "lucide-react";

function OpenSeaIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.629 0 12 0ZM5.92 12.403l.051-.081 3.123-4.884a.107.107 0 0 1 .187.014c.52 1.169.972 2.623.76 3.528-.088.372-.335.876-.614 1.342a2.405 2.405 0 0 1-.117.199.106.106 0 0 1-.09.045H6.013a.106.106 0 0 1-.091-.163zm13.914 1.68a.109.109 0 0 1-.065.101c-.243.103-1.07.485-1.414.962-.878 1.222-1.548 2.97-3.048 2.97H9.053a4.019 4.019 0 0 1-4.013-4.028v-.072c0-.058.048-.106.108-.106h3.485c.07 0 .12.063.115.132-.026.226.017.459.125.67.206.42.636.682 1.099.682h1.726v-1.347H9.99a.11.11 0 0 1-.089-.173l.063-.09c.16-.231.391-.586.621-.992.156-.274.308-.566.43-.86.024-.052.043-.107.065-.16.033-.094.067-.182.091-.269a4.57 4.57 0 0 0 .065-.223c.057-.25.081-.514.081-.787 0-.108-.004-.221-.014-.327-.005-.117-.02-.235-.034-.352a3.415 3.415 0 0 0-.048-.312 6.494 6.494 0 0 0-.098-.468l-.014-.06c-.03-.108-.056-.21-.09-.317a11.824 11.824 0 0 0-.328-.972 5.212 5.212 0 0 0-.142-.355c-.072-.178-.146-.339-.213-.49a3.564 3.564 0 0 1-.094-.197 4.658 4.658 0 0 0-.103-.213c-.024-.053-.053-.104-.072-.152l-.211-.388c-.029-.053.019-.118.077-.101l1.32.357h.01l.173.05.192.054.07.019v-.783c0-.379.302-.686.679-.686a.66.66 0 0 1 .477.202.69.69 0 0 1 .2.484V6.65l.141.039c.01.005.022.01.031.017.034.024.084.062.147.11.05.038.103.086.165.137a10.351 10.351 0 0 1 .574.504c.214.199.454.432.684.691.065.074.127.146.192.226.062.079.132.156.19.232.079.104.16.212.235.324.033.053.074.108.105.161.096.142.178.288.257.435.034.067.067.141.096.213.089.197.159.396.202.598a.65.65 0 0 1 .029.132v.01c.014.057.019.12.024.184a2.057 2.057 0 0 1-.106.874c-.031.084-.06.17-.098.254-.075.17-.161.343-.264.502-.034.06-.075.122-.113.182-.043.063-.089.123-.127.18a3.89 3.89 0 0 1-.173.221c-.053.072-.106.144-.166.209-.081.098-.16.19-.245.278-.048.058-.1.118-.156.17-.052.06-.108.113-.156.161-.084.084-.15.147-.208.202l-.137.122a.102.102 0 0 1-.072.03h-1.051v1.346h1.322c.295 0 .576-.104.804-.298.077-.067.415-.36.816-.802a.094.094 0 0 1 .05-.03l3.65-1.057a.108.108 0 0 1 .138.103z" />
    </svg>
  );
}

// Roles show their strongest contributions up front; the rest sit one click away.
const VISIBLE_CONTRIBUTIONS = 2;

const LINK_ICONS: Record<string, React.ElementType> = {
  globe: Globe,
  opensea: OpenSeaIcon,
  chart: ChartCandlestick,
};

export default function Experiences({
  experiences,
}: {
  experiences: Experience[];
}) {
  const [mediaIndexByStep, setMediaIndexByStep] = useState<Record<string, number>>({});
  const prefersReducedMotion = useReducedMotion();

  const renderContribution = (
    experience: Experience,
    index: number,
    contribution: Contribution,
    contributionIndex: number
  ) => {
        const stepKey = `${index}-${contributionIndex}`;
        const mediaItems = contribution?.images ?? [];
        const currentMediaIndex = mediaIndexByStep[stepKey] ?? 0;
        const media = mediaItems[currentMediaIndex];
        const isVideo =
          typeof media === "string" &&
          (media.endsWith(".webm") || media.endsWith(".mp4"));
        const hasCarousel = mediaItems.length > 1;

        const goTo = (dir: "prev" | "next") => {
          if (!hasCarousel) return;
          const total = mediaItems.length;
          setMediaIndexByStep((prev) => {
            const current = prev[stepKey] ?? 0;
            const nextIndex =
              dir === "next"
                ? (current + 1) % total
                : (current - 1 + total) % total;
            return { ...prev, [stepKey]: nextIndex };
          });
        };

        return (
          <div
            key={contributionIndex}
            className={`grid gap-x-8 gap-y-4 items-start ${mediaItems.length > 0 ? "md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]" : ""} pb-6 ${
              contributionIndex > 0
                ? "border-t border-slate-800/50 pt-6"
                : "pt-1"
            }`}
          >
            {/* Left: product, its outcome, stack, details on demand */}
            <div className="space-y-3">
              <div className="space-y-1.5">
                <h4 className="text-lg font-semibold leading-snug text-slate-50">
                  {contribution?.product ?? experience.role}
                </h4>
                {contribution?.impact ? (
                  <p className="text-sm font-semibold leading-relaxed tabular-nums text-emerald-300 text-pretty">
                    {contribution.impact}
                  </p>
                ) : null}
              </div>

              {contribution?.tech?.length ? (
                <p className="text-xs leading-5 text-slate-400">
                  <span className="sr-only">Stack: </span>
                  {contribution.tech.join(" · ")}
                </p>
              ) : null}

              {contribution?.description ? (
                <details className="group/details">
                  <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 rounded-md text-xs font-semibold text-amber-300 transition-colors hover:text-amber-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300 [&::-webkit-details-marker]:hidden">
                    How I built it
                    <ChevronDown
                      aria-hidden="true"
                      className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-open/details:rotate-180"
                    />
                  </summary>
                  <div className="pt-3 text-sm leading-relaxed text-slate-400">
                    {contribution.description}
                  </div>
                </details>
              ) : null}

              {contribution?.link ? (
                <a
                  href={contribution.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 hover:text-amber-200 transition-colors group/link"
                >
                  View build
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              ) : null}
            </div>

            {/* Right: media (only when images exist) */}
            {mediaItems.length > 0 && (
            <div className="relative overflow-hidden rounded-xl border border-slate-800/80 bg-slate-950 group/media">
              {isVideo ? (
                <video
                  src={media}
                  poster={contribution?.poster}
                  className="aspect-video w-full object-cover"
                  autoPlay={!prefersReducedMotion}
                  muted
                  loop
                  playsInline
                  controls
                />
              ) : (
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={media}
                    alt={contribution?.product ?? experience.role}
                    fill
                    className="object-cover transition-transform duration-500 group-hover/media:scale-[1.04]"
                    sizes="(min-width: 1024px) 420px, 100vw"
                    priority
                  />
                </div>
              )}

              {hasCarousel && (
                <>
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-3">
                    <button
                      type="button"
                      onClick={() => goTo("prev")}
                      className="pointer-events-auto rounded-full bg-black/40 p-2 text-slate-100 backdrop-blur transition hover:bg-black/60 cursor-pointer"
                      aria-label="Previous media"
                    >‹</button>
                    <button
                      type="button"
                      onClick={() => goTo("next")}
                      className="pointer-events-auto rounded-full bg-black/40 p-2 text-slate-100 backdrop-blur transition hover:bg-black/60 cursor-pointer"
                      aria-label="Next media"
                    >›</button>
                  </div>
                  <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                    {mediaItems.map((_, dotIndex) => (
                      <span
                        key={`${contributionIndex}-dot-${dotIndex}`}
                        className={`h-1.5 w-1.5 rounded-full transition ${
                          dotIndex === currentMediaIndex
                            ? "bg-white"
                            : "bg-white/30"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            )}
          </div>
        );
  };

  return (
    <section
      id="experience"
      className="scroll-mt-24 space-y-10 w-full max-w-6xl mx-auto px-4 md:px-8"
    >
      <SectionLabel label="Experience" />

      {experiences.map((experience, index) => {
        const initial = experience.company[0];
        const hidden = experience.contributions.slice(VISIBLE_CONTRIBUTIONS);

        if (experience.compact) {
          const [contribution] = experience.contributions;
          return (
            <div
              key={index}
              className="grid gap-x-6 gap-y-3 md:grid-cols-[210px_minmax(0,1fr)] md:items-center bg-slate-900/25 rounded-2xl p-5 md:px-6 border border-slate-800/40"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-400/10 border border-amber-400/25 flex items-center justify-center text-amber-300 font-bold text-sm select-none flex-shrink-0">
                  {initial}
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-[0.1em] whitespace-nowrap text-slate-400 leading-none mb-1">
                    {experience.time}
                  </p>
                  <h3 className="text-lg font-bold text-amber-300 leading-tight">
                    {experience.company}
                  </h3>
                </div>
              </div>

              <p className="text-sm leading-6 text-slate-300">
                <span className="font-semibold text-slate-50">{experience.role}</span>
                <span className="text-slate-500" aria-hidden="true"> · </span>
                {experience.summary}
              </p>

              {contribution?.description ? (
                <details className="group/details md:col-start-2">
                  <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 rounded-md text-xs font-semibold text-amber-300 transition-colors hover:text-amber-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300 [&::-webkit-details-marker]:hidden">
                    How I built it
                    <ChevronDown
                      aria-hidden="true"
                      className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-open/details:rotate-180"
                    />
                  </summary>
                  <div className="space-y-2 pt-3">
                    {contribution.impact ? (
                      <p className="text-sm font-semibold text-emerald-300">
                        {contribution.impact}
                      </p>
                    ) : null}
                    <div className="text-sm leading-relaxed text-slate-400">
                      {contribution.description}
                    </div>
                    {contribution.tech?.length ? (
                      <p className="text-xs leading-5 text-slate-400">
                        <span className="sr-only">Stack: </span>
                        {contribution.tech.join(" · ")}
                      </p>
                    ) : null}
                  </div>
                </details>
              ) : null}
            </div>
          );
        }

        return (
          <div
            key={index}
            className="flex flex-col gap-6 md:flex-row md:gap-10 bg-slate-900/25 rounded-2xl p-5 md:p-6 border border-slate-800/40"
          >

            {/* Sticky role column */}
            <div className="w-full h-fit md:sticky md:top-6 md:flex-[0_0_210px]">
              <div className="space-y-3">
                {/* Company badge */}
                <div className="flex items-center gap-3">
                  {experience.companyLogo ? (
                    <Image
                      src={experience.companyLogo}
                      alt={`${experience.company} logo`}
                      width={36}
                      height={36}
                      className="w-9 h-9 rounded-full object-cover border border-amber-400/25 flex-shrink-0"
                    />
                  ) : (
                    <div className="w-9 h-9 rounded-xl bg-amber-400/10 border border-amber-400/25 flex items-center justify-center text-amber-300 font-bold text-sm select-none flex-shrink-0">
                      {initial}
                    </div>
                  )}
                  <div>
                    <p className="text-xs font-mono uppercase tracking-[0.1em] whitespace-nowrap text-slate-400 leading-none mb-1">
                      {experience.time}
                    </p>
                    <h3 className="text-lg font-bold text-amber-300 leading-tight">
                      {experience.company}
                    </h3>
                  </div>
                </div>

                <div>
                  <p className="text-base font-semibold leading-snug text-slate-50">{experience.role}</p>
                  <p className="text-xs text-slate-400 mt-1">{experience.location}</p>
                </div>

                <p className="text-sm leading-6 text-slate-300">{experience.summary}</p>

                {experience.links?.length ? (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {experience.links.map((link) => {
                      const LinkIcon = link.icon ? LINK_ICONS[link.icon] : null;
                      return (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={link.label}
                          title={link.label}
                          className={
                            LinkIcon
                              ? "flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/60 text-slate-300 transition-colors hover:border-amber-400/40 hover:text-amber-300"
                              : "inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 hover:text-amber-200 transition-colors group/link"
                          }
                        >
                          {LinkIcon ? (
                            <LinkIcon className="h-4 w-4" />
                          ) : (
                            <>
                              {link.label}
                              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                            </>
                          )}
                        </a>
                      );
                    })}
                  </div>
                ) : null}

                {experience.onchain?.length ? (
                  <div className="space-y-1.5 border-t border-slate-800/50 pt-3">
                    <p className="text-xs font-mono uppercase tracking-[0.14em] text-slate-400 leading-none">
                      On-chain
                    </p>
                    <ul className="space-y-1">
                      {experience.onchain.map((contract) => (
                        <li key={contract.address}>
                          <a
                            href={contract.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={`${contract.address} on Robinscan`}
                            className="group/addr flex items-center justify-between gap-2 text-xs font-mono text-slate-300 transition-colors hover:text-amber-300"
                          >
                            <span className="truncate">{contract.label}</span>
                            <span className="flex flex-shrink-0 items-center gap-1 underline decoration-slate-700 underline-offset-2 group-hover/addr:decoration-amber-400/60">
                              {contract.address.slice(0, 6)}…{contract.address.slice(-4)}
                              <ArrowUpRight className="h-3 w-3" />
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>

            {/* Contribution feed */}
            <div className="w-full md:flex-1 flex flex-col">
              {experience.contributions
                .slice(0, VISIBLE_CONTRIBUTIONS)
                .map((contribution, contributionIndex) =>
                  renderContribution(experience, index, contribution, contributionIndex)
                )}

              {hidden.length ? (
                <details className="group/more border-t border-slate-800/50">
                  <summary className="flex cursor-pointer list-none items-center gap-1.5 rounded-md py-4 text-sm font-semibold text-amber-300 transition-colors hover:text-amber-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300 [&::-webkit-details-marker]:hidden">
                    <span className="group-open/more:hidden">
                      {hidden.length} more at {experience.company}
                    </span>
                    <span className="hidden group-open/more:inline">Show fewer</span>
                    <ChevronDown
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform duration-200 ease-out group-open/more:rotate-180"
                    />
                  </summary>
                  {hidden.map((contribution, hiddenIndex) =>
                    renderContribution(
                      experience,
                      index,
                      contribution,
                      VISIBLE_CONTRIBUTIONS + hiddenIndex
                    )
                  )}
                </details>
              ) : null}
            </div>
          </div>
        );
      })}
    </section>
  );
}
