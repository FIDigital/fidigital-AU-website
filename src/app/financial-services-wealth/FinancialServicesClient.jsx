"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import TrustedBy from "@/components/TrustedBy";
import { ShieldAlert, Activity, Users, Settings, Database, Bot, Layout, ArrowRight, ChevronDown } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FinancialServicesClient() {
  const containerRef = useRef(null);
  const [expandedPillar, setExpandedPillar] = useState(null);

  useGSAP(() => {
    gsap.from(".hero-badge", { y: -16, autoAlpha: 0, duration: 0.45, ease: "power2.out" });
    gsap.from(".hero-h1", { y: 36, autoAlpha: 0, duration: 0.6, delay: 0.1, ease: "power3.out" });
    gsap.from(".hero-p", { y: 20, autoAlpha: 0, duration: 0.5, delay: 0.22, ease: "power2.out" });
    gsap.from(".hero-btn", { y: 20, autoAlpha: 0, duration: 0.5, delay: 0.35, ease: "power2.out" });

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

    gsap.fromTo(".challenge-card",
      { y: 30, autoAlpha: 0 },
      {
        y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.1, ease: "power2.out",
        scrollTrigger: { trigger: ".challenge-grid", start: "top 85%", once: true }
      }
    );

    gsap.fromTo(".pillar-card",
      { y: 40, autoAlpha: 0 },
      {
        y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.15, ease: "back.out(1.2)",
        scrollTrigger: { trigger: ".pillars-grid", start: "top 80%", once: true }
      }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <main style={{ paddingTop: "var(--header-h)", overflow: "hidden" }}>
        
        {/* ══ HERO SECTION ══════════════ */}
        <section style={{
          position: "relative",
          minHeight: "75vh",
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
            opacity: 0.45,
            pointerEvents: "none"
          }}>
            <Image 
              src="/finance-hero2.png" 
              alt="Financial Services Infrastructure" 
              fill sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover", maskImage: "radial-gradient(ellipse at right, black, transparent 75%)", WebkitMaskImage: "radial-gradient(ellipse at right, black, transparent 75%)" }}
            />
          </div>

          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <div className="hero-badge section-label" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(16, 185, 129, 0.1)", color: "#10B981", padding: "0.5rem 1rem", borderRadius: "50px", fontWeight: 700, marginBottom: "1.5rem" }}>
              <ShieldAlert size={16} /> APRA & ASIC Compliant Infrastructure
            </div>
            <h1 className="hero-h1 section-title" style={{ maxWidth: "1000px", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1.1, marginBottom: "1.5rem" }}>
              Financial Services & Wealth Management<br />
              <span style={{ color: "var(--primary)", fontWeight: 300 }}>Engineering Trust in Every Transaction</span>
            </h1>
            <p className="hero-p section-desc" style={{ maxWidth: "700px", fontSize: "1.2rem", color: "var(--text-muted)", marginBottom: "3rem" }}>
              Data platforms that satisfy APRA. AI agents that automate KYC and AML. Business systems that your advisers actually use. FI Digital builds the technology infrastructure that financial services firms need to operate at scale, stay compliant, and serve clients better.
            </p>
            <div className="hero-btn flex flex-wrap gap-4">
              <Link href="/book-discovery" className="btn-primary" style={{
                background: "var(--primary)", color: "#fff", padding: "1rem 2rem", borderRadius: "8px", fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem", transition: "all 0.2s"
              }}>
                Book a Financial Services Discovery <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        <TrustedBy />

        {/* ══ SECTION 1: THE CHALLENGE ══════════════ */}
        <section className="section" style={{ background: "var(--bg-secondary)" }}>
          <div className="container">
            <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
              <div className="section-label">Industry Pressures</div>
              <h2 className="section-title" style={{ maxWidth: "800px", margin: "0 auto 1.5rem auto" }}>
                The Financial Services Challenge
              </h2>
            </div>
            
            <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto 4rem auto" }}>
              <p style={{ fontSize: "1.1rem", color: "var(--text)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                Australian financial services firms face a converging set of pressures. Regulatory scrutiny from APRA and ASIC demands demonstrable governance over data, decisions, and customer interactions. Client expectations are rising as digital experiences set the standard in every industry. Legacy technology stacks create operational friction, manual workarounds, and reconciliation nightmares. And the cost of compliance continues to grow, consuming resources that should be spent on client service and growth.
              </p>
            </div>

            <div className="challenge-grid" style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", marginBottom: "4rem"
            }}>
              {[
                { title: "Regulatory Scrutiny", desc: "APRA and ASIC demand demonstrable governance over data, decisions, and customer interactions.", icon: ShieldAlert, color: "#EF4444" },
                { title: "Rising Expectations", desc: "Client expectations are rising as digital experiences set the standard in every industry.", icon: Activity, color: "#3B82F6" },
                { title: "Legacy Friction", desc: "Legacy technology stacks create operational friction, manual workarounds, and reconciliation nightmares.", icon: Settings, color: "#F59E0B" },
                { title: "Cost of Compliance", desc: "Compliance consuming resources that should be spent on client service and growth.", icon: Users, color: "#10B981" }
              ].map((item, i) => (
                <div key={i} className="challenge-card" style={{
                  background: "var(--card-bg)", padding: "2rem", borderRadius: "16px", border: "1px solid var(--border)", boxShadow: "0 10px 30px rgba(0,0,0,0.02)"
                }}>
                  <div style={{ background: item.color + "15", width: "50px", height: "50px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                    <item.icon size={24} color={item.color} />
                  </div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "1rem", color: "var(--text)" }}>{item.title}</h3>
                  <p style={{ color: "var(--text-muted)", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="reveal" style={{ 
              background: "linear-gradient(135deg, rgba(29,78,216,0.1) 0%, rgba(13,148,136,0.1) 100%)", 
              padding: "3rem", borderRadius: "24px", border: "1px solid rgba(29,78,216,0.2)",
              display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center"
            }}>
              <h3 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "1.5rem", maxWidth: "800px" }}>FI Digital serves financial services firms across all four pillars.</h3>
              <p style={{ fontSize: "1.1rem", color: "var(--text)", maxWidth: "900px", lineHeight: 1.7 }}>
                We build data platforms on Databricks and Snowflake that provide auditable, governed analytics. We deploy AI agents for KYC, AML screening, and document processing that <strong>reduce manual compliance workload by 60 to 80 percent</strong>. We build custom adviser portals and client-facing applications. And we modernise CRM and operational systems so your team spends time with clients instead of wrestling with software.
              </p>
            </div>
          </div>
        </section>

        {/* ══ SPLIT PANEL IMAGE SECTION ══════════════ */}
        <section className="section" style={{ background: "var(--bg)", paddingTop: "5rem" }}>
          <div className="container">
            <div style={{ display: "flex", flexWrap: "wrap", width: "100%", gap: "2rem" }}>
              
              {/* Left Split */}
              <div className="reveal" style={{ flex: "1 1 calc(50% - 1rem)", minHeight: "450px", position: "relative", minWidth: "300px", borderRadius: "24px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.05)", boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}>
                <Image src="/finance-split-left2.png" alt="Data & Compliance Visual" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
                {/* Premium Frosted Glass Text Overlay instead of dark gradient */}
                <div style={{ position: "absolute", bottom: "2rem", left: "2rem", right: "2rem", padding: "1.5rem 2rem", background: "rgba(15, 15, 20, 0.4)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <h3 style={{ color: "#fff", fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.25rem" }}>APRA / ASIC Prepared</h3>
                  <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem" }}>Governed Data Platforms</p>
                </div>
              </div>
              
              {/* Right Split */}
              <div className="reveal" style={{ flex: "1 1 calc(50% - 1rem)", minHeight: "450px", position: "relative", minWidth: "300px", borderRadius: "24px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.05)", boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}>
                <Image src="/finance-split-right2.png" alt="Human Adviser Portal" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
                {/* Premium Frosted Glass Text Overlay instead of dark gradient */}
                <div style={{ position: "absolute", bottom: "2rem", left: "2rem", right: "2rem", padding: "1.5rem 2rem", background: "rgba(15, 15, 20, 0.4)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <h3 style={{ color: "#fff", fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.25rem" }}>Modern Adviser Workspaces</h3>
                  <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem" }}>Frictionless Client Management</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══ SECTION 2: HOW EACH PILLAR SERVES FS ══════════════ */}
        <section className="section" style={{ background: "var(--bg)" }}>
          <div className="container">
            <div className="reveal" style={{ textAlign: "center", marginBottom: "5rem" }}>
              <div className="section-label">Our Methodology</div>
              <h2 className="section-title" style={{ maxWidth: "800px", margin: "0 auto" }}>
                How Each Pillar Serves Financial Services
              </h2>
            </div>

            <div className="pillars-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }}>
              
              {/* Pillar 1 */}
              <div className="pillar-card" style={{ display: "flex", flexWrap: "wrap", gap: "3rem", alignItems: "center", background: "var(--card-bg)", padding: "3rem", borderRadius: "24px", border: "1px solid var(--border)" }}>
                <div style={{ flex: "1 1 300px" }}>
                  <div style={{ width: "60px", height: "60px", background: "rgba(59, 130, 246, 0.1)", color: "#3B82F6", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                    <Database size={28} />
                  </div>
                  <h3 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "1rem", color: "var(--text)" }}>Data Platforms & Intelligence</h3>
                  <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                    Regulatory reporting that satisfies APRA and ASIC requires governed, auditable data. We build lakehouse platforms on Databricks and Snowflake with full data lineage, access controls, and automated compliance reporting.
                  </p>
                  
                  <button 
                    onClick={() => setExpandedPillar(expandedPillar === 1 ? null : 1)}
                    style={{ background: "none", border: "none", padding: 0, color: "var(--primary)", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer", fontSize: "1rem", marginBottom: "1rem" }}
                  >
                    {expandedPillar === 1 ? "Show Less" : "Read More"} <ChevronDown size={18} style={{ transform: expandedPillar === 1 ? "rotate(180deg)" : "rotate(0)", transition: "0.3s" }} />
                  </button>
                  
                  {expandedPillar === 1 && (
                    <ul style={{ listStyle: "none", padding: "1rem 0 0 0", margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem", borderTop: "1px solid var(--border)", animation: "fadeIn 0.3s ease" }}>
                      <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } auto { opacity: 1; transform: translateY(0); } }`}</style>
                      <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--text)", fontWeight: 500 }}><ShieldAlert size={18} color="#10B981" style={{minWidth: "18px"}} /> Your board gets dashboards they trust.</li>
                      <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--text)", fontWeight: 500 }}><ShieldAlert size={18} color="#10B981" style={{minWidth: "18px"}} /> Your compliance team gets audit trails they can defend.</li>
                      <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--text)", fontWeight: 500 }}><ShieldAlert size={18} color="#10B981" style={{minWidth: "18px"}} /> Your data scientists get clean datasets they can model.</li>
                    </ul>
                  )}
                </div>
                
                {/* Re-designed Databricks & Snowflake Layout (Bright, floating Glassmorphism cards) */}
                <div style={{ flex: "1 1 300px", minHeight: "350px", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap", zIndex: 1 }}>
                  {/* Glass card 1 - Databricks */}
                  <div style={{ width: "220px", height: "140px", background: "rgba(255, 255, 255, 0.03)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem", boxShadow: "0 20px 40px rgba(0,0,0,0.3)", transform: "translateY(-20px)" }}>
                    <div style={{ position: "relative", width: "100%", height: "100%" }}>
                      <Image src="/images/databricks-nobg.png" alt="Databricks" fill sizes="(max-width: 768px) 40vw, 200px" style={{ objectFit: "contain" }} />
                    </div>
                  </div>
                  {/* Glass card 2 - Snowflake */}
                  <div style={{ width: "220px", height: "140px", background: "rgba(255, 255, 255, 0.03)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem", boxShadow: "0 20px 40px rgba(0,0,0,0.3)", transform: "translateY(20px)" }}>
                    <div style={{ position: "relative", width: "100%", height: "100%" }}>
                      <Image src="/images/snowflake-nobg.png" alt="Snowflake" fill sizes="(max-width: 768px) 40vw, 200px" style={{ objectFit: "contain" }} />
                    </div>
                  </div>
                  {/* Soft Background Glow */}
                  <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "100%", height: "100%", background: "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 60%)", zIndex: -1 }}></div>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="pillar-card" style={{ display: "flex", flexWrap: "wrap", gap: "3rem", alignItems: "center", background: "var(--card-bg)", padding: "3rem", borderRadius: "24px", border: "1px solid var(--border)", flexDirection: "row-reverse" }}>
                <div style={{ flex: "1 1 300px" }}>
                  <div style={{ width: "60px", height: "60px", background: "rgba(16, 185, 129, 0.1)", color: "#10B981", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                    <Bot size={28} />
                  </div>
                  <h3 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "1rem", color: "var(--text)" }}>AI Agents & Automation</h3>
                  <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                    KYC and AML workflows are labour-intensive and error-prone when done manually. Our AI agents automate document collection, identity verification, sanctions screening, and risk scoring.
                  </p>

                  <button 
                    onClick={() => setExpandedPillar(expandedPillar === 2 ? null : 2)}
                    style={{ background: "none", border: "none", padding: 0, color: "var(--primary)", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer", fontSize: "1rem", marginBottom: "1rem" }}
                  >
                    {expandedPillar === 2 ? "Show Less" : "Read More"} <ChevronDown size={18} style={{ transform: expandedPillar === 2 ? "rotate(180deg)" : "rotate(0)", transition: "0.3s" }} />
                  </button>

                  {expandedPillar === 2 && (
                    <ul style={{ listStyle: "none", padding: "1rem 0 0 0", margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem", borderTop: "1px solid var(--border)", animation: "fadeIn 0.3s ease" }}>
                      <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--text)", fontWeight: 500 }}><ArrowRight size={18} color="var(--primary)" style={{minWidth: "18px"}} /> Claude handles the reasoning and document analysis.</li>
                      <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--text)", fontWeight: 500 }}><ArrowRight size={18} color="var(--primary)" style={{minWidth: "18px"}} /> n8n orchestrates the multi-step workflows.</li>
                      <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--text)", fontWeight: 500 }}><ArrowRight size={18} color="var(--primary)" style={{minWidth: "18px"}} /> Human reviewers approve exceptions.</li>
                      <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--text)", fontWeight: 500 }}><ShieldAlert size={18} color="#10B981" style={{minWidth: "18px"}} /> Processing time drops from days to hours. Accuracy improves. Compliance improves.</li>
                    </ul>
                  )}
                </div>
                
                {/* Refined Image container with NO strong black gradient overlay */}
                <div style={{ flex: "1 1 300px", minHeight: "350px", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", border: "1px solid rgba(255,255,255,0.05)", boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}>
                   <Image src="/images/ai-agents-finance.png" alt="AI Agent Workflows for KYC" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="pillar-card" style={{ display: "flex", flexWrap: "wrap", gap: "3rem", alignItems: "center", background: "var(--card-bg)", padding: "3rem", borderRadius: "24px", border: "1px solid var(--border)" }}>
                <div style={{ flex: "1 1 300px" }}>
                  <div style={{ width: "60px", height: "60px", background: "rgba(245, 158, 11, 0.1)", color: "#F59E0B", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                    <Layout size={28} />
                  </div>
                  <h3 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "1rem", color: "var(--text)" }}>Product Engineering</h3>
                  <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                    We build custom adviser portals, client onboarding journeys, document collection platforms, and internal workflow tools.
                  </p>
                  
                  <button 
                    onClick={() => setExpandedPillar(expandedPillar === 3 ? null : 3)}
                    style={{ background: "none", border: "none", padding: 0, color: "var(--primary)", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer", fontSize: "1rem", marginBottom: "1rem" }}
                  >
                    {expandedPillar === 3 ? "Show Less" : "Read More"} <ChevronDown size={18} style={{ transform: expandedPillar === 3 ? "rotate(180deg)" : "rotate(0)", transition: "0.3s" }} />
                  </button>

                  {expandedPillar === 3 && (
                    <div style={{ padding: "1rem 0 0 0", borderTop: "1px solid var(--border)", animation: "fadeIn 0.3s ease" }}>
                      <p style={{ fontSize: "1.05rem", color: "var(--text)", lineHeight: 1.6 }}>
                        We build financial services applications that meet the rigorous security, compliance, and user experience standards your clients and regulators explicitly expect.
                      </p>
                    </div>
                  )}
                </div>
                
                {/* Refined Image container with NO strong black gradient overlay */}
                <div style={{ flex: "1 1 300px", minHeight: "350px", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", border: "1px solid rgba(255,255,255,0.05)", boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}>
                  <Image src="/images/product-finance.png" alt="Adviser Portal Engineering" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="pillar-card" style={{ display: "flex", flexWrap: "wrap", gap: "3rem", alignItems: "center", background: "var(--card-bg)", padding: "3rem", borderRadius: "24px", border: "1px solid var(--border)", flexDirection: "row-reverse" }}>
                <div style={{ flex: "1 1 300px" }}>
                  <div style={{ width: "60px", height: "60px", background: "rgba(239, 68, 68, 0.1)", color: "#EF4444", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                    <Settings size={28} />
                  </div>
                  <h3 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "1rem", color: "var(--text)" }}>Business Systems Modernisation</h3>
                  <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                    Your CRM should be driving adviser productivity, not creating admin burden. We modernise Zoho CRM and other platforms for financial services workflows.
                  </p>
                  
                  <button 
                    onClick={() => setExpandedPillar(expandedPillar === 4 ? null : 4)}
                    style={{ background: "none", border: "none", padding: 0, color: "var(--primary)", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer", fontSize: "1rem", marginBottom: "1rem" }}
                  >
                    {expandedPillar === 4 ? "Show Less" : "Read More"} <ChevronDown size={18} style={{ transform: expandedPillar === 4 ? "rotate(180deg)" : "rotate(0)", transition: "0.3s" }} />
                  </button>

                  {expandedPillar === 4 && (
                    <ul style={{ listStyle: "none", padding: "1rem 0 0 0", margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem", borderTop: "1px solid var(--border)", animation: "fadeIn 0.3s ease" }}>
                      <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--text)", fontWeight: 500 }}><ArrowRight size={18} color="var(--primary)" style={{minWidth: "18px"}} /> Lead management</li>
                      <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--text)", fontWeight: 500 }}><ArrowRight size={18} color="var(--primary)" style={{minWidth: "18px"}} /> Pipeline tracking</li>
                      <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--text)", fontWeight: 500 }}><ArrowRight size={18} color="var(--primary)" style={{minWidth: "18px"}} /> Client communication</li>
                      <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--text)", fontWeight: 500 }}><ArrowRight size={18} color="var(--primary)" style={{minWidth: "18px"}} /> Regulatory record-keeping</li>
                    </ul>
                  )}
                </div>
                
                {/* Re-designed Zoho Container: Premium clean backdrop instead of murky dark gradient */}
                <div style={{ flex: "1 1 300px", minHeight: "350px", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
                   <div style={{ width: "220px", height: "220px", background: "rgba(255, 255, 255, 0.02)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", padding: "3rem", boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}>
                     <div style={{ position: "relative", width: "100%", height: "100%", filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.4)) brightness(1.2)" }}>
                       <Image src="/images/zoho-logo-nobg.png" alt="Zoho" fill sizes="(max-width: 768px) 40vw, 200px" style={{ objectFit: "contain" }} />
                     </div>
                   </div>
                   {/* Soft Background Glow */}
                   <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "100%", height: "100%", background: "radial-gradient(circle, rgba(239, 68, 68, 0.08) 0%, transparent 60%)", zIndex: -1 }}></div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
