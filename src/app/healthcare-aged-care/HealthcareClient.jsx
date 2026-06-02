"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import TrustedBy from "@/components/TrustedBy";
import { ShieldAlert, Database, Bot, Layout, Settings, ArrowRight, ChevronDown, HeartPulse, FileText, Users, Clock } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HealthcareClient() {
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
          padding: "0 1.5rem 60px",
          background: "var(--bg)", overflow: "hidden"
        }}>
          <div style={{
            position: "absolute", top: 0, right: 0,
            width: "60%", height: "100%",
            zIndex: 0, opacity: 0.45, pointerEvents: "none"
          }}>
            <Image
              src="/images/health-hero.png"
              alt="Healthcare Technology"
              fill sizes="(max-width: 768px) 100vw, 50vw"
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
              background: "rgba(13,148,136,0.1)", color: "#0D9488",
              padding: "0.5rem 1rem", borderRadius: "50px", fontWeight: 700, marginBottom: "1.5rem"
            }}>
              <HeartPulse size={16} /> ACSC Compliant · Australian Data Residency
            </div>

            <h1 className="hero-h1 section-title" style={{
              maxWidth: "1000px", fontSize: "clamp(2.5rem,6vw,4.5rem)", lineHeight: 1.1, marginBottom: "1.5rem"
            }}>
              Healthcare & Aged Care<br />
              <span style={{ color: "var(--primary)", fontWeight: 300 }}>
                Technology That Serves the People Who Serve Patients
              </span>
            </h1>

            <p className="hero-p section-desc" style={{
              maxWidth: "700px", fontSize: "1.2rem", color: "var(--text-muted)", marginBottom: "3rem"
            }}>
              Mobile apps for care coordination. Data platforms for operational reporting. AI agents that automate documentation. Business systems that reduce administrative burden. FI Digital builds technology for Australian healthcare and aged care providers.
            </p>

            <div className="hero-btn">
              <Link href="/book-discovery" style={{
                background: "var(--primary)", color: "#fff", padding: "1rem 2rem",
                borderRadius: "8px", fontWeight: 600, textDecoration: "none",
                display: "inline-flex", alignItems: "center", gap: "0.5rem", transition: "all 0.2s"
              }}>
                Book a Healthcare Compliance Call <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        <TrustedBy />

        {/* ══ SECTION 1: THE CHALLENGE ══════════════════════════════════════ */}
        <section className="section" style={{ background: "var(--bg-secondary)" }}>
          <div className="container">
            <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
              <div className="section-label">Industry Challenge</div>
              <h2 className="section-title" style={{ maxWidth: "800px", margin: "0 auto 0 auto" }}>
                The Healthcare Technology Challenge
              </h2>
            </div>

            {/* Verbatim paragraph from the brief */}
            <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto 4rem auto" }}>
              <p style={{ fontSize: "1.1rem", color: "var(--text)", lineHeight: 1.85 }}>
                Healthcare and aged care providers are drowning in administration. Rostering consumes management time. Compliance documentation fills filing cabinets and inboxes. Patient data lives in disconnected systems that do not talk to each other. Clinical staff spend hours on paperwork that should take minutes. And regulatory requirements from the Aged Care Quality and Safety Commission, ACSC, and state health departments continue to expand. FI Digital builds technology that reduces the administrative burden on healthcare teams so they can focus on what matters: patient and resident care. We serve hospitals, GP practices, allied health providers, NDIS providers, residential aged care facilities, and home care operators across Australia.
              </p>
            </div>

            {/* Challenge cards */}
            <div className="challenge-grid" style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "2rem", marginBottom: "4rem"
            }}>
              {[
                { title: "Rostering & Scheduling",      desc: "Rostering consumes management time with manual processes that are difficult to scale across shifts and facilities.", icon: Clock,      color: "#EF4444" },
                { title: "Disconnected Systems",         desc: "Patient data lives in disconnected systems that do not talk to each other, creating dangerous information gaps.", icon: Database,   color: "#3B82F6" },
                { title: "Documentation Overload",       desc: "Clinical staff spend hours on paperwork that should take minutes — time stolen directly from patient care.", icon: FileText,   color: "#F59E0B" },
                { title: "Expanding Compliance Burden",  desc: "Requirements from the Aged Care Quality and Safety Commission, ACSC, and state health departments continue to expand.", icon: ShieldAlert, color: "#10B981" },
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
              background: "linear-gradient(135deg, rgba(13,148,136,0.1) 0%, rgba(59,130,246,0.1) 100%)",
              padding: "3rem", borderRadius: "24px", border: "1px solid rgba(13,148,136,0.25)",
              textAlign: "center"
            }}>
              <h3 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "1.25rem", maxWidth: "800px", margin: "0 auto 1.25rem auto" }}>
                FI Digital serves providers across every segment of Australian healthcare.
              </h3>
              <p style={{ fontSize: "1.05rem", color: "var(--text)", maxWidth: "860px", margin: "0 auto", lineHeight: 1.75 }}>
                Hospitals · GP practices · Allied health · NDIS providers · Residential aged care facilities · Home care operators.
                We reduce the administrative burden so care teams can focus on what matters: <strong>patient and resident care.</strong>
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
                <Image src="/images/health-split-left.png" alt="Care worker using a tablet in the field" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
                <div style={{
                  position: "absolute", bottom: "2rem", left: "2rem", right: "2rem",
                  padding: "1.5rem 2rem",
                  background: "rgba(10,15,20,0.45)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
                  borderRadius: "16px", border: "1px solid rgba(255,255,255,0.1)"
                }}>
                  <h3 style={{ color: "#fff", fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.2rem" }}>Connected Care Teams</h3>
                  <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem" }}>Mobile-First Care Coordination</p>
                </div>
              </div>

              <div className="reveal" style={{
                flex: "1 1 calc(50% - 1rem)", minHeight: "450px", minWidth: "300px",
                position: "relative", borderRadius: "24px", overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.05)", boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
              }}>
                <Image src="/images/health-split-right.png" alt="Healthcare operational dashboard" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
                <div style={{
                  position: "absolute", bottom: "2rem", left: "2rem", right: "2rem",
                  padding: "1.5rem 2rem",
                  background: "rgba(10,15,20,0.45)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
                  borderRadius: "16px", border: "1px solid rgba(255,255,255,0.1)"
                }}>
                  <h3 style={{ color: "#fff", fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.2rem" }}>Operational Visibility</h3>
                  <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem" }}>Facility Dashboards & Reporting</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ SECTION 2: HOW EACH PILLAR SERVES HEALTHCARE ═════════════════ */}
        <section className="section" style={{ background: "var(--bg)" }}>
          <div className="container">
            <div className="reveal" style={{ textAlign: "center", marginBottom: "5rem" }}>
              <div className="section-label">Our Methodology</div>
              <h2 className="section-title" style={{ maxWidth: "800px", margin: "0 auto" }}>
                How Each Pillar Serves Healthcare
              </h2>
            </div>

            <div className="pillars-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }}>

              {/* ── Pillar 1: Product Engineering ── */}
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
                    Care coordination apps, patient portals, rostering systems, referral management platforms, and clinical workflow tools.
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
                      <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "var(--text)", fontWeight: 500 }}><ArrowRight size={18} color="var(--primary)" style={{ minWidth: "18px", marginTop: "2px" }} /> Built for mobile-first environments where care workers need to access and update information in the field.</li>
                      <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "var(--text)", fontWeight: 500 }}><ArrowRight size={18} color="var(--primary)" style={{ minWidth: "18px", marginTop: "2px" }} /> Offline capable. Biometric authentication.</li>
                      <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "var(--text)", fontWeight: 500 }}><ArrowRight size={18} color="var(--primary)" style={{ minWidth: "18px", marginTop: "2px" }} /> Integration with clinical systems.</li>
                    </ul>
                  )}
                </div>

                <div style={{
                  flex: "1 1 300px", minHeight: "350px", borderRadius: "20px",
                  position: "relative", overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.05)", boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                }}>
                  <Image src="/images/health-product.png" alt="Care coordination app on mobile" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
                </div>
              </div>

              {/* ── Pillar 2: Data Platforms ── */}
              <div className="pillar-card" style={{
                display: "flex", flexWrap: "wrap", gap: "3rem", alignItems: "center",
                background: "var(--card-bg)", padding: "3rem", borderRadius: "24px", border: "1px solid var(--border)",
                flexDirection: "row-reverse"
              }}>
                <div style={{ flex: "1 1 300px" }}>
                  <div style={{ width: "60px", height: "60px", background: "rgba(59,130,246,0.1)", color: "#3B82F6", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                    <Database size={28} />
                  </div>
                  <h3 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "1rem", color: "var(--text)" }}>Data Platforms & Intelligence</h3>
                  <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                    Operational dashboards that track occupancy, staffing ratios, incident rates, and financial performance.
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
                      <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "var(--text)", fontWeight: 500 }}><ArrowRight size={18} color="var(--primary)" style={{ minWidth: "18px", marginTop: "2px" }} /> Quality indicator reporting for the Aged Care Quality Standards.</li>
                      <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "var(--text)", fontWeight: 500 }}><ArrowRight size={18} color="var(--primary)" style={{ minWidth: "18px", marginTop: "2px" }} /> Data aggregation across multiple facilities.</li>
                      <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "var(--text)", fontWeight: 500 }}><ArrowRight size={18} color="var(--primary)" style={{ minWidth: "18px", marginTop: "2px" }} /> BI dashboards that help management make decisions with confidence.</li>
                    </ul>
                  )}
                </div>

                {/* Databricks + Snowflake glass cards */}
                <div style={{ flex: "1 1 300px", minHeight: "350px", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap", zIndex: 1 }}>
                  <div style={{ width: "210px", height: "130px", background: "rgba(255,255,255,0.03)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem", boxShadow: "0 20px 40px rgba(0,0,0,0.3)", transform: "translateY(-18px)" }}>
                    <div style={{ position: "relative", width: "100%", height: "100%" }}>
                      <Image src="/images/databricks-nobg.png" alt="Databricks" fill sizes="(max-width: 768px) 40vw, 200px" style={{ objectFit: "contain" }} />
                    </div>
                  </div>
                  <div style={{ width: "210px", height: "130px", background: "rgba(255,255,255,0.03)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem", boxShadow: "0 20px 40px rgba(0,0,0,0.3)", transform: "translateY(18px)" }}>
                    <div style={{ position: "relative", width: "100%", height: "100%" }}>
                      <Image src="/images/snowflake-nobg.png" alt="Snowflake" fill sizes="(max-width: 768px) 40vw, 200px" style={{ objectFit: "contain" }} />
                    </div>
                  </div>
                  <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "100%", height: "100%", background: "radial-gradient(circle, rgba(13,148,136,0.08) 0%, transparent 60%)", zIndex: -1 }}></div>
                </div>
              </div>

              {/* ── Pillar 3: AI Agents ── */}
              <div className="pillar-card" style={{
                display: "flex", flexWrap: "wrap", gap: "3rem", alignItems: "center",
                background: "var(--card-bg)", padding: "3rem", borderRadius: "24px", border: "1px solid var(--border)"
              }}>
                <div style={{ flex: "1 1 300px" }}>
                  <div style={{ width: "60px", height: "60px", background: "rgba(16,185,129,0.1)", color: "#10B981", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                    <Bot size={28} />
                  </div>
                  <h3 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "1rem", color: "var(--text)" }}>AI Agents & Automation</h3>
                  <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                    Document automation for clinical notes, progress reports, and compliance documentation.
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
                      <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "var(--text)", fontWeight: 500 }}><ArrowRight size={18} color="var(--primary)" style={{ minWidth: "18px", marginTop: "2px" }} /> AI agents that process referrals, extract information from incoming documents, and route requests to the appropriate clinician.</li>
                      <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "var(--text)", fontWeight: 500 }}><ArrowRight size={18} color="var(--primary)" style={{ minWidth: "18px", marginTop: "2px" }} /> Workflow automation for onboarding, credentialing, and compliance checks.</li>
                    </ul>
                  )}
                </div>

                <div style={{
                  flex: "1 1 300px", minHeight: "350px", borderRadius: "20px",
                  position: "relative", overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.05)", boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                }}>
                  <Image src="/images/health-ai-agents.png" alt="AI document automation for healthcare" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
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
                    We modernise operational systems so they support clinical workflows instead of creating friction.
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
                      <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "var(--text)", fontWeight: 500 }}><ArrowRight size={18} color="var(--primary)" style={{ minWidth: "18px", marginTop: "2px" }} /> CRM for client management, referral tracking, and communication.</li>
                      <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "var(--text)", fontWeight: 500 }}><ArrowRight size={18} color="var(--primary)" style={{ minWidth: "18px", marginTop: "2px" }} /> Accounting and invoicing for NDIS and Medicare billing.</li>
                      <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "var(--text)", fontWeight: 500 }}><ArrowRight size={18} color="var(--primary)" style={{ minWidth: "18px", marginTop: "2px" }} /> HR and rostering integration.</li>
                    </ul>
                  )}
                </div>

                {/* Zoho glass circle */}
                <div style={{ flex: "1 1 300px", minHeight: "350px", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
                  <div style={{ width: "220px", height: "220px", background: "rgba(255,255,255,0.02)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", padding: "3rem", boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}>
                    <div style={{ position: "relative", width: "100%", height: "100%", filter: "brightness(1.2) drop-shadow(0 10px 15px rgba(0,0,0,0.4))" }}>
                      <Image src="/images/zoho-logo-nobg.png" alt="Zoho CRM" fill sizes="(max-width: 768px) 40vw, 200px" style={{ objectFit: "contain" }} />
                    </div>
                  </div>
                  <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "100%", height: "100%", background: "radial-gradient(circle, rgba(239,68,68,0.08) 0%, transparent 60%)", zIndex: -1 }}></div>
                </div>
              </div>

            </div>{/* end pillars-grid */}
          </div>
        </section>

      </main>
    </div>
  );
}
