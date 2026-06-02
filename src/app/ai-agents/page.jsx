import AIAgentsClient from "./AIAgentsClient";
import { JsonLd, buildBreadcrumb, buildService, buildFaqPage, buildOpenGraph } from "@/lib/jsonLd";

export const metadata = {
  title: 'AI Agents Melbourne & Australia | RAG, Copilots, Workflow Automation',
  alternates: { canonical: 'https://fidigital.com.au/ai-agents' },
  openGraph: buildOpenGraph({ title: 'AI Agents Melbourne & Australia | RAG, Copilots, Workflow Automation', description: 'Governed AI agents that read, reason, decide, and act. RAG pipelines. Copilots. Digital workers. Claude, GPT-4o, LangChain, n8n. Australian data residency. Human-in-the-loop guardrails.', path: '/ai-agents' }),
  description: 'Governed AI agents that read, reason, decide, and act. RAG pipelines. Copilots. Digital workers. Claude, GPT-4o, LangChain, n8n. Australian data residency. Human-in-the-loop guardrails.',
};

const faqs = [
  { question: "What is the difference between an AI agent and a chatbot?", answer: "A chatbot responds to prompts. You ask a question and it answers. An AI agent operates autonomously within defined guardrails. It reads inputs (documents, emails, data), reasons about them using business rules, makes decisions, executes actions (updating systems, sending notifications, creating records), and logs everything. Agents are proactive; chatbots are reactive. Agents require orchestration, decision logic, system integrations, and audit trails." },
  { question: "Which AI models does FI Digital use?", answer: "We are model-agnostic. Claude (Anthropic) for reasoning, document analysis, and long-context tasks. GPT-4o (OpenAI via Azure) for multimodal processing, conversational agents, and code generation. Gemini (Google) for high-volume, cost-efficient tasks. Open-source models (LLaMA, Mistral) for cost-sensitive or edge-deployed workloads. We recommend the optimal model mix during Discovery based on your specific use cases." },
  { question: "Is my data safe with AI agents?", answer: "Your data stays in your infrastructure. We deploy AI models via AWS Bedrock (Sydney region) and Azure OpenAI Service (Australia East), both with Australian data residency. Your documents are not sent to external APIs without your explicit approval. Audit trails record every data access and model interaction. You remain the data controller." },
  { question: "How do you prevent AI from making mistakes?", answer: "We architect human-in-the-loop controls for high-stakes decisions. Low-confidence outputs are flagged for human review. Guardrails define what the agent can and cannot do. Audit trails enable post-hoc review. Model evaluation benchmarks accuracy before deployment. Our agents achieve 95 to 99 percent accuracy on routine tasks, with the remaining edge cases routed to human experts." },
  { question: "What is RAG and why does it matter?", answer: "RAG stands for Retrieval-Augmented Generation. It connects your AI to your specific documents, policies, and knowledge bases. Without RAG, AI only knows what it learned during training. With RAG, AI retrieves relevant context from your documents before generating a response. This dramatically improves accuracy and relevance for enterprise use cases like contract review, policy compliance, and customer support." },
  { question: "How long does it take to deploy an AI agent?", answer: "A single-workflow AI agent (such as invoice processing or document classification) takes 8 to 12 weeks from Discovery to production. Multi-agent systems with complex integrations may take 16 to 20 weeks. We define the timeline during Discovery and hold to it." },
  { question: "Can AI agents integrate with our existing systems?", answer: "Yes. We integrate AI agents with 40 plus platforms via n8n (workflow orchestration) and custom API development. Common integrations include Zoho CRM, Xero, MYOB, Salesforce, SharePoint, Outlook, Slack, and custom databases. If your system has an API, we can connect an agent to it." },
  { question: "What does a governed AI system mean?", answer: "Governed AI means the system operates within defined boundaries. It includes human-in-the-loop controls (humans approve high-stakes decisions), audit trails (every action is logged), guardrails (the agent cannot exceed its defined scope), model evaluation (we select the right model for each task), and compliance alignment (the system satisfies your regulatory requirements). FI Digital builds governance into the architecture, not as an afterthought." },
];

export default function AIAgentsPage() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([
            { name: "Home", path: "/" },
            { name: "AI Agents", path: "/ai-agents" },
          ]),
          buildService({
            name: "AI Agents & Automation",
            serviceType: "Artificial Intelligence Development",
            path: "/ai-agents",
            description: "Governed AI agents, RAG pipelines, copilots, and workflow automation for Australian enterprise.",
          }),
          buildFaqPage(faqs),
        ]}
      />
      <AIAgentsClient />
    </>
  );
}
