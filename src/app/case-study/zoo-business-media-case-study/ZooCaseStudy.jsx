"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Music, Tv, Phone, Mic, Layers, Zap, BarChart3, Globe, Users, Settings } from "lucide-react";

const C = "#8B5CF6";

const challenges = [
  { icon: <Settings size={22}/>, title: "Limited Customisation", desc: "Their old CRM lacked the flexibility to adapt workflows and modules to Zoo Business Media's unique multi-brand operations.", color: "#EF4444" },
  { icon: <Layers size={22}/>, title: "Integration Complexity", desc: "Poor integration capabilities prevented seamless data flow between departments, brands, and third-party tools.", color: "#F97316" },
  { icon: <Zap size={22}/>, title: "Outdated Processes", desc: "Manual, inefficient processes for managing products, services, and customer engagement slowed the entire sales cycle.", color: "#8B5CF6" },
  { icon: <BarChart3 size={22}/>, title: "No Unified Lead Platform", desc: "No single platform to manage the complete lead-to-customer lifecycle — causing data loss and missed opportunities.", color: "#F59E0B" },
];

const tools = [
  { tool: "Zoho CRM", color: "#8B5CF6", desc: "Core platform — modules, workflows, email alerts, mail merge templates for managing the full lead cycle and product services per client." },
  { tool: "Zoho Desk", color: "#3B82F6", desc: "Customer support tracking for all issues and queries raised across ZBM's four brands." },
  { tool: "Zoho WorkDrive", color: "#10B981", desc: "Centralised documentation storage integrated into CRM workflows — critical for ZBM's contract and service processes." },
  { tool: "Zoho Sign", color: "#F97316", desc: "Electronic attestation and customer sign-off captured directly within the platform — no paper, no delays." },
  { tool: "Zoho Forms", color: "#EC4899", desc: "Structured data capture for lead intake and customer onboarding, feeding directly into Zoho CRM." },
  { tool: "Reports & Dashboards", color: "#F59E0B", desc: "Custom analytics built for ZBM to analyse sales pipeline, customer engagement, and service performance at a glance." },
];

const brands = [
  { icon: <Tv size={20}/>, name: "Atmosphere TV Australia", desc: "Digital signage & streaming video content" },
  { icon: <Music size={20}/>, name: "Moov Music", desc: "Branded business music channels" },
  { icon: <Phone size={20}/>, name: "1800-ONHOLD", desc: "Voice messaging for VOIP & POTS telephony" },
  { icon: <Mic size={20}/>, name: "Voiceovers NOW!", desc: "Professional voiceover production" },
];

const results = [
  { icon: <Zap size={26}/>, label: "Increased Productivity", desc: "Employees saw significant productivity improvements within 6 months, managing the full sales cycle seamlessly through Zoho.", color: "#8B5CF6" },
  { icon: <Globe size={26}/>, label: "Full Data Migration", desc: "Complete dataset migrated from legacy CRM to Zoho CRM — no data loss, no disruption to live operations.", color: "#3B82F6" },
  { icon: <Users size={26}/>, label: "Seamless Sales Cycle", desc: "Lead management, task assignment, follow-ups, and closures now managed end-to-end in one unified platform.", color: "#10B981" },
  { icon: <BarChart3 size={26}/>, label: "Expanding Partnership", desc: "ZBM is working with FI Digital to extend Zoho to a new business unit with third-party system integrations.", color: "#F59E0B" },
];

export default function ZooCaseStudy() {
  return (
    <div style={{ background: "var(--bg)", color: "var(--text)", paddingTop: "var(--header-h)" }}>

      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg,#0d0520 0%,#1e0a4a 55%,#0d0520 100%)", padding: "clamp(80px,10vh,140px) 1.5rem 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(139,92,246,0.08) 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
        <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle,rgba(139,92,246,0.14) 0%,transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: "-60px", left: "5%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle,rgba(99,102,241,0.08) 0%,transparent 70%)" }} />

        <div className="container" style={{ maxWidth: "1280px", position: "relative", zIndex: 1 }}>
          <Link href="/case-studies" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "rgba(255,255,255,0.5)", fontWeight: 600, textDecoration: "none", fontSize: "0.85rem", marginBottom: "3rem" }}>
            <ArrowLeft size={15} /> All Case Studies
          </Link>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "4rem", alignItems: "end", paddingBottom: "4rem" }}>
            <div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "2rem" }}>
                {["Zoho CRM", "Digital Media", "CRM Migration", "Multi-Brand"].map(t => (
                  <span key={t} style={{ background: "rgba(139,92,246,0.14)", border: "1px solid rgba(139,92,246,0.28)", color: "#C4B5FD", padding: "0.3rem 1rem", borderRadius: "50px", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "1px", textTransform: "uppercase" }}>{t}</span>
                ))}
              </div>
              <h1 style={{ fontSize: "clamp(2rem,5vw,3.8rem)", fontWeight: 900, lineHeight: 1.1, color: "#fff", letterSpacing: "-0.025em", marginBottom: "2rem" }}>
                Modernising CRM Operations<br />for <span style={{ color: "#A78BFA" }}>Zoo Business Media</span><br />with Zoho CRM
              </h1>
              <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, maxWidth: "600px" }}>
                Australia's leading digital media group replaces a rigid legacy CRM with Zoho's flexible, integrated platform — unifying lead management and customer engagement across four brands.
              </p>
              <div style={{ display: "flex", gap: "2.5rem", marginTop: "3rem", flexWrap: "wrap" }}>
                {[{ v: "4", l: "Brands Unified" }, { v: "3,000+", l: "Business Clients Served" }, { v: "6mo", l: "Full CRM Migration" }].map(s => (
                  <div key={s.l} style={{ borderLeft: `3px solid ${C}`, paddingLeft: "1rem" }}>
                    <div style={{ fontSize: "1.7rem", fontWeight: 900, color: "#fff" }}>{s.v}</div>
                    <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", fontWeight: 600 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "24px", padding: "2.5rem", backdropFilter: "blur(12px)" }}>
              <div style={{ background: "rgba(255,255,255,0.96)", borderRadius: "16px", height: "100px", position: "relative", marginBottom: "1.5rem" }}>
                <Image src="/images/Case-Study/Zoo.png" alt="Zoo Business Media" fill style={{ objectFit: "contain", padding: "12px 20px" }} />
              </div>
              {[{ label: "Client", value: "Zoo Business Media" }, { label: "Founded", value: "1999, Helensvale QLD" }, { label: "Solution", value: "Zoho CRM Suite" }, { label: "Partner", value: "FI Digital" }].map(r => (
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

      {/* ABOUT + BRANDS */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg-secondary)" }}>
        <div className="container" style={{ maxWidth: "1280px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                <div style={{ width: "3px", height: "40px", background: `linear-gradient(${C},#6366F1)`, borderRadius: "2px" }} />
                <div style={{ fontSize: "0.7rem", fontWeight: 800, color: C, textTransform: "uppercase", letterSpacing: "3px" }}>About the Client</div>
              </div>
              <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.9 }}>
                <strong style={{ color: "var(--text)" }}>Zoo Business Media</strong> is one of Australia's leading suppliers of music, digital signage, and voice messaging solutions to thousands of businesses. Founded in 1999 in Helensvale, QLD, ZBM serves 3,000+ retail, hospitality, fitness, and general business environments across Australasia — including The Coffee Club, Snap Fitness, and Choice Hotels.
              </p>
            </div>
            <div>
              <div style={{ fontSize: "0.7rem", fontWeight: 800, color: C, textTransform: "uppercase", letterSpacing: "3px", marginBottom: "1.25rem" }}>Brands Under ZBM</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {brands.map((b, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "1rem", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "14px", padding: "1rem 1.5rem" }}>
                    <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: `${C}12`, color: C, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{b.icon}</div>
                    <div>
                      <div style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--text)" }}>{b.name}</div>
                      <div style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>{b.desc}</div>
                    </div>
                  </div>
                ))}
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
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, lineHeight: 1.15, maxWidth: "680px" }}>
              Legacy CRM Limitations<br /><span style={{ color: "#EF4444" }}>Holding Growth Back</span>
            </h2>
            <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.8, maxWidth: "700px", marginTop: "1.25rem" }}>
              ZBM needed to automate workflows, save time, increase productivity, and manage the entire customer engagement lifecycle on a single flexible platform. Their old CRM simply couldn't deliver.
            </p>
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
      <section style={{ padding: "100px 1.5rem", background: "linear-gradient(180deg,#0d0520 0%,#1e0a4a 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(139,92,246,0.05) 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="container" style={{ maxWidth: "1100px", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.2)", borderRadius: "50px", padding: "0.4rem 1.2rem", marginBottom: "1.5rem" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: C }} />
              <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#C4B5FD", textTransform: "uppercase", letterSpacing: "2px" }}>The Solution</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, color: "#fff", lineHeight: 1.15 }}>
              A Fully Integrated Zoho Suite<br /><span style={{ color: "#A78BFA" }}>Built Around ZBM's Workflows</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.25rem", marginBottom: "2.5rem" }}>
            {tools.map((s, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "18px", padding: "2rem", borderTop: `3px solid ${s.color}` }}>
                <div style={{ display: "inline-flex", background: `${s.color}18`, border: `1px solid ${s.color}33`, borderRadius: "50px", padding: "0.3rem 0.9rem", marginBottom: "1.25rem" }}>
                  <span style={{ fontSize: "0.7rem", fontWeight: 800, color: s.color }}>{s.tool}</span>
                </div>
                <p style={{ fontSize: "0.93rem", color: "rgba(255,255,255,0.68)", lineHeight: 1.75 }}>{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Implementation note */}
          <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "2.5rem", borderTop: `3px solid ${C}` }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#fff", marginBottom: "1rem" }}>Continuous Improvement Approach</h3>
            <p style={{ fontSize: "0.97rem", color: "rgba(255,255,255,0.68)", lineHeight: 1.8 }}>
              After initial configuration, FI Digital and ZBM meet weekly to polish the application — gathering feedback, implementing enhancements, and testing new features. This ongoing collaboration ensures ZBM's Zoho environment evolves with their business in real time. The project was delivered on time with full training, documentation, and post go-live support.
            </p>
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
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, lineHeight: 1.15 }}>Measurable Growth<br /><span style={{ color: C }}>in 6 Months</span></h2>
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
      <section style={{ padding: "100px 1.5rem", background: "linear-gradient(135deg,#4c1d95 0%,#5b21b6 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.07, backgroundImage: "radial-gradient(white 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="container" style={{ maxWidth: "800px", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", background: "rgba(255,255,255,0.15)", borderRadius: "50px", padding: "0.4rem 1.2rem", marginBottom: "2rem" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#fff", textTransform: "uppercase", letterSpacing: "2px" }}>Why Choose FI Digital?</span>
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, color: "#fff", marginBottom: "1.5rem", lineHeight: 1.2 }}>
            Ready to Modernise<br />Your CRM?
          </h2>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.85, marginBottom: "3rem", maxWidth: "640px", margin: "0 auto 3rem" }}>
            FI Digital specializes in CRM migrations and multi-brand Zoho implementations. Our weekly collaboration model ensures your Zoho setup continuously improves — delivering long-term, measurable results.
          </p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem" }}>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#fff", color: "#4c1d95", padding: "1rem 2.5rem", borderRadius: "100px", fontWeight: 800, textDecoration: "none", fontSize: "1rem", boxShadow: "0 12px 30px rgba(0,0,0,0.2)" }}>
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
          section > div > div[style*="grid-template-columns: repeat(3,1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
