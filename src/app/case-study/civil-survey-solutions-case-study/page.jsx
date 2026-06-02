import CivilSurveyCaseStudy from "./CivilSurveyCaseStudy";

import { JsonLd, buildBreadcrumb } from "@/lib/jsonLd";

export const metadata = {
  title: "Civil Survey Solutions Zoho CRM Integration Case Study | FI Digital",
  description: "How FI Digital helped Civil Survey Solutions — an Autodesk Gold Partner — solve complex Zoho CRM third-party integrations and payment configurations, enabling end-to-end data management on a single platform.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Case Studies", path: "/case-studies" }, { name: "Civil Survey Solutions Case Study", path: "/case-study/civil-survey-solutions-case-study" }])} />
      <CivilSurveyCaseStudy />
    </>
  );
}
