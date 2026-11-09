"use client";

import { useMemo } from "react";
import { ArrowUpRightIcon, CloseIcon } from "@/components/site/Icons";

export type MintMetadata = {
  name?: string;
  description?: string;
  image?: string;
  external_url?: string;
};

type SuccessMintModalProps = {
  open: boolean;
  onClose: () => void;
  metadata?: MintMetadata | null;
  isLoadingMetadata?: boolean;
  fallbackImageUrl?: string;
  fallbackResumeUrl?: string;
  explorerUrl?: string;
  tokenId?: string | number;
};

export default function SuccessMintModal({
  open,
  onClose,
  metadata,
  isLoadingMetadata,
  fallbackImageUrl,
  fallbackResumeUrl,
  explorerUrl,
  tokenId,
}: SuccessMintModalProps) {
  const imageUrl = metadata?.image ?? fallbackImageUrl;
  const resumeUrl = metadata?.external_url ?? fallbackResumeUrl;
  const title = metadata?.name ?? "Kobs NFT 2025";
  const description =
    metadata?.description ??
    "A portfolio NFT by Kobs. This token represents my work as a full-stack engineer and product builder. The complete copy of my resume and professional background is embedded within this NFT as a verifiable on-chain portfolio reference.";

  const tokenLabel = useMemo(() => {
    if (!tokenId) return null;
    return `#${tokenId}`;
  }, [tokenId]);

  // explorerUrl already ends in "/", so join without adding another.
  const nftUrl = useMemo(() => {
    if (!explorerUrl) return undefined;
    const base = explorerUrl.replace(/\/+$/, "");
    return tokenId !== undefined && tokenId !== null && tokenId !== ""
      ? `${base}/${tokenId}`
      : base;
  }, [explorerUrl, tokenId]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mint successful"
      className="fixed inset-0 z-9998 flex overflow-y-auto bg-[var(--overlay)] p-[clamp(12px,4vw,24px)]"
    >
      <div className="m-auto w-full max-w-[420px]">
        <div className="relative flex flex-col gap-4 rounded-xl border bg-surface p-5 font-mona shadow-[var(--shadow-modal)]">
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-md text-fg-muted"
          >
            <CloseIcon stroke="currentColor" />
          </button>

          <div className="flex min-h-6 items-center gap-2 pr-10">
            <span className="size-2 rounded-full bg-accent" />
            <span className="font-jetbrains text-xs font-semibold uppercase tracking-[0.08em] text-link">
              Mint successful
            </span>
            {tokenLabel ? (
              <span className="rounded-full bg-counter px-2 font-jetbrains text-xs leading-5">
                {tokenLabel}
              </span>
            ) : null}
          </div>

          <div className="relative aspect-square w-full overflow-hidden rounded-lg border bg-bg-inset">
            {imageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={imageUrl}
                alt={`${title} artwork`}
                className="size-full object-cover"
              />
            ) : (
              <div className="flex size-full items-center justify-center text-xs text-fg-muted">
                Preview
              </div>
            )}
            {isLoadingMetadata ? (
              <div className="absolute inset-0 flex items-center justify-center bg-bg-inset/60 text-xs text-fg">
                Loading...
              </div>
            ) : null}
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-[22px] font-bold leading-[1.2] tracking-[-0.01em] [font-stretch:112.5%]">
              {title}
              {tokenLabel ? ` ${tokenLabel}` : ""}
            </h2>
            <p className="text-pretty leading-[1.6] text-fg-muted">{description}</p>
          </div>

          <div className="flex flex-col gap-2">
            {nftUrl ? (
              <a
                href={nftUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center justify-center gap-2 rounded-lg border bg-btn font-semibold text-fg"
              >
                View NFT
                <ArrowUpRightIcon size={14} stroke="currentColor" strokeWidth="1.5" />
              </a>
            ) : null}
            {resumeUrl ? (
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center justify-center gap-2 rounded-lg bg-accent font-bold text-accent-fg"
              >
                View resume
                <ArrowUpRightIcon size={14} stroke="currentColor" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
