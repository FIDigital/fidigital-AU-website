import IntegrationClient from './IntegrationClient';
import { JsonLd, buildBreadcrumb, buildService } from "@/lib/jsonLd";

export { metadata } from './meta';

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([{ name: "Home", path: "/" }, { name: "3rd Party Zoho Integration", path: "/3rd-party-zoho-integration" }]),
          buildService({ name: "3rd Party Zoho Integration", serviceType: "3rd Party Zoho Integration", path: "/3rd-party-zoho-integration" }),
        ]}
      />
      <IntegrationClient />
    </>
  );
}