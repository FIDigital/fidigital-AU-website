import BlogArticleClient from "./BlogArticleClient";

import { JsonLd, buildBreadcrumb } from "@/lib/jsonLd";

export const metadata = {
  title: "Do .Melbourne or .Sydney Domains Work? | FI Digital",
  description: "Debunking myths about local TLD extensions. Discover why .Melbourne and .Sydney domains have negligible SEO benefits and how to choose the right extension.",
};

export default function BlogArticlePage() {
  return (
    <>
      <JsonLd data={buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: "Does Local TLD Extensions Work", path: "/does-local-tld-extensions-work" }])} />
      <BlogArticleClient />
    </>
  );
}
