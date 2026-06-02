import BlogArticleClient from "./BlogArticleClient";

import { JsonLd, buildBreadcrumb } from "@/lib/jsonLd";

export const metadata = {
  title: "Unlocking the Power of Zoho for Australian Businesses | Blog | FI Digital",
  description: "Discover how Zoho's cloud-based suite transforms business operations, CRM, and productivity. Learn why partnering with an expert is the key to scaling in Australia.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: "Unlocking The Power Of Zoho For Australian Businesses", path: "/unlocking-the-power-of-zoho-for-australian-businesses" }])} />
      <BlogArticleClient />
    </>
  );
}
