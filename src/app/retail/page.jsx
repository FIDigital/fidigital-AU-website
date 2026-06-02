import RetailClient from './RetailClient';
import { JsonLd, buildBreadcrumb, buildService } from "@/lib/jsonLd";

export { metadata } from './meta';

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Retail", path: "/retail" }]),
          buildService({ name: "Retail", serviceType: "Retail", path: "/retail" }),
        ]}
      />
      <RetailClient />
    </>
  );
}