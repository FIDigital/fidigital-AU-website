import EnergyRenewablesClient from './EnergyRenewablesClient';
import { JsonLd, buildBreadcrumb, buildService } from "@/lib/jsonLd";
export { metadata } from './meta';

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([
            { name: "Home", path: "/" },
            { name: "Energy & Renewables", path: "/energy-renewables" },
          ]),
          buildService({
            name: "Technology for Energy & Renewables",
            serviceType: "Technology Consulting",
            path: "/energy-renewables",
            description: "Software, data platforms, and AI agents for Australian energy operators, retailers, and renewable asset managers.",
          }),
        ]}
      />
      <EnergyRenewablesClient />
    </>
  );
}
