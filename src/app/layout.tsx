import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.businessName} | Trusted Plumbing in ${siteConfig.city}`,
  description: `Book a plumbing call with licensed professionals in ${siteConfig.city}, ${siteConfig.state}. Clear pricing, same-day support, and emergency response when you need it.`,
  keywords: [
    `plumber ${siteConfig.city}`,
    `book plumber ${siteConfig.city}`,
    `emergency plumbing ${siteConfig.city}`,
    "leak repair",
    "drain cleaning",
    "water heater repair",
    "licensed plumber",
  ],
  openGraph: {
    title: `${siteConfig.businessName} | Book Trusted Plumbing Help`,
    description: `Clear pricing, licensed experts, and same-day plumbing in ${siteConfig.city}. Book a call now.`,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.variable}>
      <head>
        <meta name="format-detection" content="telephone=yes" />
        <meta name="theme-color" content="#0b1228" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Plumber",
              name: siteConfig.businessName,
              telephone: siteConfig.phone,
              address: {
                "@type": "PostalAddress",
                addressLocality: siteConfig.city,
                addressRegion: siteConfig.state,
                addressCountry: "US",
              },
              openingHours: "Mo-Su 00:00-24:00",
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: siteConfig.overallRating,
                reviewCount: siteConfig.reviewCount.replace("+", ""),
              },
            }),
          }}
        />
      </head>
      <body className="font-[family-name:var(--font-jakarta)]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
