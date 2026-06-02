import SafeGaugeCaseStudy from "./SafeGaugeCaseStudy";

import { JsonLd, buildBreadcrumb } from "@/lib/jsonLd";

export const metadata = {
  title: "Safe Gauge Enhances Operations Using Zoho Creator | FI Digital",
  description: "How FI Digital used Zoho Creator to centralise SafeGauge's warranty management, asset tracking, and distributor operations — integrating Cin7 and AWS for a unified, self-service stakeholder platform.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Case Studies", path: "/case-studies" }, { name: "Safe Gauge Enhances Operations Using Zoho Creator", path: "/case-study/safe-gauge-enhances-operations-using-zoho-creator" }])} />
      <SafeGaugeCaseStudy />
    </>
  );
}
