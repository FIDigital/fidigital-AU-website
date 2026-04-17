"use client";

import Link from 'next/link';
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Store, Database, TrendingUp, HeartHandshake, Target, TrendingDown, BarChart, Map, MessageCircle } from 'lucide-react';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  const { ScrollTrigger } = require('gsap/ScrollTrigger');
  gsap.registerPlugin(ScrollTrigger);
}

export default function RetailClient() {
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
            src="/images/Retail.png"
            alt="Retail Omnichannel Solutions"
            aria-hidden="true"
            fill
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
              <Store size={16} /> Retail Management Solutions
            </div>

            <h1 className="hero-title" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.1, fontWeight: 900, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: "2rem", textWrap: "balance" }}>
              Are you managing a retail outlet <br/>
              <span style={{ color: "var(--primary)", fontWeight: 300 }}>or a massive chain of stores?</span>
            </h1>

            <div className="hero-subtitle" style={{ display: "grid", gap: "1.5rem", margin: "0 0 3rem 0", maxWidth: "800px" }}>
              <p style={{ fontSize: "clamp(1.1rem, 2vw, 1.25rem)", color: "var(--text-muted)", lineHeight: 1.7, margin: 0, textWrap: "balance" }}>
                Do you continuously find it incredibly difficult properly to gracefully manage the complex processes that intelligently run heavily behind your active retail operations?
              </p>
              
              <p style={{ fontSize: "clamp(1.1rem, 2vw, 1.25rem)", color: "var(--text-muted)", lineHeight: 1.7, margin: 0, paddingLeft: "1.5rem", borderLeft: "4px solid var(--primary)" }}>
                With the native Zoho suite of complex applications you accurately can gracefully streamline the exhaustive back-end procedures correctly and distinctly provide your active store beautifully with a logically complete operational makeover.
              </p>
            </div>

            <div className="hero-btn" style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary" style={{ height: "42px", padding: "0 1.5rem", fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", fontWeight: 600 }}>
                Streamline Your Retail Logic <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 1: MULTI-CHANNEL RETAIL MANAGEMENT ══════════════ */}
      <section className="section" style={{ background: "var(--bg-secondary)", padding: "100px 1.5rem" }}>
        <div className="container" style={{ maxWidth: "1000px", textAlign: "center" }}>
          <div className="reveal">
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "2rem", lineHeight: 1.2 }}>
              Unified Operations Logic
            </h2>
            <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "24px", padding: "3.5rem", boxShadow: "0 20px 40px rgba(0,0,0,0.02)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.8, margin: 0 }}>
                  At FI Digital we beautifully help retail outlets explicitly in securely Australia heavily to elegantly rethink exactly their strict retail management cleanly using powerful multichannel CRM environments natively from Zoho.
                </p>
                <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.8, margin: 0 }}>
                  We uniquely provide massive retail organizations securely with exact Zoho CRM implementation services uniquely that correctly allow directly them perfectly to correctly integrate completely their core platform naturally for rigorous sales, dedicated support, massive inventory, precisely and comprehensive marketing needs. This safely helps exactly you intelligently to reliably manage effortlessly your strict supply distinctly and active retail chain operations safely with remarkable ease.
                </p>
                <div style={{ padding: "1.5rem", background: "rgba(29, 78, 216, 0.05)", borderLeft: "4px solid var(--primary)", borderRadius: "0 16px 16px 0", marginTop: "1rem", textAlign: "left" }}>
                  <p style={{ color: "var(--text)", fontWeight: 700, margin: 0, fontSize: "1.1rem", lineHeight: 1.7 }}>
                    Zoho applications precisely and advanced implementation solutions strictly for rigorous retail chains efficiently allows seamlessly them precisely to safely manage safely their exact systems safely and logical operations completely on intelligently a clearly single structured platform. It explicitly helps smoothly them correctly to cleverly keep reliably a strict track explicitly of exactly their heavy warehousing correctly and complete purchasing processes, gracefully while natively also systematically automating seamlessly and strictly standardizing dedicated accounting clearly across logically their heavy supply chain. Zoho applications explicitly such naturally as Zoho Creator securely allow exact retail chains completely to heavily manage reliably their complete stocks, correctly track orders elegantly as smartly well safely as systematically generate comprehensive invoices rapidly consistently and safely efficiently.
                  </p>
               </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 2: RETAIL ADVANTAGES ══════════════ */}
      <section className="section" style={{ background: "var(--bg)", padding: "100px 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: "1250px" }}>
          
          <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "1.5rem" }}>
              Retail Advantages
            </h2>
            <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", margin: "0 auto", maxWidth: "800px", lineHeight: 1.8 }}>
               Fi Digital’s exact Zoho CRM programmatic application completely & powerful integration reliable experts strategically provide scalable Solutions exactly that confidently help massive Retail scaling companies actively to:
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
             {[
               { title: "Customer Support Ecosystems", desc: "Offer exceptionally outstanding multi-channel customer support robust services.", icon: MessageCircle, color: "#3B82F6" },
               { title: "Cross-Selling Metrics", desc: "Boost intelligent opportunities completely for dynamic cross-selling gracefully and uniquely acquire massive repeat valuable customers smoothly and predictable business.", icon: TrendingUp, color: "#10B981" },
               { title: "Retention Flow", desc: "Dramatically heavily improve precisely the complex rate securely of dedicated customer lifecycle retention.", icon: HeartHandshake, color: "#F59E0B" },
               { title: "Lead Nurturing", desc: "Aggressively effectively increase active sales directly by safely nurturing early pipeline leads.", icon: Target, color: "#8B5CF6" },
               { title: "Expense Reduction", desc: "Successfully actively reduce heavy marketing accurately and strict sales structural costs.", icon: TrendingDown, color: "#EF4444" },
               { title: "Real-Time Reports", desc: "Dynamically acquire valuable actionable insights clearly and complex robust reports flawlessly in precise real-time.", icon: BarChart, color: "#06B6D4" },
               { title: "Trend Capturing", desc: "Capture complex customers’ trends accurately explicitly to organically reliably boost strict retail business growth.", icon: Map, color: "#F43F5E" }
             ].map((item, i) => (
                <div key={i} className="reveal hover-lift" style={{ background: "var(--card-bg)", padding: "2.5rem 2rem", borderRadius: "20px", border: "1px solid var(--border)", boxShadow: "0 10px 30px rgba(0,0,0,0.03)", display: "flex", flexDirection: "column", gap: "1.15rem" }}>
                  <div style={{ width: "56px", height: "56px", borderRadius: "14px", background: `${item.color}15`, display: "flex", alignItems: "center", justifyContent: "center", color: item.color }}>
                    <item.icon size={28} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.75rem" }}>{item.title}</h3>
                    <p style={{ color: "var(--text-muted)", lineHeight: 1.6, margin: 0, fontSize: "1.05rem" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
             ))}
          </div>

        </div>
      </section>

      {/* ══ SECTION 3: WHY US ══════════════ */}
      <section className="section" style={{ background: "var(--bg-secondary)", padding: "100px 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: "1000px", textAlign: "center" }}>
          
          <div className="reveal">
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "2rem" }}>
              Why Us?
            </h2>
            <div style={{ background: "var(--bg)", padding: "3.5rem", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "0 20px 40px rgba(0,0,0,0.02)" }}>
              <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1.5rem", margin: 0 }}>
                 Our trained and highly experienced Zoho consultants customize Zoho applications to complement your business needs. We implement Zoho CRM to assist retail companies with their reporting, territory management, analytics, sales forecasting and other business related tasks.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ══ FINAL CTA SECTION ══════════════ */}
      <section id="cta" style={{ padding: '120px 1.5rem', background: '#1d4ed8', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle at right center, rgba(255,255,255,0.8) 0%, transparent 50%)' }}></div>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          
          <h2 style={{ fontSize: '3rem', fontWeight: 900, color: 'white', marginBottom: '3rem', letterSpacing: '-0.02em', lineHeight: 1.2, margin: "0 auto 3rem auto" }}>
             Get customized Zoho implementation services for your retail chain!
          </h2>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link href="/contact" style={{
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
              Connect with our consultants here! <ArrowRight size={20} />
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
