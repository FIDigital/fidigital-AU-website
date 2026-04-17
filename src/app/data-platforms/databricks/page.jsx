import DatabricksClient from "./DatabricksClient";

export const metadata = {
  title: "Databricks Consulting Australia | Lakehouse Architecture | FI Digital",
  description:
    "Databricks implementation, medallion architecture, Delta Lake, Unity Catalog, MLflow, and Databricks SQL. Governed data platforms on Azure Australia East. 200+ engineers. APRA and ASIC compliant.",
  alternates: { canonical: "https://www.fidigital.com.au/data-platforms/databricks" },
  openGraph: {
    title: "Databricks Consulting Australia | FI Digital",
    description:
      "Databricks lakehouse platforms on Azure Australia East. Medallion architecture, Unity Catalog governance, MLflow ML pipelines. APRA and ASIC compliant.",
    url: "https://www.fidigital.com.au/data-platforms/databricks",
  },
};

export default function Page() {
  return <DatabricksClient />;
}
