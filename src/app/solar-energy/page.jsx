import SolarEnergyClient from './SolarEnergyClient';
import { JsonLd, buildBreadcrumb, buildService } from "@/lib/jsonLd";

export { metadata } from './meta';

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Solar Energy", path: "/solar-energy" }]),
          buildService({ name: "Solar Energy", serviceType: "Solar Energy", path: "/solar-energy" }),
        ]}
      />
      <SolarEnergyClient />
    </>
  );
}