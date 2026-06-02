import BlogArticleClient from "./BlogArticleClient";

import { JsonLd, buildBreadcrumb } from "@/lib/jsonLd";

export const metadata = {
  title: "Digital Agency for Small Business | FI Digital",
  description: "Why Australian small and medium businesses need superior digital marketing strategies to compete, build brand authority, and drive conversions.",
};

export default function BlogArticlePage() {
  return (
    <>
      <JsonLd data={buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: "Digital Agency For Small Business", path: "/digital-agency-for-small-business" }])} />
      <BlogArticleClient />
    </>
  );
}
