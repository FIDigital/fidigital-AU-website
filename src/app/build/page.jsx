import BuildClient from './BuildClient';

import { JsonLd, buildBreadcrumb, buildService } from "@/lib/jsonLd";

export const metadata = {
  title: "Engineering & Development Excellence | FI Digital",
  description: "Build your brand's unique identity with FI Digital. We specialize in bespoke builds, seamless integrations, and rigorous quality standards like WCAG 2.0 and Section 508."
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Build", path: "/build" }]),
          buildService({ name: "Build", serviceType: "Build", path: "/build" }),
        ]}
      />
      <BuildClient />
    </>
  );
}