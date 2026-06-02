import BlogArticleClient from "./BlogArticleClient";

import { JsonLd, buildBreadcrumb } from "@/lib/jsonLd";

export const metadata = {
  title: "Questions To Ask Your Potential SEO Agency | FI Digital Melbourne",
  description: "Choosing the right SEO provider is crucial. Read our guide on the essential questions to ask any potential SEO agency before signing a contract.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: "Questions To Ask Your Potential SEO Agency", path: "/questions-to-ask-your-potential-seo-agency" }])} />
      <BlogArticleClient />
    </>
  );
}
