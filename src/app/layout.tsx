import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Taxicolor — Automotive Filtration & OEM Manufacturing",
  description: "Cabin air filters, OE cross reference, and custom OEM filtration solutions. Direct from Shanghai factory cluster.",
  keywords: ["cabin air filter", "automotive filtration", "OE cross reference", "OEM manufacturing", "car filter", "pollen filter", "auto parts"],
  icons: {
    icon: "/icon.svg?v=2",
  },
  openGraph: {
    title: "Taxicolor — Automotive Filtration & OEM",
    description: "Cabin air filters and custom OEM filtration. Direct factory supply from Shanghai.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
