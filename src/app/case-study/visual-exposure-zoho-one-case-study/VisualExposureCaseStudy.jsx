"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, CheckCircle, Play, Layers, BarChart3, Users, Zap, Globe, Package } from "lucide-react";

const C = "#F59E0B";
const DARK = "#78350f";

const challenges = [
  { icon: <Layers size={22}/>, title: "Disconnected Systems", desc: "Legacy CRM and ERP systems were hard to upgrade, creating data silos across three separate brands.", color: "#EF4444" },
  { icon: <Package size={22}/>, title: "Paper-Based Operations", desc: "Stock management and project tracking relied on manual, paper-based processes causing delays and errors.", color: "#F97316" },
  { icon: <BarChart3 size={22}/>, title: "No Real-Time Reporting", desc: "Lack of real-time data for profitability and performance at the division level hindered decision-making.", color: "#8B5CF6" },
  { icon: <Users size={22}/>, title: "Scaling Complexity", desc: "Quoting, reporting, and project delivery grew increasingly complex as the business and its divisions expanded.", color: "#EC4899" },
];

const tools = [
  { tool: "Zoho CRM", color: "#3B82F6", desc: "Centralized lead capture from three brand websites with automated qualification and sales pipeline management." },
  { tool: "Zoho Books", color: "#10B981", desc: "Specialized multi-brand invoicing, tracking, and cost allocation with seamless finance integration." },
  { tool: "Zoho Projects", color: "#8B5CF6", desc: "Template-driven workflows for job milestones, task tracking, and on-time project delivery." },
  { tool: "Zoho Creator", color: "#F59E0B", desc: "Flexible, low-code job management and production tracking built for Visual Exposure's unique workflows." },
  { tool: "Zoho Inventory", color: "#F97316", desc: "Robust stock and shipping management via AfterShip integration, tied directly to finance." },
  { tool: "Zoho WorkDrive", color: "#EC4899", desc: "Centralized asset management — designs, checklists, safety docs, images — for staff and contractors." },
];

const results = [
  { icon: <Zap size={26}/>, label: "Real-Time Profitability", desc: "Every job, division, and purchase monitored for P&L instantly — no waiting for end-of-month reports.", color: "#F59E0B" },
  { icon: <Package size={26}/>, label: "100% Paperless", desc: "All processes from quoting to finance to job delivery are fully digitized and integrated.", color: "#10B981" },
  { icon: <Users size={26}/>, label: "Streamlined Delivery", desc: "Automated template-driven workflows ensure every job starts and ends on time with less admin overhead.", color: "#3B82F6" },
  { icon: <Globe size={26}/>, label: "Scalable Foundation", desc: "Supports future growth, new services, and business model changes with analytics and portals planned next.", color: "#8B5CF6" },
];

export default function VisualExposureCaseStudy() {
  return (
    <div style={{ background: "var(--bg)", color: "var(--text)", paddingTop: "var(--header-h)" }}>

      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg,#1c1006 0%,#3d2100 55%,#1c1006 100%)", padding: "clamp(80px,10vh,140px) 1.5rem 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(245,158,11,0.07) 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
        <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle,rgba(245,158,11,0.12) 0%,transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: "-80px", left: "5%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle,rgba(251,191,36,0.07) 0%,transparent 70%)" }} />

        <div className="container" style={{ maxWidth: "1280px", position: "relative", zIndex: 1 }}>
          <Link href="/case-studies" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "rgba(255,255,255,0.5)", fontWeight: 600, textDecoration: "none", fontSize: "0.85rem", marginBottom: "3rem" }}>
            <ArrowLeft size={15} /> All Case Studies
          </Link>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "4rem", alignItems: "end", paddingBottom: "4rem" }}>
            <div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "2rem" }}>
                {["Zoho One", "Signage & Branding", "Multi-Brand"].map(t => (
                  <span key={t} style={{ background: "rgba(245,158,11,0.14)", border: "1px solid rgba(245,158,11,0.28)", color: "#FCD34D", padding: "0.3rem 1rem", borderRadius: "50px", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "1px", textTransform: "uppercase" }}>{t}</span>
                ))}
              </div>
              <h1 style={{ fontSize: "clamp(2rem,5vw,3.8rem)", fontWeight: 900, lineHeight: 1.1, color: "#fff", letterSpacing: "-0.025em", marginBottom: "2rem" }}>
                Transforming<br /><span style={{ color: "#FCD34D" }}>Visual Exposure's</span><br />Operations with Zoho One
              </h1>
              <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, maxWidth: "600px" }}>
                A multi-award-winning Melbourne signage company replaces disconnected legacy systems with a unified, 100% paperless Zoho One platform — delivering real-time profitability across three brands.
              </p>
              <div style={{ display: "flex", gap: "2.5rem", marginTop: "3rem", flexWrap: "wrap" }}>
                {[{ v: "17+", l: "Staff Empowered" }, { v: "3", l: "Brands Unified" }, { v: "100%", l: "Paperless Operations" }].map(s => (
                  <div key={s.l} style={{ borderLeft: `3px solid ${C}`, paddingLeft: "1rem" }}>
                    <div style={{ fontSize: "1.7rem", fontWeight: 900, color: "#fff" }}>{s.v}</div>
                    <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", fontWeight: 600 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "24px", padding: "2.5rem", backdropFilter: "blur(12px)" }}>
              <div style={{ background: "rgba(255,255,255,0.96)", borderRadius: "16px", height: "100px", position: "relative", marginBottom: "1.5rem" }}>
                <Image src="/images/Case-Study/Visual-expo1.png" alt="Visual Exposure" fill style={{ objectFit: "contain", padding: "12px 20px" }} />
              </div>
              {[{ label: "Client", value: "Visual Exposure" }, { label: "Location", value: "Melbourne, Australia" }, { label: "Solution", value: "Zoho One" }, { label: "Partner", value: "FI Digital" }].map(r => (
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

      {/* ABOUT */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg-secondary)" }}>
        <div className="container" style={{ maxWidth: "1100px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "4rem", alignItems: "center" }}>
            <div>
              <div style={{ width: "3px", height: "60px", background: `linear-gradient(${C},#f97316)`, borderRadius: "2px", marginBottom: "1.25rem" }} />
              <div style={{ fontSize: "0.7rem", fontWeight: 800, color: C, textTransform: "uppercase", letterSpacing: "3px" }}>About the Client</div>
            </div>
            <p style={{ fontSize: "clamp(1.05rem,2vw,1.25rem)", color: "var(--text-muted)", lineHeight: 1.9 }}>
              <strong style={{ color: "var(--text)" }}>Visual Exposure</strong> is a multi-award-winning Australian signage company based in Melbourne. With a team of 17+ staff, they deliver complex branding and signage projects for blue-chip organisations across the country, running multiple brands and handling everything from job design to delivery and installation.
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
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, lineHeight: 1.15, maxWidth: "600px" }}>Disconnected Systems &<br /><span style={{ color: "#EF4444" }}>Manual Workflows</span></h2>
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
      <section style={{ padding: "100px 1.5rem", background: "linear-gradient(180deg,#1c1006 0%,#3d2100 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(245,158,11,0.05) 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="container" style={{ maxWidth: "1100px", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.2)", borderRadius: "50px", padding: "0.4rem 1.2rem", marginBottom: "1.5rem" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: C }} />
              <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#FCD34D", textTransform: "uppercase", letterSpacing: "2px" }}>Our Solution</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, color: "#fff", lineHeight: 1.15 }}>
              A Complete Digital Transformation<br /><span style={{ color: "#FCD34D" }}>with Zoho One</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }}>
            {tools.map((s, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "2rem", borderTop: `3px solid ${s.color}` }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: `${s.color}18`, border: `1px solid ${s.color}33`, borderRadius: "50px", padding: "0.3rem 0.9rem", marginBottom: "1.25rem" }}>
                  <span style={{ fontSize: "0.72rem", fontWeight: 800, color: s.color, letterSpacing: "0.5px" }}>{s.tool}</span>
                </div>
                <p style={{ fontSize: "0.93rem", color: "rgba(255,255,255,0.68)", lineHeight: 1.75 }}>{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Ongoing Partnership */}
          <div style={{ marginTop: "1.5rem", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "2.5rem", borderTop: `3px solid ${C}`, display: "grid", gridTemplateColumns: "auto 1fr", gap: "2rem", alignItems: "center" }}>
            <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: `${C}18`, border: `1px solid ${C}33`, display: "flex", alignItems: "center", justifyContent: "center", color: C, fontSize: "1.5rem", flexShrink: 0 }}>♻</div>
            <div>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#fff", marginBottom: "0.75rem" }}>Ongoing Support & Enablement</h3>
              <p style={{ fontSize: "0.97rem", color: "rgba(255,255,255,0.68)", lineHeight: 1.75 }}>Regular consulting and continuous improvement cycles. Visual Exposure's team trained to become confident Zoho power users. Ongoing partnership for advanced reporting, analytics, customer portals, and new use cases.</p>
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
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, lineHeight: 1.15 }}>Immediate<br /><span style={{ color: C }}>Impact</span></h2>
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
            <div style={{ background: "linear-gradient(135deg,#1c1006 0%,#3d2100 100%)", borderRadius: "24px", padding: "3.5rem", position: "relative", overflow: "hidden", border: "1px solid rgba(245,158,11,0.2)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div style={{ position: "absolute", top: "1rem", left: "2rem", fontSize: "9rem", lineHeight: 1, color: "rgba(245,158,11,0.1)", fontFamily: "Georgia,serif", userSelect: "none" }}>"</div>
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ width: "42px", height: "3px", background: C, borderRadius: "2px", marginBottom: "2rem" }} />
                <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.88)", lineHeight: 1.85, fontStyle: "italic", fontWeight: 500, marginBottom: "2.5rem" }}>
                  "We've got instant profitability on jobs because we're tracking every single job, all the costs, labor, and purchases … we know when we've made money and when we haven't. And managers and the staff on the shop floor are creating all of that themselves—it's just part of their system that's baked into the main processes."
                </p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: "50px", height: "50px", borderRadius: "50%", background: `linear-gradient(135deg,${C},#f97316)`, display: "flex", alignItems: "center", justifyContent: "center", color: "#1c1006", fontWeight: 900, fontSize: "1rem", flexShrink: 0 }}>MH</div>
                <div>
                  <div style={{ fontWeight: 800, color: "#fff" }}>Mic Harrold</div>
                  <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.45)" }}>Director, Visual Exposure</div>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem" }}>
                <Play size={16} color="#EF4444" fill="#EF4444" />
                <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#EF4444", textTransform: "uppercase", letterSpacing: "2px" }}>Watch the Story</span>
              </div>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 900, lineHeight: 1.25 }}>Hear It Directly<br />from Visual Exposure</h2>
              <div style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid var(--border)", position: "relative", aspectRatio: "16/9", flex: 1, minHeight: "260px" }}>
                <iframe src="https://www.youtube.com/embed/M2JDBDoPRic" title="Visual Exposure — FI Digital" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 1.5rem", background: "linear-gradient(135deg,#78350f 0%,#92400e 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.07, backgroundImage: "radial-gradient(white 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="container" style={{ maxWidth: "800px", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", background: "rgba(255,255,255,0.15)", borderRadius: "50px", padding: "0.4rem 1.2rem", marginBottom: "2rem" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#fff", textTransform: "uppercase", letterSpacing: "2px" }}>Why Choose FI Digital?</span>
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, color: "#fff", marginBottom: "1.5rem", lineHeight: 1.2 }}>
            Ready to Transform<br />Your Business?
          </h2>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.85, marginBottom: "3rem", maxWidth: "640px", margin: "0 auto 3rem" }}>
            FI Digital is a leading Zoho Partner specializing in complex, multi-brand, and fast-growing businesses. Our ongoing, consultative approach ensures you get not just the right software, but a fully aligned, scalable solution supporting your long-term goals.
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
