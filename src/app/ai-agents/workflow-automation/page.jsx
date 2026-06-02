import WorkflowClient from "./WorkflowClient";
import { JsonLd, buildBreadcrumb, buildService, buildOpenGraph } from "@/lib/jsonLd";

export const metadata = {
  title: 'Workflow Automation Australia | n8n, AI Agents, Process AI',
  alternates: { canonical: 'https://fidigital.com.au/ai-agents/workflow-automation' },
  openGraph: buildOpenGraph({ title: 'Workflow Automation Australia | n8n, AI Agents, Process AI', description: 'End-to-end AI workflow automation using n8n and LangChain. Trigger-based AI workflows that read inputs, make decisions, execute actions, and log outcomes. Connect 40+ platforms. Australian data residency. No manual intervention for routine tasks.', path: '/ai-agents/workflow-automation' }),
  description: 'End-to-end AI workflow automation using n8n and LangChain. Trigger-based AI workflows that read inputs, make decisions, execute actions, and log outcomes. Connect 40+ platforms. Australian data residency. No manual intervention for routine tasks.',
};

export default function WorkflowPage() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([
            { name: "Home", path: "/" },
            { name: "AI Agents", path: "/ai-agents" },
            { name: "Workflow Automation", path: "/ai-agents/workflow-automation" },
          ]),
          buildService({
            name: "Workflow Automation",
            serviceType: "Workflow Automation",
            path: "/ai-agents/workflow-automation",
            description: "End-to-end AI workflow automation using n8n and LangChain across 40+ platforms.",
          }),
        ]}
      />
      <WorkflowClient />
    </>
  );
}
