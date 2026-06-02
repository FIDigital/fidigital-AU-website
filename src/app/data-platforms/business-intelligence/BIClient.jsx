"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import TrustedBy from "@/components/TrustedBy";
import {
  ArrowRight, ChevronRight, ChevronDown, CheckCircle2,
  BarChart2, PieChart, TableProperties, TrendingUp,
  Shield, Zap, Users, Clock, AlertTriangle, Database
} from "lucide-react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const PRIMARY  = "#1D4ED8"; // FI blue
const ACCENT   = "#0EA5E9"; // Sky blue
const EMERALD  = "#059669";

/* ── WHY BI FAILS — problem cards ──────────────────────────────────────── */
const PROBLEMS = [
  { icon: AlertTriangle, color:"#EF4444", problem:"Different numbers to different people",  fix:"A governed semantic layer defines every metric once — enforced across all reports" },
  { icon: Clock,         color:"#F59E0B", problem:"Dashboards take 20 minutes to load",    fix:"Pre-aggregated Gold-layer datasets and materialised views — load in under 3 seconds" },
  { icon: Database,      color:"#8B5CF6", problem:"Every breakdown requires an analyst",   fix:"Self-service analytics on a modelled data layer with guardrails on sensitive data" },
  { icon: TableProperties,color:"#EC4A1E",problem:"Spreadsheets required alongside reports", fix:"Single source of truth with drill-down to transaction-level detail in the same platform" },
];

/* ── WHAT WE BUILD — expandable ─────────────────────────────────────────── */
const CAPABILITIES = [
  {
    num: "01", color: PRIMARY, icon: TrendingUp,
    title: "Executive and Board Dashboards",
    image: "/images/product-mod-card.png",
    chips: ["CFO Scorecards", "Board Reporting", "DAX", "LookML"],
    intro: "High-level KPI views for leadership and board. Revenue, margin, performance, and risk. One-click drill-down. Built for non-technical audiences.",
    detail: "High-level KPI views for your leadership team and board. Revenue, margin, operational performance, and risk metrics designed for non-technical audiences with one-click drill-down. Built on a semantic layer that enforces consistent metric definitions across the business — so the CFO and the board chair see the same number from the same source. We have built board dashboards that replaced 40-slide PowerPoint decks with live, interactive reports updated automatically.",
    badges: ["KPI scorecard", "Drill-down", "Semantic layer", "Auto-refresh"],
  },
  {
    num: "02", color: ACCENT, icon: Zap,
    title: "Operational & Mobile Reporting",
    image: "/images/mobile-app-card.png",
    chips: ["Real-time", "Push Alerts", "Field Visibility", "React Native"],
    intro: "The dashboards your operations team lives in. Job management, SLA performance, exception flagging. Under 3 seconds on large datasets.",
    detail: "The dashboards your operations team relies on daily. Job management, capacity utilisation, fulfilment rates, SLA performance, and exception flagging. Designed to load in under three seconds even on large datasets — because a slow dashboard is an unused dashboard. Refreshed near real-time for critical operational metrics using streaming ingestion or micro-batch pipelines. Role-based views ensure field supervisors, regional managers, and national operations heads each see the aggregation level appropriate to their role.",
    badges: ["<3s load time", "Near real-time", "Role-based views", "Exception alerts"],
  },
  {
    num: "03", color: EMERALD, icon: Users,
    title: "Self-Service & MVP Analytics",
    image: "/images/saas-mvp-card.png",
    chips: ["12-wk Launch", "Governance", "Natural Language", "NLP"],
    intro: "A governed semantic layer your analysts query with natural language or drag-and-drop. Guardrails that prevent access to ungoverned or sensitive data.",
    detail: "A governed semantic layer published via Power BI, Tableau, or Looker that your analysts can query using natural language or drag-and-drop report building — without needing SQL or engineering support. Guardrails that prevent access to ungoverned or sensitive data without appropriate authorisation. All self-service queries are logged for governance and performance monitoring.",
    badges: ["Natural language", "Drag-and-drop", "Row-level security", "Query logging"],
  },
  {
    num: "04", color: "#8B5CF6", icon: Shield,
    title: "Compliance and Regulatory Reporting",
    image: "/images/web-reporting-visual.png",
    chips: ["APRA CPS 234", "ASIC", "Lineage", "Audit Trails"],
    intro: "Automated compliance reports for APRA, ASIC, ACSC. Full data lineage from every figure in every regulatory submission back to its source.",
    detail: "Automated production of compliance reports satisfying APRA, ASIC, ACSC, and industry-specific regulators. Data lineage from every figure in every regulatory submission back to its source record — critical for APRA CPS 234 audits and ASIC breach reporting. Audit trails recording every access, query, and data export. Scheduled report generation and automated distribution to regulatory portals.",
    badges: ["APRA CPS 234", "ASIC", "Full lineage", "Audit trail"],
  },
  {
    num: "05", color: "#F59E0B", icon: PieChart,
    title: "Financial Planning and Analysis (FP&A)",
    image: "/images/bi-hero.png",
    chips: ["Budget vs Actuals", "Cash Flow", "Scenario Modeling", "FP&A"],
    intro: "Integrated P&L, balance sheet, and cash flow reporting. Budget vs actuals with driver analysis. Monthly close cycle from 10 days to 2 days.",
    detail: "Integrated P&L, balance sheet, and cash flow reporting connected to your general ledger and operational systems. Budget versus actuals with driver analysis showing exactly which cost centres and revenue streams are driving variance. Scenario modelling for planning cycles. Variance reporting with automated commentary generation. We have built FP&A platforms that reduce the monthly close reporting cycle from 10 days to 2 days — freeing your finance team from spreadsheet wrangling.",
    badges: ["Integrated P&L", "Budget vs actuals", "Scenario modelling", "Automated commentary"],
  },
];

/* ── BI TOOLS ────────────────────────────────────────────────────────────── */
const TOOLS = [
  {
    name:"Power BI",
    color:"#F2C811",
    logo:null, // no logo file — use icon
    best:"Microsoft 365 and Azure organisations",
    detail:"Our primary BI platform for Microsoft-stack clients. We design semantic models, implement row-level security, build DAX measures, and deploy via Premium Per User or Fabric capacity. Integration with Databricks, Snowflake, and Microsoft Fabric is native.",
    tags:["Semantic models","Row-level security","DAX","Fabric native"],
  },
  {
    name:"Tableau",
    color:"#E97627",
    logo:null,
    best:"Existing Tableau investments",
    detail:"For clients with existing Tableau investments — we consolidate your data sources into a governed extract layer, optimise performance, and implement governance via Tableau Server or Tableau Cloud. We migrate fragmented Tableau workbooks into organised, governed projects.",
    tags:["Data source consolidation","Performance tuning","Tableau Server","Tableau Cloud"],
  },
  {
    name:"Looker",
    color:"#4285F4",
    logo:null,
    best:"Code-first, Git-governed BI",
    detail:"For technically capable analytics teams that want version-controlled, testable metric definitions. LookML provides a code-first approach to metric governance — every metric is defined once, in version control, with automated testing. Integrated with dbt for end-to-end lineage.",
    tags:["LookML","Git-governed","Version controlled","dbt integration"],
  },
  {
    name:"dbt",
    color:"#EC4A1E",
    logo:null,
    best:"All FI Digital BI implementations",
    detail:"All FI Digital BI implementations include a dbt layer for version-controlled SQL transformations, automated data quality testing, documentation generation, and lineage visualisation. dbt is the connective tissue between your data platform and your reporting layer — ensuring transformation logic is maintained, tested, and auditable.",
    tags:["SQL transformations","Quality testing","Documentation","Data lineage"],
  },
];

/* ── DATA PLATFORM CONNECTORS ───────────────────────────────────────────── */
const PLATFORMS = [
  { name:"Databricks",        logo:"/images/databricks-nobg.png",   color:"#EC4A1E" },
  { name:"Snowflake",         logo:"/images/snowflake-nobg.png",    color:"#29B5E8" },
  { name:"Microsoft Fabric",  logo:"/images/Microsoft-Fabric.png",  color:"#0078D4" },
  { name:"PostgreSQL",        logo:"/images/postgresql.png",        color:"#336791" },
  { name:"Azure",             logo:"/images/azure-nobg.png",        color:"#0078D4" },
  { name:"AWS",               logo:"/images/aws-nobg.png",          color:"#FF9900" },
];

/* ── FAQ ─────────────────────────────────────────────────────────────────── */
const FAQS = [
  { q:"What is the difference between business intelligence and data analytics?",   a:"BI focuses on describing what happened: revenue last quarter, customers by region, open support tickets. Data analytics also includes diagnostic (why it happened), predictive (what will happen), and prescriptive (what should we do) analytics. FI Digital covers the full spectrum depending on your requirements." },
  { q:"Should we use Power BI, Tableau, or Looker?",                                a:"Power BI is best for Microsoft 365 and Azure organisations. Tableau is best for existing Tableau investments. Looker is best for code-first, Git-governed metric definitions with technically capable analytics teams. We recommend during Discovery based on your specific environment." },
  { q:"How long does it take to build a BI platform?",                              a:"A foundational BI platform with core dashboards takes 10 to 14 weeks. Initial dashboards are typically live by Week 6. A full enterprise BI programme may take 6 to 12 months." },
  { q:"Why do our current dashboards show different numbers to different people?",   a:"This occurs because metric calculations are defined inconsistently across different reports or systems. FI Digital solves this by implementing a governed semantic layer — Power BI semantic model, dbt metrics, or LookML — that defines every metric once and enforces that definition across all reports." },
  { q:"Can you connect BI to our existing systems without a data warehouse?",        a:"Yes, but we recommend against it for enterprise scenarios. Direct BI connections to operational databases create performance issues and make consistent metric governance impossible. A governed data layer between your operational systems and BI tools pays dividends within months." },
];

/* ═══════════════════════════════════════════════════════════════════════════ */
export default function BIClient() {
  const containerRef = useRef(null);
  const [openCap, setOpenCap] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  useGSAP(() => {
    gsap.from(".hero-badge", { y:-14, autoAlpha:0, duration:0.4, ease:"power2.out" });
    gsap.from(".hero-h1",   { y:32,  autoAlpha:0, duration:0.6, delay:0.1,  ease:"power3.out" });
    gsap.from(".hero-sub",  { y:20,  autoAlpha:0, duration:0.5, delay:0.22, ease:"power2.out" });
    gsap.from(".hero-btn",  { y: 18,  autoAlpha: 0, duration: 0.45,delay: 0.34, ease: "power2.out" });
    
    gsap.utils.toArray(".reveal-up").forEach(el => {
      gsap.fromTo(el,
        { y: 40, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.7, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" } }
      );
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(-6px)} to{opacity:1;transform:translateY(0)} }
        .expand-body  { animation:fadeUp 0.25s ease; }
        .cap-item     { transition:background 0.2s ease; }
        .cap-item:hover { background:var(--bg-secondary) !important; }
        .prob-card    { transition:transform 0.2s ease, box-shadow 0.2s ease; }
        .prob-card:hover { transform:translateY(-4px); }
        .tool-card    { transition:transform 0.2s ease, box-shadow 0.2s ease; }
        .tool-card:hover { transform:translateY(-4px); }
        @media(max-width:900px){
          .prob-grid { grid-template-columns:1fr !important; }
          .tool-grid { grid-template-columns:1fr !important; }
          .plat-grid { grid-template-columns:repeat(3,1fr) !important; }
          .zigzag-row { flex-direction: column !important; }
          .zigzag-row-reverse { flex-direction: column !important; }
          .zigzag-image-wrap { width: 100% !important; padding: 1.5rem !important; }
          .zigzag-content { width: 100% !important; padding: 2rem !important; }
        }
        @media(max-width:560px){
          .plat-grid { grid-template-columns:repeat(2,1fr) !important; }
        }
      `}</style>

      <main style={{ paddingTop:"var(--header-h)", overflow:"hidden" }}>

        {/* ══ HERO ════════════════════════════════════════════════════════ */}
        <section style={{
          position:"relative", minHeight:"82vh", display:"flex", alignItems:"center",
          padding:"0 1.5rem 60px", background:"var(--bg)", overflow:"hidden",
        }}>
          <div style={{ position:"absolute", top:"8%", right:"4%", width:"600px", height:"600px",
            background:`radial-gradient(circle, ${PRIMARY}10 0%, transparent 70%)`,
            pointerEvents:"none", zIndex:0 }} />
          <div style={{ position:"absolute", bottom:"10%", left:"4%", width:"380px", height:"380px",
            background:`radial-gradient(circle, ${ACCENT}0c 0%, transparent 70%)`,
            pointerEvents:"none", zIndex:0 }} />

          {/* Hero image — same pattern as AI agents */}
          <div style={{ position:"absolute", top:0, right:0, width:"58%", height:"100%", zIndex:0, opacity:0.4, pointerEvents:"none" }}>
            <Image src="/images/bi-hero.png" alt="Business Intelligence Dashboards" fill sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit:"cover",
                maskImage:"radial-gradient(ellipse at right, black, transparent 72%)",
                WebkitMaskImage:"radial-gradient(ellipse at right, black, transparent 72%)" }} />
          </div>

          <div className="container" style={{ position:"relative", zIndex:1 }}>
            <div className="hero-badge" style={{
              display:"inline-flex", alignItems:"center", gap:"0.75rem",
              background:`rgba(29,78,216,0.08)`, border:`1px solid rgba(29,78,216,0.22)`,
              padding:"0.6rem 1.25rem", borderRadius:"50px", marginBottom:"2rem"
            }}>
              <BarChart2 size={16} color={PRIMARY} />
              <span style={{ color:PRIMARY, fontWeight:700, fontSize:"0.88rem" }}>
                Power BI · Tableau · Looker · dbt · Connected to Databricks, Snowflake & Fabric
              </span>
            </div>

            <h1 className="hero-h1 section-title" style={{
              maxWidth:"900px", fontSize:"clamp(2rem,5vw,3.6rem)", lineHeight:1.1, marginBottom:"1.5rem"
            }}>
              Business Intelligence & Reporting<br />
              <span style={{ color:ACCENT, fontWeight:300 }}>
                Dashboards Your Board Actually Trusts
              </span>
            </h1>

            <p className="hero-sub section-desc" style={{
              maxWidth:"700px", fontSize:"1.1rem", color:"var(--text-muted)", marginBottom:"3rem", lineHeight:1.82
            }}>
              Most Australian businesses have dashboards. Most of them show different numbers to different people, take 20 minutes to load, and require a spreadsheet alongside them to be useful. FI Digital builds BI and reporting systems on top of governed data platforms — Databricks, Snowflake, Microsoft Fabric — that your CFO, board, and operations team agree on and rely on daily.
            </p>

            <div className="hero-btn" style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <Link href="/book-discovery" style={{
                background: PRIMARY, color: "#fff", padding: "1rem 2.25rem",
                borderRadius: "8px", fontWeight: 600, textDecoration: "none",
                display: "inline-flex", alignItems: "center", gap: "0.5rem"
              }}>
                Book a BI Assessment <ArrowRight size={18} />
              </Link>
              <Link href="/data-platforms" style={{
                background: "transparent", color: "var(--text)", padding: "1rem 2.25rem",
                borderRadius: "8px", fontWeight: 600, textDecoration: "none",
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                border: "1px solid var(--border)"
              }}>
                All Data Platform Services <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        <TrustedBy />

        {/* ══ STAT STRIP ══════════════════════════════════════════════════ */}
        <div style={{ background:"var(--bg-secondary)", borderTop:"1px solid var(--border)", borderBottom:"1px solid var(--border)", padding:"2.25rem 1.5rem" }}>
          <div className="container">
            <div style={{ display:"flex", flexWrap:"wrap", gap:"2rem", justifyContent:"center", textAlign:"center" }}>
              {[
                { stat:"<3 sec",    label:"Dashboard load target — every operational report we build" },
                { stat:"10→2 days", label:"Monthly close reporting cycle reduction for FP&A clients" },
                { stat:"Week 6",    label:"Initial dashboards live — before full BI platform completes" },
                { stat:"1 truth",   label:"Single governed metric definition across all reports" },
              ].map((s,i) => (
                <div key={i} className="reveal" style={{ flex:"1 1 200px" }}>
                  <div style={{ fontSize:"clamp(1.2rem,2.5vw,1.9rem)", fontWeight:900, color:PRIMARY, marginBottom:"0.3rem" }}>{s.stat}</div>
                  <div style={{ fontSize:"0.85rem", color:"var(--text-muted)", fontWeight:500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ SECTION 1: WHY BI FAILS ═════════════════════════════════════ */}
        <section className="section" style={{ background:"var(--bg)" }}>
          <div className="container">
            <div className="reveal" style={{ textAlign:"center", marginBottom:"4rem" }}>
              <div className="section-label">Root Cause</div>
              <h2 className="section-title" style={{ maxWidth:"760px", margin:"0 auto 1.25rem" }}>
                Why BI Fails — And How We Fix It
              </h2>
              <p style={{ color:"var(--text-muted)", fontSize:"1rem", maxWidth:"680px", margin:"0 auto" }}>
                Business intelligence failures are almost never a reporting tool problem. They are a data foundation problem. We fix the foundation before we build a single dashboard.
              </p>
            </div>

            {/* Problem → Fix cards */}
            <div className="prob-grid reveal" style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:"1.25rem", marginBottom:"4rem" }}>
              {PROBLEMS.map((p,i) => (
                <div key={i} className="prob-card" style={{
                  background:"var(--card-bg)", borderRadius:"20px", padding:"1.75rem",
                  border:`1px solid ${p.color}20`, boxShadow:`0 4px 24px ${p.color}0a`
                }}>
                  <div style={{ display:"flex", alignItems:"flex-start", gap:"1rem" }}>
                    <div style={{ width:"40px", height:"40px", borderRadius:"11px",
                      background:`${p.color}10`, display:"flex", alignItems:"center",
                      justifyContent:"center", flexShrink:0 }}>
                      <p.icon size={18} color={p.color} />
                    </div>
                    <div>
                      <div style={{ fontSize:"0.78rem", fontWeight:800, color:p.color,
                        textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:"0.3rem" }}>Problem</div>
                      <div style={{ fontSize:"0.95rem", fontWeight:800, color:"var(--text)", marginBottom:"0.75rem" }}>{p.problem}</div>
                      <div style={{ display:"flex", alignItems:"flex-start", gap:"0.5rem" }}>
                        <CheckCircle2 size={14} color={EMERALD} style={{ marginTop:"2px", flexShrink:0 }} />
                        <span style={{ fontSize:"0.85rem", color:"var(--text-muted)", lineHeight:1.65 }}>{p.fix}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Foundation callout */}
            <div className="reveal" style={{
              background:`linear-gradient(135deg, ${PRIMARY}08 0%, ${ACCENT}06 100%)`,
              border:`1px solid ${PRIMARY}18`, borderRadius:"20px",
              padding:"2rem 2.5rem", display:"flex", alignItems:"center", gap:"2rem", flexWrap:"wrap"
            }}>
              <div style={{ flex:"0 0 auto" }}>
                <BarChart2 size={40} color={PRIMARY} />
              </div>
              <div style={{ flex:1 }}>
                <div style={{ fontSize:"1rem", fontWeight:800, color:"var(--text)", marginBottom:"0.5rem" }}>
                  FI Digital's BI practice begins with the data foundation.
                </div>
                <p style={{ fontSize:"0.9rem", color:"var(--text-muted)", lineHeight:1.75, margin:0 }}>
                  Before we build a single dashboard, we ensure your data platform has a well-designed presentation layer with governed metric definitions, pre-aggregated datasets, semantic models in business language, and row-level security showing each user exactly the data they are authorised to see.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══ SECTION 2: WHAT WE BUILD ════════════════════════════════════ */}
        <section className="section" style={{ background:"var(--bg-secondary)" }}>
          <div className="container">
            <div className="reveal" style={{ textAlign:"center", marginBottom:"4rem" }}>
              <div className="section-label">Capabilities</div>
              <h2 className="section-title" style={{ maxWidth:"760px", margin:"0 auto 1rem" }}>
                What We Build
              </h2>
              <p style={{ color:"var(--text-muted)", fontSize:"0.97rem", maxWidth:"560px", margin:"0 auto" }}>
                Five BI capability areas — from board-level KPIs through FP&A, each production-delivered for Australian clients.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "6rem" }}>
              {CAPABILITIES.map((cap, i) => (
                <div key={i} className={`reveal-up ${i % 2 !== 0 ? "zigzag-row-reverse" : "zigzag-row"}`} style={{
                  display: "flex", alignItems: "center",
                  flexDirection: i % 2 !== 0 ? "row-reverse" : "row",
                  background: "transparent", minHeight: "450px", gap: "2rem"
                }}>
                  {/* Image Wrap — Contained & Attractive */}
                  <div className="zigzag-image-wrap" style={{ 
                    width: "42%", 
                    padding: i % 2 !== 0 ? "0 0 0 2rem" : "0 2rem 0 0" 
                  }}>
                    <div style={{ 
                      position: "relative", width: "100%", paddingTop: "65%", // 16:10 aspectish
                      borderRadius: "24px", overflow: "hidden",
                      boxShadow: `0 20px 50px rgba(0,0,0,0.3), 0 0 0 1px var(--border)`,
                      border: `1px solid ${cap.color}20`
                    }}>
                      <Image src={cap.image} alt={cap.title} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="zigzag-content" style={{ width: "58%", padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                      <div style={{
                        width: "50px", height: "50px", borderRadius: "12px",
                        background: `${cap.color}15`, border: `1px solid ${cap.color}30`,
                        display: "flex", alignItems: "center", justifyContent: "center"
                      }}>
                        <cap.icon size={24} color={cap.color} />
                      </div>
                      <div style={{
                        fontSize: "0.8rem", fontWeight: 800, color: cap.color,
                        textTransform: "uppercase", letterSpacing: "0.12em"
                      }}>
                        Capability {cap.num}
                      </div>
                    </div>

                    <h3 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "1.25rem", color: "var(--text)", lineHeight: 1.1 }}>
                      {cap.title}
                    </h3>
                    
                    <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", marginBottom: "2rem", lineHeight: 1.75 }}>
                      {cap.intro}
                    </p>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "2.5rem" }}>
                      {cap.chips.map((chip, j) => (
                        <span key={j} style={{
                          padding: "0.4rem 1rem", borderRadius: "50px",
                          background: "var(--bg-secondary)", border: "1px solid var(--border)",
                          fontSize: "0.75rem", fontWeight: 700, color: "var(--text-muted)"
                        }}>{chip}</span>
                      ))}
                    </div>

                    <button 
                      onClick={() => setOpenCap(openCap === i ? null : i)}
                      style={{
                        background: cap.color, color: "#fff", padding: "1rem 2.25rem",
                        borderRadius: "12px", border: "none", fontWeight: 700, fontSize: "1.05rem", 
                        cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "0.75rem",
                        alignSelf: "flex-start", boxShadow: `0 10px 20px ${cap.color}30`
                      }}>
                      {openCap === i ? "Hide Details" : "Learn More"} 
                      <ChevronRight size={20} style={{ transform: openCap === i ? "rotate(90deg)" : "none", transition: "0.2s" }} />
                    </button>
                  </div>

                  {/* Expandable Detail Overlay */}
                  {openCap === i && (
                    <div className="expand-body" style={{
                      position: "fixed", inset: 0, zIndex: 1000,
                      background: "rgba(10,10,10,0.95)", backdropFilter: "blur(12px)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      padding: "2rem"
                    }}>
                      <div style={{ 
                        background: "var(--card-bg)", width: "100%", maxWidth: "900px", 
                        maxHeight: "90vh", borderRadius: "32px", overflowY: "auto",
                        border: `1px solid ${cap.color}40`, padding: "4rem", position: "relative"
                      }}>
                        <button onClick={() => setOpenCap(null)} style={{ 
                          position: "absolute", top: "2rem", right: "2rem",
                          background: "var(--bg-secondary)", border: "none", color: "var(--text)", 
                          padding: "0.8rem 1.5rem", borderRadius: "12px", cursor: "pointer", fontWeight: 700,
                          fontSize: "0.9rem"
                        }}>✕ Close</button>

                        <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "2.5rem" }}>
                           <cap.icon size={36} color={cap.color} />
                           <h2 style={{ fontSize: "2.2rem", fontWeight: 800, margin: 0 }}>{cap.title}</h2>
                        </div>
                        
                        <p style={{ fontSize: "1.2rem", lineHeight: 1.9, color: "var(--text)", marginBottom: "3rem" }}>
                          {cap.detail}
                        </p>

                        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                          {cap.badges.map((b, j) => (
                            <div key={j} style={{
                              display: "flex", alignItems: "center", gap: "0.75rem",
                              padding: "0.75rem 1.5rem", borderRadius: "16px",
                              background: `${cap.color}10`, border: `1px solid ${cap.color}25`
                            }}>
                              <CheckCircle2 size={20} color={cap.color} />
                              <span style={{ fontSize: "1rem", fontWeight: 700, color: cap.color }}>{b}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SECTION 3: BI TECHNOLOGY ════════════════════════════════════ */}
        <section className="section" style={{ background:"var(--bg)" }}>
          <div className="container">
            <div className="reveal" style={{ textAlign:"center", marginBottom:"4rem" }}>
              <div className="section-label">Technology</div>
              <h2 className="section-title" style={{ maxWidth:"760px", margin:"0 auto 1rem" }}>
                Our BI Technology Approach
              </h2>
              <p style={{ color:"var(--text-muted)", fontSize:"0.97rem", maxWidth:"620px", margin:"0 auto" }}>
                The right tool for your stack. No religious attachment to a single vendor. We recommend during Discovery based on your environment.
              </p>
            </div>

            {/* Tool cards */}
            <div className="tool-grid reveal" style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:"1.5rem", marginBottom:"4rem" }}>
              {TOOLS.map((tool,i) => (
                <div key={i} className="tool-card" style={{
                  background:"var(--card-bg)", borderRadius:"22px",
                  padding:"2rem 1.75rem", border:`1px solid ${tool.color}22`,
                  boxShadow:`0 4px 24px ${tool.color}0a`
                }}>
                  <div style={{ display:"flex", alignItems:"center", gap:"0.85rem", marginBottom:"0.85rem" }}>
                    <div style={{ width:"44px", height:"44px", borderRadius:"12px",
                      background:`${tool.color}12`, display:"flex", alignItems:"center",
                      justifyContent:"center" }}>
                      <BarChart2 size={20} color={tool.color} />
                    </div>
                    <div>
                      <div style={{ fontSize:"1.05rem", fontWeight:900, color:"var(--text)" }}>{tool.name}</div>
                      <div style={{ fontSize:"0.72rem", fontWeight:700, color:tool.color }}>Best for: {tool.best}</div>
                    </div>
                  </div>
                  <p style={{ fontSize:"0.88rem", color:"var(--text-muted)", lineHeight:1.75, marginBottom:"1rem" }}>{tool.detail}</p>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:"0.4rem" }}>
                    {tool.tags.map((t,j) => (
                      <span key={j} style={{
                        padding:"0.22rem 0.65rem", borderRadius:"50px",
                        background:`${tool.color}0d`, color:tool.color,
                        fontSize:"0.72rem", fontWeight:700
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Data platform connectors */}
            <div className="reveal" style={{
              background:"var(--card-bg)", borderRadius:"22px",
              padding:"2rem 2.5rem", border:"1px solid var(--border)"
            }}>
              <div style={{ display:"flex", alignItems:"center", gap:"0.75rem", marginBottom:"1.5rem" }}>
                <Database size={18} color={PRIMARY} />
                <span style={{ fontSize:"0.8rem", fontWeight:800, color:"var(--text)", textTransform:"uppercase", letterSpacing:"0.08em" }}>
                  Data Platform Connectors — We Build On Top Of
                </span>
              </div>
              <div className="plat-grid" style={{ display:"grid", gridTemplateColumns:"repeat(6,1fr)", gap:"0.75rem" }}>
                {PLATFORMS.map((pl,i) => (
                  <div key={i} style={{
                    display:"flex", flexDirection:"column", alignItems:"center", gap:"0.5rem",
                    padding:"0.85rem 0.5rem", borderRadius:"14px",
                    background:`${pl.color}08`, border:`1px solid ${pl.color}18`
                  }}>
                    <div style={{ position:"relative", width:"32px", height:"32px" }}>
                      <Image src={pl.logo} alt={pl.name} fill sizes="(max-width: 768px) 40vw, 200px" style={{ objectFit:"contain" }} />
                    </div>
                    <span style={{ fontSize:"0.65rem", fontWeight:700, color:"var(--text)", textAlign:"center", lineHeight:1.3 }}>{pl.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ FAQ ══════════════════════════════════════════════════════════ */}
        <section className="section" style={{ background:"var(--bg-secondary)" }}>
          <div className="container" style={{ maxWidth:"860px" }}>
            <div className="reveal" style={{ textAlign:"center", marginBottom:"4rem" }}>
              <div className="section-label">FAQ</div>
              <h2 className="section-title" style={{ maxWidth:"700px", margin:"0 auto" }}>
                Frequently Asked Questions
              </h2>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:"0.75rem" }}>
              {FAQS.map((faq,i) => (
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

        {/* ══ CTA ══════════════════════════════════════════════════════════ */}
        <section className="section" style={{
          background:`linear-gradient(135deg, ${PRIMARY}0d 0%, ${ACCENT}08 100%)`,
          borderTop:"1px solid var(--border)"
        }}>
          <div className="container" style={{ textAlign:"center" }}>
            <div className="reveal">
              <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"1rem", marginBottom:"1.5rem" }}>
                <BarChart2 size={40} color={PRIMARY} />
                <h2 style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:800, margin:0 }}>
                  Stop building reports nobody trusts.
                </h2>
              </div>
              <p style={{ fontSize:"1.05rem", color:"var(--text-muted)", maxWidth:"580px",
                margin:"0 auto 2.5rem", lineHeight:1.75 }}>
                Start with a BI Assessment. We review your current reporting landscape, data foundations, and tool stack — then design a governed BI architecture that gives your organisation one version of the truth.
              </p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:"1rem", justifyContent:"center" }}>
                <Link href="/book-discovery" style={{
                  background:PRIMARY, color:"#fff", padding:"1rem 2.25rem",
                  borderRadius:"8px", fontWeight:600, textDecoration:"none",
                  display:"inline-flex", alignItems:"center", gap:"0.5rem"
                }}>Book a BI Assessment <ArrowRight size={18} /></Link>
                <Link href="/data-platforms" style={{
                  background:"transparent", color:"var(--text)", padding:"1rem 2.25rem",
                  borderRadius:"8px", fontWeight:600, textDecoration:"none",
                  display:"inline-flex", alignItems:"center", gap:"0.5rem",
                  border:"1px solid var(--border)"
                }}>Explore All Data Platform Services <ChevronRight size={18} /></Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
