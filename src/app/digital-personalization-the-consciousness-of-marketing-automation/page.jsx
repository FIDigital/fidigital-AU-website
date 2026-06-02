import BlogArticleClient from "./BlogArticleClient";

import { JsonLd, buildBreadcrumb } from "@/lib/jsonLd";

export const metadata = {
  title: "Digital Personalization & Marketing Automation | FI Digital",
  description: "Explore how digital personalization acts as the consciousness of marketing automation, driving ROI, sales, and brand loyalty through tailored user experiences.",
};

export default function BlogArticlePage() {
  return (
    <>
      <JsonLd data={buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: "Digital Personalization The Consciousness Of Marketing Automation", path: "/digital-personalization-the-consciousness-of-marketing-automation" }])} />
      <BlogArticleClient />
    </>
  );
}
