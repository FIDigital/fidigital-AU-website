import BlogArticleClient from "./BlogArticleClient";

import { JsonLd, buildBreadcrumb } from "@/lib/jsonLd";

export const metadata = {
  title: "What is Marketing Automation? | FI Digital",
  description: "Explore the benefits of marketing automation and how to prepare your company for a successful implementation.",
};

export default function BlogArticlePage() {
  return (
    <>
      <JsonLd data={buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: "What Is Marketing Automation", path: "/what-is-marketing-automation" }])} />
      <BlogArticleClient />
    </>
  );
}
