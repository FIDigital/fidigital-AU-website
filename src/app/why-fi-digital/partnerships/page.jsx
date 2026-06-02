import PartnershipsClient from "./PartnershipsClient";

import { JsonLd, buildBreadcrumb, buildService } from "@/lib/jsonLd";

export const metadata = {
  title: "Technology Partnerships | Zoho, AWS, Azure, Databricks | FI Digital Australia",
  description: "Zoho Premium Partner. AWS Partner. Microsoft Partner. Databricks Partner. Certified engineers across all major cloud and data platforms.",
  openGraph: {
    title: "Technology Partnerships | FI Digital",
    description: "Zoho Premium Partner. AWS Partner. Microsoft Partner. Databricks Partner. Certified engineers across all major cloud and data platforms. FI Digital Australia.",
    url: "https://fidigital.com.au/why-fi-digital/partnerships",
    siteName: "FI Digital",
    locale: "en_AU",
    type: "website",
  },
};

export default function PartnershipsPage() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Why FI Digital", path: "/why-fi-digital" }, { name: "Partnerships", path: "/why-fi-digital/partnerships" }]),
          buildService({ name: "Partnerships", serviceType: "Partnerships", path: "/why-fi-digital/partnerships" }),
        ]}
      />
      <PartnershipsClient />
    </>
  );
}
