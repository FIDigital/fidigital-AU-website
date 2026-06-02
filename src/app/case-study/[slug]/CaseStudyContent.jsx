"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, CheckCircle, Clock, Globe, Shield, Zap } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function CaseStudyContent({ study }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".hero-badge", { y: 20, opacity: 0, duration: 0.6 })
      .from(".hero-title", { y: 30, opacity: 0, duration: 0.8 }, "-=0.4")
      .from(".hero-meta", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
      .from(".hero-image", { scale: 1.1, opacity: 0, duration: 1.2, ease: "power2.out" }, "-=0.8");
  }, { scope: containerRef });

  if (!study) return null;

  return (
    <div ref={containerRef} style={{ background: "var(--bg)", color: "var(--text)" }}>
      
      {/* ══ HERO ══ */}
      <section style={{
        padding: "clamp(120px, 15vh, 180px) 1.5rem 80px",
        background: "var(--bg-secondary)",
        borderBottom: "1px solid var(--border)",
      }}>
        <div className="container" style={{ maxWidth: "1200px" }}>
          <Link href="/case-studies" style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            color: "var(--primary)", fontWeight: 700, textDecoration: "none",
            marginBottom: "3rem", fontSize: "0.9rem"
          }}>
            <ArrowLeft size={18} /> Back to Case Studies
          </Link>

          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "4rem", alignItems: "center" }}>
            <div>
              <div className="hero-badge" style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                background: `${study.color}15`, color: study.color,
                padding: "0.5rem 1rem", borderRadius: "50px",
                fontWeight: 700, fontSize: "0.85rem", marginBottom: "1.5rem"
              }}>
                {study.industry}
              </div>
              <h1 className="hero-title" style={{
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                fontWeight: 900, lineHeight: 1.1, marginBottom: "2rem",
                letterSpacing: "-0.02em"
              }}>
                {study.title}
              </h1>
              <div className="hero-meta" style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
                <div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "0.4rem" }}>Client</div>
                  <div style={{ fontWeight: 700 }}>{study.company}</div>
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "0.4rem" }}>Tech Stack</div>
                  <div style={{ fontWeight: 700 }}>{study.tag}</div>
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "0.4rem" }}>Highlight</div>
                  <div style={{ fontWeight: 700 }}>{study.highlight}</div>
                </div>
              </div>
            </div>
            <div className="hero-image" style={{ position: "relative", height: "450px", borderRadius: "32px", overflow: "hidden", boxShadow: "0 30px 60px rgba(0,0,0,0.12)" }}>
              <Image src={study.image} alt={study.title} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ══ CONTENT PLACEHOLDER ══ */}
      <section style={{ padding: "100px 1.5rem" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div style={{ display: "grid", gap: "4rem" }}>
            
            <div className="reveal">
              <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.5rem" }}>The Challenge</h2>
              <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.8 }}>
                As an established name in {study.industry}, {study.company} faced significant operational hurdles with their existing systems. The goal was to migrate to {study.tag} while ensuring zero downtime and a unified data environment for all stakeholders.
              </p>
            </div>

            <div className="reveal" style={{ 
              background: "var(--bg-secondary)", border: "1px solid var(--border)", 
              borderRadius: "24px", padding: "3rem" 
            }}>
              <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "2rem" }}>Quantified Outcomes</h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                {[
                  { label: "Efficiency Gain", value: "45%", icon: <Zap size={24} color="#3B82F6" /> },
                  { label: "Cost Reduction", value: "30%", icon: <ArrowUpRight size={24} color="#10B981" /> },
                  { label: "User Adoption", value: "98%", icon: <CheckCircle size={24} color="#F59E0B" /> },
                  { label: "System Uptime", value: "99.9%", icon: <Shield size={24} color="#8B5CF6" /> }
                ].map((stat, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={{ 
                      width: "50px", height: "50px", borderRadius: "12px", 
                      background: "var(--bg)", display: "flex", 
                      alignItems: "center", justifyContent: "center" 
                    }}>
                      {stat.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: "1.5rem", fontWeight: 900 }}>{stat.value}</div>
                      <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 600 }}>{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal">
              <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.5rem" }}>Our Approach</h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "2rem" }}>
                FI Digital implemented a phased rollout of {study.tag}, focusing on custom automation and deep integration with existing third-party applications. This approach ensured that the transition was seamless and the "digital story" of {study.company} remained consistent throughout.
              </p>
              <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "1rem" }}>
                {[
                  "Deep system audit and requirements mapping",
                  "Bespoke development on Zoho Creator / CRM Platform",
                  "Complex data migration with verification layers",
                  "Post-launch support and performance monitoring"
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: "1rem", fontWeight: 600 }}>
                    <CheckCircle size={18} style={{ color: "var(--primary)" }} /> {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section style={{ padding: "80px 1.5rem", background: "var(--primary)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: 900, color: "white", marginBottom: "1.5rem" }}>Ready to transform your business?</h2>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.9)", marginBottom: "2.5rem" }}>
            Let us help you achieve similar outcomes with intelligent automation and expert consulting.
          </p>
          <Link href="/contact" style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            background: "white", color: "var(--primary)",
            padding: "1rem 2.5rem", borderRadius: "100px",
            fontWeight: 800, textDecoration: "none", fontSize: "1.1rem"
          }}>
            Speak to an Expert <ArrowUpRight size={20} />
          </Link>
        </div>
      </section>

    </div>
  );
}
