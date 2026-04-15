import WhyClient from "./WhyClient";

export const metadata = {
  title: "Why FI Digital | Engineering-Led Transformation | Australian Enterprise",
  description: "Engineering-led, not advisory-led. 200+ engineers. 10 years in production. Four integrated service lines. Australian data residency. Contractual SLAs.",
  openGraph: {
    title: "Why FI Digital | Engineering-Led Transformation",
    description: "Engineering-led, not advisory-led. 200+ engineers. 10 years in production. Four integrated service lines. Australian data residency. Contractual SLAs.",
    url: "https://fidigital.com.au/why-fi-digital",
    siteName: "FI Digital",
    locale: "en_AU",
    type: "website",
  },
};

export default function WhyFiDigitalPage() {
  return <WhyClient />;
}
