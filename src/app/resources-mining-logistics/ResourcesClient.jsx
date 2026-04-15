"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import {
  Database, Bot, Layout, Settings,
  ArrowRight, ChevronDown,
  Zap, Truck, AlertTriangle, BarChart3
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ResourcesClient() {
  const containerRef = useRef(null);
  const [expandedPillar, setExpandedPillar] = useState(null);

  useGSAP(() => {
    gsap.from(".hero-badge", { y: -16, autoAlpha: 0, duration: 0.45, ease: "power2.out" });
    gsap.from(".hero-h1",   { y: 36,  autoAlpha: 0, duration: 0.6,  delay: 0.1,  ease: "power3.out" });
    gsap.from(".hero-p",    { y: 20,  autoAlpha: 0, duration: 0.5,  delay: 0.22, ease: "power2.out" });
    gsap.from(".hero-btn",  { y: 20,  autoAlpha: 0, duration: 0.5,  delay: 0.35, ease: "power2.out" });

    gsap.utils.toArray(".reveal").forEach((el) => {
      gsap.fromTo(el,
        { y: 30, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.6, ease: "power2.out",
          clearProps: "transform,opacity,visibility",
          scrollTrigger: { trigger: el, start: "top 85%", once: true } }
      );
    });

    gsap.fromTo(".challenge-card",
      { y: 30, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.1, ease: "power2.out",
        scrollTrigger: { trigger: ".challenge-grid", start: "top 85%", once: true } }
    );

    gsap.fromTo(".pillar-card",
      { y: 40, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.15, ease: "back.out(1.2)",
        scrollTrigger: { trigger: ".pillars-grid", start: "top 80%", once: true } }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <main style={{ paddingTop: "var(--header-h)", overflow: "hidden" }}>

        {/* ══ HERO ══════════════════════════════════════════════════════════ */}
        <section style={{
          position: "relative", minHeight: "75vh", display: "flex", alignItems: "center",
          padding: "clamp(80px,10vh,120px) 1.5rem 80px",
          background: "var(--bg)", overflow: "hidden"
        }}>
          <div style={{
            position: "absolute", top: 0, right: 0,
            width: "60%", height: "100%",
            zIndex: 0, opacity: 0.45, pointerEvents: "none"
          }}>
            <Image
              src="/images/resources-hero.png"
              alt="Resources Mining Logistics Technology"
              fill
              style={{
                objectFit: "cover",
                maskImage: "radial-gradient(ellipse at right, black, transparent 75%)",
                WebkitMaskImage: "radial-gradient(ellipse at right, black, transparent 75%)"
              }}
            />
          </div>

          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <div className="hero-badge section-label" style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: "rgba(245,158,11,0.1)", color: "#D97706",
              padding: "0.5rem 1rem", borderRadius: "50px", fontWeight: 700, marginBottom: "1.5rem"
            }}>
              <Zap size={16} /> Built for Australian Resources, Mining & Logistics
            </div>

            <h1 className="hero-h1 section-title" style={{
              maxWidth: "1000px", fontSize: "clamp(2.5rem,6vw,4.5rem)", lineHeight: 1.1, marginBottom: "1.5rem"
            }}>
              Resources, Mining & Logistics<br />
              <span style={{ color: "var(--primary)", fontWeight: 300 }}>
                Engineering Intelligence Into Operations
              </span>
            </h1>

            <p className="hero-p section-desc" style={{
              maxWidth: "700px", fontSize: "1.2rem", color: "var(--text-muted)", marginBottom: "3rem"
            }}>
              Telemetry pipelines for predictive maintenance. AI for dispatch optimisation. Data platforms for supply-chain analytics. Mobile apps for field operations. FI Digital builds technology for Australian resources, mining, and logistics companies.
            </p>

            <div className="hero-btn">
              <Link href="/book-discovery" style={{
                background: "var(--primary)", color: "#fff", padding: "1rem 2rem",
                borderRadius: "8px", fontWeight: 600, textDecoration: "none",
                display: "inline-flex", alignItems: "center", gap: "0.5rem", transition: "all 0.2s"
              }}>
                Book a Resources & Logistics Discovery Session <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* ══ SECTION 1: THE CHALLENGE ══════════════════════════════════════ */}
        <section className="section" style={{ background: "var(--bg-secondary)" }}>
          <div className="container">
            <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
              <div className="section-label">Industry Challenge</div>
              <h2 className="section-title" style={{ maxWidth: "800px", margin: "0 auto" }}>
                The Industry Challenge
              </h2>
            </div>

            {/* Verbatim paragraph */}
            <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto 4rem auto" }}>
              <p style={{ fontSize: "1.1rem", color: "var(--text)", lineHeight: 1.85 }}>
                Resources, mining, and logistics companies operate in demanding environments. Equipment failures cost millions in downtime. Supply chains span thousands of kilometres. Field workers operate in remote locations with limited connectivity. Regulatory and ESG reporting requirements continue to expand. And margins depend on operational efficiency that most legacy technology stacks cannot deliver. FI Digital serves mining companies, oil and gas operators, logistics firms, and supply-chain operators across Australia. We build the technology that turns operational data into competitive advantage.
              </p>
            </div>

            {/* Challenge cards */}
            <div className="challenge-grid" style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "2rem", marginBottom: "4rem"
            }}>
              {[
                { title: "Equipment Downtime",       desc: "Equipment failures cost millions in downtime. Legacy monitoring cannot predict failures before they occur.", icon: AlertTriangle, color: "#EF4444" },
                { title: "Remote Operations",         desc: "Field workers operate in remote locations with limited connectivity, creating data gaps and coordination challenges.", icon: Zap,          color: "#F59E0B" },
                { title: "Vast Supply Chains",        desc: "Supply chains span thousands of kilometres, making inventory optimisation and route efficiency extremely complex.", icon: Truck,        color: "#3B82F6" },
                { title: "ESG & Compliance Pressure", desc: "Regulatory and ESG reporting requirements continue to expand, demanding accurate and auditable operational data.", icon: BarChart3,    color: "#10B981" },
              ].map((item, i) => (
                <div key={i} className="challenge-card" style={{
                  background: "var(--card-bg)", padding: "2rem", borderRadius: "16px",
                  border: "1px solid var(--border)", boxShadow: "0 10px 30px rgba(0,0,0,0.02)"
                }}>
                  <div style={{
                    background: item.color + "15", width: "50px", height: "50px",
                    borderRadius: "12px", display: "flex", alignItems: "center",
                    justifyContent: "center", marginBottom: "1.5rem"
                  }}>
                    <item.icon size={24} color={item.color} />
                  </div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--text)" }}>{item.title}</h3>
                  <p style={{ color: "var(--text-muted)", lineHeight: 1.6, fontSize: "0.97rem" }}>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Callout band */}
            <div className="reveal" style={{
              background: "linear-gradient(135deg, rgba(245,158,11,0.1) 0%, rgba(59,130,246,0.1) 100%)",
              padding: "3rem", borderRadius: "24px", border: "1px solid rgba(245,158,11,0.25)",
              textAlign: "center"
            }}>
              <h3 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "1.25rem", maxWidth: "800px", margin: "0 auto 1.25rem auto" }}>
                We build the technology that turns operational data into competitive advantage.
              </h3>
              <p style={{ fontSize: "1.05rem", color: "var(--text)", maxWidth: "860px", margin: "0 auto", lineHeight: 1.75 }}>
                Mining companies · Oil and gas operators · Logistics firms · Supply-chain operators — across Australia.
              </p>
            </div>
          </div>
        </section>

        {/* ══ SPLIT PANELS ═════════════════════════════════════════════════ */}
        <section className="section" style={{ background: "var(--bg)" }}>
          <div className="container">
            <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
              <div className="reveal" style={{
                flex: "1 1 calc(50% - 1rem)", minHeight: "450px", minWidth: "300px",
                position: "relative", borderRadius: "24px", overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.05)", boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
              }}>
                <Image src="/images/resources-split-left.png" alt="Mining operations and telemetry" fill style={{ objectFit: "cover" }} />
                <div style={{
                  position: "absolute", bottom: "2rem", left: "2rem", right: "2rem",
                  padding: "1.5rem 2rem",
                  background: "rgba(10,10,15,0.45)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
                  borderRadius: "16px", border: "1px solid rgba(255,255,255,0.1)"
                }}>
                  <h3 style={{ color: "#fff", fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.2rem" }}>Predictive Operations</h3>
                  <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem" }}>Telemetry · IoT · SCADA Pipelines</p>
                </div>
              </div>

              <div className="reveal" style={{
                flex: "1 1 calc(50% - 1rem)", minHeight: "450px", minWidth: "300px",
                position: "relative", borderRadius: "24px", overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.05)", boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
              }}>
                <Image src="/images/resources-split-right.png" alt="Logistics dispatch and route optimisation" fill style={{ objectFit: "cover" }} />
                <div style={{
                  position: "absolute", bottom: "2rem", left: "2rem", right: "2rem",
                  padding: "1.5rem 2rem",
                  background: "rgba(10,10,15,0.45)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
                  borderRadius: "16px", border: "1px solid rgba(255,255,255,0.1)"
                }}>
                  <h3 style={{ color: "#fff", fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.2rem" }}>Dispatch Optimisation</h3>
                  <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem" }}>AI Route & Fleet Management</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ SECTION 2: HOW EACH PILLAR SERVES ════════════════════════════ */}
        <section className="section" style={{ background: "var(--bg)" }}>
          <div className="container">
            <div className="reveal" style={{ textAlign: "center", marginBottom: "5rem" }}>
              <div className="section-label">Our Methodology</div>
              <h2 className="section-title" style={{ maxWidth: "800px", margin: "0 auto" }}>
                How Each Pillar Serves Resources & Logistics
              </h2>
            </div>

            <div className="pillars-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }}>

              {/* ── Pillar 1: Data Platforms ── */}
              <div className="pillar-card" style={{
                display: "flex", flexWrap: "wrap", gap: "3rem", alignItems: "center",
                background: "var(--card-bg)", padding: "3rem", borderRadius: "24px", border: "1px solid var(--border)"
              }}>
                <div style={{ flex: "1 1 300px" }}>
                  <div style={{ width: "60px", height: "60px", background: "rgba(59,130,246,0.1)", color: "#3B82F6", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                    <Database size={28} />
                  </div>
                  <h3 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "1rem", color: "var(--text)" }}>Data Platforms & Intelligence</h3>
                  <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                    Telemetry data from sensors, IoT devices, and SCADA systems flows into lakehouse platforms built on Databricks or Snowflake.
                  </p>

                  <button onClick={() => setExpandedPillar(expandedPillar === 1 ? null : 1)} style={{
                    background: "none", border: "none", padding: 0, color: "var(--primary)",
                    fontWeight: 600, display: "flex", alignItems: "center", gap: "0.5rem",
                    cursor: "pointer", fontSize: "1rem", marginBottom: "1rem"
                  }}>
                    {expandedPillar === 1 ? "Show Less" : "Read More"}
                    <ChevronDown size={18} style={{ transform: expandedPillar === 1 ? "rotate(180deg)" : "rotate(0)", transition: "0.3s" }} />
                  </button>

                  {expandedPillar === 1 && (
                    <ul style={{ listStyle: "none", padding: "1rem 0 0 0", margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem", borderTop: "1px solid var(--border)", animation: "fadeIn 0.3s ease" }}>
                      <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "var(--text)", fontWeight: 500 }}><ArrowRight size={18} color="var(--primary)" style={{ minWidth: "18px", marginTop: "2px" }} /> Predictive maintenance models identify equipment failures before they happen.</li>
                      <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "var(--text)", fontWeight: 500 }}><ArrowRight size={18} color="var(--primary)" style={{ minWidth: "18px", marginTop: "2px" }} /> Supply-chain analytics optimise inventory levels and logistics routes.</li>
                      <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "var(--text)", fontWeight: 500 }}><ArrowRight size={18} color="var(--primary)" style={{ minWidth: "18px", marginTop: "2px" }} /> ESG dashboards aggregate environmental and safety metrics for board and regulatory reporting.</li>
                    </ul>
                  )}
                </div>

                {/* Databricks + Snowflake glass cards */}
                <div style={{ flex: "1 1 300px", minHeight: "350px", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap", zIndex: 1 }}>
                  <div style={{ width: "210px", height: "130px", background: "rgba(255,255,255,0.03)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem", boxShadow: "0 20px 40px rgba(0,0,0,0.3)", transform: "translateY(-18px)" }}>
                    <div style={{ position: "relative", width: "100%", height: "100%" }}>
                      <Image src="/images/databricks-nobg.png" alt="Databricks" fill style={{ objectFit: "contain" }} />
                    </div>
                  </div>
                  <div style={{ width: "210px", height: "130px", background: "rgba(255,255,255,0.03)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem", boxShadow: "0 20px 40px rgba(0,0,0,0.3)", transform: "translateY(18px)" }}>
                    <div style={{ position: "relative", width: "100%", height: "100%" }}>
                      <Image src="/images/snowflake-nobg.png" alt="Snowflake" fill style={{ objectFit: "contain" }} />
                    </div>
                  </div>
                  <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "100%", height: "100%", background: "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 60%)", zIndex: -1 }}></div>
                </div>
              </div>

              {/* ── Pillar 2: AI Agents ── */}
              <div className="pillar-card" style={{
                display: "flex", flexWrap: "wrap", gap: "3rem", alignItems: "center",
                background: "var(--card-bg)", padding: "3rem", borderRadius: "24px", border: "1px solid var(--border)",
                flexDirection: "row-reverse"
              }}>
                <div style={{ flex: "1 1 300px" }}>
                  <div style={{ width: "60px", height: "60px", background: "rgba(16,185,129,0.1)", color: "#10B981", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                    <Bot size={28} />
                  </div>
                  <h3 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "1rem", color: "var(--text)" }}>AI Agents & Automation</h3>
                  <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                    AI-powered dispatch optimisation that calculates the most efficient routes, considering distance, traffic, vehicle capacity, delivery windows, and driver availability.
                  </p>

                  <button onClick={() => setExpandedPillar(expandedPillar === 2 ? null : 2)} style={{
                    background: "none", border: "none", padding: 0, color: "var(--primary)",
                    fontWeight: 600, display: "flex", alignItems: "center", gap: "0.5rem",
                    cursor: "pointer", fontSize: "1rem", marginBottom: "1rem"
                  }}>
                    {expandedPillar === 2 ? "Show Less" : "Read More"}
                    <ChevronDown size={18} style={{ transform: expandedPillar === 2 ? "rotate(180deg)" : "rotate(0)", transition: "0.3s" }} />
                  </button>

                  {expandedPillar === 2 && (
                    <ul style={{ listStyle: "none", padding: "1rem 0 0 0", margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem", borderTop: "1px solid var(--border)", animation: "fadeIn 0.3s ease" }}>
                      <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "var(--text)", fontWeight: 500 }}><ArrowRight size={18} color="var(--primary)" style={{ minWidth: "18px", marginTop: "2px" }} /> Document intelligence for processing shipping manifests, customs declarations, and compliance documentation.</li>
                      <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "var(--text)", fontWeight: 500 }}><ArrowRight size={18} color="var(--primary)" style={{ minWidth: "18px", marginTop: "2px" }} /> Predictive alerts for maintenance scheduling.</li>
                    </ul>
                  )}
                </div>

                <div style={{
                  flex: "1 1 300px", minHeight: "350px", borderRadius: "20px",
                  position: "relative", overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.05)", boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                }}>
                  <Image src="/images/resources-ai-agents.png" alt="AI dispatch optimisation and document intelligence" fill style={{ objectFit: "cover" }} />
                </div>
              </div>

              {/* ── Pillar 3: Product Engineering ── */}
              <div className="pillar-card" style={{
                display: "flex", flexWrap: "wrap", gap: "3rem", alignItems: "center",
                background: "var(--card-bg)", padding: "3rem", borderRadius: "24px", border: "1px solid var(--border)"
              }}>
                <div style={{ flex: "1 1 300px" }}>
                  <div style={{ width: "60px", height: "60px", background: "rgba(245,158,11,0.1)", color: "#F59E0B", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                    <Layout size={28} />
                  </div>
                  <h3 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "1rem", color: "var(--text)" }}>Product Engineering</h3>
                  <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                    Field operations apps that work offline in remote environments and sync when connectivity returns.
                  </p>

                  <button onClick={() => setExpandedPillar(expandedPillar === 3 ? null : 3)} style={{
                    background: "none", border: "none", padding: 0, color: "var(--primary)",
                    fontWeight: 600, display: "flex", alignItems: "center", gap: "0.5rem",
                    cursor: "pointer", fontSize: "1rem", marginBottom: "1rem"
                  }}>
                    {expandedPillar === 3 ? "Show Less" : "Read More"}
                    <ChevronDown size={18} style={{ transform: expandedPillar === 3 ? "rotate(180deg)" : "rotate(0)", transition: "0.3s" }} />
                  </button>

                  {expandedPillar === 3 && (
                    <ul style={{ listStyle: "none", padding: "1rem 0 0 0", margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem", borderTop: "1px solid var(--border)", animation: "fadeIn 0.3s ease" }}>
                      <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "var(--text)", fontWeight: 500 }}><ArrowRight size={18} color="var(--primary)" style={{ minWidth: "18px", marginTop: "2px" }} /> Driver and operator interfaces for real-time job management.</li>
                      <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "var(--text)", fontWeight: 500 }}><ArrowRight size={18} color="var(--primary)" style={{ minWidth: "18px", marginTop: "2px" }} /> Customer-facing tracking portals.</li>
                      <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "var(--text)", fontWeight: 500 }}><ArrowRight size={18} color="var(--primary)" style={{ minWidth: "18px", marginTop: "2px" }} /> Internal dashboards for operations centres.</li>
                    </ul>
                  )}
                </div>

                <div style={{
                  flex: "1 1 300px", minHeight: "350px", borderRadius: "20px",
                  position: "relative", overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.05)", boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                }}>
                  <Image src="/images/resources-product.png" alt="Field operations app on rugged device" fill style={{ objectFit: "cover" }} />
                </div>
              </div>

              {/* ── Pillar 4: Business Systems ── */}
              <div className="pillar-card" style={{
                display: "flex", flexWrap: "wrap", gap: "3rem", alignItems: "center",
                background: "var(--card-bg)", padding: "3rem", borderRadius: "24px", border: "1px solid var(--border)",
                flexDirection: "row-reverse"
              }}>
                <div style={{ flex: "1 1 300px" }}>
                  <div style={{ width: "60px", height: "60px", background: "rgba(239,68,68,0.1)", color: "#EF4444", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                    <Settings size={28} />
                  </div>
                  <h3 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "1rem", color: "var(--text)" }}>Business Systems Modernisation</h3>
                  <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                    We modernise operational platforms so they connect to your telemetry, logistics, and analytics systems.
                  </p>

                  <button onClick={() => setExpandedPillar(expandedPillar === 4 ? null : 4)} style={{
                    background: "none", border: "none", padding: 0, color: "var(--primary)",
                    fontWeight: 600, display: "flex", alignItems: "center", gap: "0.5rem",
                    cursor: "pointer", fontSize: "1rem", marginBottom: "1rem"
                  }}>
                    {expandedPillar === 4 ? "Show Less" : "Read More"}
                    <ChevronDown size={18} style={{ transform: expandedPillar === 4 ? "rotate(180deg)" : "rotate(0)", transition: "0.3s" }} />
                  </button>

                  {expandedPillar === 4 && (
                    <ul style={{ listStyle: "none", padding: "1rem 0 0 0", margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem", borderTop: "1px solid var(--border)", animation: "fadeIn 0.3s ease" }}>
                      <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "var(--text)", fontWeight: 500 }}><ArrowRight size={18} color="var(--primary)" style={{ minWidth: "18px", marginTop: "2px" }} /> CRM for client and vendor management.</li>
                      <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "var(--text)", fontWeight: 500 }}><ArrowRight size={18} color="var(--primary)" style={{ minWidth: "18px", marginTop: "2px" }} /> Inventory and warehouse systems.</li>
                      <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "var(--text)", fontWeight: 500 }}><ArrowRight size={18} color="var(--primary)" style={{ minWidth: "18px", marginTop: "2px" }} /> Accounting and invoicing.</li>
                    </ul>
                  )}
                </div>

                {/* Zoho glass circle */}
                <div style={{ flex: "1 1 300px", minHeight: "350px", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
                  <div style={{ width: "220px", height: "220px", background: "rgba(255,255,255,0.02)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", padding: "3rem", boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}>
                    <div style={{ position: "relative", width: "100%", height: "100%", filter: "brightness(1.2) drop-shadow(0 10px 15px rgba(0,0,0,0.4))" }}>
                      <Image src="/images/zoho-logo-nobg.png" alt="Zoho CRM" fill style={{ objectFit: "contain" }} />
                    </div>
                  </div>
                  <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "100%", height: "100%", background: "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 60%)", zIndex: -1 }}></div>
                </div>
              </div>

            </div>{/* end pillars-grid */}
          </div>
        </section>

      </main>
    </div>
  );
}
