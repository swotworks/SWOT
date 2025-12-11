import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://swot.works"),
  title: {
    default: "SWOT Works - Simple Bookkeeping for Small Businesses in Pakistan",
    template: "%s | SWOT Works",
  },
  description:
    "Pakistan's trusted small business bookkeeping service. Simple record keeping, WhatsApp updates, and personal support for shopkeepers, retailers, pharmacies, and small business owners in Gujranwala and across Pakistan.",
  keywords: [
    "bookkeeping Pakistan",
    "small business bookkeeping",
    "accounting services Gujranwala",
    "WhatsApp bookkeeping",
    "simple bookkeeping",
    "business record keeping",
    "financial clarity",
    "shopkeeper accounting",
    "retail bookkeeping",
    "pharmacy accounting",
    "tailor business accounting",
    "Gujranwala accountant",
    "Pakistan SME services",
    "cloud bookkeeping",
    "mobile bookkeeping",
  ],
  authors: [{ name: "Muhammad Shoib", url: "https://linkedin.com/in/mshoib/" }],
  creator: "SWOT Works",
  publisher: "SWOT Works",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://swot.works",
    siteName: "SWOT Works",
    title: "SWOT Works - Simple Bookkeeping for Small Businesses",
    description:
      "Pakistan's trusted small business bookkeeping service. WhatsApp-driven updates, personal support, and financial clarity for shopkeepers and small business owners.",
    images: [
      {
        url: "/images/icons8-swot-analysis-400.png",
        width: 400,
        height: 400,
        alt: "SWOT Works Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SWOT Works - Simple Bookkeeping for Small Businesses",
    description: "Pakistan's trusted small business bookkeeping service. WhatsApp-driven updates and personal support.",
    images: ["/images/icons8-swot-analysis-400.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://swot.works",
  },
  category: "Business Services",
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#14b8a6",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "SWOT Works",
              description: "Simple bookkeeping for small businesses in Pakistan",
              url: "https://swot.works",
              logo: "https://swot.works/images/icons8-swot-analysis-400.png",
              image: "https://swot.works/images/icons8-swot-analysis-400.png",
              telephone: "+923286110776",
              email: "info@swot.email",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Gujranwala",
                addressCountry: "PK",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 32.1877,
                longitude: 74.1945,
              },
              areaServed: {
                "@type": "Country",
                name: "Pakistan",
              },
              priceRange: "PKR 3000-15000",
              openingHours: "Mo-Sa 09:00-18:00",
              sameAs: ["https://linkedin.com/in/mshoib/", "https://wa.me/923286110776"],
              serviceType: ["Bookkeeping", "Financial Record Keeping", "Business Accounting"],
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
