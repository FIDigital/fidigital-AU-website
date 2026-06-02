import MobileAppClient from "./MobileAppClient";

import { JsonLd, buildBreadcrumb, buildService } from "@/lib/jsonLd";

export const metadata = {
  title: 'Mobile App Development Australia | iOS & Android | React Native | FI Digital',
  description: 'Native iOS and Android apps built with React Native. Offline capability, biometric auth, real-time sync. Field service, healthcare, logistics, and enterprise mobile apps. 200+ engineers. Australian data residency.',
};

export default function MobileAppPage() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Product Engineering", path: "/product-engineering" }, { name: "Mobile Applications", path: "/product-engineering/mobile-applications" }]),
          buildService({ name: "Mobile Applications", serviceType: "Mobile Applications", path: "/product-engineering/mobile-applications" }),
        ]}
      />
      <MobileAppClient />
    </>
  );
}
