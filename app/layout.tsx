import type { Metadata } from "next";
import { Nunito_Sans, Nunito } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";
import SmoothScroll from "@/components/SmoothScroll";
import WagmiWrapper from "@/providers/WagmiProvider";
import { headers } from "next/headers"; // added
import { ToastProvider } from "@/providers/Toasts";

export const metadata: Metadata = {
  title: "Kobe Sergio | Full Stack Web3 Developer",
  description:
    "Hi welcome to my portfolio website. I'm a full stack web3 developer with a passion for building dApps.",
};

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

const nunitoMono = Nunito({
  variable: "--font-nunito-mono",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersObj = await headers();
  const cookies = headersObj.get("cookie");

  return (
    <html lang="en">
      <body
        className={`${nunitoSans.className} ${nunitoMono.className} antialiased`}
      >
        <WagmiWrapper cookies={cookies}>
          <ToastProvider>
            <SmoothScroll>{children}</SmoothScroll>
          </ToastProvider>
        </WagmiWrapper>
      </body>
    </html>
  );
}
