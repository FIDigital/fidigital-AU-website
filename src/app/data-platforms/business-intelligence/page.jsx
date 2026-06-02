import BIClient from "./BIClient";
import { JsonLd, buildBreadcrumb, buildService } from "@/lib/jsonLd";

export const metadata = {
  title: "Business Intelligence Consulting Australia | Power BI, Tableau | FI Digital",
  description:
    "BI dashboards and reporting that your board trusts. Power BI, Tableau, Looker. Connected to Databricks, Snowflake, and Microsoft Fabric. Decision-grade reporting for Australian enterprise. 200+ engineers.",
  alternates: { canonical: "https://fidigital.com.au/data-platforms/business-intelligence" },
  openGraph: {
    title: "Business Intelligence Consulting Australia | FI Digital",
    description:
      "Power BI, Tableau, Looker on governed data platforms. Dashboards your board trusts. Single metric definition. Sub-3-second load times.",
    url: "https://fidigital.com.au/data-platforms/business-intelligence",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([
            { name: "Home", path: "/" },
            { name: "Data Platforms", path: "/data-platforms" },
            { name: "Business Intelligence", path: "/data-platforms/business-intelligence" },
          ]),
          buildService({
            name: "Business Intelligence Consulting",
            serviceType: "Business Intelligence Consulting",
            path: "/data-platforms/business-intelligence",
            description: "Power BI, Tableau, and Looker dashboards on governed data platforms for Australian enterprise.",
          }),
        ]}
      />
      <BIClient />
    </>
  );
}
