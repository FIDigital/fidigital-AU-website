import BlogArticleClient from "./BlogArticleClient";

import { JsonLd, buildBreadcrumb } from "@/lib/jsonLd";

export const metadata = {
  title: "Top Tools for Cloud Services in 2026 | Blog | FI Digital",
  description: "Learn about the top cloud tools we use at FI Digital to manage agile projects, integrate accounting, and gain deep business insights.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: "Tools Of Cloud Services", path: "/tools-of-cloud-services" }])} />
      <BlogArticleClient />
    </>
  );
}
