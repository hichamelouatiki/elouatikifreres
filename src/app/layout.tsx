import type { Metadata } from "next";
import { Caveat, Inter, Space_Grotesk } from "next/font/google";

import { SITE_LOGO_INTRINSIC, SITE_LOGO_SRC } from "@/components/site-logo";
import { SITE_DESCRIPTION } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elouatikifreres | IA & Travaux BTP",
  description: SITE_DESCRIPTION,
  openGraph: {
    title: "Elouatikifreres | IA & Travaux BTP",
    description: SITE_DESCRIPTION,
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: SITE_LOGO_SRC,
        width: SITE_LOGO_INTRINSIC.width,
        height: SITE_LOGO_INTRINSIC.height,
        alt: "El Ouatiki Frères",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elouatikifreres | IA & Travaux BTP",
    description: SITE_DESCRIPTION,
    images: [SITE_LOGO_SRC],
  },
  icons: {
    icon: SITE_LOGO_SRC,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${spaceGrotesk.variable} ${caveat.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
