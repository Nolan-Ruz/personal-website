import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nolan Ruzicki",
  description: "Personal website of Nolan Ruzicki",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <header className="border-b border-zinc-800">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-sm font-semibold tracking-wide">
              Nolan Ruzicki
            </Link>

            <nav className="flex gap-6 text-sm text-zinc-300">
              <Link href="/about">About</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/now">Now</Link>
              <Link href="/coming-soon">Coming Soon</Link>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}