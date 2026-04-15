"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, ChevronDown, ChevronRight,
  Bot, ShieldCheck, FileSearch, Workflow,
  Eye, Lock, BarChart3, Cpu, CheckCircle2
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FAQS = [
  {
    q: "What is the difference between an AI agent and a chatbot?",
    a: "A chatbot responds to prompts. You ask a question and it answers. An AI agent operates autonomously within defined guardrails. It reads inputs (documents, emails, data), reasons about them using business rules, makes decisions, executes actions (updating systems, sending notifications, creating records), and logs everything. Agents are proactive; chatbots are reactive. Agents require orchestration, decision logic, system integrations, and audit trails."
  },
  {
    q: "Which AI models does FI Digital use?",
    a: "We are model-agnostic. Claude (Anthropic) for reasoning, document analysis, and long-context tasks. GPT-4o (OpenAI via Azure) for multimodal processing, conversational agents, and code generation. Gemini (Google) for high-volume, cost-efficient tasks. Open-source models (LLaMA, Mistral) for cost-sensitive or edge-deployed workloads. We recommend the optimal model mix during Discovery based on your specific use cases."
  },
  {
    q: "Is my data safe with AI agents?",
    a: "Your data stays in your infrastructure. We deploy AI models via AWS Bedrock (Sydney region) and Azure OpenAI Service (Australia East), both with Australian data residency. Your documents are not sent to external APIs without your explicit approval. Audit trails record every data access and model interaction. You remain the data controller."
  },
  {
    q: "How do you prevent AI from making mistakes?",
    a: "We architect human-in-the-loop controls for high-stakes decisions. Low-confidence outputs are flagged for human review. Guardrails define what the agent can and cannot do. Audit trails enable post-hoc review. Model evaluation benchmarks accuracy before deployment. Our agents achieve 95 to 99 percent accuracy on routine tasks, with the remaining edge cases routed to human experts."
  },
  {
    q: "What is RAG and why does it matter?",
    a: "RAG stands for Retrieval-Augmented Generation. It connects your AI to your specific documents, policies, and knowledge bases. Without RAG, AI only knows what it learned during training. With RAG, AI retrieves relevant context from your documents before generating a response. This dramatically improves accuracy and relevance for enterprise use cases like contract review, policy compliance, and customer support."
  },
  {
    q: "How long does it take to deploy an AI agent?",
    a: "A single-workflow AI agent (such as invoice processing or document classification) takes 8 to 12 weeks from Discovery to production. Multi-agent systems with complex integrations may take 16 to 20 weeks. We define the timeline during Discovery and hold to it."
  },
  {
    q: "Can AI agents integrate with our existing systems?",
    a: "Yes. We integrate AI agents with 40 plus platforms via n8n (workflow orchestration) and custom API development. Common integrations include Zoho CRM, Xero, MYOB, Salesforce, SharePoint, Outlook, Slack, and custom databases. If your system has an API, we can connect an agent to it."
  },
  {
    q: "What does a governed AI system mean?",
    a: "Governed AI means the system operates within defined boundaries. It includes human-in-the-loop controls (humans approve high-stakes decisions), audit trails (every action is logged), guardrails (the agent cannot exceed its defined scope), model evaluation (we select the right model for each task), and compliance alignment (the system satisfies your regulatory requirements). FI Digital builds governance into the architecture, not as an afterthought."
  },
];

const SUB_PAGES = [
  { label: "RAG & Document Intelligence", href: "/ai-agents/rag-document-intelligence", color: "#3B82F6", icon: FileSearch },
  { label: "Copilots & Digital Workers",  href: "/ai-agents/copilots-digital-workers",  color: "#10B981", icon: Bot },
  { label: "Workflow Automation",          href: "/ai-agents/workflow-automation",         color: "#F59E0B", icon: Workflow },
];

export default function AIAgentsClient() {
  const containerRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);

  useGSAP(() => {
    gsap.from(".hero-badge", { y: -16, autoAlpha: 0, duration: 0.45, ease: "power2.out" });
    gsap.from(".hero-h1",   { y: 36,  autoAlpha: 0, duration: 0.6,  delay: 0.1,  ease: "power3.out" });
    gsap.from(".hero-p",    { y: 20,  autoAlpha: 0, duration: 0.5,  delay: 0.22, ease: "power2.out" });
    gsap.from(".hero-btn",  { y: 20,  autoAlpha: 0, duration: 0.5,  delay: 0.35, ease: "power2.out" });

    gsap.utils.toArray(".reveal").forEach((el) => {
      gsap.fromTo(el,
        { y: 30, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.6, ease: "power2.out",
          clearProps: "transform,opacity,visibility",
          scrollTrigger: { trigger: el, start: "top 85%", once: true } }
      );
    });

    gsap.fromTo(".what-card",
      { y: 40, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.55, stagger: 0.12, ease: "back.out(1.2)",
        scrollTrigger: { trigger: ".what-grid", start: "top 82%", once: true } }
    );

    gsap.fromTo(".guardrail-card",
      { y: 30, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.1, ease: "power2.out",
        scrollTrigger: { trigger: ".guardrails-grid", start: "top 85%", once: true } }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <style>{`
        @keyframes fadeIn { from { opacity:0; transform:translateY(-8px); } to { opacity:1; transform:translateY(0); } }
        .faq-answer { animation: fadeIn 0.3s ease; }
        .subpage-card:hover { transform: translateY(-4px); box-shadow: 0 24px 48px rgba(0,0,0,0.12); }
        .subpage-card { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .guardrail-card:hover { transform: translateY(-3px); }
        .guardrail-card { transition: transform 0.2s ease; }
      `}</style>
      <main style={{ paddingTop: "var(--header-h)", overflow: "hidden" }}>

        {/* ══ HERO ══════════════════════════════════════════════════════════ */}
        <section style={{
          position: "relative", minHeight: "80vh", display: "flex", alignItems: "center",
          padding: "clamp(80px,10vh,120px) 1.5rem 80px",
          background: "var(--bg)", overflow: "hidden"
        }}>
          <div style={{ position: "absolute", top: 0, right: 0, width: "58%", height: "100%", zIndex: 0, opacity: 0.4, pointerEvents: "none" }}>
            <Image
              src="/images/ai-agents-hero.png"
              alt="AI Agents and Automation"
              fill
              style={{
                objectFit: "cover",
                maskImage: "radial-gradient(ellipse at right, black, transparent 72%)",
                WebkitMaskImage: "radial-gradient(ellipse at right, black, transparent 72%)"
              }}
            />
          </div>

          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <div className="hero-badge" style={{
              display: "inline-flex", alignItems: "center", gap: "0.75rem",
              background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.25)",
              padding: "0.6rem 1.25rem", borderRadius: "50px", marginBottom: "2rem"
            }}>
              <Bot size={16} color="#10B981" />
              <span style={{ color: "#10B981", fontWeight: 700, fontSize: "0.9rem" }}>Claude · GPT-4o · LangChain · n8n · Australian Data Residency</span>
            </div>

            <h1 className="hero-h1 section-title" style={{
              maxWidth: "950px", fontSize: "clamp(2.4rem,5.5vw,4.2rem)", lineHeight: 1.1, marginBottom: "1.5rem"
            }}>
              AI Agents & Automation<br />
              <span style={{ color: "var(--primary)", fontWeight: 300 }}>
                Move Beyond Chatbots Into Workflow-Level AI
              </span>
            </h1>

            <p className="hero-p section-desc" style={{
              maxWidth: "740px", fontSize: "1.15rem", color: "var(--text-muted)", marginBottom: "3rem", lineHeight: 1.8
            }}>
              Governed AI systems that read documents, extract data, reason about business rules, make decisions within guardrails, and execute workflows autonomously. Built on Claude, GPT-4o, LangChain, and n8n. Deployed with human-in-the-loop controls, audit trails, and Australian data residency. FI Digital — AI that is commercially meaningful, not just technically impressive.
            </p>

            <div className="hero-btn" style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <Link href="/book-discovery" style={{
                background: "var(--primary)", color: "#fff", padding: "1rem 2rem",
                borderRadius: "8px", fontWeight: 600, textDecoration: "none",
                display: "inline-flex", alignItems: "center", gap: "0.5rem"
              }}>
                Book an AI Readiness Assessment <ArrowRight size={18} />
              </Link>
              <Link href="/ai-agents/rag-document-intelligence" style={{
                background: "transparent", color: "var(--text)", padding: "1rem 2rem",
                borderRadius: "8px", fontWeight: 600, textDecoration: "none",
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                border: "1px solid var(--border)"
              }}>
                Explore Our AI Services <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* ══ SECTION 1: THE AI THAT MATTERS ═══════════════════════════════ */}
        <section className="section" style={{ background: "var(--bg-secondary)" }}>
          <div className="container">
            <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
              <div className="section-label">Our Position</div>
              <h2 className="section-title" style={{ maxWidth: "800px", margin: "0 auto" }}>
                The AI That Matters Is Not a Chatbot
              </h2>
            </div>

            <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto 4rem auto" }}>
              <p style={{ fontSize: "1.1rem", color: "var(--text)", lineHeight: 1.85, marginBottom: "1.5rem" }}>
                Most AI deployments stall at the chatbot stage. A conversational interface that answers questions, summarises documents, or generates marketing copy. Useful, but limited. The AI that transforms businesses is the AI that operates inside your workflows.
              </p>
              <p style={{ fontSize: "1.1rem", color: "var(--text)", lineHeight: 1.85, marginBottom: "1.5rem" }}>
                An AI agent that reads an incoming invoice, extracts structured data, validates it against your business rules, posts it to your accounting system, and flags exceptions for human review. An AI copilot that assists your compliance team by scanning regulatory updates, comparing them against your current policies, and producing a gap analysis with recommendations. A digital worker that processes hundreds of documents per day with consistent accuracy, freeing your team to focus on judgment-intensive work.
              </p>
              <p style={{ fontSize: "1.1rem", color: "var(--text)", lineHeight: 1.85 }}>
                This is what FI Digital builds. Governed AI systems that go beyond prompts and conversations into real business workflow execution. We use <strong>Claude</strong> for reasoning and document understanding, <strong>GPT-4o</strong> for multimodal processing and code generation, <strong>LangChain</strong> for agent orchestration and memory, and <strong>n8n</strong> for workflow automation and system integration. Every agent operates within defined guardrails. Every decision is logged. Every action is auditable. Human oversight is architectured in, not bolted on.
              </p>
            </div>

            {/* Model tech pills */}
            <div className="reveal" style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              {[
                { name: "Claude (Anthropic)",  color: "#F59E0B", desc: "Reasoning & Document Analysis" },
                { name: "GPT-4o (Azure)",      color: "#3B82F6", desc: "Multimodal & Code Generation" },
                { name: "LangChain",           color: "#10B981", desc: "Agent Orchestration & Memory" },
                { name: "n8n",                 color: "#EF4444", desc: "Workflow Automation & Integration" },
                { name: "Gemini",              color: "#8B5CF6", desc: "High-Volume Cost-Efficient Tasks" },
              ].map((m, i) => (
                <div key={i} style={{
                  padding: "1rem 1.5rem", background: "var(--card-bg)",
                  borderRadius: "12px", border: "1px solid var(--border)",
                  display: "flex", flexDirection: "column", gap: "0.25rem", minWidth: "180px", flex: "1 1 160px", maxWidth: "230px"
                }}>
                  <span style={{ fontWeight: 800, fontSize: "1rem", color: m.color }}>{m.name}</span>
                  <span style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>{m.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SECTION 2: WHAT WE BUILD — 3-panel showcase ══════════════════ */}
        <section className="section" style={{ background: "var(--bg)" }}>
          <div className="container">
            <div className="reveal" style={{ textAlign: "center", marginBottom: "5rem" }}>
              <div className="section-label">Services</div>
              <h2 className="section-title" style={{ maxWidth: "800px", margin: "0 auto" }}>
                What We Build
              </h2>
            </div>

            <div className="what-grid" style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginBottom: "3rem"
            }}>
              {/* Panel 1: RAG */}
              <div className="what-card subpage-card" style={{
                background: "var(--card-bg)", borderRadius: "24px", border: "1px solid var(--border)",
                overflow: "hidden", display: "flex", flexDirection: "column"
              }}>
                <div style={{ height: "220px", position: "relative", background: "linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(59,130,246,0.03) 100%)" }}>
                  <Image src="/images/ai-rag-panel.png" alt="RAG and Document Intelligence" fill style={{ objectFit: "cover", opacity: 0.8 }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, var(--card-bg))" }}></div>
                  <div style={{ position: "absolute", top: "1.5rem", left: "1.5rem", width: "48px", height: "48px", background: "rgba(59,130,246,0.2)", backdropFilter: "blur(8px)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <FileSearch size={24} color="#3B82F6" />
                  </div>
                </div>
                <div style={{ padding: "1.5rem 2rem 2rem" }}>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "0.75rem", color: "var(--text)" }}>RAG & Document Intelligence</h3>
                  <p style={{ fontSize: "0.97rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                    Retrieval-Augmented Generation connects your AI to your institutional knowledge. We build RAG pipelines that ingest your documents (policies, contracts, manuals, regulatory filings), create searchable vector databases, and enable your AI agents to retrieve relevant context before answering questions or making decisions. The result: AI that knows your business, not just the internet.
                  </p>
                  <Link href="/ai-agents/rag-document-intelligence" style={{
                    display: "inline-flex", alignItems: "center", gap: "0.5rem",
                    color: "#3B82F6", fontWeight: 600, textDecoration: "none", fontSize: "0.95rem"
                  }}>
                    Explore RAG Services <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Panel 2: Copilots */}
              <div className="what-card subpage-card" style={{
                background: "var(--card-bg)", borderRadius: "24px", border: "1px solid var(--border)",
                overflow: "hidden", display: "flex", flexDirection: "column"
              }}>
                <div style={{ height: "220px", position: "relative", background: "linear-gradient(135deg, rgba(16,185,129,0.15) 0%, rgba(16,185,129,0.03) 100%)" }}>
                  <Image src="/images/ai-copilot-panel.png" alt="Copilots and Digital Workers" fill style={{ objectFit: "cover", opacity: 0.8 }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, var(--card-bg))" }}></div>
                  <div style={{ position: "absolute", top: "1.5rem", left: "1.5rem", width: "48px", height: "48px", background: "rgba(16,185,129,0.2)", backdropFilter: "blur(8px)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Bot size={24} color="#10B981" />
                  </div>
                </div>
                <div style={{ padding: "1.5rem 2rem 2rem" }}>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "0.75rem", color: "var(--text)" }}>Copilots & Digital Workers</h3>
                  <p style={{ fontSize: "0.97rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                    AI assistants embedded in your team workflows. A Finance copilot that helps your controller analyse variance reports. A Legal copilot that assists your solicitor with contract review. An Operations copilot that helps your dispatcher optimise routes. These are not standalone tools. They sit inside your existing systems and augment your team with the power of reasoning.
                  </p>
                  <Link href="/ai-agents/copilots-digital-workers" style={{
                    display: "inline-flex", alignItems: "center", gap: "0.5rem",
                    color: "#10B981", fontWeight: 600, textDecoration: "none", fontSize: "0.95rem"
                  }}>
                    Explore Copilot Services <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Panel 3: Workflow Automation */}
              <div className="what-card subpage-card" style={{
                background: "var(--card-bg)", borderRadius: "24px", border: "1px solid var(--border)",
                overflow: "hidden", display: "flex", flexDirection: "column"
              }}>
                <div style={{ height: "220px", position: "relative", background: "linear-gradient(135deg, rgba(245,158,11,0.15) 0%, rgba(245,158,11,0.03) 100%)" }}>
                  <Image src="/images/ai-workflow-panel.png" alt="Workflow Automation" fill style={{ objectFit: "cover", opacity: 0.8 }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, var(--card-bg))" }}></div>
                  <div style={{ position: "absolute", top: "1.5rem", left: "1.5rem", width: "48px", height: "48px", background: "rgba(245,158,11,0.2)", backdropFilter: "blur(8px)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Workflow size={24} color="#F59E0B" />
                  </div>
                </div>
                <div style={{ padding: "1.5rem 2rem 2rem" }}>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "0.75rem", color: "var(--text)" }}>Workflow Automation</h3>
                  <p style={{ fontSize: "0.97rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                    End-to-end process automation using n8n and LangChain. Trigger an AI workflow when an email arrives, a form is submitted, a document is uploaded, or a database record changes. The AI processes the input, makes a decision, executes the next step, and logs the outcome. No manual intervention required for routine tasks. Exceptions are flagged for human review.
                  </p>
                  <Link href="/ai-agents/workflow-automation" style={{
                    display: "inline-flex", alignItems: "center", gap: "0.5rem",
                    color: "#F59E0B", fontWeight: 600, textDecoration: "none", fontSize: "0.95rem"
                  }}>
                    Explore Workflow Automation <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ SECTION 3: GOVERNANCE & GUARDRAILS ═══════════════════════════ */}
        <section className="section" style={{ background: "var(--bg-secondary)" }}>
          <div className="container">
            <div className="reveal" style={{ textAlign: "center", marginBottom: "5rem" }}>
              <div className="section-label">Trust & Safety</div>
              <h2 className="section-title" style={{ maxWidth: "800px", margin: "0 auto 1.5rem auto" }}>
                Governance and Guardrails
              </h2>
              <p className="section-desc" style={{ maxWidth: "700px", margin: "0 auto", fontSize: "1.1rem", color: "var(--text-muted)" }}>
                AI without governance is a liability. FI Digital architects governance into every AI deployment.
              </p>
            </div>

            <div className="guardrails-grid" style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.75rem", marginBottom: "4rem"
            }}>
              {[
                {
                  icon: Eye,
                  color: "#3B82F6",
                  title: "Human-in-the-Loop Controls",
                  desc: "High-stakes decisions (financial approvals above a threshold, legal interpretations, patient-affecting recommendations) always route to a qualified human for final approval. The AI does the heavy lifting. The human makes the judgment call."
                },
                {
                  icon: BarChart3,
                  color: "#10B981",
                  title: "Audit Trails",
                  desc: "Every model input, output, decision, and action is recorded. Your compliance team can review any agent decision at any time. Full traceability from trigger to outcome."
                },
                {
                  icon: Cpu,
                  color: "#F59E0B",
                  title: "Model Evaluation",
                  desc: "We select the right model for each task. Claude for reasoning and long-context analysis. GPT-4o for multimodal processing. Gemini for high-volume, cost-effective tasks. We benchmark accuracy, latency, and cost before committing to a model selection."
                },
                {
                  icon: Lock,
                  color: "#EF4444",
                  title: "Guardrails",
                  desc: "An invoice processing agent cannot approve payments above a defined threshold. A contract review agent cannot modify contract terms. A compliance agent cannot override human decisions. These boundaries are coded into the agent architecture, not left to prompts."
                },
                {
                  icon: ShieldCheck,
                  color: "#8B5CF6",
                  title: "Australian Data Residency",
                  desc: "Deployed via AWS Bedrock (Sydney region) and Azure OpenAI Service (Australia East). Your data does not leave Australia without explicit approval. You remain the data controller."
                },
              ].map((item, i) => (
                <div key={i} className="guardrail-card" style={{
                  background: "var(--card-bg)", padding: "2rem", borderRadius: "20px",
                  border: "1px solid var(--border)", cursor: "default"
                }}>
                  <div style={{ width: "54px", height: "54px", background: item.color + "15", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                    <item.icon size={26} color={item.color} />
                  </div>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 800, marginBottom: "0.75rem", color: "var(--text)" }}>{item.title}</h3>
                  <p style={{ fontSize: "0.93rem", color: "var(--text-muted)", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Accuracy stat callout */}
            <div className="reveal" style={{
              background: "linear-gradient(135deg, rgba(29,78,216,0.1) 0%, rgba(16,185,129,0.1) 100%)",
              padding: "3rem", borderRadius: "24px", border: "1px solid rgba(29,78,216,0.2)",
              display: "flex", flexWrap: "wrap", gap: "3rem", alignItems: "center", justifyContent: "center", textAlign: "center"
            }}>
              {[
                { stat: "95–99%", label: "Agent accuracy on routine tasks" },
                { stat: "40+",   label: "Platform integrations via n8n" },
                { stat: "8–12w", label: "Single-workflow agent to production" },
                { stat: "100%",  label: "Australian data residency" },
              ].map((s, i) => (
                <div key={i} style={{ flex: "1 1 160px" }}>
                  <div style={{ fontSize: "clamp(2rem,4vw,2.75rem)", fontWeight: 900, color: "var(--primary)", marginBottom: "0.4rem" }}>{s.stat}</div>
                  <div style={{ fontSize: "0.9rem", color: "var(--text-muted)", fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ FAQ ═══════════════════════════════════════════════════════════ */}
        <section className="section" style={{ background: "var(--bg)" }}>
          <div className="container" style={{ maxWidth: "860px" }}>
            <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
              <div className="section-label">FAQ</div>
              <h2 className="section-title" style={{ maxWidth: "700px", margin: "0 auto" }}>
                Frequently Asked Questions
              </h2>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {FAQS.map((faq, i) => (
                <div key={i} className="reveal" style={{
                  background: "var(--card-bg)", borderRadius: "16px",
                  border: "1px solid var(--border)", overflow: "hidden"
                }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                      padding: "1.5rem 2rem", background: "none", border: "none",
                      cursor: "pointer", textAlign: "left", gap: "1rem"
                    }}
                  >
                    <span style={{ fontSize: "1.03rem", fontWeight: 700, color: "var(--text)", flex: 1 }}>{faq.q}</span>
                    <ChevronDown
                      size={20}
                      color="var(--text-muted)"
                      style={{ minWidth: "20px", transform: openFaq === i ? "rotate(180deg)" : "rotate(0)", transition: "0.3s" }}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="faq-answer" style={{ padding: "0 2rem 1.75rem 2rem", borderTop: "1px solid var(--border)" }}>
                      <p style={{ fontSize: "0.98rem", color: "var(--text-muted)", lineHeight: 1.8, paddingTop: "1.25rem" }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CTA FOOTER BAND ═══════════════════════════════════════════════ */}
        <section className="section" style={{
          background: "linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(29,78,216,0.08) 100%)",
          borderTop: "1px solid var(--border)"
        }}>
          <div className="container" style={{ textAlign: "center" }}>
            <div className="reveal">
              <h2 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 800, marginBottom: "1.25rem" }}>
                Ready to move beyond the chatbot?
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", maxWidth: "600px", margin: "0 auto 2.5rem auto", lineHeight: 1.7 }}>
                Book a free AI Readiness Assessment. We will identify the highest-value automation opportunities in your business and outline a governed deployment roadmap.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center", marginBottom: "2.5rem" }}>
                <Link href="/book-discovery" style={{
                  background: "var(--primary)", color: "#fff", padding: "1rem 2.25rem",
                  borderRadius: "8px", fontWeight: 600, textDecoration: "none",
                  display: "inline-flex", alignItems: "center", gap: "0.5rem"
                }}>
                  Book an AI Readiness Assessment <ArrowRight size={18} />
                </Link>
              </div>
              {/* Sub-page links */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
                {SUB_PAGES.map((s, i) => (
                  <Link key={i} href={s.href} style={{
                    padding: "0.6rem 1.25rem", borderRadius: "50px",
                    border: "1px solid var(--border)", background: "var(--card-bg)",
                    textDecoration: "none", color: "var(--text)", fontWeight: 600, fontSize: "0.9rem",
                    display: "inline-flex", alignItems: "center", gap: "0.5rem"
                  }}>
                    <s.icon size={15} color={s.color} /> {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
