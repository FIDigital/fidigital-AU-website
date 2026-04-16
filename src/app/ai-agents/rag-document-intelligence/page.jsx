import RAGClient from "./RAGClient";

export const metadata = {
  title: 'RAG & Document Intelligence Australia | AI Knowledge Retrieval | FI Digital',
  description: 'Retrieval-Augmented Generation (RAG) pipelines that connect AI to your institutional knowledge. Contract analysis, policy compliance, document classification, and knowledge retrieval. Claude, GPT-4o, LangChain. Australian data residency.',
};

export default function RAGPage() {
  return <RAGClient />;
}
