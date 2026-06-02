import SnowflakeClient from "./SnowflakeClient";
import { JsonLd, buildBreadcrumb, buildService } from "@/lib/jsonLd";

export const metadata = {
  title: "Snowflake Consulting Australia | Cloud Data Platform Implementation",
  description:
    "Snowflake implementation for Australian enterprise. Cloud-native data warehousing, data sharing, governance, and cross-cloud analytics. AWS Sydney. Financial services. Healthcare. Resources. APRA compliant.",
  alternates: { canonical: "https://fidigital.com.au/data-platforms/snowflake" },
  openGraph: {
    title: "Snowflake Consulting Australia | FI Digital",
    description:
      "Cloud-native data warehousing on AWS Sydney. Data sharing, governed access, Snowpark analytics. APRA and ASIC compliant. 200+ engineers.",
    url: "https://fidigital.com.au/data-platforms/snowflake",
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
            { name: "Snowflake Consulting", path: "/data-platforms/snowflake" },
          ]),
          buildService({
            name: "Snowflake Consulting",
            serviceType: "Snowflake Consulting",
            path: "/data-platforms/snowflake",
            description: "Snowflake cloud data platform implementation, data sharing, and governance on AWS Sydney.",
          }),
        ]}
      />
      <SnowflakeClient />
    </>
  );
}
