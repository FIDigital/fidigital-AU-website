import ITSoftwareClient from './ITSoftwareClient';
import { JsonLd, buildBreadcrumb, buildService } from "@/lib/jsonLd";

export { metadata } from './meta';

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([{ name: "Home", path: "/" }, { name: "IT & Software", path: "/it-software" }]),
          buildService({ name: "IT & Software", serviceType: "IT & Software", path: "/it-software" }),
        ]}
      />
      <ITSoftwareClient />
    </>
  );
}