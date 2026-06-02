import ZohoPartnersClient from './ZohoPartnersClient';
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
            { name: "Zoho Partners Australia", path: "/zoho-partners-australia" },
          ]),
          buildService({
            name: "Zoho Premium Partner Services",
            serviceType: "Zoho Implementation",
            path: "/zoho-partners-australia",
            description: "Zoho Premium Partner delivery across CRM, Books, Inventory, Creator, Desk, Analytics, Campaigns, and Projects.",
          }),
        ]}
      />
      <ZohoPartnersClient />
    </>
  );
}
