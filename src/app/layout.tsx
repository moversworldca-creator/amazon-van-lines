import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google"; // Import Inter
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Configure Inter font
const inter = Inter({
  variable: "--font-inter", // Define a CSS variable for Inter
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amazon Van Lines | Professional Moving Services Canada",
  description: "Trusted Canadian moving company offering local and long-distance moving, packing, and storage services across Canada. Get a free quote today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`} // Add Inter's variable
      >
        {children}
      </body>
    </html>
  );
}
