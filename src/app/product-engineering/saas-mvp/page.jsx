import SaaSMVPClient from "./SaaSMVPClient";

import { JsonLd, buildBreadcrumb, buildService } from "@/lib/jsonLd";

export const metadata = {
  title: 'SaaS Development & MVP Builds Australia | FI Digital',
  description: 'Turn your software idea into a production-ready SaaS platform. From concept to paying customers in 12–16 weeks. Market validation, UX design, engineering, launch, and iteration. 200+ engineers. React, Python, FastAPI.',
};

export default function SaaSMVPPage() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Product Engineering", path: "/product-engineering" }, { name: "SaaS & MVP", path: "/product-engineering/saas-mvp" }]),
          buildService({ name: "SaaS & MVP", serviceType: "SaaS & MVP", path: "/product-engineering/saas-mvp" }),
        ]}
      />
      <SaaSMVPClient />
    </>
  );
}
