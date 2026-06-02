import VisualExposureCaseStudy from "./VisualExposureCaseStudy";

import { JsonLd, buildBreadcrumb } from "@/lib/jsonLd";

export const metadata = {
  title: "Transforming Visual Exposure's Operations with Zoho One | FI Digital",
  description: "How FI Digital helped Visual Exposure, a Melbourne signage company, replace disconnected legacy systems with a fully integrated, paperless Zoho One platform — delivering real-time profitability across three brands.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Case Studies", path: "/case-studies" }, { name: "Visual Exposure Zoho One Case Study", path: "/case-study/visual-exposure-zoho-one-case-study" }])} />
      <VisualExposureCaseStudy />
    </>
  );
}
