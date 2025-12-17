"use client";

import {
  resumeAbi,
  resumeAddress,
} from "@/constants/smart-contract/resumeContract";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import { parseEther } from "viem";
import { useMemo, useState } from "react";
import { useReadContract, useWriteContract } from "wagmi";
import {
  waitForTransactionReceipt,
  type WriteContractReturnType,
} from "@wagmi/core";

import { useToast } from "@/providers/Toasts";
import SuccessMintModal, { type MintMetadata } from "./SuccessMintModal";
import { config } from "@/providers/WagmiConfig";

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

  const resumeExternalUrl =
    "https://gateway.pinata.cloud/ipfs/bafkreihno3jnzh4ekdjiz43wybw3e6nlorao77qvk3yvwt65aj4oem7eki";

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
      window.open(
        `https://gateway.pinata.cloud/ipfs/bafkreihno3jnzh4ekdjiz43wybw3e6nlorao77qvk3yvwt65aj4oem7eki`,
        "_blank"
      );
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

  const connectedContent = (
    <div className="flex w-full flex-wrap gap-3 mt-6">
      <div className="flex flex-1 min-w-0 items-stretch">
        <button
          type="button"
          className="flex-1 bg-amber-400 text-slate-900 font-bold py-3 px-5 sm:px-6 rounded-l-lg shadow-md hover:bg-amber-300 transition text-base sm:text-lg min-w-0"
          onClick={handleMint}
          disabled={isMinting}
        >
          {isMinting ? "Minting..." : isHolder ? "View Resume" : "Mint Resume"}
        </button>
        <button
          type="button"
          onClick={handleOpenWallet}
          aria-label="Open wallet menu"
          className="inline-flex h-auto w-14 items-center justify-center rounded-r-lg border border-white/10 bg-slate-900/70 text-slate-100 shadow-md shadow-black/30 backdrop-blur transition hover:border-amber-300/60 hover:bg-slate-900/80 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-slate-950"
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
            className="text-slate-200"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </div>
      {!isHolder && (
        <a
          href={resumeExternalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-slate-800 border border-slate-600 text-slate-200 font-bold py-3 px-5 sm:px-6 rounded-lg shadow-md hover:bg-slate-700 transition flex items-center justify-center text-base sm:text-lg min-w-0"
        >
          Or view it here
        </a>
      )}
    </div>
  );

  const disconnectedContent = (
    <div className="flex w-full flex-wrap gap-3 mt-6">
      <button
        type="button"
        onClick={handleOpenWallet}
        className="flex-1 rounded-lg px-4 py-3 text-sm sm:text-base font-bold cursor-pointer bg-amber-400 text-slate-900 shadow-md shadow-amber-500/30 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-slate-950"
      >
        {status === "connecting" || status === "reconnecting"
          ? "Connecting..."
          : "Connect Wallet"}
      </button>
      <a
        href={resumeExternalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-slate-800 border border-slate-600 text-slate-200 font-bold py-3 px-5 sm:px-6 rounded-lg shadow-md hover:bg-slate-700 transition flex items-center justify-center text-base sm:text-lg min-w-0"
      >
        Or view it here
      </a>
    </div>
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
