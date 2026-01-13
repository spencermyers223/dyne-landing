import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Dyne | The Smarter Way to Dyne",
  description: "Stop refreshing Resy. Add restaurants to your watchlist, set your preferences, and get notified the moment a perfect table opens up—with one-tap booking.",
  keywords: ["restaurant reservations", "Resy", "OpenTable", "dining", "NYC restaurants", "table booking"],
  openGraph: {
    title: "Dyne | Never Miss a Table Again",
    description: "Your personal reservation concierge. Get notified when tables open at your favorite restaurants.",
    type: "website",
    url: "https://dynereservations.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dyne | Never Miss a Table Again",
    description: "Your personal reservation concierge. Get notified when tables open at your favorite restaurants.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
