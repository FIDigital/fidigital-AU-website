import BlogArticleClient from "./BlogArticleClient";

import { JsonLd, buildBreadcrumb } from "@/lib/jsonLd";

export const metadata = {
  title: "Why Digital Marketing is Important for Australian SMEs | FI Digital",
  description: "Discover the critical role of digital marketing for Australian small and medium enterprises in driving growth, ROI, and brand authority.",
};

export default function BlogArticlePage() {
  return (
    <>
      <JsonLd data={buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: "Why Digital Marketing Is Important For Australian SMEs", path: "/why-digital-marketing-is-important-for-australian-smes" }])} />
      <BlogArticleClient />
    </>
  );
}
