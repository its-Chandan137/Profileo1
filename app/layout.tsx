import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Chandan Swarnakar | Frontend Developer",
  description:
    "Frontend Developer with 2+ years in React, Angular, and JavaScript. Building real-time, responsive web applications.",
  openGraph: {
    title: "Chandan Swarnakar | Frontend Developer",
    description:
      "Frontend Developer with 2+ years in React, Angular, and JavaScript. Building real-time, responsive web applications.",
    type: "website",
    locale: "en_IN",
    siteName: "Chandan Swarnakar Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Chandan Swarnakar | Frontend Developer",
    description:
      "Frontend Developer with 2+ years in React, Angular, and JavaScript. Building real-time, responsive web applications."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        {children}
        <div className="noise" aria-hidden="true" />
      </body>
    </html>
  );
}
