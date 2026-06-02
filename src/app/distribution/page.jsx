import DistributionClient from './DistributionClient';
import { JsonLd, buildBreadcrumb, buildService } from "@/lib/jsonLd";

export { metadata } from './meta';

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Distribution", path: "/distribution" }]),
          buildService({ name: "Distribution", serviceType: "Distribution", path: "/distribution" }),
        ]}
      />
      <DistributionClient />
    </>
  );
}