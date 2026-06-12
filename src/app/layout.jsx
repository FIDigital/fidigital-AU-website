import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import SmoothScrolling from "@/components/SmoothScrolling";
import ZohoSalesIQ from "@/components/ZohoSalesIQ";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import MobileCtaBar from "@/components/MobileCtaBar";

export const metadata = {
  metadataBase: new URL("https://fidigital.com.au"),
  title: {
    default: "FI Digital AU | AI Agent Architects & Zoho Experts",
    template: "%s | FI Digital AU",
  },
  description:
    "Leading Australian Zoho partner in Melbourne. We architect intelligent AI agents and automated enterprise workflows for Australian businesses.",
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
        url: "/four-pillars.png",
        width: 1024,
        height: 559,
        alt: "FI Digital AU – AI Agent Architects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FI Digital AU | AI Agent Architects",
    description: "Leading Australian Zoho partner in Melbourne. AI agent architects and Zoho experts.",
    images: ["/four-pillars.png"],
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
    "@id": "https://fidigital.com.au/#organization",
    "name": "FI Digital Australia",
    "legalName": "Digital Synergy Ventures Pty Ltd",
    "url": "https://fidigital.com.au",
    "logo": "https://fidigital.com.au/images/logo.png",
    "description": "Software engineering, data platforms, AI automation, and business systems modernisation for Australian enterprises",
    "foundingDate": "2016",
    "numberOfEmployees": { "@type": "QuantitativeValue", "value": 200 },
    "telephone": "+61 1300 921 280",
    "email": "support@fidigital.com.au",
    "sameAs": [
      "https://www.linkedin.com/company/fi-digital-services/",
      "https://x.com/FidigitalAus"
    ],
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Level 9, 440 Collins Street",
        "addressLocality": "Melbourne",
        "addressRegion": "VIC",
        "postalCode": "3000",
        "addressCountry": "AU"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "3 Tanunda Street",
        "addressLocality": "Vermont South",
        "addressRegion": "VIC",
        "postalCode": "3133",
        "addressCountry": "AU"
      }
    ],
    "areaServed": ["AU", "NZ", "GB", "AE", "IN"],
    "knowsAbout": ["Product Engineering", "Data Engineering", "AI Agents", "Zoho", "Databricks", "Snowflake"]
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://fidigital.com.au/#localbusiness",
    "name": "FI Digital Australia",
    "image": "https://fidigital.com.au/images/logo.png",
    "url": "https://fidigital.com.au",
    "telephone": "+61 1300 921 280",
    "email": "support@fidigital.com.au",
    "priceRange": "$$$",
    "parentOrganization": { "@id": "https://fidigital.com.au/#organization" },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Level 9, 440 Collins Street",
      "addressLocality": "Melbourne",
      "addressRegion": "VIC",
      "postalCode": "3000",
      "addressCountry": "AU"
    },
    "areaServed": { "@type": "Country", "name": "Australia" },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:30"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NGXD3PN');`,
          }}
        />
        {/* End Google Tag Manager */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script src="https://cdn.pagesense.io/js/fristineinfotechpvtltd/f614a38d77ca403aba041c58108102e5.js" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1D4ED8" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NGXD3PN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
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
        <MobileCtaBar />
      </body>
    </html>
  );
}
