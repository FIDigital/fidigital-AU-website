"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Zap, Users, BarChart3, Shield, Globe, Settings, Wrench, Database } from "lucide-react";

const C = "#14B8A6";

const modules = [
  { name: "Warranty Management", color: C, desc: "End-to-end warranty claims — submission, tracking, automated email notifications at every stage from submission to resolution." },
  { name: "Asset Management", color: "#3B82F6", desc: "Centralised asset tracking with real-time calibration report fetching via AWS Service Hub integration." },
  { name: "Distributor Kit Allocation", color: "#8B5CF6", desc: "Distributors can allocate kits, manage customer accounts, and raise warranty claims via a dedicated self-service portal." },
  { name: "Product Replacement", color: "#F59E0B", desc: "Interconnected replacement module ensures all functions — orders, claims, and service — are linked and up to date." },
];

const portals = [
  {
    role: "Customer Portal", color: C, icon: <Users size={22}/>,
    features: ["Dashboard showing purchased sensors and service schedules", "Initiate warranty claims and track status in real time", "View warranty claim updates and calibration history"],
  },
  {
    role: "Distributor Portal", color: "#3B82F6", icon: <Globe size={22}/>,
    features: ["Allocate kits and manage customer accounts", "Raise warranty claims on behalf of customers", "Dashboards with sensor breakdown by product series and account"],
  },
];

const integrations = [
  { name: "Cin7", color: "#F59E0B", desc: "Automated sync of sales orders and kit allocations — keeping inventory and CRM data in perfect alignment." },
  { name: "AWS Service Hub", color: "#3B82F6", desc: "Real-time fetching of calibration reports and asset statuses directly from SafeGauge's cloud infrastructure." },
  { name: "SafeGauge Website", color: C, desc: "Public asset search by serial number — enabling customers and service teams to access data without logging in." },
];

const phases = [
  { num: "01", color: C, label: "Discovery Workshops", desc: "Online and offsite workshops to map workflows and identify bottlenecks across all stakeholder groups." },
  { num: "02", color: "#3B82F6", label: "Core Module Build", desc: "Asset tracking and warranty management modules implemented first as the operational foundation." },
  { num: "03", color: "#8B5CF6", label: "Integrations & Automation", desc: "Cin7, AWS, and website integrations deployed with automated workflow triggers for notifications and updates." },
  { num: "04", color: "#F59E0B", label: "Training & Documentation", desc: "Comprehensive training for customers, distributors, and internal teams with detailed user manuals." },
];

const results = [
  { icon: <Database size={26}/>, label: "Unified Data Management", desc: "Eliminated data silos across warranty, asset, calibration, and order management — one platform for all teams.", color: C },
  { icon: <Users size={26}/>, label: "Stakeholder Self-Service", desc: "Customers and distributors access real-time asset data and warranty status through intuitive portals — reducing support follow-ups.", color: "#3B82F6" },
  { icon: <Zap size={26}/>, label: "Automated Workflows", desc: "Warranty claims, calibration schedules, and service updates now trigger automatically — freeing teams from manual tracking.", color: "#8B5CF6" },
  { icon: <BarChart3 size={26}/>, label: "Actionable Insights", desc: "Management dashboards give SafeGauge full visibility into operational performance, sensor sales, and resource planning.", color: "#F59E0B" },
];

export default function SafeGaugeCaseStudy() {
  return (
    <div style={{ background: "var(--bg)", color: "var(--text)", paddingTop: "var(--header-h)" }}>

      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg,#011c1a 0%,#042f2e 60%,#011c1a 100%)", padding: "clamp(80px,10vh,140px) 1.5rem 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(20,184,166,0.07) 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
        <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle,rgba(20,184,166,0.13) 0%,transparent 70%)" }} />

        <div className="container" style={{ maxWidth: "1280px", position: "relative", zIndex: 1 }}>
          <Link href="/case-studies" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "rgba(255,255,255,0.5)", fontWeight: 600, textDecoration: "none", fontSize: "0.85rem", marginBottom: "3rem" }}>
            <ArrowLeft size={15} /> All Case Studies
          </Link>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "4rem", alignItems: "end", paddingBottom: "4rem" }}>
            <div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "2rem" }}>
                {["Zoho Creator", "Heavy Industry", "Asset Management", "Self-Service Portals"].map(t => (
                  <span key={t} style={{ background: "rgba(20,184,166,0.14)", border: "1px solid rgba(20,184,166,0.28)", color: "#99F6E4", padding: "0.3rem 1rem", borderRadius: "50px", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "1px", textTransform: "uppercase" }}>{t}</span>
                ))}
              </div>
              <h1 style={{ fontSize: "clamp(2rem,5vw,3.6rem)", fontWeight: 900, lineHeight: 1.1, color: "#fff", letterSpacing: "-0.025em", marginBottom: "2rem" }}>
                <span style={{ color: "#2DD4BF" }}>SafeGauge</span> Enhances<br />Operations Using<br />Zoho Creator
              </h1>
              <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, maxWidth: "600px" }}>
                A leader in heavy vehicle diagnostic tools centralises warranty management, asset tracking, and distributor operations — replacing manual processes with a unified self-service Zoho Creator platform.
              </p>
              <div style={{ display: "flex", gap: "2.5rem", marginTop: "3rem", flexWrap: "wrap" }}>
                {[{ v: "3+", l: "System Integrations" }, { v: "2", l: "Stakeholder Portals" }, { v: "4", l: "Core Modules Built" }].map(s => (
                  <div key={s.l} style={{ borderLeft: `3px solid ${C}`, paddingLeft: "1rem" }}>
                    <div style={{ fontSize: "1.7rem", fontWeight: 900, color: "#fff" }}>{s.v}</div>
                    <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", fontWeight: 600 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "24px", padding: "2.5rem", backdropFilter: "blur(12px)" }}>
              <div style={{ background: "rgba(255,255,255,0.96)", borderRadius: "16px", height: "100px", position: "relative", marginBottom: "1.5rem", overflow: "hidden" }}>
                <Image src="/images/Case-Study/Safe-gauge.png" alt="SafeGauge" fill sizes="(max-width: 768px) 40vw, 200px" style={{ objectFit: "contain", padding: "8px 10px", transform: "scale(1.4)", transformOrigin: "center center" }} />
              </div>
              {[{ label: "Client", value: "SafeGauge" }, { label: "Industry", value: "Heavy Vehicle Diagnostics" }, { label: "Solution", value: "Zoho Creator" }, { label: "Partner", value: "FI Digital" }].map(r => (
                <div key={r.label} style={{ display: "flex", justifyContent: "space-between", padding: "0.6rem 0", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                  <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>{r.label}</span>
                  <span style={{ fontSize: "0.85rem", color: "#fff", fontWeight: 700 }}>{r.value}</span>
                </div>
              ))}
              <Link href="/contact" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", background: C, color: "#011c1a", padding: "0.85rem 1.5rem", borderRadius: "100px", fontWeight: 800, textDecoration: "none", fontSize: "0.9rem", marginTop: "1.5rem" }}>
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
              <div style={{ width: "3px", height: "60px", background: `linear-gradient(${C},#3B82F6)`, borderRadius: "2px", marginBottom: "1.25rem" }} />
              <div style={{ fontSize: "0.7rem", fontWeight: 800, color: C, textTransform: "uppercase", letterSpacing: "3px" }}>About SafeGauge</div>
            </div>
            <p style={{ fontSize: "clamp(1.05rem,2vw,1.2rem)", color: "var(--text-muted)", lineHeight: 1.9 }}>
              <strong style={{ color: "var(--text)" }}>SafeGauge</strong> is a leader in diagnostic tools for heavy vehicle maintenance, committed to improving safety, efficiency, and reliability. They collaborate with customers, distributors, and service providers to deliver innovative solutions for managing assets, warranties, and services — with a goal to centralise operations and provide intuitive tools that enhance customer experience.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTION — Modules */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div className="container" style={{ maxWidth: "1280px" }}>
          <div style={{ marginBottom: "4rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", background: `${C}10`, border: `1px solid ${C}28`, borderRadius: "50px", padding: "0.4rem 1.2rem", marginBottom: "1.5rem" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: C }} />
              <span style={{ fontSize: "0.75rem", fontWeight: 800, color: C, textTransform: "uppercase", letterSpacing: "2px" }}>The Solution</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, lineHeight: 1.15 }}>A Centralised Zoho Creator<br /><span style={{ color: C }}>Platform for Every Stakeholder</span></h2>
          </div>

          {/* Core Modules */}
          <div style={{ marginBottom: "1rem" }}>
            <div style={{ fontSize: "0.7rem", fontWeight: 800, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "1.25rem" }}>Core Modules</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1.25rem" }}>
              {modules.map((m, i) => (
                <div key={i} style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: "18px", padding: "2rem", borderTop: `3px solid ${m.color}` }}>
                  <div style={{ display: "inline-flex", background: `${m.color}10`, border: `1px solid ${m.color}28`, borderRadius: "50px", padding: "0.3rem 0.9rem", marginBottom: "1rem" }}>
                    <span style={{ fontSize: "0.7rem", fontWeight: 800, color: m.color }}>{m.name}</span>
                  </div>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.75 }}>{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PORTALS */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg-secondary)" }}>
        <div className="container" style={{ maxWidth: "1100px" }}>
          <div style={{ fontSize: "0.7rem", fontWeight: 800, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "1.5rem" }}>Self-Service Stakeholder Portals</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            {portals.map((p, i) => (
              <div key={i} style={{ background: "var(--bg)", border: `1px solid ${p.color}28`, borderRadius: "20px", padding: "2.5rem", borderTop: `4px solid ${p.color}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", marginBottom: "1.75rem" }}>
                  <div style={{ width: "46px", height: "46px", borderRadius: "12px", background: `${p.color}12`, color: p.color, display: "flex", alignItems: "center", justifyContent: "center" }}>{p.icon}</div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--text)" }}>{p.role}</h3>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {p.features.map((f, j) => (
                    <div key={j} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                      <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: p.color, marginTop: "7px", flexShrink: 0 }} />
                      <p style={{ fontSize: "0.93rem", color: "var(--text-muted)", lineHeight: 1.7 }}>{f}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATIONS + IMPLEMENTATION */}
      <section style={{ padding: "100px 1.5rem", background: "linear-gradient(180deg,#011c1a 0%,#042f2e 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(20,184,166,0.05) 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="container" style={{ maxWidth: "1100px", position: "relative", zIndex: 1 }}>

          {/* Integrations */}
          <div style={{ marginBottom: "3rem" }}>
            <div style={{ fontSize: "0.7rem", fontWeight: 800, color: "#99F6E4", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "1.5rem" }}>System Integrations</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.25rem" }}>
              {integrations.map((int, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "18px", padding: "2rem", borderTop: `3px solid ${int.color}` }}>
                  <div style={{ fontSize: "1rem", fontWeight: 800, color: int.color, marginBottom: "0.75rem" }}>{int.name}</div>
                  <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.62)", lineHeight: 1.75 }}>{int.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Implementation phases */}
          <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "2.5rem", borderTop: `3px solid ${C}` }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#fff", marginBottom: "2rem" }}>Implementation Approach</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1.25rem" }}>
              {phases.map((p, i) => (
                <div key={i}>
                  <div style={{ width: "42px", height: "42px", borderRadius: "50%", background: `${p.color}18`, border: `1px solid ${p.color}44`, display: "flex", alignItems: "center", justifyContent: "center", color: p.color, fontWeight: 900, fontSize: "0.8rem", marginBottom: "1rem" }}>{p.num}</div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "#fff", marginBottom: "0.4rem" }}>{p.label}</div>
                  <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.65 }}>{p.desc}</p>
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
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, lineHeight: 1.15 }}>Streamlined, Scalable &<br /><span style={{ color: C }}>Stakeholder-Ready</span></h2>
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
      <section style={{ padding: "100px 1.5rem", background: "linear-gradient(135deg,#0d5651 0%,#0f766e 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.07, backgroundImage: "radial-gradient(white 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="container" style={{ maxWidth: "800px", textAlign: "center", position: "relative", zIndex: 1 }}>
          <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, color: "#fff", marginBottom: "1.5rem", lineHeight: 1.2 }}>
            Ready to Build a Custom<br />Zoho Creator Platform?
          </h2>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.88)", lineHeight: 1.85, marginBottom: "3rem", maxWidth: "640px", margin: "0 auto 3rem" }}>
            FI Digital specializes in Zoho Creator development for complex, multi-stakeholder operations. From portals to integrations to automation — we build tailored platforms that scale with your business.
          </p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem" }}>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#fff", color: "#0d5651", padding: "1rem 2.5rem", borderRadius: "100px", fontWeight: 800, textDecoration: "none", fontSize: "1rem", boxShadow: "0 12px 30px rgba(0,0,0,0.2)" }}>
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
          section > div > div[style*="grid-template-columns: repeat(4,1fr)"],
          section > div > div[style*="grid-template-columns: 200px 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
