import ZohoConsultantsClient from './ZohoConsultantsClient';
import { JsonLd, buildBreadcrumb, buildService } from "@/lib/jsonLd";
export { metadata } from './meta';

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([
            { name: "Home", path: "/" },
            { name: "Business Systems", path: "/business-systems" },
            { name: "Zoho Consultants", path: "/zoho-consultants" },
          ]),
          buildService({
            name: "Zoho CRM Consulting",
            serviceType: "Zoho CRM Consulting",
            path: "/zoho-consultants",
            description: "Certified Zoho CRM consulting and strategy for Australian mid-market and enterprise. Zoho Premium Partner.",
          }),
        ]}
      />
      <ZohoConsultantsClient />
    </>
  );
}
