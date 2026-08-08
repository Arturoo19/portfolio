import type { Metadata } from "next";

import { LocaleProvider } from "@/components/LocaleProvider";
import { SkipLink } from "@/components/layout/SkipLink";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

import "./globals.css";

export const metadata: Metadata = {
  title: "Artur - Full-stack developer",
  description:
    "Full-stack developer portfolio: websites, AI systems, automations, and Telegram bots.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full bg-slate-950 text-slate-100">
        <LocaleProvider>
          <SkipLink />
          <SiteHeader />
          {children}
          <SiteFooter />
        </LocaleProvider>
      </body>
    </html>
  );
}
