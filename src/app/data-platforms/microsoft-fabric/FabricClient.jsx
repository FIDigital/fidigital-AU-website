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
  Database, BarChart2, Zap, FlaskConical, GitMerge,
  Layers, Shield, Cloud, Globe, TrendingUp, Server
} from "lucide-react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const PRIMARY   = "#0078D4"; // Microsoft blue
const TEAL      = "#00B7C3"; // Microsoft teal / Fabric accent
const SECONDARY = "#7FBA00"; // Microsoft green

/* ── ONELAKE HUB WORKLOADS ────────────────────────────────────────────── */
const WORKLOADS = [
  { label: "Data Factory",        color: "#0078D4", icon: GitMerge,    angle:  -90 },
  { label: "Data Engineering",    color: "#00B7C3", icon: Layers,      angle:  -30 },
  { label: "Data Warehouse",      color: "#7FBA00", icon: Database,    angle:   30 },
  { label: "Power BI",            color: "#F2C811", icon: BarChart2,   angle:   90 },
  { label: "Real-Time Analytics", color: "#E81123", icon: Zap,         angle:  150 },
  { label: "Data Science",        color: "#8860C9", icon: FlaskConical,angle:  210 },
];

/* ── CAPABILITIES — expandable ─────────────────────────────────────────── */
const CAPABILITIES = [
  {
    num: "01", color: PRIMARY, icon: Database,
    title: "OneLake Architecture",
    intro: "One unified, organisation-wide data lake shared across all Fabric workloads — no data duplication, no sync overhead.",
    detail: "OneLake is the foundational storage layer of Fabric — a single, organisation-wide data lake that all Fabric workloads share. We design your OneLake with appropriate domain separation, workspace structure, and shortcut configurations for data that must remain in existing Azure Storage or ADLS Gen2 locations. Shortcuts allow you to reference data in external storage — including Databricks, Snowflake, and AWS S3 — without copying it into OneLake.",
    badges: ["Domain separation", "Workspace design", "ADLS Gen2 shortcuts", "Delta format"],
  },
  {
    num: "02", color: TEAL, icon: GitMerge,
    title: "Data Engineering and Pipelines",
    intro: "Fabric Data Factory pipelines ingesting from your operational systems. Notebooks in PySpark and Python. Medallion layers your analysts query.",
    detail: "Fabric Data Factory pipelines ingest data from your operational systems — databases, APIs, files, event streams. We build and deploy Fabric Notebooks using PySpark and Python for complex transformations. Fabric Lakehouse and Warehouse provide the Bronze, Silver, and Gold layers your analysts query. All pipeline code is version-controlled, documented, and handed over to your team.",
    badges: ["Data Factory", "PySpark notebooks", "Medallion layers", "Lakehouse + Warehouse"],
  },
  {
    num: "03", color: "#F2C811", icon: BarChart2,
    title: "Power BI Integration",
    intro: "Power BI natively integrated into Fabric — no data movement, no refresh delays. Semantic models, DAX, row-level security, and report layouts.",
    detail: "Power BI is natively integrated into Fabric. Semantic models are built directly on your Fabric data, eliminating the data movement and refresh delays of traditional Power BI Premium architectures. We design semantic models, DAX measures, row-level security, and report layouts. Your Power BI reports reflect data changes within minutes — not the overnight batch cycles that traditional Power BI deployments require.",
    badges: ["Semantic models", "DAX measures", "Row-level security", "Near-real-time refresh"],
  },
  {
    num: "04", color: "#E81123", icon: Zap,
    title: "Real-Time Analytics",
    intro: "Fabric Eventstream ingests IoT, event hubs, and streaming sources. Real-time Power BI dashboards for logistics, trading desks, and ops centres.",
    detail: "Fabric Eventstream ingests real-time data from IoT devices, Azure Event Hubs, Kafka topics, and streaming sources. Real-time dashboards in Power BI reflect current operational state with sub-second latency — useful for logistics fleet monitoring, financial trading desks, healthcare operations centres, and manufacturing floor visibility. Fabric KQL Database provides the high-performance time-series query engine.",
    badges: ["Eventstream", "Azure Event Hubs", "KQL Database", "Sub-second latency"],
  },
  {
    num: "05", color: "#8860C9", icon: FlaskConical,
    title: "Data Science and AI Integration",
    intro: "Fabric Data Science notebooks train models on the same data powering your BI. Native Azure OpenAI and Microsoft Copilot integration.",
    detail: "Fabric Data Science notebooks enable your data scientists to train models on the same data that powers your BI reports — no separate data copies, no export pipelines. Integration with Azure OpenAI Service enables GPT-powered analytics, document intelligence, and conversational BI. Microsoft Copilot is natively available within Fabric workspaces for natural language queries against your semantic models.",
    badges: ["ML notebooks", "Azure OpenAI", "Microsoft Copilot", "Shared OneLake data"],
  },
];

/* ── FIT CRITERIA ──────────────────────────────────────────────────────── */
const FIT = [
  { text: "Runs Azure Active Directory as your identity provider",       yes: true  },
  { text: "Uses Power BI as your primary BI platform",                    yes: true  },
  { text: "Has a Microsoft enterprise agreement that includes Fabric capacity", yes: true },
  { text: "Runs workloads on Azure and wants to simplify the data landscape", yes: true },
  { text: "Needs tight integration between analytics and Microsoft Copilot", yes: true },
  { text: "Requires heavy ML/AI workloads better served by Databricks",   yes: false },
  { text: "Needs multi-cloud data sharing with non-Azure partners",        yes: false },
];

/* ── FAQ ──────────────────────────────────────────────────────────────── */
const FAQS = [
  { q: "What is Microsoft Fabric?", a: "Microsoft Fabric is a unified analytics platform combining data engineering, data warehousing, data science, real-time analytics, and Power BI reporting in a single environment. All workloads share OneLake, a unified governance model, and a shared compute layer." },
  { q: "How is Microsoft Fabric different from Azure Synapse Analytics?", a: "Fabric is the evolution of Azure Synapse Analytics. It provides a more unified experience, a shared OneLake storage layer, and tighter Power BI integration. New enterprise deployments should target Fabric. FI Digital can migrate existing Synapse environments to Fabric." },
  { q: "Does Microsoft Fabric run in Australian data centres?", a: "Yes. Fabric capacity can be deployed in Azure Australia East (New South Wales), satisfying Australian data residency requirements. All data remains in Australian Azure infrastructure." },
  { q: "How does Power BI fit into Microsoft Fabric?", a: "Power BI is natively integrated into Fabric. Semantic models replace traditional Power BI Premium datasets. Reports are built and published within the Fabric workspace. Data moves directly from your Fabric Lakehouse into Power BI without the data movement overhead of traditional architectures." },
  { q: "Can we use Microsoft Fabric if we already have Snowflake or Databricks?", a: "Yes. Fabric supports shortcuts and mirroring that allow you to reference data in external storage without copying it into OneLake. Some clients use Fabric as the presentation and Power BI layer while retaining Databricks for heavy ML workloads." },
];

/* ═══════════════════════════════════════════════════════════════════════ */
export default function FabricClient() {
  const containerRef = useRef(null);
  const [openCap, setOpenCap] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  useGSAP(() => {
    gsap.from(".hero-badge", { y: -14, autoAlpha: 0, duration: 0.4, ease: "power2.out" });
    gsap.from(".hero-h1",   { y: 32, autoAlpha: 0, duration: 0.6, delay: 0.1,  ease: "power3.out" });
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
        .workload-node { transition: transform 0.2s ease; cursor: default; }
        .workload-node:hover { transform: scale(1.06); }
        .fit-row { transition: background 0.15s ease; }
        .fit-row:hover { background: var(--bg-secondary) !important; }
        @media (max-width: 900px) {
          .why-grid { grid-template-columns: 1fr !important; }
          .fit-grid  { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <main style={{ paddingTop: "var(--header-h)", overflow: "hidden" }}>

        {/* ══ HERO ══════════════════════════════════════════════════════ */}
        <section style={{
          position: "relative", minHeight: "82vh", display: "flex", alignItems: "center",
          padding: "0 1.5rem 60px", background: "var(--bg)", overflow: "hidden",
        }}>
          {/* Ambient glows */}
          <div style={{ position:"absolute", top:"8%", right:"4%", width:"620px", height:"620px",
            background:`radial-gradient(circle, ${PRIMARY}10 0%, transparent 70%)`,
            pointerEvents:"none", zIndex:0 }} />
          <div style={{ position:"absolute", bottom:"8%", left:"4%", width:"400px", height:"400px",
            background:`radial-gradient(circle, ${TEAL}0c 0%, transparent 70%)`,
            pointerEvents:"none", zIndex:0 }} />

          {/* Hero right image */}
          <div style={{ position:"absolute", top:0, right:0, width:"50%", height:"100%", zIndex:0, opacity:0.28, pointerEvents:"none" }}>
            <Image src="/images/Microsoft-Fabric.png" alt="Microsoft Fabric Platform" fill sizes="(max-width: 768px) 40vw, 200px"
              style={{ objectFit:"contain", objectPosition:"center right",
                maskImage:"radial-gradient(ellipse at right, black 30%, transparent 80%)",
                WebkitMaskImage:"radial-gradient(ellipse at right, black 30%, transparent 80%)" }} />
          </div>

          <div className="container" style={{ position:"relative", zIndex:1 }}>
            {/* Badge */}
            <div className="hero-badge" style={{
              display:"inline-flex", alignItems:"center", gap:"0.75rem",
              background:`rgba(0,120,212,0.08)`, border:`1px solid rgba(0,120,212,0.22)`,
              padding:"0.6rem 1.25rem", borderRadius:"50px", marginBottom:"2rem"
            }}>
              <div style={{ position:"relative", width:"20px", height:"20px" }}>
                <Image src="/images/Microsoft-Fabric.png" alt="Microsoft Fabric" fill sizes="(max-width: 768px) 40vw, 200px" style={{ objectFit:"contain" }} />
              </div>
              <span style={{ color:PRIMARY, fontWeight:700, fontSize:"0.88rem" }}>
                Microsoft Fabric · Azure Australia East · OneLake
              </span>
            </div>

            <h1 className="hero-h1 section-title" style={{
              maxWidth:"900px", fontSize:"clamp(2.2rem,5vw,3.8rem)", lineHeight:1.1, marginBottom:"1.5rem"
            }}>
              Microsoft Fabric Consulting<br />
              <span style={{ color:TEAL, fontWeight:300 }}>
                Unified Analytics for the Microsoft Enterprise
              </span>
            </h1>

            <p className="hero-sub section-desc" style={{
              maxWidth:"680px", fontSize:"1.1rem", color:"var(--text-muted)", marginBottom:"3rem", lineHeight:1.82
            }}>
              Microsoft Fabric unifies data engineering, data science, real-time analytics, and Power BI reporting in a single governed environment on Azure. FI Digital deploys Fabric for Australian enterprises that run on Azure AD, Power BI, and Microsoft 365. One platform. One data lake. One governance model. Australian data residency on Azure Australia East.
            </p>

            <div className="hero-cta" style={{ display:"flex", flexWrap:"wrap", gap:"1rem" }}>
              <Link href="/book-discovery" style={{
                background:PRIMARY, color:"#fff", padding:"1rem 2rem",
                borderRadius:"8px", fontWeight:600, textDecoration:"none",
                display:"inline-flex", alignItems:"center", gap:"0.5rem"
              }}>
                Book a Fabric Assessment <ArrowRight size={18} />
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

        {/* ══ STAT STRIP ══════════════════════════════════════════════ */}
        <div style={{ background:"var(--bg-secondary)", borderTop:"1px solid var(--border)", borderBottom:"1px solid var(--border)", padding:"2.25rem 1.5rem" }}>
          <div className="container">
            <div style={{ display:"flex", flexWrap:"wrap", gap:"2rem", justifyContent:"center", textAlign:"center" }}>
              {[
                { stat:"6-in-1",        label:"Formerly separate Microsoft services unified in one platform" },
                { stat:"Azure AU East", label:"100% Australian data residency — every deployment" },
                { stat:"APRA + ASIC",   label:"Purview governance layer satisfying regulatory requirements" },
                { stat:"Early",         label:"FI Digital was an early Microsoft Fabric adopter in Australia" },
              ].map((s, i) => (
                <div key={i} className="reveal" style={{ flex:"1 1 200px" }}>
                  <div style={{ fontSize:"clamp(1.3rem,2.5vw,2rem)", fontWeight:900, color:PRIMARY, marginBottom:"0.3rem" }}>{s.stat}</div>
                  <div style={{ fontSize:"0.85rem", color:"var(--text-muted)", fontWeight:500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ SECTION 1: WHY FABRIC NOW ═══════════════════════════════ */}
        <section className="section" style={{ background:"var(--bg)" }}>
          <div className="container">
            <div className="reveal" style={{ textAlign:"center", marginBottom:"4rem" }}>
              <div className="section-label">Why Now?</div>
              <h2 className="section-title" style={{ maxWidth:"760px", margin:"0 auto 1.25rem" }}>
                Why Microsoft Fabric Now
              </h2>
              <p style={{ color:"var(--text-muted)", fontSize:"1rem", maxWidth:"680px", margin:"0 auto" }}>
                The most significant Microsoft data platform development since Power BI — and the natural evolution for enterprises already on Azure.
              </p>
            </div>

            <div className="why-grid reveal" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"3rem", alignItems:"center" }}>
              {/* Left: body text */}
              <div>
                <p style={{ fontSize:"1rem", color:"var(--text)", lineHeight:1.85, marginBottom:"1.25rem" }}>
                  Microsoft Fabric is the most significant development in the Microsoft data platform ecosystem since Power BI. Launched in 2023 and reaching general availability in late 2023, Fabric unifies six previously separate Microsoft data services — Data Factory, Synapse Analytics, Power BI, Data Activator, Azure Data Explorer, and the new Data Science experience — under a single platform with a shared compute layer, a single data lake (OneLake), and a unified governance model.
                </p>
                <p style={{ fontSize:"1rem", color:"var(--text-muted)", lineHeight:1.85, marginBottom:"1.25rem" }}>
                  For Australian enterprises that already run on Azure Active Directory, Power BI, and Microsoft 365, Fabric is the natural path to a modern data platform. It eliminates the integration overhead of running separate services. It is included in many enterprise Microsoft agreements, which can significantly reduce the total cost of a modern analytics platform.
                </p>
                <p style={{ fontSize:"1rem", color:"var(--text-muted)", lineHeight:1.85 }}>
                  FI Digital was an early Fabric adopter in the Australian market. We have been working with Fabric since its preview release and have production deployments across financial services and enterprise clients.
                </p>
              </div>

              {/* Right: OneLake hub diagram */}
              <div className="reveal" style={{ position:"relative" }}>
                <div style={{
                  background:"var(--card-bg)", borderRadius:"28px",
                  padding:"2.5rem", border:"1px solid var(--border)",
                  boxShadow:"0 8px 40px rgba(0,120,212,0.1)"
                }}>
                  {/* Label */}
                  <div style={{ textAlign:"center", marginBottom:"1.75rem" }}>
                    <div style={{ display:"inline-flex", alignItems:"center", gap:"0.6rem",
                      background:`${PRIMARY}0d`, border:`1px solid ${PRIMARY}20`,
                      padding:"0.35rem 1rem", borderRadius:"50px" }}>
                      <div style={{ position:"relative", width:"16px", height:"16px" }}>
                        <Image src="/images/Microsoft-Fabric.png" alt="Fabric" fill sizes="(max-width: 768px) 40vw, 200px" style={{ objectFit:"contain" }} />
                      </div>
                      <span style={{ fontSize:"0.72rem", fontWeight:800, color:PRIMARY, textTransform:"uppercase", letterSpacing:"0.1em" }}>
                        Microsoft Fabric — OneLake at Centre
                      </span>
                    </div>
                  </div>

                  {/* Hub diagram */}
                  <div style={{ position:"relative", width:"100%", paddingBottom:"85%", maxWidth:"360px", margin:"0 auto" }}>
                    {/* Centre OneLake */}
                    <div style={{
                      position:"absolute", top:"50%", left:"50%",
                      transform:"translate(-50%,-50%)",
                      width:"90px", height:"90px",
                      background:`linear-gradient(135deg, ${PRIMARY} 0%, ${TEAL} 100%)`,
                      borderRadius:"50%", display:"flex", flexDirection:"column",
                      alignItems:"center", justifyContent:"center",
                      boxShadow:`0 0 0 8px ${PRIMARY}18, 0 0 0 16px ${PRIMARY}0a`,
                      zIndex:2
                    }}>
                      <Database size={22} color="#fff" />
                      <span style={{ fontSize:"0.6rem", fontWeight:800, color:"#fff", marginTop:"3px" }}>OneLake</span>
                    </div>

                    {/* Connector lines + workload nodes */}
                    {WORKLOADS.map((w, i) => {
                      const rad = (w.angle * Math.PI) / 180;
                      const cx = 50 + 42 * Math.cos(rad);
                      const cy = 50 + 42 * Math.sin(rad);
                      return (
                        <div key={i}>
                          {/* SVG line — absolute over the container */}
                          <svg style={{ position:"absolute", top:0, left:0, width:"100%", height:"100%",
                            pointerEvents:"none" }} viewBox="0 0 100 100" preserveAspectRatio="none">
                            <line x1="50" y1="50" x2={cx} y2={cy}
                              stroke={w.color} strokeWidth="0.6" strokeOpacity="0.35"
                              strokeDasharray="2 1.5" />
                          </svg>
                          {/* Node */}
                          <div className="workload-node" style={{
                            position:"absolute",
                            top:`${cy}%`, left:`${cx}%`,
                            transform:"translate(-50%,-50%)",
                            display:"flex", flexDirection:"column", alignItems:"center",
                            gap:"4px", zIndex:2
                          }}>
                            <div style={{
                              width:"46px", height:"46px", borderRadius:"14px",
                              background:`${w.color}14`, border:`1.5px solid ${w.color}40`,
                              display:"flex", alignItems:"center", justifyContent:"center",
                              boxShadow:`0 2px 12px ${w.color}22`
                            }}>
                              <w.icon size={18} color={w.color} />
                            </div>
                            <span style={{
                              fontSize:"0.58rem", fontWeight:700, color:"var(--text)",
                              textAlign:"center", lineHeight:1.2, maxWidth:"54px"
                            }}>{w.label}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Footer tag */}
                  <div style={{ marginTop:"1.5rem", textAlign:"center" }}>
                    <div style={{ display:"inline-flex", alignItems:"center", gap:"0.45rem",
                      padding:"0.35rem 0.85rem", background:`${TEAL}10`,
                      borderRadius:"8px", border:`1px solid ${TEAL}20` }}>
                      <div style={{ position:"relative", width:"14px", height:"14px", flexShrink:0 }}>
                        <Image src="/images/azure-nobg.png" alt="Azure" fill sizes="(max-width: 768px) 40vw, 200px" style={{ objectFit:"contain" }} />
                      </div>
                      <span style={{ fontSize:"0.72rem", fontWeight:700, color:TEAL }}>
                        Hosted on Azure Australia East · All data stays in Australia
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ SECTION 2: WHAT WE BUILD ════════════════════════════════ */}
        <section className="section" style={{ background:"var(--bg-secondary)" }}>
          <div className="container">
            <div className="reveal" style={{ textAlign:"center", marginBottom:"4rem" }}>
              <div className="section-label">Capabilities</div>
              <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"0.75rem", marginBottom:"0.75rem" }}>
                <div style={{ position:"relative", width:"30px", height:"30px" }}>
                  <Image src="/images/Microsoft-Fabric.png" alt="Microsoft Fabric" fill sizes="(max-width: 768px) 40vw, 200px" style={{ objectFit:"contain" }} />
                </div>
                <h2 className="section-title" style={{ margin:0 }}>
                  What We Build on Microsoft Fabric
                </h2>
              </div>
              <p style={{ color:"var(--text-muted)", fontSize:"0.97rem", maxWidth:"580px", margin:"0.75rem auto 0" }}>
                Five Fabric capabilities — from OneLake design through to real-time dashboards and AI integration.
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

        {/* ══ SECTION 3: IS FABRIC RIGHT FOR YOU? ════════════════════ */}
        <section className="section" style={{ background:"var(--bg)" }}>
          <div className="container">
            <div className="reveal" style={{ textAlign:"center", marginBottom:"4rem" }}>
              <div className="section-label">Fit Assessment</div>
              <h2 className="section-title" style={{ maxWidth:"760px", margin:"0 auto 1rem" }}>
                Is Fabric Right for Your Organisation?
              </h2>
              <p style={{ color:"var(--text-muted)", fontSize:"0.97rem", maxWidth:"620px", margin:"0 auto" }}>
                Microsoft Fabric is the strongest data platform choice for Microsoft-stack enterprises. We assess your environment during Discovery and recommend the platform that best fits your requirements.
              </p>
            </div>

            <div className="fit-grid reveal" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem" }}>
              {FIT.map((item, i) => (
                <div key={i} className="fit-row" style={{
                  display:"flex", alignItems:"center", gap:"1rem",
                  padding:"1.1rem 1.5rem", borderRadius:"14px",
                  background:"var(--card-bg)", border:`1px solid ${item.yes ? PRIMARY+"22" : "var(--border)"}`,
                }}>
                  <div style={{
                    width:"32px", height:"32px", borderRadius:"50%", flexShrink:0,
                    background: item.yes ? `${PRIMARY}12` : "rgba(239,68,68,0.08)",
                    display:"flex", alignItems:"center", justifyContent:"center"
                  }}>
                    {item.yes
                      ? <CheckCircle2 size={16} color={PRIMARY} />
                      : <span style={{ fontSize:"1rem", color:"#EF4444", fontWeight:900, lineHeight:1 }}>✕</span>
                    }
                  </div>
                  <span style={{ fontSize:"0.9rem", color:"var(--text)", fontWeight:item.yes ? 600 : 400, lineHeight:1.5 }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="reveal" style={{ marginTop:"2.5rem", padding:"1.75rem 2rem",
              background:`linear-gradient(135deg, ${PRIMARY}08 0%, ${TEAL}06 100%)`,
              border:`1px solid ${PRIMARY}18`, borderRadius:"18px",
              display:"flex", alignItems:"center", gap:"1.5rem", flexWrap:"wrap" }}>
              <div style={{ position:"relative", width:"40px", height:"40px", flexShrink:0 }}>
                <Image src="/images/Microsoft-Fabric.png" alt="Microsoft Fabric" fill sizes="(max-width: 768px) 40vw, 200px" style={{ objectFit:"contain" }} />
              </div>
              <div style={{ flex:1 }}>
                <div style={{ fontSize:"0.95rem", fontWeight:800, color:"var(--text)", marginBottom:"0.25rem" }}>
                  Not sure which platform is right?
                </div>
                <div style={{ fontSize:"0.88rem", color:"var(--text-muted)", lineHeight:1.7 }}>
                  We assess your environment during a Discovery session and recommend Fabric, Databricks, Snowflake, or a hybrid — based on your existing stack, team skills, and regulatory requirements. No vendor bias.
                </div>
              </div>
              <Link href="/book-discovery" style={{
                background:PRIMARY, color:"#fff", padding:"0.85rem 1.5rem",
                borderRadius:"8px", fontWeight:600, textDecoration:"none",
                display:"inline-flex", alignItems:"center", gap:"0.5rem", flexShrink:0
              }}>
                Book Discovery <ArrowRight size={16} />
              </Link>
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
          background:`linear-gradient(135deg, ${PRIMARY}0d 0%, ${TEAL}08 100%)`,
          borderTop:"1px solid var(--border)"
        }}>
          <div className="container" style={{ textAlign:"center" }}>
            <div className="reveal">
              <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"1rem", marginBottom:"1.5rem" }}>
                <div style={{ position:"relative", width:"44px", height:"44px" }}>
                  <Image src="/images/Microsoft-Fabric.png" alt="Fabric" fill sizes="(max-width: 768px) 40vw, 200px" style={{ objectFit:"contain" }} />
                </div>
                <h2 style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:800, margin:0 }}>
                  Ready to unify your Microsoft data platform?
                </h2>
              </div>
              <p style={{ fontSize:"1.05rem", color:"var(--text-muted)", maxWidth:"580px",
                margin:"0 auto 2.5rem", lineHeight:1.75 }}>
                Start with a Microsoft Fabric Assessment. We review your existing Azure environment, Power BI architecture, and data landscape — then design your Fabric deployment before a single line of pipeline code is written.
              </p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:"1rem", justifyContent:"center" }}>
                <Link href="/book-discovery" style={{
                  background:PRIMARY, color:"#fff", padding:"1rem 2.25rem",
                  borderRadius:"8px", fontWeight:600, textDecoration:"none",
                  display:"inline-flex", alignItems:"center", gap:"0.5rem"
                }}>
                  Book a Microsoft Fabric Assessment <ArrowRight size={18} />
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
