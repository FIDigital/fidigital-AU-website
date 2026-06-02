"use client";

import Link from 'next/link';
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Monitor, Smartphone, Zap, Eye, Globe, Award, Palette, Layers, MousePointer2 } from 'lucide-react';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  const { ScrollTrigger } = require('gsap/ScrollTrigger');
  gsap.registerPlugin(ScrollTrigger);
}

export default function DesignClient() {
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

  const designServices = [
    {
      title: "USER INTERFACE DESIGN",
      description: "We help you maximize user experience by designing for software and machine which include home devices, mobiles, etc. The user interaction is simple and efficient and helps everyone achieve their goals.",
      icon: <Palette size={24} />,
      color: "#3B82F6"
    },
    {
      title: "RESPONSIVE DESIGN",
      description: "Responsive Web Design (RWD) ensures that you cater to your customer across all devices. From a mobile phone, tablet to a desktop computer, we will ensure that your product looks the same and fits perfectly across screens.",
      icon: <Monitor size={24} />,
      color: "#10B981"
    },
    {
      title: "INTERACTION DESIGN",
      description: "Interaction is the key to keeping your customers engaged. We analyze user patterns to create products that help them achieve their goals and you to meet your targets. Evolving, relevant, and user-friendly.",
      icon: <MousePointer2 size={24} />,
      color: "#F59E0B"
    },
    {
      title: "HIGH-FIDELITY PROTOTYPING",
      description: "Get a first-hand preview of the final product. Our prototypes let you see all details and functionality, allowing you to test environment, user-friendliness, and other critical aspects before development.",
      icon: <Layers size={24} />,
      color: "#EF4444"
    },
    {
      title: "INTELLIGENT WEB DESIGN",
      description: "We help you develop and maintain websites through all life cycles. From brand management to SEO, CMS, and other digital solutions, we have got your back every step of the way.",
      icon: <Globe size={24} />,
      color: "#8B5CF6"
    },
    {
      title: "DIGITAL BRAND MANAGEMENT",
      description: "We ensure your name is synonymous with excellence. Uphold and improve your brand with our seasoned professionals. Right reputation management leads to improved returns and a sought-out client base.",
      icon: <Award size={24} />,
      color: "#EC4899"
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
          width: "60%",
          height: "100%",
          zIndex: 0,
          opacity: 0.45,
          pointerEvents: "none",
        }}>
          <Image
            src="/images/web-hero.png"
            alt="Design and Innovation Visualization"
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
              <Palette size={16} /> One Stop For Perfection
            </div>

            <h1 className="hero-title" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.1, fontWeight: 900, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: "2rem", textWrap: "balance", textTransform: "uppercase" }}>
              Passionate About <br/>
              <span style={{ color: "var(--primary)", fontWeight: 300 }}>Design & Innovation</span>
            </h1>

            <div className="hero-subtitle" style={{ display: "grid", gap: "1.5rem", margin: "0 0 3rem 0", maxWidth: "800px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <p style={{ fontSize: "clamp(1.2rem, 2vw, 1.4rem)", color: "var(--text)", fontWeight: 700, margin: 0 }}>
                  We help you and your clients realize your potential value in a digital age, which is fickle and agile.
                </p>
                <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.8, margin: 0 }}>
                  Our approach is solution-focused and always out of the box. Our strategic planning and seasoned designers will help you achieve the desired optimum look. Design at FI Digital is not just appealing to look at but takes into account the scientific measures and analysis which drives us. We aim to communicate with your users using creativity, dealing with complexity in the simplest manner.
                </p>
              </div>
            </div>

            <div className="hero-btn" style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary" style={{ height: "42px", padding: "0 1.5rem", fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", fontWeight: 600 }}>
                Start Your Design Project <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 1: DESIGN SOLUTIONS GRID ══════════════ */}
      <section className="section" style={{ background: "var(--bg-secondary)", padding: "120px 1.5rem" }}>
        <div className="container" style={{ maxWidth: "1200px" }}>
          
          <div className="reveal" style={{ textAlign: "center", marginBottom: "5rem" }}>
            <h2 className="section-title" style={{ fontSize: "3rem", fontWeight: 900, marginBottom: "1rem" }}>
              Creative Design Solutions
            </h2>
            <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", maxWidth: "700px", margin: "0 auto" }}>
              Bridging the gap between aesthetics and functionality with precision-engineered design services.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2.5rem" }}>
            {designServices.map((service, idx) => (
              <div key={idx} className="reveal hover-lift" style={{ 
                background: "var(--bg)", 
                border: "1px solid var(--border)", 
                borderRadius: "24px", 
                padding: "3rem", 
                boxShadow: "0 20px 40px rgba(0,0,0,0.02)",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
              }}>
                <div style={{ 
                  width: "64px", 
                  height: "64px", 
                  borderRadius: "16px", 
                  background: `${service.color}10`, 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  color: service.color, 
                  marginBottom: "2rem" 
                }}>
                  {service.icon}
                </div>
                <h3 style={{ fontSize: "1.6rem", fontWeight: 900, marginBottom: "1.25rem", color: "var(--text)", letterSpacing: "-0.01em" }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 2: THE SCIENTIFIC APPROACH ══════════════ */}
      <section className="section" style={{ background: "var(--bg)", padding: "100px 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: "1000px", textAlign: "center" }}>
          <div className="reveal">
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "2rem" }}>
              Scientific Analysis & Creativity
            </h2>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: "32px", padding: "4rem", textAlign: "left", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "relative", zIndex: 1 }}>
                <p style={{ fontSize: "1.2rem", color: "var(--text)", fontWeight: 600, lineHeight: 1.8, marginBottom: "1.5rem" }}>
                  "We aim to communicate with your users using creativity. We love challenges and deal with complexity in the simplest manner."
                </p>
                <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.8, margin: 0 }}>
                  At FI Digital, design is more than just aesthetics. We incorporate scientific measures and analytical data to ensure every pixel serves a purpose. Our goal is to help you shine amongst the millions of products available and carve a unique niche for your brand.
                </p>
              </div>
              <div style={{ position: "absolute", top: "-20px", right: "-20px", opacity: 0.05 }}>
                <Zap size={200} color="var(--primary)" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA SECTION ══════════════ */}
      <section id="cta" style={{ padding: '120px 1.5rem', background: '#1d4ed8', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle at right center, rgba(255,255,255,0.8) 0%, transparent 50%)' }}></div>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          
          <h2 style={{ fontSize: '3rem', fontWeight: 900, color: 'white', marginBottom: '2rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
             Carve Your Niche Today
          </h2>
          <p style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.8, margin: "0 auto 3rem auto", maxWidth: "800px" }}>
             Ready for out-of-the-box solutions? Our strategic planning and seasoned designers are ready to help you achieve the optimum look for your digital presence.
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
