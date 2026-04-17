"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, ChevronRight, ChevronDown,
  Database, Shield, BarChart2, GitBranch,
  Layers, FlaskConical, Search, CheckCircle2,
  Clock, TrendingUp, Server, Globe
} from "lucide-react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const PRIMARY   = "#EC4A1E"; // Databricks orange
const SECONDARY = "#0EA5E9"; // Azure blue

/* ── WHAT WE BUILD — expandable ──────────────────────────────────────── */
const CAPABILITIES = [
  {
    num: "01", icon: Layers, color: "#EC4A1E",
    title: "Medallion Architecture — Bronze, Silver, Gold",
    intro: "The standard pattern for enterprise lakehouse design. Three governed layers from raw ingestion to business-ready data.",
    detail: "Bronze receives raw data exactly as it arrives from source systems — no transformation, no filtering, fully time-stamped. Silver applies validation, deduplication, schema enforcement, and standardisation. Gold produces business-ready, aggregated datasets consumed by BI dashboards, compliance reports, and AI model inputs. Each layer is versioned and auditable. Your compliance team can trace any Gold record back to its Bronze source with full lineage.",
    badges: ["Delta Lake", "ACID transactions", "Full lineage", "APRA-auditable"],
  },
  {
    num: "02", icon: Database, color: "#0EA5E9",
    title: "Delta Lake — Storage Layer",
    intro: "ACID transactions, schema enforcement, and time travel on your data lake. No corrupt data. No concurrent write conflicts.",
    detail: "We use Delta Lake as the storage layer for all Databricks deployments. ACID transaction support means concurrent writes from multiple pipelines do not corrupt your data. Schema enforcement means bad data cannot enter your platform — it is rejected at the Bronze layer with actionable error logs. Time travel means you can query your data as it appeared at any point in the past — critical for regulatory audits and debugging production pipelines.",
    badges: ["ACID transactions", "Schema enforcement", "Time travel", "Concurrent writes"],
  },
  {
    num: "03", icon: Shield, color: "#8B5CF6",
    title: "Unity Catalog — Governed Access",
    intro: "Centralised access control across all Databricks assets. Column-level security. Full data lineage. APRA and ASIC compliant audit logs.",
    detail: "We implement Unity Catalog from day one — not retrofitted later. Centralised access control across all workspaces, notebooks, tables, and volumes. Column-level security for sensitive data: PII fields, financial records, and health information can be restricted to specific roles. Data lineage tracking from source through every transformation to final output. Audit logs that satisfy APRA Prudential Standard CPS 234 and ASIC data governance requirements.",
    badges: ["Column-level security", "Data lineage", "APRA CPS 234", "ASIC compliant"],
  },
  {
    num: "04", icon: FlaskConical, color: "#059669",
    title: "MLflow and ML Pipelines",
    intro: "Experiment tracking, model registry, and production model serving — all within your Databricks environment.",
    detail: "For clients with data science requirements, we deploy MLflow for end-to-end ML lifecycle management. Your data scientists can run experiments, log parameters and metrics, compare runs, register the best model to the Model Registry, and deploy to production — all within the same Databricks environment your engineers use for data pipelines. No separate MLOps tooling required. Models are versioned, validated, and promoted through staging to production with approval gates.",
    badges: ["Experiment tracking", "Model registry", "Production serving", "Approval gates"],
  },
  {
    num: "05", icon: BarChart2, color: "#F59E0B",
    title: "Databricks SQL — Analyst Querying",
    intro: "SQL querying on your Gold layer. Dashboards built in Databricks or connected to Power BI and Tableau for teams that prefer external BI tools.",
    detail: "Analyst-friendly SQL querying on your Gold layer datasets, with serverless SQL warehouses that scale on demand and stop when idle. Dashboards and visualisations built directly in the Databricks environment for embedded analytics use cases. Integration with Power BI and Tableau via native connectors for teams that prefer external BI tools. Query federation for cross-platform analytics across Databricks, Snowflake, and operational databases without data movement.",
    badges: ["Serverless SQL", "Power BI connector", "Tableau connector", "Query federation"],
  },
];

/* ── DELIVERY PHASES ──────────────────────────────────────────────────── */
const PHASES = [
  {
    num: "01", color: PRIMARY, weeks: "Weeks 1–2",
    title: "Platform Assessment",
    items: [
      "Audit of existing data landscape and source systems",
      "Azure environment design and sizing",
      "Unity Catalog governance model design",
      "Production of a Platform Design Document",
    ],
  },
  {
    num: "02", color: "#0EA5E9", weeks: "Weeks 3–8",
    title: "Foundation Build",
    items: [
      "Azure infrastructure provisioning (VNET, storage, networking)",
      "Databricks workspace and Unity Catalog configuration",
      "Initial Bronze ingestion pipelines from priority source systems",
      "Silver transformation layer and core Gold datasets",
      "Initial BI connectivity (Power BI or Tableau)",
    ],
  },
  {
    num: "03", color: "#8B5CF6", weeks: "Weeks 9–14",
    title: "Analytics Expansion",
    items: [
      "Additional source system ingestion pipelines",
      "Silver enrichment layers and business rule application",
      "Gold layer expansion for additional reporting domains",
      "ML pipeline setup and MLflow deployment (if required)",
      "Performance optimisation and cost governance",
    ],
  },
  {
    num: "04", color: "#059669", weeks: "Weeks 13–16",
    title: "Handover and Enablement",
    items: [
      "Full platform documentation and runbooks",
      "Data engineering team training",
      "Analyst SQL training on Gold layer",
      "Optional ongoing managed service retainer (8–16 hrs/month)",
    ],
  },
];

/* ── FAQ ──────────────────────────────────────────────────────────────── */
const FAQS = [
  { q: "What is Databricks used for?", a: "Databricks is a unified data analytics platform used for large-scale data engineering, data science and machine learning, SQL analytics, and data governance. In the Australian enterprise market it is predominantly deployed for lakehouse architecture, replacing or augmenting legacy data warehouses." },
  { q: "What is the difference between Databricks and Snowflake?", a: "Databricks is stronger for data engineering, machine learning, and streaming workloads. Snowflake is stronger for SQL analytics, data sharing across organisations, and multi-cloud flexibility. Many Australian enterprises use both — Databricks for data engineering and ML, Snowflake for analytical querying." },
  { q: "Does Databricks run in Australian data centres?", a: "Yes. FI Digital deploys Databricks on Azure Australia East (New South Wales), which satisfies Australian data residency requirements for most regulated industries including financial services and healthcare." },
  { q: "What is the medallion architecture?", a: "The medallion architecture (Bronze, Silver, Gold) is a data design pattern for lakehouses. Bronze stores raw ingested data. Silver applies cleaning and validation. Gold produces business-ready datasets for reporting and AI. Data lineage flows from Bronze through Silver to Gold, providing full auditability." },
  { q: "How long does a Databricks implementation take?", a: "A foundational Databricks deployment takes 10 to 14 weeks. Larger deployments may take 16 to 24 weeks. Initial dashboards are typically live by Week 8." },
];

/* ═══════════════════════════════════════════════════════════════════════ */
export default function DatabricksClient() {
  const containerRef = useRef(null);
  const [openCap, setOpenCap]   = useState(null);
  const [openFaq, setOpenFaq]   = useState(null);
  const [activePhase, setActivePhase] = useState(0);

  useGSAP(() => {
    gsap.from(".hero-badge", { y: -14, autoAlpha: 0, duration: 0.4, ease: "power2.out" });
    gsap.from(".hero-h1",   { y: 32,  autoAlpha: 0, duration: 0.6, delay: 0.1,  ease: "power3.out" });
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

    gsap.fromTo(".phase-card",
      { y: 20, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.4, stagger: 0.1, ease: "power2.out",
        scrollTrigger: { trigger: ".phase-row", start: "top 85%", once: true } }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(-6px)} to{opacity:1;transform:translateY(0)} }
        .expand-body { animation: fadeUp 0.25s ease; }
        .cap-item     { transition: background 0.2s ease; }
        .cap-item:hover { background: var(--bg-secondary) !important; }
        .phase-tab    { transition: all 0.2s ease; cursor: pointer; }
        .phase-tab:hover { background: rgba(236,74,30,0.08); }
        .medal-layer  { transition: transform 0.2s ease; }
        .medal-layer:hover { transform: translateY(-3px); }
        @media (max-width: 900px) {
          .medal-row  { flex-direction: column !important; }
          .phase-row  { flex-direction: column !important; }
          .why-grid   { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <main style={{ paddingTop: "var(--header-h)", overflow: "hidden" }}>

        {/* ══ HERO ══════════════════════════════════════════════════════ */}
        <section style={{
          position: "relative", minHeight: "82vh", display: "flex", alignItems: "center",
          padding: "0 1.5rem 60px", background: "var(--bg)", overflow: "hidden",
        }}>
          {/* Ambient glows */}
          <div style={{ position:"absolute", top:"10%", right:"5%", width:"600px", height:"600px",
            background:`radial-gradient(circle, ${PRIMARY}12 0%, transparent 70%)`,
            pointerEvents:"none", zIndex:0 }} />
          <div style={{ position:"absolute", bottom:"10%", left:"5%", width:"400px", height:"400px",
            background:`radial-gradient(circle, ${SECONDARY}0d 0%, transparent 70%)`,
            pointerEvents:"none", zIndex:0 }} />

          {/* BG image — Databricks logo, same pattern as Fabric hero */}
          <div style={{ position:"absolute", top:0, right:0, width:"50%", height:"100%", zIndex:0, opacity:0.32, pointerEvents:"none" }}>
            <Image src="/images/databricks-nobg.png" alt="Databricks Lakehouse Platform" fill
              style={{ objectFit:"contain", objectPosition:"center right",
                maskImage:"radial-gradient(ellipse at right, black 30%, transparent 80%)",
                WebkitMaskImage:"radial-gradient(ellipse at right, black 30%, transparent 80%)" }} />
          </div>

          <div className="container" style={{ position:"relative", zIndex:1 }}>
            <div className="hero-badge" style={{
              display:"inline-flex", alignItems:"center", gap:"0.75rem",
              background:"rgba(236,74,30,0.1)", border:"1px solid rgba(236,74,30,0.25)",
              padding:"0.6rem 1.25rem", borderRadius:"50px", marginBottom:"2rem"
            }}>
              <div style={{ position:"relative", width:"20px", height:"20px" }}>
                <Image src="/images/databricks-nobg.png" alt="Databricks" fill style={{ objectFit:"contain" }} />
              </div>
              <span style={{ color:PRIMARY, fontWeight:700, fontSize:"0.88rem" }}>
                Databricks · Azure Australia East · Medallion Architecture
              </span>
            </div>

            <h1 className="hero-h1 section-title" style={{
              maxWidth:"900px", fontSize:"clamp(2.2rem,5vw,3.8rem)", lineHeight:1.1, marginBottom:"1.5rem"
            }}>
              Databricks Consulting<br />
              <span style={{ color:"var(--primary)", fontWeight:300 }}>
                Build a Governed Lakehouse That Your Teams All Trust
              </span>
            </h1>

            <p className="hero-sub section-desc" style={{
              maxWidth:"700px", fontSize:"1.1rem", color:"var(--text-muted)", marginBottom:"3rem", lineHeight:1.82
            }}>
              FI Digital designs and deploys Databricks lakehouse platforms on Azure Australia East. Medallion architecture. Delta Lake. Unity Catalog for governance. MLflow for ML tracking. Databricks SQL for analyst querying. Production systems for financial services, healthcare, and resources clients. Australian data residency guaranteed.
            </p>

            <div className="hero-cta" style={{ display:"flex", flexWrap:"wrap", gap:"1rem" }}>
              <Link href="/book-discovery" style={{
                background:PRIMARY, color:"#fff", padding:"1rem 2rem",
                borderRadius:"8px", fontWeight:600, textDecoration:"none",
                display:"inline-flex", alignItems:"center", gap:"0.5rem"
              }}>
                Book a Databricks Assessment <ArrowRight size={18} />
              </Link>
              <Link href="/data-platforms" style={{
                background:"transparent", color:"var(--text)", padding:"1rem 2rem",
                borderRadius:"8px", fontWeight:600, textDecoration:"none",
                display:"inline-flex", alignItems:"center", gap:"0.5rem",
                border:"1px solid var(--border)"
              }}>
                All Data Platform Services <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* ══ STAT STRIP ══════════════════════════════════════════════ */}
        <div style={{ background:"var(--bg-secondary)", borderTop:"1px solid var(--border)", borderBottom:"1px solid var(--border)", padding:"2.25rem 1.5rem" }}>
          <div className="container">
            <div style={{ display:"flex", flexWrap:"wrap", gap:"2rem", justifyContent:"center", textAlign:"center" }}>
              {[
                { stat:"Azure AU East",  label:"100% Australian data residency — every deployment" },
                { stat:"Wk 8",           label:"Initial dashboards live — before full platform completes" },
                { stat:"APRA + ASIC",    label:"Unity Catalog audit logs satisfying regulatory requirements" },
                { stat:"200+",           label:"Engineers across Australia and India" },
              ].map((s, i) => (
                <div key={i} className="reveal" style={{ flex:"1 1 200px" }}>
                  <div style={{ fontSize:"clamp(1.3rem,2.5vw,2rem)", fontWeight:900, color:PRIMARY, marginBottom:"0.3rem" }}>{s.stat}</div>
                  <div style={{ fontSize:"0.85rem", color:"var(--text-muted)", fontWeight:500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ SECTION 1: WHY DATABRICKS ═══════════════════════════════ */}
        <section className="section" style={{ background:"var(--bg)" }}>
          <div className="container">
            <div className="reveal" style={{ textAlign:"center", marginBottom:"4rem" }}>
              <div className="section-label">Why Databricks?</div>
              <h2 className="section-title" style={{ maxWidth:"760px", margin:"0 auto 1.25rem" }}>
                Why Databricks for Australian Enterprise
              </h2>
              <p style={{ color:"var(--text-muted)", fontSize:"1rem", maxWidth:"680px", margin:"0 auto" }}>
                The dominant lakehouse platform for organisations that need to combine data engineering, advanced analytics, and machine learning in a single governed environment.
              </p>
            </div>

            <div className="why-grid reveal" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"2rem", alignItems:"start" }}>
              {/* Left: body text */}
              <div>
                <p style={{ fontSize:"1rem", color:"var(--text)", lineHeight:1.85, marginBottom:"1.25rem" }}>
                  Databricks has become the dominant lakehouse platform for Australian enterprises that need to combine large-scale data engineering, advanced analytics, and machine learning in a single governed environment. Its Delta Lake format brings ACID transactions and schema enforcement to data lake storage. Its Unity Catalog delivers centralised governance across all data assets.
                </p>
                <p style={{ fontSize:"1rem", color:"var(--text-muted)", lineHeight:1.85, marginBottom:"1.25rem" }}>
                  Its MLflow integration provides experiment tracking, model versioning, and production model serving in the same platform your engineers use for data pipelines. FI Digital deploys Databricks on Azure Australia East, keeping your data in Australian infrastructure under Australian regulatory jurisdiction.
                </p>
                <p style={{ fontSize:"1rem", color:"var(--text-muted)", lineHeight:1.85 }}>
                  Our Databricks practice has delivered production platforms for financial services firms processing millions of transactions daily, healthcare organisations aggregating patient data across multiple providers, and resources companies building predictive maintenance models on equipment telemetry.
                </p>
              </div>

              {/* Right: proof cards */}
              <div style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
                {[
                  { color:PRIMARY,    icon:TrendingUp,  industry:"Financial Services", proof:"Millions of transactions processed daily through medallion pipelines. APRA-compliant audit trail on every record." },
                  { color:SECONDARY,  icon:Server,      industry:"Healthcare",         proof:"Patient data aggregated across multiple providers. Column-level PII security via Unity Catalog." },
                  { color:"#059669",  icon:Globe,       industry:"Resources & Mining",  proof:"Equipment telemetry pipelines feeding predictive maintenance ML models. Edge-to-Gold in under 15 minutes." },
                ].map((c, i) => (
                  <div key={i} style={{
                    background:"var(--card-bg)", borderRadius:"16px", padding:"1.5rem",
                    border:`1px solid ${c.color}20`, boxShadow:`0 2px 12px ${c.color}0d`
                  }}>
                    <div style={{ display:"flex", alignItems:"center", gap:"0.65rem", marginBottom:"0.6rem" }}>
                      <div style={{ width:"34px", height:"34px", borderRadius:"9px",
                        background:`${c.color}12`, display:"flex", alignItems:"center", justifyContent:"center" }}>
                        <c.icon size={16} color={c.color} />
                      </div>
                      <span style={{ fontSize:"0.85rem", fontWeight:800, color:c.color }}>{c.industry}</span>
                    </div>
                    <p style={{ fontSize:"0.88rem", color:"var(--text-muted)", lineHeight:1.7, margin:0 }}>{c.proof}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── MEDALLION ARCHITECTURE — premium 3-column cards ── */}
            <div className="reveal" style={{ marginTop:"4.5rem" }}>

              {/* Section header with Databricks logo */}
              <div style={{ display:"flex", alignItems:"center", justifyContent:"center",
                gap:"1rem", marginBottom:"2.5rem", flexWrap:"wrap" }}>
                <div style={{ width:"2px", height:"24px", background:"var(--border)" }} />
                <div style={{ position:"relative", width:"28px", height:"28px" }}>
                  <Image src="/images/databricks-nobg.png" alt="Databricks" fill style={{ objectFit:"contain" }} />
                </div>
                <span style={{ fontSize:"1rem", fontWeight:800, color:"var(--text)" }}>
                  Medallion Architecture — How Your Data Flows
                </span>
                <div style={{ width:"2px", height:"24px", background:"var(--border)" }} />
              </div>

              {/* Source + 3 layer cards + Consumers */}
              <div style={{ display:"grid", gridTemplateColumns:"auto 1fr 1fr 1fr auto",
                gap:"1rem", alignItems:"stretch" }} className="medal-grid">

                {/* Sources column */}
                <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", gap:"0.5rem", minWidth:"120px" }}>
                  <div style={{ fontSize:"0.6rem", fontWeight:800, color:"var(--text-muted)",
                    textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:"0.4rem" }}>Sources</div>
                  {["Operational DB","CRM / ERP","IoT / Telemetry","Files & APIs"].map((s,i) => (
                    <div key={i} style={{ padding:"0.4rem 0.7rem", background:"var(--bg-secondary)",
                      borderRadius:"8px", fontSize:"0.72rem", fontWeight:600, color:"var(--text-muted)",
                      display:"flex", alignItems:"center", gap:"0.4rem" }}>
                      <div style={{ width:"5px", height:"5px", borderRadius:"50%", background:"var(--text-muted)", flexShrink:0 }} />
                      {s}
                    </div>
                  ))}
                  <svg style={{ alignSelf:"flex-end", marginTop:"auto" }} width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* BRONZE */}
                <div className="medal-layer" style={{
                  background:"linear-gradient(145deg, rgba(180,83,9,0.1) 0%, rgba(180,83,9,0.05) 100%)",
                  border:"2px solid rgba(180,83,9,0.3)",
                  borderRadius:"20px", padding:"1.75rem 1.5rem",
                  display:"flex", flexDirection:"column", gap:"1rem",
                  boxShadow:"0 4px 20px rgba(180,83,9,0.08)"
                }}>
                  <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                    <div style={{ padding:"0.25rem 0.75rem", background:"rgba(180,83,9,0.15)",
                      borderRadius:"50px", fontSize:"0.65rem", fontWeight:900,
                      color:"#B45309", textTransform:"uppercase", letterSpacing:"0.12em" }}>Bronze</div>
                    <div style={{ position:"relative", width:"22px", height:"22px" }}>
                      <Image src="/images/databricks-nobg.png" alt="Databricks" fill style={{ objectFit:"contain", opacity:0.4 }} />
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize:"1rem", fontWeight:800, color:"var(--text)", marginBottom:"0.25rem" }}>Raw Ingestion</div>
                    <div style={{ fontSize:"0.78rem", color:"#B45309", fontWeight:600 }}>Layer 1 — Immutable source of truth</div>
                  </div>
                  <div style={{ display:"flex", flexDirection:"column", gap:"0.45rem" }}>
                    {["Exact as-received data","Timestamped on arrival","Never modified or deleted","Every source system"].map((p,i) => (
                      <div key={i} style={{ display:"flex", alignItems:"center", gap:"0.45rem" }}>
                        <div style={{ width:"5px", height:"5px", borderRadius:"50%", background:"#B45309", flexShrink:0 }} />
                        <span style={{ fontSize:"0.78rem", color:"var(--text-muted)", lineHeight:1.5 }}>{p}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop:"auto", padding:"0.5rem 0.75rem",
                    background:"rgba(180,83,9,0.08)", borderRadius:"8px",
                    fontSize:"0.7rem", fontWeight:700, color:"#B45309" }}>
                    Delta Lake · Parquet format
                  </div>
                </div>

                {/* SILVER */}
                <div className="medal-layer" style={{
                  background:"linear-gradient(145deg, rgba(100,116,139,0.1) 0%, rgba(100,116,139,0.04) 100%)",
                  border:"2px solid rgba(100,116,139,0.3)",
                  borderRadius:"20px", padding:"1.75rem 1.5rem",
                  display:"flex", flexDirection:"column", gap:"1rem",
                  boxShadow:"0 4px 20px rgba(100,116,139,0.08)"
                }}>
                  <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                    <div style={{ padding:"0.25rem 0.75rem", background:"rgba(100,116,139,0.15)",
                      borderRadius:"50px", fontSize:"0.65rem", fontWeight:900,
                      color:"#64748B", textTransform:"uppercase", letterSpacing:"0.12em" }}>Silver</div>
                    <div style={{ position:"relative", width:"22px", height:"22px" }}>
                      <Image src="/images/databricks-nobg.png" alt="Databricks" fill style={{ objectFit:"contain", opacity:0.4 }} />
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize:"1rem", fontWeight:800, color:"var(--text)", marginBottom:"0.25rem" }}>Validated & Clean</div>
                    <div style={{ fontSize:"0.78rem", color:"#64748B", fontWeight:600 }}>Layer 2 — Conformed and trusted</div>
                  </div>
                  <div style={{ display:"flex", flexDirection:"column", gap:"0.45rem" }}>
                    {["Deduplication applied","Schema enforcement","Business rules validated","PII masking & encryption"].map((p,i) => (
                      <div key={i} style={{ display:"flex", alignItems:"center", gap:"0.45rem" }}>
                        <div style={{ width:"5px", height:"5px", borderRadius:"50%", background:"#64748B", flexShrink:0 }} />
                        <span style={{ fontSize:"0.78rem", color:"var(--text-muted)", lineHeight:1.5 }}>{p}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop:"auto", padding:"0.5rem 0.75rem",
                    background:"rgba(100,116,139,0.08)", borderRadius:"8px",
                    fontSize:"0.7rem", fontWeight:700, color:"#64748B" }}>
                    Auto Loader · Structured Streaming
                  </div>
                </div>

                {/* GOLD */}
                <div className="medal-layer" style={{
                  background:"linear-gradient(145deg, rgba(202,138,4,0.1) 0%, rgba(202,138,4,0.04) 100%)",
                  border:"2px solid rgba(202,138,4,0.35)",
                  borderRadius:"20px", padding:"1.75rem 1.5rem",
                  display:"flex", flexDirection:"column", gap:"1rem",
                  boxShadow:"0 4px 20px rgba(202,138,4,0.1)"
                }}>
                  <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                    <div style={{ padding:"0.25rem 0.75rem", background:"rgba(202,138,4,0.15)",
                      borderRadius:"50px", fontSize:"0.65rem", fontWeight:900,
                      color:"#CA8A04", textTransform:"uppercase", letterSpacing:"0.12em" }}>Gold</div>
                    <div style={{ position:"relative", width:"22px", height:"22px" }}>
                      <Image src="/images/databricks-nobg.png" alt="Databricks" fill style={{ objectFit:"contain", opacity:0.4 }} />
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize:"1rem", fontWeight:800, color:"var(--text)", marginBottom:"0.25rem" }}>Business-Ready</div>
                    <div style={{ fontSize:"0.78rem", color:"#CA8A04", fontWeight:600 }}>Layer 3 — Served to consumers</div>
                  </div>
                  <div style={{ display:"flex", flexDirection:"column", gap:"0.45rem" }}>
                    {["Aggregated & pre-computed","Compliance-reportable","BI dashboard ready","AI model inputs"].map((p,i) => (
                      <div key={i} style={{ display:"flex", alignItems:"center", gap:"0.45rem" }}>
                        <div style={{ width:"5px", height:"5px", borderRadius:"50%", background:"#CA8A04", flexShrink:0 }} />
                        <span style={{ fontSize:"0.78rem", color:"var(--text-muted)", lineHeight:1.5 }}>{p}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop:"auto", padding:"0.5rem 0.75rem",
                    background:"rgba(202,138,4,0.08)", borderRadius:"8px",
                    fontSize:"0.7rem", fontWeight:700, color:"#CA8A04" }}>
                    Databricks SQL · Power BI · Tableau
                  </div>
                </div>

                {/* Consumers column */}
                <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", gap:"0.5rem", minWidth:"120px" }}>
                  <svg style={{ alignSelf:"flex-start", marginBottom:"0.25rem" }} width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke={PRIMARY} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div style={{ fontSize:"0.6rem", fontWeight:800, color:PRIMARY,
                    textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:"0.4rem" }}>Consumers</div>
                  {["BI Dashboards","ML Models","Compliance Reports","Databricks SQL"].map((s,i) => (
                    <div key={i} style={{ padding:"0.4rem 0.7rem",
                      background:`${PRIMARY}0d`, border:`1px solid ${PRIMARY}20`,
                      borderRadius:"8px", fontSize:"0.72rem", fontWeight:600,
                      color:PRIMARY, display:"flex", alignItems:"center", gap:"0.4rem" }}>
                      <div style={{ width:"5px", height:"5px", borderRadius:"50%", background:PRIMARY, flexShrink:0 }} />
                      {s}
                    </div>
                  ))}
                </div>
              </div>

              {/* Unity Catalog + Azure governance bar */}
              <div style={{
                marginTop:"1.25rem", padding:"0.9rem 1.5rem",
                background:"rgba(139,92,246,0.07)",
                border:"1px solid rgba(139,92,246,0.2)",
                borderRadius:"12px", display:"flex", alignItems:"center",
                gap:"1rem", flexWrap:"wrap"
              }}>
                <Shield size={16} color="#8B5CF6" />
                <span style={{ fontSize:"0.82rem", fontWeight:800, color:"#8B5CF6" }}>Unity Catalog</span>
                <span style={{ fontSize:"0.8rem", color:"var(--text-muted)", fontWeight:500 }}>
                  Governance across all layers · Column-level PII security · Full data lineage · APRA CPS 234 audit logs
                </span>
                <div style={{ marginLeft:"auto", display:"flex", alignItems:"center", gap:"0.5rem" }}>
                  <div style={{ position:"relative", width:"18px", height:"18px" }}>
                    <Image src="/images/azure-nobg.png" alt="Azure" fill style={{ objectFit:"contain" }} />
                  </div>
                  <span style={{ fontSize:"0.75rem", fontWeight:700, color:SECONDARY }}>Azure Australia East</span>
                </div>
              </div>

              <style>{`
                @media (max-width: 900px) {
                  .medal-grid { grid-template-columns: 1fr !important; }
                }
              `}</style>
            </div>
          </div>
        </section>

        {/* ══ SECTION 2: WHAT WE BUILD — expandable ═══════════════════ */}
        <section className="section" style={{ background:"var(--bg-secondary)" }}>
          <div className="container">
            <div className="reveal" style={{ textAlign:"center", marginBottom:"4rem" }}>
              <div className="section-label">Capabilities</div>
              <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"0.75rem", marginBottom:"0.75rem" }}>
                <div style={{ position:"relative", width:"32px", height:"32px" }}>
                  <Image src="/images/databricks-nobg.png" alt="Databricks" fill style={{ objectFit:"contain" }} />
                </div>
                <h2 className="section-title" style={{ maxWidth:"760px", margin:0 }}>
                  What We Build on Databricks
                </h2>
              </div>
              <p style={{ color:"var(--text-muted)", fontSize:"0.97rem", maxWidth:"560px", margin:"0.75rem auto 0" }}>
                Five capabilities — each a production discipline our engineers have delivered for Australian regulated clients.
              </p>
            </div>

            <div style={{ display:"flex", flexDirection:"column" }}>
              {CAPABILITIES.map((cap, i) => (
                <div key={i} className="cap-item reveal" style={{
                  background: openCap===i ? "var(--card-bg)" : "transparent",
                  borderRadius:"18px",
                  borderBottom: i < CAPABILITIES.length-1 ? "1px solid var(--border)" : "none",
                  overflow:"hidden",
                  boxShadow: openCap===i ? "0 4px 28px rgba(0,0,0,0.07)" : "none",
                  marginBottom: openCap===i ? "0.75rem" : 0,
                  transition:"all 0.25s ease"
                }}>
                  <button onClick={() => setOpenCap(openCap===i ? null : i)}
                    style={{ width:"100%", display:"flex", alignItems:"center",
                      padding:"1.75rem 1.5rem", background:"none", border:"none",
                      cursor:"pointer", textAlign:"left", gap:"1.5rem" }}>
                    <span style={{
                      fontSize:"clamp(1.8rem,3.5vw,2.6rem)", fontWeight:900, color:cap.color,
                      opacity: openCap===i ? 1 : 0.22, lineHeight:1,
                      minWidth:"3rem", transition:"opacity 0.25s ease"
                    }}>{cap.num}</span>

                    <div style={{ flex:1, display:"flex", alignItems:"center", gap:"1rem" }}>
                      <div style={{ width:"44px", height:"44px", borderRadius:"12px",
                        background:`${cap.color}${openCap===i ? "18" : "0d"}`,
                        display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
                        transition:"background 0.25s ease" }}>
                        <cap.icon size={20} color={cap.color} />
                      </div>
                      <div style={{ flex:1, minWidth:0 }}>
                        <div style={{ fontSize:"1.05rem", fontWeight:800, color:"var(--text)" }}>{cap.title}</div>
                        {openCap !== i && (
                          <div style={{ fontSize:"0.85rem", color:"var(--text-muted)", marginTop:"0.2rem" }}>{cap.intro}</div>
                        )}
                      </div>
                    </div>

                    <ChevronDown size={20} color="var(--text-muted)"
                      style={{ flexShrink:0, transform:openCap===i?"rotate(180deg)":"rotate(0)", transition:"0.3s" }} />
                  </button>

                  {openCap===i && (
                    <div className="expand-body" style={{ padding:"0 1.5rem 1.75rem 2rem" }}>
                      <p style={{ fontSize:"0.97rem", color:"var(--text)", lineHeight:1.85, marginBottom:"1.25rem" }}>{cap.detail}</p>
                      <div style={{ display:"flex", flexWrap:"wrap", gap:"0.5rem" }}>
                        {cap.badges.map((b, j) => (
                          <span key={j} style={{
                            padding:"0.28rem 0.8rem", borderRadius:"50px",
                            background:`${cap.color}10`, color:cap.color,
                            fontSize:"0.75rem", fontWeight:700
                          }}>{b}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SECTION 3: DELIVERY PHASES — tab selector ═══════════════ */}
        <section className="section" style={{ background:"var(--bg)" }}>
          <div className="container">
            <div className="reveal" style={{ textAlign:"center", marginBottom:"4rem" }}>
              <div className="section-label">Our Process</div>
              <h2 className="section-title" style={{ maxWidth:"760px", margin:"0 auto 1rem" }}>
                Our Databricks Delivery Approach
              </h2>
              <p style={{ color:"var(--text-muted)", fontSize:"0.97rem", maxWidth:"560px", margin:"0 auto" }}>
                Four phases from Platform Assessment to Handover. Initial dashboards are live by Week 8.
              </p>
            </div>

            {/* Phase tab selectors */}
            <div className="phase-row reveal" style={{ display:"flex", gap:"1rem", marginBottom:"2rem", flexWrap:"wrap" }}>
              {PHASES.map((ph, i) => (
                <button key={i} className="phase-tab"
                  onClick={() => setActivePhase(i)}
                  style={{
                    flex:"1 1 160px", padding:"1rem 1.25rem", borderRadius:"14px", border:"none",
                    textAlign:"left", background: activePhase===i ? `${ph.color}12` : "var(--card-bg)",
                    outline: activePhase===i ? `2px solid ${ph.color}40` : "1px solid var(--border)",
                    boxShadow: activePhase===i ? `0 4px 20px ${ph.color}20` : "none"
                  }}>
                  <div style={{ fontSize:"0.65rem", fontWeight:800, color:ph.color,
                    textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:"0.25rem" }}>{ph.weeks}</div>
                  <div style={{ fontSize:"0.9rem", fontWeight:800, color:"var(--text)" }}>{ph.title}</div>
                </button>
              ))}
            </div>

            {/* Active phase detail */}
            <div className="reveal" style={{
              background:"var(--card-bg)", borderRadius:"22px",
              padding:"2.25rem 2rem", border:`1px solid ${PHASES[activePhase].color}20`,
              boxShadow:`0 4px 28px ${PHASES[activePhase].color}12`
            }}>
              <div style={{ display:"flex", alignItems:"center", gap:"1rem", marginBottom:"1.5rem" }}>
                <span style={{ fontSize:"2.5rem", fontWeight:900, color:PHASES[activePhase].color, opacity:0.25, lineHeight:1 }}>
                  {PHASES[activePhase].num}
                </span>
                <div>
                  <div style={{ fontSize:"0.68rem", fontWeight:800, color:PHASES[activePhase].color,
                    textTransform:"uppercase", letterSpacing:"0.1em" }}>{PHASES[activePhase].weeks}</div>
                  <div style={{ fontSize:"1.2rem", fontWeight:800, color:"var(--text)" }}>{PHASES[activePhase].title}</div>
                </div>
              </div>
              <div style={{ display:"flex", flexDirection:"column", gap:"0.75rem" }}>
                {PHASES[activePhase].items.map((item, j) => (
                  <div key={j} style={{ display:"flex", alignItems:"flex-start", gap:"0.65rem" }}>
                    <CheckCircle2 size={16} color={PHASES[activePhase].color} style={{ marginTop:"2px", flexShrink:0 }} />
                    <span style={{ fontSize:"0.95rem", color:"var(--text)", lineHeight:1.7 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ FAQ ══════════════════════════════════════════════════════ */}
        <section className="section" style={{ background:"var(--bg-secondary)" }}>
          <div className="container" style={{ maxWidth:"860px" }}>
            <div className="reveal" style={{ textAlign:"center", marginBottom:"4rem" }}>
              <div className="section-label">FAQ</div>
              <h2 className="section-title" style={{ maxWidth:"700px", margin:"0 auto" }}>
                Frequently Asked Questions
              </h2>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:"0.75rem" }}>
              {FAQS.map((faq, i) => (
                <div key={i} className="reveal" style={{
                  background:"var(--card-bg)", borderRadius:"16px",
                  boxShadow:"0 1px 8px rgba(0,0,0,0.05)", overflow:"hidden"
                }}>
                  <button onClick={() => setOpenFaq(openFaq===i ? null : i)}
                    style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between",
                      padding:"1.35rem 1.75rem", background:"none", border:"none",
                      cursor:"pointer", textAlign:"left", gap:"1rem" }}>
                    <span style={{ fontSize:"0.97rem", fontWeight:700, color:"var(--text)", flex:1 }}>{faq.q}</span>
                    <ChevronDown size={18} color="var(--text-muted)"
                      style={{ minWidth:"18px", transform:openFaq===i?"rotate(180deg)":"rotate(0)", transition:"0.3s" }} />
                  </button>
                  {openFaq===i && (
                    <div className="expand-body" style={{ padding:"0 1.75rem 1.5rem", borderTop:"1px solid var(--border)" }}>
                      <p style={{ fontSize:"0.93rem", color:"var(--text-muted)", lineHeight:1.8, paddingTop:"1rem", margin:0 }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CTA ══════════════════════════════════════════════════════ */}
        <section className="section" style={{
          background:`linear-gradient(135deg, ${PRIMARY}0d 0%, ${SECONDARY}09 100%)`,
          borderTop:"1px solid var(--border)"
        }}>
          <div className="container" style={{ textAlign:"center" }}>
            <div className="reveal">
              <h2 style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:800, marginBottom:"1.25rem" }}>
                Ready to build your governed lakehouse?
              </h2>
              <p style={{ fontSize:"1.05rem", color:"var(--text-muted)", maxWidth:"560px",
                margin:"0 auto 2.5rem", lineHeight:1.75 }}>
                Start with a Databricks Platform Assessment. We audit your existing data landscape, design your Azure environment, and produce a Platform Design Document — before you commit to any engineering spend.
              </p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:"1rem", justifyContent:"center" }}>
                <Link href="/book-discovery" style={{
                  background:PRIMARY, color:"#fff", padding:"1rem 2.25rem",
                  borderRadius:"8px", fontWeight:600, textDecoration:"none",
                  display:"inline-flex", alignItems:"center", gap:"0.5rem"
                }}>
                  Book a Databricks Platform Assessment <ArrowRight size={18} />
                </Link>
                <Link href="/data-platforms" style={{
                  background:"transparent", color:"var(--text)", padding:"1rem 2.25rem",
                  borderRadius:"8px", fontWeight:600, textDecoration:"none",
                  display:"inline-flex", alignItems:"center", gap:"0.5rem",
                  border:"1px solid var(--border)"
                }}>
                  Explore All Data Platform Services <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
