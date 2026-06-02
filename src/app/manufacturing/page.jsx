import ManufacturingClient from './ManufacturingClient';
import { JsonLd, buildBreadcrumb, buildService } from "@/lib/jsonLd";

export { metadata } from './meta';

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Manufacturing", path: "/manufacturing" }]),
          buildService({ name: "Manufacturing", serviceType: "Manufacturing", path: "/manufacturing" }),
        ]}
      />
      <ManufacturingClient />
    </>
  );
}