import BlogArticleClient from "./BlogArticleClient";

import { JsonLd, buildBreadcrumb } from "@/lib/jsonLd";

export const metadata = {
  title: "Tips for Choosing an SEO Company in Melbourne | FI Digital",
  description: "Choosing the right SEO partner is critical for business growth. Discover expert tips for Melbourne business owners on selecting the best SEO agency.",
};

export default function BlogArticlePage() {
  return (
    <>
      <JsonLd data={buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: "Tips For Choosing A Company For Your SEO Melbourne Business Owners Should Know", path: "/tips-for-choosing-a-company-for-your-seo-melbourne-business-owners-should-know" }])} />
      <BlogArticleClient />
    </>
  );
}
