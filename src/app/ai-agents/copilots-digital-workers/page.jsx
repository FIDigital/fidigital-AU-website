import CopilotClient from "./CopilotClient";
import { JsonLd, buildBreadcrumb, buildService, buildOpenGraph } from "@/lib/jsonLd";

export const metadata = {
  title: 'AI Copilots & Digital Workers Australia | Enterprise AI Assistants',
  alternates: { canonical: 'https://fidigital.com.au/ai-agents/copilots-digital-workers' },
  openGraph: buildOpenGraph({ title: 'AI Copilots & Digital Workers Australia | Enterprise AI Assistants', description: 'AI copilots embedded in your team workflows and digital workers that handle high-volume repetitive tasks. Finance, legal, compliance, and operations copilots. Built on Claude and GPT-4o. Australian data residency.', path: '/ai-agents/copilots-digital-workers' }),
  description: 'AI copilots embedded in your team workflows and digital workers that handle high-volume repetitive tasks. Finance, legal, compliance, and operations copilots. Built on Claude and GPT-4o. Australian data residency.',
};

export default function CopilotPage() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([
            { name: "Home", path: "/" },
            { name: "AI Agents", path: "/ai-agents" },
            { name: "Copilots & Digital Workers", path: "/ai-agents/copilots-digital-workers" },
          ]),
          buildService({
            name: "AI Copilots & Digital Workers",
            serviceType: "AI Assistant Development",
            path: "/ai-agents/copilots-digital-workers",
            description: "Enterprise AI copilots and digital workers for finance, legal, compliance, and operations teams.",
          }),
        ]}
      />
      <CopilotClient />
    </>
  );
}
