import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PS5 Store | PlayStation 5",
  description:
    "Shop PlayStation 5 consoles, games, and accessories. Experience the next generation of gaming.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-[#1d1d1f] antialiased">
        {children}
      </body>
    </html>
  );
}
