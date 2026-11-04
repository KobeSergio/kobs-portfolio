"use client";

import { useReadContract } from "wagmi";
import {
  resumeAbi,
  resumeAddress,
} from "@/constants/smart-contract/resumeContract";
import { MAX_SUPPLY, resumeContract, resumePage } from "@/constants/site/resume";
import CustomConnectAndMintButton from "@/components/web3-components/CustomConnectAndMintButton";
import { ExternalIcon, HexIcon } from "@/components/site/Icons";

// Card B: the live copies-left counter and the wallet button.
export default function ResumeMint() {
  const {
    data: totalSupply,
    isLoading: isLoadingTotalSupply,
    isError: isTotalSupplyError,
  } = useReadContract({
    abi: resumeAbi,
    address: resumeAddress,
    functionName: "totalSupply",
  });

  const mintedCount = totalSupply ? Number(totalSupply) : 0;
  const safeMinted = Number.isFinite(mintedCount) ? mintedCount : 0;
  const copiesLeft = Math.max(0, MAX_SUPPLY - safeMinted);
  const progress = Math.min(
    100,
    Math.max(0, (safeMinted / MAX_SUPPLY) * 100 || 0)
  );
  const ready =
    !isLoadingTotalSupply && !isTotalSupplyError && totalSupply !== undefined;

  return (
    <div className="flex flex-col gap-3.5 rounded-[14px] border border-accent/35 bg-bg-inset/60 p-5">
      <div className="flex items-center gap-2.5">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-accent/12">
          <HexIcon stroke="currentColor" className="text-accent" />
        </span>
        <h2 className="text-lg font-bold">{resumePage.mintCard.title}</h2>
      </div>
      <p className="text-[15px] text-fg-muted">{resumePage.mintCard.body}</p>
      <p className="font-jetbrains text-xs text-fg-soft">
        {resumePage.mintCard.meta}
      </p>

      <div className="flex flex-col gap-2">
        <div className="flex items-baseline justify-between gap-3">
          <span className="font-jetbrains text-xs uppercase tracking-[0.08em] text-fg-muted">
            Copies left
          </span>
          <span className="font-jetbrains text-base font-semibold">
            {ready ? copiesLeft : "—"}{" "}
            <span className="text-[13px] text-fg-muted">/ {MAX_SUPPLY}</span>
          </span>
        </div>
        <div
          role="presentation"
          className="h-2 overflow-hidden rounded-full bg-fg/10"
        >
          <div
            className="h-2 rounded-full bg-accent duration-500 motion-safe:transition-[width]"
            style={{ width: `${ready ? progress : 0}%` }}
          />
        </div>
      </div>

      <CustomConnectAndMintButton />

      <a
        href={resumeContract.href}
        target="_blank"
        rel="noopener noreferrer"
        title={`${resumeContract.address} on Arbiscan`}
        className="inline-flex min-h-7 items-center gap-2 self-start font-jetbrains text-xs text-fg-muted hover:underline"
      >
        Contract <span className="text-link">{resumeContract.short}</span>
        <ExternalIcon size={12} stroke="currentColor" />
      </a>
    </div>
  );
}
