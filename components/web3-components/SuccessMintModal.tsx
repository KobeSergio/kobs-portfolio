"use client";

import { useMemo } from "react";

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

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-9998 flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-2xl border border-white/12 bg-neutral-900/90 p-5 shadow-2xl shadow-black/60 backdrop-blur">
        <button
          type="button"
          aria-label="Close modal"
          onClick={onClose}
          className="absolute right-3 top-3 rounded-md p-2 text-slate-200 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          <svg
            aria-hidden
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-current"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-xs uppercase font-bold text-amber-200">
            <span className="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_10px_rgba(252,211,77,0.8)]" />
            Mint successful
            {tokenLabel && (
              <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs font-semibold text-slate-200">
                {tokenLabel}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-white/10 bg-white/5">
              {imageUrl ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imageUrl}
                    alt={title}
                    className="h-full w-full object-cover"
                  />
                </>
              ) : (
                <div className="flex h-full w-full items-center justify-center text-slate-300 text-xs">
                  Preview
                </div>
              )}
              {isLoadingMetadata && (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-900/60 text-xs text-slate-200">
                  Loading...
                </div>
              )}
              ``
            </div>
            <div className="space-y-3">
              <p className="text-xl font-semibold text-slate-50">
                {title} # {tokenId}
              </p>
              <p className="text-sm text-slate-200/80 leading-6">
                {description}
              </p>
              <div className="flex flex-col gap-2">
                {explorerUrl && (
                  <a
                    href={explorerUrl + "/" + tokenId}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-4 py-2.5 text-sm font-semibold text-slate-50 shadow-md shadow-black/40 transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-slate-900"
                  >
                    View NFT
                    <svg
                      aria-hidden
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-slate-50"
                    >
                      <path d="M7 17 17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </a>
                )}
                {resumeUrl && (
                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-400 px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-md shadow-amber-500/30 transition hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-slate-900"
                  >
                    View resume
                    <svg
                      aria-hidden
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-slate-900"
                    >
                      <path d="M7 17 17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
