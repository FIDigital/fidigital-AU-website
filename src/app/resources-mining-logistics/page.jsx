import ResourcesClient from "./ResourcesClient";
import { JsonLd, buildBreadcrumb, buildService, buildOpenGraph } from "@/lib/jsonLd";

export const metadata = {
  title: 'AI, Data & Software for Mining, Resources & Logistics Australia',
  alternates: { canonical: 'https://fidigital.com.au/resources-mining-logistics' },
  openGraph: buildOpenGraph({ title: 'AI, Data & Software for Mining, Resources & Logistics Australia', description: 'Telemetry pipelines, predictive maintenance, dispatch optimisation, supply-chain analytics, and field operations apps for Australian resources, mining, and logistics companies.', path: '/resources-mining-logistics' }),
  description: 'Telemetry pipelines, predictive maintenance, dispatch optimisation, supply-chain analytics, and field operations apps for Australian resources, mining, and logistics companies.',
};

export default function ResourcesPage() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([
            { name: "Home", path: "/" },
            { name: "Resources, Mining & Logistics", path: "/resources-mining-logistics" },
          ]),
          buildService({
            name: "AI, Data & Software for Mining, Resources & Logistics",
            serviceType: "Technology Consulting",
            path: "/resources-mining-logistics",
            description: "Telemetry pipelines, predictive maintenance, dispatch optimisation, and supply-chain analytics for Australian resources and logistics.",
          }),
        ]}
      />
      <ResourcesClient />
    </>
  );
}
