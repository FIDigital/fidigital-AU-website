import FabricClient from "./FabricClient";
import { JsonLd, buildBreadcrumb, buildService } from "@/lib/jsonLd";

export const metadata = {
  title: "Microsoft Fabric Consulting Australia | Unified Analytics Platform",
  description:
    "Microsoft Fabric implementation for Australian enterprise. OneLake, data engineering, Power BI integration, real-time analytics. Azure Australia East. Microsoft-stack enterprises. APRA and ASIC compliant.",
  alternates: { canonical: "https://fidigital.com.au/data-platforms/microsoft-fabric" },
  openGraph: {
    title: "Microsoft Fabric Consulting Australia | FI Digital",
    description:
      "Unified analytics platform for Microsoft-stack enterprises. OneLake, Power BI native integration, real-time analytics, Azure OpenAI. Azure Australia East.",
    url: "https://fidigital.com.au/data-platforms/microsoft-fabric",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([
            { name: "Home", path: "/" },
            { name: "Data Platforms", path: "/data-platforms" },
            { name: "Microsoft Fabric Consulting", path: "/data-platforms/microsoft-fabric" },
          ]),
          buildService({
            name: "Microsoft Fabric Consulting",
            serviceType: "Microsoft Fabric Consulting",
            path: "/data-platforms/microsoft-fabric",
            description: "Microsoft Fabric implementation, OneLake, and Power BI integration on Azure Australia East.",
          }),
        ]}
      />
      <FabricClient />
    </>
  );
}
