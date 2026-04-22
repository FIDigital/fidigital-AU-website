import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import SmoothScrolling from "@/components/SmoothScrolling";
import ZohoSalesIQ from "@/components/ZohoSalesIQ";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";

export const metadata = {
  metadataBase: new URL("https://fidigital.com.au"),
  title: {
    default: "FI Digital AU | AI Agent Architects & Zoho Experts",
    template: "%s | FI Digital AU",
  },
  description:
    "Leading Australian Zoho partner in Melbourne. We architect intelligent AI agents and automated enterprise workflows for Australian businesses.",
  keywords: [
    "AI agents Australia",
    "WhatsApp business automation",
    "Zoho Partner Melbourne",
    "Digital Transformation Australia",
    "Enterprise AI Melbourne",
  ],
  authors: [{ name: "FI Digital" }],
  creator: "FI Digital",
  publisher: "FI Digital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://fidigital.com.au",
    siteName: "FI Digital AU",
    title: "FI Digital AU | AI Agent Architects & Zoho Experts",
    description: "Leading Australian Zoho partner in Melbourne. We architect intelligent AI agents and automated enterprise workflows.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FI Digital AU – AI Agent Architects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FI Digital AU | AI Agent Architects",
    description: "Leading Australian Zoho partner in Melbourne. AI agent architects and Zoho experts.",
    images: ["/og-image.jpg"],
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
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  alternates: {
    canonical: "https://fidigital.com.au",
    types: {
      "text/plain": [
        {
          url: "/llms.txt",
          title: "LLM Info",
        },
      ],
    },
  },
};

export default function RootLayout({
  children,
}) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FI Digital Australia",
    "legalName": "Digital Synergy Ventures Pty Ltd",
    "url": "https://fidigital.com.au",
    "logo": "https://fidigital.com.au/images/logo.png",
    "description": "Software engineering, data platforms, AI automation, and business systems modernisation for Australian enterprises",
    "foundingDate": "2016",
    "numberOfEmployees": { "@type": "QuantitativeValue", "value": 200 },
    "address": { 
      "@type": "PostalAddress", 
      "addressLocality": "Melbourne", 
      "addressRegion": "VIC", 
      "addressCountry": "AU" 
    },
    "areaServed": ["AU", "NZ", "GB", "AE", "IN"],
    "knowsAbout": ["Product Engineering", "Data Engineering", "AI Agents", "Zoho", "Databricks", "Snowflake"]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script src="https://cdn.pagesense.io/js/fristineinfotechpvtltd/f614a38d77ca403aba041c58108102e5.js" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1D4ED8" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrolling>
            <div className="page-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
              <Header />
              <main style={{ flex: 1 }}>
                {children}
              </main>
              <Footer />
            </div>
          </SmoothScrolling>
        </ThemeProvider>
        <ZohoSalesIQ />
        <FloatingContactButton />
      </body>
    </html>
  );
}
