"use client";

import Link from 'next/link';
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Zap, Activity, Settings, Puzzle, Database, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import TrustedBy from "@/components/TrustedBy";

if (typeof window !== 'undefined') {
  const { ScrollTrigger } = require('gsap/ScrollTrigger');
  gsap.registerPlugin(ScrollTrigger);
}

export default function EnergyRenewablesClient() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".hero-badge", { y: 20, autoAlpha: 0, duration: 0.6, ease: "power3.out" });
    gsap.from(".hero-title", { y: 30, autoAlpha: 0, duration: 0.8, delay: 0.1, ease: "power3.out" });
    gsap.from(".hero-subtitle", { y: 30, autoAlpha: 0, duration: 0.8, delay: 0.2, ease: "power3.out" });
    gsap.from(".hero-btn", { y: 20, autoAlpha: 0, duration: 0.6, delay: 0.35, ease: "power3.out" });

    gsap.utils.toArray(".reveal").forEach((elem) => {
      gsap.fromTo(elem,
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: elem,
            start: "top 85%",
            once: true
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} style={{ background: "var(--bg)", minHeight: "100vh" }}>

      {/* ══ HERO SECTION ══════════════ */}
      <section style={{
        position: "relative",
        minHeight: "85vh",
        display: "flex",
        alignItems: "center",
        padding: "clamp(120px, 15vh, 180px) 1.5rem 100px",
        background: "var(--bg)",
        overflow: "hidden",
        borderBottom: "1px solid var(--border)"
      }}>
        <div style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "60%",
          height: "100%",
          zIndex: 0,
          opacity: 0.45,
          pointerEvents: "none",
        }}>
          <Image
            src="/images/energy-renuable.png"
            alt="Energy and renewables technology for Australian operators"
            aria-hidden="true"
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            style={{
              objectFit: "cover",
              maskImage: "radial-gradient(circle at right, black, transparent 80%)",
              WebkitMaskImage: "radial-gradient(circle at right, black, transparent 80%)",
            }}
          />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "left" }}>

          <div style={{ maxWidth: "1000px", textAlign: "left" }}>
            <div className="hero-badge" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(29, 78, 216, 0.1)", color: "var(--primary)", padding: "0.5rem 1rem", borderRadius: "50px", fontWeight: 700, marginBottom: "1.5rem" }}>
              <Zap size={16} /> Energy & Renewables
            </div>

            <h1 className="hero-title" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.1, fontWeight: 900, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: "2rem", textWrap: "balance" }}>
              Technology for Australia's <br/>
              <span style={{ color: "var(--primary)", fontWeight: 300 }}>Energy & Renewables Sector</span>
            </h1>

            <div className="hero-subtitle" style={{ display: "grid", gap: "1.5rem", margin: "0 0 3rem 0", maxWidth: "800px" }}>
              <p style={{ fontSize: "clamp(1.1rem, 2vw, 1.25rem)", color: "var(--text-muted)", lineHeight: 1.7, margin: 0, textWrap: "balance" }}>
                Software, data platforms, and AI agents built for Australian energy operators — generators, retailers, network operators, solar and wind asset managers, and renewable energy developers.
              </p>
            </div>

            <div className="hero-btn" style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
              <Link href="/book-discovery" className="btn-primary" style={{ height: "42px", padding: "0 1.5rem", fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", fontWeight: 600 }}>
                Book a Free Energy & Renewables Discovery Session <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustedBy />

      {/* ══ SECTION 1: WHAT WE BUILD ══════════════ */}
      <section className="section" style={{ background: "var(--bg-secondary)", padding: "100px 1.5rem" }}>
        <div className="container" style={{ maxWidth: "1250px" }}>

          <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "1.5rem" }}>
              What we build for energy & renewables operators
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
             {[
               { title: "Governed data platforms", desc: "Data platforms that ingest SCADA, AEMO, and asset telemetry into a single governed lakehouse.", icon: Database, color: "#3B82F6" },
               { title: "AI agents", desc: "AI agents for outage prediction, performance forecasting, and ESG reporting automation.", icon: Activity, color: "#10B981" },
               { title: "Custom portals", desc: "Custom portals for solar/wind asset performance, LGC tracking, and customer self-service.", icon: Puzzle, color: "#F59E0B" },
               { title: "Zoho implementations", desc: "Zoho CRM, Books, and Creator implementations tailored to energy retail and B2B sales cycles.", icon: Settings, color: "#8B5CF6" },
             ].map((item, i) => (
                <div key={i} className="reveal hover-lift" style={{ background: "var(--bg)", padding: "2.5rem 2rem", borderRadius: "20px", border: "1px solid var(--border)", boxShadow: "0 10px 30px rgba(0,0,0,0.03)", display: "flex", flexDirection: "column", gap: "1.15rem" }}>
                  <div style={{ width: "56px", height: "56px", borderRadius: "14px", background: `${item.color}15`, display: "flex", alignItems: "center", justifyContent: "center", color: item.color }}>
                    <item.icon size={28} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.75rem" }}>{item.title}</h3>
                    <p style={{ color: "var(--text-muted)", lineHeight: 1.6, margin: 0, fontSize: "1.05rem" }}>{item.desc}</p>
                  </div>
                </div>
             ))}
          </div>

        </div>
      </section>

      {/* ══ SECTION 2: AUSTRALIAN ENERGY COMPLIANCE ══════════════ */}
      <section className="section" style={{ background: "var(--bg)", padding: "100px 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: "900px", textAlign: "center" }}>

          <div className="reveal">
            <div className="section-label" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 700, marginBottom: "1rem" }}>
              <ShieldCheck size={18} /> Compliance
            </div>
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "1.5rem" }}>
              Built for Australian energy compliance
            </h2>
            <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.8, margin: "0 auto", maxWidth: "780px" }}>
              AER (Australian Energy Regulator) reporting. AEMO data integration. NGER emissions reporting. Australian Privacy Principles compliance. All data hosted in AWS Sydney or Azure Australia East.
            </p>
          </div>

        </div>
      </section>

      {/* ══ SECTION 3: FEATURED ENGAGEMENT ══════════════ */}
      <section className="section" style={{ background: "var(--bg-secondary)", padding: "100px 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div className="container reveal" style={{ maxWidth: "900px", textAlign: "center" }}>
          <h2 className="section-title" style={{ fontSize: "2.25rem", fontWeight: 900, marginBottom: "1.5rem" }}>
            Featured engagement
          </h2>
          <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "2rem", maxWidth: "780px", marginLeft: "auto", marginRight: "auto" }}>
            [PLACEHOLDER: Replace with BlueNRG case study summary — 3 lines: problem, solution, outcome metric. BlueNRG is already on /case-studies — link the existing case study card here.]
          </p>
          <Link href="/case-studies" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 700, textDecoration: "none", fontSize: "1.05rem" }}>
            View the BlueNRG case study <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ══ FINAL CTA SECTION ══════════════ */}
      <section id="cta" style={{ padding: '120px 1.5rem', background: '#1d4ed8', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle at right center, rgba(255,255,255,0.8) 0%, transparent 50%)' }}></div>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center', position: 'relative', zIndex: 2 }}>

          <h2 style={{ fontSize: '3rem', fontWeight: 900, color: 'white', marginBottom: '3rem', letterSpacing: '-0.02em', lineHeight: 1.2, margin: "0 auto 3rem auto" }}>
             Ready to modernise your energy & renewables operations?
          </h2>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link href="/book-discovery" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: 'white',
              color: 'var(--primary)',
              padding: '1.1rem 2.5rem',
              borderRadius: '100px',
              fontSize: '1.15rem',
              fontWeight: 800,
              textDecoration: 'none',
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease'
             }} className="btn-primary-hover">
              Book a Free Energy & Renewables Discovery Session <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .btn-primary {
          background: linear-gradient(135deg, var(--primary) 0%, rgba(29, 78, 216, 1) 100%);
          color: white;
          border-radius: 8px;
          box-shadow: 0 15px 30px rgba(29, 78, 216, 0.2);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(29, 78, 216, 0.3);
        }
        .hover-lift {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
        }
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.12) !important;
        }
        .btn-primary-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.3) !important;
        }
        @media (max-width: 768px) {
           .hover-lift {
              transform: none !important;
           }
        }
      `}</style>
    </div>
  );
}
