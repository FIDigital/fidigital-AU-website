import FinanceClient from "./FinanceClient";

export const metadata = {
  title: "AI & Data Engineering for Financial Services Australia | FI Digital",
  description: "Fraud detection, KYC/AML automation, data platforms, regulatory reporting, and CRM modernisation for Australian financial services. Databricks. Snowflake. Claude AI. Zoho. APRA and ASIC compliant.",
  openGraph: {
    title: "AI & Data Engineering for Financial Services | FI Digital",
    description: "Fraud detection, KYC/AML automation, data platforms, regulatory reporting, and CRM modernisation for Australian financial services.",
    url: "https://fidigital.com.au/industries/financial-services-wealth",
    siteName: "FI Digital",
    locale: "en_AU",
    type: "website",
  },
};

export default function FinancePage() {
  return <FinanceClient />;
}
