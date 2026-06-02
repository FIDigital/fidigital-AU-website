"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code2, Network, Globe, ShieldCheck } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WhyClient() {
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

  return (
    <div ref={containerRef}>
      <main style={{ paddingTop: "var(--header-h)", overflow: "hidden" }}>
        
        {/* ══ HERO SECTION ═════════════════════════════════════════ */}
        <section style={{
          position: "relative",
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          padding: "clamp(80px, 10vh, 120px) 1.5rem 80px",
          background: "var(--bg)",
          overflow: "hidden"
        }}>
          {/* Background Visual */}
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
              src="/why-hero.png" 
              alt="Engineering Background" 
              fill sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover", maskImage: "radial-gradient(circle at right, black, transparent 80%)", WebkitMaskImage: "radial-gradient(circle at right, black, transparent 80%)" }}
            />
          </div>

          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <div className="hero-badge section-label">Why FI Digital</div>
            <h1 className="hero-h1 section-title" style={{ maxWidth: 900 }}>
              Engineering-Led, <br />
              <span style={{ color: "var(--primary)" }}>Not Advisory-Led</span>
            </h1>
            <p className="hero-p section-desc" style={{ maxWidth: 700 }}>
              Engineering-led, not advisory-led. 200+ engineers. 10 years in production. Four integrated service lines. Australian data residency. Contractual SLAs.
            </p>
          </div>
        </section>

        {/* ══ SECTION 1: WE BUILD ══════════════════════════════════ */}
        <section className="section" style={{ background: "var(--bg-secondary)" }}>
          <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
            <div className="reveal" style={{ order: 1 }}>
              <div className="section-label" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                <Code2 size={16} /> Engineering Reality
              </div>
              <h2 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>We Build.<br />We Do Not Just Advise.</h2>
              <p className="section-desc" style={{ marginBottom: "1.5rem" }}>
                Most consulting firms produce strategy decks and leave. FI Digital writes code, deploys infrastructure, and stays accountable for production outcomes. We are engineering-led, not advisory-led. 
              </p>
              <p className="section-desc" style={{ marginBottom: "2rem" }}>
                Our team of 200 plus engineers builds production systems across four integrated service lines. When we recommend a data platform on Databricks, we build it. When we design an AI agent architecture, we code it. When we propose a CRM modernisation, we implement it.
              </p>
              <div style={{ display: "flex", gap: "1rem", alignItems: "center", fontWeight: 700, color: "var(--primary)" }}>
                <ShieldCheck size={20} /> Grounded in engineering reality, not theoretical frameworks.
              </div>
            </div>
            <div className="reveal" style={{ order: 2, position: "relative", height: "450px", borderRadius: "24px", overflow: "hidden", boxShadow: "var(--card-shadow)", border: "1px solid var(--border)" }}>
              <Image src="/we-build.png" alt="Engineering Team Building Systems" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
            </div>
          </div>
        </section>

        {/* ══ SECTION 2: FOUR PILLARS ══════════════════════════════ */}
        <section className="section" style={{ background: "var(--bg)" }}>
          <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
            <div className="reveal" style={{ position: "relative", height: "450px", borderRadius: "24px", overflow: "hidden", boxShadow: "var(--card-shadow)", border: "1px solid var(--border)" }}>
              <Image src="/four-pillars.png" alt="Integrated Service Architecture" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
            </div>
            <div className="reveal">
              <div className="section-label" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                <Network size={16} /> Cross-Pillar Integration
              </div>
              <h2 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>Four Pillars,<br />One Partner.</h2>
              <p className="section-desc" style={{ marginBottom: "1.5rem" }}>
                The real advantage of working with FI Digital is cross-pillar integration. Most firms do one thing: they are a Zoho partner, or a Databricks consultancy, or an AI agency, or a software development house. FI Digital does all four, and we connect them.
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "1rem", margin: "0 0 2rem 0", padding: 0, listStyle: "none" }}>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}><div style={{ marginTop: "4px", color: "var(--primary)" }}><ArrowRight size={18} /></div><span style={{ fontSize: "1.05rem", color: "var(--text)" }}><b>Product Engineering:</b> Custom customer portals pulling analytics.</span></li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}><div style={{ marginTop: "4px", color: "var(--primary)" }}><ArrowRight size={18} /></div><span style={{ fontSize: "1.05rem", color: "var(--text)" }}><b>Data Platforms:</b> Databricks lakehouse feeding real-time insights.</span></li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}><div style={{ marginTop: "4px", color: "var(--primary)" }}><ArrowRight size={18} /></div><span style={{ fontSize: "1.05rem", color: "var(--text)" }}><b>AI Agents:</b> Triggers that process incoming documents autonomously.</span></li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}><div style={{ marginTop: "4px", color: "var(--primary)" }}><ArrowRight size={18} /></div><span style={{ fontSize: "1.05rem", color: "var(--text)" }}><b>Business Systems:</b> Operational dashboards combining Zoho, Snowflake, and custom apps.</span></li>
              </ul>
              <p style={{ fontWeight: 700, color: "var(--text)", fontSize: "1.1rem" }}>This integration is not possible when you hire four different vendors. With FI Digital, it is the default.</p>
            </div>
          </div>
        </section>

        {/* ══ SECTION 3: GLOBAL SCALE ══════════════════════════════ */}
        <section className="section" style={{ background: "var(--bg-secondary)" }}>
          <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
            <div className="reveal">
              <div className="section-label" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                <Globe size={16} /> Regional Presence
              </div>
              <h2 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>Global Scale,<br />Australian Focus.</h2>
              <p className="section-desc" style={{ marginBottom: "1.5rem" }}>
                200 plus engineers across Melbourne, Sydney, India (4 cities, 150 plus engineers), UAE, and UK. Every Australian engagement is led by Melbourne-based senior consultants and architects.
              </p>
              <p className="section-desc" style={{ marginBottom: "2rem" }}>
                Our India engineering centre provides deep technical capacity and follows Australian employment standards. 
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div style={{ padding: "1.5rem", background: "var(--card-bg)", borderRadius: "16px", border: "1px solid var(--border)" }}>
                  <div style={{ fontWeight: 800, color: "var(--text)", marginBottom: "0.5rem" }}>Data Sovereignty</div>
                  <div style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>Your data stays in Australian infrastructure. Your IP is yours. Your source code is yours.</div>
                </div>
                <div style={{ padding: "1.5rem", background: "var(--card-bg)", borderRadius: "16px", border: "1px solid var(--border)" }}>
                  <div style={{ fontWeight: 800, color: "var(--text)", marginBottom: "0.5rem" }}>Enterprise Trust</div>
                  <div style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>We carry professional indemnity insurance and provide strict contractual SLAs.</div>
                </div>
              </div>
            </div>
            <div className="reveal" style={{ position: "relative", height: "450px", borderRadius: "24px", overflow: "hidden", boxShadow: "var(--card-shadow)", border: "1px solid var(--border)" }}>
              <Image src="/global-scale.png" alt="Global Engineering Capacity" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
            </div>
          </div>
        </section>

        {/* ══ CTA ══ */}
        <section style={{ padding: "100px 1.5rem", textAlign: "center", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
          <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, marginBottom: "1.5rem" }}>
            Let's build something that lasts.
          </h2>
          <Link href="/book-discovery" style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", background: "var(--primary)", color: "#fff", padding: "1.05rem 2.4rem", borderRadius: "100px", fontSize: "1.05rem", fontWeight: 800, textDecoration: "none" }}>
            Book a Discovery Session →
          </Link>
        </section>

      </main>
    </div>
  );
}
