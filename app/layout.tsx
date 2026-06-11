import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.nickname}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "System Engineer",
    "Network Engineer",
    "DevOps",
    "SuperCharger",
    "Çağrı Demirtaş",
    "CI/CD",
    "Next.js",
    ".NET Core",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.linkedin }],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    title: `${siteConfig.name} | ${siteConfig.nickname}`,
    description: siteConfig.description,
    siteName: siteConfig.nickname,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.nickname}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
