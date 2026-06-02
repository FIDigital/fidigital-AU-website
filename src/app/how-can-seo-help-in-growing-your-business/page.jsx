import BlogArticleClient from "./BlogArticleClient";

import { JsonLd, buildBreadcrumb } from "@/lib/jsonLd";

export const metadata = {
  title: "How Can SEO Help in Growing Your Business? | FI Digital Melbourne",
  description: "Learn how professional SEO services in Melbourne can drive traffic, generate leads, and enhance brand visibility to grow your local business.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: "How Can SEO Help In Growing Your Business", path: "/how-can-seo-help-in-growing-your-business" }])} />
      <BlogArticleClient />
    </>
  );
}
