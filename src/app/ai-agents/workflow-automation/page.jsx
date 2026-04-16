import WorkflowClient from "./WorkflowClient";

export const metadata = {
  title: 'AI Workflow Automation Australia | n8n, LangChain | Enterprise Automation | FI Digital',
  description: 'End-to-end AI workflow automation using n8n and LangChain. Trigger-based AI workflows that read inputs, make decisions, execute actions, and log outcomes. Connect 40+ platforms. Australian data residency. No manual intervention for routine tasks.',
};

export default function WorkflowPage() {
  return <WorkflowClient />;
}
