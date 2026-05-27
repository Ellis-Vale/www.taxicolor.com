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
  title: "Taxicolor — Direct-to-Source Global Sourcing Partner",
  description: "AI-powered supplier discovery, quality prediction, trade documentation, and supply chain orchestration. Flat-fee, zero-markup sourcing from China's industrial clusters.",
  keywords: ["China sourcing", "factory direct", "OEM manufacturing", "supply chain", "supplier verification", "procurement agent", "global sourcing"],
  openGraph: {
    title: "Taxicolor — Direct-to-Source Sourcing Partner",
    description: "Bypass middlemen. Direct factory billing, AI-driven quality auditing, and real-time supply chain control.",
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
