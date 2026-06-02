import HealthcareClient from "./HealthcareClient";
import { JsonLd, buildBreadcrumb, buildService, buildOpenGraph } from "@/lib/jsonLd";

export const metadata = {
  title: 'AI, Data & Software for Healthcare & Aged Care Australia',
  alternates: { canonical: 'https://fidigital.com.au/healthcare-aged-care' },
  openGraph: buildOpenGraph({ title: 'AI, Data & Software for Healthcare & Aged Care Australia', description: 'Provider operations, rostering, care coordination apps, document automation, and data platforms for Australian healthcare and aged care providers. Australian data residency. ACSC compliant.', path: '/healthcare-aged-care' }),
  description: 'Provider operations, rostering, care coordination apps, document automation, and data platforms for Australian healthcare and aged care providers. Australian data residency. ACSC compliant.',
};

export default function HealthcarePage() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([
            { name: "Home", path: "/" },
            { name: "Healthcare & Aged Care", path: "/healthcare-aged-care" },
          ]),
          buildService({
            name: "AI, Data & Software for Healthcare & Aged Care",
            serviceType: "Technology Consulting",
            path: "/healthcare-aged-care",
            description: "Provider operations, rostering, care coordination apps, and data platforms for Australian healthcare and aged care. ACSC compliant.",
          }),
        ]}
      />
      <HealthcareClient />
    </>
  );
}
