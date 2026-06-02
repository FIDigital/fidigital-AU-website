import BlogArticleClient from "./BlogArticleClient";

import { JsonLd, buildBreadcrumb } from "@/lib/jsonLd";

export const metadata = {
  title: "SEO Melbourne Expert Advice: Blog Post Fundamentals | FI Digital",
  description: "Master the basics of SEO blog writing with expert advice from FI Digital Melbourne. Learn about planning, formatting, and content scheduling for better search rankings.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: "SEO Melbourne Expert Advice For Blog Post Writing Fundamentals 2", path: "/seo-melbourne-expert-advice-for-blog-post-writing-fundamentals-2" }])} />
      <BlogArticleClient />
    </>
  );
}
