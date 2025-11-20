"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Header from "./header";
import Footer from "./footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPage =
    pathname === "/signin" ||
    pathname === "/signup" ||
    pathname === "/testimonials/create";

  if (isAuthPage) {
    return <main className="min-h-screen w-full">{children}</main>;
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
}
