"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { ShieldAlert, BarChart3, Bot, MonitorSmartphone, Layers, ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FinanceClient() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".hero-badge", { y: -16, autoAlpha: 0, duration: 0.45, ease: "power2.out" });
    gsap.from(".hero-h1", { y: 36, autoAlpha: 0, duration: 0.6, delay: 0.1, ease: "power3.out" });
    gsap.from(".hero-p", { y: 20, autoAlpha: 0, duration: 0.5, delay: 0.22, ease: "power2.out" });

    gsap.utils.toArray(".reveal").forEach((el) => {
      gsap.fromTo(el,
        { y: 30, autoAlpha: 0 },
        {
          y: 0, autoAlpha: 1, duration: 0.6, ease: "power2.out",
          clearProps: "transform,opacity,visibility",
          scrollTrigger: { trigger: el, start: "top 85%", once: true }
        }
      );
    });

    // Bento grid stagger
    gsap.fromTo(".bento-card", 
      { y: 30, autoAlpha: 0 }, 
      { 
        y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.1, ease: "power2.out",
        scrollTrigger: { trigger: ".bento-grid", start: "top 80%", once: true }
      }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <main style={{ paddingTop: "var(--header-h)", overflow: "hidden", background: "var(--bg)" }}>
        
        {/* ══ HERO SECTION (STANDARD ACROSS PAGES) ══════════════ */}
        <section style={{
          position: "relative",
          minHeight: "65vh",
          display: "flex",
          alignItems: "center",
          padding: "clamp(80px, 10vh, 120px) 1.5rem 80px",
          background: "var(--bg)",
          overflow: "hidden"
        }}>
          <div style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "60%",
            height: "100%",
            zIndex: 0,
            opacity: 0.4,
            pointerEvents: "none"
          }}>
            <Image 
              src="/finance-hero.png" 
              alt="Financial Services Tech Architecture" 
              fill
              style={{ objectFit: "cover", maskImage: "radial-gradient(circle at right, black, transparent 80%)", WebkitMaskImage: "radial-gradient(circle at right, black, transparent 80%)" }}
            />
          </div>

          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <div className="hero-badge section-label" style={{ color: "var(--primary)", borderColor: "rgba(29, 78, 216, 0.3)", background: "rgba(29, 78, 216, 0.1)" }}>
              Financial Services & Wealth Management
            </div>
            <h1 className="hero-h1 section-title" style={{ maxWidth: 900, fontSize: "clamp(2.4rem, 6vw, 4rem)", fontWeight: 900, lineHeight: 1.1, color: "var(--text)", letterSpacing: "-0.025em", marginBottom: "1.25rem" }}>
              Engineering Trust <br />
              <span style={{ color: "var(--primary)" }}>In Every Transaction.</span>
            </h1>
            <p className="hero-p section-desc" style={{ maxWidth: 750, fontSize: "clamp(1.1rem, 2vw, 1.25rem)", color: "var(--text-muted)", lineHeight: 1.7 }}>
              Data platforms that satisfy APRA. AI agents that automate KYC and AML. Business systems that your advisers actually use. FI Digital builds the technology infrastructure that financial services firms need to operate at scale, stay compliant, and serve clients better.
            </p>
          </div>
        </section>

        {/* ══ SECTION 1: THE CHALLENGE ════════════════════════════ */}
        <section style={{ padding: "6rem 0", background: "var(--bg-secondary)" }}>
          <div className="container">
            <div className="reveal" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", marginBottom: "4rem" }}>
              <ShieldAlert size={48} style={{ margin: "0 auto 1.5rem auto", color: "var(--primary)", opacity: 0.8 }} />
              <h2 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", fontWeight: 800, marginBottom: "1.5rem" }}>
                The Converging Pressures of Financial Services
              </h2>
              <p className="section-desc" style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.5rem", textAlign: "left" }}>
                Australian financial services firms face a converging set of pressures. Regulatory scrutiny from <strong style={{ color: "var(--text)" }}>APRA and ASIC</strong> demands demonstrable governance over data, decisions, and customer interactions. Client expectations are rising as digital experiences set the standard in every industry. Legacy technology stacks create operational friction, manual workarounds, and reconciliation nightmares. And the cost of compliance continues to grow, consuming resources that should be spent on client service and growth.
              </p>
              <p className="section-desc" style={{ fontSize: "1.1rem", lineHeight: 1.8, textAlign: "left" }}>
                FI Digital serves financial services firms across all four pillars. We build data platforms on Databricks and Snowflake that provide auditable, governed analytics. We deploy AI agents for KYC, AML screening, and document processing that <strong style={{ color: "var(--text)" }}>reduce manual compliance workload by 60 to 80 percent</strong>. We build custom adviser portals and client-facing applications. And we modernise CRM and operational systems so your team spends time with clients instead of wrestling with software.
              </p>
            </div>

            {/* SPLIT PANEL DESIGN REQUESTED IN BRIEF */}
            <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", borderRadius: "24px", overflow: "hidden", boxShadow: "var(--card-shadow)", border: "1px solid var(--border)" }}>
              <div style={{ position: "relative", height: "450px" }}>
                <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(to right, rgba(0,0,0,0.6), transparent)", display: "flex", alignItems: "flex-end", padding: "2rem" }}>
                  <div style={{ background: "var(--card-bg)", padding: "1rem 1.5rem", borderRadius: "12px", border: "1px solid var(--border)", backdropFilter: "blur(10px)" }}>
                    <div style={{ color: "var(--text)", fontWeight: 700, fontSize: "1.1rem" }}>Data & Compliance Hub</div>
                    <div style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>APRA / ASIC Auditable Reporting</div>
                  </div>
                </div>
                <Image src="/finance-split-left.png" alt="Data Compliance Dashboard" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ position: "relative", height: "450px" }}>
                <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(to left, rgba(0,0,0,0.6), transparent)", display: "flex", alignItems: "flex-end", justifyContent: "flex-end", padding: "2rem" }}>
                  <div style={{ background: "var(--card-bg)", padding: "1rem 1.5rem", borderRadius: "12px", border: "1px solid var(--border)", backdropFilter: "blur(10px)", textAlign: "right" }}>
                    <div style={{ color: "var(--text)", fontWeight: 700, fontSize: "1.1rem" }}>Adviser Portal Interface</div>
                    <div style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>Modern Human-Centric Systems</div>
                  </div>
                </div>
                <Image src="/finance-split-right.png" alt="Human Adviser interface" fill style={{ objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </section>

        {/* ══ SECTION 2: THE 4 PILLARS (BENTO GRID) ════════════════ */}
        <section style={{ padding: "4rem 0 8rem 0", background: "var(--bg)" }}>
          <div className="container">
            <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
              <div style={{ color: "var(--primary)", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", fontSize: "0.9rem", marginBottom: "1rem" }}>
                ZOHO · DATABRICKS · SNOWFLAKE · CLAUDE AI
              </div>
              <h2 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", fontWeight: 800 }}>
                How Each Pillar Serves Financial Services
              </h2>
            </div>

            <style>{`
              .fin-card { background: var(--card-bg); border: 1px solid var(--border); transition: border-color 0.3s; }
              .fin-card:hover { border-color: var(--primary); }
            `}</style>
            
            <div className="bento-grid" style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(12, 1fr)", 
              gridAutoRows: "minmax(300px, auto)", 
              gap: "1.5rem" 
            }}>
              
              {/* Box 1: Data Platforms (Large) */}
              <div className="bento-card fin-card" style={{ gridColumn: "span 7", borderRadius: "24px", padding: "2.5rem", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "relative", zIndex: 2 }}>
                  <BarChart3 style={{ color: "var(--primary)", marginBottom: "1.5rem" }} size={32} />
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text)", marginBottom: "1rem" }}>Data Platforms and Intelligence</h3>
                  <p style={{ color: "var(--text-muted)", lineHeight: 1.7, fontSize: "1rem", maxWidth: "85%" }}>
                    Regulatory reporting that satisfies APRA and ASIC requires governed, auditable data. We build lakehouse platforms on Databricks and Snowflake with full data lineage, access controls, and automated compliance reporting. Your board gets dashboards they trust. Your compliance team gets audit trails they can defend. Your data scientists get clean datasets they can model.
                  </p>
                </div>
                <div style={{ position: "absolute", bottom: -20, right: -20, width: "350px", height: "300px", opacity: 0.15, zIndex: 1, mixBlendMode: "luminosity" }}>
                  <Image src="/finance-lakehouse.png" alt="Lakehouse Diagram" fill style={{ objectFit: "contain" }} />
                </div>
              </div>

              {/* Box 2: AI Agents (Medium) */}
              <div className="bento-card fin-card" style={{ gridColumn: "span 5", borderRadius: "24px", padding: "2.5rem", display: "flex", flexDirection: "column" }}>
                <Bot style={{ color: "var(--primary)", marginBottom: "1.5rem" }} size={32} />
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text)", marginBottom: "1rem" }}>AI Agents & Automation</h3>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.6, fontSize: "0.95rem", flex: 1 }}>
                  KYC and AML workflows are labour-intensive and error-prone when done manually. Our AI agents automate document collection, identity verification, sanctions screening, and risk scoring. Claude handles the reasoning and document analysis. n8n orchestrates the multi-step workflows. Human reviewers approve exceptions. <strong style={{ color: "var(--text)" }}>Processing time drops from days to hours. Accuracy improves. Compliance improves.</strong>
                </p>
              </div>

              {/* Box 3: Product Engineering (Medium) */}
              <div className="bento-card fin-card" style={{ gridColumn: "span 6", borderRadius: "24px", padding: "2.5rem" }}>
                <MonitorSmartphone style={{ color: "var(--primary)", marginBottom: "1.5rem" }} size={32} />
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text)", marginBottom: "1rem" }}>Product Engineering</h3>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                  Adviser portals, client onboarding journeys, document collection platforms, and internal workflow tools. We build custom financial services applications that meet the strict security, compliance, and seamless user experience standards your high-net-worth clients and regulators expect.
                </p>
              </div>

              {/* Box 4: Business Systems (Medium) */}
              <div className="bento-card fin-card" style={{ gridColumn: "span 6", borderRadius: "24px", padding: "2.5rem" }}>
                <Layers style={{ color: "var(--primary)", marginBottom: "1.5rem" }} size={32} />
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text)", marginBottom: "1rem" }}>Business Systems Modernisation</h3>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                  Your CRM should be driving adviser productivity, not creating admin burden. We modernise Zoho CRM and other operational platforms for complex financial services workflows: lead management, pipeline tracking, sensitive client communication, and rigorous regulatory record-keeping.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ══ CTA SECTION ══════════════════════════════════════════ */}
        <section style={{ padding: "5rem 1.5rem", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)", textAlign: "center" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "var(--text)", marginBottom: "2rem" }}>Ready to modernize your operations?</h2>
          <a href="/book-discovery" style={{ 
            display: "inline-flex", alignItems: "center", gap: "0.75rem", 
            background: "var(--primary)", color: "white", padding: "1rem 2rem", 
            borderRadius: "12px", fontWeight: 700, fontSize: "1.1rem", textDecoration: "none",
            boxShadow: "0 10px 25px -5px rgba(29, 78, 216, 0.4)", transition: "transform 0.2s"
          }}>
            Book a Financial Services Discovery Session <ArrowRight size={20} />
          </a>
        </section>

      </main>
    </div>
  );
}
