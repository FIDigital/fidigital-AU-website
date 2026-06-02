"use client";

import Link from 'next/link';
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ArrowRight, CheckCircle, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import TrustedBy from "@/components/TrustedBy";

if (typeof window !== 'undefined') {
  const { ScrollTrigger } = require('gsap/ScrollTrigger');
  gsap.registerPlugin(ScrollTrigger);
}

const STATS = [
  { stat: "200+", label: "Projects" },
  { stat: "Since 2018", label: "Zoho Partner" },
  { stat: "8", label: "Modules Certified" },
  { stat: "#1", label: "Zoho Innovator of the Year" },
];

const INCLUDES = [
  "Zoho audit & modernisation roadmap (written deliverable in 5 business days)",
  "Migration planning from Salesforce, HubSpot, Pipedrive, or legacy CRMs",
  "Custom architecture for Books, Inventory, Creator, Desk, Analytics integration",
  "Australian data residency planning (Zoho AU data centres)",
  "Ongoing optimisation and support retainer options",
];

export default function ZohoConsultantsClient() {
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
          scrollTrigger: { trigger: elem, start: "top 85%", once: true }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} style={{ background: "var(--bg)", minHeight: "100vh" }}>

      {/* ══ HERO SECTION ══════════════ */}
      <section style={{
        position: "relative",
        minHeight: "70vh",
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
            src="/images/partner-hero.png"
            alt="Certified Zoho consultants in Australia"
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
              <CheckCircle size={16} /> Certified Zoho Partner
            </div>

            <h1 className="hero-title" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.1, fontWeight: 900, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: "2rem", textWrap: "balance" }}>
              Zoho Consultants Australia — <br/>
              <span style={{ color: "var(--primary)", fontWeight: 300 }}>Certified Zoho CRM Consulting & Strategy</span>
            </h1>

            <p className="hero-subtitle" style={{ fontSize: "clamp(1.1rem, 2vw, 1.3rem)", color: "var(--text-muted)", lineHeight: 1.7, margin: "0 0 3rem 0", maxWidth: "800px", textWrap: "balance" }}>
              200+ Zoho implementations. Premium Partner since 2018. Zoho Innovator of the Year [PLACEHOLDER: year]. <strong style={{color: "var(--text)"}}>Melbourne-based senior consultants advising Australian mid-market and enterprise.</strong>
            </p>

            <div className="hero-btn" style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
              <Link href="/book-discovery" className="btn-primary" style={{ height: "42px", padding: "0 1.5rem", fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", fontWeight: 600 }}>
                Book a Free Zoho Audit <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustedBy />

      {/* ══ STAT STRIP ══════════════ */}
      <section style={{ background: "var(--bg-secondary)", borderBottom: "1px solid var(--border)", padding: "3rem 1.5rem" }}>
        <div className="container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "3rem", textAlign: "center" }}>
          {STATS.map((s, i) => (
            <div key={i}>
              <div style={{ fontSize: "2.25rem", fontWeight: 900, color: "var(--primary)", lineHeight: 1.1 }}>{s.stat}</div>
              <div style={{ fontSize: "0.95rem", color: "var(--text-muted)", marginTop: "0.4rem", fontWeight: 600 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ SECTION 1: WHAT OUR CONSULTING INCLUDES ══════════════ */}
      <section className="section" style={{ background: "var(--bg)", padding: "100px 1.5rem" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-label" style={{ marginBottom: "1rem" }}>Scope of Work</div>
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900 }}>What our Zoho consulting includes</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {INCLUDES.map((text, idx) => (
              <div key={idx} className="reveal hover-lift" style={{ background: "var(--card-bg)", padding: "1.75rem 2rem", borderRadius: "16px", border: "1px solid var(--border)", display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                <CheckCircle2 size={26} color="var(--primary)" style={{ flexShrink: 0, marginTop: "0.1rem" }} />
                <p style={{ fontSize: "1.1rem", color: "var(--text)", lineHeight: 1.6, margin: 0, fontWeight: 600 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 2: WHY WORK WITH US ══════════════ */}
      <section className="section" style={{ background: "var(--bg-secondary)", padding: "100px 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div className="container reveal" style={{ maxWidth: "900px", textAlign: "center" }}>
          <div className="section-label" style={{ marginBottom: "1rem" }}>Our Team</div>
          <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "1.5rem" }}>Why work with us</h2>
          <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.8, margin: "0 auto", maxWidth: "760px" }}>
            [PLACEHOLDER: Add 2-3 named consultant bios with photos and LinkedIn links here later.]
          </p>
        </div>
      </section>

      {/* ══ SECTION 3: CERTIFICATIONS ══════════════ */}
      <section className="section" style={{ background: "var(--bg)", padding: "100px 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div className="container reveal" style={{ maxWidth: "900px", textAlign: "center" }}>
          <div className="section-label" style={{ marginBottom: "1rem" }}>Credentials</div>
          <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "1.5rem" }}>Certifications</h2>
          <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.8, margin: "0 auto", maxWidth: "760px" }}>
            [PLACEHOLDER: Insert certification badge images here — Zoho CRM, Books, Creator, Desk, Analytics, Campaigns, Inventory, Projects. Pratik to supply badge files.]
          </p>
        </div>
      </section>

      {/* ══ FINAL CTA SECTION ══════════════ */}
      <section id="cta" style={{ padding: '120px 1.5rem', background: '#1d4ed8', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle at right center, rgba(255,255,255,0.8) 0%, transparent 50%)' }}></div>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <h2 style={{ fontSize: '3.5rem', fontWeight: 900, color: 'white', marginBottom: '1.5rem', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            Get expert Zoho consulting
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.95)', fontSize: '1.25rem', lineHeight: 1.7, marginBottom: '3.5rem', fontWeight: 400 }}>
            Melbourne-based senior consultants, 200+ implementations, and Premium Partner credentials. Let's discuss your exact requirements today.
          </p>
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
              Book a Free Zoho Audit <ArrowRight size={20} />
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
