"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Zap, Shield, BarChart3, DollarSign, Globe, Lock, FileCheck, CreditCard } from "lucide-react";

const C = "#EC4899";

const challenges = [
  { icon: <DollarSign size={20}/>, title: "High Custom Software Costs", desc: "InVision Software incurred significant ongoing costs for development, implementation, and maintenance with no clear ROI path.", color: "#EF4444" },
  { icon: <Globe size={20}/>, title: "Fragmented Systems", desc: "No integration between InVision, Proviso, Equifax, and email platforms — creating data silos and operational inefficiencies.", color: "#F97316" },
  { icon: <Lock size={20}/>, title: "Compliance Challenges", desc: "Australian financial regulations required secure documentation of all customer interactions and comprehensive audit trails.", color: "#8B5CF6" },
  { icon: <FileCheck size={20}/>, title: "Manual Data Tracking", desc: "Applicant data and interactions tracked manually — labor-intensive, error-prone, and unscalable without automation.", color: "#F59E0B" },
];

const integrations = [
  { name: "Proviso", color: "#EC4899", desc: "Automatic sync of applicant financial data (income & expenses) with CRM lead records, plus report attachments for full insights." },
  { name: "Equifax", color: "#8B5CF6", desc: "Real-time credit checks during the compliance stage — enabling swift, informed lending decisions without leaving Zoho CRM." },
  { name: "G-Suite IMAP", color: "#3B82F6", desc: "Complete email interaction tracking with applicants — ensuring every communication is logged for compliance and CRM records." },
  { name: "Zoho Social", color: "#10B981", desc: "Lead capture directly from Facebook and Instagram — consolidating all lead sources into a single pipeline for better tracking." },
];

const solutions = [
  { label: "Zoho CRM Customisation", color: C, desc: "Centralised all applicant data, financial records, communication history, and application statuses in real time. Automated lead assignment by applicant profile." },
  { label: "Web Forms & E-Signature", color: "#8B5CF6", desc: "Tailored loan application and privacy consent forms integrated with Zoho CRM. Digital e-signature captures applicant consent to meet regulatory requirements." },
  { label: "Workflow Automation", color: "#3B82F6", desc: "Automated lead-to-deal conversion, document requests, and compliance checks. Triggered task assignment and email notifications on lead status changes." },
  { label: "Data Encryption & Audit Trails", color: "#10B981", desc: "Zoho CRM data encryption safeguards sensitive information. Centralised documentation and audit trails ensure full transparency and compliance." },
];

const results = [
  { icon: <Zap size={26}/>, label: "70% Faster Processing", desc: "Loan application processing time reduced by 70% through workflow automations and seamless third-party integrations.", color: C },
  { icon: <Shield size={26}/>, label: "Full Regulatory Compliance", desc: "Secure encryption, e-signatures, and comprehensive audit trails ensure adherence to Australian financial lending standards.", color: "#8B5CF6" },
  { icon: <CreditCard size={26}/>, label: "Significant Cost Savings", desc: "Replaced expensive custom InVision software with Zoho One at a fraction of the cost — without losing capability.", color: "#10B981" },
  { icon: <BarChart3 size={26}/>, label: "Higher Customer Satisfaction", desc: "Faster response times and user-friendly web forms led to improved applicant experience and stronger retention rates.", color: "#F59E0B" },
];

export default function ResponsiveLendingCaseStudy() {
  return (
    <div style={{ background: "var(--bg)", color: "var(--text)", paddingTop: "var(--header-h)" }}>

      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg,#1a0011 0%,#3d0030 60%,#1a0011 100%)", padding: "clamp(80px,10vh,140px) 1.5rem 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(236,72,153,0.07) 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
        <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle,rgba(236,72,153,0.13) 0%,transparent 70%)" }} />

        <div className="container" style={{ maxWidth: "1280px", position: "relative", zIndex: 1 }}>
          <Link href="/case-studies" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "rgba(255,255,255,0.5)", fontWeight: 600, textDecoration: "none", fontSize: "0.85rem", marginBottom: "3rem" }}>
            <ArrowLeft size={15} /> All Case Studies
          </Link>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "4rem", alignItems: "end", paddingBottom: "4rem" }}>
            <div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "2rem" }}>
                {["Zoho One", "Financial Lending", "Compliance", "FinTech"].map(t => (
                  <span key={t} style={{ background: "rgba(236,72,153,0.14)", border: "1px solid rgba(236,72,153,0.28)", color: "#FBCFE8", padding: "0.3rem 1rem", borderRadius: "50px", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "1px", textTransform: "uppercase" }}>{t}</span>
                ))}
              </div>
              <h1 style={{ fontSize: "clamp(2rem,5vw,3.6rem)", fontWeight: 900, lineHeight: 1.1, color: "#fff", letterSpacing: "-0.025em", marginBottom: "2rem" }}>
                Transforming <span style={{ color: "#F472B6" }}>Responsive Lending's</span><br />Operations with Zoho One
              </h1>
              <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, maxWidth: "600px" }}>
                An Australian financial lender replaces costly custom software with a fully integrated, compliant Zoho One platform — cutting loan processing time by 70% and meeting strict regulatory requirements.
              </p>
              <div style={{ display: "flex", gap: "2.5rem", marginTop: "3rem", flexWrap: "wrap" }}>
                {[{ v: "70%", l: "Faster Processing" }, { v: "4", l: "Integrations Deployed" }, { v: "100%", l: "Compliance Achieved" }].map(s => (
                  <div key={s.l} style={{ borderLeft: `3px solid ${C}`, paddingLeft: "1rem" }}>
                    <div style={{ fontSize: "1.7rem", fontWeight: 900, color: "#fff" }}>{s.v}</div>
                    <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", fontWeight: 600 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "24px", padding: "2.5rem", backdropFilter: "blur(12px)" }}>
              <div style={{ background: "rgba(255,255,255,0.96)", borderRadius: "16px", height: "100px", position: "relative", marginBottom: "1.5rem", overflow: "hidden" }}>
                <Image src="/images/Case-Study/Responsive.png" alt="Responsive Lending" fill style={{ objectFit: "contain", padding: "8px 10px", transform: "scale(1.4)", transformOrigin: "center center" }} />
              </div>
              {[{ label: "Client", value: "Responsive Lending" }, { label: "Sector", value: "Financial Lending" }, { label: "Solution", value: "Zoho One" }, { label: "Partner", value: "FI Digital" }].map(r => (
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
              <div style={{ width: "3px", height: "60px", background: `linear-gradient(${C},#8B5CF6)`, borderRadius: "2px", marginBottom: "1.25rem" }} />
              <div style={{ fontSize: "0.7rem", fontWeight: 800, color: C, textTransform: "uppercase", letterSpacing: "3px" }}>About the Client</div>
            </div>
            <p style={{ fontSize: "clamp(1.05rem,2vw,1.2rem)", color: "var(--text-muted)", lineHeight: 1.9 }}>
              <strong style={{ color: "var(--text)" }}>Responsive Lending</strong> is an Australian financial lender operating in a highly regulated environment. Managing applicant data, ensuring compliance, and delivering a seamless customer experience are central to their operations. Their previous reliance on InVision Software proved costly and difficult to scale — prompting the move to Zoho One.
            </p>
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
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, lineHeight: 1.15 }}>Costly, Fragmented &<br /><span style={{ color: "#EF4444" }}>Non-Compliant Systems</span></h2>
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

      {/* SOLUTION */}
      <section style={{ padding: "100px 1.5rem", background: "linear-gradient(180deg,#1a0011 0%,#3d0030 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(236,72,153,0.05) 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="container" style={{ maxWidth: "1100px", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", background: "rgba(236,72,153,0.1)", border: "1px solid rgba(236,72,153,0.2)", borderRadius: "50px", padding: "0.4rem 1.2rem", marginBottom: "1.5rem" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: C }} />
              <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#FBCFE8", textTransform: "uppercase", letterSpacing: "2px" }}>The Solution</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, color: "#fff", lineHeight: 1.15 }}>
              Zoho One — Compliant, Integrated<br /><span style={{ color: "#F472B6" }}>& Built for Lending</span>
            </h2>
          </div>

          {/* Core solution cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1.25rem", marginBottom: "2.5rem" }}>
            {solutions.map((s, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "18px", padding: "2rem", borderTop: `3px solid ${s.color}` }}>
                <div style={{ display: "inline-flex", background: `${s.color}18`, border: `1px solid ${s.color}33`, borderRadius: "50px", padding: "0.3rem 0.9rem", marginBottom: "1.25rem" }}>
                  <span style={{ fontSize: "0.7rem", fontWeight: 800, color: s.color }}>{s.label}</span>
                </div>
                <p style={{ fontSize: "0.93rem", color: "rgba(255,255,255,0.68)", lineHeight: 1.75 }}>{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Integrations */}
          <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "2.5rem", borderTop: `3px solid ${C}` }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#fff", marginBottom: "1.75rem" }}>Key Integrations</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1.25rem" }}>
              {integrations.map((int, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.04)", borderRadius: "14px", padding: "1.5rem", border: "1px solid rgba(255,255,255,0.07)", borderTop: `3px solid ${int.color}` }}>
                  <div style={{ fontSize: "0.95rem", fontWeight: 800, color: int.color, marginBottom: "0.65rem" }}>{int.name}</div>
                  <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.65 }}>{int.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg-secondary)" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <div style={{ background: "linear-gradient(135deg,#1a0011,#3d0030)", border: "1px solid rgba(236,72,153,0.25)", borderRadius: "24px", padding: "3.5rem", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: "1rem", left: "2.5rem", fontSize: "9rem", lineHeight: 1, color: "rgba(236,72,153,0.1)", fontFamily: "Georgia,serif", userSelect: "none" }}>"</div>
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ width: "42px", height: "3px", background: C, borderRadius: "2px", marginBottom: "2rem" }} />
              <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.9, fontStyle: "italic", fontWeight: 500, marginBottom: "2.5rem" }}>
                "The team at FI Digital has been instrumental in creating a platform which is both easy to use and compliant. Their expertise in Zoho and other cloud platforms is exceptional."
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: `linear-gradient(135deg,${C},#8B5CF6)`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 900, fontSize: "1rem", flexShrink: 0 }}>RL</div>
                <div>
                  <div style={{ fontWeight: 800, color: "#fff" }}>Responsive Lending</div>
                  <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.45)" }}>Financial Lender, Australia</div>
                </div>
              </div>
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
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, lineHeight: 1.15 }}>70% Faster.<br /><span style={{ color: C }}>Fully Compliant. Lower Cost.</span></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1.5rem" }}>
            {results.map((r, i) => (
              <div key={i} style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: "20px", padding: "2.5rem", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: `linear-gradient(90deg,${r.color},${r.color}44)` }} />
                <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: `${r.color}12`, color: r.color, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>{r.icon}</div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "0.85rem", color: "var(--text)" }}>{r.label}</h3>
                <p style={{ fontSize: "0.97rem", color: "var(--text-muted)", lineHeight: 1.75 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 1.5rem", background: "linear-gradient(135deg,#9d174d 0%,#be185d 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.07, backgroundImage: "radial-gradient(white 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="container" style={{ maxWidth: "800px", textAlign: "center", position: "relative", zIndex: 1 }}>
          <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, color: "#fff", marginBottom: "1.5rem", lineHeight: 1.2 }}>
            Ready to Modernise Your<br />Lending Operations?
          </h2>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.88)", lineHeight: 1.85, marginBottom: "3rem", maxWidth: "640px", margin: "0 auto 3rem" }}>
            FI Digital specializes in Zoho One implementations for financial services — delivering compliant, integrated, and cost-effective platforms that scale with your lending business.
          </p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem" }}>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#fff", color: "#9d174d", padding: "1rem 2.5rem", borderRadius: "100px", fontWeight: 800, textDecoration: "none", fontSize: "1rem", boxShadow: "0 12px 30px rgba(0,0,0,0.2)" }}>
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
          section > div > div[style*="grid-template-columns: repeat(2,1fr)"],
          section > div > div[style*="grid-template-columns: repeat(4,1fr)"],
          section > div > div[style*="grid-template-columns: 200px 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
