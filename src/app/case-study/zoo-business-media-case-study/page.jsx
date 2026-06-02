import ZooCaseStudy from "./ZooCaseStudy";

import { JsonLd, buildBreadcrumb } from "@/lib/jsonLd";

export const metadata = {
  title: "Zoo Business Media Zoho CRM Case Study | FI Digital",
  description: "How FI Digital helped Zoo Business Media migrate from their legacy CRM to Zoho CRM — unifying lead management, automating workflows, and improving operational efficiency across their digital media brands.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Case Studies", path: "/case-studies" }, { name: "Zoo Business Media Case Study", path: "/case-study/zoo-business-media-case-study" }])} />
      <ZooCaseStudy />
    </>
  );
}
