import ContactClient from "./ContactClient";
import { JsonLd, buildBreadcrumb } from "@/lib/jsonLd";
export { metadata } from "./meta";

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumb([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <ContactClient />
    </>
  );
}
