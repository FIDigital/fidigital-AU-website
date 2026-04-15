import ComplianceClient from "./ComplianceClient";

export const metadata = {
  title: "Australian Data Residency & Compliance | APRA, ASIC, ACSC | FI Digital",
  description: "Australian data residency on AWS Sydney and Azure Australia East. APRA, ASIC, and ACSC compliant infrastructure. Professional indemnity insurance. Contractual SLAs.",
  openGraph: {
    title: "Australian Data Residency & Compliance | FI Digital",
    description: "Australian data residency on AWS Sydney and Azure Australia East. APRA, ASIC, and ACSC compliant infrastructure. Professional indemnity insurance. Contractual SLAs.",
    url: "https://fidigital.com.au/why-fi-digital/australian-compliance",
    siteName: "FI Digital",
    locale: "en_AU",
    type: "website",
  },
};

export default function AustralianCompliancePage() {
  return <ComplianceClient />;
}
