import BlueNRGCaseStudy from "./BlueNRGCaseStudy";

import { JsonLd, buildBreadcrumb } from "@/lib/jsonLd";

export const metadata = {
  title: "BlueNRG Zoho One Case Study | FI Digital",
  description: "How FI Digital helped BlueNRG — Australia's 100% locally-owned energy retailer — optimise their Zoho One suite with CRM automation, marketing journeys, contract signing, and a unified customer 360 platform.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Case Studies", path: "/case-studies" }, { name: "Bluenrg Zoho One Case Study", path: "/case-study/bluenrg-zoho-one-case-study" }])} />
      <BlueNRGCaseStudy />
    </>
  );
}
