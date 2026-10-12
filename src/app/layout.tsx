import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import { DisclaimerGate } from "@/components/DisclaimerGate";
import { Footer } from "@/components/Footer";
import { GlobalNav } from "@/components/GlobalNav";
import { firm } from "@/content/site";
import "./globals.css";

// Fallback for non-Apple devices; Apple devices use the system SF Pro font.
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
// Brand typeface for the MSS wordmark.
const archivo = Archivo({ variable: "--font-archivo", subsets: ["latin"], weight: ["500", "700", "900"] });

export const metadata: Metadata = {
  title: { default: `${firm.name} — ${firm.tagline}`, template: `%s — ${firm.name}` },
  description: "Chartered Accountants and Business Advisory Professionals: taxation, GST, accounting, compliance and business advisory.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${archivo.variable}`}>
      <body className="flex min-h-screen flex-col">
        <GlobalNav />
        <main className="flex-1">{children}</main>
        <Footer />
        <DisclaimerGate />
      </body>
    </html>
  );
}
