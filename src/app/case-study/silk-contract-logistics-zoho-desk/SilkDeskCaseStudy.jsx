"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, CheckCircle, Headphones, Users, BarChart3, Zap, Globe, MessageSquare } from "lucide-react";

const C = "#10B981";

const stats = [
  { v: "27%", l: "Productivity Increase" },
  { v: "25%", l: "Faster Resolution Times" },
  { v: "6mo", l: "Full Rollout Timeline" },
];

const challenges = [
  { icon: <MessageSquare size={22}/>, title: "Siloed Customer Data", desc: "34% of employee time was lost to collaborating and double-handling of crucial customer data points across disconnected sites.", color: "#EF4444" },
  { icon: <Users size={22}/>, title: "Multiple Sites & Teams", desc: "Floor workers, mid-level managers, drivers, and executives across all major Australian cities — all with different needs and access levels.", color: "#F97316" },
  { icon: <Headphones size={22}/>, title: "No Single Customer Interface", desc: "Customers had no unified window to get updates, ask for help, or register grievances — leading to delays and dissatisfaction.", color: "#8B5CF6" },
  { icon: <BarChart3 size={22}/>, title: "No Productivity Visibility", desc: "Management couldn't measure team productivity or track SLA compliance, making continuous improvement impossible.", color: "#F59E0B" },
];

const tools = [
  { tool: "Zoho Desk", color: "#10B981", desc: "Core platform: multi-department, multi-site, multi-role customer service with ticket collaboration, knowledge base, and assignment rules." },
  { tool: "Zoho CRM", color: "#3B82F6", desc: "Customer 360 integration — linking service history and customer sentiment data directly to sales and account records." },
  { tool: "Zoho Survey", color: "#8B5CF6", desc: "NPS tracking sent twice monthly to measure customer satisfaction and track improvements in real time." },
  { tool: "Zoho Analytics", color: "#F59E0B", desc: "Critical dashboards and reports for executives, managers, and floor teams — all in one place." },
];

const stakeholders = [
  { role: "Floor Workers", need: "Simple system, not too complex — familiar email-like interface to ensure user adoption." },
  { role: "Mid-Level Managers", need: "Productivity tracking and measurable upticks in team performance." },
  { role: "Senior Management", need: "Customer 360 view — single window interface and cross-department collaboration." },
];

const results = [
  { icon: <Zap size={26}/>, label: "27% Productivity Gain", desc: "Employee productivity per head grew by 27% within the first two months of the full rollout.", color: "#10B981" },
  { icon: <Headphones size={26}/>, label: "25% Faster Resolutions", desc: "Query resolution times dropped by a quarter from the original moving average.", color: "#3B82F6" },
  { icon: <Users size={26}/>, label: "Higher Satisfaction", desc: "Customer satisfaction surveys via Zoho Survey confirmed measurable improvement in customer sentiment and NPS.", color: "#8B5CF6" },
  { icon: <Globe size={26}/>, label: "National Scale", desc: "All facilities and sites across Australia live on Zoho Desk — one unified customer service engine.", color: "#F59E0B" },
];

export default function SilkDeskCaseStudy() {
  return (
    <div style={{ background: "var(--bg)", color: "var(--text)", paddingTop: "var(--header-h)" }}>

      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg,#052818 0%,#064e3b 55%,#052818 100%)", padding: "clamp(80px,10vh,140px) 1.5rem 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(16,185,129,0.07) 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
        <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle,rgba(16,185,129,0.12) 0%,transparent 70%)" }} />

        <div className="container" style={{ maxWidth: "1280px", position: "relative", zIndex: 1 }}>
          <Link href="/case-studies" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "rgba(255,255,255,0.5)", fontWeight: 600, textDecoration: "none", fontSize: "0.85rem", marginBottom: "3rem" }}>
            <ArrowLeft size={15} /> All Case Studies
          </Link>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "4rem", alignItems: "end", paddingBottom: "4rem" }}>
            <div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "2rem" }}>
                {["Zoho Desk", "Logistics", "ASX Listed", "Customer Service"].map(t => (
                  <span key={t} style={{ background: "rgba(16,185,129,0.14)", border: "1px solid rgba(16,185,129,0.28)", color: "#6EE7B7", padding: "0.3rem 1rem", borderRadius: "50px", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "1px", textTransform: "uppercase" }}>{t}</span>
                ))}
              </div>
              <h1 style={{ fontSize: "clamp(2rem,5vw,3.8rem)", fontWeight: 900, lineHeight: 1.1, color: "#fff", letterSpacing: "-0.025em", marginBottom: "2rem" }}>
                Transforming Customer Service<br />for <span style={{ color: "#34D399" }}>Silk Contract Logistics</span><br />with Zoho Desk
              </h1>
              <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, maxWidth: "600px" }}>
                Australia's leading port-to-door logistics provider eliminates 34% employee time waste, boosts productivity by 27%, and delivers a unified customer service experience across all national facilities.
              </p>
              <div style={{ display: "flex", gap: "2.5rem", marginTop: "3rem", flexWrap: "wrap" }}>
                {stats.map(s => (
                  <div key={s.l} style={{ borderLeft: `3px solid ${C}`, paddingLeft: "1rem" }}>
                    <div style={{ fontSize: "1.7rem", fontWeight: 900, color: "#fff" }}>{s.v}</div>
                    <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", fontWeight: 600 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "24px", padding: "2.5rem", backdropFilter: "blur(12px)" }}>
              <div style={{ background: "rgba(255,255,255,0.96)", borderRadius: "16px", height: "100px", position: "relative", marginBottom: "1.5rem" }}>
                <Image src="/images/Case-Study/silk-logistic.png" alt="Silk Contract Logistics" fill sizes="(max-width: 768px) 40vw, 200px" style={{ objectFit: "contain", padding: "12px 20px" }} />
              </div>
              {[{ label: "Client", value: "Silk Contract Logistics" }, { label: "Listed", value: "ASX Public Company" }, { label: "Solution", value: "Zoho Desk" }, { label: "Partner", value: "FI Digital" }].map(r => (
                <div key={r.label} style={{ display: "flex", justifyContent: "space-between", padding: "0.6rem 0", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                  <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>{r.label}</span>
                  <span style={{ fontSize: "0.85rem", color: "#fff", fontWeight: 700 }}>{r.value}</span>
                </div>
              ))}
              <Link href="/contact" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", background: C, color: "#052818", padding: "0.85rem 1.5rem", borderRadius: "100px", fontWeight: 800, textDecoration: "none", fontSize: "0.9rem", marginTop: "1.5rem" }}>
                Start Your Journey <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / HISTORY */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg-secondary)" }}>
        <div className="container" style={{ maxWidth: "1100px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "4rem", alignItems: "start" }}>
            <div>
              <div style={{ width: "3px", height: "60px", background: `linear-gradient(${C},#059669)`, borderRadius: "2px", marginBottom: "1.25rem" }} />
              <div style={{ fontSize: "0.7rem", fontWeight: 800, color: C, textTransform: "uppercase", letterSpacing: "3px" }}>About SCL</div>
            </div>
            <div>
              <p style={{ fontSize: "clamp(1.05rem,2vw,1.2rem)", color: "var(--text-muted)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
                <strong style={{ color: "var(--text)" }}>Silk Contract Logistics (SCL)</strong> is a leading Australian logistics company — proudly 100% Australian-owned and ASX listed. They provide integrated, port-to-door, landside logistics services to some of the world's biggest names.
              </p>
              <div style={{ background: "var(--bg)", border: `1px solid ${C}33`, borderLeft: `4px solid ${C}`, borderRadius: "12px", padding: "1.5rem 2rem" }}>
                <p style={{ fontSize: "1rem", color: C, fontStyle: "italic", fontWeight: 700, lineHeight: 1.7 }}>
                  "FIRST AND FOREMOST, WE FOCUS ON OUR CUSTOMERS"
                </p>
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginTop: "0.75rem", lineHeight: 1.7 }}>Founded from the 2012 merger of Kagan Logistics and Hoffmann Transport — two companies with 50+ years of history. Headquartered in Melbourne with facilities across all major Australian cities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGE */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div className="container" style={{ maxWidth: "1280px" }}>
          <div style={{ marginBottom: "4rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: "50px", padding: "0.4rem 1.2rem", marginBottom: "1.5rem" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#EF4444" }} />
              <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#EF4444", textTransform: "uppercase", letterSpacing: "2px" }}>The Challenge</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, lineHeight: 1.15, maxWidth: "700px" }}>
              How do we increase productivity,<br /><span style={{ color: "#EF4444" }}>collaboration & customer satisfaction?</span>
            </h2>
            <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.8, maxWidth: "760px", marginTop: "1.25rem" }}>
              SCL was losing <strong>34% of employee time</strong> in collaborating and double-handling customer data — time that could be spent resolving more requests and improving outcomes.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1.5rem", marginBottom: "3rem" }}>
            {challenges.map((c, i) => (
              <div key={i} style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: "20px", padding: "2.5rem", display: "grid", gridTemplateColumns: "auto 1fr", gap: "1.75rem", alignItems: "flex-start", borderLeft: `4px solid ${c.color}` }}>
                <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: `${c.color}12`, color: c.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{c.icon}</div>
                <div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "0.75rem", color: "var(--text)" }}>{c.title}</h3>
                  <p style={{ fontSize: "0.96rem", color: "var(--text-muted)", lineHeight: 1.75 }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stakeholder Needs */}
          <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: "20px", padding: "2.5rem" }}>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "2rem", color: "var(--text)" }}>Stakeholder Requirements Mapped</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }}>
              {stakeholders.map((s, i) => (
                <div key={i} style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "14px", padding: "1.5rem" }}>
                  <div style={{ fontSize: "0.7rem", fontWeight: 800, color: C, textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "0.75rem" }}>{s.role}</div>
                  <p style={{ fontSize: "0.93rem", color: "var(--text-muted)", lineHeight: 1.7 }}>{s.need}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section style={{ padding: "100px 1.5rem", background: "linear-gradient(180deg,#052818 0%,#064e3b 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(16,185,129,0.05) 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="container" style={{ maxWidth: "1100px", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)", borderRadius: "50px", padding: "0.4rem 1.2rem", marginBottom: "1.5rem" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: C }} />
              <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#34D399", textTransform: "uppercase", letterSpacing: "2px" }}>The Solution</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, color: "#fff", lineHeight: 1.15 }}>
              A Unified Customer Service Engine<br /><span style={{ color: "#34D399" }}>Powered by Zoho</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1.5rem", marginBottom: "3rem" }}>
            {tools.map((s, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "2.5rem", borderTop: `3px solid ${s.color}` }}>
                <div style={{ display: "inline-flex", background: `${s.color}18`, border: `1px solid ${s.color}33`, borderRadius: "50px", padding: "0.3rem 0.9rem", marginBottom: "1.25rem" }}>
                  <span style={{ fontSize: "0.72rem", fontWeight: 800, color: s.color }}>{s.tool}</span>
                </div>
                <p style={{ fontSize: "0.97rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.75 }}>{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Implementation timeline */}
          <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "2.5rem", borderTop: `3px solid ${C}` }}>
            <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#fff", marginBottom: "1.75rem" }}>6-Month Agile Rollout — One Facility at a Time</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1rem" }}>
              {["Requirements Gathering", "Agile Build & Customisation", "Facility-by-Facility Rollout", "Training & Go-Live Support"].map((step, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: `${C}18`, border: `1px solid ${C}44`, display: "flex", alignItems: "center", justifyContent: "center", color: C, fontWeight: 900, fontSize: "0.9rem", margin: "0 auto 0.75rem" }}>{i + 1}</div>
                  <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.65)", fontWeight: 600, lineHeight: 1.5 }}>{step}</div>
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
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, lineHeight: 1.15 }}>Measurable Gains<br /><span style={{ color: C }}>Within 2 Months</span></h2>
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
      <section style={{ padding: "100px 1.5rem", background: "linear-gradient(135deg,#065f46 0%,#064e3b 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.07, backgroundImage: "radial-gradient(white 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="container" style={{ maxWidth: "800px", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", background: "rgba(255,255,255,0.15)", borderRadius: "50px", padding: "0.4rem 1.2rem", marginBottom: "2rem" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#fff", textTransform: "uppercase", letterSpacing: "2px" }}>Why Choose FI Digital?</span>
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, color: "#fff", marginBottom: "1.5rem", lineHeight: 1.2 }}>
            Ready to Transform Your<br />Customer Service Operations?
          </h2>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.85, marginBottom: "3rem", maxWidth: "640px", margin: "0 auto 3rem" }}>
            FI Digital specializes in complex, enterprise customer service transformations using Zoho Desk. Our agile, consultative approach ensures your teams adopt and succeed — from floor workers to executives.
          </p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem" }}>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#fff", color: "#065f46", padding: "1rem 2.5rem", borderRadius: "100px", fontWeight: 800, textDecoration: "none", fontSize: "1rem", boxShadow: "0 12px 30px rgba(0,0,0,0.2)" }}>
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
          section > div > div[style*="grid-template-columns: repeat(3,1fr)"],
          section > div > div[style*="grid-template-columns: repeat(4,1fr)"],
          section > div > div[style*="grid-template-columns: 200px 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
