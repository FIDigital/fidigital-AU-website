import BlogArticleClient from "./BlogArticleClient";

import { JsonLd, buildBreadcrumb } from "@/lib/jsonLd";

export const metadata = {
  title: "SEO Trends and Evolution | FI Digital",
  description: "A look back at the major shifts in SEO, from voice search to mobile-first indexing, and how they shaped the modern search landscape.",
};

export default function BlogArticlePage() {
  return (
    <>
      <JsonLd data={buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: "What Changes Can You Experience In SEO In 2018", path: "/what-changes-can-you-experience-in-seo-in-2018" }])} />
      <BlogArticleClient />
    </>
  );
}
