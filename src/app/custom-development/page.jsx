import CustomDevelopmentClient from './CustomDevelopmentClient';
import { JsonLd, buildBreadcrumb, buildService } from "@/lib/jsonLd";

export { metadata } from './meta';

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Custom Development", path: "/custom-development" }]),
          buildService({ name: "Custom Development", serviceType: "Custom Development", path: "/custom-development" }),
        ]}
      />
      <CustomDevelopmentClient />
    </>
  );
}