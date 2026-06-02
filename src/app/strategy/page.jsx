import StrategyClient from './StrategyClient';
import { JsonLd, buildBreadcrumb, buildService } from "@/lib/jsonLd";

export { metadata } from './meta';

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Strategy", path: "/strategy" }]),
          buildService({ name: "Strategy", serviceType: "Strategy", path: "/strategy" }),
        ]}
      />
      <StrategyClient />
    </>
  );
}