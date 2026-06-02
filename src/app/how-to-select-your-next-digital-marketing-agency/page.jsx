import BlogArticleClient from "./BlogArticleClient";

import { JsonLd, buildBreadcrumb } from "@/lib/jsonLd";

export const metadata = {
  title: "How to Select Your Next Digital Marketing Agency | FI Digital",
  description: "An ultimate guide to selecting the right digital marketing agency for your business, featuring a 9-step selection framework.",
};

export default function BlogArticlePage() {
  return (
    <>
      <JsonLd data={buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: "How To Select Your Next Digital Marketing Agency", path: "/how-to-select-your-next-digital-marketing-agency" }])} />
      <BlogArticleClient />
    </>
  );
}
