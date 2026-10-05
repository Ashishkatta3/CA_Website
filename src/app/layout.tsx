import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { DisclaimerGate } from "@/components/DisclaimerGate";
import { Footer } from "@/components/Footer";
import { GlobalNav } from "@/components/GlobalNav";
import { firm } from "@/content/site";
import "./globals.css";

// Fallback for non-Apple devices; Apple devices use the system SF Pro font.
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: `${firm.name} — ${firm.tagline}`, template: `%s — ${firm.name}` },
  description: "Accounting, taxation, audit and business advisory services for individuals and businesses.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={inter.variable}>
      <body className="flex min-h-screen flex-col">
        <GlobalNav />
        <main className="flex-1">{children}</main>
        <Footer />
        <DisclaimerGate />
      </body>
    </html>
  );
}
