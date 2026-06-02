import LogisticsClient from './LogisticsClient';
import { JsonLd, buildBreadcrumb, buildService } from "@/lib/jsonLd";

export { metadata } from './meta';

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Logistics", path: "/logistics" }]),
          buildService({ name: "Logistics", serviceType: "Logistics", path: "/logistics" }),
        ]}
      />
      <LogisticsClient />
    </>
  );
}