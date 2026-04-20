"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Zap, Users, BarChart3, Mail, FileSignature, Globe, Settings, Layers, CheckCircle } from "lucide-react";

const C = "#F97316";

const challenges = [
  { icon: <Layers size={22}/>, title: "Multi-Source Lead Capture", desc: "No structured way to capture and manage lead data arriving from multiple digital and offline sources simultaneously.", color: "#EF4444" },
  { icon: <Settings size={22}/>, title: "Disconnected Application Suite", desc: "Lack of an integrated application stack caused longer turnaround times and manual handoffs between teams.", color: "#F97316" },
  { icon: <Zap size={22}/>, title: "No Sales & Marketing Automation", desc: "Sales pipelines and marketing journeys were largely manual — slowing conversions and limiting campaign effectiveness.", color: "#8B5CF6" },
  { icon: <Users size={22}/>, title: "No Unified Customer 360", desc: "Sales, marketing, and support teams each operated with fragmented customer data — no single source of truth.", color: "#3B82F6" },
];

const tools = [
  { tool: "Zoho CRM", color: "#F97316", desc: "Central customer database — integrating leads from Spark and Accurassi, managing the end-to-end journey from lead to contract." },
  { tool: "Zoho Campaigns", color: "#3B82F6", desc: "Targeted EDM campaigns and customer segmentation to generate new opportunities and keep clients informed." },
  { tool: "Zoho Desk", color: "#10B981", desc: "Post-sales customer support with assignment rules, SLAs, workflow automation, and performance dashboards." },
  { tool: "Zoho Sign", color: "#8B5CF6", desc: "Contract signing automation with Spark — fully digital, audit-trailed, and embedded in the sales workflow." },
  { tool: "Zoho Forms", color: "#EC4899", desc: "Online forms embedded into websites and email campaigns, feeding data directly into Zoho CRM." },
  { tool: "Reports & Dashboards", color: "#F59E0B", desc: "Custom CRM and Desk dashboards giving leadership and teams real-time visibility into pipeline, support, and performance." },
];

const integrations = [
  { name: "Spark", desc: "Contract automation and digital signing" },
  { name: "Accurassi", desc: "Quote comparison sync to CRM Leads" },
  { name: "Zoho Forms", desc: "Web + email embedded lead capture" },
  { name: "Third-Party IT Stack", desc: "Cross-team API bridging for full Zoho parity" },
];

const results = [
  { icon: <Zap size={26}/>, label: "2+ Year Partnership", desc: "FI Digital has supported BlueNRG for over two years — delivering continuous enhancements, training, and ongoing Zoho expertise.", color: "#F97316" },
  { icon: <Users size={26}/>, label: "Employee Productivity", desc: "Significant increase in team performance through seamless pipeline tracking and automated task management.", color: "#3B82F6" },
  { icon: <BarChart3 size={26}/>, label: "Customer Satisfaction", desc: "Streamlined query management via Zoho Desk improved response times and customer issue resolution rates.", color: "#10B981" },
  { icon: <Globe size={26}/>, label: "Scalable Zoho Platform", desc: "Zoho One now acts as BlueNRG's daily operational driver — with ongoing refinements planned for AI and advanced analytics.", color: "#8B5CF6" },
];

export default function BlueNRGCaseStudy() {
  return (
    <div style={{ background: "var(--bg)", color: "var(--text)", paddingTop: "var(--header-h)" }}>

      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg,#1a0800 0%,#431407 55%,#1a0800 100%)", padding: "clamp(80px,10vh,140px) 1.5rem 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(249,115,22,0.07) 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
        <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle,rgba(249,115,22,0.13) 0%,transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: "-60px", left: "5%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle,rgba(234,88,12,0.07) 0%,transparent 70%)" }} />

        <div className="container" style={{ maxWidth: "1280px", position: "relative", zIndex: 1 }}>
          <Link href="/case-studies" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "rgba(255,255,255,0.5)", fontWeight: 600, textDecoration: "none", fontSize: "0.85rem", marginBottom: "3rem" }}>
            <ArrowLeft size={15} /> All Case Studies
          </Link>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "4rem", alignItems: "end", paddingBottom: "4rem" }}>
            <div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "2rem" }}>
                {["Zoho One", "Energy Retail", "CRM Automation", "2yr Partnership"].map(t => (
                  <span key={t} style={{ background: "rgba(249,115,22,0.14)", border: "1px solid rgba(249,115,22,0.28)", color: "#FED7AA", padding: "0.3rem 1rem", borderRadius: "50px", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "1px", textTransform: "uppercase" }}>{t}</span>
                ))}
              </div>
              <h1 style={{ fontSize: "clamp(2rem,5vw,3.8rem)", fontWeight: 900, lineHeight: 1.1, color: "#fff", letterSpacing: "-0.025em", marginBottom: "2rem" }}>
                Powering BlueNRG's Operations<br />with <span style={{ color: "#FB923C" }}>Zoho One</span> &<br />FI Digital Partnership
              </h1>
              <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, maxWidth: "600px" }}>
                Australia's 100% locally-owned energy retailer unlocks the full potential of their Zoho One investment — with automated lead capture, contract signing, marketing journeys, and a unified customer 360.
              </p>
              <div style={{ display: "flex", gap: "2.5rem", marginTop: "3rem", flexWrap: "wrap" }}>
                {[{ v: "2+yrs", l: "Ongoing Partnership" }, { v: "6+", l: "Zoho Apps Deployed" }, { v: "<30min", l: "Customer Response Target" }].map(s => (
                  <div key={s.l} style={{ borderLeft: `3px solid ${C}`, paddingLeft: "1rem" }}>
                    <div style={{ fontSize: "1.7rem", fontWeight: 900, color: "#fff" }}>{s.v}</div>
                    <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", fontWeight: 600 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "24px", padding: "2.5rem", backdropFilter: "blur(12px)" }}>
              <div style={{ background: "rgba(255,255,255,0.96)", borderRadius: "16px", height: "100px", position: "relative", marginBottom: "1.5rem", overflow: "hidden" }}>
                <Image src="/images/Case-Study/Blue.png" alt="BlueNRG" fill style={{ objectFit: "contain", padding: "6px 10px", transform: "scale(1.25)", transformOrigin: "center center" }} />
              </div>
              {[{ label: "Client", value: "Blue NRG" }, { label: "Founded", value: "2012, Melbourne" }, { label: "Solution", value: "Zoho One" }, { label: "Partner", value: "FI Digital" }].map(r => (
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
          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "4rem", alignItems: "start" }}>
            <div>
              <div style={{ width: "3px", height: "60px", background: `linear-gradient(${C},#ea580c)`, borderRadius: "2px", marginBottom: "1.25rem" }} />
              <div style={{ fontSize: "0.7rem", fontWeight: 800, color: C, textTransform: "uppercase", letterSpacing: "3px" }}>About BlueNRG</div>
            </div>
            <div>
              <p style={{ fontSize: "clamp(1.05rem,2vw,1.2rem)", color: "var(--text-muted)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
                <strong style={{ color: "var(--text)" }}>Blue NRG</strong> is an Australian-owned energy retailer created in 2012, specialising exclusively in commercial and industrial customers. They serve thousands of businesses across Victoria, NSW, South Australia, and South East Queensland — providing tailored energy plans, competitive rates, and a dedicated team of Business Relationship Managers committed to &lt;30 minute response times.
              </p>
              <div style={{ background: "var(--bg)", border: `1px solid ${C}33`, borderLeft: `4px solid ${C}`, borderRadius: "12px", padding: "1.5rem 2rem" }}>
                <p style={{ fontSize: "1rem", color: C, fontStyle: "italic", fontWeight: 700, lineHeight: 1.7 }}>
                  "The best customer service, the best possible price for their usage, and the best user experience — with a response time of fewer than 30 minutes."
                </p>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>— BlueNRG Guiding Philosophy</p>
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
              <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#EF4444", textTransform: "uppercase", letterSpacing: "2px" }}>The Challenge</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, lineHeight: 1.15, maxWidth: "680px" }}>
              Unlocking the Full Value of<br /><span style={{ color: "#EF4444" }}>Zoho One</span>
            </h2>
            <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.8, maxWidth: "700px", marginTop: "1.25rem" }}>
              BlueNRG had purchased Zoho One but needed a trusted partner to structure, configure, and continuously optimise it to match their business complexity and growth ambitions.
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
      <section style={{ padding: "100px 1.5rem", background: "linear-gradient(180deg,#1a0800 0%,#431407 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(249,115,22,0.05) 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="container" style={{ maxWidth: "1100px", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.2)", borderRadius: "50px", padding: "0.4rem 1.2rem", marginBottom: "1.5rem" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: C }} />
              <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#FED7AA", textTransform: "uppercase", letterSpacing: "2px" }}>The Solution</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, color: "#fff", lineHeight: 1.15 }}>
              Zoho One — Structured, Integrated<br /><span style={{ color: "#FB923C" }}>& Built for BlueNRG</span>
            </h2>
          </div>

          {/* Zoho tools grid */}
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

          {/* Integrations row */}
          <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "2.5rem", borderTop: `3px solid ${C}` }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#fff", marginBottom: "1.75rem" }}>Key Third-Party Integrations</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1.25rem" }}>
              {integrations.map((int, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.04)", borderRadius: "14px", padding: "1.25rem", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div style={{ fontSize: "0.92rem", fontWeight: 800, color: "#FB923C", marginBottom: "0.4rem" }}>{int.name}</div>
                  <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>{int.desc}</div>
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
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, lineHeight: 1.15 }}>A 2+ Year Partnership<br /><span style={{ color: C }}>Delivering Real Value</span></h2>
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
      <section style={{ padding: "100px 1.5rem", background: "linear-gradient(135deg,#c2410c 0%,#ea580c 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.07, backgroundImage: "radial-gradient(white 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="container" style={{ maxWidth: "800px", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", background: "rgba(255,255,255,0.15)", borderRadius: "50px", padding: "0.4rem 1.2rem", marginBottom: "2rem" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#fff", textTransform: "uppercase", letterSpacing: "2px" }}>Why Choose FI Digital?</span>
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, color: "#fff", marginBottom: "1.5rem", lineHeight: 1.2 }}>
            Ready to Maximise Your<br />Zoho One Investment?
          </h2>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.88)", lineHeight: 1.85, marginBottom: "3rem", maxWidth: "640px", margin: "0 auto 3rem" }}>
            FI Digital specialises in unlocking the full value of Zoho One for energy, utilities, and service businesses. Our ongoing partnership model means we grow with you — continuously improving, integrating, and expanding your Zoho platform.
          </p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem" }}>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#fff", color: "#c2410c", padding: "1rem 2.5rem", borderRadius: "100px", fontWeight: 800, textDecoration: "none", fontSize: "1rem", boxShadow: "0 12px 30px rgba(0,0,0,0.2)" }}>
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
