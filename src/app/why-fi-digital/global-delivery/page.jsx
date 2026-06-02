import DeliveryClient from "./DeliveryClient";

import { JsonLd, buildBreadcrumb, buildService } from "@/lib/jsonLd";

export const metadata = {
  title: "Global Engineering Delivery | Melbourne, Sydney, India, UAE, UK | FI Digital",
  description: "200+ engineers across Melbourne, Sydney, India, UAE, and UK. Australian-led engagement. Indian engineering depth. Contractual SLAs.",
  openGraph: {
    title: "Global Engineering Delivery | FI Digital",
    description: "200+ engineers across Melbourne, Sydney, India, UAE, and UK. Australian-led engagement. Indian engineering depth. Contractual SLAs.",
    url: "https://fidigital.com.au/why-fi-digital/global-delivery",
    siteName: "FI Digital",
    locale: "en_AU",
    type: "website",
  },
};

export default function GlobalDeliveryPage() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Why FI Digital", path: "/why-fi-digital" }, { name: "Global Delivery", path: "/why-fi-digital/global-delivery" }]),
          buildService({ name: "Global Delivery", serviceType: "Global Delivery", path: "/why-fi-digital/global-delivery" }),
        ]}
      />
      <DeliveryClient />
    </>
  );
}
