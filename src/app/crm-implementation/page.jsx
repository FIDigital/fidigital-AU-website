import CrmImplementationClient from './CrmImplementationClient';
import { JsonLd, buildBreadcrumb, buildService, buildFaqPage } from "@/lib/jsonLd";
export { metadata } from './meta';

const faqs = [
  { question: "How much does Zoho CRM implementation cost?", answer: "Most Australian SME implementations run between $15,000 and $60,000 depending on integrations, custom fields, automation depth, and user count. Enterprise implementations with multi-module integration (Books, Inventory, Creator) typically run $60,000-$180,000. We provide fixed-price quotes after a free 30-minute scoping call." },
  { question: "How long does Zoho CRM implementation take?", answer: "A standard SME implementation runs 6-8 weeks. Enterprise multi-module rollouts run 10-16 weeks. We provide a written timeline before any work starts." },
  { question: "Can you migrate us from Salesforce or HubSpot to Zoho CRM?", answer: "Yes. We have completed migrations from Salesforce, HubSpot, Pipedrive, Microsoft Dynamics, and legacy on-premise CRMs. We map data fields, preserve history, and run parallel testing before cutover." },
  { question: "Will my data be in Australia?", answer: "Yes. Zoho operates Australian data centres and your data can be hosted entirely within Australia. We confirm data residency at the start of every engagement." },
  { question: "Do you provide training and support after go-live?", answer: "Yes. Every implementation includes user training and admin documentation. Ongoing support retainers are available from $1,500 per month." },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([
            { name: "Home", path: "/" },
            { name: "Business Systems", path: "/business-systems" },
            { name: "CRM Implementation", path: "/crm-implementation" },
          ]),
          buildService({
            name: "Zoho CRM Implementation",
            serviceType: "CRM Implementation",
            path: "/crm-implementation",
            description: "Zoho CRM setup, migration, and integration for Australian businesses. From kickoff to go-live in 6-8 weeks.",
          }),
          buildFaqPage(faqs),
        ]}
      />
      <CrmImplementationClient />
    </>
  );
}
