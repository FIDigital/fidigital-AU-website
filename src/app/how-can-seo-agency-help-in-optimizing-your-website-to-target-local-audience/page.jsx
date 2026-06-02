import BlogArticleClient from "./BlogArticleClient";

import { JsonLd, buildBreadcrumb } from "@/lib/jsonLd";

export const metadata = {
  title: "Optimizing Your Website To Target Local Audience | FI Digital",
  description: "Learn how a Melbourne SEO agency can help your business dominate local search results using geo-targeting and specialized local SEO tactics.",
};

export default function BlogArticlePage() {
  return (
    <>
      <JsonLd data={buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: "How Can SEO Agency Help In Optimizing Your Website To Target Local Audience", path: "/how-can-seo-agency-help-in-optimizing-your-website-to-target-local-audience" }])} />
      <BlogArticleClient />
    </>
  );
}
