"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, ChevronRight, ChevronDown,
  Zap, GitBranch, Clock, CheckCircle2,
  Mail, FileText, Database, Bell, RefreshCw, Settings
} from "lucide-react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const USE_CASES = [
  {
    num: "01", color: "#10B981",
    title: "Lead & Enquiry Processing",
    saving: "Hours → Seconds",
    savingLabel: "Response time",
    body: "A new enquiry arrives via website form, email, or LinkedIn. The automation extracts contact and company details, enriches the record with company data, creates a CRM contact and opportunity, assigns to the appropriate sales representative, sends a personalised acknowledgement email, and creates a follow-up task.",
    steps: ["Extract contact & company data", "Enrich with company intelligence", "Create CRM contact & opportunity", "Assign to sales rep", "Send personalised acknowledgement", "Create follow-up task"],
  },
  {
    num: "02", color: "#14B8A6",
    title: "Invoice & Accounts Payable",
    saving: "3 min → 30 sec",
    savingLabel: "Per invoice processed",
    body: "A supplier invoice arrives by email. The automation extracts invoice data using AI document intelligence, validates the supplier, matches line items to open purchase orders, checks GST calculation, routes for approval above a threshold, posts to your accounting system on approval, and files the original document.",
    steps: ["Extract invoice data via AI", "Validate supplier & match POs", "Check GST calculation", "Route for approval if above threshold", "Post to accounting system", "File original document"],
  },
  {
    num: "03", color: "#F97316",
    title: "Contract Lifecycle Automation",
    saving: "7 steps → 1",
    savingLabel: "Governed automated flow",
    body: "A contract request is submitted. The automation generates the contract from your approved template library, routes for internal legal review, sends for e-signature when approved, monitors signature status, updates the contract register when fully executed, and triggers a renewal reminder.",
    steps: ["Generate from approved template", "Route for legal review", "Send for e-signature", "Monitor signature status", "Update contract register", "Trigger renewal reminder"],
  },
  {
    num: "04", color: "#8B5CF6",
    title: "Customer Onboarding & KYC",
    saving: "Days → Hours",
    savingLabel: "Onboarding time",
    body: "A new customer completes your onboarding form. The automation collects identity documents, submits for verification, runs sanctions and PEP checks, calculates a risk score, and either completes onboarding automatically for standard-risk customers or routes to compliance for elevated-risk cases.",
    steps: ["Collect identity documents", "Submit for verification", "Run sanctions & PEP checks", "Calculate risk score", "Auto-complete low-risk onboarding", "Route elevated-risk to compliance"],
  },
  {
    num: "05", color: "#3B82F6",
    title: "Reporting & Data Distribution",
    saving: "2 hrs → Zero-touch",
    savingLabel: "Daily management briefing",
    body: "At a scheduled time each morning, the automation extracts operational data from source systems, assembles a management briefing in your house template, performs anomaly detection, highlights exceptions, and distributes to stakeholders by email and Slack.",
    steps: ["Extract data from source systems", "Assemble briefing in template", "Run anomaly detection", "Highlight exceptions", "Distribute by email & Slack", "Archive for audit"],
  },
];

const FAQS = [
  { q: "What is AI workflow automation?", a: "AI workflow automation combines traditional process automation (trigger an action when an event occurs) with AI reasoning (apply intelligent decision-making to unstructured inputs). FI Digital builds automation workflows that handle both structured and unstructured inputs using n8n for orchestration and Claude or GPT-4o for reasoning." },
  { q: "What is n8n and why do you use it?", a: "n8n is an open-source workflow automation platform designed for enterprise deployment. Unlike SaaS automation tools, n8n can be self-hosted on Australian infrastructure, meaning your data and workflows remain within your jurisdiction. It connects to 400+ platforms, handles complex branching logic, and supports custom code execution." },
  { q: "How is this different from Zapier or Power Automate?", a: "Zapier and Power Automate are well-suited for simple, structured automation. They have limitations for enterprise use: data passes through vendor-controlled US infrastructure, complex multi-step AI reasoning is difficult, and self-hosting is unavailable. FI Digital deploys n8n self-hosted on Australian infrastructure with custom AI reasoning steps and enterprise-grade error handling." },
  { q: "Which systems can you connect to?", a: "We connect to any system with an API. Common connections include Zoho CRM and Books, Salesforce, Microsoft Dynamics, Xero, MYOB, SAP, SharePoint, Outlook, Gmail, Slack, Teams, DocuSign, HubSpot, Shopify, Databricks, Snowflake, and custom databases." },
  { q: "How long does it take to build an automation workflow?", a: "A single, focused workflow takes 4 to 8 weeks from Discovery to production. A complex multi-workflow programme takes 12 to 20 weeks. We sequence delivery so your first automation is live within 6 to 8 weeks." },
  { q: "What happens when an automated workflow fails or encounters an error?", a: "Failed steps retry with exponential backoff for transient errors. Persistent failures trigger an alert with the full error context and the unprocessed item in a review queue for manual reprocessing. We monitor workflow health via Datadog and provide weekly error summary reports during the first 90 days after go-live." },
  { q: "Is our data processed in Australia?", a: "Yes. n8n is self-hosted on AWS Sydney or Azure Australia East. AI model calls are made to AWS Bedrock (Sydney) or Azure OpenAI Service (Australia East). Your operational data does not leave Australian jurisdiction at any point in the workflow execution." },
];

const FLOW_STEPS = [
  { icon: Bell,       color: "#F97316", label: "Trigger",        sub: "Email · Form · Upload · Schedule · CRM event" },
  { icon: FileText,   color: "#10B981", label: "AI Processing",  sub: "Claude / GPT-4o reads, classifies, extracts" },
  { icon: GitBranch,  color: "#14B8A6", label: "Decision",       sub: "Rules applied · Thresholds checked · Routing determined" },
  { icon: Zap,        color: "#8B5CF6", label: "Action",         sub: "CRM update · Accounting post · Email · File · Notify" },
  { icon: CheckCircle2,color:"#3B82F6", label: "Audit Log",      sub: "Timestamp · Payload · Outcome · Model version" },
];

export default function WorkflowClient() {
  const containerRef = useRef(null);
  const [openCase, setOpenCase] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  useGSAP(() => {
    gsap.from(".hero-badge", { y: -14, autoAlpha: 0, duration: 0.4, ease: "power2.out" });
    gsap.from(".hero-h1",   { y: 32,  autoAlpha: 0, duration: 0.6, delay: 0.1, ease: "power3.out" });
    gsap.from(".hero-sub",  { y: 20,  autoAlpha: 0, duration: 0.5, delay: 0.22, ease: "power2.out" });
    gsap.from(".hero-cta",  { y: 18,  autoAlpha: 0, duration: 0.45, delay: 0.34, ease: "power2.out" });

    gsap.utils.toArray(".reveal").forEach(el => {
      gsap.fromTo(el,
        { y: 28, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.6, ease: "power2.out",
          clearProps: "transform,opacity,visibility",
          scrollTrigger: { trigger: el, start: "top 87%", once: true } }
      );
    });

    gsap.fromTo(".flow-node",
      { scale: 0.8, autoAlpha: 0 },
      { scale: 1, autoAlpha: 1, duration: 0.4, stagger: 0.12, ease: "back.out(1.3)",
        scrollTrigger: { trigger: ".flow-row", start: "top 85%", once: true } }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <style>{`
        @keyframes slideDown { from { opacity:0; transform:translateY(-8px); } to { opacity:1; transform:translateY(0); } }
        .case-body { animation: slideDown 0.28s ease; }
        .faq-body  { animation: slideDown 0.25s ease; }
        .use-case-row { transition: background 0.2s ease; }
        .use-case-row:hover { background: var(--bg-secondary) !important; }
        @keyframes pulse { 0%,100%{opacity:0.35} 50%{opacity:0.85} }
        .flow-connector { animation: pulse 2s ease-in-out infinite; }
        @media (max-width: 760px) {
          .flow-row { flex-direction: column !important; align-items: flex-start !important; }
          .flow-connector { transform: rotate(90deg); }
          .gap-grid { grid-template-columns: 1fr !important; }
          .stack-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <main style={{ paddingTop: "var(--header-h)", overflow: "hidden" }}>

        {/* ══ HERO ══════════════════════════════════════════════════════════ */}
        <section style={{
          position: "relative", minHeight: "82vh", display: "flex", alignItems: "center",
          padding: "clamp(80px,10vh,120px) 1.5rem 80px",
          background: "var(--bg)", overflow: "hidden",
        }}>
          <div style={{ position:"absolute", top:"15%", right:"3%", width:"600px", height:"600px",
            background:"radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)",
            pointerEvents:"none", zIndex:0 }} />
          <div style={{ position:"absolute", bottom:"10%", left:"8%", width:"400px", height:"400px",
            background:"radial-gradient(circle, rgba(20,184,166,0.09) 0%, transparent 70%)",
            pointerEvents:"none", zIndex:0 }} />

          {/* Hero image */}
          <div style={{ position:"absolute", top:0, right:0, width:"52%", height:"100%", zIndex:0, opacity:0.28, pointerEvents:"none" }}>
            <Image src="/images/workflow-hero.png" alt="AI Workflow Automation" fill
              style={{ objectFit:"cover",
                maskImage:"radial-gradient(ellipse at right, black, transparent 72%)",
                WebkitMaskImage:"radial-gradient(ellipse at right, black, transparent 72%)" }} />
          </div>

          <div className="container" style={{ position:"relative", zIndex:1 }}>
            <div className="hero-badge" style={{
              display:"inline-flex", alignItems:"center", gap:"0.75rem",
              background:"rgba(16,185,129,0.1)", border:"1px solid rgba(16,185,129,0.25)",
              padding:"0.6rem 1.25rem", borderRadius:"50px", marginBottom:"2rem"
            }}>
              <div style={{ position:"relative", width:"60px", height:"22px" }}>
                <Image src="/images/n8n.png" alt="n8n" fill style={{ objectFit:"contain" }} />
              </div>
              <span style={{ color:"#10B981", fontWeight:700, fontSize:"0.88rem" }}>
                n8n · LangChain · Claude · GPT-4o · 400+ Integrations
              </span>
            </div>

            <h1 className="hero-h1 section-title" style={{
              maxWidth:"900px", fontSize:"clamp(2.2rem,5vw,3.8rem)", lineHeight:1.1, marginBottom:"1.5rem"
            }}>
              Workflow Automation<br />
              <span style={{ color:"var(--primary)", fontWeight:300 }}>
                Your Routine Processes, Automated. Your Best People, Freed.
              </span>
            </h1>

            <p className="hero-sub section-desc" style={{
              maxWidth:"700px", fontSize:"1.1rem", color:"var(--text-muted)", marginBottom:"3rem", lineHeight:1.82
            }}>
              AI workflow automation using n8n and LangChain that triggers when an event occurs, reads the input, applies AI reasoning, executes the next step across your connected systems, and logs everything. No manual intervention for routine tasks. Exceptions flagged for human review.
            </p>

            <div className="hero-cta" style={{ display:"flex", flexWrap:"wrap", gap:"1rem" }}>
              <Link href="/book-discovery" style={{
                background:"#10B981", color:"#fff", padding:"1rem 2rem",
                borderRadius:"8px", fontWeight:600, textDecoration:"none",
                display:"inline-flex", alignItems:"center", gap:"0.5rem"
              }}>
                Book a Workflow Discovery Session <ArrowRight size={18} />
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

        {/* ══ STAT STRIP ════════════════════════════════════════════════════ */}
        <div style={{ background:"var(--bg-secondary)", borderTop:"1px solid var(--border)", borderBottom:"1px solid var(--border)", padding:"2.5rem 1.5rem" }}>
          <div className="container">
            <div style={{ display:"flex", flexWrap:"wrap", gap:"2rem", justifyContent:"center", textAlign:"center" }}>
              {[
                { stat:"400+",    label:"Platform integrations via n8n" },
                { stat:"4–8 wks", label:"First workflow to production" },
                { stat:"30 sec",  label:"Invoice processed end-to-end" },
                { stat:"100%",    label:"Australian data residency" },
              ].map((s,i) => (
                <div key={i} className="reveal" style={{ flex:"1 1 180px" }}>
                  <div style={{ fontSize:"clamp(1.7rem,3.5vw,2.6rem)", fontWeight:900, color:"#10B981", marginBottom:"0.35rem" }}>{s.stat}</div>
                  <div style={{ fontSize:"0.88rem", color:"var(--text-muted)", fontWeight:500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ SECTION 1: THE GAP ═══════════════════════════════════════════ */}
        <section className="section" style={{ background:"var(--bg)" }}>
          <div className="container">
            <div style={{ display:"flex", flexWrap:"wrap", gap:"5rem", alignItems:"center" }}>
              <div className="reveal" style={{ flex:"1 1 420px" }}>
                <div className="section-label">The Problem</div>
                <h2 className="section-title" style={{ maxWidth:"560px", marginBottom:"2rem" }}>
                  The Gap Between Systems and Productivity
                </h2>
                <p style={{ fontSize:"1.05rem", color:"var(--text)", lineHeight:1.85, marginBottom:"1.4rem" }}>
                  The average Australian mid-market business runs 15 to 40 software applications — CRM, accounting, inventory, support desk, document management, email, HR, and a collection of industry-specific tools. None of them were purchased to talk to each other.
                </p>
                <p style={{ fontSize:"1.05rem", color:"var(--text)", lineHeight:1.85, marginBottom:"1.4rem" }}>
                  The gap between these systems is filled by your people — the accounts payable officer who exports from the accounting system and re-enters into the ERP; the operations coordinator who monitors five dashboards and assembles a daily briefing manually.
                </p>
                <p style={{ fontSize:"1.05rem", color:"var(--text)", lineHeight:1.85 }}>
                  These tasks are tedious, error-prone, and consuming time your most capable people should be spending on <strong>judgment, relationships, and decisions.</strong>
                </p>
              </div>

              {/* Gap visualiser */}
              <div className="reveal" style={{ flex:"1 1 340px" }}>
                <div style={{ display:"flex", flexDirection:"column", gap:"0.75rem" }}>
                  {[
                    { sys:"Accounting System", arrow:"→  Manual export + re-entry  →", dest:"ERP", color:"#EF4444", fill:"rgba(239,68,68,0.07)" },
                    { sys:"5 Dashboards",      arrow:"→  Manual extract + assembly  →", dest:"Briefing", color:"#F97316", fill:"rgba(249,115,22,0.07)" },
                    { sys:"Regulatory Portal", arrow:"→  Manual download + update  →", dest:"Policy Register", color:"#8B5CF6", fill:"rgba(139,92,246,0.07)" },
                  ].map((gap,i) => (
                    <div key={i} style={{ background:gap.fill, borderRadius:"14px", padding:"1.1rem 1.5rem", display:"flex", alignItems:"center", gap:"0.75rem", flexWrap:"wrap" }}>
                      <span style={{ fontWeight:700, fontSize:"0.88rem", color:"var(--text)" }}>{gap.sys}</span>
                      <span style={{ fontSize:"0.78rem", color:gap.color, fontWeight:600, whiteSpace:"nowrap" }}>{gap.arrow}</span>
                      <span style={{ fontWeight:700, fontSize:"0.88rem", color:"var(--text)" }}>{gap.dest}</span>
                    </div>
                  ))}
                  <div style={{ background:"rgba(16,185,129,0.07)", borderRadius:"14px", padding:"1.25rem 1.5rem", marginTop:"0.5rem", textAlign:"center" }}>
                    <span style={{ fontSize:"0.7rem", fontWeight:800, color:"#10B981", textTransform:"uppercase", letterSpacing:"0.1em", display:"block", marginBottom:"0.4rem" }}>With AI Workflow Automation</span>
                    <span style={{ fontSize:"0.92rem", fontWeight:700, color:"var(--text)" }}>All three → automated, end-to-end, zero-touch</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ SECTION 2: HOW IT WORKS — Flow diagram ═══════════════════════ */}
        <section className="section" style={{ background:"var(--bg-secondary)" }}>
          <div className="container">
            <div className="reveal" style={{ textAlign:"center", marginBottom:"4.5rem" }}>
              <div className="section-label">The Architecture</div>
              <h2 className="section-title" style={{ maxWidth:"740px", margin:"0 auto 1rem auto" }}>
                How AI Workflow Automation Works
              </h2>
              <p style={{ color:"var(--text-muted)", fontSize:"1rem", maxWidth:"560px", margin:"0 auto" }}>
                Every automation follows the same five-layer pattern — from trigger to auditable outcome.
              </p>
            </div>

            {/* Flow strip */}
            <div className="flow-row" style={{ display:"flex", alignItems:"stretch", justifyContent:"center", gap:"0", overflowX:"auto", paddingBottom:"1rem" }}>
              {FLOW_STEPS.map((step, i) => (
                <div key={i} style={{ display:"flex", alignItems:"center", flexShrink:0 }}>
                  <div className="flow-node" style={{
                    background:"var(--card-bg)", borderRadius:"18px",
                    padding:"2rem 1.75rem", textAlign:"center",
                    width:"170px", boxShadow:"0 4px 20px rgba(0,0,0,0.07)"
                  }}>
                    <div style={{ width:"52px", height:"52px", borderRadius:"50%", background:`${step.color}12`,
                      display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 1rem" }}>
                      <step.icon size={22} color={step.color} />
                    </div>
                    <div style={{ fontSize:"0.85rem", fontWeight:800, color:"var(--text)", marginBottom:"0.5rem" }}>{step.label}</div>
                    <div style={{ fontSize:"0.72rem", color:"var(--text-muted)", lineHeight:1.5 }}>{step.sub}</div>
                  </div>
                  {i < FLOW_STEPS.length - 1 && (
                    <div className="flow-connector" style={{
                      width:"36px", height:"2px", flexShrink:0,
                      background:`linear-gradient(to right, ${step.color}, ${FLOW_STEPS[i+1].color})`,
                      margin:"0 4px"
                    }} />
                  )}
                </div>
              ))}
            </div>

            {/* n8n + LangChain logos */}
            <div className="reveal" style={{ marginTop:"3rem", textAlign:"center" }}>
              <div style={{ display:"inline-flex", alignItems:"center", gap:"1.75rem", flexWrap:"wrap", justifyContent:"center",
                background:"var(--card-bg)", borderRadius:"50px", padding:"1rem 2rem",
                boxShadow:"0 2px 12px rgba(0,0,0,0.06)" }}>
                <span style={{ fontSize:"0.7rem", fontWeight:800, color:"var(--text-muted)", textTransform:"uppercase", letterSpacing:"0.08em" }}>Orchestrated by</span>
                {[
                  { src:"/images/n8n.png",              alt:"n8n",       w:52, h:20 },
                  { src:"/images/langchain-nobg.png",   alt:"LangChain", w:80, h:24 },
                  { src:"/images/claude.png",           alt:"Claude",    w:64, h:24 },
                  { src:"/images/openai-nobg.png",      alt:"OpenAI",    w:64, h:24 },
                ].map((l,j) => (
                  <div key={j} style={{ position:"relative", width:`${l.w}px`, height:`${l.h}px`, opacity:0.85 }}>
                    <Image src={l.src} alt={l.alt} fill style={{ objectFit:"contain" }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ SECTION 3: USE CASES — Accordion list ════════════════════════ */}
        <section className="section" style={{ background:"var(--bg)" }}>
          <div className="container">
            <div className="reveal" style={{ textAlign:"center", marginBottom:"4rem" }}>
              <div className="section-label">Use Cases</div>
              <h2 className="section-title" style={{ maxWidth:"800px", margin:"0 auto" }}>
                Workflow Automation Use Cases
              </h2>
            </div>

            <div style={{ display:"flex", flexDirection:"column", gap:"0.75rem", maxWidth:"900px", margin:"0 auto" }}>
              {USE_CASES.map((uc, i) => (
                <div key={i} className="reveal use-case-row" style={{
                  background:"var(--card-bg)", borderRadius:"18px",
                  overflow:"hidden", cursor:"pointer",
                  boxShadow:"0 2px 12px rgba(0,0,0,0.05)"
                }} onClick={() => setOpenCase(openCase === i ? null : i)}>

                  {/* Header row */}
                  <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"1.5rem 2rem", gap:"1rem" }}>
                    <div style={{ display:"flex", alignItems:"center", gap:"1.25rem", flex:1, minWidth:0 }}>
                      <span style={{
                        fontSize:"0.72rem", fontWeight:900, color:uc.color,
                        background:`${uc.color}0d`, padding:"0.25rem 0.65rem",
                        borderRadius:"50px", whiteSpace:"nowrap", flexShrink:0
                      }}>{uc.num}</span>
                      <span style={{ fontSize:"1.05rem", fontWeight:800, color:"var(--text)" }}>{uc.title}</span>
                    </div>
                    <div style={{ display:"flex", alignItems:"center", gap:"1.5rem", flexShrink:0 }}>
                      <div style={{ textAlign:"right", display:"flex", flexDirection:"column" }}>
                        <span style={{ fontSize:"0.85rem", fontWeight:800, color:uc.color }}>{uc.saving}</span>
                        <span style={{ fontSize:"0.7rem", color:"var(--text-muted)" }}>{uc.savingLabel}</span>
                      </div>
                      <ChevronDown size={18} color="var(--text-muted)"
                        style={{ transform: openCase === i ? "rotate(180deg)" : "rotate(0)", transition:"0.3s", flexShrink:0 }} />
                    </div>
                  </div>

                  {/* Expanded body */}
                  {openCase === i && (
                    <div className="case-body" style={{ padding:"0 2rem 2rem", borderTop:"1px solid var(--border)" }}>
                      <p style={{ fontSize:"0.95rem", color:"var(--text-muted)", lineHeight:1.8, margin:"1.5rem 0 1.25rem" }}>{uc.body}</p>
                      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))", gap:"0.5rem" }}>
                        {uc.steps.map((step, j) => (
                          <div key={j} style={{ display:"flex", alignItems:"flex-start", gap:"0.65rem" }}>
                            <div style={{
                              width:"22px", height:"22px", borderRadius:"50%",
                              background:`${uc.color}12`, flexShrink:0,
                              display:"flex", alignItems:"center", justifyContent:"center",
                              fontSize:"0.65rem", fontWeight:800, color:uc.color, marginTop:"1px"
                            }}>{j + 1}</div>
                            <span style={{ fontSize:"0.88rem", color:"var(--text)", lineHeight:1.5 }}>{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SECTION 4: TECH STACK ════════════════════════════════════════ */}
        <section className="section" style={{ background:"var(--bg-secondary)" }}>
          <div className="container">
            <div className="reveal" style={{ textAlign:"center", marginBottom:"4rem" }}>
              <div className="section-label">Technology</div>
              <h2 className="section-title" style={{ maxWidth:"760px", margin:"0 auto" }}>
                Our Automation Technology Stack
              </h2>
            </div>

            <div className="stack-grid reveal" style={{ display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:"1.75rem" }}>
              {[
                {
                  color:"#10B981",
                  logoSrc:"/images/n8n.png",
                  logoW:72, logoH:28,
                  name:"n8n",
                  tagline:"Primary workflow orchestration",
                  body:"Self-hosted on Australian AWS or Azure infrastructure — your automation workflows and data remain within Australian jurisdiction. Connects to 400+ platforms via native integrations and custom HTTP nodes for any system with an API.",
                  tags:["Self-hosted AU", "400+ integrations", "Branching logic", "Retry & error handling"],
                },
                {
                  color:"#6366F1",
                  logoSrc:"/images/langchain-nobg.png",
                  logoW:100, logoH:28,
                  name:"LangChain",
                  tagline:"AI orchestration framework",
                  body:"For workflows requiring complex multi-step AI reasoning — where the workflow requires the agent to reason, retrieve from a knowledge base, use a tool, evaluate the result, and then act.",
                  tags:["Multi-step reasoning", "RAG integration", "Tool use", "Agent chains"],
                },
                {
                  color:"#F97316",
                  logoSrc:null,
                  name:"Custom API Layer",
                  tagline:"Fill the integration gaps",
                  body:"Where native integrations do not exist, REST API integrations built with custom authentication handlers, rate limiting management, and error recovery — ensuring every system in your stack can participate.",
                  tags:["REST API", "OAuth 2.0", "Rate limiting", "Error recovery"],
                },
              ].map((tech, i) => (
                <div key={i} style={{
                  background:"var(--card-bg)", borderRadius:"22px",
                  padding:"2.25rem 2.25rem 2.5rem",
                  boxShadow:"0 2px 16px rgba(0,0,0,0.06)", display:"flex", flexDirection:"column", gap:"1rem"
                }}>
                  {/* Logo or name */}
                  <div style={{ height:"32px", display:"flex", alignItems:"center" }}>
                    {tech.logoSrc ? (
                      <div style={{ position:"relative", width:`${tech.logoW}px`, height:`${tech.logoH}px` }}>
                        <Image src={tech.logoSrc} alt={tech.name} fill style={{ objectFit:"contain" }} />
                      </div>
                    ) : (
                      <span style={{ fontSize:"1.1rem", fontWeight:900, color:tech.color }}>{tech.name}</span>
                    )}
                  </div>
                  <div style={{ fontSize:"0.72rem", fontWeight:800, color:tech.color, textTransform:"uppercase", letterSpacing:"0.1em" }}>{tech.tagline}</div>
                  <p style={{ fontSize:"0.93rem", color:"var(--text-muted)", lineHeight:1.75, margin:0 }}>{tech.body}</p>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:"0.4rem", marginTop:"auto" }}>
                    {tech.tags.map((t,j) => (
                      <span key={j} style={{
                        padding:"0.28rem 0.75rem", background:`${tech.color}0d`,
                        borderRadius:"50px", fontSize:"0.75rem", fontWeight:700, color:tech.color
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Infrastructure logos */}
            <div className="reveal" style={{
              marginTop:"2.5rem", background:"var(--card-bg)", borderRadius:"18px",
              padding:"1.75rem 2.5rem", boxShadow:"0 2px 12px rgba(0,0,0,0.05)",
              display:"flex", flexWrap:"wrap", alignItems:"center", gap:"2rem", justifyContent:"center"
            }}>
              <span style={{ fontSize:"0.72rem", fontWeight:800, color:"var(--text-muted)", textTransform:"uppercase", letterSpacing:"0.08em" }}>Hosted on</span>
              {[
                { src:"/images/aws-nobg.png",   alt:"AWS",   label:"AWS Sydney" },
                { src:"/images/azure-nobg.png", alt:"Azure", label:"Azure Australia East" },
              ].map((l,i) => (
                <div key={i} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"0.4rem" }}>
                  <div style={{ position:"relative", width:"64px", height:"24px" }}>
                    <Image src={l.src} alt={l.alt} fill style={{ objectFit:"contain" }} />
                  </div>
                  <span style={{ fontSize:"0.65rem", color:"var(--text-muted)", fontWeight:600 }}>{l.label}</span>
                </div>
              ))}
              <div style={{ width:"1px", height:"32px", background:"var(--border)" }} />
              <div style={{ display:"flex", alignItems:"center", gap:"0.5rem" }}>
                <CheckCircle2 size={14} color="#10B981" />
                <span style={{ fontSize:"0.8rem", fontWeight:700, color:"var(--text-muted)" }}>100% Australian data residency</span>
              </div>
            </div>
          </div>
        </section>

        {/* ══ FAQ ══════════════════════════════════════════════════════════ */}
        <section className="section" style={{ background:"var(--bg)" }}>
          <div className="container" style={{ maxWidth:"860px" }}>
            <div className="reveal" style={{ textAlign:"center", marginBottom:"4rem" }}>
              <div className="section-label">FAQ</div>
              <h2 className="section-title" style={{ maxWidth:"700px", margin:"0 auto" }}>
                Frequently Asked Questions
              </h2>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
              {FAQS.map((faq, i) => (
                <div key={i} className="reveal" style={{
                  background:"var(--card-bg)", borderRadius:"16px",
                  boxShadow:"0 1px 8px rgba(0,0,0,0.05)", overflow:"hidden"
                }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between",
                      padding:"1.4rem 2rem", background:"none", border:"none", cursor:"pointer", textAlign:"left", gap:"1rem" }}>
                    <span style={{ fontSize:"1rem", fontWeight:700, color:"var(--text)", flex:1 }}>{faq.q}</span>
                    <ChevronDown size={20} color="var(--text-muted)"
                      style={{ minWidth:"20px", transform:openFaq===i?"rotate(180deg)":"rotate(0)", transition:"0.3s" }} />
                  </button>
                  {openFaq === i && (
                    <div className="faq-body" style={{ padding:"0 2rem 1.75rem", borderTop:"1px solid var(--border)" }}>
                      <p style={{ fontSize:"0.96rem", color:"var(--text-muted)", lineHeight:1.8, paddingTop:"1.25rem", margin:0 }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CTA ══════════════════════════════════════════════════════════ */}
        <section className="section" style={{
          background:"linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(20,184,166,0.08) 100%)",
          borderTop:"1px solid var(--border)"
        }}>
          <div className="container" style={{ textAlign:"center" }}>
            <div className="reveal">
              <h2 style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:800, marginBottom:"1.25rem" }}>
                Ready to automate your routine processes?
              </h2>
              <p style={{ fontSize:"1.1rem", color:"var(--text-muted)", maxWidth:"580px", margin:"0 auto 2.5rem auto", lineHeight:1.7 }}>
                Book a free Workflow Automation Discovery session. We'll map your highest-volume manual processes and show you how quickly they can be automated on Australian infrastructure.
              </p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:"1rem", justifyContent:"center" }}>
                <Link href="/book-discovery" style={{
                  background:"#10B981", color:"#fff", padding:"1rem 2.25rem",
                  borderRadius:"8px", fontWeight:600, textDecoration:"none",
                  display:"inline-flex", alignItems:"center", gap:"0.5rem"
                }}>
                  Book a Workflow Discovery Session <ArrowRight size={18} />
                </Link>
                <Link href="/ai-agents" style={{
                  background:"transparent", color:"var(--text)", padding:"1rem 2.25rem",
                  borderRadius:"8px", fontWeight:600, textDecoration:"none",
                  display:"inline-flex", alignItems:"center", gap:"0.5rem",
                  border:"1px solid var(--border)"
                }}>
                  Explore All AI Agent Services <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
