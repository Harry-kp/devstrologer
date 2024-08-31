import type { Metadata } from "next";
import Head from "next/head";

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevStrologer",
  description: "Astrology for developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:title" content="DevStrologer" />
        <meta property="og:description" content="Horoscope for developers" />
        <meta
          property="og:image"
          content="https://github.com/user-attachments/assets/65400e98-e500-46c6-8cc5-17d881f7a6cb"
        />
        <meta property="og:url" content="https://devstrologer.vercel.app" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DevStrologer" />
        <meta
          name="twitter:description"
          content="DevStrologer - Horoscope for developers"
        />
        <meta
          name="twitter:image"
          content="https://github.com/user-attachments/assets/65400e98-e500-46c6-8cc5-17d881f7a6cb"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
