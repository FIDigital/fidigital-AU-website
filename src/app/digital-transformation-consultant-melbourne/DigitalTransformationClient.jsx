"use client";

import Link from 'next/link';
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Lightbulb, Map, Microscope, Settings, Rocket, History, Award, Zap, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  const { ScrollTrigger } = require('gsap/ScrollTrigger');
  gsap.registerPlugin(ScrollTrigger);
}

export default function DigitalTransformationClient() {
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
            src="/images/digital-transformation.png"
            alt="Digital Transformation Mapping"
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
              <Lightbulb size={16} /> Melbourne IT Strategy Firm
            </div>

            <h1 className="hero-title" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.1, fontWeight: 900, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: "2rem", textWrap: "balance" }}>
              Transform Into Your <br/>
              <span style={{ color: "var(--primary)", fontWeight: 300 }}>Best Self</span>
            </h1>

            <div className="hero-subtitle" style={{ display: "grid", gap: "1.5rem", margin: "0 0 3rem 0", maxWidth: "800px" }}>
              <p style={{ fontSize: "clamp(1.1rem, 2vw, 1.25rem)", color: "var(--text-muted)", lineHeight: 1.7, margin: 0, textWrap: "balance" }}>
                To keep up with the ever-evolving technology, it is essential to keep transforming yourself, for the better. You could be looking at over-hauling your model or testing the water with one project, at a time.
              </p>
              
              <p style={{ fontSize: "clamp(1.1rem, 2vw, 1.25rem)", color: "var(--text-muted)", lineHeight: 1.7, margin: 0, paddingLeft: "1.5rem", borderLeft: "4px solid var(--primary)" }}>
                Our team of experts can help you with a preview in the future and let you know what it is that you are lacking. We help you unlock digital opportunities which you might be missing out on. Change to be a better self, today and forever. With this motto, we take your existing processes and simplify them to make you reach your goals faster. Along with us, you will be able to focus more on making your customers and business, bloom.
              </p>
            </div>

            <div className="hero-btn" style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary" style={{ height: "42px", padding: "0 1.5rem", fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", fontWeight: 600 }}>
                Build Your Roadmap <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 1: ROADMAP ══════════════ */}
      <section className="section" style={{ background: "var(--bg-secondary)", padding: "100px 1.5rem" }}>
        <div className="container" style={{ maxWidth: "1000px", textAlign: "center" }}>
          <div className="reveal">
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "2rem", lineHeight: 1.2, display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem" }}>
              <Map size={36} color="var(--primary)" /> Our Roadmap On Transformation
            </h2>
            <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "24px", padding: "3.5rem", boxShadow: "0 20px 40px rgba(0,0,0,0.02)", textAlign: "center" }}>
              <p style={{ fontSize: "1.15rem", color: "var(--text)", lineHeight: 1.8, margin: 0 }}>
                With the right visions, leadership, acumen, and a perfect team you can take on the digital transformation, in a breeze. Your vision, mission, and ethics become one of our own. We empower you and your business, in a way, which you have never imagined. We help you make the perfect roadmap to reach greater heights with sustainable growth. Be ensured to stay in style, relevance, and competition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 2: PROCESS GRID ══════════════ */}
      <section className="section" style={{ background: "var(--bg)", padding: "100px 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: "1250px" }}>
          
          <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "1.5rem" }}>
              Analyze. Optimize. Evolve.
            </h2>
            <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", margin: "0 auto", maxWidth: "800px", lineHeight: 1.8 }}>
              Rethink your digital opportunities and stay in tandem with the evolving technologies. Give your customer the best and leave everything else on us.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
             {[
               { title: "ANALYZE", subtitle: "Observe the opportunity", desc: "Through our evidence-based research and analysis methodology – assessing internal capabilities, external market factors and customer requirements, we help you identify future opportunities (and challenges).", footer: "A journey of discovery", icon: Microscope, color: "#3B82F6" },
               { title: "OPTIMIZE", subtitle: "Develop the opportunity", desc: "Via collaborative creative planning, we help you to realize new digital products and services and facilitate the cultural change necessary to realize your strategic business goals.", footer: "Creative business solutions", icon: Settings, color: "#10B981" },
               { title: "EVOLVE", subtitle: "Evolve to remain creative", desc: "We help you to advance your business and digital strategy through a constant program of monitoring, analysis and planning – informed by innovation, governance and quality control.", footer: "Sustaining the transition", icon: Rocket, color: "#8B5CF6" }
             ].map((item, i) => (
                <div key={i} className="reveal hover-lift" style={{ background: "var(--bg-secondary)", padding: "3rem 2rem", borderRadius: "20px", border: "1px solid var(--border)", boxShadow: "0 10px 30px rgba(0,0,0,0.03)", display: "flex", flexDirection: "column", gap: "1.15rem" }}>
                  <div style={{ width: "64px", height: "64px", borderRadius: "16px", background: `${item.color}15`, display: "flex", alignItems: "center", justifyContent: "center", color: item.color, marginBottom: "0.5rem" }}>
                    <item.icon size={32} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.25rem", letterSpacing: "1px" }}>{item.title}</h3>
                    <p style={{ color: item.color, fontWeight: 700, margin: "0 0 1rem 0", fontSize: "1rem" }}>{item.subtitle}</p>
                    <p style={{ color: "var(--text-muted)", lineHeight: 1.6, margin: "0 0 1.5rem 0", fontSize: "1.05rem" }}>
                      {item.desc}
                    </p>
                    <div style={{ fontWeight: 600, color: "var(--text)", borderTop: "1px solid var(--border)", paddingTop: "1rem", fontSize: "0.95rem" }}>
                      ↳ {item.footer}
                    </div>
                  </div>
                </div>
             ))}
          </div>

        </div>
      </section>

      {/* ══ SECTION 3: CORE VALUES ══════════════ */}
      <section className="section" style={{ background: "var(--bg-secondary)", padding: "100px 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: "1250px" }}>
          
          <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "1.5rem" }}>
              Our Consulting Pledges
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
             {[
               { title: "Long Term Effects", desc: "Our core strategies like multi-nodal guest blogging leave a long term positive effects for our clients.", icon: History, color: "#3B82F6" },
               { title: "Qualified Workers", desc: "All our work is done right in Melbourne. This is done so as to maintain the highest levels of quality and control.", icon: Award, color: "#F59E0B" },
               { title: "Powerful Tools", desc: "We work on world-renown software to get the best results for our clients and also report their progress.", icon: Zap, color: "#10B981" },
               { title: "Confidentiality", desc: "As a fellow SME, we know being professional and transparent really helps. Hence integrity is one of our core values.", icon: ShieldCheck, color: "#EF4444" }
             ].map((item, i) => (
                <div key={i} className="reveal hover-lift" style={{ background: "var(--card-bg)", padding: "2rem", borderRadius: "20px", border: "1px solid var(--border)", boxShadow: "0 10px 30px rgba(0,0,0,0.03)", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: `${item.color}15`, display: "flex", alignItems: "center", justifyContent: "center", color: item.color }}>
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.5rem" }}>{item.title}</h3>
                    <p style={{ color: "var(--text-muted)", lineHeight: 1.6, margin: 0, fontSize: "0.95rem" }}>
                      {item.desc}
                    </p>
                  </div>
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
             Ready to accelerate your Enterprise?
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
