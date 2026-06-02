"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, CheckCircle, Play, Zap, Users, Globe, Layers, TrendingUp, AlertCircle } from "lucide-react";

const challenges = [
  { icon: <Layers size={22} />, title: "Complex, Expensive CRM", desc: "Drova's Salesforce setup evolved into an overly complicated, resource-intensive system — difficult to maintain and expensive to scale.", color: "#EF4444" },
  { icon: <Users size={22} />, title: "Administrative Burden", desc: "High administrative overhead sapped productivity and slowed process improvements across the organisation.", color: "#F97316" },
  { icon: <AlertCircle size={22} />, title: "Disjointed Data & Workflows", desc: "Multiple applications with poor integration made data alignment and real-time visibility hard to achieve.", color: "#F59E0B" },
  { icon: <TrendingUp size={22} />, title: "Need for Flexibility", desc: "The management team wanted to reimagine workflows and create a seamless experience for users and leadership alike.", color: "#8B5CF6" },
];

const phases = [
  {
    num: "01", color: "#3B82F6", label: "Discovery & Planning",
    points: [
      "Deep-dive into business goals, technology stack, and pain points",
      "Stakeholder interviews and requirements mapping for future-proof architecture",
      "Process and persona mapping — from lead capture to post-sales analytics",
    ],
  },
  {
    num: "02", color: "#10B981", label: "Implementation & Integration",
    points: [
      "Zoho CRMPlus deployed as a fully connected hub — sales, marketing automation, and analytics",
      "Complex lead management and user journeys reimagined for performance and simplicity",
      "Real-time integrations: website, Segment, Braze, and Zoho CRM — single source of truth",
      "Management gained a bird's-eye view of data movement across the organisation",
    ],
  },
  {
    num: "03", color: "#8B5CF6", label: "Ongoing Partnership",
    points: [
      "Hands-on support, ongoing training, and continuous system optimisations",
      "Staged implementation for quick wins with a roadmap for long-term global scalability",
    ],
  },
];

const results = [
  { icon: <Zap size={26} />, label: "Simplicity & Flexibility", desc: "Replaced Salesforce complexity with Zoho CRMPlus's intuitive, adaptable platform.", color: "#3B82F6", span: 1 },
  { icon: <Layers size={26} />, label: "Seamless Integration", desc: "Data flows across website, product, marketing, and CRM — enabling automations and real-time insights.", color: "#10B981", span: 1 },
  { icon: <Users size={26} />, label: "User Empowerment", desc: "Teams configure and expand workflows with ease. Minimal time to value, tailored onboarding.", color: "#8B5CF6", span: 1 },
  { icon: <Globe size={26} />, label: "Global Scalability", desc: "Confidently scale into new markets and handle higher volumes without added complexity or cost.", color: "#F59E0B", span: 1 },
];

export default function DrovaCaseStudy() {
  return (
    <div style={{ background: "var(--bg)", color: "var(--text)", paddingTop: "var(--header-h)" }}>

      {/* ─── HERO ─── */}
      <section style={{ background: "linear-gradient(135deg,#060d1f 0%,#0d1f40 60%,#060d1f 100%)", padding: "clamp(80px,10vh,140px) 1.5rem 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(59,130,246,0.07) 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
        <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle,rgba(59,130,246,0.13) 0%,transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: "-80px", left: "10%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle,rgba(99,102,241,0.09) 0%,transparent 70%)" }} />

        <div className="container" style={{ maxWidth: "1280px", position: "relative", zIndex: 1 }}>
          {/* Back link */}
          <Link href="/case-studies" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "rgba(255,255,255,0.5)", fontWeight: 600, textDecoration: "none", fontSize: "0.85rem", marginBottom: "3rem" }}>
            <ArrowLeft size={15} /> All Case Studies
          </Link>

          {/* Hero body */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "4rem", alignItems: "end", paddingBottom: "4rem" }}>
            <div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "2rem" }}>
                {["Zoho CRM Plus", "CRM Migration", "SaaS"].map(t => (
                  <span key={t} style={{ background: "rgba(59,130,246,0.14)", border: "1px solid rgba(59,130,246,0.28)", color: "#93C5FD", padding: "0.3rem 1rem", borderRadius: "50px", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "1px", textTransform: "uppercase" }}>{t}</span>
                ))}
              </div>
              <h1 style={{ fontSize: "clamp(2.2rem,5vw,4rem)", fontWeight: 900, lineHeight: 1.1, color: "#fff", letterSpacing: "-0.025em", marginBottom: "2rem" }}>
                Drova's Journey<br />from <span style={{ color: "#60A5FA" }}>Salesforce Complexity</span><br />to Zoho CRMPlus Simplicity
              </h1>
              <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, maxWidth: "620px" }}>
                A rapidly-growing SaaS company replaces an overbuilt CRM with a connected, flexible operations hub — achieving real-time data visibility and global scalability.
              </p>

              {/* Stat row */}
              <div style={{ display: "flex", gap: "2.5rem", marginTop: "3rem", flexWrap: "wrap" }}>
                {[
                  { v: "1 Hub", l: "Connected Operations" },
                  { v: "3+", l: "Real-time Integrations" },
                  { v: "Global", l: "Scalability Roadmap" },
                ].map(s => (
                  <div key={s.l} style={{ borderLeft: "3px solid #3B82F6", paddingLeft: "1rem" }}>
                    <div style={{ fontSize: "1.7rem", fontWeight: 900, color: "#fff" }}>{s.v}</div>
                    <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", fontWeight: 600 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Client card */}
            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "24px", padding: "2.5rem", backdropFilter: "blur(12px)", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ background: "rgba(255,255,255,0.96)", borderRadius: "16px", padding: "1.5rem", display: "flex", alignItems: "center", justifyContent: "center", height: "100px", position: "relative" }}>
                <Image src="/images/Case-Study/Drova1.png" alt="Drova" fill sizes="(max-width: 768px) 40vw, 200px" style={{ objectFit: "contain", padding: "12px 20px" }} />
              </div>
              <div>
                {[
                  { label: "Client", value: "Drova" },
                  { label: "Industry", value: "SaaS / CRM" },
                  { label: "Solution", value: "Zoho CRM Plus" },
                  { label: "Partner", value: "FI Digital" },
                ].map(row => (
                  <div key={row.label} style={{ display: "flex", justifyContent: "space-between", padding: "0.6rem 0", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                    <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>{row.label}</span>
                    <span style={{ fontSize: "0.88rem", color: "#fff", fontWeight: 700 }}>{row.value}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", background: "#3B82F6", color: "#fff", padding: "0.85rem 1.5rem", borderRadius: "100px", fontWeight: 800, textDecoration: "none", fontSize: "0.9rem" }}>
                Start Your Journey <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg-secondary)" }}>
        <div className="container" style={{ maxWidth: "1100px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: "4rem", alignItems: "center" }}>
            <div>
              <div style={{ width: "3px", height: "60px", background: "linear-gradient(#3B82F6,#6366F1)", borderRadius: "2px", marginBottom: "1.25rem" }} />
              <div style={{ fontSize: "0.7rem", fontWeight: 800, color: "#3B82F6", textTransform: "uppercase", letterSpacing: "3px" }}>About the Client</div>
            </div>
            <p style={{ fontSize: "clamp(1.1rem,2vw,1.3rem)", color: "var(--text-muted)", lineHeight: 1.9 }}>
              <strong style={{ color: "var(--text)" }}>Drova</strong> is a rapidly-growing SaaS company. As their operations scaled, the limitations and costs of their legacy Salesforce setup became increasingly challenging, prompting a search for a more adaptable and affordable solution.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CHALLENGES ─── */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div className="container" style={{ maxWidth: "1280px" }}>
          <div style={{ marginBottom: "4rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: "50px", padding: "0.4rem 1.2rem", marginBottom: "1.5rem" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#EF4444" }} />
              <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#EF4444", textTransform: "uppercase", letterSpacing: "2px" }}>The Challenge</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, lineHeight: 1.15, maxWidth: "600px" }}>
              What Was Holding<br /><span style={{ color: "#EF4444" }}>Drova Back</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }}>
            {challenges.map((c, i) => (
              <div key={i} style={{
                background: "var(--bg-secondary)", border: "1px solid var(--border)",
                borderRadius: "20px", padding: "2.5rem",
                display: "grid", gridTemplateColumns: "auto 1fr", gap: "1.75rem", alignItems: "flex-start",
                borderLeft: `4px solid ${c.color}`,
              }}>
                <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: `${c.color}12`, color: c.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {c.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "0.75rem", color: "var(--text)" }}>{c.title}</h3>
                  <p style={{ fontSize: "0.97rem", color: "var(--text-muted)", lineHeight: 1.75 }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOLUTION — vertical timeline ─── */}
      <section style={{ padding: "100px 1.5rem", background: "linear-gradient(180deg,#060d1f 0%,#0d1f40 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(59,130,246,0.05) 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="container" style={{ maxWidth: "1100px", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)", borderRadius: "50px", padding: "0.4rem 1.2rem", marginBottom: "1.5rem" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#3B82F6" }} />
              <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#60A5FA", textTransform: "uppercase", letterSpacing: "2px" }}>Our Solution</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, color: "#fff", lineHeight: 1.15 }}>
              Guided Transition to Zoho CRMPlus,<br /><span style={{ color: "#60A5FA" }}>Delivered by FI Digital</span>
            </h2>
          </div>

          {/* Timeline */}
          <div style={{ position: "relative", paddingLeft: "80px" }}>
            {/* Vertical line */}


            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              {phases.map((p, i) => (
                <div key={i} style={{ position: "relative" }}>
                  {/* Phase dot */}
                  <div style={{ position: "absolute", left: "-80px", top: "16px", width: "64px", height: "64px", borderRadius: "50%", background: `${p.color}18`, border: `2px solid ${p.color}`, display: "flex", alignItems: "center", justifyContent: "center", color: p.color, fontWeight: 900, fontSize: "0.95rem" }}>
                    {p.num}
                  </div>
                  <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "2.5rem 3rem" }}>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#fff", marginBottom: "1.75rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: p.color, display: "inline-block", flexShrink: 0 }} />
                      {p.label}
                    </h3>
                    <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                      {p.points.map((pt, j) => (
                        <li key={j} style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start", color: "rgba(255,255,255,0.7)", fontSize: "0.97rem", lineHeight: 1.75 }}>
                          <CheckCircle size={17} style={{ color: p.color, flexShrink: 0, marginTop: "4px" }} />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── RESULTS bento ─── */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div className="container" style={{ maxWidth: "1280px" }}>
          <div style={{ marginBottom: "4rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)", borderRadius: "50px", padding: "0.4rem 1.2rem", marginBottom: "1.5rem" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10B981" }} />
              <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#10B981", textTransform: "uppercase", letterSpacing: "2px" }}>The Results</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, lineHeight: 1.15 }}>
              What Drova<br /><span style={{ color: "#10B981" }}>Achieved</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1.5rem" }}>
            {results.map((r, i) => (
              <div key={i} style={{
                background: "var(--bg-secondary)", border: "1px solid var(--border)",
                borderRadius: "20px", padding: "2.5rem",
                position: "relative", overflow: "hidden"
              }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: `linear-gradient(90deg,${r.color},${r.color}44)` }} />
                <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: `${r.color}12`, color: r.color, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                  {r.icon}
                </div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "0.85rem", color: "var(--text)" }}>{r.label}</h3>
                <p style={{ fontSize: "0.97rem", color: "var(--text-muted)", lineHeight: 1.75 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIAL + VIDEO side-by-side ─── */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div className="container" style={{ maxWidth: "1280px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem", alignItems: "stretch" }}>

            {/* Testimonial */}
            <div style={{ background: "linear-gradient(135deg,#060d1f 0%,#0d1f40 100%)", borderRadius: "24px", padding: "3.5rem", position: "relative", overflow: "hidden", border: "1px solid rgba(59,130,246,0.2)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div style={{ position: "absolute", top: "1rem", left: "2rem", fontSize: "9rem", lineHeight: 1, color: "rgba(59,130,246,0.1)", fontFamily: "Georgia,serif", userSelect: "none", pointerEvents: "none" }}>"</div>
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ width: "42px", height: "3px", background: "#3B82F6", borderRadius: "2px", marginBottom: "2rem" }} />
                <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.88)", lineHeight: 1.85, fontStyle: "italic", fontWeight: 500, marginBottom: "2.5rem" }}>
                  "There's a lot of power you can get [from Zoho] if you use it properly. Even when we were evaluating Zoho, our previous sales and revenue ops colleagues were jealous of not being able to use Zoho because of its simplicity. It's highly customizable, really as simple or as complex as you need it to be."
                </p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: "50px", height: "50px", borderRadius: "50%", background: "linear-gradient(135deg,#3B82F6,#6366F1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 900, fontSize: "1rem", flexShrink: 0 }}>AL</div>
                <div>
                  <div style={{ fontWeight: 800, color: "#fff" }}>Andrew Lingley</div>
                  <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.45)" }}>Head of Growth & Marketing Ops, Drova</div>
                </div>
              </div>
            </div>

            {/* YouTube */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem" }}>
                <Play size={16} color="#EF4444" fill="#EF4444" />
                <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#EF4444", textTransform: "uppercase", letterSpacing: "2px" }}>Watch the Story</span>
              </div>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 900, lineHeight: 1.25 }}>Hear It Directly<br />from Drova</h2>
              <div style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid var(--border)", position: "relative", aspectRatio: "16/9", flex: 1, minHeight: "260px" }}>
                <iframe
                  src="https://www.youtube.com/embed/7VdGOfPOlg8"
                  title="Drova — FI Digital Case Study"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ padding: "100px 1.5rem", background: "linear-gradient(135deg,#1d4ed8 0%,#6366F1 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.07, backgroundImage: "radial-gradient(white 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="container" style={{ maxWidth: "800px", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", background: "rgba(255,255,255,0.15)", borderRadius: "50px", padding: "0.4rem 1.2rem", marginBottom: "2rem" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#fff", textTransform: "uppercase", letterSpacing: "2px" }}>Why Choose FI Digital?</span>
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, color: "#fff", marginBottom: "1.5rem", lineHeight: 1.2 }}>
            Ready to Simplify Your<br />Digital Operations?
          </h2>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.85, marginBottom: "3rem", maxWidth: "640px", margin: "0 auto 3rem" }}>
            With a proven methodology and a business-first approach, FI Digital empowers SaaS ventures to unlock the full value of Zoho — enabling teams to move faster, do more with less, and scale for the future.
          </p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem" }}>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#fff", color: "#1d4ed8", padding: "1rem 2.5rem", borderRadius: "100px", fontWeight: 800, textDecoration: "none", fontSize: "1rem", boxShadow: "0 12px 30px rgba(0,0,0,0.2)" }}>
              Start Your Transformation <ArrowUpRight size={18} />
            </Link>
            <Link href="/case-studies" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(255,255,255,0.14)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", padding: "1rem 2.5rem", borderRadius: "100px", fontWeight: 700, textDecoration: "none", fontSize: "1rem", backdropFilter: "blur(8px)" }}>
              More Case Studies
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 900px) {
          section > div > div[style*="grid-template-columns: 1fr 340px"],
          section > div > div[style*="grid-template-columns: 1fr 1fr"],
          section > div > div[style*="grid-template-columns: repeat(2,1fr)"],
          section > div > div[style*="grid-template-columns: 220px 1fr"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="padding-left: 80px"] {
            padding-left: 50px !important;
          }
        }
      `}</style>
    </div>
  );
}
