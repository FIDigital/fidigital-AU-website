import MortgageBrokersClient from './MortgageBrokersClient';
import { JsonLd, buildBreadcrumb, buildService } from "@/lib/jsonLd";

export { metadata } from './meta';

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Mortgage Brokers", path: "/mortgage-brokers" }]),
          buildService({ name: "Mortgage Brokers", serviceType: "Mortgage Brokers", path: "/mortgage-brokers" }),
        ]}
      />
      <MortgageBrokersClient />
    </>
  );
}