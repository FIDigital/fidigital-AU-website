import MobileAppClient from './MobileAppClient';
import { JsonLd, buildBreadcrumb, buildService } from "@/lib/jsonLd";

export { metadata } from './meta';

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Mobile App Development", path: "/mobile-app-development" }]),
          buildService({ name: "Mobile App Development", serviceType: "Mobile App Development", path: "/mobile-app-development" }),
        ]}
      />
      <MobileAppClient />
    </>
  );
}