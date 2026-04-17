"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, ChevronDown, Settings, Zap, Bot,
  Link2, BarChart3, Award, CheckCircle2, ChevronRight
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ZOHO_PAGES = [
  { label: "Zoho Consulting",            href: "/zoho-consultants" },
  { label: "Zoho Implementation",        href: "/zoho-implementation-specialist" },
  { label: "CRM Implementation",         href: "/crm-implementation" },
  { label: "Desk Implementation",        href: "/desk-implementation" },
  { label: "Custom Development",         href: "/custom-development" },
  { label: "3rd Party Integration",      href: "/3rd-party-zoho-integration" },
  { label: "Zoho Creator",               href: "/creator" },
  { label: "Zoho Partners Australia",    href: "/zoho-partners-australia" },
];

const FAQS = [
  {
    q: "What is business systems modernisation?",
    a: "It is the process of improving your existing operational systems (CRM, accounting, inventory, HR) without replacing them entirely. We clean up configurations, fix integrations, automate workflows, layer AI on top of manual processes, and connect systems so they share data. The result is a more efficient, more reliable operational backbone."
  },
  {
    q: "Do I need to replace my current CRM?",
    a: "Not necessarily. If your CRM works but is messy (duplicate records, broken workflows, poor adoption), modernisation is the right approach. We clean and optimise your existing system. If your CRM is fundamentally not fit for purpose, we can recommend and implement an alternative, typically Zoho CRM for mid-market businesses."
  },
  {
    q: "How is FI Digital different from other Zoho partners?",
    a: "We are a Zoho Premium Partner and Zoho Innovator of the Year with 200 plus implementations. But our real differentiator is cross-pillar capability. Most Zoho partners only do Zoho. We also build custom software, engineer data platforms, and deploy AI agents. This means your Zoho modernisation can include a Databricks data warehouse, an AI copilot, or a custom customer portal, all from one partner."
  },
  {
    q: "Can you modernise non-Zoho systems?",
    a: "Yes. We modernise Salesforce, Microsoft Dynamics, Xero, MYOB, and custom legacy systems. The approach is the same: audit, clean, automate, integrate, optimise. For some clients, we also build bridges between Zoho and non-Zoho systems."
  },
  {
    q: "What does AI layering mean?",
    a: "AI layering means adding AI capabilities on top of your existing business systems without replacing them. An AI agent that reads emails and creates CRM records. A copilot that summarises customer history. An automation that categorises support tickets. The AI enhances what you already have."
  },
];

export default function BusinessSystemsClient() {
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

    gsap.fromTo(".approach-card",
      { y: 30, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.12, ease: "power2.out",
        scrollTrigger: { trigger: ".approach-grid", start: "top 85%", once: true } }
    );

    gsap.fromTo(".zoho-link-card",
      { y: 20, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.4, stagger: 0.07, ease: "power2.out",
        scrollTrigger: { trigger: ".zoho-links-grid", start: "top 88%", once: true } }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <style>{`
        @keyframes fadeIn { from { opacity:0; transform:translateY(-8px); } to { opacity:1; transform:translateY(0); } }
        .faq-answer { animation: fadeIn 0.3s ease; }
        .zoho-link-card:hover { background: rgba(var(--primary-rgb,29,78,216),0.06) !important; border-color: var(--primary) !important; transform: translateY(-2px); }
        .approach-card:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); }
        .approach-card { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .zoho-link-card { transition: all 0.2s ease; }
      `}</style>
      <main style={{ paddingTop: "var(--header-h)", overflow: "hidden" }}>

        {/* ══ HERO ══════════════════════════════════════════════════════════ */}
        <section style={{
          position: "relative", minHeight: "78vh", display: "flex", alignItems: "center",
          padding: "0 1.5rem 60px",
          background: "var(--bg)", overflow: "hidden"
        }}>
          {/* Hero background */}
          <div style={{ position: "absolute", top: 0, right: 0, width: "55%", height: "100%", zIndex: 0, opacity: 0.4, pointerEvents: "none" }}>
            <Image
              src="/images/business-systems-hero.png"
              alt="Business Systems Modernisation"
              fill
              style={{
                objectFit: "cover",
                maskImage: "radial-gradient(ellipse at right, black, transparent 75%)",
                WebkitMaskImage: "radial-gradient(ellipse at right, black, transparent 75%)"
              }}
            />
          </div>

          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            {/* Award badge */}
            <div className="hero-badge" style={{
              display: "inline-flex", alignItems: "center", gap: "0.75rem",
              background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.3)",
              padding: "0.6rem 1.25rem", borderRadius: "50px", marginBottom: "2rem"
            }}>
              <Award size={16} color="#D97706" />
              <span style={{ color: "#D97706", fontWeight: 700, fontSize: "0.9rem" }}>Zoho Premium Partner · Zoho Innovator of the Year · 200+ Projects Delivered</span>
            </div>

            <h1 className="hero-h1 section-title" style={{
              maxWidth: "900px", fontSize: "clamp(2.4rem,5.5vw,4.2rem)", lineHeight: 1.1, marginBottom: "1.5rem"
            }}>
              Business Systems Modernisation<br />
              <span style={{ color: "var(--primary)", fontWeight: 300 }}>
                Modernise What You Have Without Ripping It Out
              </span>
            </h1>

            <p className="hero-p section-desc" style={{
              maxWidth: "720px", fontSize: "1.15rem", color: "var(--text-muted)", marginBottom: "3rem", lineHeight: 1.8
            }}>
              Your business systems work. But they could work better. FI Digital is an award-winning Zoho Premium Partner with 200 plus projects delivered. We modernise your CRM, finance, inventory, and operational systems. Clean up integrations. Layer AI on top of workflows. Connect your business systems to your data platform. Make everything work together instead of against each other.
            </p>

            <div className="hero-btn" style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <Link href="/book-discovery" style={{
                background: "var(--primary)", color: "#fff", padding: "1rem 2rem",
                borderRadius: "8px", fontWeight: 600, textDecoration: "none",
                display: "inline-flex", alignItems: "center", gap: "0.5rem", transition: "all 0.2s"
              }}>
                Book a Systems Modernisation Assessment <ArrowRight size={18} />
              </Link>
              <Link href="/zoho-consultants" style={{
                background: "transparent", color: "var(--text)", padding: "1rem 2rem",
                borderRadius: "8px", fontWeight: 600, textDecoration: "none",
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                border: "1px solid var(--border)", transition: "all 0.2s"
              }}>
                Explore Our Zoho Services <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* ══ STAT STRIP ════════════════════════════════════════════════════ */}
        <section style={{ background: "var(--bg-secondary)", padding: "3rem 1.5rem", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center", textAlign: "center" }}>
              {[
                { stat: "200+",  label: "Projects Delivered" },
                { stat: "2018",  label: "Zoho Partner Since" },
                { stat: "8",     label: "Zoho Modules Certified" },
                { stat: "#1",    label: "Zoho Innovator of the Year" },
              ].map((item, i) => (
                <div key={i} className="reveal" style={{ flex: "1 1 180px" }}>
                  <div style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, color: "var(--primary)", lineHeight: 1, marginBottom: "0.5rem" }}>{item.stat}</div>
                  <div style={{ fontSize: "0.95rem", color: "var(--text-muted)", fontWeight: 500 }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SECTION 1: THE MODERNISATION APPROACH ════════════════════════ */}
        <section className="section" style={{ background: "var(--bg)" }}>
          <div className="container">
            <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
              <div className="section-label">Our Philosophy</div>
              <h2 className="section-title" style={{ maxWidth: "800px", margin: "0 auto 0 auto" }}>
                The Modernisation Approach
              </h2>
            </div>

            {/* Verbatim copy */}
            <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto 5rem auto" }}>
              <p style={{ fontSize: "1.1rem", color: "var(--text)", lineHeight: 1.85, marginBottom: "1.5rem" }}>
                Most businesses do not need to replace their core systems. They need to modernise them. Your CRM has years of customer history. Your accounting software has your entire financial record. Your inventory system tracks thousands of SKUs. Ripping these out and starting over is expensive, disruptive, and unnecessary.
              </p>
              <p style={{ fontSize: "1.1rem", color: "var(--text)", lineHeight: 1.85, marginBottom: "1.5rem" }}>
                FI Digital takes a different approach. We modernise what you already have. We clean up messy configurations. We fix broken integrations. We automate manual workflows. We layer AI on top of routine processes. We connect your business systems to modern data platforms so your reporting is accurate, timely, and trusted. And we do it without forcing you to learn a new system or migrate years of data to a different platform.
              </p>
              <p style={{ fontSize: "1.1rem", color: "var(--text)", lineHeight: 1.85 }}>
                For businesses running Zoho, we are your ideal partner. FI Digital is a <strong>Zoho Premium Partner and Zoho Innovator of the Year</strong>. We have delivered 200 plus Zoho implementations across every major module: CRM, Books, Inventory, Creator, Desk, Projects, People, and Marketing Automation. But our modernisation practice extends beyond Zoho. We modernise Salesforce, Microsoft Dynamics, Xero, MYOB, and custom legacy systems. The approach is the same: <strong>audit, clean, automate, integrate, and optimise.</strong>
              </p>
            </div>

            {/* Approach process steps */}
            <div className="approach-grid" style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem"
            }}>
              {[
                { step: "01", label: "Audit",     desc: "We map your current systems, integrations, workflows, and data flows.", color: "#3B82F6" },
                { step: "02", label: "Clean",     desc: "Remove duplicates, fix broken automations, resolve messy configurations.", color: "#10B981" },
                { step: "03", label: "Automate",  desc: "Replace manual processes with intelligent workflow automation.", color: "#F59E0B" },
                { step: "04", label: "Integrate", desc: "Connect every system so data flows without manual re-entry.", color: "#8B5CF6" },
                { step: "05", label: "Optimise",  desc: "Layer AI on top. Connect to your data platform. Measure and improve.", color: "#EF4444" },
              ].map((item, i) => (
                <div key={i} className="approach-card" style={{
                  background: "var(--card-bg)", padding: "2rem 1.75rem", borderRadius: "16px",
                  border: "1px solid var(--border)", cursor: "default"
                }}>
                  <div style={{ fontSize: "0.8rem", fontWeight: 800, color: item.color, marginBottom: "0.75rem", letterSpacing: "0.1em" }}>{item.step}</div>
                  <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.75rem" }}>{item.label}</div>
                  <p style={{ fontSize: "0.93rem", color: "var(--text-muted)", lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SECTION 2: WHAT MODERNISATION LOOKS LIKE ═════════════════════ */}
        <section className="section" style={{ background: "var(--bg-secondary)" }}>
          <div className="container">
            <div className="reveal" style={{ textAlign: "center", marginBottom: "5rem" }}>
              <div className="section-label">Services</div>
              <h2 className="section-title" style={{ maxWidth: "800px", margin: "0 auto" }}>
                What Modernisation Looks Like
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }}>

              {/* CRM Modernisation */}
              <div className="reveal" style={{
                display: "flex", flexWrap: "wrap", gap: "3rem", alignItems: "center",
                background: "var(--card-bg)", padding: "3rem", borderRadius: "24px", border: "1px solid var(--border)"
              }}>
                <div style={{ flex: "1 1 400px" }}>
                  <div style={{ width: "56px", height: "56px", background: "rgba(59,130,246,0.1)", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                    <Settings size={26} color="#3B82F6" />
                  </div>
                  <h3 style={{ fontSize: "1.7rem", fontWeight: 800, marginBottom: "1rem", color: "var(--text)" }}>CRM Modernisation</h3>
                  <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.75 }}>
                    Your CRM should be your single source of truth for customer relationships. We clean up duplicate records, fix broken workflows, configure automations, build custom dashboards, and integrate your CRM with your accounting, marketing, and support systems. If you are on Zoho CRM, we optimise your existing configuration. If you are on Salesforce or Dynamics and considering a move to Zoho, we handle the migration.
                  </p>
                </div>
                <div style={{ flex: "1 1 220px", display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "flex-start" }}>
                  {["Zoho CRM", "Salesforce", "Microsoft Dynamics", "Duplicate Cleanup", "Workflow Automation", "CRM Migration"].map((tag, i) => (
                    <span key={i} style={{ padding: "0.4rem 1rem", background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)", borderRadius: "50px", fontSize: "0.85rem", fontWeight: 600, color: "var(--text)" }}>{tag}</span>
                  ))}
                </div>
              </div>

              {/* Workflow Automation */}
              <div className="reveal" style={{
                display: "flex", flexWrap: "wrap", gap: "3rem", alignItems: "center",
                background: "var(--card-bg)", padding: "3rem", borderRadius: "24px", border: "1px solid var(--border)"
              }}>
                <div style={{ flex: "1 1 400px" }}>
                  <div style={{ width: "56px", height: "56px", background: "rgba(16,185,129,0.1)", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                    <Zap size={26} color="#10B981" />
                  </div>
                  <h3 style={{ fontSize: "1.7rem", fontWeight: 800, marginBottom: "1rem", color: "var(--text)" }}>Workflow Automation</h3>
                  <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.75 }}>
                    Manual processes that consume your team are opportunities for automation. We map your workflows, identify automation candidates, and build automated processes using Zoho workflows, n8n orchestration, or custom API integrations. Invoice approval workflows. Lead assignment rules. Support ticket routing. Employee onboarding sequences. Each automation saves hours per week and reduces error rates.
                  </p>
                </div>
                <div style={{ flex: "1 1 220px", display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "flex-start" }}>
                  {["Zoho Workflows", "n8n Orchestration", "Invoice Approvals", "Lead Assignment", "Ticket Routing", "Onboarding Sequences"].map((tag, i) => (
                    <span key={i} style={{ padding: "0.4rem 1rem", background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)", borderRadius: "50px", fontSize: "0.85rem", fontWeight: 600, color: "var(--text)" }}>{tag}</span>
                  ))}
                </div>
              </div>

              {/* API Integration */}
              <div className="reveal" style={{
                display: "flex", flexWrap: "wrap", gap: "3rem", alignItems: "center",
                background: "var(--card-bg)", padding: "3rem", borderRadius: "24px", border: "1px solid var(--border)"
              }}>
                <div style={{ flex: "1 1 400px" }}>
                  <div style={{ width: "56px", height: "56px", background: "rgba(139,92,246,0.1)", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                    <Link2 size={26} color="#8B5CF6" />
                  </div>
                  <h3 style={{ fontSize: "1.7rem", fontWeight: 800, marginBottom: "1rem", color: "var(--text)" }}>API Integration & System Clean-Up</h3>
                  <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.75 }}>
                    Your systems should talk to each other. We build integrations between your CRM, accounting software, inventory management, e-commerce platform, and data warehouse. We use Zoho native integrations where available and custom API development where needed. The goal is eliminating manual data re-entry and ensuring a single source of truth across your operational systems.
                  </p>
                </div>
                <div style={{ flex: "1 1 220px", display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "flex-start" }}>
                  {["Zoho Native Integrations", "Custom API Dev", "Xero", "MYOB", "Shopify / e-Commerce", "Data Warehouse Sync"].map((tag, i) => (
                    <span key={i} style={{ padding: "0.4rem 1rem", background: "rgba(139,92,246,0.08)", border: "1px solid rgba(139,92,246,0.2)", borderRadius: "50px", fontSize: "0.85rem", fontWeight: 600, color: "var(--text)" }}>{tag}</span>
                  ))}
                </div>
              </div>

              {/* AI Layering */}
              <div className="reveal" style={{
                display: "flex", flexWrap: "wrap", gap: "3rem", alignItems: "center",
                background: "linear-gradient(135deg, rgba(29,78,216,0.08) 0%, rgba(16,185,129,0.08) 100%)",
                padding: "3rem", borderRadius: "24px", border: "1px solid rgba(29,78,216,0.15)"
              }}>
                <div style={{ flex: "1 1 400px" }}>
                  <div style={{ width: "56px", height: "56px", background: "rgba(245,158,11,0.1)", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                    <Bot size={26} color="#F59E0B" />
                  </div>
                  <h3 style={{ fontSize: "1.7rem", fontWeight: 800, marginBottom: "1rem", color: "var(--text)" }}>AI Layering</h3>
                  <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                    This is where modernisation meets intelligence. We layer AI agents on top of your existing business systems. An AI agent that reads incoming emails and creates CRM records. A copilot that summarises customer history before a sales call. An automation that categorises support tickets and routes them to the right team. <strong style={{ color: "var(--text)" }}>AI does not require a new system. It enhances the system you already have.</strong>
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                    {["Email-to-CRM AI", "Sales Copilot", "Ticket Categorisation", "Claude AI", "n8n Orchestration"].map((tag, i) => (
                      <span key={i} style={{ padding: "0.4rem 1rem", background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.25)", borderRadius: "50px", fontSize: "0.85rem", fontWeight: 600, color: "var(--text)" }}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div style={{ flex: "1 1 260px", minHeight: "280px", borderRadius: "20px", position: "relative", overflow: "hidden", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <Image src="/images/ai-layering.png" alt="AI Layering on Business Systems" fill style={{ objectFit: "cover" }} />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══ SECTION 3: ZOHO PREMIUM PARTNER ══════════════════════════════ */}
        <section className="section" style={{ background: "var(--bg)" }}>
          <div className="container">
            <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
              <div className="section-label">Partnership</div>
              <h2 className="section-title" style={{ maxWidth: "800px", margin: "0 auto 0 auto" }}>
                Zoho Premium Partner
              </h2>
            </div>

            {/* Award highlight strip */}
            <div className="reveal" style={{
              display: "flex", flexWrap: "wrap", gap: "2rem", alignItems: "center",
              background: "var(--card-bg)", padding: "2.5rem 3rem", borderRadius: "24px",
              border: "1px solid var(--border)", marginBottom: "4rem"
            }}>
              <div style={{ flex: "0 0 80px", height: "80px", position: "relative" }}>
                <Image src="/images/zoho-logo-nobg.png" alt="Zoho" fill style={{ objectFit: "contain", filter: "brightness(1.2)" }} />
              </div>
              <div style={{ flex: "1 1 400px" }}>
                <p style={{ fontSize: "1.05rem", color: "var(--text)", lineHeight: 1.8 }}>
                  FI Digital is one of Australia's leading Zoho Premium Partners with more than <strong>200 projects delivered since 2018</strong>. We hold the <strong>Zoho Innovator of the Year</strong> award and our team includes certified consultants across CRM, Books, Inventory, Creator, Desk, and People. Our existing Zoho service pages provide detailed information on each module.
                </p>
              </div>
            </div>

            {/* 8 Zoho Page Links */}
            <div className="reveal" style={{ marginBottom: "2rem", textAlign: "center" }}>
              <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", marginBottom: "2rem" }}>
                Visit our dedicated Zoho service pages for specific module information:
              </p>
            </div>

            <div className="zoho-links-grid" style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem"
            }}>
              {ZOHO_PAGES.map((page, i) => (
                <Link key={i} href={page.href} className="zoho-link-card" style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "1.25rem 1.5rem",
                  background: "var(--card-bg)", borderRadius: "12px",
                  border: "1px solid var(--border)",
                  textDecoration: "none", color: "var(--text)", fontWeight: 600,
                  fontSize: "0.97rem"
                }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <CheckCircle2 size={18} color="var(--primary)" style={{ minWidth: "18px" }} />
                    {page.label}
                  </span>
                  <ArrowRight size={16} color="var(--text-muted)" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ══ FAQ SECTION ═══════════════════════════════════════════════════ */}
        <section className="section" style={{ background: "var(--bg-secondary)" }}>
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
                    <span style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text)", flex: 1 }}>{faq.q}</span>
                    <ChevronDown
                      size={20}
                      color="var(--text-muted)"
                      style={{ minWidth: "20px", transform: openFaq === i ? "rotate(180deg)" : "rotate(0)", transition: "0.3s" }}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="faq-answer" style={{ padding: "0 2rem 1.75rem 2rem", borderTop: "1px solid var(--border)" }}>
                      <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.8, paddingTop: "1.25rem" }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CTA FOOTER BAND ═══════════════════════════════════════════════ */}
        <section className="section" style={{
          background: "linear-gradient(135deg, rgba(29,78,216,0.1) 0%, rgba(16,185,129,0.08) 100%)",
          borderTop: "1px solid var(--border)"
        }}>
          <div className="container" style={{ textAlign: "center" }}>
            <div className="reveal">
              <h2 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 800, marginBottom: "1.25rem" }}>
                Ready to modernise your business systems?
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", maxWidth: "600px", margin: "0 auto 2.5rem auto", lineHeight: 1.7 }}>
                Book a free systems modernisation assessment. We will audit your current setup and show you exactly where the quick wins are.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
                <Link href="/book-discovery" style={{
                  background: "var(--primary)", color: "#fff", padding: "1rem 2.25rem",
                  borderRadius: "8px", fontWeight: 600, textDecoration: "none",
                  display: "inline-flex", alignItems: "center", gap: "0.5rem"
                }}>
                  Book a Systems Modernisation Assessment <ArrowRight size={18} />
                </Link>
                <Link href="/zoho-consultants" style={{
                  background: "transparent", color: "var(--text)", padding: "1rem 2.25rem",
                  borderRadius: "8px", fontWeight: 600, textDecoration: "none",
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  border: "1px solid var(--border)"
                }}>
                  Explore Our Zoho Services <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
