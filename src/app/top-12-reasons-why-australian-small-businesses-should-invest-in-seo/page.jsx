import BlogArticleClient from "./BlogArticleClient";

import { JsonLd, buildBreadcrumb } from "@/lib/jsonLd";

export const metadata = {
  title: "Top 12 Reasons Why Australian Small Businesses Should Invest in SEO | FI Digital",
  description: "Discover why SEO is a critical investment for Australian SMBs to drive growth, brand visibility, and ROI.",
};

export default function BlogArticlePage() {
  return (
    <>
      <JsonLd data={buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: "Top 12 Reasons Why Australian Small Businesses Should Invest In SEO", path: "/top-12-reasons-why-australian-small-businesses-should-invest-in-seo" }])} />
      <BlogArticleClient />
    </>
  );
}
