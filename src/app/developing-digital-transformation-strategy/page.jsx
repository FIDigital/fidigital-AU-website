import BlogArticleClient from "./BlogArticleClient";

import { JsonLd, buildBreadcrumb } from "@/lib/jsonLd";

export const metadata = {
  title: "Developing Digital Transformation Strategy | FI Digital Melbourne",
  description: "A comprehensive guide to building a technology-enabled business model. Learn the steps, benefits, and key factors of successful digital transformation.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: "Developing Digital Transformation Strategy", path: "/developing-digital-transformation-strategy" }])} />
      <BlogArticleClient />
    </>
  );
}
