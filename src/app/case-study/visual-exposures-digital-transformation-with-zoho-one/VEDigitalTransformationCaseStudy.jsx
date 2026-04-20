"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Zap, BarChart3, Shield, DollarSign, Clock, CheckCircle, Users, Layers } from "lucide-react";

const C = "#F59E0B";

const businessUnits = [
  { name: "Visual Exposure (VE)", desc: "Physical signage — design, fabrication, and installation of pylon signs, corporate branding, and illuminated displays." },
  { name: "Visual Technologies (VT)", desc: "Digital signage, commercial lighting, and cutting-edge electrical installations." },
  { name: "WeFab Signs (WFS)", desc: "Manufacturing hub producing physical signboards and components for VE and VT." },
];

const challenges = [
  { icon: <Layers size={20}/>, title: "Fragmented Systems", desc: "Sugar CRM, SAASU, and Google Sheets created data silos — scattered leads, quotes, and jobs made collaboration difficult.", color: "#EF4444" },
  { icon: <Clock size={20}/>, title: "Manual Bottlenecks", desc: "Lead categorisation, quote management, inventory checks, and task assignments were all manual — slow and error-prone.", color: "#F97316" },
  { icon: <Shield size={20}/>, title: "Compliance Pressures", desc: "Handling SWMS and safety documentation manually risked delays and potential non-compliance across installation teams.", color: "#8B5CF6" },
  { icon: <Users size={20}/>, title: "Customer Experience Gaps", desc: "Clients expected real-time updates and seamless communication — impossible with the fragmented existing setup.", color: "#F59E0B" },
];

const zohoApps = [
  {
    tool: "Zoho CRM", color: "#F59E0B",
    desc: "Centralised all customer, lead, quote, and project data. Website forms auto-sync leads; all interactions, invoices, and compliance docs in one source of truth.",
  },
  {
    tool: "Zoho Creator", color: "#8B5CF6",
    desc: "Custom Manufacturing ERP for tracking Fab Tasks, Design Tasks, and Install Tasks across VE, VT, and WFS. Automated SWMS generation and pre/post job checklists.",
  },
  {
    tool: "Zoho Books", color: "#10B981",
    desc: "Invoices auto-generated on deal close. Customer-specific payment terms, credit limit monitoring, and real-time aging summaries for healthy cash flow.",
  },
  {
    tool: "Zoho Analytics", color: "#3B82F6",
    desc: "Custom dashboards tracking lead conversion, quote statuses, job profitability, inventory levels, and project timelines for data-driven decisions.",
  },
  {
    tool: "Zoho Surveys", color: "#EC4899",
    desc: "Post-installation feedback collected automatically. Negative responses trigger task assignment for prompt resolution and continuous improvement.",
  },
  {
    tool: "Google Integrations", color: "#6B7280",
    desc: "Google Address Finder for accurate data entry. Google WorkDrive organises artwork, contracts, and safety records in structured folders linked to CRM records.",
  },
];

const workflows = [
  { step: "Lead Captured", desc: "Zoho Forms on website auto-syncs into CRM. Leads categorised by type (signage/petroleum) and assigned automatically." },
  { step: "Quote Approved", desc: "Automated review, approval, and follow-up. Orders, jobs, and purchase requests created on acceptance." },
  { step: "Job Created in Creator", desc: "Deal marked Won → job auto-created in Zoho Creator. Tasks assigned to managers who delegate to teams." },
  { step: "Tasks Completed", desc: "Pre/post job checklists enforced. Tasks need approval before closure. SWMS auto-generated and stored." },
  { step: "Invoice Generated", desc: "Zoho Books auto-generates invoice with correct payment terms, due dates, and credit limits applied." },
  { step: "Feedback Collected", desc: "Zoho Survey sent post-installation. Responses analysed; negative feedback auto-assigns resolution tasks." },
];

const results = [
  { icon: <Zap size={24}/>, label: "60%", sub: "Manual Workflows Reduced", color: "#F59E0B" },
  { icon: <Clock size={24}/>, label: "40%", sub: "Faster Lead-to-Deal", color: "#10B981" },
  { icon: <Shield size={24}/>, label: "50%", sub: "Compliance Delays Cut", color: "#8B5CF6" },
  { icon: <DollarSign size={24}/>, label: "25%", sub: "Operational Cost Savings", color: "#3B82F6" },
  { icon: <BarChart3 size={24}/>, label: "30%", sub: "Faster Payment Collection", color: "#EC4899" },
  { icon: <CheckCircle size={24}/>, label: "20%", sub: "Better Decision-Making", color: "#F97316" },
];

export default function VEDigitalTransformationCaseStudy() {
  return (
    <div style={{ background: "var(--bg)", color: "var(--text)", paddingTop: "var(--header-h)" }}>

      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg,#1c1006 0%,#3d2100 60%,#1c1006 100%)", padding: "clamp(80px,10vh,140px) 1.5rem 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(245,158,11,0.07) 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
        <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle,rgba(245,158,11,0.13) 0%,transparent 70%)" }} />

        <div className="container" style={{ maxWidth: "1280px", position: "relative", zIndex: 1 }}>
          <Link href="/case-studies" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "rgba(255,255,255,0.5)", fontWeight: 600, textDecoration: "none", fontSize: "0.85rem", marginBottom: "3rem" }}>
            <ArrowLeft size={15} /> All Case Studies
          </Link>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "4rem", alignItems: "end", paddingBottom: "4rem" }}>
            <div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "2rem" }}>
                {["Zoho One", "Signage & Manufacturing", "ERP", "3 Business Units"].map(t => (
                  <span key={t} style={{ background: "rgba(245,158,11,0.14)", border: "1px solid rgba(245,158,11,0.28)", color: "#FDE68A", padding: "0.3rem 1rem", borderRadius: "50px", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "1px", textTransform: "uppercase" }}>{t}</span>
                ))}
              </div>
              <h1 style={{ fontSize: "clamp(2rem,5vw,3.6rem)", fontWeight: 900, lineHeight: 1.1, color: "#fff", letterSpacing: "-0.025em", marginBottom: "2rem" }}>
                <span style={{ color: "#FCD34D" }}>Visual Exposure's</span><br />Digital Transformation<br />with Zoho One
              </h1>
              <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, maxWidth: "600px" }}>
                Three business units, five legacy systems replaced, and a fully automated signage ERP — built on Zoho One in partnership with FI Digital.
              </p>
              <div style={{ display: "flex", gap: "2.5rem", marginTop: "3rem", flexWrap: "wrap" }}>
                {[{ v: "60%", l: "Manual Work Reduced" }, { v: "3", l: "Business Units Unified" }, { v: "25%", l: "Cost Savings" }].map(s => (
                  <div key={s.l} style={{ borderLeft: `3px solid ${C}`, paddingLeft: "1rem" }}>
                    <div style={{ fontSize: "1.7rem", fontWeight: 900, color: "#fff" }}>{s.v}</div>
                    <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", fontWeight: 600 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "24px", padding: "2.5rem", backdropFilter: "blur(12px)" }}>
              <div style={{ background: "rgba(255,255,255,0.96)", borderRadius: "16px", height: "100px", position: "relative", marginBottom: "1.5rem", overflow: "hidden" }}>
                <Image src="/images/Case-Study/Visual-expo1.png" alt="Visual Exposure" fill style={{ objectFit: "contain", padding: "10px 16px" }} />
              </div>
              {[{ label: "Client", value: "Visual Exposure" }, { label: "Industry", value: "Signage & Manufacturing" }, { label: "Solution", value: "Zoho One" }, { label: "Partner", value: "FI Digital" }].map(r => (
                <div key={r.label} style={{ display: "flex", justifyContent: "space-between", padding: "0.6rem 0", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                  <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>{r.label}</span>
                  <span style={{ fontSize: "0.85rem", color: "#fff", fontWeight: 700 }}>{r.value}</span>
                </div>
              ))}
              <Link href="/contact" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", background: C, color: "#1c1006", padding: "0.85rem 1.5rem", borderRadius: "100px", fontWeight: 800, textDecoration: "none", fontSize: "0.9rem", marginTop: "1.5rem" }}>
                Start Your Journey <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS UNITS + ABOUT */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg-secondary)" }}>
        <div className="container" style={{ maxWidth: "1280px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                <div style={{ width: "3px", height: "40px", background: `linear-gradient(${C},#f97316)`, borderRadius: "2px" }} />
                <div style={{ fontSize: "0.7rem", fontWeight: 800, color: C, textTransform: "uppercase", letterSpacing: "3px" }}>About Visual Exposure</div>
              </div>
              <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.9 }}>
                <strong style={{ color: "var(--text)" }}>Visual Exposure (VE)</strong> is a trusted leader in signage and visual technologies — from towering pylon signs to sleek corporate branding, illuminated displays, and dynamic digital signage. As the business grew across three distinct units, their existing tools began to create more problems than they solved.
              </p>
            </div>
            <div>
              <div style={{ fontSize: "0.7rem", fontWeight: 800, color: C, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "1.25rem" }}>Three Business Units, One Platform</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {businessUnits.map((u, i) => (
                  <div key={i} style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "14px", padding: "1.25rem 1.5rem", borderLeft: `4px solid ${C}` }}>
                    <div style={{ fontSize: "0.92rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.35rem" }}>{u.name}</div>
                    <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.65 }}>{u.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div className="container" style={{ maxWidth: "1280px" }}>
          <div style={{ marginBottom: "4rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: "50px", padding: "0.4rem 1.2rem", marginBottom: "1.5rem" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#EF4444" }} />
              <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#EF4444", textTransform: "uppercase", letterSpacing: "2px" }}>The Challenges</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, lineHeight: 1.15 }}>When Success<br /><span style={{ color: "#EF4444" }}>Outgrew the Systems</span></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1.5rem" }}>
            {challenges.map((c, i) => (
              <div key={i} style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: "20px", padding: "2.25rem", display: "grid", gridTemplateColumns: "auto 1fr", gap: "1.5rem", alignItems: "flex-start", borderLeft: `4px solid ${c.color}` }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "13px", background: `${c.color}12`, color: c.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{c.icon}</div>
                <div>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 800, marginBottom: "0.65rem", color: "var(--text)" }}>{c.title}</h3>
                  <p style={{ fontSize: "0.93rem", color: "var(--text-muted)", lineHeight: 1.75 }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZOHO APPS */}
      <section style={{ padding: "100px 1.5rem", background: "linear-gradient(180deg,#1c1006 0%,#3d2100 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(245,158,11,0.05) 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="container" style={{ maxWidth: "1100px", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.2)", borderRadius: "50px", padding: "0.4rem 1.2rem", marginBottom: "1.5rem" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: C }} />
              <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#FDE68A", textTransform: "uppercase", letterSpacing: "2px" }}>The Solution</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, color: "#fff", lineHeight: 1.15 }}>
              Zoho One — A Unified ERP<br /><span style={{ color: "#FCD34D" }}>for All Three Business Units</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.25rem" }}>
            {zohoApps.map((s, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "18px", padding: "2rem", borderTop: `3px solid ${s.color}` }}>
                <div style={{ display: "inline-flex", background: `${s.color}18`, border: `1px solid ${s.color}33`, borderRadius: "50px", padding: "0.3rem 0.9rem", marginBottom: "1.25rem" }}>
                  <span style={{ fontSize: "0.7rem", fontWeight: 800, color: s.color }}>{s.tool}</span>
                </div>
                <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.75 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div className="container" style={{ maxWidth: "1100px" }}>
          <div style={{ marginBottom: "3rem" }}>
            <div style={{ fontSize: "0.7rem", fontWeight: 800, color: C, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "0.75rem" }}>End-to-End Automated Workflow</div>
            <h2 style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)", fontWeight: 900, lineHeight: 1.2 }}>From Lead to Invoice —<br /><span style={{ color: C }}>Zero Manual Steps</span></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.25rem" }}>
            {workflows.map((w, i) => (
              <div key={i} style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "16px", padding: "1.75rem", position: "relative" }}>
                <div style={{ position: "absolute", top: "-1px", left: "1.75rem", background: C, color: "#1c1006", fontSize: "0.65rem", fontWeight: 900, padding: "0.2rem 0.75rem", borderRadius: "0 0 8px 8px", letterSpacing: "0.5px" }}>STEP {i + 1}</div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.6rem", marginTop: "0.5rem" }}>{w.step}</h3>
                <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.7 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS — 6-stat bento */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div className="container" style={{ maxWidth: "1100px" }}>
          <div style={{ marginBottom: "4rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", background: `${C}10`, border: `1px solid ${C}28`, borderRadius: "50px", padding: "0.4rem 1.2rem", marginBottom: "1.5rem" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: C }} />
              <span style={{ fontSize: "0.75rem", fontWeight: 800, color: C, textTransform: "uppercase", letterSpacing: "2px" }}>The Results</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, lineHeight: 1.15 }}>Measurable Impact<br /><span style={{ color: C }}>Across Every Metric</span></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.25rem" }}>
            {results.map((r, i) => (
              <div key={i} style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: "20px", padding: "2.25rem", position: "relative", overflow: "hidden", textAlign: "center" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: `linear-gradient(90deg,${r.color},${r.color}44)` }} />
                <div style={{ width: "50px", height: "50px", borderRadius: "14px", background: `${r.color}12`, color: r.color, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem" }}>{r.icon}</div>
                <div style={{ fontSize: "2.5rem", fontWeight: 900, color: r.color, lineHeight: 1 }}>{r.label}</div>
                <div style={{ fontSize: "0.88rem", color: "var(--text-muted)", marginTop: "0.5rem", fontWeight: 600 }}>{r.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 1.5rem", background: "linear-gradient(135deg,#78350f 0%,#92400e 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.07, backgroundImage: "radial-gradient(white 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="container" style={{ maxWidth: "800px", textAlign: "center", position: "relative", zIndex: 1 }}>
          <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, color: "#fff", marginBottom: "1.5rem", lineHeight: 1.2 }}>
            Ready to Unify Your<br />Multi-Unit Operations?
          </h2>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.88)", lineHeight: 1.85, marginBottom: "3rem", maxWidth: "640px", margin: "0 auto 3rem" }}>
            FI Digital specialises in Zoho One ERP implementations for complex, multi-brand manufacturers and service businesses — delivering unified platforms that automate workflows end-to-end.
          </p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem" }}>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#fff", color: "#78350f", padding: "1rem 2.5rem", borderRadius: "100px", fontWeight: 800, textDecoration: "none", fontSize: "1rem", boxShadow: "0 12px 30px rgba(0,0,0,0.2)" }}>
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
          section > div > div[style*="grid-template-columns: repeat(3,1fr)"],
          section > div > div[style*="grid-template-columns: 200px 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
