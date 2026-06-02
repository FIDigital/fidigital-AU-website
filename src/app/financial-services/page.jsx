import FinancialServicesClient from './FinancialServicesClient';
import { JsonLd, buildBreadcrumb, buildService } from "@/lib/jsonLd";

export { metadata } from './meta';

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Financial Services", path: "/financial-services" }]),
          buildService({ name: "Financial Services", serviceType: "Financial Services", path: "/financial-services" }),
        ]}
      />
      <FinancialServicesClient />
    </>
  );
}