import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "   Osama Shakeel: AI Solutions Architect",
  description:
    "I help businesses automate sales, operations, customer support, and internal workflows using AI, custom software, APIs, and workflow automation.",
  keywords: [
    "AI Solutions Architect",
    "Business Automation",
    "AI Automation",
    "Workflow Automation",
    "CRM Automation",
    "Custom Software",
    "n8n",
    "OpenAI",
    "GoHighLevel",
    "   Osama Shakeel",
  ],
  authors: [{ name: "   Osama Shakeel" }],
  creator: "   Osama Shakeel",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "   Osama Shakeel: AI Solutions Architect",
    description:
      "Building AI-Powered Business Automation Systems that scale operations.",
    siteName: "   Osama Shakeel",
  },
  twitter: {
    card: "summary_large_image",
    title: "   Osama Shakeel: AI Solutions Architect",
    description: "Building AI-Powered Business Automation Systems.",
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
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-white text-[#111827] antialiased">
        {children}
      </body>
    </html>
  );
}
