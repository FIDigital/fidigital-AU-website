import DrovaCaseStudy from "./DrovaCaseStudy";

import { JsonLd, buildBreadcrumb } from "@/lib/jsonLd";

export const metadata = {
  title: "Drova's Journey from Salesforce to Zoho CRMPlus | Case Study | FI Digital",
  description:
    "Learn how FI Digital helped Drova, a fast-growing SaaS company, replace Salesforce complexity with Zoho CRMPlus — delivering seamless integrations, real-time insights, and global scalability.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Case Studies", path: "/case-studies" }, { name: "Drova Zoho Crm Plus Case Study", path: "/case-study/drova-zoho-crm-plus-case-study" }])} />
      <DrovaCaseStudy />
    </>
  );
}
