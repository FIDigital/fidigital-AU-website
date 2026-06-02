import SilkExpenseCaseStudy from "./SilkExpenseCaseStudy";

import { JsonLd, buildBreadcrumb } from "@/lib/jsonLd";

export const metadata = {
  title: "Silk Contract Logistics Zoho Expense Case Study | FI Digital",
  description: "How FI Digital implemented Zoho Expense for Silk Contract Logistics — increasing expense management efficiency by 87.5% and giving the Finance team complete visibility over approvals and reimbursements.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Case Studies", path: "/case-studies" }, { name: "Silk Contract Logistics Zoho Expense", path: "/case-study/silk-contract-logistics-zoho-expense" }])} />
      <SilkExpenseCaseStudy />
    </>
  );
}
