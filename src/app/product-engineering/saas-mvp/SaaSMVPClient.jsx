"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import TrustedBy from "@/components/TrustedBy";
import {
  ArrowRight, ChevronRight, ChevronDown, Plus, Minus,
  Rocket, Search, Pen, Code2, TrendingUp,
  Users, CreditCard, LayoutDashboard, BarChart2,
  Shield, Layers, CheckCircle2, Zap, Star, AlertCircle
} from "lucide-react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const PRIMARY   = "#8B5CF6"; // Violet
const SECONDARY = "#10B981"; // Emerald

/* ── WHY MVPs FAIL — expandable pain points ──────────────────────── */
const FAIL_REASONS = [
  {
    title: "Built by developers who have never launched a product",
    short: "Technical skill and product judgement are different skills. A great engineer who has never shipped a commercial product will optimise for code quality, not customer adoption.",
    detail: "FI Digital pairs every MVP engagement with a product lead who has commercial software launch experience. We challenge your feature assumptions, cut scope ruthlessly, and optimise for the fastest path to a paying customer — not the most elegant technical implementation.",
  },
  {
    title: "Scope creep kills the timeline and the budget",
    short: "An MVP without a controlled scope is not an MVP — it is a product that is always almost ready. Most overruns are caused by adding features that were never validated with real users.",
    detail: "We run a structured Discovery and Validation phase before any design or code begins. We define the minimum viable feature set in Week 1 and lock it. Every subsequent feature request is evaluated against a simple question: does this accelerate getting to a paying customer, or does it delay it?",
  },
  {
    title: "Low-code platforms hit their ceiling at the worst moment",
    short: "A Bubble or Webflow app is fast to launch and catastrophic to scale. When you have 500 paying customers and need a feature that the platform cannot support, a rebuild is inevitable — at the worst possible time.",
    detail: "Every FI Digital MVP is built on production-grade technology: React, Python and FastAPI, PostgreSQL or MongoDB, deployed on AWS or Azure. You own the source code. You own the IP. There is no platform ceiling, no vendor dependency, and no rebuild waiting for you at scale.",
  },
  {
    title: "Distribution was an afterthought",
    short: "A perfectly built product that nobody knows exists is a failure. Most technical founding teams think about how to build the product and not at all about how the first 100 customers will find it.",
    detail: "We build distribution thinking into the product from Day 1. This means: onboarding flows designed for virality, in-app referral mechanics, usage analytics for identifying drop-off points, and a launch strategy that is part of the Product Brief we produce in Phase 1.",
  },
];

/* ── ENGAGEMENT MODEL — phases ──────────────────────────────────────*/
const PHASES = [
  {
    num: "01", icon: Search, color: "#8B5CF6", weeks: "Wks 1–3",
    title: "Discovery & Validation",
    tagline: "Before a single line of code.",
    detail: "A commercial interrogation of your idea. Who is the customer? What is the minimum feature set that makes switching worthwhile? We produce a Product Brief defining validated user personas, minimum viable feature set, pricing hypothesis, launch strategy, and technical architecture. We challenge your assumptions. We test your value proposition with real users.",
    deliverable: "Product Brief — scope, personas, architecture, launch plan",
  },
  {
    num: "02", icon: Pen, color: "#10B981", weeks: "Wks 3–5",
    title: "UX Design",
    tagline: "Fix it in Figma, not in code.",
    detail: "Wireframes produced in Figma. User journey maps. Component library selection. Prototype testing with real users before development begins. Every screen is reviewed and approved before engineering begins. Changes in design cost hours; changes in code cost days.",
    deliverable: "Figma prototype — complete UX, tested with real users",
  },
  {
    num: "03", icon: Code2, color: "#F59E0B", weeks: "Wks 5–14",
    title: "Build",
    tagline: "Working software every two weeks.",
    detail: "Sprint-based development with fortnightly working demos from Week 6. We implement: user authentication and authorisation, subscription billing (Stripe or Paddle), multi-tenant architecture, admin dashboard, analytics and usage tracking, onboarding flows, and all core features scoped in Phase 1.",
    deliverable: "Fully functional MVP — staging environment, ready for beta users",
  },
  {
    num: "04", icon: Rocket, color: "#E11D48", weeks: "Wks 13–16",
    title: "Launch & Iteration",
    tagline: "We stay through your first paying customers.",
    detail: "Production deployment. App Store submission if mobile is included. Staged rollout to beta users. Post-launch monitoring via Sentry and Datadog. First iteration sprint based on early user feedback. We stay with you through the first 30 days of live customer usage.",
    deliverable: "Live product — production monitored, first iteration underway",
  },
];

/* ── WHAT A PRODUCTION SAAS NEEDS ────────────────────────────────── */
const SAAS_REQUIREMENTS = [
  { icon: Layers,         color: "#8B5CF6", title: "Multi-Tenant Architecture",    desc: "Every customer's data is fully isolated. Tenant-level access controls, data separation, and the ability to manage each customer's configuration independently." },
  { icon: CreditCard,     color: "#10B981", title: "Subscription & Billing",       desc: "Stripe or Paddle integration for plan management, free trials, upgrade/downgrade flows, dunning, and payment failure handling." },
  { icon: LayoutDashboard,color: "#F59E0B", title: "Admin Dashboard",              desc: "Usage metrics, customer management, support tools, and operational controls. Your team needs visibility into every customer's usage without touching the database." },
  { icon: TrendingUp,     color: "#0891B2", title: "Onboarding Flows",             desc: "Guided first-use experience designed to reach the first value moment before the user loses interest. Activation is a product feature, not a marketing problem." },
  { icon: BarChart2,      color: "#E11D48", title: "Usage Analytics",              desc: "PostHog, Amplitude, or Mixpanel for feature adoption tracking, drop-off analysis, funnel optimisation, and cohort retention. Built in from Day 1." },
  { icon: Shield,         color: "#059669", title: "Security & Compliance",        desc: "SOC 2 Type II readiness, Privacy Act compliance, and penetration testing for products handling sensitive data. Not an afterthought — engineered in from the architecture stage." },
];

/* ── FAQ ──────────────────────────────────────────────────────────── */
const FAQS = [
  { q: "How much does it cost to build an MVP in Australia?",        a: "A properly engineered MVP with authentication, subscription billing, multi-tenant architecture, and core features typically costs $80,000 to $180,000. Quick single-workflow MVPs can be under $60,000. Full-featured SaaS platforms may exceed $250,000. The scope is defined precisely during our Discovery phase." },
  { q: "What is the difference between an MVP and a finished product?", a: "An MVP is the smallest version of your product that delivers your core value proposition to real customers. It is a production system with real users, real data, and real subscriptions — not a prototype or a demo. The goal is to get to a paying customer as fast as possible so you can learn what to build next." },
  { q: "Can you take over a product someone else started building?",  a: "Yes, with conditions. We conduct a technical audit of the existing codebase first. If the code is salvageable we continue from where the previous team left off. If it is not, we recommend a rebuild on a solid foundation and explain precisely why. We have done both." },
  { q: "Do I need technical experience to work with you?",            a: "No. Many of our SaaS clients are commercial founders with no software engineering background. We act as your CTO for the duration of the engagement — making technical architecture decisions, managing the engineering team, and translating technical trade-offs into commercial language you can make decisions from." },
  { q: "What happens to the product after launch?",                  a: "You own 100% of the source code and all IP at handover. After launch you can manage in-house with your own team, continue on an FI Digital retainer for feature development and maintenance, or hire an internal engineering team and transition them with our support." },
];

/* ═══════════════════════════════════════════════════════════════════ */
export default function SaaSMVPClient() {
  const containerRef  = useRef(null);
  const [openFail,    setOpenFail]    = useState(null);
  const [activePhase, setActivePhase] = useState(0);
  const [openFaq,     setOpenFaq]     = useState(null);

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

    gsap.fromTo(".req-card",
      { y: 24, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.4, stagger: 0.09, ease: "power2.out",
        scrollTrigger: { trigger: ".req-grid", start: "top 85%", once: true } }
    );
  }, { scope: containerRef });

  const ph = PHASES[activePhase];

  return (
    <div ref={containerRef}>
      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(-6px)} to{opacity:1;transform:translateY(0)} }
        .expand-body { animation: fadeUp 0.25s ease; }
        .fail-item   { transition: background 0.2s ease; }
        .fail-item:hover { background: var(--bg-secondary) !important; }
        .phase-btn   { transition: all 0.2s ease; }
        .req-card    { transition: transform 0.2s ease; }
        .req-card:hover { transform: translateY(-4px); }
        @media (max-width: 900px) {
          .why-layout  { flex-direction: column !important; }
          .req-grid    { grid-template-columns: 1fr 1fr !important; }
          .trust-grid  { grid-template-columns: 1fr 1fr !important; }
          .phase-strip { flex-wrap: wrap !important; }
          .stat-strip  { flex-wrap: wrap !important; }
        }
        @media (max-width: 540px) {
          .req-grid    { grid-template-columns: 1fr !important; }
          .trust-grid  { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <main style={{ paddingTop: "var(--header-h)", overflow: "hidden" }}>

        {/* ══ HERO ══════════════════════════════════════════════════════ */}
        <section style={{
          position: "relative", minHeight: "82vh", display: "flex", alignItems: "center",
          padding: "0 1.5rem 60px", background: "var(--bg)", overflow: "hidden",
        }}>
          {/* Glow orbs */}
          <div style={{ position:"absolute", top:"15%", right:"3%", width:"640px", height:"640px",
            background:`radial-gradient(circle, ${PRIMARY}12 0%, transparent 70%)`,
            pointerEvents:"none", zIndex:0 }} />
          <div style={{ position:"absolute", bottom:"10%", left:"8%", width:"420px", height:"420px",
            background:`radial-gradient(circle, ${SECONDARY}0d 0%, transparent 70%)`,
            pointerEvents:"none", zIndex:0 }} />

          {/* Hero image */}
          <div style={{ position:"absolute", top:0, right:0, width:"52%", height:"100%", zIndex:0, opacity:0.35, pointerEvents:"none" }}>
            <Image src="/images/saas-mvp-hero.png" alt="SaaS and MVP Development" fill sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit:"cover",
                maskImage:"radial-gradient(ellipse at right, black, transparent 72%)",
                WebkitMaskImage:"radial-gradient(ellipse at right, black, transparent 72%)" }} />
          </div>

          <div className="container" style={{ position:"relative", zIndex:1 }}>
            <div className="hero-badge" style={{
              display:"inline-flex", alignItems:"center", gap:"0.75rem",
              background:"rgba(139,92,246,0.1)", border:"1px solid rgba(139,92,246,0.25)",
              padding:"0.6rem 1.25rem", borderRadius:"50px", marginBottom:"2rem"
            }}>
              <Rocket size={16} color={PRIMARY} />
              <span style={{ color:PRIMARY, fontWeight:700, fontSize:"0.88rem" }}>
                30+ SaaS Products Launched · React · Python · FastAPI · 200+ Engineers
              </span>
            </div>

            <h1 className="hero-h1 section-title" style={{
              maxWidth:"900px", fontSize:"clamp(2.2rem,5vw,3.8rem)", lineHeight:1.1, marginBottom:"1.5rem"
            }}>
              SaaS & MVP Builds<br />
              <span style={{ color:"var(--primary)", fontWeight:300 }}>
                From Concept to Paying Customers in 12 to 16 Weeks
              </span>
            </h1>

            <p className="hero-sub section-desc" style={{
              maxWidth:"700px", fontSize:"1.1rem", color:"var(--text-muted)", marginBottom:"3rem", lineHeight:1.82
            }}>
              Turn your software idea into a production-ready SaaS platform. Market validation. UX design. Engineering. Launch. Iteration. We have launched 30+ software products. Some are generating millions in ARR. All started with a Discovery session.
            </p>

            <div className="hero-cta" style={{ display:"flex", flexWrap:"wrap", gap:"1rem" }}>
              <Link href="/book-discovery" style={{
                background:PRIMARY, color:"#fff", padding:"1rem 2rem",
                borderRadius:"8px", fontWeight:600, textDecoration:"none",
                display:"inline-flex", alignItems:"center", gap:"0.5rem"
              }}>
                Book a Product Discovery Session <ArrowRight size={18} />
              </Link>
              <Link href="/case-studies#saas-mvp" style={{
                background:"transparent", color:"var(--text)", padding:"1rem 2rem",
                borderRadius:"8px", fontWeight:600, textDecoration:"none",
                display:"inline-flex", alignItems:"center", gap:"0.5rem",
                border:"1px solid var(--border)"
              }}>
                View SaaS Case Studies <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        <TrustedBy />

        {/* ══ STAT STRIP ════════════════════════════════════════════════ */}
        <div style={{ background:"var(--bg-secondary)", borderTop:"1px solid var(--border)", borderBottom:"1px solid var(--border)", padding:"2.25rem 1.5rem" }}>
          <div className="container">
            <div className="stat-strip" style={{ display:"flex", flexWrap:"wrap", gap:"2rem", justifyContent:"center", textAlign:"center" }}>
              {[
                { stat:"30+",      label:"SaaS products launched" },
                { stat:"12–16 wks",label:"Concept to paying customers" },
                { stat:"500+",     label:"Customers in year one (top product)" },
                { stat:"100%",     label:"Source code & IP at handover" },
              ].map((s,i) => (
                <div key={i} className="reveal" style={{ flex:"1 1 180px" }}>
                  <div style={{ fontSize:"clamp(1.5rem,3vw,2.4rem)", fontWeight:900, color:PRIMARY, marginBottom:"0.3rem" }}>{s.stat}</div>
                  <div style={{ fontSize:"0.88rem", color:"var(--text-muted)", fontWeight:500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ SECTION 1: WHY MVPs FAIL — left/right with expandable ════ */}
        <section className="section" style={{ background:"var(--bg)" }}>
          <div className="container">
            <div className="why-layout reveal" style={{ display:"flex", flexWrap:"wrap", gap:"5rem", alignItems:"flex-start" }}>

              {/* Left */}
              <div style={{ flex:"0 0 340px" }}>
                <div className="section-label">The Reality</div>
                <h2 className="section-title" style={{ marginBottom:"1.25rem" }}>
                  Why Most MVPs Fail
                </h2>
                <p style={{ fontSize:"0.97rem", color:"var(--text-muted)", lineHeight:1.8, marginBottom:"2rem" }}>
                  Four predictable reasons — and how FI Digital engineers around each of them.
                </p>

                {/* "How ours don't" proof points */}
                <div style={{ display:"flex", flexDirection:"column", gap:"0.75rem" }}>
                  {[
                    "Product thinking before a line of code",
                    "Scope locked in Week 1 — no drift",
                    "Production stack — no low-code ceiling",
                    "Distribution designed into the product",
                  ].map((pt, i) => (
                    <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:"0.65rem" }}>
                      <div style={{ width:"22px", height:"22px", borderRadius:"50%",
                        background:`${SECONDARY}14`, flexShrink:0,
                        display:"flex", alignItems:"center", justifyContent:"center", marginTop:"1px" }}>
                        <CheckCircle2 size={13} color={SECONDARY} />
                      </div>
                      <span style={{ fontSize:"0.9rem", color:"var(--text)", lineHeight:1.6, fontWeight:600 }}>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — expandable failure reasons */}
              <div style={{ flex:"1 1 420px", display:"flex", flexDirection:"column", gap:"0.75rem" }}>
                {FAIL_REASONS.map((item, i) => (
                  <div key={i} className="fail-item reveal" style={{
                    background:"var(--card-bg)", borderRadius:"16px",
                    overflow:"hidden", boxShadow:"0 2px 12px rgba(0,0,0,0.05)"
                  }}>
                    <button onClick={() => setOpenFail(openFail===i ? null : i)}
                      style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between",
                        padding:"1.4rem 1.75rem", background:"none", border:"none",
                        cursor:"pointer", textAlign:"left", gap:"1rem" }}>
                      <div style={{ flex:1 }}>
                        <div style={{ display:"flex", alignItems:"center", gap:"0.6rem", marginBottom:"0.35rem" }}>
                          <AlertCircle size={14} color={SECONDARY} style={{ flexShrink:0 }} />
                          <div style={{ fontSize:"1rem", fontWeight:700, color:"var(--text)" }}>{item.title}</div>
                        </div>
                        {openFail !== i && (
                          <div style={{ fontSize:"0.86rem", color:"var(--text-muted)", lineHeight:1.6, paddingLeft:"1.4rem" }}>{item.short}</div>
                        )}
                      </div>
                      <div style={{
                        width:"30px", height:"30px", borderRadius:"50%",
                        background: openFail===i ? `${PRIMARY}15` : "var(--bg-secondary)",
                        display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0
                      }}>
                        {openFail===i
                          ? <Minus size={15} color={PRIMARY} />
                          : <Plus  size={15} color="var(--text-muted)" />
                        }
                      </div>
                    </button>
                    {openFail===i && (
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

        {/* ══ SECTION 2: ENGAGEMENT MODEL — interactive phases ════════ */}
        <section className="section" style={{ background:"var(--bg-secondary)" }}>
          <div className="container" style={{ maxWidth:"960px" }}>
            <div className="reveal" style={{ textAlign:"center", marginBottom:"4rem" }}>
              <div className="section-label">The Model</div>
              <h2 className="section-title" style={{ maxWidth:"760px", margin:"0 auto" }}>
                Our SaaS & MVP Engagement Model
              </h2>
            </div>

            {/* Connector phase strip */}
            <div className="phase-strip reveal" style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:0, marginBottom:"2.5rem", overflowX:"auto" }}>
              {PHASES.map((p, i) => (
                <div key={i} style={{ display:"flex", alignItems:"center", flexShrink:0 }}>
                  <button onClick={() => setActivePhase(i)}
                    style={{
                      display:"flex", flexDirection:"column", alignItems:"center", gap:"0.4rem",
                      padding:"1rem 1.5rem", borderRadius:"16px", border:"none", cursor:"pointer",
                      background: activePhase===i ? `${p.color}14` : "transparent",
                      transition:"all 0.22s ease",
                      outline: activePhase===i ? `2px solid ${p.color}` : "none",
                    }}>
                    <div style={{
                      width:"44px", height:"44px", borderRadius:"12px",
                      background: activePhase===i ? p.color : "var(--card-bg)",
                      display:"flex", alignItems:"center", justifyContent:"center",
                      boxShadow: activePhase===i ? `0 6px 20px ${p.color}40` : "0 2px 8px rgba(0,0,0,0.06)",
                      transition:"all 0.22s ease"
                    }}>
                      <p.icon size={20} color={activePhase===i ? "#fff" : "var(--text-muted)"} />
                    </div>
                    <span style={{ fontSize:"0.72rem", fontWeight:800, color:activePhase===i ? p.color : "var(--text-muted)",
                      textTransform:"uppercase", letterSpacing:"0.08em", whiteSpace:"nowrap" }}>{p.num} {p.title}</span>
                    <span style={{ fontSize:"0.68rem", color:activePhase===i ? p.color : "var(--text-muted)", opacity:0.7 }}>{p.weeks}</span>
                  </button>
                  {i < PHASES.length-1 && (
                    <div style={{ width:"40px", height:"2px", flexShrink:0,
                      background:`linear-gradient(to right, ${PHASES[i].color}50, ${PHASES[i+1].color}50)` }} />
                  )}
                </div>
              ))}
            </div>

            {/* Active phase detail card */}
            <div className="expand-body" key={activePhase} style={{
              background:"var(--card-bg)", borderRadius:"24px",
              padding:"2.75rem 3rem", boxShadow:"0 8px 40px rgba(0,0,0,0.07)",
            }}>
              <div style={{ display:"flex", gap:"2.5rem", alignItems:"flex-start", flexWrap:"wrap" }}>
                {/* Icon circle */}
                <div style={{
                  width:"80px", height:"80px", borderRadius:"50%",
                  background:`${ph.color}14`, flexShrink:0,
                  display:"flex", alignItems:"center", justifyContent:"center"
                }}>
                  <ph.icon size={32} color={ph.color} />
                </div>
                <div style={{ flex:1, minWidth:"260px" }}>
                  <div style={{ fontSize:"0.65rem", fontWeight:800, color:ph.color,
                    textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:"0.5rem" }}>{ph.weeks}</div>
                  <h3 style={{ fontSize:"1.5rem", fontWeight:800, color:"var(--text)", marginBottom:"0.4rem" }}>{ph.title}</h3>
                  <div style={{ fontSize:"1rem", fontStyle:"italic", color:ph.color, marginBottom:"1.25rem", fontWeight:600 }}>"{ph.tagline}"</div>
                  <p style={{ fontSize:"0.97rem", color:"var(--text-muted)", lineHeight:1.82, marginBottom:"1.5rem" }}>{ph.detail}</p>
                  <div style={{ display:"inline-flex", alignItems:"center", gap:"0.65rem",
                    padding:"0.6rem 1.1rem", background:`${ph.color}0d`, borderRadius:"10px" }}>
                    <Star size={14} color={ph.color} />
                    <span style={{ fontSize:"0.82rem", fontWeight:700, color:ph.color }}>Deliverable: {ph.deliverable}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ SECTION 3: WHAT A PRODUCTION SAAS NEEDS ═════════════════ */}
        <section className="section" style={{ background:"var(--bg)" }}>
          <div className="container">
            <div className="reveal" style={{ textAlign:"center", marginBottom:"4rem" }}>
              <div className="section-label">Engineering Baseline</div>
              <h2 className="section-title" style={{ maxWidth:"760px", margin:"0 auto 1rem auto" }}>
                What a Production SaaS Platform Needs
              </h2>
              <p style={{ color:"var(--text-muted)", fontSize:"0.97rem", maxWidth:"560px", margin:"0 auto" }}>
                Six capabilities every commercial SaaS product requires from Day 1 — not bolted on later.
              </p>
            </div>

            <div className="req-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1.5rem" }}>
              {SAAS_REQUIREMENTS.map((req, i) => (
                <div key={i} className="req-card" style={{
                  background:"var(--card-bg)", borderRadius:"20px",
                  padding:"2rem 1.75rem", boxShadow:"0 2px 14px rgba(0,0,0,0.05)",
                  display:"flex", flexDirection:"column", gap:"1rem"
                }}>
                  <div style={{ width:"52px", height:"52px", borderRadius:"14px",
                    background:`${req.color}12`,
                    display:"flex", alignItems:"center", justifyContent:"center" }}>
                    <req.icon size={24} color={req.color} />
                  </div>
                  <h3 style={{ fontSize:"1.05rem", fontWeight:800, color:"var(--text)", margin:0 }}>{req.title}</h3>
                  <p style={{ fontSize:"0.88rem", color:"var(--text-muted)", lineHeight:1.75, margin:0 }}>{req.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SOCIAL PROOF STRIP ════════════════════════════════════════ */}
        <section style={{ background:"var(--bg-secondary)", padding:"3rem 1.5rem", borderTop:"1px solid var(--border)", borderBottom:"1px solid var(--border)" }}>
          <div className="container">
            <div className="reveal" style={{ textAlign:"center", marginBottom:"2.5rem" }}>
              <div className="section-label">Track Record</div>
              <h2 style={{ fontSize:"clamp(1.5rem,3vw,2.2rem)", fontWeight:800, margin:0 }}>
                Products We Have Launched
              </h2>
            </div>
            <div style={{ display:"flex", flexWrap:"wrap", gap:"1.25rem", justifyContent:"center" }}>
              {[
                { industry:"Financial Services", outcome:"0 → 400 paying customers, Year 1" },
                { industry:"Logistics & Field Service", outcome:"Replaced legacy desktop system" },
                { industry:"Healthcare",          outcome:"3 state rollout within 18 months" },
                { industry:"Professional Services",outcome:"ARR exceeding $2M by Year 2" },
                { industry:"PropTech",            outcome:"Series A raised post-launch" },
              ].map((item,i) => (
                <div key={i} style={{
                  background:"var(--card-bg)", borderRadius:"14px",
                  padding:"1.25rem 1.75rem", boxShadow:"0 2px 10px rgba(0,0,0,0.05)",
                  display:"flex", flexDirection:"column", gap:"0.35rem",
                  flex:"1 1 220px"
                }}>
                  <span style={{ fontSize:"0.65rem", fontWeight:800, color:PRIMARY, textTransform:"uppercase", letterSpacing:"0.1em" }}>{item.industry}</span>
                  <span style={{ fontSize:"0.9rem", fontWeight:700, color:"var(--text)" }}>{item.outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ FAQ ══════════════════════════════════════════════════════ */}
        <section className="section" style={{ background:"var(--bg)" }}>
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
                Ready to turn your idea into a product?
              </h2>
              <p style={{ fontSize:"1.05rem", color:"var(--text-muted)", maxWidth:"560px",
                margin:"0 auto 2.5rem", lineHeight:1.75 }}>
                Book a Product Discovery session. In 90 minutes we will challenge your assumptions, scope the MVP, and give you a clear path from idea to paying customer.
              </p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:"1rem", justifyContent:"center" }}>
                <Link href="/book-discovery" style={{
                  background:PRIMARY, color:"#fff", padding:"1rem 2.25rem",
                  borderRadius:"8px", fontWeight:600, textDecoration:"none",
                  display:"inline-flex", alignItems:"center", gap:"0.5rem"
                }}>
                  Book a Product Discovery Session <ArrowRight size={18} />
                </Link>
                <Link href="/case-studies#saas-mvp" style={{
                  background:"transparent", color:"var(--text)", padding:"1rem 2.25rem",
                  borderRadius:"8px", fontWeight:600, textDecoration:"none",
                  display:"inline-flex", alignItems:"center", gap:"0.5rem",
                  border:"1px solid var(--border)"
                }}>
                  View SaaS Case Studies <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
