"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Users, Zap, BarChart3, Heart, Shield, GitMerge, MessageSquare, CheckCircle } from "lucide-react";

const C = "#8B5CF6";

const challenges = [
  { icon: <GitMerge size={20}/>, title: "Disconnected Systems", desc: "Gravity Forms, Zoho CRM, and Brevity Care Software were not integrated — creating manual processes and data silos across Participants, SCs, and Nominees.", color: "#EF4444" },
  { icon: <Users size={20}/>, title: "Inefficient Onboarding", desc: "Manual onboarding and task allocation couldn't scale to support the growing Participant base, slowing response times.", color: "#F97316" },
  { icon: <Shield size={20}/>, title: "Data Integrity Issues", desc: "Inconsistent data entry and fragmented systems led to errors, incomplete records, and unreliable reporting.", color: "#8B5CF6" },
  { icon: <MessageSquare size={20}/>, title: "Customer Experience Gaps", desc: "No feedback system to capture Participant sentiment and identify churn risks — leading to retention challenges.", color: "#F59E0B" },
];

const crmSolutions = [
  { label: "Relationship Mapping", desc: "Configured CRM modules for many-to-many relationships between Participants, SCs, Nominees, and Providers — enabling a full Customer 360 view." },
  { label: "Website Integration", desc: "Gravity Forms integrated with Zoho CRM via Zapier — automating lead capture, email validation, and record creation/update for all three Stakeholder types." },
  { label: "Streamlined Onboarding", desc: "Automated lead-to-contact conversion based on Participant type and source, removing manual steps from the onboarding journey." },
  { label: "Task Automation", desc: "Workflows automatically assign tasks by lead territory or contact type, with dashboards tracking actions by agent, status, and due date." },
  { label: "Data-Driven Insights", desc: "Custom dashboards and reports for lead conversion metrics, SC referrals, and Participant retention." },
];

const deskSolutions = [
  { label: "Intelligent Ticket Assignment", desc: "Rules assign tickets based on agent skillsets, specialties, availability, and department — boosting efficiency." },
  { label: "Email Domain Routing", desc: "Dynamic email domain-based ticket categorisation streamlines resolution across departments." },
  { label: "Automated Escalations", desc: "Department-wise tracking with automated escalations for high-priority Participant issues." },
];

const results = [
  { icon: <Zap size={26}/>, label: "60% Fewer Manual Tasks", desc: "Integrating tools and workflows into a unified CRM eliminated 60% of manual work — significant efficiency gains.", color: C },
  { icon: <Shield size={26}/>, label: "High-Quality Data", desc: "Enhanced validation and relationship mapping produced reliable, actionable insights for leadership teams.", color: "#3B82F6" },
  { icon: <Heart size={26}/>, label: "Improved Satisfaction", desc: "Regular Zoho Surveys and sentiment analysis boosted Participant satisfaction, with automated reminders strengthening SC relationships.", color: "#EC4899" },
  { icon: <Users size={26}/>, label: "Scalable Platform", desc: "The unified Zoho CRM platform now scales with MyAutonomy's growing Participant base without adding operational overhead.", color: "#10B981" },
];

export default function MyAutonomyCaseStudy() {
  return (
    <div style={{ background: "var(--bg)", color: "var(--text)", paddingTop: "var(--header-h)" }}>

      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg,#0d0520 0%,#1e0a4a 60%,#0d0520 100%)", padding: "clamp(80px,10vh,140px) 1.5rem 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(139,92,246,0.07) 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
        <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle,rgba(139,92,246,0.13) 0%,transparent 70%)" }} />

        <div className="container" style={{ maxWidth: "1280px", position: "relative", zIndex: 1 }}>
          <Link href="/case-studies" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "rgba(255,255,255,0.5)", fontWeight: 600, textDecoration: "none", fontSize: "0.85rem", marginBottom: "3rem" }}>
            <ArrowLeft size={15} /> All Case Studies
          </Link>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "4rem", alignItems: "end", paddingBottom: "4rem" }}>
            <div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "2rem" }}>
                {["Zoho CRM", "NDIS", "Plan Management", "Healthcare"].map(t => (
                  <span key={t} style={{ background: "rgba(139,92,246,0.14)", border: "1px solid rgba(139,92,246,0.28)", color: "#C4B5FD", padding: "0.3rem 1rem", borderRadius: "50px", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "1px", textTransform: "uppercase" }}>{t}</span>
                ))}
              </div>
              <h1 style={{ fontSize: "clamp(2rem,5vw,3.6rem)", fontWeight: 900, lineHeight: 1.1, color: "#fff", letterSpacing: "-0.025em", marginBottom: "2rem" }}>
                Transforming NDIS Plan<br />Management for <span style={{ color: "#A78BFA" }}>My Autonomy</span><br />with Zoho CRM
              </h1>
              <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, maxWidth: "600px" }}>
                Australia's leading NDIS Plan Management provider eliminates fragmented workflows, automates Participant onboarding, and builds a scalable CRM ecosystem for Participants, Support Coordinators, Nominees, and Providers.
              </p>
              <div style={{ display: "flex", gap: "2.5rem", marginTop: "3rem", flexWrap: "wrap" }}>
                {[{ v: "60%", l: "Manual Tasks Reduced" }, { v: "4", l: "Stakeholder Types Unified" }, { v: "360°", l: "Participant View" }].map(s => (
                  <div key={s.l} style={{ borderLeft: `3px solid ${C}`, paddingLeft: "1rem" }}>
                    <div style={{ fontSize: "1.7rem", fontWeight: 900, color: "#fff" }}>{s.v}</div>
                    <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", fontWeight: 600 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "24px", padding: "2.5rem", backdropFilter: "blur(12px)" }}>
              <div style={{ background: "rgba(255,255,255,0.96)", borderRadius: "16px", height: "100px", position: "relative", marginBottom: "1.5rem", overflow: "hidden" }}>
                <Image src="/images/Case-Study/Autonomy.png" alt="My Autonomy" fill sizes="(max-width: 768px) 40vw, 200px" style={{ objectFit: "contain", padding: "10px 16px" }} />
              </div>
              {[{ label: "Client", value: "My Autonomy" }, { label: "Sector", value: "NDIS Plan Management" }, { label: "Solution", value: "Zoho CRM + Desk" }, { label: "Partner", value: "FI Digital" }].map(r => (
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
            <p style={{ fontSize: "clamp(1.05rem,2vw,1.2rem)", color: "var(--text-muted)", lineHeight: 1.9 }}>
              <strong style={{ color: "var(--text)" }}>My Autonomy</strong> is a leading Australian NDIS Plan Management provider dedicated to helping individuals with disabilities and their carers lead independent lives. Operating across Australia, MyAutonomy manages NDIS plans, financial transactions, and service delivery — serving Participants, Support Coordinators, Nominees, and Providers as a trusted ecosystem partner.
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
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, lineHeight: 1.15 }}>Fragmented Workflows<br /><span style={{ color: "#EF4444" }}>Limiting Growth</span></h2>
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
      <section style={{ padding: "100px 1.5rem", background: "linear-gradient(180deg,#0d0520 0%,#1e0a4a 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(139,92,246,0.05) 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="container" style={{ maxWidth: "1100px", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.2)", borderRadius: "50px", padding: "0.4rem 1.2rem", marginBottom: "1.5rem" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: C }} />
              <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#C4B5FD", textTransform: "uppercase", letterSpacing: "2px" }}>The Solution</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, color: "#fff", lineHeight: 1.15 }}>
              A Unified Zoho Ecosystem<br /><span style={{ color: "#A78BFA" }}>Built for NDIS Operations</span>
            </h2>
          </div>

          {/* CRM features */}
          <div style={{ marginBottom: "2rem" }}>
            <div style={{ display: "inline-flex", background: `${C}18`, border: `1px solid ${C}33`, borderRadius: "50px", padding: "0.3rem 1rem", marginBottom: "1.5rem" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#A78BFA" }}>Zoho CRM — Participant Management</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {crmSolutions.map((s, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "1.75rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <CheckCircle size={18} color={C} style={{ flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <div style={{ fontSize: "0.9rem", fontWeight: 800, color: "#fff", marginBottom: "0.4rem" }}>{s.label}</div>
                    <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desk features */}
          <div>
            <div style={{ display: "inline-flex", background: "rgba(59,130,246,0.14)", border: "1px solid rgba(59,130,246,0.28)", borderRadius: "50px", padding: "0.3rem 1rem", marginBottom: "1.5rem" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#93C5FD" }}>Zoho Desk — Support Enhancements</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1rem" }}>
              {deskSolutions.map((s, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "1.75rem", borderTop: "3px solid #3B82F6" }}>
                  <div style={{ fontSize: "0.9rem", fontWeight: 800, color: "#fff", marginBottom: "0.65rem" }}>{s.label}</div>
                  <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg-secondary)" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          <div style={{ background: "linear-gradient(135deg,#0d0520,#1e0a4a)", border: "1px solid rgba(139,92,246,0.25)", borderRadius: "24px", padding: "3.5rem", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: "1rem", left: "2.5rem", fontSize: "9rem", lineHeight: 1, color: "rgba(139,92,246,0.1)", fontFamily: "Georgia,serif", userSelect: "none" }}>"</div>
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ width: "42px", height: "3px", background: C, borderRadius: "2px", marginBottom: "2rem" }} />
              <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.88)", lineHeight: 1.9, fontStyle: "italic", fontWeight: 500, marginBottom: "2.5rem" }}>
                "Adithya and the team at FI Digital were extremely helpful and knowledgeable with respect to maximising the capability of the Zoho ecosystem. We found Adithya and the team to be proactive, consultative and willing to not only challenge conventional thinking with respect to business growth and operations, but provide alternative perspectives and solutions that would capitalise on the use of the Zoho One platform. Both John and I have had exposure to Salesforce and Microsoft Dynamics, and we can honestly say — Zoho is a competitively priced and feature-stacked environment, and we're most impressed with FI Digital's ability to connect both face to face in Melbourne and remotely."
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: `linear-gradient(135deg,${C},#6366F1)`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 900, fontSize: "1rem", flexShrink: 0 }}>MA</div>
                <div>
                  <div style={{ fontWeight: 800, color: "#fff" }}>My Autonomy Leadership Team</div>
                  <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.45)" }}>My Autonomy, Australia</div>
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
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, lineHeight: 1.15 }}>Scalable, Efficient &<br /><span style={{ color: C }}>Participant-First</span></h2>
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
          <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, color: "#fff", marginBottom: "1.5rem", lineHeight: 1.2 }}>
            Ready to Transform Your<br />Care Operations with Zoho?
          </h2>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.88)", lineHeight: 1.85, marginBottom: "3rem", maxWidth: "640px", margin: "0 auto 3rem" }}>
            FI Digital specializes in Zoho CRM implementations for healthcare, NDIS, and care organisations — delivering integrated, scalable, and people-first platforms that grow with your mission.
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
          section > div > div[style*="grid-template-columns: repeat(3,1fr)"],
          section > div > div[style*="grid-template-columns: 200px 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
