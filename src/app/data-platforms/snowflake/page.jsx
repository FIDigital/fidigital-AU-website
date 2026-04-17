import SnowflakeClient from "./SnowflakeClient";

export const metadata = {
  title: "Snowflake Consulting Australia | Cloud Data Warehouse | FI Digital",
  description:
    "Snowflake implementation for Australian enterprise. Cloud-native data warehousing, data sharing, governance, and cross-cloud analytics. AWS Sydney. Financial services. Healthcare. Resources. APRA compliant.",
  alternates: { canonical: "https://www.fidigital.com.au/data-platforms/snowflake" },
  openGraph: {
    title: "Snowflake Consulting Australia | FI Digital",
    description:
      "Cloud-native data warehousing on AWS Sydney. Data sharing, governed access, Snowpark analytics. APRA and ASIC compliant. 200+ engineers.",
    url: "https://www.fidigital.com.au/data-platforms/snowflake",
  },
};

export default function Page() {
  return <SnowflakeClient />;
}
