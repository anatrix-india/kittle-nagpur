import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/footer";
import AdSense from "./components/AdSense";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ketli Menu",
  description: "Discover Ketli, crafted with love by Anatrix for tea enthusiasts in Gittikhadan, Nagpur.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <AdSense pId="3089469944509509" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
