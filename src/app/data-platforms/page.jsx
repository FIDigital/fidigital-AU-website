import DataPlatformsClient from './DataPlatformsClient';
import { JsonLd, buildBreadcrumb, buildService, buildFaqPage } from "@/lib/jsonLd";
export { metadata } from './meta';

const faqs = [
  { question: "What is a lakehouse architecture?", answer: "A lakehouse combines the best of data lakes (flexible storage, support for all data types) with the best of data warehouses (governance, ACID transactions, SQL querying). FI Digital deploys lakehouse platforms using Databricks Delta Lake, Snowflake, or Microsoft Fabric OneLake. The result is a single platform that serves data engineers, data scientists, BI analysts, and compliance teams." },
  { question: "Should I choose Databricks, Snowflake, or Microsoft Fabric?", answer: "It depends on your existing technology stack and analytical ambitions. If you are a Microsoft-stack enterprise (Azure AD, Power BI, Dynamics), Fabric is the natural fit. If you need advanced ML and data science, Databricks is strongest. If you need cross-organisational data sharing and multi-cloud flexibility, Snowflake excels. We assess your environment during Discovery and recommend the best fit." },
  { question: "How long does a data platform deployment take?", answer: "A foundational data platform (lakehouse design, initial pipelines, core dashboards) takes 10 to 14 weeks. More complex deployments with multiple source systems, compliance requirements, and advanced analytics may take 16 to 24 weeks. We scope the timeline during Discovery." },
  { question: "What about data governance and compliance?", answer: "Governance is built into every deployment. We implement data lineage, access controls, audit trails, and automated compliance reporting from day one. Our platforms satisfy APRA, ASIC, and ACSC requirements for financial services and healthcare clients." },
  { question: "Can you integrate with our existing BI tools?", answer: "Yes. We build on Power BI, Tableau, and Looker. If you already have BI investments, we integrate the new data platform as a source layer rather than replacing your existing tools." },
  { question: "What is the medallion architecture?", answer: "The medallion architecture (Bronze, Silver, Gold) is a data design pattern used in modern lakehouses. Bronze stores raw, ingested data. Silver stores cleaned and validated data. Gold stores business-ready, aggregated datasets for reporting and AI. Each layer adds quality and governance. This is the standard pattern we deploy on Databricks and Fabric." },
];

export default function DataPlatformsPage() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([
            { name: "Home", path: "/" },
            { name: "Data Platforms", path: "/data-platforms" },
          ]),
          buildService({
            name: "Data Platforms",
            serviceType: "Data Engineering",
            path: "/data-platforms",
            description: "Governed data platforms on Databricks, Snowflake, and Microsoft Fabric for Australian enterprise.",
          }),
          buildFaqPage(faqs),
        ]}
      />
      <DataPlatformsClient />
    </>
  );
}
