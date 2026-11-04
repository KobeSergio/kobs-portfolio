import type { Metadata } from "next";
import { JetBrains_Mono, Mona_Sans } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";
import { headers } from "next/headers";
import SmoothScroll from "@/components/SmoothScroll";
import WagmiWrapper from "@/providers/WagmiProvider";
import { ToastProvider } from "@/providers/Toasts";
import SiteHeader from "@/components/site/SiteHeader";
import { profile } from "@/constants/site/site";

export const metadata: Metadata = {
  title: {
    default: "Kobe Sergio | Full Stack Web3 Developer",
    template: "%s | Kobe Sergio",
  },
  description: profile.bio,
};

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  // The latin subset has no box-drawing glyphs. Without the size-adjusted
  // Arial fallback, the ASCII banner falls through to the system monospace.
  adjustFontFallback: false,
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const monaSans = Mona_Sans({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-mona-sans",
  display: "swap",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersObj = await headers();
  const cookies = headersObj.get("cookie");

  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} ${monaSans.variable}`}
    >
      <body className="antialiased">
        <SmoothScroll>
          <WagmiWrapper cookies={cookies}>
            <ToastProvider>
              <SiteHeader />
              {children}
            </ToastProvider>
          </WagmiWrapper>
        </SmoothScroll>
      </body>
    </html>
  );
}
