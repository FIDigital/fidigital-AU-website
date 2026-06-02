import BlogArticleClient from "./BlogArticleClient";

import { JsonLd, buildBreadcrumb } from "@/lib/jsonLd";

export const metadata = {
  title: "Taking Cues from Apple's WWDC 2016 | FI Digital",
  description: "Analyzing the major announcements from WWDC 2016 and their implications for Australian SMEs, from iMessage apps to Siri's evolution.",
};

export default function BlogArticlePage() {
  return (
    <>
      <JsonLd data={buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: "Takings Cues From Apple's WWDC 2016", path: "/takings-cues-from-apples-wwdc-2016" }])} />
      <BlogArticleClient />
    </>
  );
}
