import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/theme-context";
import LayoutWrapper from "@/components/layout-wrapper";
import { Toaster } from "sonner";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PS5 Store",
  description: "The Future of Gaming is Here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} font-display bg-background-light dark:bg-background-dark text-foreground antialiased transition-colors duration-300`}
      >
        <ThemeProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </ThemeProvider>
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
