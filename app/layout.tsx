import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from '@/components/Navbar'
import React from 'react'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}</body>
    </html>
  );
}
