import DatabricksClient from "./DatabricksClient";
import { JsonLd, buildBreadcrumb, buildService, buildFaqPage } from "@/lib/jsonLd";

export const metadata = {
  title: "Databricks Consulting Australia | Lakehouse, Delta Lake, Unity Catalog",
  description:
    "Databricks implementation, medallion architecture, Delta Lake, Unity Catalog, MLflow, and Databricks SQL. Governed data platforms on Azure Australia East. 200+ engineers. APRA and ASIC compliant.",
  alternates: { canonical: "https://fidigital.com.au/data-platforms/databricks" },
  openGraph: {
    title: "Databricks Consulting Australia | FI Digital",
    description:
      "Databricks lakehouse platforms on Azure Australia East. Medallion architecture, Unity Catalog governance, MLflow ML pipelines. APRA and ASIC compliant.",
    url: "https://fidigital.com.au/data-platforms/databricks",
  },
};

const faqs = [
  { question: "What is Databricks used for?", answer: "Databricks is a unified data analytics platform used for large-scale data engineering, data science and machine learning, SQL analytics, and data governance. In the Australian enterprise market it is predominantly deployed for lakehouse architecture, replacing or augmenting legacy data warehouses." },
  { question: "What is the difference between Databricks and Snowflake?", answer: "Databricks is stronger for data engineering, machine learning, and streaming workloads. Snowflake is stronger for SQL analytics, data sharing across organisations, and multi-cloud flexibility. Many Australian enterprises use both — Databricks for data engineering and ML, Snowflake for analytical querying." },
  { question: "Does Databricks run in Australian data centres?", answer: "Yes. FI Digital deploys Databricks on Azure Australia East (New South Wales), which satisfies Australian data residency requirements for most regulated industries including financial services and healthcare." },
  { question: "What is the medallion architecture?", answer: "The medallion architecture (Bronze, Silver, Gold) is a data design pattern for lakehouses. Bronze stores raw ingested data. Silver applies cleaning and validation. Gold produces business-ready datasets for reporting and AI. Data lineage flows from Bronze through Silver to Gold, providing full auditability." },
  { question: "How long does a Databricks implementation take?", answer: "A foundational Databricks deployment takes 10 to 14 weeks. Larger deployments may take 16 to 24 weeks. Initial dashboards are typically live by Week 8." },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([
            { name: "Home", path: "/" },
            { name: "Data Platforms", path: "/data-platforms" },
            { name: "Databricks Consulting", path: "/data-platforms/databricks" },
          ]),
          buildService({
            name: "Databricks Consulting",
            serviceType: "Databricks Consulting",
            path: "/data-platforms/databricks",
            description: "Databricks lakehouse implementation, medallion architecture, Delta Lake, and Unity Catalog on Azure Australia East.",
          }),
          buildFaqPage(faqs),
        ]}
      />
      <DatabricksClient />
    </>
  );
}
