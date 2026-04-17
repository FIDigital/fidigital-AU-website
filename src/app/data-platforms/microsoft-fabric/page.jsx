import FabricClient from "./FabricClient";

export const metadata = {
  title: "Microsoft Fabric Consulting Australia | Unified Analytics | FI Digital",
  description:
    "Microsoft Fabric implementation for Australian enterprise. OneLake, data engineering, Power BI integration, real-time analytics. Azure Australia East. Microsoft-stack enterprises. APRA and ASIC compliant.",
  alternates: { canonical: "https://www.fidigital.com.au/data-platforms/microsoft-fabric" },
  openGraph: {
    title: "Microsoft Fabric Consulting Australia | FI Digital",
    description:
      "Unified analytics platform for Microsoft-stack enterprises. OneLake, Power BI native integration, real-time analytics, Azure OpenAI. Azure Australia East.",
    url: "https://www.fidigital.com.au/data-platforms/microsoft-fabric",
  },
};

export default function Page() {
  return <FabricClient />;
}
