"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Zap, Users, BarChart3, Globe, Layers, GitMerge, CheckCircle, Database } from "lucide-react";

const C = "#3B82F6";

const salesChallenges = [
  { title: "Sales Inefficiencies", desc: "Lack of streamlined processes made qualifying and managing leads difficult across AU and UK regions.", color: "#EF4444" },
  { title: "Disjointed Systems", desc: "CRM, Xero, and Braze were not integrated — causing manual data entry and cross-platform delays.", color: "#F97316" },
  { title: "Regional Data Silos", desc: "UK and AU entities managed sales data separately, creating visibility gaps and duplication.", color: "#8B5CF6" },
];

const supportChallenges = [
  { title: "Support Bottlenecks", desc: "No centralized ticketing system limited timely resolutions and knowledge base development.", color: "#F59E0B" },
  { title: "Limited Automation", desc: "Manual task assignments and follow-ups consumed valuable team time and reduced productivity.", color: "#EC4899" },
  { title: "Scalability Concerns", desc: "Existing processes couldn't handle growing inquiry volumes as the customer base expanded.", color: "#14B8A6" },
];

const integrations = [
  { name: "Braze", color: "#EC4899", desc: "Customer engagement integration — seamless data flow for cross-sell/up-sell automation journeys." },
  { name: "Xero", color: "#10B981", desc: "Quote creation in Zoho CRM with automated Invoice sync to Xero — real-time, error-free financials." },
  { name: "Segment CDP", color: "#8B5CF6", desc: "360-degree customer view via enriched data from multiple sources into Zoho CRM Lead scoring." },
  { name: "Zoho Desk", color: "#3B82F6", desc: "Centralized ticketing, knowledge base, and automated prioritization for global support teams." },
];

const results = [
  { icon: <Zap size={26}/>, label: "60% Less Manual Work", desc: "Workflow automation reduced manual sales tasks by 60%, letting teams focus on closing deals.", color: "#3B82F6" },
  { icon: <BarChart3 size={26}/>, label: "50% Faster Invoicing", desc: "Automated Quote-to-Invoice workflows reduced processing time by 50% with error-free Xero sync.", color: "#10B981" },
  { icon: <Globe size={26}/>, label: "Unified AU + UK Ops", desc: "Consolidated sales data across regions delivered real-time visibility and cross-team collaboration.", color: "#8B5CF6" },
  { icon: <Users size={26}/>, label: "Scalable Support", desc: "Automated ticket routing, categorization, and a global knowledge base improved customer satisfaction.", color: "#F59E0B" },
];

const phases = [
  { num: "01", color: "#3B82F6", label: "Requirement Analysis", desc: "Workshops with sales and support teams to map workflows, pain points, and integration needs with Xero and Braze." },
  { num: "02", color: "#10B981", label: "Configuration & Customisation", desc: "Zoho CRM and Desk configured with regional customisations, global visibility, and tested integrations." },
  { num: "03", color: "#8B5CF6", label: "Data Cleanup & Migration", desc: "Merged duplicates, corrected incomplete records, and standardised formats before import into Zoho CRM." },
  { num: "04", color: "#F59E0B", label: "Testing & Phased Rollout", desc: "Pilot group rollout with feedback cycles, then full-scale deployment after extensive end-to-end testing." },
  { num: "05", color: "#EC4899", label: "Training & Ongoing Support", desc: "Tailored training for sales and support teams with ongoing post-deployment refinements and support." },
];

export default function DrovaSalesSupportCaseStudy() {
  return (
    <div style={{ background: "var(--bg)", color: "var(--text)", paddingTop: "var(--header-h)" }}>

      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg,#060d1f 0%,#0d1f40 60%,#060d1f 100%)", padding: "clamp(80px,10vh,140px) 1.5rem 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(59,130,246,0.07) 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
        <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle,rgba(59,130,246,0.13) 0%,transparent 70%)" }} />

        <div className="container" style={{ maxWidth: "1280px", position: "relative", zIndex: 1 }}>
          <Link href="/case-studies" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "rgba(255,255,255,0.5)", fontWeight: 600, textDecoration: "none", fontSize: "0.85rem", marginBottom: "3rem" }}>
            <ArrowLeft size={15} /> All Case Studies
          </Link>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "4rem", alignItems: "end", paddingBottom: "4rem" }}>
            <div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "2rem" }}>
                {["Zoho CRM Plus", "SaaS", "Sales & Support", "Multi-Region"].map(t => (
                  <span key={t} style={{ background: "rgba(59,130,246,0.14)", border: "1px solid rgba(59,130,246,0.28)", color: "#93C5FD", padding: "0.3rem 1rem", borderRadius: "50px", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "1px", textTransform: "uppercase" }}>{t}</span>
                ))}
              </div>
              <h1 style={{ fontSize: "clamp(2rem,5vw,3.6rem)", fontWeight: 900, lineHeight: 1.1, color: "#fff", letterSpacing: "-0.025em", marginBottom: "2rem" }}>
                Enhancing <span style={{ color: "#60A5FA" }}>Drova's</span> Sales &<br />Support Processes<br />with Zoho Solutions
              </h1>
              <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, maxWidth: "600px" }}>
                A cloud data protection SaaS company unifies AU + UK sales operations, automates support workflows, and integrates Xero, Braze, and Segment — all within Zoho CRMPlus.
              </p>
              <div style={{ display: "flex", gap: "2.5rem", marginTop: "3rem", flexWrap: "wrap" }}>
                {[{ v: "60%", l: "Less Manual Work" }, { v: "50%", l: "Faster Invoicing" }, { v: "2", l: "Regions Unified (AU+UK)" }].map(s => (
                  <div key={s.l} style={{ borderLeft: `3px solid ${C}`, paddingLeft: "1rem" }}>
                    <div style={{ fontSize: "1.7rem", fontWeight: 900, color: "#fff" }}>{s.v}</div>
                    <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", fontWeight: 600 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "24px", padding: "2.5rem", backdropFilter: "blur(12px)" }}>
              <div style={{ background: "rgba(255,255,255,0.96)", borderRadius: "16px", height: "100px", position: "relative", marginBottom: "1.5rem", overflow: "hidden" }}>
                <Image src="/images/Case-Study/Drova1.png" alt="Drova" fill sizes="(max-width: 768px) 40vw, 200px" style={{ objectFit: "contain", padding: "10px 16px" }} />
              </div>
              {[{ label: "Client", value: "Drova" }, { label: "Industry", value: "Cloud Data Protection" }, { label: "Solution", value: "Zoho CRM Plus" }, { label: "Regions", value: "Australia & UK" }].map(r => (
                <div key={r.label} style={{ display: "flex", justifyContent: "space-between", padding: "0.6rem 0", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                  <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>{r.label}</span>
                  <span style={{ fontSize: "0.85rem", color: "#fff", fontWeight: 700 }}>{r.value}</span>
                </div>
              ))}
              <Link href="/contact" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", background: C, color: "#fff", padding: "0.85rem 1.5rem", borderRadius: "100px", fontWeight: 800, textDecoration: "none", fontSize: "0.9rem", marginTop: "1.5rem" }}>
                Start Your Journey <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg-secondary)" }}>
        <div className="container" style={{ maxWidth: "1100px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "4rem", alignItems: "center" }}>
            <div>
              <div style={{ width: "3px", height: "60px", background: `linear-gradient(${C},#6366F1)`, borderRadius: "2px", marginBottom: "1.25rem" }} />
              <div style={{ fontSize: "0.7rem", fontWeight: 800, color: C, textTransform: "uppercase", letterSpacing: "3px" }}>About Drova</div>
            </div>
            <p style={{ fontSize: "clamp(1.05rem,2vw,1.2rem)", color: "var(--text-muted)", lineHeight: 1.9 }}>
              <strong style={{ color: "var(--text)" }}>Drova</strong> specializes in cloud-based data protection and management — offering data backup, disaster recovery, and secure storage for businesses seeking robust, scalable strategies. Their solutions are user-friendly, cost-effective, and designed to evolve with modern enterprise needs.
            </p>
          </div>
        </div>
      </section>

      {/* CHALLENGES — split sales + support */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div className="container" style={{ maxWidth: "1280px" }}>
          <div style={{ marginBottom: "4rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: "50px", padding: "0.4rem 1.2rem", marginBottom: "1.5rem" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#EF4444" }} />
              <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#EF4444", textTransform: "uppercase", letterSpacing: "2px" }}>The Challenges</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, lineHeight: 1.15 }}>Fragmented Tools,<br /><span style={{ color: "#EF4444" }}>Inefficient Workflows</span></h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
            {/* Sales */}
            <div>
              <div style={{ fontSize: "0.75rem", fontWeight: 800, color: C, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <div style={{ width: "24px", height: "2px", background: C }} /> Sales Process
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {salesChallenges.map((c, i) => (
                  <div key={i} style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: "16px", padding: "1.75rem", borderLeft: `4px solid ${c.color}` }}>
                    <h3 style={{ fontSize: "1rem", fontWeight: 800, marginBottom: "0.6rem", color: "var(--text)" }}>{c.title}</h3>
                    <p style={{ fontSize: "0.93rem", color: "var(--text-muted)", lineHeight: 1.7 }}>{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Support */}
            <div>
              <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "#10B981", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <div style={{ width: "24px", height: "2px", background: "#10B981" }} /> Customer Support
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {supportChallenges.map((c, i) => (
                  <div key={i} style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: "16px", padding: "1.75rem", borderLeft: `4px solid ${c.color}` }}>
                    <h3 style={{ fontSize: "1rem", fontWeight: 800, marginBottom: "0.6rem", color: "var(--text)" }}>{c.title}</h3>
                    <p style={{ fontSize: "0.93rem", color: "var(--text-muted)", lineHeight: 1.7 }}>{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION — integrations + phases */}
      <section style={{ padding: "100px 1.5rem", background: "linear-gradient(180deg,#060d1f 0%,#0d1f40 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(59,130,246,0.05) 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="container" style={{ maxWidth: "1100px", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)", borderRadius: "50px", padding: "0.4rem 1.2rem", marginBottom: "1.5rem" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: C }} />
              <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#93C5FD", textTransform: "uppercase", letterSpacing: "2px" }}>The Solution</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, color: "#fff", lineHeight: 1.15 }}>
              Zoho CRMPlus — Fully Integrated<br /><span style={{ color: "#60A5FA" }}>Across Sales, Support & Finance</span>
            </h2>
          </div>

          {/* Integrations */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1.25rem", marginBottom: "3rem" }}>
            {integrations.map((s, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "18px", padding: "2rem", borderTop: `3px solid ${s.color}` }}>
                <div style={{ display: "inline-flex", background: `${s.color}18`, border: `1px solid ${s.color}33`, borderRadius: "50px", padding: "0.3rem 0.9rem", marginBottom: "1.25rem" }}>
                  <span style={{ fontSize: "0.7rem", fontWeight: 800, color: s.color }}>{s.name}</span>
                </div>
                <p style={{ fontSize: "0.93rem", color: "rgba(255,255,255,0.68)", lineHeight: 1.75 }}>{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Phases */}
          <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "2.5rem", borderTop: `3px solid ${C}` }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#fff", marginBottom: "2rem" }}>5-Phase Implementation</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: "1rem" }}>
              {phases.map((p, i) => (
                <div key={i}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: `${p.color}18`, border: `1px solid ${p.color}44`, display: "flex", alignItems: "center", justifyContent: "center", color: p.color, fontWeight: 900, fontSize: "0.75rem", marginBottom: "0.85rem" }}>{p.num}</div>
                  <div style={{ fontSize: "0.82rem", fontWeight: 800, color: "#fff", marginBottom: "0.4rem", lineHeight: 1.3 }}>{p.label}</div>
                  <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div className="container" style={{ maxWidth: "1280px" }}>
          <div style={{ marginBottom: "4rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", background: `${C}10`, border: `1px solid ${C}28`, borderRadius: "50px", padding: "0.4rem 1.2rem", marginBottom: "1.5rem" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: C }} />
              <span style={{ fontSize: "0.75rem", fontWeight: 800, color: C, textTransform: "uppercase", letterSpacing: "2px" }}>The Results</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, lineHeight: 1.15 }}>Tangible Improvements<br /><span style={{ color: C }}>Across Every Team</span></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1.5rem" }}>
            {results.map((r, i) => (
              <div key={i} style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: "20px", padding: "2.5rem", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: `linear-gradient(90deg,${r.color},${r.color}44)` }} />
                <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: `${r.color}12`, color: r.color, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>{r.icon}</div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "0.85rem", color: "var(--text)" }}>{r.label}</h3>
                <p style={{ fontSize: "0.97rem", color: "var(--text-muted)", lineHeight: 1.75 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 1.5rem", background: "linear-gradient(135deg,#1d4ed8 0%,#6366F1 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.07, backgroundImage: "radial-gradient(white 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="container" style={{ maxWidth: "800px", textAlign: "center", position: "relative", zIndex: 1 }}>
          <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, color: "#fff", marginBottom: "1.5rem", lineHeight: 1.2 }}>
            Ready to Unify Your Sales<br />&amp; Support Operations?
          </h2>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.88)", lineHeight: 1.85, marginBottom: "3rem", maxWidth: "640px", margin: "0 auto 3rem" }}>
            FI Digital specializes in Zoho CRMPlus implementations for SaaS and tech companies — delivering integrated, automated, and scalable sales and support systems across regions.
          </p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem" }}>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#fff", color: "#1d4ed8", padding: "1rem 2.5rem", borderRadius: "100px", fontWeight: 800, textDecoration: "none", fontSize: "1rem", boxShadow: "0 12px 30px rgba(0,0,0,0.2)" }}>
              Book a Consultation <ArrowUpRight size={18} />
            </Link>
            <Link href="/case-studies" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(255,255,255,0.14)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", padding: "1rem 2.5rem", borderRadius: "100px", fontWeight: 700, textDecoration: "none", fontSize: "1rem", backdropFilter: "blur(8px)" }}>
              More Case Studies
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 900px) {
          section > div > div[style*="grid-template-columns: 1fr 320px"],
          section > div > div[style*="grid-template-columns: 1fr 1fr"],
          section > div > div[style*="grid-template-columns: repeat(2,1fr)"],
          section > div > div[style*="grid-template-columns: repeat(5,1fr)"],
          section > div > div[style*="grid-template-columns: 200px 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
