"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { Award, Zap, CheckCircle2, Star, ShieldCheck } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PartnershipsClient() {
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

    // Stagger animation for the dynamic grid cards
    gsap.fromTo(".cert-card", 
      { y: 40, autoAlpha: 0 }, 
      { 
        y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.2)",
        scrollTrigger: { trigger: ".cert-grid", start: "top 85%", once: true }
      }
    );
  }, { scope: containerRef });

  const techCertifications = [
    { title: "Zoho Certified", domains: "CRM, Books, Creator, Desk", img: "/images/zoho-logo-nobg.png" },
    { title: "AWS Validated", domains: "Solutions Architect, Developer", img: "/images/aws-nobg.png" },
    { title: "Azure Certified", domains: "Data Engineer, AI Engineer", img: "/images/azure-nobg.png" },
    { title: "Databricks", domains: "Data Engineer Associate", img: "/images/databricks-nobg.png" },
    { title: "Snowflake", domains: "SnowPro Core", img: "/images/snowflake-nobg.png" },
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
              src="/images/partner-hero.png" 
              alt="Strategic Technology Partnerships Background" 
              fill
              style={{ objectFit: "cover", maskImage: "radial-gradient(circle at right, black, transparent 80%)", WebkitMaskImage: "radial-gradient(circle at right, black, transparent 80%)" }}
            />
          </div>

          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <div className="hero-badge section-label">Elite Endorsements</div>
            <h1 className="hero-h1 section-title" style={{ maxWidth: 900 }}>
              Partnerships & <br />
              <span style={{ color: "var(--primary)" }}>Certifications</span>
            </h1>
            <p className="hero-p section-desc" style={{ maxWidth: 700 }}>
              Our partnerships are not marketing badges. They represent deep technical expertise validated by the platform vendors themselves.
            </p>
          </div>
        </section>

        {/* ══ SECTION 1: THE ECOSYSTEM GRID (UNIQUE DESIGN) ═════════ */}
        <section className="section" style={{ background: "var(--bg-secondary)", paddingBottom: "2rem" }}>
          <div className="container" style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="reveal section-label" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              <Star size={16} /> Award-Winning Implementers
            </div>
            <h2 className="reveal section-title" style={{ maxWidth: "800px", margin: "0 auto 1.5rem auto" }}>
              The infrastructure that powers our four service lines.
            </h2>
            <p className="reveal section-desc" style={{ margin: "0 auto", maxWidth: "800px" }}>
              FI Digital holds strategic partnerships across the globe's most advanced cloud platforms. We are a Zoho Premium Partner with the prestigious Innovator of the Year award behind 200 plus successful implementations.
            </p>
          </div>
          
          <div className="container">
            <style>{`
              .partner-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 2rem;
                margin-bottom: 2rem;
              }
              .partner-full {
                grid-column: 1 / -1;
              }
              .partner-logo-card {
                background: var(--bg);
                border: 1px solid var(--border);
                border-radius: 24px;
                padding: 3rem;
                height: 250px;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
                box-shadow: 0 10px 40px -10px rgba(0,0,0,0.05);
              }
              .partner-logo-card:hover {
                transform: translateY(-8px);
                box-shadow: 0 30px 60px -12px rgba(29, 78, 216, 0.15);
                border-color: var(--primary);
              }
              .partner-img-wrapper {
                position: relative;
                width: 100%;
                height: 100%;
                max-width: 250px;
              }
              
              @media(max-width: 768px) {
                .partner-grid { grid-template-columns: 1fr; }
              }
            `}</style>
            
            <div className="cert-grid">
              {/* Row 1: Zoho & AWS */}
              <div className="partner-grid">
                <div className="cert-card partner-logo-card">
                  <div className="partner-img-wrapper">
                    <Image src="/images/zoho-logo-nobg.png" alt="Zoho Premium Partner" fill style={{ objectFit: "contain" }} />
                  </div>
                </div>
                <div className="cert-card partner-logo-card">
                  <div className="partner-img-wrapper">
                    <Image src="/images/aws-nobg.png" alt="AWS Partner Network" fill style={{ objectFit: "contain" }} />
                  </div>
                </div>
              </div>

              {/* Row 2: Microsoft & Databricks */}
              <div className="partner-grid">
                <div className="cert-card partner-logo-card">
                  <div className="partner-img-wrapper">
                    <Image src="/images/azure-nobg.png" alt="Microsoft Azure Partner" fill style={{ objectFit: "contain" }} />
                  </div>
                </div>
                <div className="cert-card partner-logo-card">
                  <div className="partner-img-wrapper">
                    <Image src="/images/databricks-nobg.png" alt="Databricks Partner" fill style={{ objectFit: "contain" }} />
                  </div>
                </div>
              </div>

              {/* Row 3: Snowflake (Full Width/Center) */}
              <div className="partner-grid">
                <div className="cert-card partner-logo-card partner-full" style={{ maxWidth: "600px", margin: "0 auto", width: "100%" }}>
                  <div className="partner-img-wrapper">
                    <Image src="/images/snowflake-nobg.png" alt="Snowflake Service Partner" fill style={{ objectFit: "contain" }} />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ══ SECTION 2: ENGINEERING CERTIFICATIONS ════════════ */}
        <section className="section" style={{ background: "var(--bg)" }}>
          <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "4rem", alignItems: "center" }}>
            <div className="reveal">
              <div className="section-label" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                <Award size={16} /> Certified Excellence
              </div>
              <h2 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>Validated by the Platforms.</h2>
              <p className="section-desc" style={{ marginBottom: "2rem" }}>
                Our engineers are rigorously trained and hold active, globally recognized certifications. These ensure our team is constantly current on new platform capabilities, best-practice deployments, and critical security standards.
              </p>
              
              <div style={{ display: "flex", gap: "1rem" }}>
                <div style={{ padding: "0.75rem 1.25rem", background: "rgba(16, 185, 129, 0.1)", color: "#10B981", borderRadius: "10px", fontWeight: "700", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                  <ShieldCheck size={18} /> Deep Security Knowledge
                </div>
                <div style={{ padding: "0.75rem 1.25rem", background: "rgba(29, 78, 216, 0.1)", color: "var(--primary)", borderRadius: "10px", fontWeight: "700", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                  <Zap size={18} /> Best Practice Architectures
                </div>
              </div>
            </div>

            <div className="reveal">
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {techCertifications.map((cert, i) => (
                  <div key={i} style={{ 
                    display: "flex", alignItems: "center", gap: "1.5rem", 
                    padding: "1.5rem", background: "var(--card-bg)", 
                    borderRadius: "16px", border: "1px solid var(--border)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.03)"
                  }}>
                    <div style={{ width: "64px", height: "64px", borderRadius: "12px", background: "var(--bg)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, position: "relative", padding: "0.5rem", border: "1px solid var(--border)" }}>
                      <div style={{ position: "relative", width: "100%", height: "100%" }}>
                        <Image src={cert.img} alt={cert.title} fill style={{ objectFit: "contain" }} />
                      </div>
                      <div style={{ position: "absolute", bottom: "-6px", right: "-6px", background: "var(--card-bg)", borderRadius: "50%", padding: "2px", display: "flex" }}>
                        <CheckCircle2 size={18} color="#10B981" />
                      </div>
                    </div>
                    <div>
                      <div style={{ fontWeight: 800, color: "var(--text)", fontSize: "1.1rem" }}>{cert.title}</div>
                      <div style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginTop: "0.15rem" }}>{cert.domains}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
