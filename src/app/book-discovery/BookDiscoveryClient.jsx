"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Calendar, Clock, ShieldCheck,
  MessageSquare, Sparkles, Zap, Users, Globe, Building
} from "lucide-react";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BookDiscoveryClient() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".hero-badge", { y: -20, autoAlpha: 0, duration: 0.6, ease: "power3.out" })
      .from(".hero-h1", { y: 40, autoAlpha: 0, duration: 0.8, ease: "power3.out" }, "-=0.3")
      .from(".hero-sub", { y: 20, autoAlpha: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")
      .from(".hero-cta", { y: 20, autoAlpha: 0, duration: 0.6, ease: "power2.out" }, "-=0.4");

    gsap.utils.toArray(".reveal").forEach((el) => {
      gsap.fromTo(el,
        { y: 30, autoAlpha: 0 },
        { 
          y: 0, autoAlpha: 1, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true } 
        }
      );
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="discovery-page" style={{ background: "var(--bg)", color: "var(--text)" }}>
      <style>{`
        .discovery-page { overflow-x: hidden; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; width: 100%; }
        .section-padding { padding: 120px 0; }
        
        .hero-section {
          position: relative;
          min-height: 85vh;
          display: flex;
          align-items: center;
          padding-top: var(--header-h);
          background: var(--bg);
          overflow: hidden;
          text-align: left;
        }

        .hero-bg-container {
          position: absolute;
          top: 0;
          right: 0;
          width: 65%;
          height: 100%;
          z-index: 0;
          mask-image: radial-gradient(circle at center, black, transparent 85%);
          -webkit-mask-image: radial-gradient(circle at center, black, transparent 85%);
          opacity: 0.25;
          filter: grayscale(1) brightness(0.8);
        }

        [data-theme='dark'] .hero-bg-container {
           opacity: 0.4;
           filter: grayscale(0.5) brightness(0.8);
        }

        .hero-glow {
          position: absolute;
          width: 700px; height: 700px;
          background: radial-gradient(circle, rgba(29, 78, 216, 0.1) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
        }

        [data-theme='dark'] .hero-glow {
           background: radial-gradient(circle, rgba(29, 78, 216, 0.2) 0%, transparent 70%);
        }



        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(29, 78, 216, 0.08);
          border: 1px solid rgba(29, 78, 216, 0.2);
          padding: 0.5rem 1rem;
          border-radius: 100px;
          color: var(--primary);
          font-weight: 800;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 2rem;
        }

        .glass-card {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 32px;
          padding: 3rem;
          box-shadow: var(--card-shadow);
        }

        .expectation-item {
          display: flex;
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        .expectation-icon {
          width: 48px; height: 48px;
          background: rgba(29, 78, 216, 0.06);
          border-radius: 12px;
          display: flex; alignItems: center; justifyContent: center;
          color: var(--primary);
          flex-shrink: 0;
        }

        .expectation-content h3 {
          font-size: 1.15rem; fontWeight: 800; margin-bottom: 0.5rem;
        }

        .expectation-content p {
          color: var(--text-muted); line-height: 1.6;
        }

        /* ── Zoho Bookings embed ─────────────────────────────── */
        .booking-embed-wrap {
          max-width: 1000px;
          margin: 0 auto;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid var(--border);
          box-shadow: var(--card-shadow);
          background: var(--card-bg);
          -webkit-overflow-scrolling: touch;
        }
        .booking-embed-wrap iframe {
          display: block;
          width: 100%;
          height: 750px;
          border: 0;
        }
        /* Taller viewports get a little more room; the Zoho flow
           stacks vertically as the width shrinks, so height grows. */
        @media (max-width: 1024px) {
          .booking-embed-wrap iframe { height: 820px; }
        }

        @media (max-width: 768px) {
          .section-padding { padding: 80px 0; }
          .hero-section { min-height: auto; padding-top: 140px; padding-bottom: 80px; }
          .glass-card { padding: 2rem; }
          .booking-embed-wrap { border-radius: 16px; }
          .booking-embed-wrap iframe { height: 1000px; }
        }

        @media (max-width: 480px) {
          .booking-embed-wrap iframe { height: 1120px; }
        }
      `}</style>

      <main>
        {/* ══ HERO ══════════════════════════════════════════════════════════ */}
        <section className="hero-section">
          <div className="hero-bg-container">
            <Image 
              src="/images/Contact-us.png" 
              alt="Discovery Background" 
              fill sizes="(max-width: 768px) 100vw, 50vw" 
              className="object-cover"
              priority
            />
          </div>
          <div className="hero-glow" style={{ top: '0', right: '0' }} />
          <div className="container" style={{ position: 'relative', zIndex: 10 }}>

            <div className="hero-badge">
              <Sparkles size={16} /> Strategy & Architecture
            </div>
            <h1 className="hero-h1" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: "1.5rem", maxWidth: "900px" }}>
              Book a Free <br />
              <span style={{ color: "var(--primary)" }}>Discovery Session</span>
            </h1>
            <p className="hero-sub" style={{ fontSize: "1.2rem", color: "var(--text-muted)", maxWidth: "700px", lineHeight: 1.7, marginBottom: "3rem" }}>
              A free, no-obligation 30-minute conversation with a senior consultant to discuss your technology landscape and business objectives.
            </p>
            <div className="hero-cta">
              <a href="#booking-form" style={{ 
                background: "var(--primary)", color: "#fff", padding: "1rem 2.5rem", 
                borderRadius: "100px", fontWeight: 800, textDecoration: "none", 
                display: "inline-flex", alignItems: "center", gap: "0.75rem" 
              }}>
                Reserve Your Time <Calendar size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* ══ CONTENT SECTION ═══════════════════════════════════════════════ */}
        <section className="section-padding" style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
              <div className="reveal">
                <h2 style={{ fontSize: '2.25rem', fontWeight: 900, marginBottom: '2rem', lineHeight: 1.2 }}>What is a Discovery Session?</h2>
                <div style={{ background: 'var(--bg)', padding: '2.5rem', borderRadius: '24px', borderLeft: '4px solid var(--primary)', marginBottom: '2rem' }}>
                   <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text)', fontWeight: 500 }}>
                    A Discovery Session is a free, no-obligation 30-minute conversation with one of our senior consultants. No sales pitch. No pressure. Just a structured conversation about your current technology landscape, your business objectives, and where engineering, data, AI, or systems modernisation could create the most impact. 
                   </p>
                </div>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
                  We will tell you honestly whether we are the right fit. If we are, we will propose a paid Discovery engagement (typically 2 to 4 weeks) that produces a detailed report with architecture recommendations, timeline, and investment estimate. If we are not the right fit, we will tell you who is.
                </p>
              </div>

              <div className="reveal glass-card">
                <h2 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '2.5rem' }}>What to expect:</h2>
                
                {[
                  { icon: <Users size={24} />, title: "Senior Consultant", desc: "Speak with an expert (not a salesperson) with experience in your industry." },
                  { icon: <MessageSquare size={24} />, title: "Structured Conversation", desc: "Covering your current systems, pain points, and strategic objectives." },
                  { icon: <ShieldCheck size={24} />, title: "Honest Assessment", desc: "A transparent evaluation of where FI Digital can truly add value." },
                  { icon: <Zap size={24} />, title: "Path Forward", desc: "If appropriate, a clear proposal for a deeper, paid Discovery engagement." }
                ].map((item, i) => (
                  <div key={i} className="expectation-item">
                    <div className="expectation-icon">{item.icon}</div>
                    <div className="expectation-content">
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ BOOKING FORM ══════════════════════════════════════════════════ */}
        <section id="booking-form" className="section-padding">
          <div className="container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <div className="hero-badge" style={{ marginBottom: '1.5rem' }}>
                <Clock size={16} /> 30 Minutes · Free
              </div>
              <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1.5rem' }}>Schedule Your Session</h2>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                Reach out and we&apos;ll arrange a free 30-minute discovery call at a time that suits you.
              </p>
            </div>

            <div className="reveal booking-embed-wrap">
              <iframe
                src="https://fidigital.zohobookings.com/portal-embed#/3881442000002731050"
                title="Book your AI Strategy Call with FI Digital"
                width="100%"
                height="750"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--text-muted)', textAlign: 'center' }}>
              Trouble loading the scheduler? Call <a href="tel:1300921280" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>1300 921 280</a> or email <a href="mailto:support@fidigital.com.au" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>support@fidigital.com.au</a>
            </p>
          </div>
        </section>

        {/* ══ TRUST SECTION ═════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ background: "var(--bg-secondary)" }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <div className="reveal">
              <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '4rem' }}>Why Australian Businesses Start Here</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
                {[
                  { icon: <Building size={32} />, title: "Enterprise Grade", desc: "Strategic thinking designed for scale and compliance." },
                  { icon: <Globe size={32} />, title: "Local Context", desc: "Melbourne-based experts who understand the AU market." },
                  { icon: <Zap size={32} />, title: "Zero Risk", desc: "A free expert opinion to validate your technology roadmap." }
                ].map((p, i) => (
                  <div key={i} className="glass-card" style={{ background: 'var(--bg)' }}>
                    <div style={{ color: 'var(--primary)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>{p.icon}</div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem' }}>{p.title}</h3>
                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ padding: '5rem 0', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
          &copy; {new Date().getFullYear()} FI Digital Australia. Melbourne HQ: Level 9, 440 Collins Street.
        </p>
      </footer>
    </div>
  );
}
