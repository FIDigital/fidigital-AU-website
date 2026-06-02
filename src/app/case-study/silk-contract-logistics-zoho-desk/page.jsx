import SilkDeskCaseStudy from "./SilkDeskCaseStudy";

import { JsonLd, buildBreadcrumb } from "@/lib/jsonLd";

export const metadata = {
  title: "Silk Contract Logistics Zoho Desk Case Study | FI Digital",
  description: "How FI Digital implemented Zoho Desk for Silk Contract Logistics — boosting employee productivity by 27% and cutting query resolution times by 25% across all Australian facilities.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Case Studies", path: "/case-studies" }, { name: "Silk Contract Logistics Zoho Desk", path: "/case-study/silk-contract-logistics-zoho-desk" }])} />
      <SilkDeskCaseStudy />
    </>
  );
}
