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
  Database, Share2, BarChart2, Shield, Layers,
  Code2, TrendingUp, Server, Globe, Zap, Lock
} from "lucide-react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const PRIMARY   = "#29B5E8"; // Snowflake blue
const DEEP      = "#0A6FA8"; // Deeper Snowflake blue
const ACCENT    = "#00D4FF"; // Snowflake light cyan accent

/* ── ARCHITECTURE DIAGRAM DATA ─────────────────────────────────────────── */
const ARCH_SOURCES  = ["Operational DB", "CRM / ERP", "Files & APIs", "IoT / Events"];
const ARCH_CONSUMERS = [
  { label:"Power BI",          color:"#F2C811", icon:BarChart2 },
  { label:"Tableau",           color:"#E97627", icon:BarChart2 },
  { label:"Snowpark (Python)", color:"#29B5E8", icon:Code2     },
  { label:"Partner Account",   color:"#059669", icon:Share2    },
];

/* ── CAPABILITIES — expandable ─────────────────────────────────────────── */
const CAPABILITIES = [
  {
    num: "01", color: PRIMARY, icon: Database,
    title: "Data Warehouse Architecture",
    intro: "Snowflake environment designed from the ground up — databases, schemas, virtual warehouse sizing, role hierarchy, and network policies.",
    detail: "We design your Snowflake environment with appropriate database and schema organisation, virtual warehouse sizing and auto-suspend configuration, role hierarchy and privilege model, and network policies for private connectivity. Every architecture decision is documented in a Platform Design Document before we write a single line of SQL. Consumption-based virtual warehouses mean month-end reporting peaks cost nothing when idle.",
    badges: ["Virtual warehouse design", "Role hierarchy", "Auto-suspend", "Private Link"],
  },
  {
    num: "02", color: DEEP, icon: Layers,
    title: "Data Pipelines and ELT",
    intro: "Snowpipe for continuous serverless loading. dbt for SQL transformation with version control. Streams and Tasks for change data capture.",
    detail: "We build ELT pipelines using Snowpipe for continuous, serverless data loading from cloud storage and event streams. We use dbt for SQL-based data transformation with full version control, testing, and documentation — so your transformation logic is maintainable and auditable. Snowflake Streams and Tasks provide change data capture and scheduled processing without external orchestration tools.",
    badges: ["Snowpipe", "dbt", "Streams & Tasks", "Change data capture"],
  },
  {
    num: "03", color: "#059669", icon: Share2,
    title: "Data Sharing and Secure Views",
    intro: "Share live governed data across accounts or external partners — no data copying, no ETL, full audit trail.",
    detail: "We implement Snowflake Data Sharing for organisations that need to share governed data across internal accounts, subsidiary organisations, or external partners. Secure views restrict access to specific columns or rows based on consumer identity. Dynamic Data Masking applies column-level masking policies so analysts see tokenised values while data engineers see raw data. Row-level security ensures each analyst sees only the data their role permits — enforced at query time, not in application code.",
    badges: ["Data Sharing", "Secure views", "Dynamic masking", "Row-level security"],
  },
  {
    num: "04", color: "#F59E0B", icon: BarChart2,
    title: "Business Intelligence and Reporting",
    intro: "Native Power BI, Tableau, and Looker connectors. Semantic layer and data presentation structures for executive dashboards and compliance filings.",
    detail: "Snowflake integrates natively with Power BI, Tableau, Looker, and most modern BI tools via ODBC and JDBC connectors. We build the semantic layer — clean, pre-aggregated SQL views and materialised tables — and the data presentation structures that power your executive dashboards, operational reports, and compliance filings. We recommend DirectQuery mode for large datasets where refresh latency matters, and Import mode for smaller, high-performance report models.",
    badges: ["Power BI", "Tableau", "Looker", "Semantic layer"],
  },
  {
    num: "05", color: "#8B5CF6", icon: Code2,
    title: "Snowpark and Advanced Analytics",
    intro: "Python, Scala, and Java running inside Snowflake's compute — processing data where it lives, no external platforms required.",
    detail: "Snowflake's Snowpark framework allows Python, Scala, and Java code to run inside Snowflake's compute environment — processing data where it lives without moving it to an external platform. Data scientists can build ML feature pipelines, train models with ML Partner integrations, and serve predictions using Snowflake Model Registry. Snowpark Container Services extends this to arbitrary workloads including LLM inference within your Snowflake governance boundary.",
    badges: ["Snowpark Python", "ML Pipeline", "Model Registry", "Container Services"],
  },
];

/* ── INDUSTRY USE CASES ─────────────────────────────────────────────────── */
const INDUSTRIES = [
  {
    color: PRIMARY, icon: TrendingUp,
    industry: "Financial Services",
    heading: "APRA-grade governance at scale",
    points: [
      "Dynamic Data Masking on PII and financial record columns",
      "Row-Level Security enforced at query time for analyst segmentation",
      "Access History audit logs satisfying APRA CPG 234",
      "Snowflake Private Link for network isolation",
    ],
  },
  {
    color: "#059669", icon: Server,
    industry: "Healthcare",
    heading: "Governed data sharing across provider networks",
    points: [
      "De-identified clinical data shared across provider accounts",
      "Granular access controls on identified patient records",
      "AWS Sydney (ap-southeast-2) — data never leaves Australia",
      "Column-level masking for research data exports",
    ],
  },
  {
    color: "#F59E0B", icon: Globe,
    industry: "Resources & Logistics",
    heading: "High-volume telemetry and operational visibility",
    points: [
      "IoT sensor feeds, GPS tracking, equipment performance metrics",
      "Supply chain event streams loaded via Snowpipe",
      "Operations dashboards with sub-minute data freshness",
      "Consumption-based scaling — peaks cost nothing when idle",
    ],
  },
];

/* ── FAQ ─────────────────────────────────────────────────────────────────── */
const FAQS = [
  { q: "What is Snowflake used for?",           a: "Snowflake is a cloud-native data warehouse and analytics platform for storing and querying large volumes of structured and semi-structured data, running BI and reporting workloads, sharing governed data across departments or organisations, and running Python-based data science workloads via Snowpark." },
  { q: "Is Snowflake better than Databricks?",  a: "They excel in different areas. Snowflake is stronger for SQL analytics, consumption-based pricing, and cross-organisational data sharing. Databricks is stronger for data engineering at scale, machine learning, and streaming. Many Australian enterprises use both." },
  { q: "Does Snowflake store data in Australia?", a: "Yes. Snowflake on AWS ap-southeast-2 (Sydney) stores data in Australian AWS infrastructure, satisfying most Australian data residency requirements including financial services and healthcare." },
  { q: "What is Snowflake Data Sharing?",       a: "Snowflake Data Sharing allows one Snowflake account to share live, governed data with another Snowflake account without copying the data. Access can be restricted to specific tables, views, or columns. All access is logged." },
  { q: "Can Snowflake integrate with Power BI and Tableau?", a: "Yes. Snowflake has native connectors for Power BI, Tableau, Looker, Qlik, and most modern BI platforms. We recommend DirectQuery for large datasets and Import for smaller, frequently refreshed datasets." },
];

/* ═══════════════════════════════════════════════════════════════════════════ */
export default function SnowflakeClient() {
  const containerRef = useRef(null);
  const [openCap, setOpenCap] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  useGSAP(() => {
    gsap.from(".hero-badge", { y: -14, autoAlpha: 0, duration: 0.4, ease: "power2.out" });
    gsap.from(".hero-h1",   { y: 32, autoAlpha: 0, duration: 0.6, delay: 0.1, ease: "power3.out" });
    gsap.from(".hero-sub",  { y: 20, autoAlpha: 0, duration: 0.5, delay: 0.22, ease: "power2.out" });
    gsap.from(".hero-cta",  { y: 18, autoAlpha: 0, duration: 0.45, delay: 0.34, ease: "power2.out" });

    gsap.utils.toArray(".reveal").forEach(el => {
      gsap.fromTo(el,
        { y: 28, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.6, ease: "power2.out",
          clearProps: "transform,opacity,visibility",
          scrollTrigger: { trigger: el, start: "top 87%", once: true } }
      );
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(-6px)} to{opacity:1;transform:translateY(0)} }
        .expand-body { animation: fadeUp 0.25s ease; }
        .cap-item { transition: background 0.2s ease; }
        .cap-item:hover { background: var(--bg-secondary) !important; }
        .ind-card { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .ind-card:hover { transform: translateY(-4px); }
        @media (max-width: 900px) {
          .why-grid { grid-template-columns: 1fr !important; }
          .ind-grid  { grid-template-columns: 1fr !important; }
          .arch-row  { flex-direction: column !important; }
        }
      `}</style>

      <main style={{ paddingTop: "var(--header-h)", overflow: "hidden" }}>

        {/* ══ HERO ═══════════════════════════════════════════════════════ */}
        <section style={{
          position: "relative", minHeight: "82vh", display: "flex", alignItems: "center",
          padding: "0 1.5rem 60px", background: "var(--bg)", overflow: "hidden",
        }}>
          {/* Glows */}
          <div style={{ position:"absolute", top:"8%", right:"4%", width:"600px", height:"600px",
            background:`radial-gradient(circle, ${PRIMARY}10 0%, transparent 70%)`,
            pointerEvents:"none", zIndex:0 }} />
          <div style={{ position:"absolute", bottom:"10%", left:"4%", width:"380px", height:"380px",
            background:`radial-gradient(circle, ${DEEP}0c 0%, transparent 70%)`,
            pointerEvents:"none", zIndex:0 }} />

          {/* Snowflake logo — right panel, same pattern as Databricks / Fabric */}
          <div style={{ position:"absolute", top:0, right:0, width:"50%", height:"100%", zIndex:0, opacity:0.28, pointerEvents:"none" }}>
            <Image src="/images/snowflake-nobg.png" alt="Snowflake Cloud Data Platform" fill sizes="(max-width: 768px) 40vw, 200px"
              style={{ objectFit:"contain", objectPosition:"center right",
                maskImage:"radial-gradient(ellipse at right, black 30%, transparent 80%)",
                WebkitMaskImage:"radial-gradient(ellipse at right, black 30%, transparent 80%)" }} />
          </div>

          <div className="container" style={{ position:"relative", zIndex:1 }}>
            {/* Badge */}
            <div className="hero-badge" style={{
              display:"inline-flex", alignItems:"center", gap:"0.75rem",
              background:`rgba(41,181,232,0.08)`, border:`1px solid rgba(41,181,232,0.22)`,
              padding:"0.6rem 1.25rem", borderRadius:"50px", marginBottom:"2rem"
            }}>
              <div style={{ position:"relative", width:"20px", height:"20px" }}>
                <Image src="/images/snowflake-nobg.png" alt="Snowflake" fill sizes="(max-width: 768px) 40vw, 200px" style={{ objectFit:"contain" }} />
              </div>
              <div style={{ position:"relative", width:"18px", height:"18px" }}>
                <Image src="/images/aws-nobg.png" alt="AWS" fill sizes="(max-width: 768px) 40vw, 200px" style={{ objectFit:"contain" }} />
              </div>
              <span style={{ color:PRIMARY, fontWeight:700, fontSize:"0.88rem" }}>
                Snowflake · AWS Sydney ap-southeast-2 · Australian Data Residency
              </span>
            </div>

            <h1 className="hero-h1 section-title" style={{
              maxWidth:"900px", fontSize:"clamp(2.2rem,5vw,3.8rem)", lineHeight:1.1, marginBottom:"1.5rem"
            }}>
              Snowflake Consulting<br />
              <span style={{ color:PRIMARY, fontWeight:300 }}>
                Cloud-Native Data Warehousing for Australian Enterprise
              </span>
            </h1>

            <p className="hero-sub section-desc" style={{
              maxWidth:"680px", fontSize:"1.1rem", color:"var(--text-muted)", marginBottom:"3rem", lineHeight:1.82
            }}>
              Snowflake delivers cloud-native data warehousing with industry-leading data sharing, granular access governance, and consumption-based pricing. FI Digital deploys Snowflake on AWS Sydney for Australian data residency. Ideal for financial services, healthcare, and organisations that need to share governed data across organisational boundaries.
            </p>

            <div className="hero-cta" style={{ display:"flex", flexWrap:"wrap", gap:"1rem" }}>
              <Link href="/book-discovery" style={{
                background:PRIMARY, color:"#fff", padding:"1rem 2rem",
                borderRadius:"8px", fontWeight:600, textDecoration:"none",
                display:"inline-flex", alignItems:"center", gap:"0.5rem"
              }}>
                Book a Snowflake Assessment <ArrowRight size={18} />
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

        <TrustedBy />

        {/* ══ STAT STRIP ══════════════════════════════════════════════════ */}
        <div style={{ background:"var(--bg-secondary)", borderTop:"1px solid var(--border)", borderBottom:"1px solid var(--border)", padding:"2.25rem 1.5rem" }}>
          <div className="container">
            <div style={{ display:"flex", flexWrap:"wrap", gap:"2rem", justifyContent:"center", textAlign:"center" }}>
              {[
                { stat:"AWS Sydney",  label:"ap-southeast-2 — data never leaves Australia" },
                { stat:"Pay-as-used", label:"Consumption-based compute — idle warehouses cost nothing" },
                { stat:"APRA CPG 234",label:"Access History audit logs + Dynamic Data Masking" },
                { stat:"200+",        label:"Engineers across Australia and India" },
              ].map((s, i) => (
                <div key={i} className="reveal" style={{ flex:"1 1 200px" }}>
                  <div style={{ fontSize:"clamp(1.2rem,2.5vw,1.9rem)", fontWeight:900, color:PRIMARY, marginBottom:"0.3rem" }}>{s.stat}</div>
                  <div style={{ fontSize:"0.85rem", color:"var(--text-muted)", fontWeight:500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ SECTION 1: WHAT MAKES SNOWFLAKE DIFFERENT ══════════════════ */}
        <section className="section" style={{ background:"var(--bg)" }}>
          <div className="container">
            <div className="reveal" style={{ textAlign:"center", marginBottom:"4rem" }}>
              <div className="section-label">Differentiators</div>
              <h2 className="section-title" style={{ maxWidth:"760px", margin:"0 auto 1.25rem" }}>
                What Makes Snowflake Different
              </h2>
              <p style={{ color:"var(--text-muted)", fontSize:"1rem", maxWidth:"640px", margin:"0 auto" }}>
                Built from the ground up for the cloud — separated storage and compute, consumption-based pricing, and industry-leading data sharing.
              </p>
            </div>

            <div className="why-grid reveal" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"3rem", alignItems:"center" }}>
              {/* Left: text */}
              <div>
                <p style={{ fontSize:"1rem", color:"var(--text)", lineHeight:1.85, marginBottom:"1.25rem" }}>
                  Snowflake was built from the ground up for the cloud. Its architecture separates storage from compute — you pay for storage at cloud object storage rates and compute only when queries are running. This consumption-based model is transformative for organisations with variable query workloads. A financial services firm can scale compute up for month-end reporting and scale it back down without provisioning or decommissioning servers.
                </p>
                <p style={{ fontSize:"1rem", color:"var(--text-muted)", lineHeight:1.85, marginBottom:"1.25rem" }}>
                  Beyond pricing, Snowflake excels in two areas that matter deeply to Australian regulated industries: data sharing and governance. Snowflake's Data Sharing feature allows organisations to share live, governed data across Snowflake accounts without copying data — an insurance company sharing claims data with an external actuary, or a healthcare network sharing de-identified patient data with a research institution.
                </p>
                <p style={{ fontSize:"1rem", color:"var(--text-muted)", lineHeight:1.85 }}>
                  All sharing happens with fine-grained access controls, no data movement, and full audit trails — making Snowflake the dominant data sharing platform for Australian regulated industries.
                </p>
              </div>

              {/* Right: Architecture diagram */}
              <div className="reveal">
                <div style={{
                  background:"var(--card-bg)", borderRadius:"24px",
                  padding:"2rem", border:"1px solid var(--border)",
                  boxShadow:`0 6px 36px ${PRIMARY}10`
                }}>
                  {/* Header */}
                  <div style={{ display:"flex", alignItems:"center", gap:"0.6rem", marginBottom:"1.75rem" }}>
                    <div style={{ position:"relative", width:"22px", height:"22px" }}>
                      <Image src="/images/snowflake-nobg.png" alt="Snowflake" fill sizes="(max-width: 768px) 40vw, 200px" style={{ objectFit:"contain" }} />
                    </div>
                    <span style={{ fontSize:"0.72rem", fontWeight:800, color:PRIMARY, textTransform:"uppercase", letterSpacing:"0.1em" }}>
                      Snowflake Architecture
                    </span>
                  </div>

                  {/* Diagram: Sources → Snowflake (Storage + Compute) → Consumers */}
                  <div className="arch-row" style={{ display:"flex", alignItems:"stretch", gap:"0.75rem" }}>

                    {/* Sources */}
                    <div style={{ flex:"0 0 auto", display:"flex", flexDirection:"column", gap:"0.4rem", justifyContent:"center", minWidth:"105px" }}>
                      <div style={{ fontSize:"0.58rem", fontWeight:800, color:"var(--text-muted)", textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:"0.2rem" }}>Sources</div>
                      {ARCH_SOURCES.map((s, i) => (
                        <div key={i} style={{ padding:"0.35rem 0.6rem", background:"var(--bg-secondary)", borderRadius:"7px", fontSize:"0.7rem", fontWeight:600, color:"var(--text-muted)" }}>{s}</div>
                      ))}
                    </div>

                    {/* Arrow */}
                    <div style={{ display:"flex", alignItems:"center", color:"var(--text-muted)", fontSize:"1.2rem", fontWeight:900 }}>→</div>

                    {/* Snowflake Platform — storage + compute split */}
                    <div style={{ flex:1, display:"flex", flexDirection:"column", gap:"0.4rem" }}>
                      <div style={{ padding:"0.7rem 0.85rem", background:`${DEEP}10`,
                        border:`1.5px solid ${DEEP}25`, borderRadius:"11px" }}>
                        <div style={{ fontSize:"0.6rem", fontWeight:800, color:DEEP, textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:"0.2rem" }}>Storage Layer</div>
                        <div style={{ fontSize:"0.72rem", color:"var(--text-muted)", fontWeight:500 }}>Cloud object storage · Delta / Parquet · Pay per TB</div>
                      </div>
                      <div style={{ textAlign:"center", fontSize:"0.65rem", color:"var(--text-muted)", fontWeight:700 }}>⟵ Separation of storage & compute ⟶</div>
                      <div style={{ padding:"0.7rem 0.85rem", background:`${PRIMARY}10`,
                        border:`1.5px solid ${PRIMARY}28`, borderRadius:"11px" }}>
                        <div style={{ fontSize:"0.6rem", fontWeight:800, color:PRIMARY, textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:"0.2rem" }}>Virtual Warehouse (Compute)</div>
                        <div style={{ fontSize:"0.72rem", color:"var(--text-muted)", fontWeight:500 }}>Auto-suspend · Scale up/down · Pay per second</div>
                      </div>
                      {/* Governance strip */}
                      <div style={{ padding:"0.5rem 0.85rem", background:"rgba(139,92,246,0.07)",
                        border:"1px solid rgba(139,92,246,0.2)", borderRadius:"9px",
                        display:"flex", alignItems:"center", gap:"0.5rem" }}>
                        <Shield size={12} color="#8B5CF6" />
                        <span style={{ fontSize:"0.67rem", fontWeight:700, color:"#8B5CF6" }}>Governance · Masking · Row-Level Security · Access History</span>
                      </div>
                      {/* AWS badge */}
                      <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"0.4rem", marginTop:"0.1rem" }}>
                        <div style={{ position:"relative", width:"14px", height:"14px" }}>
                          <Image src="/images/aws-nobg.png" alt="AWS" fill sizes="(max-width: 768px) 40vw, 200px" style={{ objectFit:"contain" }} />
                        </div>
                        <span style={{ fontSize:"0.65rem", fontWeight:700, color:"var(--text-muted)" }}>AWS Sydney ap-southeast-2</span>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div style={{ display:"flex", alignItems:"center", color:"var(--text-muted)", fontSize:"1.2rem", fontWeight:900 }}>→</div>

                    {/* Consumers */}
                    <div style={{ flex:"0 0 auto", display:"flex", flexDirection:"column", gap:"0.4rem", justifyContent:"center", minWidth:"110px" }}>
                      <div style={{ fontSize:"0.58rem", fontWeight:800, color:PRIMARY, textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:"0.2rem" }}>Consumers</div>
                      {ARCH_CONSUMERS.map((c, i) => (
                        <div key={i} style={{
                          padding:"0.35rem 0.6rem", background:`${c.color}0d`,
                          border:`1px solid ${c.color}25`, borderRadius:"7px",
                          display:"flex", alignItems:"center", gap:"0.35rem"
                        }}>
                          <c.icon size={11} color={c.color} />
                          <span style={{ fontSize:"0.68rem", fontWeight:600, color:c.color }}>{c.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ SECTION 2: WHAT WE BUILD ════════════════════════════════════ */}
        <section className="section" style={{ background:"var(--bg-secondary)" }}>
          <div className="container">
            <div className="reveal" style={{ textAlign:"center", marginBottom:"4rem" }}>
              <div className="section-label">Capabilities</div>
              <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"0.75rem", marginBottom:"0.75rem" }}>
                <div style={{ position:"relative", width:"30px", height:"30px" }}>
                  <Image src="/images/snowflake-nobg.png" alt="Snowflake" fill sizes="(max-width: 768px) 40vw, 200px" style={{ objectFit:"contain" }} />
                </div>
                <h2 className="section-title" style={{ margin:0 }}>
                  What We Build on Snowflake
                </h2>
              </div>
              <p style={{ color:"var(--text-muted)", fontSize:"0.97rem", maxWidth:"580px", margin:"0.75rem auto 0" }}>
                Five capabilities — from data warehouse architecture through Snowpark ML, each production-proven for Australian regulated clients.
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

        {/* ══ SECTION 3: INDUSTRY USE CASES ══════════════════════════════ */}
        <section className="section" style={{ background:"var(--bg)" }}>
          <div className="container">
            <div className="reveal" style={{ textAlign:"center", marginBottom:"4rem" }}>
              <div className="section-label">Industry Focus</div>
              <h2 className="section-title" style={{ maxWidth:"760px", margin:"0 auto 1rem" }}>
                Snowflake for Australian Regulated Industries
              </h2>
              <p style={{ color:"var(--text-muted)", fontSize:"0.97rem", maxWidth:"580px", margin:"0 auto" }}>
                Three industries where Snowflake's governance and data sharing capabilities are particularly impactful.
              </p>
            </div>

            <div className="ind-grid reveal" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1.5rem" }}>
              {INDUSTRIES.map((ind, i) => (
                <div key={i} className="ind-card" style={{
                  background:"var(--card-bg)", borderRadius:"22px",
                  padding:"2rem 1.75rem", border:`1px solid ${ind.color}20`,
                  boxShadow:`0 4px 24px ${ind.color}0d`
                }}>
                  {/* Header */}
                  <div style={{ display:"flex", alignItems:"center", gap:"0.75rem", marginBottom:"1rem" }}>
                    <div style={{ width:"42px", height:"42px", borderRadius:"12px",
                      background:`${ind.color}12`, display:"flex", alignItems:"center", justifyContent:"center" }}>
                      <ind.icon size={20} color={ind.color} />
                    </div>
                    <div>
                      <div style={{ fontSize:"0.65rem", fontWeight:800, color:ind.color, textTransform:"uppercase", letterSpacing:"0.1em" }}>{ind.industry}</div>
                      <div style={{ fontSize:"0.88rem", fontWeight:800, color:"var(--text)", lineHeight:1.3 }}>{ind.heading}</div>
                    </div>
                  </div>

                  {/* Points */}
                  <div style={{ display:"flex", flexDirection:"column", gap:"0.55rem" }}>
                    {ind.points.map((p, j) => (
                      <div key={j} style={{ display:"flex", alignItems:"flex-start", gap:"0.55rem" }}>
                        <CheckCircle2 size={14} color={ind.color} style={{ marginTop:"2px", flexShrink:0 }} />
                        <span style={{ fontSize:"0.82rem", color:"var(--text-muted)", lineHeight:1.6 }}>{p}</span>
                      </div>
                    ))}
                  </div>

                  {/* Snowflake watermark */}
                  <div style={{ display:"flex", alignItems:"center", gap:"0.4rem", marginTop:"1.25rem",
                    paddingTop:"1rem", borderTop:"1px solid var(--border)" }}>
                    <div style={{ position:"relative", width:"14px", height:"14px" }}>
                      <Image src="/images/snowflake-nobg.png" alt="Snowflake" fill sizes="(max-width: 768px) 40vw, 200px" style={{ objectFit:"contain" }} />
                    </div>
                    <span style={{ fontSize:"0.68rem", fontWeight:700, color:PRIMARY }}>Snowflake · AWS Sydney</span>
                  </div>
                </div>
              ))}
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

        {/* ══ CTA ══════════════════════════════════════════════════════════ */}
        <section className="section" style={{
          background:`linear-gradient(135deg, ${PRIMARY}0d 0%, ${DEEP}08 100%)`,
          borderTop:"1px solid var(--border)"
        }}>
          <div className="container" style={{ textAlign:"center" }}>
            <div className="reveal">
              <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"1rem", marginBottom:"1.5rem", flexWrap:"wrap" }}>
                <div style={{ position:"relative", width:"44px", height:"44px" }}>
                  <Image src="/images/snowflake-nobg.png" alt="Snowflake" fill sizes="(max-width: 768px) 40vw, 200px" style={{ objectFit:"contain" }} />
                </div>
                <h2 style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:800, margin:0 }}>
                  Ready to build your Snowflake data platform?
                </h2>
              </div>
              <p style={{ fontSize:"1.05rem", color:"var(--text-muted)", maxWidth:"580px",
                margin:"0 auto 2.5rem", lineHeight:1.75 }}>
                Start with a Snowflake Assessment. We review your existing data landscape, design your warehouse and governance architecture, and produce a Platform Design Document — before we write a single line of SQL.
              </p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:"1rem", justifyContent:"center" }}>
                <Link href="/book-discovery" style={{
                  background:PRIMARY, color:"#fff", padding:"1rem 2.25rem",
                  borderRadius:"8px", fontWeight:600, textDecoration:"none",
                  display:"inline-flex", alignItems:"center", gap:"0.5rem"
                }}>
                  Book a Snowflake Assessment <ArrowRight size={18} />
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
