import type { Metadata } from "next";
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/footer";

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
      <Head>
      <meta name="google-adsense-account" content="ca-pub-3089469944509509"/>
      <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3089469944509509"
          crossOrigin="anonymous"
        ></script>
  
        
      </Head>
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
