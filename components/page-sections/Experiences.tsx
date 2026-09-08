"use client";

import SectionLabel from "../SectionLabel";
import { Experience } from "@/constants/site/Experiences";
import { useState } from "react";
import Image from "next/image";
import {
  TrendingUp,
  ArrowUpRight,
  Wand2,
  ShoppingBag,
  ArrowLeftRight,
  Lock,
  BookOpen,
  Terminal,
  Layers,
  ShieldCheck,
  Gauge,
  FlaskConical,
  Coins,
  HandCoins,
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

const LINK_ICONS: Record<string, React.ElementType> = {
  globe: Globe,
  opensea: OpenSeaIcon,
  chart: ChartCandlestick,
};

const PRODUCT_ICONS: Record<string, React.ElementType> = {
  creator: Wand2,
  mint: Wand2,
  marketplace: ShoppingBag,
  bridge: ArrowLeftRight,
  staking: Lock,
  docs: BookOpen,
  devops: Terminal,
  internship: Terminal,
  sanction: ShieldCheck,
  directory: ShieldCheck,
  rate: Gauge,
  test: FlaskConical,
  stablecoin: Coins,
  rwa: Coins,
  paycheck: HandCoins,
  token: Coins,
};

function getProductIcon(product: string): React.ElementType {
  const lower = product.toLowerCase();
  for (const [key, Icon] of Object.entries(PRODUCT_ICONS)) {
    if (lower.includes(key)) return Icon;
  }
  return Layers;
}


export default function Experiences({
  experiences,
}: {
  experiences: Experience[];
}) {
  const [mediaIndexByStep, setMediaIndexByStep] = useState<Record<string, number>>({});

  return (
    <section
      id="experience"
      className="scroll-mt-24 space-y-10 w-full max-w-6xl mx-auto px-4 md:px-8"
    >
      <SectionLabel label="Experience" />

      {experiences.map((experience, index) => {
        const initial = experience.company[0];

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
                    <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-slate-500 leading-none mb-0.5">
                      {experience.time}
                    </p>
                    <h3 className="text-lg font-bold text-amber-300 leading-tight">
                      {experience.company}
                    </h3>
                  </div>
                </div>

                <div>
                  <p className="text-[11px] text-slate-500">{experience.location}</p>
                  <p className="text-sm font-semibold text-slate-200 mt-0.5">{experience.role}</p>
                </div>

                <p className="text-xs leading-5 text-slate-500">{experience.summary}</p>

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
                    <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-slate-600 leading-none">
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
                            className="group/addr flex items-center justify-between gap-2 text-[11px] font-mono text-slate-400 transition-colors hover:text-amber-300"
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
              {experience.contributions?.map((contribution, contributionIndex) => {
                const stepKey = `${index}-${contributionIndex}`;
                const mediaItems = contribution?.images ?? [];
                const currentMediaIndex = mediaIndexByStep[stepKey] ?? 0;
                const media = mediaItems[currentMediaIndex];
                const isVideo =
                  typeof media === "string" &&
                  (media.endsWith(".webm") || media.endsWith(".mp4"));
                const hasCarousel = mediaItems.length > 1;
                const ProductIcon = getProductIcon(contribution?.product ?? "");

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
                    {/* Left: text content */}
                    <div className="space-y-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <ProductIcon className="h-4 w-4 text-amber-400/60 flex-shrink-0" />
                          <h4 className="text-base font-semibold text-slate-50">
                            {contribution?.product ?? experience.role}
                          </h4>
                        </div>

                        {contribution?.impact ? (
                          <p className="mt-1.5 flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                            <TrendingUp className="h-3 w-3 flex-shrink-0" />
                            {contribution.impact}
                          </p>
                        ) : null}
                      </div>

                      <div className="text-sm leading-relaxed text-slate-400">
                        {contribution?.description ??
                          "Shipping roadmaps end to end and keeping teams unblocked."}
                      </div>

                      {contribution?.tech?.length ? (
                        <div className="flex flex-wrap gap-1.5">
                          {contribution.tech.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-md border border-slate-800 bg-slate-900/60 px-2 py-0.5 text-xs text-slate-400"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
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
                          autoPlay
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
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
}
