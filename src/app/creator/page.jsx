import CreatorClient from './CreatorClient';
import { JsonLd, buildBreadcrumb, buildService } from "@/lib/jsonLd";

export { metadata } from './meta';

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Zoho Creator", path: "/creator" }]),
          buildService({ name: "Zoho Creator", serviceType: "Zoho Creator", path: "/creator" }),
        ]}
      />
      <CreatorClient />
    </>
  );
}