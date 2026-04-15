"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { Server, ShieldCheck, Scale, FileCode, CheckCircle2, Cloud, Database, Lock, Briefcase } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ComplianceClient() {
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
  }, { scope: containerRef });

  const infrastructureData = [
    { icon: <FileCode size={24} />, title: "Product Engineering", tech: "AWS ap-southeast-2 (Sydney) & Azure Australia East." },
    { icon: <Database size={24} />, title: "Data Platforms", tech: "Databricks & Fabric (Azure East), Snowflake (AWS Sydney)." },
    { icon: <Cloud size={24} />, title: "Business Systems", tech: "Zoho Australian Data Centres + Local App Integrations." },
    { icon: <Server size={24} />, title: "AI Agents", tech: "Claude (AWS Bedrock Sydney) & GPT-4o (Azure Australia East)." },
  ];

  const complianceStandards = [
    { label: "APRA", name: "CPS 234", desc: "Prudential Standard alignment for financial institutions securing data." },
    { label: "ASIC", name: "RG", desc: "Regulatory guide compliance for advanced financial services." },
    { label: "ACSC", name: "Essential 8", desc: "Maturity modeled cybersecurity alignment for baseline protection." },
    { label: "GOV", name: "Privacy Act", desc: "Adherence to the Privacy Act 1988 & Aged Care Quality Standards." },
  ];

  return (
    <div ref={containerRef}>
      <main style={{ paddingTop: "var(--header-h)", overflow: "hidden" }}>
        
        {/* ══ HERO SECTION (STANDARD ACROSS PAGES) ══════════════ */}
        <section style={{
          position: "relative",
          minHeight: "60vh",
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
            width: "55%",
            height: "100%",
            zIndex: 0,
            opacity: 0.5,
            pointerEvents: "none"
          }}>
            <Image 
              src="/compliance-hero.png" 
              alt="Data Security Background" 
              fill
              style={{ objectFit: "cover", maskImage: "radial-gradient(circle at right, black, transparent 80%)", WebkitMaskImage: "radial-gradient(circle at right, black, transparent 80%)" }}
            />
          </div>

          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <div className="hero-badge section-label">Australian Compliance & Data Residency</div>
            <h1 className="hero-h1 section-title" style={{ maxWidth: 900 }}>
              Your Data Stays strictly <br />
              <span style={{ color: "var(--primary)" }}>Inside Australia.</span>
            </h1>
            <p className="hero-p section-desc" style={{ maxWidth: 700 }}>
              Australian enterprise requires Australian data residency. Every FI Digital service line operates on Australian-hosted infrastructure to ensure bulletproof compliance.
            </p>
          </div>
        </section>

        {/* ══ SECTION 1: DATA RESIDENCY (UNIQUE DESIGN) ═════════ */}
        <section className="section" style={{ background: "var(--bg-secondary)" }}>
          <div className="container reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="section-label" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              <Server size={16} /> Sovereign Infrastructure
            </div>
            <h2 className="section-title">Mapped to Local Data Centres</h2>
            <p className="section-desc" style={{ margin: "0 auto" }}>
              We architect specifically for AWS Sydney, Azure Australia East, and Zoho Australian centers.
            </p>
          </div>
          
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
              {infrastructureData.map((item, i) => (
                <div key={i} className="reveal" style={{ 
                  background: "var(--card-bg)", 
                  padding: "2.5rem 2rem", 
                  borderRadius: "20px", 
                  border: "1px solid var(--border)",
                  boxShadow: "0 10px 40px -10px rgba(0,0,0,0.05)",
                  transition: "transform 0.3s ease",
                  display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center"
                }}>
                  <div style={{ width: "64px", height: "64px", borderRadius: "16px", background: "rgba(29, 78, 216, 0.08)", color: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                    {item.icon}
                  </div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "0.75rem", color: "var(--text)" }}>{item.title}</h3>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{item.tech}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SECTION 2: REGULATORY COMPLIANCE ═════════════════ */}
        <section className="section" style={{ background: "var(--bg)" }}>
          <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "4rem", alignItems: "center" }}>
            <div className="reveal">
              <div className="section-label" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                <Scale size={16} /> Institutional Alignment
              </div>
              <h2 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>Navigating the <br/>Regulatory Landscape.</h2>
              <p className="section-desc" style={{ marginBottom: "2rem" }}>
                We understand the deep regulatory landscape governing Australian financial institutions, healthcare providers, and enterprise operators. Our architecture reviews ensure complete compliance alignment from day one.
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {complianceStandards.map((std, i) => (
                  <div key={i} style={{ display: "flex", gap: "1.5rem", padding: "1.5rem", background: "var(--card-bg)", borderRadius: "16px", border: "1px solid var(--border)", alignItems: "center" }}>
                    <div style={{ fontWeight: 900, color: "var(--primary)", fontSize: "1.2rem", minWidth: "70px" }}>{std.label}</div>
                    <div style={{ width: "1px", height: "40px", background: "var(--border)" }}></div>
                    <div>
                      <div style={{ fontWeight: 800, color: "var(--text)", fontSize: "1.05rem" }}>{std.name}</div>
                      <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>{std.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal" style={{ position: "relative", height: "600px", borderRadius: "24px", overflow: "hidden", boxShadow: "var(--card-shadow)", border: "1px solid var(--border)" }}>
              <Image src="/compliance-framework.png" alt="Regulatory Compliance Visualization" fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        </section>

        {/* ══ SECTION 3: ENTERPRISE TRUST ══════════════════════ */}
        <section className="section" style={{ background: "var(--bg-secondary)" }}>
          <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
            <div className="reveal" style={{ position: "relative", height: "400px", borderRadius: "24px", overflow: "hidden", boxShadow: "var(--card-shadow)", border: "1px solid var(--border)", order: 2 }}>
              <Image src="/enterprise-trust.png" alt="Enterprise Security Contracts" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="reveal" style={{ order: 1 }}>
              <div className="section-label" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                <ShieldCheck size={16} /> Legal Security
              </div>
              <h2 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>Total Protection.</h2>
              <p className="section-desc" style={{ marginBottom: "2rem" }}>
                Building powerful systems requires baseline business protection. Professional indemnity insurance covers all engagements, and binding contractual SLAs define exact response times, resolution targets, and strict accountability.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1.25rem 1.5rem", background: "var(--card-bg)", borderRadius: "12px", border: "1px solid var(--border)" }}>
                  <Lock size={20} color="var(--primary)" />
                  <span style={{ fontWeight: 700, color: "var(--text)", fontSize: "1.1rem" }}>Your IP is yours.</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1.25rem 1.5rem", background: "var(--card-bg)", borderRadius: "12px", border: "1px solid var(--border)" }}>
                  <Briefcase size={20} color="var(--primary)" />
                  <span style={{ fontWeight: 700, color: "var(--text)", fontSize: "1.1rem" }}>Your source code is strictly yours.</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1.25rem 1.5rem", background: "var(--card-bg)", borderRadius: "12px", border: "1px solid var(--border)" }}>
                  <CheckCircle2 size={20} color="var(--primary)" />
                  <span style={{ fontWeight: 700, color: "var(--text)", fontSize: "1.1rem" }}>We do not claim ownership of anything we build.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
