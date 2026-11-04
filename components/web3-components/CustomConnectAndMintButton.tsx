"use client";

import {
  resumeAbi,
  resumeAddress,
} from "@/constants/smart-contract/resumeContract";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import { parseEther } from "viem";
import { useState } from "react";
import { useReadContract, useWriteContract } from "wagmi";
import {
  waitForTransactionReceipt,
  type WriteContractReturnType,
} from "wagmi/actions";

import { useToast } from "@/providers/Toasts";
import SuccessMintModal, { type MintMetadata } from "./SuccessMintModal";
import { config } from "@/providers/WagmiConfig";
import { resumeIpfsUrl } from "@/constants/site/resume";
import { ChevronDownIcon } from "@/components/site/Icons";
import { cn } from "@/lib/utils";

const primaryButton =
  "flex min-h-[52px] flex-1 items-center justify-center gap-2 bg-accent px-6 text-base font-bold text-bg";

function Spinner() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      aria-hidden="true"
      className="motion-safe:animate-spin"
    >
      <path d="M8 2a6 6 0 1 0 6 6" />
    </svg>
  );
}

export default function CustomConnectAndMintButton() {
  const { open } = useAppKit();
  const { isConnected, status, address } = useAppKitAccount();
  const writeContract = useWriteContract();
  const [isMinting, setIsMinting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [lastTokenId, setLastTokenId] = useState<string | null>(null); // reserved if token id is needed later
  const [mintMetadata, setMintMetadata] = useState<MintMetadata | null>(null);
  const [isLoadingMetadata, setIsLoadingMetadata] = useState(false);
  const { showToast } = useToast();

  const { data: isHolder } = useReadContract({
    abi: resumeAbi,
    address: resumeAddress,
    functionName: "balanceOf",
    args: [address ?? "0x0000000000000000000000000000000000000000"],
  });

  const resumeExternalUrl = resumeIpfsUrl;

  const fallbackImageUrl = "/assets/nft-image.png";
  const explorerUrl = `https://arbiscan.io/nft/0x09dcde5f7382abcb150064b820c63cdd586b2293/`;

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    setMintMetadata(null);
  };

  const handleOpenWallet = () => {
    if (isConnected) {
      open({ view: "Account" });
      return;
    }
    open({ view: "Connect" });
  };

  const handleMint = async () => {
    if (isMinting) return;

    if (isHolder) {
      //Open resume in new tab
      window.open(resumeExternalUrl, "_blank");
      return;
    }

    setIsMinting(true);
    writeContract.mutate(
      {
        abi: resumeAbi,
        address: resumeAddress,
        functionName: "batchMint",
        args: [1],
        value: parseEther("0"),
      },
      {
        onSuccess: async (data: WriteContractReturnType) => {
          //Get the minted NFT details on chain
          console.log(data);

          const receipt = await waitForTransactionReceipt(config, {
            hash: data,
          });
          console.log(receipt);
          if (receipt.status === "success") {
            const mintedTokens = receipt.logs.slice(0, -1);
            const tokenIds = mintedTokens
              .filter(
                (log) => log.topics[3] != undefined && log.topics[3] != null
              )
              .map((log) => {
                const hexId = log.topics[3];
                if (!hexId) return 0;
                return parseInt(hexId.slice(2), 16);
              });
            setLastTokenId(tokenIds[0].toString());
          } else {
            throw new Error("Transaction failed");
          }

          setIsMinting(false);
          setShowSuccessModal(true);
          showToast({
            title: "Resume minted successfully",
            description: "You can now view your resume",
            variant: "success",
          });
        },
        onError: (error) => {
          console.error(error);
          setIsMinting(false);
          showToast({
            title: "Failed to mint resume",
            description: "Please try again",
            variant: "error",
          });
        },
      }
    );
  };

  // "Mint Resume" / "Minting..." / "View Resume" joined to the wallet menu.
  const connectedContent = (
    <span className="flex min-h-[52px]">
      <button
        type="button"
        onClick={handleMint}
        disabled={isMinting}
        aria-busy={isMinting}
        className={cn(
          primaryButton,
          "rounded-l-[10px]",
          isMinting && "cursor-progress bg-accent/70"
        )}
      >
        {isMinting ? (
          <>
            <Spinner />
            Minting...
          </>
        ) : isHolder ? (
          "View Resume"
        ) : (
          "Mint Resume"
        )}
      </button>
      <button
        type="button"
        onClick={handleOpenWallet}
        aria-label="Open wallet menu"
        className="flex w-[52px] shrink-0 items-center justify-center rounded-r-[10px] border border-l-0 border-fg/16 bg-bg-inset/60 text-fg"
      >
        <ChevronDownIcon stroke="currentColor" />
      </button>
    </span>
  );

  const disconnectedContent = (
    <button
      type="button"
      onClick={handleOpenWallet}
      className={cn(primaryButton, "w-full rounded-[10px]")}
    >
      {status === "connecting" || status === "reconnecting"
        ? "Connecting..."
        : "Connect Wallet"}
    </button>
  );

  return (
    <>
      {isConnected ? connectedContent : disconnectedContent}
      <SuccessMintModal
        open={showSuccessModal}
        onClose={handleCloseModal}
        metadata={mintMetadata}
        isLoadingMetadata={isLoadingMetadata}
        fallbackImageUrl={fallbackImageUrl}
        fallbackResumeUrl={resumeExternalUrl}
        explorerUrl={explorerUrl}
        tokenId={lastTokenId ?? undefined}
      />
    </>
  );
}
