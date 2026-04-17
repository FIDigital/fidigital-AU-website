"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, ChevronRight, ChevronDown, Plus, Minus,
  Layers, Code2, Database, Globe, RefreshCw, Wrench,
  FileSearch, GitBranch, HardDrive, Puzzle, Shield, Zap,
  CheckCircle2, AlertTriangle, Clock, TrendingUp
} from "lucide-react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const PRIMARY   = "#0EA5E9"; // Sky/Cyan
const SECONDARY = "#F59E0B"; // Amber

/* ── MODERNISATION APPROACHES ─────────────────────────────────────── */
const APPROACHES = [
  {
    num: "01", icon: GitBranch, color: "#0EA5E9",
    title: "Strangler Fig — Incremental Replacement",
    risk: "Lowest risk",
    timeframe: "6–18 months",
    intro: "The safest modernisation approach. Build the modern replacement alongside the legacy system, migrating one feature at a time.",
    detail: "Traffic is routed progressively from old to new. No big bang. No blackout periods. The legacy system remains fully live until the last feature is migrated. Teams can validate each migrated component before proceeding. This approach is ideal for mission-critical systems where downtime is unacceptable and where the risk of a full rewrite is prohibitive.",
    bestFor: "Mission-critical systems · Cannot tolerate downtime · Large, complex legacy codebases",
  },
  {
    num: "02", icon: Globe, color: "#F59E0B",
    title: "Front-End Modernisation",
    risk: "Low risk",
    timeframe: "12–20 weeks",
    intro: "Your back-end logic is solid but the UI is holding you back. Build a modern React front-end connected to your existing back-end via an API layer.",
    detail: "We build a modern React front-end that communicates with your existing back-end via an API layer we create. Your users get a fast, modern, responsive experience across desktop and mobile. Your business logic stays exactly where it is — untouched. This is the fastest path to a visible, user-impacting modernisation.",
    bestFor: "Solid back-end logic · Poor user experience · Mobile responsiveness urgently needed",
  },
  {
    num: "03", icon: Puzzle, color: "#8B5CF6",
    title: "API Layer Creation",
    risk: "Low risk",
    timeframe: "8–14 weeks",
    intro: "Extract your application's data and logic behind a clean REST or GraphQL API — enabling modern front-ends, mobile apps, and integrations.",
    detail: "Without touching the underlying system, we build an API layer that exposes your application's capabilities to modern consumers — React front-ends, mobile apps, third-party integrations, and AI systems. This unlocks your legacy system from technical isolation and opens it to the modern software ecosystem around it.",
    bestFor: "Mobile app integration needed · Third-party API consumers · Front-end teams blocked",
  },
  {
    num: "04", icon: Database, color: "#059669",
    title: "Database Migration",
    risk: "Medium risk (fully managed)",
    timeframe: "8–16 weeks",
    intro: "Migrate from on-premise SQL Server, Oracle, or MySQL to cloud-native PostgreSQL, Aurora, or Snowflake — with zero data loss.",
    detail: "Data migration is executed with zero data loss, validated at every stage, and performed with minimal downtime using blue-green deployment patterns. We run the migration in a staging environment first, validate with automated checks, run production in a maintenance window, validate again, then decommission the legacy source. Downtime is typically under one hour.",
    bestFor: "On-premise SQL Server / Oracle / MySQL · Cloud migration · Cost reduction",
  },
  {
    num: "05", icon: RefreshCw, color: "#E11D48",
    title: "Full Modernisation — Bounded Rewrite",
    risk: "Highest complexity, lowest ambiguity",
    timeframe: "12–24 weeks",
    intro: "When the legacy system is beyond incremental improvement. A full rewrite approached as a bounded project: fully specified, fixed price, fixed timeline.",
    detail: "Appropriate when there is no source code access, irreparably corrupted data models, entirely unsupportable frameworks, or a security posture that cannot be remediated. We begin with a full audit and business logic documentation phase to capture everything before a single line is written. The rewrite is scoped, priced, and timed before commitment.",
    bestFor: "No source code access · PHP 4, Classic ASP, VB.NET · Security cannot be remediated",
  },
];

/* ── AUDIT CHECKLIST ──────────────────────────────────────────────── */
const AUDIT_ITEMS = [
  { icon: Code2,       color: "#0EA5E9", title: "Codebase Analysis",          desc: "Size, complexity, test coverage, dependency mapping, framework versions, and security vulnerability scan." },
  { icon: FileSearch,  color: "#F59E0B", title: "Business Logic Documentation", desc: "Capturing undocumented workflows and validation rules that live only in people's heads — before anyone leaves." },
  { icon: Database,    color: "#8B5CF6", title: "Data Model Audit",           desc: "Schema analysis, data quality assessment, and identification of data that can be cleaned during migration." },
  { icon: Puzzle,      color: "#059669", title: "Integration Inventory",      desc: "Every external system the application connects to — APIs, file shares, scheduled jobs, and database links." },
  { icon: Zap,         color: "#E11D48", title: "Performance Baseline",       desc: "Current response times, concurrency limits, database query performance, and known failure modes under load." },
  { icon: Shield,      color: "#0891B2", title: "Security Audit",             desc: "Authentication, authorisation, session management, input validation, known CVEs, and data exposure risks." },
];

/* ── DILEMMA PATHS ────────────────────────────────────────────────── */
const PATHS = [
  {
    label: "Path 1 — Full Replacement",
    risk: "Highest risk",
    icon: AlertTriangle,
    color: "#EF4444",
    desc: "Big-bang rewrite that takes two years, costs three times the estimate, and still does not do everything the original did.",
    verdict: "Avoid",
  },
  {
    label: "Path 2 — Do Nothing",
    risk: "Growing risk",
    icon: Clock,
    color: "#F97316",
    desc: "Recruiting developers for dying frameworks. Maintenance costs that grow each year. Competitors building features your system cannot support.",
    verdict: "Unsustainable",
  },
  {
    label: "Path 3 — FI Digital Approach",
    risk: "Controlled",
    icon: TrendingUp,
    color: PRIMARY,
    desc: "Structured, phased modernisation that preserves what works, replaces what does not, and keeps your business running throughout.",
    verdict: "Recommended",
  },
];

/* ── FAQ ──────────────────────────────────────────────────────────── */
const FAQS = [
  { q: "How do I know if my legacy application needs modernisation?",      a: "Common indicators: developers spend more time fixing bugs than building features; recruiting is getting harder; the application cannot integrate with modern systems without complex workarounds; mobile users have a degraded experience; the UI was last updated more than five years ago; compliance requirements cannot be met by the current platform." },
  { q: "Is it better to modernise or replace completely?",                 a: "It depends on the application's condition. We audit first, then recommend. Partial modernisation is appropriate for most applications. Full rewrites are appropriate when there is no source code access, irreparably corrupt data models, or entirely unsupportable frameworks. We have done both — and we will tell you honestly which is right." },
  { q: "How long does modernisation take?",                                a: "Front-end modernisation of a moderately complex application takes 12 to 20 weeks. Full strangler-fig modernisation of an enterprise application may run 6 to 18 months, with independent phases and budgets so you maintain control and can pause or redirect at each phase boundary." },
  { q: "Will the business be disrupted during modernisation?",             a: "Disruption is minimal with our incremental approach. The legacy system remains live throughout. Users are migrated progressively — often without knowing a change has occurred. Downtime for the final cutover is typically under one hour in a planned maintenance window." },
  { q: "What happens to our data during migration?",                       a: "Data migration is executed with zero data loss. We run in a staging environment first, validate with automated checks, run the production migration in a maintenance window, validate again before decommissioning the legacy source. We have never lost a row of production data in a migration." },
];

/* ═══════════════════════════════════════════════════════════════════ */
export default function ProductModClient() {
  const containerRef  = useRef(null);
  const [openApp, setOpenApp]     = useState(null);
  const [openFaq, setOpenFaq]     = useState(null);

  useGSAP(() => {
    gsap.from(".hero-badge", { y: -14, autoAlpha: 0, duration: 0.4, ease: "power2.out" });
    gsap.from(".hero-h1",   { y: 32,  autoAlpha: 0, duration: 0.6, delay: 0.1,  ease: "power3.out" });
    gsap.from(".hero-sub",  { y: 20,  autoAlpha: 0, duration: 0.5, delay: 0.22, ease: "power2.out" });
    gsap.from(".hero-cta",  { y: 18,  autoAlpha: 0, duration: 0.45,delay: 0.34, ease: "power2.out" });

    gsap.utils.toArray(".reveal").forEach(el => {
      gsap.fromTo(el,
        { y: 28, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.6, ease: "power2.out",
          clearProps: "transform,opacity,visibility",
          scrollTrigger: { trigger: el, start: "top 87%", once: true } }
      );
    });

    gsap.fromTo(".audit-card",
      { y: 22, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.4, stagger: 0.09, ease: "power2.out",
        scrollTrigger: { trigger: ".audit-grid", start: "top 85%", once: true } }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(-6px)} to{opacity:1;transform:translateY(0)} }
        .expand-body { animation: fadeUp 0.25s ease; }
        .app-item    { transition: background 0.2s ease; }
        .app-item:hover { background: var(--bg-secondary) !important; }
        .audit-card  { transition: transform 0.2s ease; }
        .audit-card:hover { transform: translateY(-4px); }
        .path-card   { transition: transform 0.18s ease, box-shadow 0.18s ease; }
        .path-card:hover { transform: translateY(-3px); }
        @media (max-width: 900px) {
          .paths-row   { flex-direction: column !important; }
          .audit-grid  { grid-template-columns: 1fr 1fr !important; }
          .dil-layout  { flex-direction: column !important; }
        }
        @media (max-width: 560px) {
          .audit-grid  { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <main style={{ paddingTop: "var(--header-h)", overflow: "hidden" }}>

        {/* ══ HERO ══════════════════════════════════════════════════════ */}
        <section style={{
          position: "relative", minHeight: "82vh", display: "flex", alignItems: "center",
          padding: "0 1.5rem 60px", background: "var(--bg)", overflow: "hidden",
        }}>
          <div style={{ position:"absolute", top:"15%", right:"3%", width:"640px", height:"640px",
            background:`radial-gradient(circle, ${PRIMARY}12 0%, transparent 70%)`,
            pointerEvents:"none", zIndex:0 }} />
          <div style={{ position:"absolute", bottom:"10%", left:"8%", width:"420px", height:"420px",
            background:`radial-gradient(circle, ${SECONDARY}0d 0%, transparent 70%)`,
            pointerEvents:"none", zIndex:0 }} />

          <div style={{ position:"absolute", top:0, right:0, width:"52%", height:"100%", zIndex:0, opacity:0.35, pointerEvents:"none" }}>
            <Image src="/images/product-modernisation-hero.png" alt="Legacy Application Modernisation" fill
              style={{ objectFit:"cover",
                maskImage:"radial-gradient(ellipse at right, black, transparent 72%)",
                WebkitMaskImage:"radial-gradient(ellipse at right, black, transparent 72%)" }} />
          </div>

          <div className="container" style={{ position:"relative", zIndex:1 }}>
            <div className="hero-badge" style={{
              display:"inline-flex", alignItems:"center", gap:"0.75rem",
              background:"rgba(14,165,233,0.1)", border:"1px solid rgba(14,165,233,0.25)",
              padding:"0.6rem 1.25rem", borderRadius:"50px", marginBottom:"2rem"
            }}>
              <RefreshCw size={16} color={PRIMARY} />
              <span style={{ color:PRIMARY, fontWeight:700, fontSize:"0.88rem" }}>
                No Rip-and-Replace · Phased · PHP4 · Classic ASP · VB.NET · Legacy Java
              </span>
            </div>

            <h1 className="hero-h1 section-title" style={{
              maxWidth:"900px", fontSize:"clamp(2.2rem,5vw,3.8rem)", lineHeight:1.1, marginBottom:"1.5rem"
            }}>
              Product Modernisation<br />
              <span style={{ color:"var(--primary)", fontWeight:300 }}>
                Modernise What You Have Without Losing What Works
              </span>
            </h1>

            <p className="hero-sub section-desc" style={{
              maxWidth:"700px", fontSize:"1.1rem", color:"var(--text-muted)", marginBottom:"3rem", lineHeight:1.82
            }}>
              Your legacy application still works — but it is expensive to maintain, difficult to recruit for, and impossible to extend. FI Digital modernises legacy systems with modern architecture, without losing the business logic your team depends on. No rip-and-replace. No big-bang rewrites. Structured, phased modernisation that keeps your business running throughout.
            </p>

            <div className="hero-cta" style={{ display:"flex", flexWrap:"wrap", gap:"1rem" }}>
              <Link href="/book-discovery" style={{
                background:PRIMARY, color:"#fff", padding:"1rem 2rem",
                borderRadius:"8px", fontWeight:600, textDecoration:"none",
                display:"inline-flex", alignItems:"center", gap:"0.5rem"
              }}>
                Book a Legacy System Audit <ArrowRight size={18} />
              </Link>
              <Link href="/case-studies#product-modernisation" style={{
                background:"transparent", color:"var(--text)", padding:"1rem 2rem",
                borderRadius:"8px", fontWeight:600, textDecoration:"none",
                display:"inline-flex", alignItems:"center", gap:"0.5rem",
                border:"1px solid var(--border)"
              }}>
                View Modernisation Case Studies <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* ══ STAT STRIP ════════════════════════════════════════════════ */}
        <div style={{ background:"var(--bg-secondary)", borderTop:"1px solid var(--border)", borderBottom:"1px solid var(--border)", padding:"2.25rem 1.5rem" }}>
          <div className="container">
            <div style={{ display:"flex", flexWrap:"wrap", gap:"2rem", justifyContent:"center", textAlign:"center" }}>
              {[
                { stat:"5",        label:"Modernisation approaches — right one chosen per project" },
                { stat:"< 1 hr",   label:"Typical production cutover downtime" },
                { stat:"Zero",     label:"Data rows lost across all migrations" },
                { stat:"200+",     label:"Engineers across Australia & India" },
              ].map((s,i) => (
                <div key={i} className="reveal" style={{ flex:"1 1 180px" }}>
                  <div style={{ fontSize:"clamp(1.5rem,3vw,2.4rem)", fontWeight:900, color:PRIMARY, marginBottom:"0.3rem" }}>{s.stat}</div>
                  <div style={{ fontSize:"0.85rem", color:"var(--text-muted)", fontWeight:500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ SECTION 1: THE MODERNISATION DILEMMA — 3-path comparison ═ */}
        <section className="section" style={{ background:"var(--bg)" }}>
          <div className="container">
            <div className="reveal" style={{ textAlign:"center", marginBottom:"4rem" }}>
              <div className="section-label">The Problem</div>
              <h2 className="section-title" style={{ maxWidth:"760px", margin:"0 auto 1.25rem auto" }}>
                The Modernisation Dilemma
              </h2>
              <p style={{ color:"var(--text-muted)", fontSize:"1rem", maxWidth:"640px", margin:"0 auto" }}>
                Every organisation with a legacy application faces three paths. Two of them are traps.
              </p>
            </div>

            <div className="paths-row reveal" style={{ display:"flex", gap:"1.5rem", alignItems:"stretch" }}>
              {PATHS.map((path, i) => (
                <div key={i} className="path-card" style={{
                  flex:"1 1 0", background:"var(--card-bg)", borderRadius:"22px",
                  padding:"2.25rem 2rem 2.5rem",
                  boxShadow: i===2 ? `0 8px 36px ${PRIMARY}20` : "0 2px 14px rgba(0,0,0,0.05)",
                  display:"flex", flexDirection:"column", gap:"1rem",
                  outline: i===2 ? `2px solid ${PRIMARY}40` : "none",
                }}>
                  <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                    <div style={{ width:"48px", height:"48px", borderRadius:"13px",
                      background:`${path.color}12`,
                      display:"flex", alignItems:"center", justifyContent:"center" }}>
                      <path.icon size={22} color={path.color} />
                    </div>
                    <span style={{
                      fontSize:"0.7rem", fontWeight:800, padding:"0.28rem 0.75rem",
                      borderRadius:"50px", background:`${path.color}12`, color:path.color
                    }}>{path.verdict}</span>
                  </div>
                  <div>
                    <div style={{ fontSize:"0.65rem", fontWeight:800, color:path.color,
                      textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:"0.4rem" }}>{path.risk}</div>
                    <h3 style={{ fontSize:"1.05rem", fontWeight:800, color:"var(--text)", margin:0 }}>{path.label}</h3>
                  </div>
                  <p style={{ fontSize:"0.9rem", color:"var(--text-muted)", lineHeight:1.75, margin:0 }}>{path.desc}</p>
                  {i===2 && (
                    <div style={{ fontSize:"0.78rem", fontWeight:700, color:PRIMARY,
                      display:"flex", alignItems:"center", gap:"0.45rem", marginTop:"auto" }}>
                      <CheckCircle2 size={14} color={PRIMARY} />
                      FI Digital's approach — business stays running throughout
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* ── TECHNOLOGIES: Two-zone visual transformation ── */}
            <div className="reveal" style={{ marginTop:"3.5rem" }}>
              <div style={{ textAlign:"center", fontSize:"0.72rem", fontWeight:800,
                color:"var(--text-muted)", textTransform:"uppercase",
                letterSpacing:"0.1em", marginBottom:"2rem" }}>
                Technologies we have modernised
              </div>

              <div style={{
                display:"grid", gridTemplateColumns:"1fr auto 1fr",
                gap:"1.5rem", alignItems:"center",
                background:"var(--card-bg)", borderRadius:"24px",
                padding:"2.5rem 2rem", boxShadow:"0 4px 32px rgba(0,0,0,0.08)"
              }}>

                {/* ── LEFT: Legacy zone ── */}
                <div>
                  <div style={{ fontSize:"0.62rem", fontWeight:800, color:"#94A3B8",
                    textTransform:"uppercase", letterSpacing:"0.12em",
                    marginBottom:"1.25rem", display:"flex", alignItems:"center", gap:"0.5rem" }}>
                    <div style={{ width:"8px", height:"8px", borderRadius:"50%", background:"#94A3B8" }} />
                    Legacy (From)
                  </div>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:"0.75rem" }}>
                    {[
                      { label:"PHP 4/5",       logo:"/images/php-nobg.png" },
                      { label:"Classic ASP",   logo:"/images/classicAsp.png" },
                      { label:"VB.NET",        logo:"/images/dotnet-nobg.png" },
                      { label:"Legacy Java",   logo:"/images/java.png" },
                      { label:"Oracle Forms",  logo:"/images/oracle-nobg.png" },
                      { label:"ColdFusion",    logo:"/images/coldFusion.png" },
                    ].map((tech, i) => (
                      <div key={i} style={{
                        display:"flex", alignItems:"center", gap:"0.55rem",
                        background:"rgba(148,163,184,0.08)",
                        border:"1px solid rgba(148,163,184,0.15)",
                        borderRadius:"10px", padding:"0.5rem 0.9rem",
                        filter:"grayscale(30%)"
                      }}>
                        <div style={{ position:"relative", width:"22px", height:"22px", flexShrink:0, opacity:0.75 }}>
                          <Image src={tech.logo} alt={tech.label} fill style={{ objectFit:"contain" }} />
                        </div>
                        <span style={{ fontSize:"0.8rem", fontWeight:700, color:"#94A3B8", whiteSpace:"nowrap" }}>{tech.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── CENTRE: Arrow ── */}
                <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"0.5rem", padding:"0 0.5rem" }}>
                  <div style={{
                    width:"60px", height:"60px", borderRadius:"50%",
                    background:`linear-gradient(135deg, ${PRIMARY}, #6366F1)`,
                    display:"flex", alignItems:"center", justifyContent:"center",
                    boxShadow:`0 8px 28px ${PRIMARY}40`,
                    flexShrink:0
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span style={{ fontSize:"0.6rem", fontWeight:800, color:PRIMARY,
                    textTransform:"uppercase", letterSpacing:"0.1em", whiteSpace:"nowrap" }}>No Rip &amp; Replace</span>
                </div>

                {/* ── RIGHT: Modern zone ── */}
                <div>
                  <div style={{ fontSize:"0.62rem", fontWeight:800, color:PRIMARY,
                    textTransform:"uppercase", letterSpacing:"0.12em",
                    marginBottom:"1.25rem", display:"flex", alignItems:"center", gap:"0.5rem" }}>
                    <div style={{ width:"8px", height:"8px", borderRadius:"50%", background:PRIMARY }} />
                    Modern (To)
                  </div>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:"0.75rem" }}>
                    {[
                      { label:"React",      logo:"/images/react-nobg.png" },
                      { label:"Next.js",    logo:"/images/nextjs-nobg.png" },
                      { label:"Python",     logo:"/images/python-nobg.png" },
                      { label:"FastAPI",    logo:"/images/fastapi-nobg.png" },
                      { label:"PostgreSQL", logo:"/images/postgresql.png" },
                      { label:"AWS Sydney", logo:"/images/aws-nobg.png" },
                      { label:"Azure AU",   logo:"/images/azure-nobg.png" },
                      { label:"Node.js",    logo:"/images/nodejs-nobg.png" },
                    ].map((tech, i) => (
                      <div key={i} style={{
                        display:"flex", alignItems:"center", gap:"0.55rem",
                        background:`${PRIMARY}0d`,
                        border:`1px solid ${PRIMARY}20`,
                        borderRadius:"10px", padding:"0.5rem 0.9rem"
                      }}>
                        <div style={{ position:"relative", width:"22px", height:"22px", flexShrink:0 }}>
                          <Image src={tech.logo} alt={tech.label} fill style={{ objectFit:"contain" }} />
                        </div>
                        <span style={{ fontSize:"0.8rem", fontWeight:700, color:PRIMARY, whiteSpace:"nowrap" }}>{tech.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ══ SECTION 2: MODERNISATION APPROACHES — numbered expandable = */}
        <section className="section" style={{ background:"var(--bg-secondary)" }}>
          <div className="container">
            <div className="reveal" style={{ textAlign:"center", marginBottom:"4rem" }}>
              <div className="section-label">Approaches</div>
              <h2 className="section-title" style={{ maxWidth:"760px", margin:"0 auto 1rem auto" }}>
                Our Modernisation Approaches
              </h2>
              <p style={{ color:"var(--text-muted)", fontSize:"0.97rem", maxWidth:"560px", margin:"0 auto" }}>
                Five distinct approaches — one chosen based on your system's condition, risk profile, and business requirements.
              </p>
            </div>

            <div style={{ display:"flex", flexDirection:"column" }}>
              {APPROACHES.map((app, i) => (
                <div key={i} className="app-item reveal" style={{
                  background: openApp===i ? "var(--card-bg)" : "transparent",
                  borderRadius:"18px",
                  borderBottom: i < APPROACHES.length-1 ? "1px solid var(--border)" : "none",
                  overflow:"hidden",
                  boxShadow: openApp===i ? "0 4px 28px rgba(0,0,0,0.07)" : "none",
                  marginBottom: openApp===i ? "0.75rem" : 0,
                  transition:"all 0.25s ease"
                }}>
                  <button onClick={() => setOpenApp(openApp===i ? null : i)}
                    style={{ width:"100%", display:"flex", alignItems:"center",
                      padding:"2rem 1.75rem", background:"none", border:"none",
                      cursor:"pointer", textAlign:"left", gap:"1.5rem" }}>
                    <span style={{
                      fontSize:"clamp(1.8rem,3.5vw,2.8rem)", fontWeight:900, color:app.color,
                      opacity: openApp===i ? 1 : 0.22, lineHeight:1,
                      minWidth:"3rem", transition:"opacity 0.25s ease"
                    }}>{app.num}</span>

                    <div style={{ flex:1, display:"flex", alignItems:"center", gap:"1rem" }}>
                      <div style={{ width:"46px", height:"46px", borderRadius:"13px",
                        background:`${app.color}${openApp===i ? "18" : "0d"}`,
                        display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
                        transition:"background 0.25s ease" }}>
                        <app.icon size={20} color={app.color} />
                      </div>
                      <div style={{ flex:1, minWidth:0 }}>
                        <div style={{ fontSize:"1.1rem", fontWeight:800, color:"var(--text)" }}>{app.title}</div>
                        {openApp !== i && (
                          <div style={{ fontSize:"0.85rem", color:"var(--text-muted)", marginTop:"0.2rem" }}>{app.intro}</div>
                        )}
                      </div>
                    </div>

                    {/* Risk + timeframe badges */}
                    <div style={{ display:"flex", flexDirection:"column", gap:"0.3rem", alignItems:"flex-end", flexShrink:0 }}>
                      <span style={{ fontSize:"0.68rem", fontWeight:700, color:app.color,
                        background:`${app.color}0d`, padding:"0.2rem 0.6rem", borderRadius:"50px", whiteSpace:"nowrap" }}>{app.risk}</span>
                      <span style={{ fontSize:"0.7rem", color:"var(--text-muted)", fontWeight:500, whiteSpace:"nowrap" }}>{app.timeframe}</span>
                    </div>

                    <ChevronDown size={20} color="var(--text-muted)"
                      style={{ flexShrink:0, transform:openApp===i?"rotate(180deg)":"rotate(0)", transition:"0.3s" }} />
                  </button>

                  {openApp===i && (
                    <div className="expand-body" style={{ padding:"0 1.75rem 2rem 2rem" }}>
                      <div style={{ display:"grid", gridTemplateColumns:"1fr auto", gap:"2.5rem", alignItems:"start" }}>
                        <div>
                          <p style={{ fontSize:"0.97rem", color:"var(--text)", lineHeight:1.85, marginBottom:"1.25rem" }}>{app.detail}</p>
                          <div style={{ display:"flex", alignItems:"flex-start", gap:"0.6rem" }}>
                            <CheckCircle2 size={15} color={app.color} style={{ marginTop:"2px", flexShrink:0 }} />
                            <span style={{ fontSize:"0.85rem", color:"var(--text-muted)", fontWeight:600 }}>
                              Best for: {app.bestFor}
                            </span>
                          </div>
                        </div>
                        <div style={{ textAlign:"center", padding:"1.5rem 1.25rem",
                          background:`${app.color}08`, borderRadius:"16px", minWidth:"130px" }}>
                          <div style={{ fontSize:"0.6rem", fontWeight:800, color:app.color,
                            textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:"0.5rem" }}>Timeline</div>
                          <div style={{ fontSize:"1.25rem", fontWeight:900, color:app.color, lineHeight:1.3 }}>{app.timeframe}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SECTION 3: AUDIT — 6-item grid ═══════════════════════════ */}
        <section className="section" style={{ background:"var(--bg)" }}>
          <div className="container">
            <div className="reveal" style={{ display:"flex", flexWrap:"wrap", gap:"5rem", alignItems:"flex-start" }}>

              {/* Left — intro */}
              <div style={{ flex:"0 0 340px" }}>
                <div className="section-label">Before We Build</div>
                <h2 className="section-title" style={{ marginBottom:"1.25rem" }}>
                  How We Audit Before We Modernise
                </h2>
                <p style={{ fontSize:"0.97rem", color:"var(--text-muted)", lineHeight:1.8, marginBottom:"1.75rem" }}>
                  We do not begin modernisation without understanding what we are modernising. Our audit covers six dimensions and produces a Modernisation Architecture Document.
                </p>
                <div style={{
                  background:`${PRIMARY}0a`, borderRadius:"16px", padding:"1.5rem",
                  boxShadow:`0 2px 12px ${PRIMARY}10`
                }}>
                  <div style={{ fontSize:"0.65rem", fontWeight:800, color:PRIMARY,
                    textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:"0.5rem" }}>Deliverable</div>
                  <div style={{ fontSize:"1rem", fontWeight:800, color:"var(--text)", lineHeight:1.4 }}>
                    Modernisation Architecture Document
                  </div>
                  <p style={{ fontSize:"0.85rem", color:"var(--text-muted)", lineHeight:1.65, marginTop:"0.5rem", marginBottom:0 }}>
                    Recommended approach, phasing plan, risk profile, and investment estimate — before you commit to anything.
                  </p>
                </div>
              </div>

              {/* Right — 6-card audit grid */}
              <div style={{ flex:"1 1 420px" }}>
                <div className="audit-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem" }}>
                  {AUDIT_ITEMS.map((item, i) => (
                    <div key={i} className="audit-card" style={{
                      background:"var(--card-bg)", borderRadius:"16px",
                      padding:"1.5rem", boxShadow:"0 2px 12px rgba(0,0,0,0.05)",
                      display:"flex", flexDirection:"column", gap:"0.75rem"
                    }}>
                      <div style={{ width:"42px", height:"42px", borderRadius:"11px",
                        background:`${item.color}12`,
                        display:"flex", alignItems:"center", justifyContent:"center" }}>
                        <item.icon size={18} color={item.color} />
                      </div>
                      <div style={{ fontSize:"0.9rem", fontWeight:800, color:"var(--text)" }}>{item.title}</div>
                      <p style={{ fontSize:"0.82rem", color:"var(--text-muted)", lineHeight:1.7, margin:0 }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
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

        {/* ══ CTA ══════════════════════════════════════════════════════ */}
        <section className="section" style={{
          background:`linear-gradient(135deg, ${PRIMARY}0d 0%, ${SECONDARY}09 100%)`,
          borderTop:"1px solid var(--border)"
        }}>
          <div className="container" style={{ textAlign:"center" }}>
            <div className="reveal">
              <h2 style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:800, marginBottom:"1.25rem" }}>
                Ready to modernise your legacy system?
              </h2>
              <p style={{ fontSize:"1.05rem", color:"var(--text-muted)", maxWidth:"560px",
                margin:"0 auto 2.5rem", lineHeight:1.75 }}>
                Start with a Legacy System Audit. We assess your codebase, document your business logic, and recommend the right modernisation approach — before you commit to any investment.
              </p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:"1rem", justifyContent:"center" }}>
                <Link href="/book-discovery" style={{
                  background:PRIMARY, color:"#fff", padding:"1rem 2.25rem",
                  borderRadius:"8px", fontWeight:600, textDecoration:"none",
                  display:"inline-flex", alignItems:"center", gap:"0.5rem"
                }}>
                  Book a Legacy System Audit <ArrowRight size={18} />
                </Link>
                <Link href="/case-studies#product-modernisation" style={{
                  background:"transparent", color:"var(--text)", padding:"1rem 2.25rem",
                  borderRadius:"8px", fontWeight:600, textDecoration:"none",
                  display:"inline-flex", alignItems:"center", gap:"0.5rem",
                  border:"1px solid var(--border)"
                }}>
                  View Modernisation Case Studies <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
