import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Istanbul Barber Shop — Precision Cuts. Timeless Style.",
  description:
    "Premium barber shop offering classic haircuts, beard trims, and traditional Turkish hot towel shaves. Walk-ins welcome.",
  openGraph: {
    title: "Istanbul Barber Shop",
    description: "Precision Cuts. Timeless Style.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="font-sans bg-neutral-950 text-neutral-100">
        {children}
      </body>
    </html>
  );
}
