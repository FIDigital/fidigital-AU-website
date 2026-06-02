import BlogArticleClient from "./BlogArticleClient";

import { JsonLd, buildBreadcrumb } from "@/lib/jsonLd";

export const metadata = {
  title: "Common SEO Myths Busted - Part 1 | FI Digital",
  description: "Debunking common SEO myths, from Exact Match Domains to bulk redirects. Learn how to focus on real ranking signals for your Australian SMB.",
};

export default function BlogArticlePage() {
  return (
    <>
      <JsonLd data={buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: "Common SEO Myths Busted Part 1", path: "/common-seo-myths-busted-part-1" }])} />
      <BlogArticleClient />
    </>
  );
}
