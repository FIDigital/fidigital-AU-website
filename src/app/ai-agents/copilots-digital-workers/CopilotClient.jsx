"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, ChevronRight, ChevronDown,
  Bot, Users, Shield, Clock, CheckCircle2,
  Zap, FileText, BarChart2, Lock, Settings,
  MessageSquare, TrendingUp
} from "lucide-react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const COPILOT_FUNCTIONS = [
  {
    id: "finance",
    label: "Finance",
    color: "#6366F1",
    icon: BarChart2,
    title: "Finance & Accounting Copilot",
    body: "A Finance copilot embedded in your reporting environment summarises variance drivers in plain language, compares current performance against budget and prior year, flags anomalies that warrant investigation, and drafts management report commentary. Month-end commentary that took two days to write takes two hours.",
    outcomes: ["Variance analysis in minutes", "Auto-drafted board commentary", "Anomaly detection", "Budget vs actuals comparison"],
    saving: "2 days → 2 hours",
    savingLabel: "Month-end commentary",
  },
  {
    id: "legal",
    label: "Legal",
    color: "#8B5CF6",
    icon: FileText,
    title: "Legal & Contract Copilot",
    body: "A Legal copilot reads each incoming contract, identifies non-standard clauses, compares them against your approved playbook, flags deviations with risk ratings, and produces a one-page summary with recommended negotiation positions. Contract review time drops from hours to minutes per agreement.",
    outcomes: ["Clause-by-clause risk rating", "Playbook deviation alerts", "One-page negotiation summary", "Precedent comparison"],
    saving: "Hours → Minutes",
    savingLabel: "Per contract reviewed",
  },
  {
    id: "compliance",
    label: "Compliance",
    color: "#EC4899",
    icon: Shield,
    title: "Compliance & Risk Copilot",
    body: "A Compliance copilot monitors regulatory publications, compares new guidance against your current policies, flags gaps and obligations, and drafts compliance memoranda for your team to review. Regulatory gap analyses that previously took three days are processed in hours.",
    outcomes: ["Regulatory monitoring", "Policy gap detection", "Obligation mapping", "Compliance memo drafting"],
    saving: "3 days → Hours",
    savingLabel: "Regulatory gap analysis",
  },
  {
    id: "operations",
    label: "Operations",
    color: "#F59E0B",
    icon: Settings,
    title: "Operations Copilot",
    body: "An Operations copilot monitors your operational systems, surfaces exceptions that require human attention, provides context and recommended actions, and logs decisions and rationale. Your team focuses on judgment; the copilot handles information assembly.",
    outcomes: ["Exception surfacing", "Context assembly", "Recommended actions", "Decision logging"],
    saving: "80%",
    savingLabel: "Reduction in manual triage",
  },
  {
    id: "customer",
    label: "Customer",
    color: "#10B981",
    icon: Users,
    title: "Customer-Facing Copilot",
    body: "The copilot surfaces customer history, prior interactions, open issues, and relevant product information before a customer interaction begins. It drafts follow-up emails and meeting notes. It suggests next best actions based on customer behaviour. Your team spends more time with clients and less time searching for information.",
    outcomes: ["Pre-call briefing in seconds", "Follow-up email drafts", "Next best action suggestions", "CRM enrichment"],
    saving: "60%",
    savingLabel: "Less time searching for info",
  },
];

const DIGITAL_WORKERS = [
  {
    color: "#6366F1",
    title: "Invoice Processing",
    icon: FileText,
    before: "5 min per invoice",
    after: "< 30 seconds",
    steps: ["Receives invoices by email", "Extracts structured data", "Validates against purchase orders", "Routes for approval within thresholds", "Posts to accounting system"],
  },
  {
    color: "#8B5CF6",
    title: "Document Classification & Routing",
    icon: Bot,
    before: "Manual sorting",
    after: "Instant, 24/7",
    steps: ["Monitors incoming documents", "Classifies by type & domain", "Extracts key fields", "Routes to appropriate team", "Creates record in CRM / case system"],
  },
  {
    color: "#EC4899",
    title: "KYC Processing",
    icon: Shield,
    before: "2–3 days",
    after: "Low-risk: same day",
    steps: ["Collects identity documents", "Submits for verification", "Cross-references sanctions lists", "Calculates risk score", "Auto-completes low-risk or routes high-risk"],
  },
];

const GOVERNANCE = [
  { icon: Zap,         color: "#6366F1", title: "Confidence Thresholds",   desc: "When confidence falls below a defined threshold, the task routes to a human rather than processing automatically." },
  { icon: CheckCircle2,color: "#8B5CF6", title: "Approval Workflows",       desc: "Financial approvals and compliance decisions above defined thresholds always route to a qualified human." },
  { icon: Lock,        color: "#EC4899", title: "Complete Audit Trails",    desc: "Every agent action — every document processed, every decision, every field extracted — logged with timestamp, input, output, and model version." },
  { icon: Settings,    color: "#F59E0B", title: "Model & Version Control",  desc: "Every model is versioned and documented. Updates are tested against benchmark scenarios before promotion to production." },
];

const FAQS = [
  { q: "What is the difference between a copilot and a digital worker?", a: "A copilot augments a human professional — it works alongside a person, providing information, drafts, analysis, and recommendations that the human reviews and acts on. A digital worker operates autonomously — it processes inputs, makes decisions within guardrails, and executes actions without human involvement for each transaction." },
  { q: "Can a copilot integrate with our existing CRM and document management systems?", a: "Yes. We integrate copilots with Zoho CRM, Salesforce, Microsoft Dynamics, SharePoint, Outlook, and Teams. The copilot appears as a panel or sidebar within your existing interface — users do not need to switch to a new tool." },
  { q: "How do you ensure digital workers do not make costly mistakes?", a: "Confidence thresholds route uncertain decisions to humans. Dollar and consequence thresholds enforce human approval for high-stakes actions. Guardrails define the boundaries of what the agent can and cannot do in code, not just prompts. Audit trails enable post-hoc review of every decision." },
  { q: "Which AI model should we use for our copilot?", a: "Claude (Anthropic) for long-document reasoning, contract analysis, and nuanced language tasks. GPT-4o (OpenAI via Azure) for conversational copilots, code generation, and multimodal tasks. Gemini for high-volume, cost-sensitive tasks. We benchmark models on your specific use case scenarios during Discovery." },
  { q: "How long does it take to deploy a copilot?", a: "A single-function copilot takes 8 to 12 weeks from Discovery to production. Multi-function copilots with complex integrations may take 14 to 20 weeks. Digital workers with high-volume transaction processing typically take 12 to 18 weeks." },
  { q: "Can we start with one function and expand the copilot over time?", a: "Yes, and this is the approach we recommend. We design the architecture for extensibility from day one but deploy a focused first capability within 10 to 12 weeks. Subsequent capabilities are added in quarterly sprints." },
  { q: "Is our data used to train the AI model?", a: "No. We deploy AI models via AWS Bedrock and Azure OpenAI Service under enterprise agreements that do not use customer data for model training. Your documents and operational data are not shared with the model provider." },
];

export default function CopilotClient() {
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState("finance");
  const [openFaq, setOpenFaq] = useState(null);

  const activeFunc = COPILOT_FUNCTIONS.find(f => f.id === activeTab);

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

    gsap.fromTo(".dw-card",
      { y: 36, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.14, ease: "back.out(1.1)",
        scrollTrigger: { trigger: ".dw-grid", start: "top 84%", once: true } }
    );

    gsap.fromTo(".gov-card",
      { y: 22, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.42, stagger: 0.1, ease: "power2.out",
        scrollTrigger: { trigger: ".gov-grid", start: "top 86%", once: true } }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(-6px); } to { opacity:1; transform:translateY(0); } }
        .tab-content-anim { animation: fadeUp 0.28s ease; }
        .faq-anim { animation: fadeUp 0.25s ease; }
        .tab-btn { transition: all 0.2s ease; }
        .tab-btn:hover { opacity:1 !important; }
        .dw-card { transition: transform 0.22s ease, box-shadow 0.22s ease; }
        .dw-card:hover { transform: translateY(-4px); box-shadow: 0 20px 48px rgba(0,0,0,0.09); }
        .gov-card { transition: transform 0.2s ease; }
        .gov-card:hover { transform: translateY(-3px); }
        @media (max-width: 760px) {
          .copilot-tab-strip { flex-wrap: wrap !important; }
          .dw-grid { grid-template-columns: 1fr !important; }
          .gov-grid { grid-template-columns: 1fr !important; }
          .compare-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <main style={{ paddingTop: "var(--header-h)", overflow: "hidden" }}>

        {/* ══ HERO ══════════════════════════════════════════════════════════ */}
        <section style={{
          position: "relative", minHeight: "82vh", display: "flex", alignItems: "center",
          padding: "clamp(80px,10vh,120px) 1.5rem 80px",
          background: "var(--bg)", overflow: "hidden",
        }}>
          {/* Gradient glows */}
          <div style={{ position:"absolute", top:"15%", right:"3%", width:"640px", height:"640px",
            background:"radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
            pointerEvents:"none", zIndex:0 }} />
          <div style={{ position:"absolute", bottom:"10%", left:"8%", width:"420px", height:"420px",
            background:"radial-gradient(circle, rgba(139,92,246,0.09) 0%, transparent 70%)",
            pointerEvents:"none", zIndex:0 }} />

          {/* Hero image */}
          <div style={{ position:"absolute", top:0, right:0, width:"50%", height:"100%", zIndex:0, opacity:0.3, pointerEvents:"none" }}>
            <Image src="/images/ai-copilot-panel2.png" alt="AI Copilot Panel" fill
              style={{ objectFit:"cover",
                maskImage:"radial-gradient(ellipse at right, black, transparent 72%)",
                WebkitMaskImage:"radial-gradient(ellipse at right, black, transparent 72%)" }} />
          </div>

          <div className="container" style={{ position:"relative", zIndex:1 }}>
            <div className="hero-badge" style={{
              display:"inline-flex", alignItems:"center", gap:"0.75rem",
              background:"rgba(99,102,241,0.1)", border:"1px solid rgba(99,102,241,0.25)",
              padding:"0.6rem 1.25rem", borderRadius:"50px", marginBottom:"2rem"
            }}>
              <Bot size={16} color="#6366F1" />
              <span style={{ color:"#6366F1", fontWeight:700, fontSize:"0.88rem" }}>
                Claude · GPT-4o · LangChain · Human Oversight by Design
              </span>
            </div>

            <h1 className="hero-h1 section-title" style={{
              maxWidth:"900px", fontSize:"clamp(2.2rem,5vw,3.8rem)", lineHeight:1.1, marginBottom:"1.5rem"
            }}>
              Copilots & Digital Workers<br />
              <span style={{ color:"var(--primary)", fontWeight:300 }}>
                AI That Works Alongside Your Team — Not Instead of It
              </span>
            </h1>

            <p className="hero-sub section-desc" style={{
              maxWidth:"700px", fontSize:"1.1rem", color:"var(--text-muted)", marginBottom:"3rem", lineHeight:1.82
            }}>
              AI copilots that augment your professionals with real-time reasoning, document analysis, and decision support. Digital workers that handle high-volume repetitive tasks with consistent accuracy. Built on Claude, GPT-4o, and LangChain. Embedded in your existing systems. Human oversight architected in from day one.
            </p>

            <div className="hero-cta" style={{ display:"flex", flexWrap:"wrap", gap:"1rem" }}>
              <Link href="/book-discovery" style={{
                background:"#6366F1", color:"#fff", padding:"1rem 2rem",
                borderRadius:"8px", fontWeight:600, textDecoration:"none",
                display:"inline-flex", alignItems:"center", gap:"0.5rem"
              }}>
                Book a Copilot Discovery Session <ArrowRight size={18} />
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
                { stat:"8–12 wks", label:"Single-function copilot to production" },
                { stat:"< 30 sec",  label:"Invoice processed by digital worker" },
                { stat:"100%",     label:"Australian data residency" },
                { stat:"0",        label:"Customer data used for model training" },
              ].map((s,i) => (
                <div key={i} className="reveal" style={{ flex:"1 1 180px" }}>
                  <div style={{ fontSize:"clamp(1.7rem,3.5vw,2.6rem)", fontWeight:900, color:"#6366F1", marginBottom:"0.35rem" }}>{s.stat}</div>
                  <div style={{ fontSize:"0.88rem", color:"var(--text-muted)", fontWeight:500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ SECTION 1: COPILOT VS CHATBOT ════════════════════════════════ */}
        <section className="section" style={{ background:"var(--bg)" }}>
          <div className="container">
            <div className="reveal" style={{ textAlign:"center", marginBottom:"4rem" }}>
              <div className="section-label">The Distinction</div>
              <h2 className="section-title" style={{ maxWidth:"800px", margin:"0 auto" }}>
                The Difference Between a Copilot and a Chatbot
              </h2>
            </div>

            <div className="compare-grid reveal" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"2rem" }}>
              {[
                {
                  label:"A Chatbot", color:"#94A3B8", bg:"rgba(148,163,184,0.06)",
                  verdict:"Useful. Not transformative.",
                  points:[
                    "Lives in a separate tab",
                    "No access to your data",
                    "Generic context only",
                    "You copy-paste results manually",
                    "You have to remember to use it",
                  ]
                },
                {
                  label:"A Copilot (FI Digital)", color:"#6366F1", bg:"rgba(99,102,241,0.07)",
                  verdict:"Part of how your team works.",
                  points:[
                    "Lives inside your existing tools",
                    "Reads the record you're looking at",
                    "Knows your data, your policies",
                    "Results surface in your workflow",
                    "Used on every interaction automatically",
                  ]
                },
              ].map((col,i) => (
                <div key={i} style={{
                  background:col.bg, borderRadius:"22px", padding:"2.25rem 2.25rem 2.5rem",
                  boxShadow:"0 2px 16px rgba(0,0,0,0.05)"
                }}>
                  <div style={{ fontSize:"0.72rem", fontWeight:800, color:col.color, textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:"0.75rem" }}>{col.label}</div>
                  <div style={{ fontSize:"1.1rem", fontWeight:700, color:"var(--text)", marginBottom:"1.75rem", fontStyle:"italic" }}>"{col.verdict}"</div>
                  <div style={{ display:"flex", flexDirection:"column", gap:"0.8rem" }}>
                    {col.points.map((pt,j) => (
                      <div key={j} style={{ display:"flex", alignItems:"flex-start", gap:"0.75rem" }}>
                        <CheckCircle2 size={16} color={col.color} style={{ marginTop:"2px", flexShrink:0 }} />
                        <span style={{ fontSize:"0.95rem", color:"var(--text)", lineHeight:1.5 }}>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal" style={{ marginTop:"3rem", padding:"2rem 2.5rem", borderRadius:"18px", background:"var(--card-bg)", boxShadow:"0 2px 12px rgba(0,0,0,0.05)", maxWidth:"860px", margin:"3rem auto 0" }}>
              <p style={{ fontSize:"1rem", color:"var(--text)", lineHeight:1.85, margin:0 }}>
                An adviser who has a copilot panel inside their CRM that automatically summarises the client record, surfaces relevant policy documents, and suggests talking points <strong>will use it on every interaction.</strong> FI Digital builds copilots that integrate into your existing systems. We do not sell standalone AI tools. We build AI capabilities that become a natural part of how your team works.
              </p>
            </div>
          </div>
        </section>

        {/* ══ SECTION 2: COPILOT USE CASES (TAB) ══════════════════════════ */}
        <section className="section" style={{ background:"var(--bg-secondary)" }}>
          <div className="container">
            <div className="reveal" style={{ textAlign:"center", marginBottom:"3.5rem" }}>
              <div className="section-label">Copilot Use Cases</div>
              <h2 className="section-title" style={{ maxWidth:"800px", margin:"0 auto" }}>
                Copilots by Function
              </h2>
            </div>

            {/* Tab strip */}
            <div className="copilot-tab-strip reveal" style={{ display:"flex", gap:"0.5rem", marginBottom:"2.5rem", justifyContent:"center", flexWrap:"wrap" }}>
              {COPILOT_FUNCTIONS.map(fn => (
                <button key={fn.id} className="tab-btn" onClick={() => setActiveTab(fn.id)}
                  style={{
                    padding:"0.6rem 1.4rem", borderRadius:"50px", border:"none", cursor:"pointer",
                    fontWeight:700, fontSize:"0.88rem",
                    background: activeTab === fn.id ? fn.color : "var(--card-bg)",
                    color: activeTab === fn.id ? "#fff" : "var(--text-muted)",
                    boxShadow: activeTab === fn.id ? `0 4px 16px ${fn.color}40` : "0 1px 4px rgba(0,0,0,0.06)",
                    transition:"all 0.2s ease"
                  }}>{fn.label}</button>
              ))}
            </div>

            {/* Tab content */}
            {activeFunc && (
              <div className="tab-content-anim" key={activeTab} style={{
                background:"var(--card-bg)", borderRadius:"24px",
                padding:"2.5rem 3rem",
                boxShadow:"0 4px 24px rgba(0,0,0,0.07)",
                display:"grid", gridTemplateColumns:"1fr auto", gap:"3rem", alignItems:"start"
              }}>
                <div>
                  <div style={{ display:"flex", alignItems:"center", gap:"1rem", marginBottom:"1.25rem" }}>
                    <div style={{ width:"52px", height:"52px", borderRadius:"14px", background:`${activeFunc.color}15`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                      <activeFunc.icon size={24} color={activeFunc.color} />
                    </div>
                    <h3 style={{ fontSize:"1.35rem", fontWeight:800, color:"var(--text)", margin:0 }}>{activeFunc.title}</h3>
                  </div>
                  <p style={{ fontSize:"1rem", color:"var(--text-muted)", lineHeight:1.82, marginBottom:"1.75rem" }}>{activeFunc.body}</p>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:"0.5rem" }}>
                    {activeFunc.outcomes.map((o,j) => (
                      <span key={j} style={{
                        padding:"0.32rem 0.9rem", background:`${activeFunc.color}0d`, borderRadius:"50px",
                        fontSize:"0.8rem", fontWeight:700, color:activeFunc.color
                      }}>{o}</span>
                    ))}
                  </div>
                </div>

                {/* Impact metric */}
                <div style={{
                  background:`${activeFunc.color}08`, borderRadius:"18px",
                  padding:"2rem 2rem", textAlign:"center", minWidth:"180px"
                }}>
                  <div style={{ fontSize:"0.65rem", fontWeight:800, color:activeFunc.color, textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:"0.75rem" }}>Impact</div>
                  <div style={{ fontSize:"2rem", fontWeight:900, color:activeFunc.color, lineHeight:1.15, marginBottom:"0.5rem" }}>{activeFunc.saving}</div>
                  <div style={{ fontSize:"0.8rem", color:"var(--text-muted)", fontWeight:500 }}>{activeFunc.savingLabel}</div>

                  {/* Logos */}
                  <div style={{ marginTop:"1.75rem", display:"flex", flexDirection:"column", alignItems:"center", gap:"0.6rem" }}>
                    <div style={{ fontSize:"0.6rem", fontWeight:800, color:"var(--text-muted)", textTransform:"uppercase", letterSpacing:"0.1em" }}>Powered by</div>
                    <div style={{ display:"flex", gap:"0.75rem", alignItems:"center", justifyContent:"center", flexWrap:"wrap" }}>
                      {[
                        { src:"/images/claude.png",     alt:"Claude" },
                        { src:"/images/openai-nobg.png", alt:"OpenAI" },
                      ].map((l,j) => (
                        <div key={j} style={{ position:"relative", width:"52px", height:"20px" }}>
                          <Image src={l.src} alt={l.alt} fill style={{ objectFit:"contain" }} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ══ SECTION 3: DIGITAL WORKERS ═══════════════════════════════════ */}
        <section className="section" style={{ background:"var(--bg)" }}>
          <div className="container">
            <div className="reveal" style={{ textAlign:"center", marginBottom:"4rem" }}>
              <div className="section-label">Automation at Scale</div>
              <h2 className="section-title" style={{ maxWidth:"860px", margin:"0 auto 1.25rem auto" }}>
                Digital Workers — Automation at Scale
              </h2>
              <p style={{ color:"var(--text-muted)", fontSize:"1rem", maxWidth:"620px", margin:"0 auto" }}>
                Where copilots augment human professionals, digital workers replace manual effort entirely for high-volume, rule-bound tasks.
              </p>
            </div>

            <div className="dw-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:"1.75rem" }}>
              {DIGITAL_WORKERS.map((dw,i) => (
                <div key={i} className="dw-card" style={{
                  background:"var(--card-bg)", borderRadius:"22px",
                  boxShadow:"0 2px 18px rgba(0,0,0,0.055)",
                  overflow:"hidden", display:"flex", flexDirection:"column"
                }}>
                  {/* Top colour band */}
                  <div style={{ background:`${dw.color}10`, padding:"2rem 2rem 1.5rem" }}>
                    <div style={{ width:"48px", height:"48px", background:`${dw.color}18`, borderRadius:"13px", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"1rem" }}>
                      <dw.icon size={22} color={dw.color} />
                    </div>
                    <h3 style={{ fontSize:"1.15rem", fontWeight:800, color:"var(--text)", margin:0, lineHeight:1.3 }}>{dw.title}</h3>
                  </div>

                  {/* Before / After */}
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0", borderBottom:"1px solid var(--border)" }}>
                    <div style={{ padding:"1rem 1.25rem", borderRight:"1px solid var(--border)" }}>
                      <div style={{ fontSize:"0.6rem", fontWeight:800, color:"#94A3B8", textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:"0.4rem" }}>Before</div>
                      <div style={{ fontSize:"0.92rem", fontWeight:700, color:"var(--text-muted)" }}>{dw.before}</div>
                    </div>
                    <div style={{ padding:"1rem 1.25rem" }}>
                      <div style={{ fontSize:"0.6rem", fontWeight:800, color:dw.color, textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:"0.4rem" }}>After</div>
                      <div style={{ fontSize:"0.92rem", fontWeight:700, color:dw.color }}>{dw.after}</div>
                    </div>
                  </div>

                  {/* Steps */}
                  <div style={{ padding:"1.5rem 2rem", flex:1 }}>
                    {dw.steps.map((step,j) => (
                      <div key={j} style={{ display:"flex", alignItems:"flex-start", gap:"0.7rem", marginBottom:"0.65rem" }}>
                        <div style={{
                          width:"20px", height:"20px", borderRadius:"50%",
                          background:`${dw.color}12`, flexShrink:0,
                          display:"flex", alignItems:"center", justifyContent:"center",
                          fontSize:"0.65rem", fontWeight:800, color:dw.color, marginTop:"1px"
                        }}>{j + 1}</div>
                        <span style={{ fontSize:"0.87rem", color:"var(--text-muted)", lineHeight:1.55 }}>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SECTION 4: GOVERNANCE ════════════════════════════════════════ */}
        <section className="section" style={{ background:"var(--bg-secondary)" }}>
          <div className="container">
            <div className="reveal" style={{ textAlign:"center", marginBottom:"4rem" }}>
              <div className="section-label">Trust by Design</div>
              <h2 className="section-title" style={{ maxWidth:"780px", margin:"0 auto 1.25rem auto" }}>
                Governance and Human Oversight
              </h2>
              <p style={{ color:"var(--text-muted)", fontSize:"1rem", maxWidth:"620px", margin:"0 auto" }}>
                Every copilot and digital worker FI Digital deploys operates within a defined governance framework.
              </p>
            </div>

            <div className="gov-grid" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))", gap:"1.75rem", marginBottom:"3.5rem" }}>
              {GOVERNANCE.map((g,i) => (
                <div key={i} className="gov-card" style={{ background:"var(--card-bg)", padding:"2rem", borderRadius:"20px", boxShadow:"0 2px 14px rgba(0,0,0,0.05)" }}>
                  <div style={{ width:"50px", height:"50px", background:`${g.color}12`, borderRadius:"13px", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"1.25rem" }}>
                    <g.icon size={22} color={g.color} />
                  </div>
                  <h3 style={{ fontSize:"1.05rem", fontWeight:800, marginBottom:"0.65rem", color:"var(--text)" }}>{g.title}</h3>
                  <p style={{ fontSize:"0.91rem", color:"var(--text-muted)", lineHeight:1.7, margin:0 }}>{g.desc}</p>
                </div>
              ))}
            </div>

            {/* Model logos strip */}
            <div className="reveal" style={{
              background:"var(--card-bg)", borderRadius:"20px", padding:"2rem 2.5rem",
              boxShadow:"0 2px 14px rgba(0,0,0,0.05)",
              display:"flex", flexWrap:"wrap", alignItems:"center", gap:"2rem", justifyContent:"center"
            }}>
              <span style={{ fontSize:"0.8rem", fontWeight:700, color:"var(--text-muted)", textTransform:"uppercase", letterSpacing:"0.08em" }}>Deployed via</span>
              {[
                { src:"/images/claude.png",       alt:"Claude",   label:"Anthropic Claude" },
                { src:"/images/openai-nobg.png",  alt:"OpenAI",   label:"GPT-4o / Azure OpenAI" },
                { src:"/images/aws-nobg.png",     alt:"AWS",      label:"AWS Bedrock" },
                { src:"/images/azure-nobg.png",   alt:"Azure",    label:"Azure OpenAI Service" },
                { src:"/images/langchain-nobg.png",alt:"LangChain",label:"LangChain" },
              ].map((l,i) => (
                <div key={i} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"0.4rem" }}>
                  <div style={{ position:"relative", width:"68px", height:"26px" }}>
                    <Image src={l.src} alt={l.alt} fill style={{ objectFit:"contain" }} />
                  </div>
                  <span style={{ fontSize:"0.65rem", color:"var(--text-muted)", fontWeight:600, textAlign:"center" }}>{l.label}</span>
                </div>
              ))}
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
              {FAQS.map((faq,i) => (
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
                    <div className="faq-anim" style={{ padding:"0 2rem 1.75rem", borderTop:"1px solid var(--border)" }}>
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
          background:"linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(139,92,246,0.08) 100%)",
          borderTop:"1px solid var(--border)"
        }}>
          <div className="container" style={{ textAlign:"center" }}>
            <div className="reveal">
              <h2 style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:800, marginBottom:"1.25rem" }}>
                Ready to embed AI in your team's workflow?
              </h2>
              <p style={{ fontSize:"1.1rem", color:"var(--text-muted)", maxWidth:"580px", margin:"0 auto 2.5rem auto", lineHeight:1.7 }}>
                Book a free Copilot & Digital Worker Discovery session. We'll scope your highest-value use case and show you what a production copilot looks like in your actual systems.
              </p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:"1rem", justifyContent:"center" }}>
                <Link href="/book-discovery" style={{
                  background:"#6366F1", color:"#fff", padding:"1rem 2.25rem",
                  borderRadius:"8px", fontWeight:600, textDecoration:"none",
                  display:"inline-flex", alignItems:"center", gap:"0.5rem"
                }}>
                  Book a Copilot Discovery Session <ArrowRight size={18} />
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
