"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, CheckCircle, Play, Package, BarChart3, Users, Zap, Globe, Layers } from "lucide-react";

const C = "#10B981";

const challenges = [
  { icon: <Layers size={22}/>, title: "Siloed Business Units", desc: "Port logistics, warehousing, and distribution operated with disconnected systems and no shared visibility.", color: "#EF4444" },
  { icon: <Package size={22}/>, title: "Manual Processes", desc: "Spreadsheets and paper-based methods for project management, sales, support, and expense reporting caused constant delays.", color: "#F97316" },
  { icon: <Users size={22}/>, title: "Fractured Customer Support", desc: "60+ Outlook mailboxes made tracking inquiries and measuring SLA compliance nearly impossible.", color: "#F59E0B" },
  { icon: <BarChart3 size={22}/>, title: "No Business Intelligence", desc: "Inability to capture and analyze data across teams and divisions left leadership without actionable insights.", color: "#8B5CF6" },
];

const solutions = [
  { tool: "Zoho Projects", color: "#3B82F6", desc: "Business-wide project management platform replacing manual methods, improving transparency and delivery speed." },
  { tool: "Zoho CRM", color: "#10B981", desc: "Centralized sales pipeline with automatic lead scoring, conversion automation, and management forecasting." },
  { tool: "Zoho Desk", color: "#8B5CF6", desc: "Unified support across 30+ warehouses. Automated routing, SLAs, and escalation — ensuring no inquiry is missed." },
  { tool: "Zoho Expense", color: "#F97316", desc: "Digitized expense and reimbursement tracking with approval workflows integrated into the core finance ERP." },
  { tool: "Zoho Analytics", color: "#EC4899", desc: "360-degree dashboards for executive, operations, sales, and support — enabling real-time monitoring and predictive analytics." },
];

const results = [
  { icon: <Zap size={26}/>, label: "Operational Efficiency", desc: "Integrated workflows across logistics, warehousing, and finance. Automation eliminated duplicate entry and manual errors.", color: "#3B82F6" },
  { icon: <Users size={26}/>, label: "Improved Customer Service", desc: "Centralized inquiry management led to faster response times and higher SLA compliance across all warehouses.", color: "#10B981" },
  { icon: <Package size={26}/>, label: "Paperless Expenses", desc: "Expense reporting is now fast, digital, and policy-compliant with automatic integration into finance.", color: "#8B5CF6" },
  { icon: <Globe size={26}/>, label: "Future-proof Platform", desc: "A scalable digital foundation ready for AI enhancements (Zoho Zia), new workflows, and continued growth.", color: "#F59E0B" },
];

export default function SilkLogisticsCaseStudy() {
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
                {["Zoho One", "Logistics & Manufacturing", "Enterprise"].map(t => (
                  <span key={t} style={{ background: "rgba(16,185,129,0.14)", border: "1px solid rgba(16,185,129,0.28)", color: "#6EE7B7", padding: "0.3rem 1rem", borderRadius: "50px", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "1px", textTransform: "uppercase" }}>{t}</span>
                ))}
              </div>
              <h1 style={{ fontSize: "clamp(2rem,5vw,3.8rem)", fontWeight: 900, lineHeight: 1.1, color: "#fff", letterSpacing: "-0.025em", marginBottom: "2rem" }}>
                Digitizing Port Logistics &<br /><span style={{ color: "#34D399" }}>Manufacturing</span> for<br />Silk Logistics with Zoho One
              </h1>
              <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, maxWidth: "600px" }}>
                Australia's leading port-to-door provider replaces siloed manual systems across 30+ warehouses with a unified, intelligent Zoho One platform.
              </p>
              <div style={{ display: "flex", gap: "2.5rem", marginTop: "3rem", flexWrap: "wrap" }}>
                {[{ v: "30+", l: "Warehouses Unified" }, { v: "5", l: "Zoho Modules Deployed" }, { v: "60+", l: "Mailboxes Replaced" }].map(s => (
                  <div key={s.l} style={{ borderLeft: `3px solid ${C}`, paddingLeft: "1rem" }}>
                    <div style={{ fontSize: "1.7rem", fontWeight: 900, color: "#fff" }}>{s.v}</div>
                    <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", fontWeight: 600 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Client card */}
            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "24px", padding: "2.5rem", backdropFilter: "blur(12px)" }}>
              <div style={{ background: "rgba(255,255,255,0.96)", borderRadius: "16px", height: "100px", position: "relative", marginBottom: "1.5rem" }}>
                <Image src="/images/Case-Study/silk-logistic.png" alt="Silk Logistics" fill sizes="(max-width: 768px) 40vw, 200px" style={{ objectFit: "contain", padding: "12px 20px" }} />
              </div>
              {[{ label: "Client", value: "Silk Logistics Holdings" }, { label: "Industry", value: "Logistics & Manufacturing" }, { label: "Solution", value: "Zoho One" }, { label: "Partner", value: "FI Digital" }].map(r => (
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
              <div style={{ fontSize: "0.7rem", fontWeight: 800, color: C, textTransform: "uppercase", letterSpacing: "3px" }}>About the Client</div>
            </div>
            <p style={{ fontSize: "clamp(1.05rem,2vw,1.25rem)", color: "var(--text-muted)", lineHeight: 1.9 }}>
              <strong style={{ color: "var(--text)" }}>Silk Logistics Holdings</strong> is one of Australia's leading port-to-door logistics solutions providers. With over 30 warehouses nationwide, Silk offers comprehensive services in port logistics, warehousing, and distribution, supporting major clients in manufacturing, retail, and supply chain management.
            </p>
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
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, lineHeight: 1.15, maxWidth: "600px" }}>Complex Operations,<br /><span style={{ color: "#EF4444" }}>Manual Processes</span></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1.5rem" }}>
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
        </div>
      </section>

      {/* SOLUTION */}
      <section style={{ padding: "100px 1.5rem", background: "linear-gradient(180deg,#052818 0%,#064e3b 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(16,185,129,0.05) 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="container" style={{ maxWidth: "1100px", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", background: "rgba(16,185,129,0.1)", border: `1px solid rgba(16,185,129,0.2)`, borderRadius: "50px", padding: "0.4rem 1.2rem", marginBottom: "1.5rem" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: C }} />
              <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#34D399", textTransform: "uppercase", letterSpacing: "2px" }}>Our Solution</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, color: "#fff", lineHeight: 1.15 }}>
              Comprehensive Digital Transformation<br /><span style={{ color: "#34D399" }}>with Zoho One</span>
            </h2>
          </div>

          {/* Zoho tools grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1.5rem", marginBottom: "3rem" }}>
            {solutions.map((s, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "2.5rem", borderTop: `3px solid ${s.color}` }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: `${s.color}18`, border: `1px solid ${s.color}33`, borderRadius: "50px", padding: "0.35rem 1rem", marginBottom: "1.25rem" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 800, color: s.color, letterSpacing: "0.5px" }}>{s.tool}</span>
                </div>
                <p style={{ fontSize: "0.97rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.75 }}>{s.desc}</p>
              </div>
            ))}
            {/* Ongoing Partnership — full width */}
            <div style={{ gridColumn: "1/-1", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "2.5rem", borderTop: `3px solid ${C}`, display: "grid", gridTemplateColumns: "auto 1fr", gap: "2rem", alignItems: "center" }}>
              <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: `${C}18`, border: `1px solid ${C}33`, display: "flex", alignItems: "center", justifyContent: "center", color: C, fontWeight: 900, fontSize: "0.8rem", textAlign: "center", flexShrink: 0 }}>♻</div>
              <div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#fff", marginBottom: "0.75rem" }}>Ongoing Partnership</h3>
                <p style={{ fontSize: "0.97rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.75 }}>Regular workshops with Silk Logistics to adapt systems as the company evolves. Current focus on unifying analytics and exploring Zoho AI (Zia) to automate processes and deliver customer self-service and business intelligence.</p>
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
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, lineHeight: 1.15 }}>Immediate &amp; Measurable<br /><span style={{ color: C }}>Value</span></h2>
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

      {/* TESTIMONIAL + VIDEO */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div className="container" style={{ maxWidth: "1280px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem", alignItems: "stretch" }}>
            <div style={{ background: "linear-gradient(135deg,#052818 0%,#064e3b 100%)", borderRadius: "24px", padding: "3.5rem", position: "relative", overflow: "hidden", border: `1px solid rgba(16,185,129,0.2)`, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div style={{ position: "absolute", top: "1rem", left: "2rem", fontSize: "9rem", lineHeight: 1, color: "rgba(16,185,129,0.1)", fontFamily: "Georgia,serif", userSelect: "none" }}>"</div>
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ width: "42px", height: "3px", background: C, borderRadius: "2px", marginBottom: "2rem" }} />
                <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.88)", lineHeight: 1.85, fontStyle: "italic", fontWeight: 500, marginBottom: "2.5rem" }}>
                  "We now have Zoho CRM, Desk, Expense, and Projects running across the business. Dashboards, SLAs, automation, and centralized communication have made every aspect of our business more efficient. We continue to work with FI Digital to digitize more areas and unlock new value."
                </p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: "50px", height: "50px", borderRadius: "50%", background: `linear-gradient(135deg,${C},#059669)`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 900, fontSize: "1rem", flexShrink: 0 }}>MH</div>
                <div>
                  <div style={{ fontWeight: 800, color: "#fff" }}>Matt Hannah</div>
                  <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.45)" }}>CIO, Silk Logistics Holdings</div>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem" }}>
                <Play size={16} color="#EF4444" fill="#EF4444" />
                <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#EF4444", textTransform: "uppercase", letterSpacing: "2px" }}>Watch the Story</span>
              </div>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 900, lineHeight: 1.25 }}>Hear It Directly<br />from Silk Logistics</h2>
              <div style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid var(--border)", position: "relative", aspectRatio: "16/9", flex: 1, minHeight: "260px" }}>
                <iframe src="https://www.youtube.com/embed/QxlK6T9ZF2o" title="Silk Logistics — FI Digital" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 1.5rem", background: `linear-gradient(135deg,#065f46 0%,#064e3b 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.07, backgroundImage: "radial-gradient(white 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="container" style={{ maxWidth: "800px", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", background: "rgba(255,255,255,0.15)", borderRadius: "50px", padding: "0.4rem 1.2rem", marginBottom: "2rem" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#fff", textTransform: "uppercase", letterSpacing: "2px" }}>Why Choose FI Digital?</span>
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, color: "#fff", marginBottom: "1.5rem", lineHeight: 1.2 }}>
            Ready to Digitize Your<br />Logistics Business?
          </h2>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.85, marginBottom: "3rem", maxWidth: "640px", margin: "0 auto 3rem" }}>
            FI Digital specializes in complex enterprise digital transformations for logistics, manufacturing, and supply chain businesses. Our consultative approach and deep Zoho expertise deliver scalable solutions that simplify complexity and drive measurable results.
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
          .cs-grid-2 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
