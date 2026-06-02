import WebAppClient from "./WebAppClient";

import { JsonLd, buildBreadcrumb, buildService } from "@/lib/jsonLd";

export const metadata = {
  title: 'Web Application Development Australia | Custom Web Apps | FI Digital',
  description: 'Custom web applications built with React, Python, and FastAPI. Customer portals, internal tools, SaaS dashboards, multi-tenant platforms. 200+ engineers. Australian data residency.',
};

export default function WebAppPage() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Product Engineering", path: "/product-engineering" }, { name: "Web Applications", path: "/product-engineering/web-applications" }]),
          buildService({ name: "Web Applications", serviceType: "Web Applications", path: "/product-engineering/web-applications" }),
        ]}
      />
      <WebAppClient />
    </>
  );
}
