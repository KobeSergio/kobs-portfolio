import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Mona_Sans } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";
import { headers } from "next/headers";
import SmoothScroll from "@/components/SmoothScroll";
import WagmiWrapper from "@/providers/WagmiProvider";
import { ToastProvider } from "@/providers/Toasts";
import SiteHeader from "@/components/site/SiteHeader";
import { profile } from "@/constants/site/site";
import { themeInitScript } from "@/lib/themeScript";

export const metadata: Metadata = {
  title: {
    default: "Kobe Sergio | Full Stack Web3 Developer",
    template: "%s | Kobe Sergio",
  },
  description: profile.bio,
};

// Browser chrome matches the header (bg-inset) for the system theme.
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2ede4" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0b08" },
  ],
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
      suppressHydrationWarning
      className={`${jetbrainsMono.variable} ${monaSans.variable}`}
    >
      <body className="antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
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
