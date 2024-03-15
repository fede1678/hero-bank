import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { Header } from "@/components/shared/header";
import { cn } from "@/libs/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hero Banck",
  description: "Hero Banck",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-gray-200", inter.className)}>
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
