"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, ChevronDown, ChevronRight,
  FileSearch, Database, Brain, Shield,
  CheckCircle2, FileText, Lock, BarChart2,
  GitBranch, Layers
} from "lucide-react";
import TrustedBy from "@/components/TrustedBy";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const FAQS = [
  {
    q: "What is RAG (Retrieval-Augmented Generation)?",
    a: "RAG is an AI architecture pattern that connects a language model to an external document store. When a user asks a question, the system first retrieves relevant document chunks from a vector database using semantic search, then passes those chunks as context to the language model. The model reasons over the retrieved content and generates an answer with dramatically improved accuracy for domain-specific questions."
  },
  {
    q: "What types of documents can RAG systems process?",
    a: "Our RAG pipelines process PDF, Word, Excel, PowerPoint, plain text, HTML, email (via Outlook or Gmail integration), SharePoint libraries, and scanned documents (via OCR preprocessing). We handle documents up to thousands of pages."
  },
  {
    q: "How accurate is a RAG system compared to a human reading the document?",
    a: "Well-designed RAG systems achieve 90 to 97 percent accuracy on factual retrieval tasks for standard document types. Accuracy depends on document quality, chunking strategy, embedding model selection, and retrieval configuration. We evaluate accuracy against a test set from your actual documents before production deployment."
  },
  {
    q: "Can RAG systems process scanned documents or images?",
    a: "Yes, with OCR preprocessing. We use Azure AI Document Intelligence or AWS Textract for high-quality OCR of scanned PDFs and document images. The extracted text is then chunked and indexed through the standard RAG pipeline."
  },
  {
    q: "How is a RAG system different from just uploading documents to ChatGPT?",
    a: "A production RAG system persists your entire document corpus, applies role-based access control, provides audit trails, cites sources, integrates with your existing systems, and is designed to operate reliably at enterprise scale — not limited to a single session."
  },
  {
    q: "What vector database does FI Digital use?",
    a: "We select the vector database based on your infrastructure: Azure AI Search for Microsoft-stack clients, Pinecone for high-scale retrieval, pgvector for clients wanting to keep everything in an existing PostgreSQL database, and Weaviate for multi-modal retrieval."
  },
  {
    q: "Can we connect the RAG system to our existing document management system?",
    a: "Yes. We integrate with SharePoint, Confluence, Dropbox, Box, Google Drive, and custom document management systems via API or direct connector. Documents are ingested automatically when created or updated, keeping the vector index current."
  },
];

const BUILDS = [
  {
    icon: Database,
    color: "#3B82F6",
    title: "Document Ingestion & Vector Indexing",
    body: "We build ingestion pipelines handling PDF, Word, Excel, SharePoint, and email sources. Documents are chunked using semantic chunking strategies that preserve context. Each chunk is embedded and stored in a vector database (Pinecone, Weaviate, Azure AI Search, or pgvector). Metadata filtering enables retrieval scoped by document type, date, category, or business unit.",
    tags: ["Pinecone", "Weaviate", "pgvector", "Azure AI Search", "Semantic Chunking"],
  },
  {
    icon: Brain,
    color: "#10B981",
    title: "Knowledge Retrieval & Question Answering",
    body: "Users ask questions in natural language. The RAG pipeline retrieves the most relevant document chunks, passes them as context to the reasoning model (Claude or GPT-4o), and returns an answer with citations pointing to source documents. Every answer is verifiable. Hallucination is structurally minimised because the model is constrained to reason over retrieved content.",
    tags: ["Claude", "GPT-4o", "LangChain", "Source Citations", "Hallucination Control"],
  },
  {
    icon: FileText,
    color: "#F59E0B",
    title: "Document Classification & Extraction",
    body: "Our document intelligence systems classify incoming documents and extract structured data from unstructured text. An AI agent that receives an email attachment identifies whether it is a contract, an invoice, a regulatory notice, or a customer complaint, routes it appropriately, and extracts key fields into structured records. Extraction accuracy above 95% on standard document types.",
    tags: ["95%+ Accuracy", "Auto-Classification", "Field Extraction", "Smart Routing"],
  },
  {
    icon: Layers,
    color: "#8B5CF6",
    title: "Multi-Document Reasoning",
    body: "Some use cases require reasoning across multiple documents simultaneously. A compliance officer needs to know whether a proposed agreement is consistent with current policy and regulatory requirements — three different documents. Our multi-document RAG systems retrieve from multiple sources in parallel, synthesise results, and produce coherent answers with source attribution across all input documents.",
    tags: ["Cross-Document", "Parallel Retrieval", "Policy vs Contract", "Source Attribution"],
  },
];

const GOVERNANCE = [
  { icon: FileSearch, color: "#3B82F6", title: "Citation & Source Attribution", desc: "Every AI-generated answer includes references to the specific document, page, and paragraph." },
  { icon: BarChart2,  color: "#10B981", title: "Confidence Scoring",     desc: "Low-confidence retrievals are flagged for human review rather than presented as authoritative answers." },
  { icon: GitBranch, color: "#F59E0B", title: "Retrieval Quality Monitoring", desc: "Automated evaluation of retrieval precision and recall using a test question set drawn from your actual use cases." },
  { icon: Lock,       color: "#EF4444", title: "Role-Based Access Control", desc: "Retrieval is scoped to documents the querying user is authorised to access — enforced at the retrieval layer." },
  { icon: Shield,     color: "#8B5CF6", title: "Australian Data Residency", desc: "Your documents are stored and processed in Australian infrastructure. Your institutional knowledge does not leave your jurisdiction." },
];

export default function RAGClient() {
  const containerRef = useRef(null);
  const [openFaq, setOpenFaq] = useState([0, 1, 2]);

  useGSAP(() => {
    gsap.from(".hero-badge", { y: -16, autoAlpha: 0, duration: 0.45, ease: "power2.out" });
    gsap.from(".hero-h1",   { y: 36,  autoAlpha: 0, duration: 0.6,  delay: 0.1,  ease: "power3.out" });
    gsap.from(".hero-sub",  { y: 20,  autoAlpha: 0, duration: 0.5,  delay: 0.22, ease: "power2.out" });
    gsap.from(".hero-cta",  { y: 20,  autoAlpha: 0, duration: 0.5,  delay: 0.35, ease: "power2.out" });

    gsap.utils.toArray(".reveal").forEach((el) => {
      gsap.fromTo(el,
        { y: 32, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.65, ease: "power2.out",
          clearProps: "transform,opacity,visibility",
          scrollTrigger: { trigger: el, start: "top 86%", once: true } }
      );
    });

    gsap.fromTo(".build-card",
      { y: 40, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.55, stagger: 0.13, ease: "back.out(1.1)",
        scrollTrigger: { trigger: ".build-grid", start: "top 84%", once: true } }
    );

    gsap.fromTo(".gov-card",
      { y: 24, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.45, stagger: 0.09, ease: "power2.out",
        scrollTrigger: { trigger: ".gov-grid", start: "top 86%", once: true } }
    );

    // pipeline nodes animation
    gsap.fromTo(".pipe-node",
      { scale: 0.7, autoAlpha: 0 },
      { scale: 1, autoAlpha: 1, duration: 0.4, stagger: 0.12, ease: "back.out(1.4)",
        scrollTrigger: { trigger: ".pipeline-viz", start: "top 85%", once: true } }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <style>{`
        @keyframes fadeSlideIn { from { opacity:0; transform:translateY(-8px); } to { opacity:1; transform:translateY(0); } }
        .faq-answer { animation: fadeSlideIn 0.3s ease; }
        .build-card { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .build-card:hover { transform: translateY(-5px); box-shadow: 0 24px 50px rgba(0,0,0,0.1); }
        .gov-card:hover { transform: translateY(-3px); }
        .gov-card { transition: transform 0.2s ease; }
        @keyframes flowPulse { 0%,100%{opacity:0.4;} 50%{opacity:1;} }
        .pipe-arrow { animation: flowPulse 1.8s ease-in-out infinite; }
        .pipe-node { border-radius: 14px; }
      `}</style>
      <main style={{ paddingTop: "var(--header-h)", overflow: "hidden" }}>

        {/* ══ HERO ══════════════════════════════════════════════════════════ */}
        <section style={{
          position: "relative", minHeight: "82vh", display: "flex", alignItems: "center",
          padding: "0 1.5rem 60px",
          background: "var(--bg)", overflow: "hidden",
        }}>
          {/* Radial glow */}
          <div style={{ position:"absolute", top:"20%", right:"5%", width:"600px", height:"600px",
            background:"radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
            pointerEvents:"none", zIndex:0 }} />
          <div style={{ position:"absolute", bottom:"10%", left:"10%", width:"400px", height:"400px",
            background:"radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)",
            pointerEvents:"none", zIndex:0 }} />

          {/* Hero image */}
          <div style={{ position:"absolute", top:0, right:0, width:"52%", height:"100%", zIndex:0, opacity:0.35, pointerEvents:"none" }}>
            <Image src="/images/rag-hero.png" alt="RAG Document Intelligence" fill sizes="(max-width: 768px) 100vw, 60vw"
              style={{ objectFit:"cover",
                maskImage:"radial-gradient(ellipse at right, black, transparent 72%)",
                WebkitMaskImage:"radial-gradient(ellipse at right, black, transparent 72%)" }} />
          </div>

          <div className="container" style={{ position:"relative", zIndex:1 }}>
            <div className="hero-badge" style={{
              display:"inline-flex", alignItems:"center", gap:"0.75rem",
              background:"rgba(59,130,246,0.1)", border:"1px solid rgba(59,130,246,0.25)",
              padding:"0.6rem 1.25rem", borderRadius:"50px", marginBottom:"2rem"
            }}>
              <FileSearch size={16} color="#3B82F6" />
              <span style={{ color:"#3B82F6", fontWeight:700, fontSize:"0.88rem" }}>
                Claude · GPT-4o · LangChain · Australian Data Residency
              </span>
            </div>

            <h1 className="hero-h1 section-title" style={{
              maxWidth:"900px", fontSize:"clamp(2.3rem,5.2vw,4rem)", lineHeight:1.1, marginBottom:"1.5rem"
            }}>
              RAG & Document Intelligence<br />
              <span style={{ color:"var(--primary)", fontWeight:300 }}>
                AI That Knows Your Business, Not Just the Internet
              </span>
            </h1>

            <p className="hero-sub section-desc" style={{
              maxWidth:"720px", fontSize:"1.12rem", color:"var(--text-muted)", marginBottom:"3rem", lineHeight:1.82
            }}>
              Retrieval-Augmented Generation connects your AI to your institutional knowledge — your contracts, policies, manuals, regulatory filings, and internal documentation. FI Digital builds production RAG pipelines using Claude, GPT-4o, and LangChain that retrieve the right context before answering, deciding, or acting. Accurate. Auditable. Deployed in Australian infrastructure.
            </p>

            <div className="hero-cta" style={{ display:"flex", flexWrap:"wrap", gap:"1rem" }}>
              <Link href="/book-discovery" style={{
                background:"var(--primary)", color:"#fff", padding:"1rem 2rem",
                borderRadius:"8px", fontWeight:600, textDecoration:"none",
                display:"inline-flex", alignItems:"center", gap:"0.5rem"
              }}>
                Start a 2-Week RAG Pilot <ArrowRight size={18} />
              </Link>
              <Link href="/ai-agents" style={{
                background:"transparent", color:"var(--text)", padding:"1rem 2rem",
                borderRadius:"8px", fontWeight:600, textDecoration:"none",
                display:"inline-flex", alignItems:"center", gap:"0.5rem",
                border:"1px solid var(--border)"
              }}>
                All AI Services <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        <TrustedBy />

        {/* ══ STAT STRIP ════════════════════════════════════════════════════ */}
        <section style={{ background:"var(--bg-secondary)", padding:"2.5rem 1.5rem", borderTop:"1px solid var(--border)", borderBottom:"1px solid var(--border)" }}>
          <div className="container">
            <div style={{ display:"flex", flexWrap:"wrap", gap:"2rem", justifyContent:"center", textAlign:"center" }}>
              {[
                { stat:"95–97%", label:"Extraction accuracy on standard doc types" },
                { stat:"Millions",label:"Pages processed in production pipelines" },
                { stat:"7+",     label:"Vector database options supported" },
                { stat:"100%",   label:"Australian data residency" },
              ].map((s,i) => (
                <div key={i} className="reveal" style={{ flex:"1 1 180px" }}>
                  <div style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:900, color:"var(--primary)", marginBottom:"0.35rem" }}>{s.stat}</div>
                  <div style={{ fontSize:"0.9rem", color:"var(--text-muted)", fontWeight:500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SECTION 1: THE PROBLEM WITH VANILLA AI ═══════════════════════ */}
        <section className="section" style={{ background:"var(--bg)" }}>
          <div className="container">
            <div style={{ display:"flex", flexWrap:"wrap", gap:"5rem", alignItems:"center" }}>
              <div style={{ flex:"1 1 420px" }}>
                <div className="reveal">
                  <div className="section-label">The Problem</div>
                  <h2 className="section-title" style={{ maxWidth:"560px", marginBottom:"2rem" }}>
                    The Problem With Vanilla AI
                  </h2>
                  <p style={{ fontSize:"1.05rem", color:"var(--text)", lineHeight:1.85, marginBottom:"1.4rem" }}>
                    Off-the-shelf AI models know a great deal about the world as it was when they were trained. They do not know your contracts. They do not know your compliance policies. They do not know your internal procedures, your product catalogue, your pricing rules, or the regulatory requirements specific to your industry.
                  </p>
                  <p style={{ fontSize:"1.05rem", color:"var(--text)", lineHeight:1.85, marginBottom:"1.4rem" }}>
                    Without access to your institutional knowledge, AI gives you generic answers. Useful for some tasks. Dangerously inadequate for others.
                  </p>
                  <p style={{ fontSize:"1.05rem", color:"var(--text)", lineHeight:1.85 }}>
                    <strong>Retrieval-Augmented Generation solves this.</strong> RAG is an architecture pattern that gives your AI agents access to your specific documents before they answer a question or make a decision. Instead of relying solely on training data, the agent retrieves relevant chunks from your document corpus and uses that retrieved context alongside the model's reasoning capability. The result is AI that answers with accuracy derived from your actual documents.
                  </p>
                </div>
              </div>

              {/* Comparison card */}
              <div className="reveal" style={{ flex:"1 1 340px" }}>
                <div style={{
                  background:"var(--card-bg)", borderRadius:"24px", border:"1px solid var(--border)",
                  overflow:"hidden", padding:"2rem"
                }}>
                  {[
                    { type:"Without RAG", color:"#EF4444", bg:"rgba(239,68,68,0.06)", items:[
                      "Generic, often incorrect answers",
                      "No access to your documents",
                      "Cannot cite sources",
                      "Hallucination risk on specifics",
                      "Training data cutoff limitation",
                    ]},
                    { type:"With RAG (FI Digital)", color:"#10B981", bg:"rgba(16,185,129,0.06)", items:[
                      "Answers grounded in your documents",
                      "Full access to your knowledge base",
                      "Every answer citable to source",
                      "Structurally minimised hallucination",
                      "Always current — index updates live",
                    ]},
                  ].map((side, i) => (
                    <div key={i} style={{ marginBottom: i === 0 ? "1.25rem" : 0 }}>
                      <div style={{
                        background:side.bg, borderRadius:"12px", padding:"1.25rem 1.5rem",
                        border:`1px solid ${side.color}22`
                      }}>
                        <div style={{ fontWeight:800, fontSize:"0.85rem", color:side.color, marginBottom:"1rem", textTransform:"uppercase", letterSpacing:"0.06em" }}>{side.type}</div>
                        {side.items.map((item,j) => (
                          <div key={j} style={{ display:"flex", alignItems:"flex-start", gap:"0.6rem", marginBottom:"0.6rem" }}>
                            <CheckCircle2 size={15} color={side.color} style={{ marginTop:"2px", minWidth:"15px" }} />
                            <span style={{ fontSize:"0.88rem", color:"var(--text)", lineHeight:1.5 }}>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ HOW A RAG PIPELINE WORKS — Ghost-number two-column layout ══ */}
        <section className="section" style={{ background:"var(--bg-secondary)" }}>
          <div className="container">
            <div className="reveal" style={{ textAlign:"center", marginBottom:"5rem" }}>
              <div className="section-label">Architecture</div>
              <h2 className="section-title" style={{ maxWidth:"700px", margin:"0 auto 1rem auto" }}>
                How a RAG Pipeline Works
              </h2>
              <p style={{ color:"var(--text-muted)", fontSize:"1rem", maxWidth:"560px", margin:"0 auto" }}>
                Five precise layers — from your documents to a cited, auditable answer.
              </p>
            </div>

            <div className="pipeline-viz" style={{ display:"flex", flexDirection:"column", gap:"5rem", maxWidth:"980px", margin:"0 auto" }}>
              {[
                {
                  n:"01", color:"#3B82F6",
                  title:"Document Sources",
                  desc:"Your institutional knowledge — contracts, policies, regulatory filings, SharePoint libraries, email archives, technical manuals — is wired in as the authoritative source of truth. The AI never guesses; it reads your documents.",
                  tags:["Policy PDFs","Contracts","SharePoint / OneDrive","Email","Regulatory Filings"],
                  logos:[{src:"/images/azure-nobg.png",alt:"Azure"},{src:"/images/aws-nobg.png",alt:"AWS"}],
                  flip:false
                },
                {
                  n:"02", color:"#F59E0B",
                  title:"Ingestion & Vector Indexing",
                  desc:"Documents are parsed, split into semantically coherent chunks, converted to vector embeddings, and stored in a vector database with rich metadata — enabling retrieval filtered by type, date, category, or business unit.",
                  tags:["Semantic Chunking","Embedding Model","Pinecone","pgvector","Metadata Filtering"],
                  logos:[{src:"/images/pinecone-nobg.png",alt:"Pinecone"},{src:"/images/azure-nobg.png",alt:"Azure"}],
                  flip:true
                },
                {
                  n:"03", color:"#10B981",
                  title:"Semantic Retrieval",
                  desc:"When a user asks a question, the query is embedded and compared to the vector index. The most relevant document chunks are retrieved instantly — scoped by role-based access so users only see what they're allowed to see.",
                  tags:["Semantic Search","Role-Based Access","Hybrid BM25+","Relevance Scoring"],
                  logos:[],
                  flip:false
                },
                {
                  n:"04", color:"#8B5CF6",
                  title:"LLM Reasoning",
                  desc:"Retrieved chunks are passed as context to the reasoning model alongside the question. The model generates a grounded answer constrained to retrieved content — structurally eliminating hallucination. GPT-4o for multimodal tasks; Claude for long-context documents.",
                  tags:["Claude","GPT-4o","LangChain","Context Window Mgmt","Prompt Engineering"],
                  logos:[{src:"/images/claude.png",alt:"Claude"},{src:"/images/openai-nobg.png",alt:"OpenAI"},{src:"/images/langchain-nobg.png",alt:"LangChain"}],
                  flip:true
                },
                {
                  n:"05", color:"#EF4444",
                  title:"Answer + Audit Trail",
                  desc:"The final answer arrives with citations — exact document, page, and paragraph. Every inference is logged: model input, output, confidence score, and user identity. Regulated industries get the audit trail they require.",
                  tags:["Source Citations","Confidence Scoring","Full Audit Log","Human Review Flagging"],
                  logos:[],
                  flip:false
                },
              ].map((s,i) => (
                <div key={i} className="pipe-node reveal" style={{
                  display:"grid",
                  gridTemplateColumns: s.flip ? "1fr 1fr" : "1fr 1fr",
                  gap:"4rem",
                  alignItems:"center",
                }}>
                  {/* Visual side — ghost number stacked above logos, no overlap possible */}
                  <div style={{
                    order: s.flip ? 2 : 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1.25rem",
                    padding: "1rem 0",
                  }}>
                    {/* Ghost number */}
                    <div style={{
                      fontSize: "clamp(6rem,11vw,9rem)",
                      fontWeight: 900,
                      color: s.color,
                      opacity: 0.1,
                      lineHeight: 1,
                      userSelect: "none",
                      letterSpacing: "-0.04em",
                    }}>{s.n}</div>

                    {/* Logos below the number */}
                    {s.logos.length > 0 && (
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
                        <span style={{
                          fontSize: "0.65rem", fontWeight: 800,
                          color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.12em"
                        }}>Powered by</span>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem", alignItems: "center", justifyContent: "center" }}>
                          {s.logos.map((l,j) => (
                            <div key={j} style={{ position: "relative", width: "72px", height: "28px" }}>
                              <Image src={l.src} alt={l.alt} fill sizes="(max-width: 768px) 40vw, 200px" style={{ objectFit: "contain" }} />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content side */}
                  <div style={{ order: s.flip ? 0 : 2 }}>
                    <div style={{
                      fontSize:"0.72rem", fontWeight:800, color:s.color,
                      textTransform:"uppercase", letterSpacing:"0.1em",
                      marginBottom:"0.75rem"
                    }}>Step {s.n}</div>
                    <h3 style={{ fontSize:"1.5rem", fontWeight:800, color:"var(--text)", marginBottom:"1rem", lineHeight:1.25 }}>{s.title}</h3>
                    <p style={{ fontSize:"0.97rem", color:"var(--text-muted)", lineHeight:1.8, marginBottom:"1.25rem" }}>{s.desc}</p>
                    <div style={{ display:"flex", flexWrap:"wrap", gap:"0.45rem" }}>
                      {s.tags.map((t,j) => (
                        <span key={j} style={{
                          padding:"0.3rem 0.85rem",
                          background:"var(--card-bg)",
                          borderRadius:"50px",
                          fontSize:"0.8rem", fontWeight:600,
                          color:"var(--text-muted)",
                          boxShadow:"0 1px 4px rgba(0,0,0,0.06)"
                        }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Residency badge */}
              <div style={{ textAlign:"center" }}>
                <span style={{
                  display:"inline-flex", alignItems:"center", gap:"0.75rem",
                  padding:"0.65rem 1.5rem", borderRadius:"50px",
                  background:"var(--card-bg)",
                  boxShadow:"0 2px 12px rgba(0,0,0,0.07)",
                  fontSize:"0.85rem", fontWeight:700, color:"var(--text-muted)"
                }}>
                  🇦🇺 All processing — AWS Sydney · Azure Australia East
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ══ WHAT WE BUILD — Clean feature rows ═══════════════════════════ */}
        <section className="section" style={{ background:"var(--bg)" }}>
          <div className="container">
            <div className="reveal" style={{ textAlign:"center", marginBottom:"4.5rem" }}>
              <div className="section-label">Capabilities</div>
              <h2 className="section-title" style={{ maxWidth:"700px", margin:"0 auto" }}>
                What We Build
              </h2>
            </div>

            <div className="build-grid" style={{ display:"flex", flexDirection:"column", gap:"1.5rem" }}>
              {[
                {
                  num:"01", color:"#3B82F6",
                  title:"Document Ingestion & Vector Indexing",
                  body:"We build ingestion pipelines handling PDF, Word, Excel, SharePoint, and email sources. Documents are chunked using semantic strategies that preserve context. Each chunk is embedded and stored in a vector database — Pinecone, Weaviate, Azure AI Search, or pgvector. Metadata filtering enables retrieval scoped by document type, date, category, or business unit.",
                  chips:["Pinecone","Weaviate","pgvector","Semantic Chunking","Metadata Filtering"],
                  logos:[{src:"/images/pinecone-nobg.png",alt:"Pinecone"},{src:"/images/azure-nobg.png",alt:"Azure"},{src:"/images/aws-nobg.png",alt:"AWS"}],
                },
                {
                  num:"02", color:"#10B981",
                  title:"Knowledge Retrieval & Question Answering",
                  body:"Users ask questions in natural language. The pipeline retrieves the most relevant document chunks, passes them as context to Claude or GPT-4o, and returns an answer with citations to source documents. Hallucination is structurally minimised — the model is constrained to reason over retrieved content, not training data.",
                  chips:["Source Citations","Hallucination Control","Natural Language Q&A","Long-Context"],
                  logos:[{src:"/images/claude.png",alt:"Claude"},{src:"/images/openai-nobg.png",alt:"OpenAI"},{src:"/images/langchain-nobg.png",alt:"LangChain"}],
                },
                {
                  num:"03", color:"#F59E0B",
                  title:"Document Classification & Extraction",
                  body:"Our document intelligence systems classify incoming documents and extract structured data from unstructured text. An AI agent that receives an email attachment identifies whether it is a contract, invoice, regulatory notice, or customer complaint — routes it, and extracts key fields into structured records. 95%+ extraction accuracy on standard document types.",
                  chips:["95%+ Accuracy","Auto-Classification","Field Extraction","Smart Routing","OCR"],
                  logos:[{src:"/images/azure-nobg.png",alt:"Azure"},{src:"/images/aws-nobg.png",alt:"AWS"}],
                },
                {
                  num:"04", color:"#8B5CF6",
                  title:"Multi-Document Reasoning",
                  body:"Some use cases demand reasoning across multiple documents simultaneously. A compliance officer needs to know whether a proposed agreement is consistent with current policy and regulatory requirements — three different documents. Our multi-document RAG systems retrieve in parallel, synthesise results, and attribute sources across all input documents.",
                  chips:["Cross-Document","Parallel Retrieval","Policy vs Contract","Source Attribution"],
                  logos:[{src:"/images/claude.png",alt:"Claude"},{src:"/images/langchain-nobg.png",alt:"LangChain"},{src:"/images/n8n.png",alt:"n8n"}],
                },
              ].map((card,i) => (
                <div key={i} className="build-card reveal" style={{
                  display:"grid",
                  gridTemplateColumns:"64px 1fr auto",
                  gap:"2rem",
                  alignItems:"start",
                  padding:"2.25rem 2.5rem",
                  background:"var(--card-bg)",
                  borderRadius:"20px",
                  boxShadow:"0 2px 20px rgba(0,0,0,0.055)",
                }}>
                  {/* Number circle */}
                  <div style={{
                    width:"64px", height:"64px",
                    borderRadius:"50%",
                    background:`radial-gradient(135deg, ${card.color}22, ${card.color}08)`,
                    display:"flex", alignItems:"center", justifyContent:"center",
                    fontSize:"1.1rem", fontWeight:900, color:card.color,
                    flexShrink:0, marginTop:"0.2rem"
                  }}>{card.num}</div>

                  {/* Text block */}
                  <div>
                    <h3 style={{ fontSize:"1.2rem", fontWeight:800, color:"var(--text)", marginBottom:"0.75rem", lineHeight:1.3 }}>{card.title}</h3>
                    <p style={{ fontSize:"0.94rem", color:"var(--text-muted)", lineHeight:1.8, marginBottom:"1.1rem" }}>{card.body}</p>
                    <div style={{ display:"flex", flexWrap:"wrap", gap:"0.4rem" }}>
                      {card.chips.map((chip,j) => (
                        <span key={j} style={{
                          padding:"0.28rem 0.75rem",
                          background:`${card.color}0d`,
                          borderRadius:"50px",
                          fontSize:"0.78rem", fontWeight:700,
                          color:card.color
                        }}>{chip}</span>
                      ))}
                    </div>
                  </div>

                  {/* Logo cluster */}
                  <div style={{
                    display:"flex", flexDirection:"column",
                    gap:"0.85rem", alignItems:"flex-end",
                    minWidth:"80px", paddingTop:"0.2rem"
                  }}>
                    {card.logos.map((logo,j) => (
                      <div key={j} style={{ position:"relative", width:"72px", height:"26px", opacity:0.85 }}>
                        <Image src={logo.src} alt={logo.alt} fill sizes="(max-width: 768px) 40vw, 200px" style={{ objectFit:"contain" }} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ══ SECTION 3: GOVERNANCE & COMPLIANCE ═══════════════════════════ */}
        <section className="section" style={{ background:"var(--bg-secondary)" }}>
          <div className="container">
            <div className="reveal" style={{ textAlign:"center", marginBottom:"5rem" }}>
              <div className="section-label">Trust & Safety</div>
              <h2 className="section-title" style={{ maxWidth:"800px", margin:"0 auto 1.5rem auto" }}>
                Governance, Accuracy, and Compliance
              </h2>
              <p style={{ color:"var(--text-muted)", fontSize:"1.05rem", maxWidth:"640px", margin:"0 auto" }}>
                FI Digital has built production RAG pipelines that have processed millions of pages of contracts, regulatory filings, clinical guidelines, and technical manuals — with audit trails that regulated industries require.
              </p>
            </div>

            <div className="gov-grid" style={{
              display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))", gap:"1.75rem", marginBottom:"4rem"
            }}>
              {GOVERNANCE.map((g,i) => (
                <div key={i} className="gov-card" style={{
                  background:"var(--card-bg)", padding:"2rem", borderRadius:"20px",
                  border:"1px solid var(--border)"
                }}>
                  <div style={{ width:"52px", height:"52px", background:`${g.color}12`, borderRadius:"14px", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"1.25rem" }}>
                    <g.icon size={24} color={g.color} />
                  </div>
                  <h3 style={{ fontSize:"1.05rem", fontWeight:800, marginBottom:"0.7rem", color:"var(--text)" }}>{g.title}</h3>
                  <p style={{ fontSize:"0.93rem", color:"var(--text-muted)", lineHeight:1.68 }}>{g.desc}</p>
                </div>
              ))}
            </div>

            {/* Vector DB selector */}
            <div className="reveal" style={{
              background:"linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(16,185,129,0.06) 100%)",
              borderRadius:"24px", border:"1px solid rgba(59,130,246,0.15)", padding:"2.5rem 3rem"
            }}>
              <h3 style={{ fontSize:"1.3rem", fontWeight:800, marginBottom:"0.75rem", color:"var(--text)" }}>Vector Database Options</h3>
              <p style={{ color:"var(--text-muted)", marginBottom:"1.75rem", lineHeight:1.7 }}>We select the vector database based on your existing infrastructure — not ours.</p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:"1rem" }}>
                {[
                  { name:"Pinecone",        use:"High-scale retrieval",            color:"#10B981" },
                  { name:"Weaviate",        use:"Multi-modal retrieval",           color:"#3B82F6" },
                  { name:"Azure AI Search", use:"Microsoft-stack clients",         color:"#0078D4" },
                  { name:"pgvector",        use:"Existing PostgreSQL databases",   color:"#336791" },
                ].map((db,i) => (
                  <div key={i} style={{
                    flex:"1 1 180px", padding:"1.25rem 1.5rem",
                    background:"var(--card-bg)", borderRadius:"14px", border:"1px solid var(--border)"
                  }}>
                    <div style={{ fontWeight:800, fontSize:"1rem", color:db.color, marginBottom:"0.35rem" }}>{db.name}</div>
                    <div style={{ fontSize:"0.82rem", color:"var(--text-muted)" }}>{db.use}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ FAQ ═══════════════════════════════════════════════════════════ */}
        <section className="section" style={{ background:"var(--bg)" }}>
          <div className="container" style={{ maxWidth:"860px" }}>
            <div className="reveal" style={{ textAlign:"center", marginBottom:"4rem" }}>
              <div className="section-label">FAQ</div>
              <h2 className="section-title" style={{ maxWidth:"700px", margin:"0 auto" }}>
                Frequently Asked Questions
              </h2>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
              {FAQS.map((faq,i) => (
                <div key={i} className="reveal" style={{
                  background:"var(--card-bg)", borderRadius:"16px",
                  border:"1px solid var(--border)", overflow:"hidden"
                }}>
                  <button
                    onClick={() => setOpenFaq(openFaq.includes(i) ? openFaq.filter((x) => x !== i) : [...openFaq, i])}
                    style={{
                      width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between",
                      padding:"1.4rem 2rem", background:"none", border:"none",
                      cursor:"pointer", textAlign:"left", gap:"1rem"
                    }}
                  >
                    <span style={{ fontSize:"1.02rem", fontWeight:700, color:"var(--text)", flex:1 }}>{faq.q}</span>
                    <ChevronDown size={20} color="var(--text-muted)"
                      style={{ minWidth:"20px", transform:openFaq.includes(i)?"rotate(180deg)":"rotate(0)", transition:"0.3s" }} />
                  </button>
                  {openFaq.includes(i) && (
                    <div className="faq-answer" style={{ padding:"0 2rem 1.75rem 2rem", borderTop:"1px solid var(--border)" }}>
                      <p style={{ fontSize:"0.97rem", color:"var(--text-muted)", lineHeight:1.8, paddingTop:"1.25rem" }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CTA ═══════════════════════════════════════════════════════════ */}
        <section className="section" style={{
          background:"linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(16,185,129,0.08) 100%)",
          borderTop:"1px solid var(--border)"
        }}>
          <div className="container" style={{ textAlign:"center" }}>
            <div className="reveal">
              <h2 style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:800, marginBottom:"1.25rem" }}>
                Ready to connect AI to your documents?
              </h2>
              <p style={{ fontSize:"1.1rem", color:"var(--text-muted)", maxWidth:"580px", margin:"0 auto 2.5rem auto", lineHeight:1.7 }}>
                Book a free RAG & Document Intelligence discovery session. We will scope your document corpus and show you what production-grade retrieval accuracy looks like on your actual content.
              </p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:"1rem", justifyContent:"center" }}>
                <Link href="/book-discovery" style={{
                  background:"var(--primary)", color:"#fff", padding:"1rem 2.25rem",
                  borderRadius:"8px", fontWeight:600, textDecoration:"none",
                  display:"inline-flex", alignItems:"center", gap:"0.5rem"
                }}>
                  Start a 2-Week RAG Pilot <ArrowRight size={18} />
                </Link>
                <Link href="/ai-agents" style={{
                  background:"transparent", color:"var(--text)", padding:"1rem 2.25rem",
                  borderRadius:"8px", fontWeight:600, textDecoration:"none",
                  display:"inline-flex", alignItems:"center", gap:"0.5rem",
                  border:"1px solid var(--border)"
                }}>
                  All AI Agent Services <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
