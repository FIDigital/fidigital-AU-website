import WhyClient from "./WhyClient";
import { JsonLd, buildBreadcrumb } from "@/lib/jsonLd";

export const metadata = {
  title: "Why FI Digital | Engineering-Led Transformation Partner Australia",
  alternates: { canonical: "https://fidigital.com.au/why-fi-digital" },
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
  return (
    <>
      <JsonLd
        data={buildBreadcrumb([
          { name: "Home", path: "/" },
          { name: "Why FI Digital", path: "/why-fi-digital" },
        ])}
      />
      <WhyClient />
    </>
  );
}
