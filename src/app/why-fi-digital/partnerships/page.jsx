import PartnershipsClient from "./PartnershipsClient";

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
  return <PartnershipsClient />;
}
