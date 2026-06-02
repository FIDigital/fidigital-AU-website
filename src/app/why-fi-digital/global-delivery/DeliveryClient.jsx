"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Users, Target, Activity, Shield, CheckCircle2 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function DeliveryClient() {
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

  const processItems = [
    { icon: <Activity size={20} />, title: "Daily Standups", desc: "Bridging time zones ensuring constant momentum." },
    { icon: <Target size={20} />, title: "Fortnightly Demos", desc: "Ensuring deep alignment and transparency." },
    { icon: <Shield size={20} />, title: "Strict Code Reviews", desc: "Enforcing quality standards at every layer." },
    { icon: <CheckCircle2 size={20} />, title: "Shared Documentation", desc: "Keeping everyone fully accountable on the same page." }
  ];

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
              src="/delivery-hero.png" 
              alt="Global Engineering Model background" 
              fill sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover", maskImage: "radial-gradient(circle at right, black, transparent 80%)", WebkitMaskImage: "radial-gradient(circle at right, black, transparent 80%)" }}
            />
          </div>

          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <div className="hero-badge section-label">Global Delivery Model</div>
            <h1 className="hero-h1 section-title" style={{ maxWidth: 900 }}>
              Australian Leadership, <br />
              <span style={{ color: "var(--primary)" }}>Global Engineering Depth</span>
            </h1>
            <p className="hero-p section-desc" style={{ maxWidth: 700 }}>
              FI Digital operates a global delivery model optimised for Australian enterprise. Melbourne is our headquarters and the centre of all client relationships.
            </p>
          </div>
        </section>

        {/* ══ SECTION 1: GLOBAL HUBS ══════════════════════════════════ */}
        <section className="section" style={{ background: "var(--bg-secondary)" }}>
          <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
            <div className="reveal" style={{ order: 1 }}>
              <div className="section-label" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                <MapPin size={16} /> Regional Engagement
              </div>
              <h2 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>Australian Led. Globally Sourced.</h2>
              <p className="section-desc" style={{ marginBottom: "1.5rem" }}>
                Every engagement is led by an Australian-based senior consultant or architect who understands your business context, regulatory environment, and operational requirements.
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "1.25rem", margin: "0 0 2rem 0", padding: 0, listStyle: "none" }}>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}><div style={{ marginTop: "4px", color: "var(--primary)" }}><Users size={18} /></div><span style={{ fontSize: "1.05rem", color: "var(--text)" }}><b>India Engineering Hub:</b> 150+ full-time engineers forming our deep technical capacity across four cities, working under strict Australian terms.</span></li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}><div style={{ marginTop: "4px", color: "var(--primary)" }}><Users size={18} /></div><span style={{ fontSize: "1.05rem", color: "var(--text)" }}><b>Sydney Presence:</b> Specialized operations to support Financial Services & Healthcare clients needing local proximity.</span></li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}><div style={{ marginTop: "4px", color: "var(--primary)" }}><Users size={18} /></div><span style={{ fontSize: "1.05rem", color: "var(--text)" }}><b>UAE & UK Hubs:</b> Regional hubs serving the Middle East and British markets with dedicated operational independence.</span></li>
              </ul>
              <div style={{ padding: "1rem", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "12px", fontSize: "0.95rem", fontWeight: 600 }}>
                These are not outsourced contractors. They are full-time FI Digital engineers, trained in our methodology and certified in our platform stack.
              </div>
            </div>
            <div className="reveal" style={{ order: 2, position: "relative", height: "550px", borderRadius: "24px", overflow: "hidden", boxShadow: "var(--card-shadow)", border: "1px solid var(--border)" }}>
              <Image src="/delivery-hubs.png" alt="Global Delivery Network map" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
            </div>
          </div>
        </section>

        {/* ══ SECTION 2: PROCESS & TOOLING ══════════════════════════════ */}
        <section className="section" style={{ background: "var(--bg)" }}>
          <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
            <div className="reveal" style={{ position: "relative", height: "450px", borderRadius: "24px", overflow: "hidden", boxShadow: "var(--card-shadow)", border: "1px solid var(--border)" }}>
              <Image src="/delivery-process.png" alt="Process and Engineering Tooling" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
            </div>
            <div className="reveal">
              <div className="section-label" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                <Activity size={16} /> Engineering Rigor
              </div>
              <h2 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>The Process Advantage.</h2>
              <p className="section-desc" style={{ marginBottom: "2.5rem" }}>
                The model works because we have massively invested in process, tooling, and culture to bridge the physical gap seamlessly.
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "2rem" }}>
                {processItems.map((item, i) => (
                  <div key={i} style={{ display: "flex", flexDirection: "column", gap: "0.75rem", padding: "1.25rem", background: "var(--card-bg)", borderRadius: "16px", border: "1px solid var(--border)" }}>
                    <div style={{ padding: "0.5rem", background: "rgba(29, 78, 216, 0.1)", color: "var(--primary)", borderRadius: "8px", width: "fit-content" }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontWeight: 800, color: "var(--text)", marginBottom: "0.25rem", fontSize: "0.95rem" }}>{item.title}</div>
                      <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.5 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ fontWeight: 700, color: "var(--text)", fontSize: "1.1rem", paddingLeft: "1rem", borderLeft: "4px solid var(--primary)" }}>
                The result is enterprise-grade delivery capacity at competitive price points without compromising quality, accountability, or communication.
              </div>
            </div>
          </div>
        </section>

        {/* ══ CTA ══ */}
        <section style={{ padding: "100px 1.5rem", textAlign: "center", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
          <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, marginBottom: "1.5rem" }}>
            Enterprise-grade delivery, Australian accountability.
          </h2>
          <Link href="/book-discovery" style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", background: "var(--primary)", color: "#fff", padding: "1.05rem 2.4rem", borderRadius: "100px", fontSize: "1.05rem", fontWeight: 800, textDecoration: "none" }}>
            Book a Discovery Session →
          </Link>
        </section>

      </main>
    </div>
  );
}
