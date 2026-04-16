import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google"; // Import Inter
import Script from "next/script";
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Amazon Van Lines",
    "image": "https://amazonvanlines.com/asset/logo.png",
    "@id": "https://amazonvanlines.com",
    "url": "https://amazonvanlines.com",
    "telephone": "1-833-838-9898",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3174 Eglinton Ave E Suite-202 a",
      "addressLocality": "Scarborough",
      "addressRegion": "ON",
      "postalCode": "M1J 2H5",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.7394,
      "longitude": -79.2311
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "07:00",
      "closes": "20:00"
    },
    "sameAs": [
      "https://www.facebook.com/amazonvanlines",
      "https://www.instagram.com/amazonvanlines"
    ],
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Ontario" },
      { "@type": "AdministrativeArea", "name": "Alberta" },
      { "@type": "AdministrativeArea", "name": "British Columbia" },
      { "@type": "AdministrativeArea", "name": "Manitoba" },
      { "@type": "AdministrativeArea", "name": "Quebec" },
      { "@type": "AdministrativeArea", "name": "Saskatchewan" }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`} // Add Inter's variable
      >
        {children}
      </body>
    </html>
  );
}
