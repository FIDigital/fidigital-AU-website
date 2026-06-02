import CaseStudiesClient from "./CaseStudiesClient";
import { JsonLd, buildBreadcrumb, buildOpenGraph } from "@/lib/jsonLd";

export const metadata = {
  title: "Case Studies | Australian Enterprise AI, Data & Zoho Projects",
  alternates: { canonical: "https://fidigital.com.au/case-studies" },
  openGraph: buildOpenGraph({ title: "Case Studies | Australian Enterprise AI, Data & Zoho Projects", description: "Real results from Australian enterprises. Product engineering, data platforms, AI agents, and Zoho modernisation case studies with quantified outcomes.", path: "/case-studies" }),
  description:
    "Real results from Australian enterprises. Product engineering, data platforms, AI agents, and Zoho modernisation case studies with quantified outcomes.",
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumb([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
        ])}
      />
      <CaseStudiesClient />
    </>
  );
}
