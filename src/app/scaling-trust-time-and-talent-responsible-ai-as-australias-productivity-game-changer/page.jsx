import BlogArticleClient from "./BlogArticleClient";

import { JsonLd, buildBreadcrumb } from "@/lib/jsonLd";

export const metadata = {
  title: "Responsible AI as Australia’s Productivity Game-Changer | Blog | FI Digital",
  description: "Explore how responsible AI scales trust, time, and talent for Australian businesses. A guide to achieving productivity gains with integrity and clear guardrails.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: "Scaling Trust Time And Talent Responsible AI As Australia's Productivity Game Changer", path: "/scaling-trust-time-and-talent-responsible-ai-as-australias-productivity-game-changer" }])} />
      <BlogArticleClient />
    </>
  );
}
