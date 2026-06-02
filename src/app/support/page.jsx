import SupportClient from './SupportClient';

import { JsonLd, buildBreadcrumb, buildService } from "@/lib/jsonLd";

export const metadata = {
  title: "24/7 Global Support & Maintenance | FI Digital",
  description: "Never let your website down with FI Digital's 24/7 global support. Expert system administrators, 99.9% uptime guarantee, and comprehensive maintenance agreements."
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Support", path: "/support" }]),
          buildService({ name: "Support", serviceType: "Support", path: "/support" }),
        ]}
      />
      <SupportClient />
    </>
  );
}