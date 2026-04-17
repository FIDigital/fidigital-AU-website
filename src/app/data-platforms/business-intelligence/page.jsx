import BIClient from "./BIClient";

export const metadata = {
  title: "Business Intelligence Consulting Australia | Power BI, Tableau | FI Digital",
  description:
    "BI dashboards and reporting that your board trusts. Power BI, Tableau, Looker. Connected to Databricks, Snowflake, and Microsoft Fabric. Decision-grade reporting for Australian enterprise. 200+ engineers.",
  alternates: { canonical: "https://www.fidigital.com.au/data-platforms/business-intelligence" },
  openGraph: {
    title: "Business Intelligence Consulting Australia | FI Digital",
    description:
      "Power BI, Tableau, Looker on governed data platforms. Dashboards your board trusts. Single metric definition. Sub-3-second load times.",
    url: "https://www.fidigital.com.au/data-platforms/business-intelligence",
  },
};

export default function Page() {
  return <BIClient />;
}
