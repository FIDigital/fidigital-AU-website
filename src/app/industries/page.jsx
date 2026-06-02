import IndustriesClient from "./IndustriesClient";
import { JsonLd, buildBreadcrumb, buildService } from "@/lib/jsonLd";

export { metadata } from "./meta";

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
          ]),
          buildService({
            name: "Industry Solutions",
            serviceType: "Technology Consulting",
            path: "/industries",
            description: "Industry-specific software, data, and AI solutions for Australian enterprise.",
          }),
        ]}
      />
      <IndustriesClient />
    </>
  );
}
