import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import {Header, Footer} from '@/components/index';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js + Tailwind CSS + TypeScript + Framer-Motion Starter",
  description: "Generated by @miguelferreira6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
          <body className={inter.className}>
              <Header />
              {children}
              <Footer />
          </body>
      </html>
  );
}
