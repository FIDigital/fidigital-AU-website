"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, ChevronRight, ChevronDown, Plus, Minus,
  Users, Settings, Cloud, BarChart2, CheckCircle2,
  Code2, Shield, Lock, Layers, Monitor, Zap
} from "lucide-react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const PRIMARY   = "#2563EB";
const SECONDARY = "#7C3AED";

/* ── WHAT WE BUILD data ───────────────────────────────────────────── */
const BUILDS = [
  {
    icon: Users,   num:"01", color:"#2563EB",
    title:"Customer & Client Portals",
    intro:"A secure, branded web portal where your clients interact with your business — built around your workflows, not a vendor's template.",
    detail:"Document upload and management. Real-time status tracking. Self-service account management. Messaging and support integration. We have built adviser portals for wealth management firms, client portals for logistics companies, and supplier portals for manufacturing businesses. Every portal is built with your brand, your workflows, and your security requirements.",
    chips:["Role-based access","Document management","Real-time status","White-labelled"],
  },
  {
    icon: Settings, num:"02", color:"#7C3AED",
    title:"Internal Workflow Tools & Dashboards",
    intro:"Replace spreadsheet-driven processes, paper-based approvals, and disconnected email chains with structured, tracked, auditable digital workflows.",
    detail:"Job management systems. Approval workflows. Compliance checklists. Operations dashboards that pull data from multiple systems into a single view. We design these tools with your actual users — not hypothetical personas — to ensure day-one adoption and sustained engagement.",
    chips:["Audit logs","Multi-step approvals","Multi-system views","Custom reports"],
  },
  {
    icon: Cloud,   num:"03", color:"#0891B2",
    title:"SaaS & Multi-Tenant Platforms",
    intro:"If you are building a software product for customers to subscribe to, we engineer the foundation it runs on — from architecture to first paying customer.",
    detail:"Multi-tenant architecture with full tenant isolation. Subscription billing integration. Role-based access across organisations. Usage analytics and admin dashboards. We have taken SaaS products from concept to paying customers in 12 to 16 weeks.",
    chips:["Multi-tenancy","Billing integration","Usage analytics","Admin portal"],
  },
  {
    icon: BarChart2, num:"04", color:"#059669",
    title:"Data-Driven Reporting Applications",
    intro:"Web applications that turn raw operational data into structured, trusted reporting your finance and operations teams actually use.",
    detail:"Connected to your databases, your data warehouse on Databricks or Snowflake, or your operational APIs. Built with interactive filtering, drill-down capability, scheduled report delivery, and export functions. No more manual spreadsheet assembly.",
    chips:["Databricks","Snowflake","Interactive filters","Scheduled reports"],
  },
];

/* ── WHEN GENERIC STOPS — expandable pain points ─────────────────── */
const PAIN_POINTS = [
  {
    title:"Your processes are too specific",
    short:"Off-the-shelf SaaS tools are built for the median business. When your business logic is non-standard, you either bend your processes to fit the software — or you outgrow it entirely.",
    detail:"FI Digital builds production-grade web applications for Australian enterprises, government agencies, and mid-market businesses. Real React front-ends connected to Python and FastAPI backends, deployed on AWS or Azure with Australian data residency, role-based access controls, and audit logs.",
  },
  {
    title:"Compliance requirements rule out vendor tools",
    short:"When APRA CPG 234, ASD Essential Eight, or WCAG 2.1 AA compliance is non-negotiable, generic SaaS tools often cannot meet the requirement.",
    detail:"We have delivered applications for APRA-regulated financial services firms, healthcare providers subject to My Health Records Act requirements, and government agencies subject to ASD Essential Eight controls. Compliance is designed in — not bolted on.",
  },
  {
    title:"Your integration landscape is too complex",
    short:"You run 15 to 40 software applications. No SaaS tool integrates cleanly with all of them. The gap is filled by your people doing manual data transfers.",
    detail:"We have integrated custom web applications with Zoho CRM, Salesforce, SAP, Xero, MYOB, Databricks, Snowflake, SharePoint, custom REST APIs, and SQL databases. Integration complexity is scoped and costed precisely in Discovery — no surprises.",
  },
  {
    title:"You need to own the infrastructure and IP",
    short:"Vendor lock-in is a strategic risk. When your entire operation runs on a SaaS platform, the vendor controls your roadmap, your data access, and your pricing.",
    detail:"Every engagement FI Digital delivers includes 100% source code, IP, and documentation handover. You own your application. You can take it to any engineering team. There are no ongoing licence fees for the code we write.",
  },
];

/* ── TECH STACK ───────────────────────────────────────────────────── */
const STACK_ROWS = [
  {
    label:"Front-End", color:"#2563EB",
    items:[
      { name:"React",     logo:"/images/react-nobg.png" },
      { name:"Next.js",   logo:"/images/nextjs-nobg.png" },
      { name:"TypeScript",logo:"/images/typescript-nobg.png" },
    ],
  },
  {
    label:"Back-End", color:"#7C3AED",
    items:[
      { name:"Python",   logo:"/images/python-nobg.png" },
      { name:"FastAPI",  logo:"/images/fastapi-nobg.png" },
      { name:"Node.js",  logo:"/images/nodejs-nobg.png" },
    ],
  },
  {
    label:"Database / Analytics", color:"#0891B2",
    items:[
      { name:"PostgreSQL",  logo:"/images/postgresql.png" },
      { name:"MongoDB",     logo:"/images/mongodb.png" },
      { name:"Snowflake",   logo:"/images/snowflake-nobg.png" },
      { name:"Databricks",  logo:"/images/databricks-nobg.png" },
      { name:"Redis",       logo:"/images/redis.png" },
    ],
  },
  {
    label:"Infrastructure", color:"#059669",
    items:[
      { name:"AWS Sydney",  logo:"/images/aws-nobg.png" },
      { name:"Azure AU",    logo:"/images/azure-nobg.png" },
      { name:"Docker",      logo:"/images/docker.png" },
      { name:"Kubernetes",  logo:"/images/kubernetes.png" },
      { name:"Terraform",   logo:"/images/terraform.png" },
    ],
  },
];

/* ── ENGAGEMENT PHASES ────────────────────────────────────────────── */
const PHASES = [
  { num:"01", weeks:"Wks 1–2",  title:"Discovery",  color:"#2563EB",
    desc:"Stakeholder interviews, system audits, user journey mapping. Architecture, feature scope, and timeline approved before development begins." },
  { num:"02", weeks:"Wks 3–4",  title:"Design",     color:"#7C3AED",
    desc:"UX wireframes and UI designs produced in collaboration with your team. All outputs approved before a single line of code is written." },
  { num:"03", weeks:"Wks 5–12", title:"Build",      color:"#0891B2",
    desc:"Two-week sprints with fortnightly working demos. Automated tests run on every build. Real software — not slide decks." },
  { num:"04", weeks:"Wks 10–14",title:"QA",         color:"#059669",
    desc:"Functionality, cross-browser, performance, security penetration testing, and accessibility. Signed off before launch." },
  { num:"05", weeks:"Wks 13–16",title:"Launch",     color:"#F59E0B",
    desc:"Production deployment, monitoring, documentation, source code handover, and team training. You own everything." },
];

const FAQS = [
  { q:"How much does a custom web application cost in Australia?",        a:"Custom web applications typically range from $40,000 for a focused internal tool to $300,000 or more for enterprise-grade, multi-tenant platforms. The main cost drivers are complexity of business logic, number of integrations, user roles and permission structures, and compliance requirements. We provide a detailed estimate after the Discovery phase." },
  { q:"How long does it take to build a custom web application?",          a:"A typical web application takes 12 to 16 weeks from Discovery to launch. Simpler applications can ship in 6 to 8 weeks. Complex, multi-tenant SaaS platforms may take 20 to 24 weeks. We set the timeline during Discovery and commit to it." },
  { q:"What is the difference between a web application and a website?",   a:"A website presents information. A web application processes it. A web application has user authentication, role-based access, business logic, database interactions, real-time data, and integrations with other systems. Customer portals, SaaS platforms, internal tools, and dashboards are all web applications." },
  { q:"Do I own the source code?",                                         a:"Yes. 100% of the source code, intellectual property, and documentation is delivered to you at handover. There is no vendor lock-in and no ongoing licence fees for the code we write." },
  { q:"Can you integrate with our existing systems?",                      a:"Yes. We have integrated web applications with 40+ platforms including Zoho CRM, Salesforce, SAP, Xero, MYOB, Databricks, Snowflake, SharePoint, custom REST APIs, and SQL databases. Integration complexity is scoped during Discovery." },
  { q:"What if we need data or AI capabilities in the application?",       a:"This is where FI Digital's four-pillar model creates genuine value. Your web application can connect directly to a Databricks or Snowflake data layer for real-time analytics, include an embedded AI copilot powered by Claude or GPT-4o, and integrate with your Zoho CRM for operational data." },
  { q:"Can you build the web application to be accessible and compliant?", a:"Yes. We build to WCAG 2.1 AA accessibility standards as a baseline. We can accommodate additional compliance requirements including ASD Essential Eight, ISO 27001 alignment, APRA CPG 234 guidelines, and SOC 2 Type II readiness." },
];

/* ═══════════════════════════════════════════════════════════════════ */
export default function WebAppClient() {
  const containerRef = useRef(null);
  const [openBuild, setOpenBuild]   = useState(null);
  const [openPain, setOpenPain]     = useState(null);
  const [openFaq, setOpenFaq]       = useState(null);
  const [activePhase, setActivePhase] = useState(0);

  useGSAP(() => {
    gsap.from(".hero-badge", { y:-14, autoAlpha:0, duration:0.4, ease:"power2.out" });
    gsap.from(".hero-h1",   { y:32,  autoAlpha:0, duration:0.6, delay:0.12, ease:"power3.out" });
    gsap.from(".hero-sub",  { y:20,  autoAlpha:0, duration:0.5, delay:0.24, ease:"power2.out" });
    gsap.from(".hero-cta",  { y:18,  autoAlpha:0, duration:0.45, delay:0.36, ease:"power2.out" });

    gsap.utils.toArray(".reveal").forEach(el => {
      gsap.fromTo(el,
        { y:28, autoAlpha:0 },
        { y:0, autoAlpha:1, duration:0.6, ease:"power2.out",
          clearProps:"transform,opacity,visibility",
          scrollTrigger:{ trigger:el, start:"top 87%", once:true } }
      );
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(-6px)} to{opacity:1;transform:translateY(0)} }
        .expand-body { animation: fadeUp 0.25s ease; }
        .build-item  { transition: background 0.2s ease; }
        .build-item:hover { background: var(--bg-secondary) !important; }
        .pain-item   { transition: background 0.2s ease; }
        .pain-item:hover { background: var(--bg-secondary) !important; }
        .phase-btn   { transition: all 0.2s ease; }
        .phase-btn:hover { opacity:1 !important; }
        .stack-chip  { transition: transform 0.15s ease; }
        .stack-chip:hover { transform: translateY(-2px); }
        @media (max-width:860px) {
          .phase-strip { flex-wrap: wrap !important; }
          .phase-btn   { flex: 1 1 140px !important; }
          .trust-row   { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width:580px) {
          .trust-row { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <main style={{ paddingTop:"var(--header-h)", overflow:"hidden" }}>

        {/* ══ HERO ══════════════════════════════════════════════════════ */}
        <section style={{
          position:"relative", minHeight:"82vh", display:"flex", alignItems:"center",
          padding:"0 1.5rem 60px", background:"var(--bg)", overflow:"hidden",
        }}>
          {/* Gradient glow orbs */}
          <div style={{ position:"absolute", top:"15%", right:"3%", width:"620px", height:"620px",
            background:`radial-gradient(circle, ${PRIMARY}12 0%, transparent 70%)`,
            pointerEvents:"none", zIndex:0 }} />
          <div style={{ position:"absolute", bottom:"10%", left:"8%", width:"400px", height:"400px",
            background:`radial-gradient(circle, ${SECONDARY}0d 0%, transparent 70%)`,
            pointerEvents:"none", zIndex:0 }} />

          {/* Hero image — right side, background */}
          <div style={{ position:"absolute", top:0, right:0, width:"52%", height:"100%", zIndex:0, opacity:0.35, pointerEvents:"none" }}>
            <Image src="/images/web-hero.png" alt="Web Application Development" fill
              style={{ objectFit:"cover",
                maskImage:"radial-gradient(ellipse at right, black, transparent 72%)",
                WebkitMaskImage:"radial-gradient(ellipse at right, black, transparent 72%)" }} />
          </div>

          <div className="container" style={{ position:"relative", zIndex:1 }}>
            <div className="hero-badge" style={{
              display:"inline-flex", alignItems:"center", gap:"0.65rem",
              background:`rgba(37,99,235,0.1)`, border:`1px solid rgba(37,99,235,0.22)`,
              padding:"0.6rem 1.25rem", borderRadius:"50px", marginBottom:"2rem"
            }}>
              <Code2 size={16} color={PRIMARY} />
              <span style={{ color:PRIMARY, fontWeight:700, fontSize:"0.88rem" }}>
                React · Python · FastAPI · 200+ Engineers · AU Infrastructure
              </span>
            </div>

            <h1 className="hero-h1 section-title" style={{
              maxWidth:"900px", fontSize:"clamp(2.2rem,5vw,3.8rem)", lineHeight:1.1, marginBottom:"1.5rem"
            }}>
              Web Application Development<br />
              <span style={{ color:"var(--primary)", fontWeight:300 }}>
                Build Web Apps That Run Your Business
              </span>
            </h1>

            <p className="hero-sub section-desc" style={{
              maxWidth:"700px", fontSize:"1.1rem", color:"var(--text-muted)", marginBottom:"3rem", lineHeight:1.82
            }}>
              Customer portals. Internal workflow tools. SaaS dashboards. Multi-tenant platforms. Engineered with React, Python, and FastAPI for your specific business logic. Deployed on Australian infrastructure. <strong>You own the code.</strong> FI Digital — 200+ engineers, 10 years in production.
            </p>

            <div className="hero-cta" style={{ display:"flex", flexWrap:"wrap", gap:"1rem" }}>
              <Link href="/book-discovery" style={{
                background:PRIMARY, color:"#fff", padding:"1rem 2rem",
                borderRadius:"8px", fontWeight:600, textDecoration:"none",
                display:"inline-flex", alignItems:"center", gap:"0.5rem"
              }}>
                Book a Discovery Session <ArrowRight size={18} />
              </Link>
              <Link href="/case-studies#web-applications" style={{
                background:"transparent", color:"var(--text)", padding:"1rem 2rem",
                borderRadius:"8px", fontWeight:600, textDecoration:"none",
                display:"inline-flex", alignItems:"center", gap:"0.5rem",
                border:"1px solid var(--border)"
              }}>
                View Case Studies <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* ══ STAT STRIP ════════════════════════════════════════════════ */}
        <div style={{ background:"var(--bg-secondary)", borderTop:"1px solid var(--border)", borderBottom:"1px solid var(--border)", padding:"2.25rem 1.5rem" }}>
          <div className="container">
            <div style={{ display:"flex", flexWrap:"wrap", gap:"2rem", justifyContent:"center", textAlign:"center" }}>
              {[
                { stat:"12–16 wks", label:"Discovery to production" },
                { stat:"40+",       label:"Platform integrations" },
                { stat:"$40k+",     label:"Starting investment" },
                { stat:"100%",      label:"Code IP at handover" },
              ].map((s,i) => (
                <div key={i} className="reveal" style={{ flex:"1 1 160px" }}>
                  <div style={{ fontSize:"clamp(1.6rem,3vw,2.4rem)", fontWeight:900, color:PRIMARY, marginBottom:"0.3rem" }}>{s.stat}</div>
                  <div style={{ fontSize:"0.85rem", color:"var(--text-muted)", fontWeight:500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ SECTION 1: WHEN GENERIC STOPS — expandable pain points ═══ */}
        <section className="section" style={{ background:"var(--bg)" }}>
          <div className="container">
            <div style={{ display:"flex", flexWrap:"wrap", gap:"5rem", alignItems:"flex-start" }}>

              {/* Left sticky label */}
              <div className="reveal" style={{ flex:"0 0 340px" }}>
                <div className="section-label">The Problem</div>
                <h2 className="section-title" style={{ marginBottom:"1.25rem" }}>
                  When Generic Software Stops Working
                </h2>
                <p style={{ fontSize:"0.97rem", color:"var(--text-muted)", lineHeight:1.8 }}>
                  Off-the-shelf tools are built for the median business. Four reasons Australian enterprises choose custom web applications instead.
                </p>
              </div>

              {/* Right expandable list */}
              <div style={{ flex:"1 1 420px", display:"flex", flexDirection:"column", gap:"0.75rem" }}>
                {PAIN_POINTS.map((item, i) => (
                  <div key={i} className="pain-item reveal" style={{
                    background:"var(--card-bg)", borderRadius:"16px",
                    overflow:"hidden", boxShadow:"0 2px 12px rgba(0,0,0,0.05)"
                  }}>
                    <button onClick={() => setOpenPain(openPain===i ? null : i)}
                      style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between",
                        padding:"1.4rem 1.75rem", background:"none", border:"none",
                        cursor:"pointer", textAlign:"left", gap:"1rem" }}>
                      <div style={{ flex:1 }}>
                        <div style={{ fontSize:"1rem", fontWeight:700, color:"var(--text)", marginBottom:"0.35rem" }}>{item.title}</div>
                        {openPain !== i && (
                          <div style={{ fontSize:"0.86rem", color:"var(--text-muted)", lineHeight:1.6 }}>{item.short}</div>
                        )}
                      </div>
                      <div style={{
                        width:"30px", height:"30px", borderRadius:"50%",
                        background:openPain===i ? `${PRIMARY}15` : "var(--bg-secondary)",
                        display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0
                      }}>
                        {openPain===i
                          ? <Minus size={15} color={PRIMARY} />
                          : <Plus  size={15} color="var(--text-muted)" />
                        }
                      </div>
                    </button>
                    {openPain===i && (
                      <div className="expand-body" style={{ padding:"0 1.75rem 1.5rem", borderTop:"1px solid var(--border)" }}>
                        <p style={{ fontSize:"0.93rem", color:"var(--text-muted)", lineHeight:1.8, paddingTop:"1.1rem", margin:0 }}>{item.detail}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ SECTION 2: WHAT WE BUILD — numbered expandable list ══════ */}
        <section className="section" style={{ background:"var(--bg-secondary)" }}>
          <div className="container">
            <div className="reveal" style={{ textAlign:"center", marginBottom:"4rem" }}>
              <div className="section-label">Capabilities</div>
              <h2 className="section-title" style={{ maxWidth:"680px", margin:"0 auto" }}>
                What We Build
              </h2>
            </div>

            <div style={{ display:"flex", flexDirection:"column" }}>
              {BUILDS.map((b, i) => (
                <div key={i} className="build-item reveal" style={{
                  background: openBuild===i ? "var(--card-bg)" : "transparent",
                  borderRadius:"18px",
                  borderBottom: i < BUILDS.length-1 ? "1px solid var(--border)" : "none",
                  overflow:"hidden",
                  boxShadow: openBuild===i ? "0 4px 28px rgba(0,0,0,0.07)" : "none",
                  marginBottom: openBuild===i ? "0.75rem" : 0,
                  transition:"all 0.25s ease"
                }}>
                  <button onClick={() => setOpenBuild(openBuild===i ? null : i)}
                    style={{ width:"100%", display:"flex", alignItems:"center",
                      padding:"2rem 1.75rem", background:"none", border:"none",
                      cursor:"pointer", textAlign:"left", gap:"1.5rem" }}>

                    {/* Number */}
                    <span style={{
                      fontSize:"clamp(2rem,4vw,3rem)", fontWeight:900, color:b.color,
                      opacity: openBuild===i ? 1 : 0.25, lineHeight:1,
                      minWidth:"3rem", transition:"opacity 0.25s ease"
                    }}>{b.num}</span>

                    {/* Icon + title */}
                    <div style={{ flex:1, display:"flex", alignItems:"center", gap:"1rem" }}>
                      <div style={{ width:"46px", height:"46px", borderRadius:"13px",
                        background:`${b.color}${openBuild===i ? "18" : "0d"}`,
                        display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
                        transition:"background 0.25s ease" }}>
                        <b.icon size={20} color={b.color} />
                      </div>
                      <div>
                        <div style={{ fontSize:"1.15rem", fontWeight:800, color:"var(--text)" }}>{b.title}</div>
                        {openBuild !== i && (
                          <div style={{ fontSize:"0.85rem", color:"var(--text-muted)", marginTop:"0.2rem" }}>{b.intro}</div>
                        )}
                      </div>
                    </div>

                    <ChevronDown size={20} color="var(--text-muted)"
                      style={{ flexShrink:0, transform:openBuild===i?"rotate(180deg)":"rotate(0)", transition:"0.3s" }} />
                  </button>

                  {openBuild===i && (
                    <div className="expand-body" style={{ padding:"0 1.75rem 2rem 2rem" }}>
                      <div style={{ display:"grid", gridTemplateColumns:"1fr auto", gap:"3rem", alignItems:"start" }}>
                        <div>
                          <p style={{ fontSize:"0.97rem", color:"var(--text)", lineHeight:1.85, marginBottom:"1.5rem" }}>{b.detail}</p>
                          <div style={{ display:"flex", flexWrap:"wrap", gap:"0.45rem" }}>
                            {b.chips.map((chip,j) => (
                              <span key={j} style={{
                                padding:"0.3rem 0.85rem", background:`${b.color}12`,
                                borderRadius:"50px", fontSize:"0.8rem", fontWeight:700, color:b.color
                              }}>{chip}</span>
                            ))}
                          </div>
                        </div>
                        {/* Metric */}
                        <div style={{ textAlign:"center", padding:"1.5rem", background:`${b.color}08`, borderRadius:"16px", minWidth:"140px" }}>
                          <div style={{ fontSize:"0.6rem", fontWeight:800, color:b.color, textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:"0.5rem" }}>Delivery</div>
                          <div style={{ fontSize:"1.4rem", fontWeight:900, color:b.color, lineHeight:1.2 }}>
                            {["12–16 wks","8–12 wks","12–16 wks","6–10 wks"][i]}
                          </div>
                          <div style={{ fontSize:"0.72rem", color:"var(--text-muted)", fontWeight:500, marginTop:"0.3rem" }}>Discovery to launch</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SECTION 3: TECH STACK ════════════════════════════════════ */}
        <section className="section" style={{ background:"var(--bg)" }}>
          <div className="container">
            <div className="reveal" style={{ textAlign:"center", marginBottom:"4rem" }}>
              <div className="section-label">Technology</div>
              <h2 className="section-title" style={{ maxWidth:"700px", margin:"0 auto 1rem auto" }}>
                Our Engineering Stack
              </h2>
              <p style={{ color:"var(--text-muted)", fontSize:"0.97rem", maxWidth:"520px", margin:"0 auto" }}>
                Chosen for your project's requirements — not our team's familiarity with any vendor.
              </p>
            </div>

            <div style={{ display:"flex", flexDirection:"column", gap:"2rem" }}>
              {STACK_ROWS.map((row, ri) => (
                <div key={ri} className="reveal" style={{ display:"flex", alignItems:"center", gap:"2rem", flexWrap:"wrap" }}>
                  {/* Label */}
                  <div style={{ width:"160px", flexShrink:0 }}>
                    <span style={{ fontSize:"0.72rem", fontWeight:800, color:row.color,
                      textTransform:"uppercase", letterSpacing:"0.1em" }}>{row.label}</span>
                  </div>
                  {/* Chips */}
                  <div style={{ display:"flex", flexWrap:"wrap", gap:"0.65rem", flex:1 }}>
                    {row.items.map((tech, ti) => (
                      <div key={ti} className="stack-chip" style={{
                        display:"flex", alignItems:"center", gap:"0.6rem",
                        padding:"0.55rem 1.1rem",
                        background:"var(--card-bg)",
                        borderRadius:"12px",
                        boxShadow:"0 2px 10px rgba(0,0,0,0.06)",
                      }}>
                        {tech.logo ? (
                          <div style={{ position:"relative", width:"22px", height:"22px", flexShrink:0 }}>
                            <Image src={tech.logo} alt={tech.name} fill style={{ objectFit:"contain" }} />
                          </div>
                        ) : (
                          <div style={{ width:"8px", height:"8px", borderRadius:"50%", background:row.color, flexShrink:0 }} />
                        )}
                        <span style={{ fontSize:"0.88rem", fontWeight:700, color:"var(--text)", whiteSpace:"nowrap" }}>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SECTION 4: ENGAGEMENT PHASES — interactive selector ══════ */}
        <section className="section" style={{ background:"var(--bg-secondary)" }}>
          <div className="container" style={{ maxWidth:"900px" }}>
            <div className="reveal" style={{ textAlign:"center", marginBottom:"4rem" }}>
              <div className="section-label">The Process</div>
              <h2 className="section-title" style={{ maxWidth:"700px", margin:"0 auto" }}>
                How a Web Application Engagement Works
              </h2>
            </div>

            {/* Phase selector strip */}
            <div className="phase-strip reveal" style={{ display:"flex", gap:"0.5rem", marginBottom:"2.5rem", justifyContent:"center", flexWrap:"wrap" }}>
              {PHASES.map((ph, i) => (
                <button key={i} className="phase-btn" onClick={() => setActivePhase(i)}
                  style={{
                    padding:"0.55rem 1.25rem", borderRadius:"50px", border:"none", cursor:"pointer",
                    fontWeight:700, fontSize:"0.84rem",
                    background: activePhase===i ? ph.color : "var(--card-bg)",
                    color: activePhase===i ? "#fff" : "var(--text-muted)",
                    boxShadow: activePhase===i ? `0 6px 20px ${ph.color}40` : "0 1px 6px rgba(0,0,0,0.06)",
                  }}>
                  {ph.num} {ph.title}
                </button>
              ))}
            </div>

            {/* Active phase detail */}
            {(() => {
              const ph = PHASES[activePhase];
              return (
                <div className="expand-body" key={activePhase} style={{
                  background:"var(--card-bg)", borderRadius:"24px",
                  padding:"3rem", boxShadow:"0 8px 40px rgba(0,0,0,0.07)",
                  display:"flex", gap:"3rem", alignItems:"center"
                }}>
                  <div style={{
                    width:"90px", height:"90px", borderRadius:"50%",
                    background:`${ph.color}14`, flexShrink:0,
                    display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"0.1rem"
                  }}>
                    <span style={{ fontSize:"1.6rem", fontWeight:900, color:ph.color, lineHeight:1 }}>{ph.num}</span>
                    <span style={{ fontSize:"0.62rem", fontWeight:700, color:ph.color, opacity:0.7 }}>{ph.weeks}</span>
                  </div>
                  <div style={{ flex:1 }}>
                    <h3 style={{ fontSize:"1.4rem", fontWeight:800, color:"var(--text)", marginBottom:"0.75rem" }}>{ph.title}</h3>
                    <p style={{ fontSize:"1rem", color:"var(--text-muted)", lineHeight:1.82, margin:0 }}>{ph.desc}</p>
                  </div>
                </div>
              );
            })()}
          </div>
        </section>

        {/* ══ TRUST BADGES ═════════════════════════════════════════════ */}
        <section style={{ background:"var(--bg)", padding:"3rem 1.5rem", borderBottom:"1px solid var(--border)" }}>
          <div className="container">
            <div className="trust-row reveal" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1rem" }}>
              {[
                { icon:Shield,       color:"#2563EB", label:"WCAG 2.1 AA",                  sub:"Accessibility standard on all builds" },
                { icon:Lock,         color:"#7C3AED", label:"ASD Essential Eight Ready",     sub:"Government & regulated industry" },
                { icon:CheckCircle2, color:"#0891B2", label:"APRA CPG 234 Aligned",         sub:"Financial services compliance" },
                { icon:Layers,       color:"#059669", label:"SOC 2 Type II Readiness",      sub:"Enterprise security framework" },
                { icon:Code2,        color:"#F59E0B", label:"100% Source Code Handover",    sub:"No lock-in, no ongoing licence" },
                { icon:Monitor,      color:"#EF4444", label:"AWS Sydney + Azure AU East",   sub:"100% Australian data residency" },
              ].map((b,i) => (
                <div key={i} style={{
                  background:"var(--card-bg)", borderRadius:"16px",
                  padding:"1.5rem", boxShadow:"0 2px 12px rgba(0,0,0,0.05)",
                  display:"flex", alignItems:"flex-start", gap:"1rem"
                }}>
                  <div style={{ width:"42px", height:"42px", borderRadius:"11px",
                    background:`${b.color}12`, display:"flex", alignItems:"center",
                    justifyContent:"center", flexShrink:0 }}>
                    <b.icon size={18} color={b.color} />
                  </div>
                  <div>
                    <div style={{ fontWeight:700, fontSize:"0.9rem", color:"var(--text)" }}>{b.label}</div>
                    <div style={{ fontSize:"0.78rem", color:"var(--text-muted)", marginTop:"0.2rem" }}>{b.sub}</div>
                  </div>
                </div>
              ))}
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
          background:`linear-gradient(135deg, ${PRIMARY}0d 0%, ${SECONDARY}08 100%)`,
          borderTop:"1px solid var(--border)"
        }}>
          <div className="container" style={{ textAlign:"center" }}>
            <div className="reveal">
              <h2 style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:800, marginBottom:"1.25rem" }}>
                Ready to build your web application?
              </h2>
              <p style={{ fontSize:"1.05rem", color:"var(--text-muted)", maxWidth:"540px",
                margin:"0 auto 2.5rem", lineHeight:1.75 }}>
                Book a free Discovery session. We map your requirements, propose an architecture, and give you a clear scope and timeline before you commit.
              </p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:"1rem", justifyContent:"center" }}>
                <Link href="/book-discovery" style={{
                  background:PRIMARY, color:"#fff", padding:"1rem 2.25rem",
                  borderRadius:"10px", fontWeight:600, textDecoration:"none",
                  display:"inline-flex", alignItems:"center", gap:"0.5rem",
                  boxShadow:`0 8px 28px ${PRIMARY}40`
                }}>
                  Book a Discovery Session <ArrowRight size={17} />
                </Link>
                <Link href="/case-studies#web-applications" style={{
                  background:"var(--card-bg)", color:"var(--text)", padding:"1rem 2.25rem",
                  borderRadius:"10px", fontWeight:600, textDecoration:"none",
                  display:"inline-flex", alignItems:"center", gap:"0.5rem",
                  boxShadow:"0 2px 10px rgba(0,0,0,0.07)"
                }}>
                  View Case Studies <ChevronRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
