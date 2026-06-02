import ProductModClient from "./ProductModClient";

import { JsonLd, buildBreadcrumb, buildService } from "@/lib/jsonLd";

export const metadata = {
  title: 'Legacy Application Modernisation Australia | FI Digital',
  description: 'Modernise legacy applications without losing critical business logic. Monolith to microservices. Server-rendered to React. API layer creation. Database migration. 200+ engineers. No rip-and-replace.',
};

export default function ProductModPage() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Product Engineering", path: "/product-engineering" }, { name: "Product Modernisation", path: "/product-engineering/product-modernisation" }]),
          buildService({ name: "Product Modernisation", serviceType: "Product Modernisation", path: "/product-engineering/product-modernisation" }),
        ]}
      />
      <ProductModClient />
    </>
  );
}
