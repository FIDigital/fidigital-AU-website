import ChecklistClient from "./ChecklistClient";
import { JsonLd, buildBreadcrumb, buildOpenGraph } from "@/lib/jsonLd";

export const metadata = {
  title: "Zoho Modernisation Checklist — Free Download",
  description: "Download our free Zoho Modernisation Checklist: audit your Zoho setup, find automation gaps, check Australian data residency, and build a modernisation roadmap. For Australian mid-market and enterprise.",
  alternates: { canonical: "https://fidigital.com.au/resources/zoho-modernisation-checklist" },
  openGraph: buildOpenGraph({
    title: "Zoho Modernisation Checklist — Free Download",
    description: "Audit your Zoho setup, find automation gaps, and build a modernisation roadmap. Free checklist for Australian mid-market and enterprise.",
    path: "/resources/zoho-modernisation-checklist",
  }),
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumb([
          { name: "Home", path: "/" },
          { name: "Zoho Modernisation Checklist", path: "/resources/zoho-modernisation-checklist" },
        ])}
      />
      <ChecklistClient />
    </>
  );
}
