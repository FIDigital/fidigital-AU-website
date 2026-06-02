"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Code2, Database, GitMerge, BarChart3, Zap, Globe, Shield, Layers, CheckCircle } from "lucide-react";

const C = "#64748B";
const CA = "#38BDF8";  // sky blue accent

const challenges = [
  { icon: <GitMerge size={22}/>, title: "Third-Party Integration Gaps", desc: "Zoho CRM needed to push and pull data from multiple external APIs triggered from different CRM modules — requiring expert-level technical support.", color: "#38BDF8" },
  { icon: <Code2 size={22}/>, title: "Complex CRM Configurations", desc: "Pre-defined payment calculations required deep customisation of fields, modules, and custom functions beyond standard Zoho setup.", color: "#818CF8" },
  { icon: <Database size={22}/>, title: "Fragmented Data Sources", desc: "Transaction and survey data lived across multiple platforms with no unified view — making analysis and risk identification difficult.", color: "#34D399" },
  { icon: <BarChart3 size={22}/>, title: "End-to-End Process Coverage", desc: "The full lead-to-transaction lifecycle needed to be managed within Zoho CRM for complete operational visibility.", color: "#F59E0B" },
];

const solutionSteps = [
  {
    num: "01", color: CA,
    label: "API Integration",
    desc: "CSS provided required third-party API credentials. FI Digital built integrations hitting external APIs triggered from specific Zoho CRM modules — ensuring real-time data sync between platforms.",
  },
  {
    num: "02", color: "#818CF8",
    label: "Payment Calculation Configuration",
    desc: "Custom fields, modules, and Zoho CRM functions were built to handle pre-defined payment calculations — enabling CSS to manage end-to-end transactions directly within their CRM.",
  },
  {
    num: "03", color: "#34D399",
    label: "Sandbox Testing & Sign-Off",
    desc: "All changes were tested end-to-end in a sandbox environment before customer sign-off. Only after CSS confirmation were changes published to the live environment.",
  },
  {
    num: "04", color: "#F59E0B",
    label: "Training, Documentation & Ongoing Support",
    desc: "FI Digital provided training and documentation alongside each development cycle, with ongoing technical support for complex Zoho tasks.",
  },
];

const results = [
  { icon: <Database size={26}/>, label: "Unified Data Platform", desc: "All transaction and survey data from third-party sources now flows into Zoho CRM — a single source of truth for analysis.", color: CA },
  { icon: <Zap size={26}/>, label: "Efficient Transactions", desc: "End-to-end process from lead capture to successful payment is managed entirely within Zoho CRM with automated calculations.", color: "#818CF8" },
  { icon: <BarChart3 size={26}/>, label: "Actionable Intelligence", desc: "CSS now analyses consolidated CRM data to identify risks and opportunities — enabling more informed business decisions.", color: "#34D399" },
  { icon: <Globe size={26}/>, label: "1-Year Ongoing Partnership", desc: "Civil Survey Solutions continues to partner with FI Digital for complex Zoho technical tasks, integrations, and enhancements.", color: "#F59E0B" },
];

export default function CivilSurveyCaseStudy() {
  return (
    <div style={{ background: "var(--bg)", color: "var(--text)", paddingTop: "var(--header-h)" }}>

      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg,#0a1628 0%,#0f2447 55%,#0a1628 100%)", padding: "clamp(80px,10vh,140px) 1.5rem 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(56,189,248,0.07) 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
        <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle,rgba(56,189,248,0.1) 0%,transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: "-60px", left: "5%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle,rgba(129,140,248,0.07) 0%,transparent 70%)" }} />

        <div className="container" style={{ maxWidth: "1280px", position: "relative", zIndex: 1 }}>
          <Link href="/case-studies" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "rgba(255,255,255,0.5)", fontWeight: 600, textDecoration: "none", fontSize: "0.85rem", marginBottom: "3rem" }}>
            <ArrowLeft size={15} /> All Case Studies
          </Link>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "4rem", alignItems: "end", paddingBottom: "4rem" }}>
            <div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "2rem" }}>
                {["Zoho CRM", "AEC Industry", "API Integration", "Autodesk Partner"].map(t => (
                  <span key={t} style={{ background: "rgba(56,189,248,0.12)", border: "1px solid rgba(56,189,248,0.25)", color: "#BAE6FD", padding: "0.3rem 1rem", borderRadius: "50px", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "1px", textTransform: "uppercase" }}>{t}</span>
                ))}
              </div>
              <h1 style={{ fontSize: "clamp(2rem,5vw,3.8rem)", fontWeight: 900, lineHeight: 1.1, color: "#fff", letterSpacing: "-0.025em", marginBottom: "2rem" }}>
                Solving Complex Zoho CRM<br />Integrations for <span style={{ color: CA }}>Civil Survey</span><br />Solutions
              </h1>
              <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, maxWidth: "600px" }}>
                An Autodesk Gold Partner with 25+ years in the AEC industry partners with FI Digital to solve complex third-party API integrations and payment configurations in Zoho CRM — creating a unified data and transaction platform.
              </p>
              <div style={{ display: "flex", gap: "2.5rem", marginTop: "3rem", flexWrap: "wrap" }}>
                {[{ v: "25+yrs", l: "Industry Experience" }, { v: "1yr+", l: "FI Digital Partnership" }, { v: "Gold", l: "Autodesk Partner Tier" }].map(s => (
                  <div key={s.l} style={{ borderLeft: `3px solid ${CA}`, paddingLeft: "1rem" }}>
                    <div style={{ fontSize: "1.7rem", fontWeight: 900, color: "#fff" }}>{s.v}</div>
                    <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", fontWeight: 600 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "24px", padding: "2.5rem", backdropFilter: "blur(12px)" }}>
              <div style={{ background: "rgba(255,255,255,0.96)", borderRadius: "16px", height: "100px", position: "relative", marginBottom: "1.5rem", overflow: "hidden" }}>
                <Image src="/images/Case-Study/Civil.png" alt="Civil Survey Solutions" fill sizes="(max-width: 768px) 40vw, 200px" style={{ objectFit: "contain", padding: "8px 14px", transform: "scale(1.3)", transformOrigin: "center center" }} />
              </div>
              {[{ label: "Client", value: "Civil Survey Solutions" }, { label: "Founded", value: "1998, Australia" }, { label: "Solution", value: "Zoho CRM" }, { label: "Partner", value: "FI Digital" }].map(r => (
                <div key={r.label} style={{ display: "flex", justifyContent: "space-between", padding: "0.6rem 0", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                  <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>{r.label}</span>
                  <span style={{ fontSize: "0.85rem", color: "#fff", fontWeight: 700 }}>{r.value}</span>
                </div>
              ))}
              <Link href="/contact" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", background: CA, color: "#0a1628", padding: "0.85rem 1.5rem", borderRadius: "100px", fontWeight: 800, textDecoration: "none", fontSize: "0.9rem", marginTop: "1.5rem" }}>
                Start Your Journey <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg-secondary)" }}>
        <div className="container" style={{ maxWidth: "1100px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "4rem", alignItems: "start" }}>
            <div>
              <div style={{ width: "3px", height: "60px", background: `linear-gradient(${CA},#818CF8)`, borderRadius: "2px", marginBottom: "1.25rem" }} />
              <div style={{ fontSize: "0.7rem", fontWeight: 800, color: CA, textTransform: "uppercase", letterSpacing: "3px" }}>About CSS</div>
            </div>
            <div>
              <p style={{ fontSize: "clamp(1.05rem,2vw,1.2rem)", color: "var(--text-muted)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
                <strong style={{ color: "var(--text)" }}>Civil Survey Solutions</strong> is a leading provider of Autodesk software solutions, training, and applications for the Architecture, Engineering, and Construction (AEC) industries in Australia. Founded in 1998, they are an Autodesk Gold Partner with approved specializations in AEC — and an authorized developer and training centre with 25+ years of hands-on industry experience.
              </p>
              <div style={{ background: "var(--bg)", border: `1px solid ${CA}33`, borderLeft: `4px solid ${CA}`, borderRadius: "12px", padding: "1.5rem 2rem" }}>
                <p style={{ fontSize: "1rem", color: CA, fontStyle: "italic", fontWeight: 700, lineHeight: 1.7 }}>
                  "The best solutions come from a deep understanding of the industry and the challenges faced by clients — developed through hands-on experience and in-depth knowledge."
                </p>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>— Civil Survey Solutions Guiding Philosophy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGE */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div className="container" style={{ maxWidth: "1280px" }}>
          <div style={{ marginBottom: "4rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", background: "rgba(56,189,248,0.08)", border: "1px solid rgba(56,189,248,0.2)", borderRadius: "50px", padding: "0.4rem 1.2rem", marginBottom: "1.5rem" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#EF4444" }} />
              <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#EF4444", textTransform: "uppercase", letterSpacing: "2px" }}>The Challenge</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, lineHeight: 1.15, maxWidth: "700px" }}>
              Complex Integrations &<br /><span style={{ color: "#EF4444" }}>Advanced CRM Configuration</span>
            </h2>
            <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.8, maxWidth: "700px", marginTop: "1.25rem" }}>
              CSS had a well-functioning Zoho CRM setup — but scaling it to handle third-party API integrations and complex payment configurations required expert-level technical support beyond standard Zoho capabilities.
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

      {/* SOLUTION — vertical steps */}
      <section style={{ padding: "100px 1.5rem", background: "linear-gradient(180deg,#0a1628 0%,#0f2447 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(56,189,248,0.05) 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="container" style={{ maxWidth: "1000px", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.2)", borderRadius: "50px", padding: "0.4rem 1.2rem", marginBottom: "1.5rem" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: CA }} />
              <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#BAE6FD", textTransform: "uppercase", letterSpacing: "2px" }}>The Solution</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, color: "#fff", lineHeight: 1.15 }}>
              Expert-Level Zoho CRM<br /><span style={{ color: CA }}>Technical Delivery</span>
            </h2>
          </div>

          <div style={{ position: "relative", paddingLeft: "72px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {solutionSteps.map((s, i) => (
                <div key={i} style={{ position: "relative" }}>
                  <div style={{ position: "absolute", left: "-72px", top: "16px", width: "56px", height: "56px", borderRadius: "50%", background: `${s.color}18`, border: `2px solid ${s.color}`, display: "flex", alignItems: "center", justifyContent: "center", color: s.color, fontWeight: 900, fontSize: "0.85rem" }}>{s.num}</div>
                  <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "2.25rem 2.5rem" }}>
                    <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#fff", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: s.color, display: "inline-block", flexShrink: 0 }} />{s.label}
                    </h3>
                    <p style={{ fontSize: "0.97rem", color: "rgba(255,255,255,0.68)", lineHeight: 1.8 }}>{s.desc}</p>
                  </div>
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
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", background: `${CA}10`, border: `1px solid ${CA}28`, borderRadius: "50px", padding: "0.4rem 1.2rem", marginBottom: "1.5rem" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: CA }} />
              <span style={{ fontSize: "0.75rem", fontWeight: 800, color: CA, textTransform: "uppercase", letterSpacing: "2px" }}>The Results</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, lineHeight: 1.15 }}>Efficient, Unified &<br /><span style={{ color: CA }}>Continuously Improving</span></h2>
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
      <section style={{ padding: "100px 1.5rem", background: "linear-gradient(135deg,#0a1628 0%,#0f2447 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.07, backgroundImage: "radial-gradient(rgba(56,189,248,0.4) 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "700px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle,rgba(56,189,248,0.08) 0%,transparent 70%)" }} />
        <div className="container" style={{ maxWidth: "800px", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", background: "rgba(56,189,248,0.12)", border: "1px solid rgba(56,189,248,0.25)", borderRadius: "50px", padding: "0.4rem 1.2rem", marginBottom: "2rem" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#BAE6FD", textTransform: "uppercase", letterSpacing: "2px" }}>Why Choose FI Digital?</span>
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, color: "#fff", marginBottom: "1.5rem", lineHeight: 1.2 }}>
            Need Expert Zoho CRM<br />Technical Support?
          </h2>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.85, marginBottom: "3rem", maxWidth: "640px", margin: "0 auto 3rem" }}>
            FI Digital specialises in complex Zoho CRM integrations, custom configurations, and API-driven workflows. If your existing Zoho setup needs expert-level enhancements, we deliver with precision — on time, every time.
          </p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem" }}>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: CA, color: "#0a1628", padding: "1rem 2.5rem", borderRadius: "100px", fontWeight: 800, textDecoration: "none", fontSize: "1rem", boxShadow: "0 12px 30px rgba(56,189,248,0.25)" }}>
              Book a Consultation <ArrowUpRight size={18} />
            </Link>
            <Link href="/case-studies" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(255,255,255,0.08)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)", padding: "1rem 2.5rem", borderRadius: "100px", fontWeight: 700, textDecoration: "none", fontSize: "1rem", backdropFilter: "blur(8px)" }}>
              More Case Studies
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 900px) {
          section > div > div[style*="grid-template-columns: 1fr 320px"],
          section > div > div[style*="grid-template-columns: repeat(2,1fr)"],
          section > div > div[style*="grid-template-columns: 200px 1fr"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="padding-left: 72px"] {
            padding-left: 44px !important;
          }
        }
      `}</style>
    </div>
  );
}
