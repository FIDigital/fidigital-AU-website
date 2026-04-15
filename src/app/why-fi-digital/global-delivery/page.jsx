import DeliveryClient from "./DeliveryClient";

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
  return <DeliveryClient />;
}
