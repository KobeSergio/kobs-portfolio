import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";
import SmoothScroll from "@/components/SmoothScroll";
import WagmiWrapper from "@/providers/WagmiProvider";
import { headers } from "next/headers"; // added
import { ToastProvider } from "@/providers/Toasts";

export const metadata: Metadata = {
  title: "Kobe Sergio | Full Stack Web3 Developer",
  description:
    "Fullstack Web3 developer with 5 years of shipping products end to end. Lately, I pair AI with spec-driven development to deliver my day-to-day work more efficiently.",
};

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
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
        className={`${nunitoSans.variable} ${nunitoSans.className} antialiased`}
      >
        <SmoothScroll>
          <WagmiWrapper cookies={cookies}>
            <ToastProvider>{children}</ToastProvider>
          </WagmiWrapper>
        </SmoothScroll>
      </body>
    </html>
  );
}
