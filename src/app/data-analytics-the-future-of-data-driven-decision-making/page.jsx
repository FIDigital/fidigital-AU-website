import BlogArticleClient from "./BlogArticleClient";

import { JsonLd, buildBreadcrumb } from "@/lib/jsonLd";

export const metadata = {
  title: "Data Analytics: The Future of Data-Driven Decision Making | FI Digital",
  description: "Learn how data-driven insights are transforming business decision-making and how to implement a successful data analytics strategy.",
};

export default function BlogArticlePage() {
  return (
    <>
      <JsonLd data={buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: "Data Analytics The Future Of Data Driven Decision Making", path: "/data-analytics-the-future-of-data-driven-decision-making" }])} />
      <BlogArticleClient />
    </>
  );
}
