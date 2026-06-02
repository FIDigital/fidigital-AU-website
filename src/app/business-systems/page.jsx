import BusinessSystemsClient from "./BusinessSystemsClient";
import { JsonLd, buildBreadcrumb, buildService, buildFaqPage, buildOpenGraph } from "@/lib/jsonLd";

export const metadata = {
  title: 'Business Systems Modernisation Australia | Zoho CRM & Workflow Automation',
  alternates: { canonical: 'https://fidigital.com.au/business-systems' },
  openGraph: buildOpenGraph({ title: 'Business Systems Modernisation Australia | Zoho CRM & Workflow Automation', description: 'Modernise your business operations with Zoho CRM, Books, Inventory, workflow automation, API integration, and AI layering. Award-winning Zoho Premium Partner. 200+ projects delivered.', path: '/business-systems' }),
  description: 'Modernise your business operations with Zoho CRM, Books, Inventory, workflow automation, API integration, and AI layering. Award-winning Zoho Premium Partner. 200+ projects delivered.',
};

const faqs = [
  { question: "What is business systems modernisation?", answer: "It is the process of improving your existing operational systems (CRM, accounting, inventory, HR) without replacing them entirely. We clean up configurations, fix integrations, automate workflows, layer AI on top of manual processes, and connect systems so they share data. The result is a more efficient, more reliable operational backbone." },
  { question: "Do I need to replace my current CRM?", answer: "Not necessarily. If your CRM works but is messy (duplicate records, broken workflows, poor adoption), modernisation is the right approach. We clean and optimise your existing system. If your CRM is fundamentally not fit for purpose, we can recommend and implement an alternative, typically Zoho CRM for mid-market businesses." },
  { question: "How is FI Digital different from other Zoho partners?", answer: "We are a Zoho Premium Partner and Zoho Innovator of the Year with 200 plus implementations. But our real differentiator is cross-pillar capability. Most Zoho partners only do Zoho. We also build custom software, engineer data platforms, and deploy AI agents. This means your Zoho modernisation can include a Databricks data warehouse, an AI copilot, or a custom customer portal, all from one partner." },
  { question: "Can you modernise non-Zoho systems?", answer: "Yes. We modernise Salesforce, Microsoft Dynamics, Xero, MYOB, and custom legacy systems. The approach is the same: audit, clean, automate, integrate, optimise. For some clients, we also build bridges between Zoho and non-Zoho systems." },
  { question: "What does AI layering mean?", answer: "AI layering means adding AI capabilities on top of your existing business systems without replacing them. An AI agent that reads emails and creates CRM records. A copilot that summarises customer history. An automation that categorises support tickets. The AI enhances what you already have." },
];

export default function BusinessSystemsPage() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([
            { name: "Home", path: "/" },
            { name: "Business Systems", path: "/business-systems" },
          ]),
          buildService({
            name: "Business Systems Modernisation",
            serviceType: "Business Systems Modernisation",
            path: "/business-systems",
            description: "Zoho CRM, Books, Inventory, workflow automation, API integration, and AI layering. Zoho Premium Partner.",
          }),
          buildFaqPage(faqs),
        ]}
      />
      <BusinessSystemsClient />
    </>
  );
}
