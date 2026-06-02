"use client";

import Link from 'next/link';
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Users, Search, PenTool, BarChart4, CheckCircle, Heart, Globe, Sparkles, MessageSquare } from 'lucide-react';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  const { ScrollTrigger } = require('gsap/ScrollTrigger');
  gsap.registerPlugin(ScrollTrigger);
}

export default function UserExperienceClient() {
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

  const services = [
    {
      title: "STRATEGY",
      icon: <Sparkles size={24} />,
      items: [
        "Digital strategy",
        "Customer experience strategy",
        "Customer journey mapping",
        "Mobile strategy",
        "Social media strategy",
        "Content strategy",
        "Consumer insights research",
        "Market analysis"
      ],
      color: "#3B82F6"
    },
    {
      title: "RESEARCH",
      icon: <Search size={24} />,
      items: [
        "Stakeholder interviews",
        "Stakeholder workshops",
        "User workshops & focus groups",
        "User depth interviews",
        "Onsite observations",
        "Contextual inquiries",
        "User surveys",
        "Persona design",
        "User stories, journeys and experience maps"
      ],
      color: "#10B981"
    },
    {
      title: "DESIGN UX",
      icon: <PenTool size={24} />,
      items: [
        "Card sorting workshops",
        "Information architecture design",
        "Participative design workshops",
        "User interface designs/ wireframes",
        "Interactive prototypes"
      ],
      color: "#F59E0B"
    },
    {
      title: "EVALUATION",
      icon: <BarChart4 size={24} />,
      items: [
        "Expert evaluations",
        "Competitor reviews",
        "Web analytics reviews",
        "Remote usability testing",
        "Moderated usability testing",
        "Guerrilla testing",
        "Accessibility reviews"
      ],
      color: "#EF4444"
    }
  ];

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
          width: "55%",
          height: "100%",
          zIndex: 0,
          opacity: 0.5,
          pointerEvents: "none",
        }}>
          <Image
            src="/images/digital-transformation.png"
            alt="User Experience Design Visualization"
            aria-hidden="true"
            fill sizes="(max-width: 768px) 100vw, 50vw"
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
              <Users size={16} /> Human-Centric Design
            </div>

            <h1 className="hero-title" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.1, fontWeight: 900, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: "2rem", textWrap: "balance", textTransform: "uppercase" }}>
              Talk To Your Users, <br/>
              <span style={{ color: "var(--primary)", fontWeight: 300 }}>Digitally</span>
            </h1>

            <div className="hero-subtitle" style={{ display: "grid", gap: "1.5rem", margin: "0 0 3rem 0", maxWidth: "800px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <p style={{ fontSize: "clamp(1.2rem, 2vw, 1.4rem)", color: "var(--text)", fontWeight: 700, margin: 0 }}>
                  To provide your customer the best user experience, it is of utmost importance to understand who they are and what they want.
                </p>
                <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.8, margin: 0 }}>
                  We will first research your audience and help you strategize your framework, as per what they want. This will not just make your business model relevant but also help you convert your users. We help you evolve holistically and deliver your best possible self, to your users. Be engaging, effective, and friendly!
                </p>
              </div>
            </div>

            <div className="hero-btn" style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary" style={{ height: "42px", padding: "0 1.5rem", fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", fontWeight: 600 }}>
                Start Your UX Journey <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 1: UX PHILOSOPHY ══════════════ */}
      <section className="section" style={{ background: "var(--bg)", padding: "100px 1.5rem" }}>
        <div className="container" style={{ maxWidth: "1000px", textAlign: "center" }}>
          <div className="reveal">
            <h2 className="section-title" style={{ fontSize: "2.2rem", fontWeight: 900, marginBottom: "2rem", color: "var(--text)" }}>
               User-Centric Innovation
            </h2>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: "24px", padding: "4rem", boxShadow: "0 20px 40px rgba(0,0,0,0.02)", textAlign: "left", display: "grid", gap: "1.5rem" }}>
               <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.8, margin: 0 }}>
                 Our solutions always revolve around the kind of experience you want to give to your users and your business models. Evolve your model into something which leaves a life-long impression on your customers.
               </p>
               <div style={{ paddingLeft: "1.5rem", borderLeft: "4px solid var(--primary)" }}>
                 <p style={{ fontSize: "1.15rem", color: "var(--text)", fontWeight: 600, lineHeight: 1.8, margin: 0 }}>
                   Our team with unparalleled knowledge will give you just that. We translate the analysis into an appealing vision which you and your customers will love.
                 </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 2: SUITE OF SERVICES ══════════════ */}
      <section className="section" style={{ background: "var(--bg-secondary)", padding: "100px 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: "1250px" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "5rem" }}>
            <h2 className="section-title" style={{ fontSize: "3rem", fontWeight: 900, marginBottom: "1rem" }}>
              Our Suite of UX Services
            </h2>
            <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", maxWidth: "800px", margin: "0 auto" }}>
              Comprehensive design and research methodologies to elevate your digital presence.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            {services.map((service, idx) => (
              <div key={idx} className="reveal hover-lift" style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "24px", padding: "2.5rem", boxShadow: "0 20px 40px rgba(0,0,0,0.02)", display: "flex", flexDirection: "column" }}>
                <div style={{ width: "56px", height: "56px", borderRadius: "14px", background: `${service.color}15`, display: "flex", alignItems: "center", justifyContent: "center", color: service.color, marginBottom: "1.5rem" }}>
                  {service.icon}
                </div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: "2rem", letterSpacing: "-0.01em", color: "var(--text)" }}>
                  {service.title}
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "1rem" }}>
                  {service.items.map((item, itemIdx) => (
                    <li key={itemIdx} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.4 }}>
                      <CheckCircle size={14} style={{ color: service.color, marginTop: "0.25rem", flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 3: UX MANAGERS ══════════════ */}
      <section className="section" style={{ background: "var(--bg)", padding: "120px 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: "1200px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div className="reveal">
              <h2 style={{ fontSize: "2.8rem", fontWeight: 900, color: "var(--text)", marginBottom: "2rem", lineHeight: 1.1 }}>
                User Experience <br/>
                <span style={{ color: "var(--primary)" }}>Managers</span>
              </h2>
              <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "2rem" }}>
                Our team of seasoned professionals will always give you the best and most aesthetically appealing UX. We involve a mixed platter of technologies to ensure that your digital landscape is unmatched, across sectors.
              </p>
              <div style={{ display: "grid", gap: "1.5rem" }}>
                {[
                  "Aesthetically Appealing Vision",
                  "Mixed Platter of Modern Technologies",
                  "Unmatched Digital Landscapes",
                  "Cross-Sector Expertise"
                ].map((point, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "rgba(29, 78, 216, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)" }}>
                      <CheckCircle size={14} />
                    </div>
                    <span style={{ fontWeight: 600, color: "var(--text)" }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal" style={{ position: "relative", borderRadius: "32px", overflow: "hidden", height: "550px", boxShadow: "0 30px 60px rgba(0,0,0,0.05)" }}>
              <Image 
                src="/images/strategy.png"
                alt="UX Strategy and Management"
                fill sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA SECTION ══════════════ */}
      <section id="cta" style={{ padding: '120px 1.5rem', background: '#1d4ed8', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle at right center, rgba(255,255,255,0.8) 0%, transparent 50%)' }}></div>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          
          <h2 style={{ fontSize: '3rem', fontWeight: 900, color: 'white', marginBottom: '2rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
             Evolve Your Digital Vision
          </h2>
          <p style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.8, margin: "0 auto 3rem auto", maxWidth: "800px" }}>
             Ready to leave a life-long impression on your customers? Our team is ready to translate your goals into an engaging digital experience.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link href="/contact" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: 'white',
              color: 'var(--primary)',
              padding: '1.2rem 3rem',
              borderRadius: '100px',
              fontSize: '1.2rem',
              fontWeight: 800,
              textDecoration: 'none',
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease'
             }} className="btn-primary-hover">
              Contact Us <ArrowRight size={22} />
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
