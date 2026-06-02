import WebAppClient from './WebAppClient';

import { JsonLd, buildBreadcrumb, buildService } from "@/lib/jsonLd";

export const metadata = {
  title: "Web App Development | FI Digital",
  description: "Custom web application development services tailored to your business needs. Scalable, secure, and high-performance web solutions by FI Digital."
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Web App Development", path: "/web-app-development" }]),
          buildService({ name: "Web App Development", serviceType: "Web App Development", path: "/web-app-development" }),
        ]}
      />
      <WebAppClient />
    </>
  );
}