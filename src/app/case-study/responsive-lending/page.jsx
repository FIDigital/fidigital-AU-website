import ResponsiveLendingCaseStudy from "./ResponsiveLendingCaseStudy";

import { JsonLd, buildBreadcrumb } from "@/lib/jsonLd";

export const metadata = {
  title: "Responsive Lending Zoho One Case Study | FI Digital",
  description: "How FI Digital helped Responsive Lending replace costly custom software with Zoho One — reducing loan application processing time by 70%, achieving full regulatory compliance, and integrating Proviso, Equifax, and Zoho Social.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Case Studies", path: "/case-studies" }, { name: "Responsive Lending", path: "/case-study/responsive-lending" }])} />
      <ResponsiveLendingCaseStudy />
    </>
  );
}
