"use client";

import Link from 'next/link';
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Code2, Cpu, Globe, Layers, ShieldCheck, Zap, Database, Smartphone, Layout } from 'lucide-react';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  const { ScrollTrigger } = require('gsap/ScrollTrigger');
  gsap.registerPlugin(ScrollTrigger);
}

export default function BuildClient() {
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
            src="/images/it-software.png"
            alt="Advanced Software Engineering Visualization"
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
              <Code2 size={16} /> Engineering Excellence
            </div>

            <h1 className="hero-title" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.1, fontWeight: 900, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: "2rem", textWrap: "balance", textTransform: "uppercase" }}>
              Build Your Brand's <br/>
              <span style={{ color: "var(--primary)", fontWeight: 300 }}>Unique Identity</span>
            </h1>

            <div className="hero-subtitle" style={{ display: "grid", gap: "1.5rem", margin: "0 0 3rem 0", maxWidth: "800px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <p style={{ fontSize: "clamp(1.2rem, 2vw, 1.4rem)", color: "var(--text)", fontWeight: 700, margin: 0 }}>
                  Our developers will help your brand be unique in a crowd of millions and establish an immediate connect.
                </p>
                <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.8, margin: 0 }}>
                  We keep in mind the aesthetic value and functionality of your digital products to ensure a result-driven approach. Our interfaces foster commercial success while creating a seamless user experience, leading to improved visibility and increased conversions.
                </p>
              </div>
            </div>

            <div className="hero-btn" style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary" style={{ height: "42px", padding: "0 1.5rem", fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", fontWeight: 600 }}>
                Start Your Build <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 1: DE-CODE YOUR SUCCESS ══════════════ */}
      <section className="section" style={{ background: "var(--bg)", padding: "100px 1.5rem" }}>
        <div className="container" style={{ maxWidth: "1200px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div className="reveal" style={{ position: "relative", borderRadius: "32px", overflow: "hidden", height: "500px", boxShadow: "0 30px 60px rgba(0,0,0,0.05)" }}>
              <Image 
                src="/images/digital-transformation.png"
                alt="Modern Coding Standards"
                fill sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="reveal">
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", background: "rgba(16, 185, 129, 0.1)", color: "#10B981", padding: "0.5rem 1rem", borderRadius: "50px", fontWeight: 700, marginBottom: "1.5rem" }}>
                <Cpu size={16} /> DE-CODE YOUR SUCCESS
              </div>
              <h2 style={{ fontSize: "2.8rem", fontWeight: 900, color: "var(--text)", marginBottom: "2rem", lineHeight: 1.1 }}>
                The Right Backbone, <br/>
                <span style={{ color: "var(--primary)" }}>For Better Products</span>
              </h2>
              <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                De-code the mantra to a great user experience with the right code. With the right backbone, you can have a better product, faster website, higher Google results, and excellent marketing strategies.
              </p>
              <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.8 }}>
                Our UX and design team work in sync with developers so that every single thought can be put down in reality. HTML, CSS, and JavaScript are part of all our thought processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 2: INNOVATION WITH INTEGRATION ══════════════ */}
      <section className="section" style={{ background: "var(--bg-secondary)", padding: "100px 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: "1100px" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
             <h2 className="section-title" style={{ fontSize: "3rem", fontWeight: 900, marginBottom: "1.5rem" }}>
               Innovation With Integration
             </h2>
             <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", maxWidth: "800px", margin: "0 auto", lineHeight: 1.8 }}>
               In an ever-evolving technology landscape, we ensure all channels are on the same page. We build everything from scratch, knowing exactly what is where.
             </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2.5rem" }}>
             {[
               { title: "Bespoke Builds", icon: <Layers size={24} />, text: "We build everything from scratch to ensure full ownership and deep integration across all modules." },
               { title: "Third-Party Sync", icon: <Database size={24} />, text: "All our products complement each other along with third-party databases and applications seamlessly." },
               { title: "Digital Stories", icon: <Globe size={24} />, text: "The final output is a beautifully woven digital story that mesmerises customers and leaves a life-long imprint." }
             ].map((item, i) => (
               <div key={i} className="reveal hover-lift" style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "24px", padding: "3rem", boxShadow: "0 20px 40px rgba(0,0,0,0.02)" }}>
                 <div style={{ width: "56px", height: "56px", borderRadius: "14px", background: "rgba(29, 78, 216, 0.05)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)", marginBottom: "1.5rem" }}>
                   {item.icon}
                 </div>
                 <h3 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: "1.25rem", color: "var(--text)" }}>{item.title}</h3>
                 <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>{item.text}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 3: UN-CODE HAPPINESS ══════════════ */}
      <section className="section" style={{ background: "var(--bg)", padding: "120px 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: "1200px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div className="reveal">
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", background: "rgba(239, 68, 68, 0.1)", color: "#EF4444", padding: "0.5rem 1rem", borderRadius: "50px", fontWeight: 700, marginBottom: "1.5rem" }}>
                <ShieldCheck size={16} /> UN-CODE HAPPINESS
              </div>
              <h2 style={{ fontSize: "2.8rem", fontWeight: 900, color: "var(--text)", marginBottom: "2rem", lineHeight: 1.1 }}>
                Built To Last, <br/>
                <span style={{ color: "var(--primary)" }}>Securely Built</span>
              </h2>
              <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "2rem" }}>
                Good implementation determines a great user experience. At FI Digital, we have rigorous standards and quality controls in place to ensure all implementations adhere to global web standards.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                 {[
                   { label: "WCAG 2.0 AA", icon: <CheckCircle size={18} /> },
                   { label: "Section 508", icon: <ShieldCheck size={18} /> },
                   { label: "Zero Broken Links", icon: <Zap size={18} /> },
                   { label: "Government Regs", icon: <Lock size={18} /> }
                 ].map((badge, i) => (
                   <div key={i} style={{ display: "flex", alignItems: "center", gap: "1rem", background: "var(--bg-secondary)", padding: "1.25rem", borderRadius: "16px", border: "1px solid var(--border)" }}>
                     <div style={{ color: "var(--primary)" }}>{badge.icon}</div>
                     <span style={{ fontWeight: 600, color: "var(--text)" }}>{badge.label}</span>
                   </div>
                 ))}
              </div>
            </div>
            <div className="reveal" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: "32px", padding: "4rem", boxShadow: "0 30px 60px rgba(0,0,0,0.03)" }}>
              <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.8, margin: 0 }}>
                With extensive experience in highly regulated sectors like government, we know how to develop in a way that’s not only secure; it’s built to last. Our implementation process is a guarantee against deal-breakers like errors or broken links.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA SECTION ══════════════ */}
      <section id="cta" style={{ padding: '120px 1.5rem', background: '#1d4ed8', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle at right center, rgba(255,255,255,0.8) 0%, transparent 50%)' }}></div>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          
          <h2 style={{ fontSize: '3rem', fontWeight: 900, color: 'white', marginBottom: '2rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
             Foster Commercial Success
          </h2>
          <p style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.8, margin: "0 auto 3rem auto", maxWidth: "800px" }}>
             Ready to estable an immediate connect with your users? Our developers are ready to turn every single thought into a woven digital reality.
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

// Helper icons
function CheckCircle({ size }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>;
}

function Lock({ size }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>;
}
