import ContentClient from './ContentClient';

import { JsonLd, buildBreadcrumb, buildService } from "@/lib/jsonLd";

export const metadata = {
  title: "Content Strategy & Copywriting | FI Digital",
  description: "Content is the King. We help you find the right words to strike a chord with your users through strategic storytelling, SEO optimization, and curated copywriting."
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Content", path: "/content" }]),
          buildService({ name: "Content", serviceType: "Content", path: "/content" }),
        ]}
      />
      <ContentClient />
    </>
  );
}