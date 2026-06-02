import BlogArticleClient from "./BlogArticleClient";

import { JsonLd, buildBreadcrumb } from "@/lib/jsonLd";

export const metadata = {
  title: "Glimpse into the Digital Marketing Scenario | FI Digital",
  description: "A forward-looking analysis of digital marketing trends, exploring IoT, location-based marketing, big data, and the future of personalized user experiences.",
};

export default function BlogArticlePage() {
  return (
    <>
      <JsonLd data={buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: "Glimpse Into The Digital Marketing Scenario A Year From Now", path: "/glimpse-into-the-digital-marketing-scenario-a-year-from-now" }])} />
      <BlogArticleClient />
    </>
  );
}
