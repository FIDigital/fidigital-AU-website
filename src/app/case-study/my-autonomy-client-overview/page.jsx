import MyAutonomyCaseStudy from "./MyAutonomyCaseStudy";

import { JsonLd, buildBreadcrumb } from "@/lib/jsonLd";

export const metadata = {
  title: "My Autonomy NDIS Plan Management – Zoho CRM Case Study | FI Digital",
  description: "How FI Digital helped MyAutonomy transform NDIS plan management with Zoho CRM — reducing manual tasks by 60%, integrating Gravity Forms, automating onboarding, and improving Participant satisfaction.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={buildBreadcrumb([{ name: "Home", path: "/" }, { name: "Case Studies", path: "/case-studies" }, { name: "My Autonomy Client Overview", path: "/case-study/my-autonomy-client-overview" }])} />
      <MyAutonomyCaseStudy />
    </>
  );
}
