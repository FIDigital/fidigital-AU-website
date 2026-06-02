import SilkLogisticsCaseStudy from "./SilkLogisticsCaseStudy";

import { JsonLd, buildBreadcrumb } from "@/lib/jsonLd";

export const metadata = {
  title: "Silk Logistics Zoho One Digital Transformation | Case Study | FI Digital",
  description:
    "How FI Digital helped Silk Logistics — Australia's leading port-to-door provider — replace manual siloed systems with Zoho One across 30+ warehouses, unifying CRM, Desk, Projects, Expense, and Analytics.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Case Studies", path: "/case-studies" }, { name: "Silk Logistics Zoho One Case Study", path: "/case-study/silk-logistics-zoho-one-case-study" }])} />
      <SilkLogisticsCaseStudy />
    </>
  );
}
