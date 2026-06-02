import BlogArticleClient from "./BlogArticleClient";

import { JsonLd, buildBreadcrumb } from "@/lib/jsonLd";

export const metadata = {
  title: "Is Mobile Search The Next Big Thing? | FI Digital",
  description: "An analysis of the mobile search revolution, exploring how Facebook, Google, and Apple are shaping the future of digital discovery through chatbots and AMP.",
};

export default function BlogArticlePage() {
  return (
    <>
      <JsonLd data={buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: "Is Mobile Search The Next Big Thing", path: "/is-mobile-search-the-next-big-thing" }])} />
      <BlogArticleClient />
    </>
  );
}
