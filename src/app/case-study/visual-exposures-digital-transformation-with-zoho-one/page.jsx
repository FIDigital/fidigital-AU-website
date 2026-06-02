import VEDigitalTransformationCaseStudy from "./VEDigitalTransformationCaseStudy";

import { JsonLd, buildBreadcrumb } from "@/lib/jsonLd";

export const metadata = {
  title: "Visual Exposure's Digital Transformation with Zoho One | FI Digital",
  description: "How FI Digital helped Visual Exposure unify three business units under Zoho One — reducing manual workflows by 60%, improving lead-to-deal conversion by 40%, and cutting operational costs by 25%.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Case Studies", path: "/case-studies" }, { name: "Visual Exposure's Digital Transformation With Zoho One", path: "/case-study/visual-exposures-digital-transformation-with-zoho-one" }])} />
      <VEDigitalTransformationCaseStudy />
    </>
  );
}
