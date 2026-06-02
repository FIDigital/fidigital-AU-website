"use client";

import Link from 'next/link';
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Clock, ShieldCheck, Zap, Users, Headphones, CheckCircle, BarChart, Settings, Lock } from 'lucide-react';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  const { ScrollTrigger } = require('gsap/ScrollTrigger');
  gsap.registerPlugin(ScrollTrigger);
}

export default function SupportClient() {
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

  const features = [
    "Exclusive features such as Matrix’s Edit+ interface",
    "Design, strategy and UX services",
    "Training packages",
    "24/7 monitoring and support",
    "Performance and uptime guarantees",
    "Software and implementation warranties",
    "Maintenance and security patching",
    "Automatic upgrades",
    "Tickets to the annual FI Digital Summit",
    "Extensive online resources and tools"
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
          width: "60%",
          height: "100%",
          zIndex: 0,
          opacity: 0.45,
          pointerEvents: "none",
        }}>
          <Image
            src="/images/it-software.png"
            alt="Support and Infrastructure Visualization"
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
              <Headphones size={16} /> 24/7 Global Support
            </div>

            <h1 className="hero-title" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.1, fontWeight: 900, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: "2rem", textWrap: "balance", textTransform: "uppercase" }}>
              Never Let Down <br/>
              <span style={{ color: "var(--primary)", fontWeight: 300 }}>Your Business</span>
            </h1>

            <div className="hero-subtitle" style={{ display: "grid", gap: "1.5rem", margin: "0 0 3rem 0", maxWidth: "800px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <p style={{ fontSize: "clamp(1.2rem, 2vw, 1.4rem)", color: "var(--text)", fontWeight: 700, margin: 0 }}>
                  Our 24/7 team gives you global support across boundaries. Prompt aid is what we promise you.
                </p>
                <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.8, margin: 0 }}>
                  Get assistance with a click or a tap and someone will be there to help you out. We ensure quality solutions to all your problems, real-time. With our seasoned professionals, your digital assets are in the safest hands possible.
                </p>
              </div>
            </div>

            <div className="hero-btn" style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary" style={{ height: "42px", padding: "0 1.5rem", fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", fontWeight: 600 }}>
                Get Immediate Help <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 1: MORE RESOURCES, LESS COST ══════════════ */}
      <section className="section" style={{ background: "var(--bg)", padding: "100px 1.5rem" }}>
        <div className="container" style={{ maxWidth: "1200px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div className="reveal">
              <h2 style={{ fontSize: "2.8rem", fontWeight: 900, color: "var(--text)", marginBottom: "2rem", lineHeight: 1.1 }}>
                More Resources, <br/>
                <span style={{ color: "var(--primary)" }}>Less Cost</span>
              </h2>
              <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                Don’t spend money on getting more resources; call us and we will sort you out. Our multi-performing staff are system administrators with a depth of knowledge to address client incidents at any time.
              </p>
              <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: "24px", padding: "2.5rem", borderLeft: "6px solid var(--primary)" }}>
                <p style={{ fontSize: "1.1rem", color: "var(--text)", fontWeight: 600, lineHeight: 1.7, margin: 0 }}>
                  "They are the guys you want around when all other lights go out. We work closely with all areas of the business to ensure a seamless experience for our clients."
                </p>
              </div>
            </div>
            <div className="reveal" style={{ position: "relative", borderRadius: "32px", overflow: "hidden", height: "500px", boxShadow: "0 30px 60px rgba(0,0,0,0.05)" }}>
              <Image 
                src="/images/digital-transformation.png"
                alt="Support Engineering Team"
                fill sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 2: FI DIGITAL PLUS AGREEMENTS ══════════════ */}
      <section className="section" style={{ background: "var(--bg-secondary)", padding: "100px 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: "1100px" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
             <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(16, 185, 129, 0.1)", color: "#10B981", padding: "0.5rem 1rem", borderRadius: "50px", fontWeight: 700, marginBottom: "1.5rem" }}>
               <ShieldCheck size={16} /> Size Does Matter
             </div>
             <h2 className="section-title" style={{ fontSize: "3rem", fontWeight: 900, marginBottom: "1.5rem" }}>
               FI Digital Plus Agreements
             </h2>
             <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", maxWidth: "800px", margin: "0 auto", lineHeight: 1.8 }}>
               All organisations are different, so our agreements give you more than just guaranteed uptime. We work with you to understand your goals and develop a tailored package that covers all the services you’ll need.
             </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
             {[
               { title: "99.9% Uptime", icon: <Zap size={24} />, text: "We guarantee 99.9% uptime, ensuring your business stays online around the clock." },
               { title: "Beyond IT", icon: <BarChart size={24} />, text: "Agreements geared to meet your business objectives – not just technical IT requirements." },
               { title: "Tailored Packages", icon: <Settings size={24} />, text: "Includes graphic design, strategy, training and support customized for your needs." },
               { title: "Enhanced Security", icon: <Lock size={24} />, text: "More security, more maintenance, and more support than any standard SLA." }
             ].map((item, i) => (
               <div key={i} className="reveal hover-lift" style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "24px", padding: "2.5rem", boxShadow: "0 20px 40px rgba(0,0,0,0.02)" }}>
                 <div style={{ width: "52px", height: "52px", borderRadius: "12px", background: "rgba(29, 78, 216, 0.05)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)", marginBottom: "1.5rem" }}>
                   {item.icon}
                 </div>
                 <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: "1rem", color: "var(--text)" }}>{item.title}</h3>
                 <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>{item.text}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 3: AGREEMENT FEATURES ══════════════ */}
      <section className="section" style={{ background: "var(--bg)", padding: "120px 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: "1000px" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900 }}>
              What You Get With FI Digital Plus
            </h2>
          </div>
          
          <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: "32px", padding: "4rem", boxShadow: "0 30px 60px rgba(0,0,0,0.03)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
              {features.map((feature, index) => (
                <div key={index} className="reveal" style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "0.5rem 0" }}>
                  <CheckCircle size={20} style={{ color: "var(--primary)", flexShrink: 0 }} />
                  <span style={{ fontWeight: 600, color: "var(--text)", fontSize: "1.05rem" }}>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA SECTION ══════════════ */}
      <section id="cta" style={{ padding: '120px 1.5rem', background: '#1d4ed8', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle at right center, rgba(255,255,255,0.8) 0%, transparent 50%)' }}></div>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          
          <h2 style={{ fontSize: '3rem', fontWeight: 900, color: 'white', marginBottom: '2rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
             Always On, Always Reliable
          </h2>
          <p style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.8, margin: "0 auto 3rem auto", maxWidth: "800px" }}>
             Prompt aid is just a click away. Speak to us today to secure a seamless experience and keep your online resources up and running day or night.
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
