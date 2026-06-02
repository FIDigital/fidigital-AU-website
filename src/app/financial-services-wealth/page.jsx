import FinancialServicesClient from "./FinancialServicesClient";
import { JsonLd, buildBreadcrumb, buildService, buildOpenGraph } from "@/lib/jsonLd";

export const metadata = {
  title: 'AI, Data & Software for Financial Services Australia',
  alternates: { canonical: 'https://fidigital.com.au/financial-services-wealth' },
  openGraph: buildOpenGraph({ title: 'AI, Data & Software for Financial Services Australia', description: 'Fraud detection, KYC/AML automation, data platforms, regulatory reporting, and CRM modernisation for Australian financial services. Databricks. Snowflake. Claude AI. Zoho. APRA and ASIC compliant.', path: '/financial-services-wealth' }),
  description: 'Fraud detection, KYC/AML automation, data platforms, regulatory reporting, and CRM modernisation for Australian financial services. Databricks. Snowflake. Claude AI. Zoho. APRA and ASIC compliant.',
};

export default function FinancialServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([
            { name: "Home", path: "/" },
            { name: "Financial Services & Wealth", path: "/financial-services-wealth" },
          ]),
          buildService({
            name: "AI, Data & Software for Financial Services",
            serviceType: "Technology Consulting",
            path: "/financial-services-wealth",
            description: "Fraud detection, KYC/AML automation, data platforms, and regulatory reporting for Australian financial services. APRA and ASIC compliant.",
          }),
        ]}
      />
      <FinancialServicesClient />
    </>
  );
}
