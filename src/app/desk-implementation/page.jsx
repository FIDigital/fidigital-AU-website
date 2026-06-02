import DeskImplementationClient from './DeskImplementationClient';
import { JsonLd, buildBreadcrumb, buildService } from "@/lib/jsonLd";

export { metadata } from './meta';

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Desk Implementation", path: "/desk-implementation" }]),
          buildService({ name: "Desk Implementation", serviceType: "Desk Implementation", path: "/desk-implementation" }),
        ]}
      />
      <DeskImplementationClient />
    </>
  );
}