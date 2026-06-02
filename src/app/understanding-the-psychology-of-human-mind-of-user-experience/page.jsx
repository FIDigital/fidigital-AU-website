import BlogArticleClient from "./BlogArticleClient";

import { JsonLd, buildBreadcrumb } from "@/lib/jsonLd";

export const metadata = {
  title: "Understanding the Psychology of UX | FI Digital Insights",
  description: "Explore how human psychology influences user experience design, from mental models and visceral reactions to Hick's Law and social influence.",
};

export default function UXPsychologyPage() {
  return (
    <>
      <JsonLd data={buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: "Understanding The Psychology Of Human Mind Of User Experience", path: "/understanding-the-psychology-of-human-mind-of-user-experience" }])} />
      <BlogArticleClient />
    </>
  );
}
