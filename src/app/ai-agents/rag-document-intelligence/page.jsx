import RAGClient from "./RAGClient";
import { JsonLd, buildBreadcrumb, buildService, buildFaqPage, buildOpenGraph } from "@/lib/jsonLd";

export const metadata = {
  title: 'RAG & Document Intelligence Australia | Enterprise AI Retrieval',
  alternates: { canonical: 'https://fidigital.com.au/ai-agents/rag-document-intelligence' },
  openGraph: buildOpenGraph({ title: 'RAG & Document Intelligence Australia | Enterprise AI Retrieval', description: 'Retrieval-Augmented Generation (RAG) pipelines that connect AI to your institutional knowledge. Contract analysis, policy compliance, document classification, and knowledge retrieval. Claude, GPT-4o, LangChain. Australian data residency.', path: '/ai-agents/rag-document-intelligence' }),
  description: 'Retrieval-Augmented Generation (RAG) pipelines that connect AI to your institutional knowledge. Contract analysis, policy compliance, document classification, and knowledge retrieval. Claude, GPT-4o, LangChain. Australian data residency.',
};

const faqs = [
  { question: "What is RAG (Retrieval-Augmented Generation)?", answer: "RAG is an AI architecture pattern that connects a language model to an external document store. When a user asks a question, the system first retrieves relevant document chunks from a vector database using semantic search, then passes those chunks as context to the language model. The model reasons over the retrieved content and generates an answer with dramatically improved accuracy for domain-specific questions." },
  { question: "What types of documents can RAG systems process?", answer: "Our RAG pipelines process PDF, Word, Excel, PowerPoint, plain text, HTML, email (via Outlook or Gmail integration), SharePoint libraries, and scanned documents (via OCR preprocessing). We handle documents up to thousands of pages." },
  { question: "How accurate is a RAG system compared to a human reading the document?", answer: "Well-designed RAG systems achieve 90 to 97 percent accuracy on factual retrieval tasks for standard document types. Accuracy depends on document quality, chunking strategy, embedding model selection, and retrieval configuration. We evaluate accuracy against a test set from your actual documents before production deployment." },
  { question: "Can RAG systems process scanned documents or images?", answer: "Yes, with OCR preprocessing. We use Azure AI Document Intelligence or AWS Textract for high-quality OCR of scanned PDFs and document images. The extracted text is then chunked and indexed through the standard RAG pipeline." },
  { question: "How is a RAG system different from just uploading documents to ChatGPT?", answer: "A production RAG system persists your entire document corpus, applies role-based access control, provides audit trails, cites sources, integrates with your existing systems, and is designed to operate reliably at enterprise scale — not limited to a single session." },
  { question: "What vector database does FI Digital use?", answer: "We select the vector database based on your infrastructure: Azure AI Search for Microsoft-stack clients, Pinecone for high-scale retrieval, pgvector for clients wanting to keep everything in an existing PostgreSQL database, and Weaviate for multi-modal retrieval." },
  { question: "Can we connect the RAG system to our existing document management system?", answer: "Yes. We integrate with SharePoint, Confluence, Dropbox, Box, Google Drive, and custom document management systems via API or direct connector. Documents are ingested automatically when created or updated, keeping the vector index current." },
];

export default function RAGPage() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([
            { name: "Home", path: "/" },
            { name: "AI Agents", path: "/ai-agents" },
            { name: "RAG & Document Intelligence", path: "/ai-agents/rag-document-intelligence" },
          ]),
          buildService({
            name: "RAG & Document Intelligence",
            serviceType: "AI Document Intelligence",
            path: "/ai-agents/rag-document-intelligence",
            description: "Retrieval-Augmented Generation pipelines for enterprise document intelligence and knowledge retrieval.",
          }),
          buildFaqPage(faqs),
        ]}
      />
      <RAGClient />
    </>
  );
}
