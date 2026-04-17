"use client";

import Link from 'next/link';
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Compass, Target, PieChart, Users, CheckSquare, Microscope, BarChart, Map, Heart, Smile, Layers, Globe, Lightbulb } from 'lucide-react';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  const { ScrollTrigger } = require('gsap/ScrollTrigger');
  gsap.registerPlugin(ScrollTrigger);
}

export default function StrategyClient() {
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
            src="/images/strategy.png"
            alt="Business Digital Strategy Framework"
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
              <Compass size={16} /> Ethical Methodologies
            </div>

            <h1 className="hero-title" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.1, fontWeight: 900, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: "2rem", textWrap: "balance" }}>
              Strategize. <br/>
              <span style={{ color: "var(--primary)", fontWeight: 300 }}>Realize.</span>
            </h1>

            <div className="hero-subtitle" style={{ display: "grid", gap: "1.5rem", margin: "0 0 3rem 0", maxWidth: "800px" }}>
              <p style={{ fontSize: "clamp(1.1rem, 2vw, 1.25rem)", color: "var(--text-muted)", lineHeight: 1.7, margin: 0, textWrap: "balance" }}>
                FI Digital has a commitment towards implementing ethical, result driven strategies using the best workforce available in the industry.
              </p>
            </div>

            <div className="hero-btn" style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary" style={{ height: "42px", padding: "0 1.5rem", fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", fontWeight: 600 }}>
                Build Your Strategy <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 1: BUSINESS IMPACT ══════════════ */}
      <section className="section" style={{ background: "var(--bg-secondary)", padding: "100px 1.5rem" }}>
        <div className="container" style={{ maxWidth: "1000px", textAlign: "center" }}>
          <div className="reveal">
            
            <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "24px", padding: "4rem", boxShadow: "0 20px 40px rgba(0,0,0,0.02)", textAlign: "left" }}>
              <h2 className="section-title" style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "1.5rem", color: "var(--text)" }}>
                The Key to Sustainable Success
              </h2>
              <div style={{ display: "grid", gap: "1.5rem" }}>
                <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.8, margin: 0 }}>
                  Digital strategizing is the key for any business to succeed. You have to engage your customers and give the best service, at the same time. This is the only mantra for having a successful and sustainable model. It can be challenging, to be in both the boats. In times like these, you need us!
                </p>
                <div style={{ padding: "1.5rem", background: "rgba(29, 78, 216, 0.05)", borderLeft: "4px solid var(--primary)", borderRadius: "0 16px 16px 0", marginTop: "0.5rem" }}>
                  <p style={{ color: "var(--text)", fontWeight: 600, margin: 0, fontSize: "1.1rem", lineHeight: 1.7 }}>
                    We help you understand your customer’s needs and behavior, based on which, we provide the best possible solutions. Our flexible and responsive framework will ensure that you can reach your users whenever and wherever.
                  </p>
               </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ SECTION 2: 4-STEP PROCESS GRID ══════════════ */}
      <section className="section" style={{ background: "var(--bg)", padding: "100px 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: "1250px" }}>
          
          <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "1.5rem" }}>
              Scientific Strategy Methodologies
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
             {[
               { title: "Your Objectives", desc: "Realize the core objectives of your digital strategy and implement them in the best possible way.", icon: CheckSquare, color: "#3B82F6" },
               { title: "Analyze", desc: "Study the internal and external market and comprehend the customer behavior, the changing technology, competitors, and your resources.", icon: Microscope, color: "#10B981" },
               { title: "Gap Audit", desc: "Meet your goals in a scientific manner by analyzing your current state and where you want to be.", icon: BarChart, color: "#F59E0B" },
               { title: "Digital Roadmap", desc: "Make your presence felt across all digital channels by a strategic approach to the digital roadmap.", icon: Map, color: "#8B5CF6" }
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

      {/* ══ SECTION 3: ENGENDER CUSTOMER SATISFACTION ══════════════ */}
      <section className="section" style={{ background: "var(--bg-secondary)", padding: "100px 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: "1250px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "3rem", alignItems: "center" }}>
            
            <div className="reveal">
              <h2 className="section-title" style={{ fontSize: "2.2rem", fontWeight: 900, marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Engender Customer Satisfaction
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text)", lineHeight: 1.8, marginBottom: "2rem" }}>
                Our aim is to put your customers and other influencers at the core of the strategy. This helps us come up with meaningful and interesting ways to engage them. With us, create a digital relationship which benefits all – making them the stars! Identify opportunities to optimize your customers’ experiences and elevate them into your profits. Ensuring that you have sustainable relationship, which lasts a lifetime.
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  "Identify Your Audience",
                  "Map Their Requisites",
                  "Create Sustainable Relationship"
                ].map((point, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: "1rem", background: "var(--bg)", padding: "1rem 1.5rem", borderRadius: "12px", border: "1px solid var(--border)" }}>
                     <Heart size={20} color="#EF4444" />
                     <span style={{ fontWeight: 700, fontSize: "1.05rem" }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal hover-lift" style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "24px", padding: "3rem", boxShadow: "0 20px 40px rgba(0,0,0,0.02)" }}>
               <div style={{ width: "64px", height: "64px", borderRadius: "16px", background: "rgba(59, 130, 246, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#3B82F6", marginBottom: "1.5rem" }}>
                  <Smile size={32} />
               </div>
               <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.25rem", lineHeight: 1.3 }}>
                 Impact The Experience
               </h3>
               <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.8, margin: "0 0 1rem 0" }}>
                 We are dealing with complex human interactions on a daily basis. But how we use them in our strategy, reflects on our business model and service delivery. Customer journey mapping will help you resolve your queries with a different perspective, ensuring an emotional quotient for your users.
               </p>
               <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.8, margin: 0 }}>
                 This is the first step when you are trying to connect with your users. A great user experience will mean that you are making customers for a lifetime. We help you understand your audience and their needs better. This makes you create an impact on their lives via your services.
               </p>
            </div>

          </div>
        </div>
      </section>

      {/* ══ SECTION 4: STRATEGIC SERVICES LIST ══════════════ */}
      <section className="section" style={{ background: "var(--bg)", padding: "100px 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: "1250px" }}>
          
          <div className="reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "1.5rem" }}>
              Our Suite of Strategic Services
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
             {[
               { title: "Digital strategy", icon: Lightbulb, color: "#3B82F6" },
               { title: "Customer experience (CX) strategy", icon: Smile, color: "#10B981" },
               { title: "Customer journey mapping", icon: Map, color: "#F59E0B" },
               { title: "Market analysis", icon: BarChart, color: "#8B5CF6" },
               { title: "Digital readiness audits", icon: CheckSquare, color: "#EF4444" },
               { title: "Social media strategy", icon: Globe, color: "#06B6D4" },
               { title: "Content strategy", icon: Layers, color: "#EAB308" },
               { title: "Brand workshops", icon: Target, color: "#F43F5E" }
             ].map((item, i) => (
                <div key={i} className="reveal hover-lift" style={{ background: "var(--bg-secondary)", padding: "1.5rem 1.5rem", borderRadius: "16px", border: "1px solid var(--border)", display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: `${item.color}15`, display: "flex", alignItems: "center", justifyContent: "center", color: item.color, flexShrink: 0 }}>
                    <item.icon size={20} />
                  </div>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text)", margin: 0 }}>{item.title}</h3>
                </div>
             ))}
          </div>

        </div>
      </section>

      {/* ══ FINAL CTA SECTION ══════════════ */}
      <section id="cta" style={{ padding: '120px 1.5rem', background: '#1d4ed8', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle at right center, rgba(255,255,255,0.8) 0%, transparent 50%)' }}></div>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          
          <h2 style={{ fontSize: '3rem', fontWeight: 900, color: 'white', marginBottom: '3rem', letterSpacing: '-0.02em', lineHeight: 1.2, margin: "0 auto 3rem auto" }}>
             Engage Your Customers Effectively Today
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
              Contact Us <ArrowRight size={20} />
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
