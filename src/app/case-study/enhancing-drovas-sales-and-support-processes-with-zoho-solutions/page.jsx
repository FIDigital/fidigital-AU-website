import DrovaSalesSupportCaseStudy from "./DrovaSalesSupportCaseStudy";

import { JsonLd, buildBreadcrumb } from "@/lib/jsonLd";

export const metadata = {
  title: "Enhancing Drova's Sales & Support with Zoho Solutions | FI Digital",
  description: "How FI Digital implemented Zoho CRMPlus for Drova — boosting workflow automation by 60%, reducing invoice processing by 50%, and unifying AU/UK sales operations with Xero, Braze and Segment integrations.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Case Studies", path: "/case-studies" }, { name: "Enhancing Drova's Sales And Support Processes With Zoho Solutions", path: "/case-study/enhancing-drovas-sales-and-support-processes-with-zoho-solutions" }])} />
      <DrovaSalesSupportCaseStudy />
    </>
  );
}
