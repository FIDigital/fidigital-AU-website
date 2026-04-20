"use client";

import Link from 'next/link';
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Monitor, Cloud, Settings, Users, BarChart, Zap, CheckCircle, Globe, Layout, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  const { ScrollTrigger } = require('gsap/ScrollTrigger');
  gsap.registerPlugin(ScrollTrigger);
}

export default function WebAppClient() {
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
            src="/images/web-hero.png"
            alt="Web Application Development Visualization"
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
              <Monitor size={16} /> Advanced Web Applications
            </div>

            <h1 className="hero-title" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.1, fontWeight: 900, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: "2rem", textWrap: "balance", textTransform: "uppercase" }}>
              Are you thinking <br/>
              <span style={{ color: "var(--primary)", fontWeight: 300 }}>About Web App?</span>
            </h1>

            <div className="hero-subtitle" style={{ display: "grid", gap: "1.5rem", margin: "0 0 3rem 0", maxWidth: "800px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <p style={{ fontSize: "clamp(1.2rem, 2vw, 1.4rem)", color: "var(--text)", fontWeight: 700, margin: 0 }}>
                  Web app development has progressed a great deal in recent years with advances in both desktop and mobile device browser technology.
                </p>
                <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.8, margin: 0 }}>
                  Today, more than ever the distinctions between the native app and the web app are becoming even closer. The FI Digital team can help you to navigate between choosing one or the other. Web technologies have become more advanced with browsers being able to now access camera, images, GPS and other files and with frameworks maturing at an increasing rate.
                </p>
              </div>
            </div>

            <div className="hero-btn" style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary" style={{ height: "42px", padding: "0 1.5rem", fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", fontWeight: 600 }}>
                Build Your Web Solution <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 1: CLOUD POWERED SOLUTIONS ══════════════ */}
      <section className="section" style={{ background: "var(--bg)", padding: "100px 1.5rem" }}>
        <div className="container" style={{ maxWidth: "1000px", textAlign: "center" }}>
          <div className="reveal">
            <h2 className="section-title" style={{ fontSize: "2.2rem", fontWeight: 900, marginBottom: "2rem", color: "var(--text)" }}>
               Scalable Cloud-Based Solutions
            </h2>
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: "24px", padding: "4rem", boxShadow: "0 20px 40px rgba(0,0,0,0.02)", textAlign: "left", display: "grid", gap: "1.5rem" }}>
               <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.8, margin: 0 }}>
                 Web development solutions are similar to conventional websites but have a more complex application running on a cloud server. This allows the user to interact with the app via the browser. 
               </p>
               <div style={{ paddingLeft: "1.5rem", borderLeft: "4px solid var(--primary)" }}>
                 <p style={{ fontSize: "1.15rem", color: "var(--text)", fontWeight: 600, lineHeight: 1.8, margin: 0 }}>
                   These advancements allow building complex applications to be deployed on secure cloud infrastructure for increased ease of access to the largest possible user base. A custom web application development service can allow you to improve your internal processes and reduce running costs.
                 </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 2: WHY INVEST ══════════════ */}
      <section className="section" style={{ background: "var(--bg-secondary)", padding: "100px 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: "1100px" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "1rem" }}>
              Why Invest In A Business App?
            </h2>
            <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", maxWidth: "800px", margin: "0 auto" }}>
              Investing in custom web application development offers numerous financial benefits and operational efficiencies.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            
            <div className="reveal">
              <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "24px", padding: "2.5rem", boxShadow: "0 20px 40px rgba(0,0,0,0.02)", height: "100%" }}>
                <div style={{ width: "56px", height: "56px", borderRadius: "14px", background: "rgba(59, 130, 246, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#3B82F6", marginBottom: "1.5rem" }}>
                    <Zap size={28} />
                </div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: "1.25rem", letterSpacing: "-0.01em" }}>
                  Operational Efficiency
                </h3>
                <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                  Automated web solutions are faster, easier and more cost-effective compared to requiring employees to perform repetitive, time-consuming tasks.
                </p>
              </div>
            </div>

            <div className="reveal">
              <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "24px", padding: "2.5rem", boxShadow: "0 20px 40px rgba(0,0,0,0.02)", height: "100%" }}>
                <div style={{ width: "56px", height: "56px", borderRadius: "14px", background: "rgba(16, 185, 129, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#10B981", marginBottom: "1.5rem" }}>
                    <Layout size={28} />
                </div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: "1.25rem", letterSpacing: "-0.01em" }}>
                  Centralized CMS
                </h3>
                <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                  A centralized location for all your company and client information, acting as a content management system with a user-friendly interface.
                </p>
              </div>
            </div>

            <div className="reveal">
              <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "24px", padding: "2.5rem", boxShadow: "0 20px 40px rgba(0,0,0,0.02)", height: "100%" }}>
                <div style={{ width: "56px", height: "56px", borderRadius: "14px", background: "rgba(249, 115, 22, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#F97316", marginBottom: "1.5rem" }}>
                    <Users size={28} />
                </div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: "1.25rem", letterSpacing: "-0.01em" }}>
                  Client Interactions
                </h3>
                <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                  Improve company-client interactions and communications, turning your website into more than simply an online brochure.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ SECTION 3: THE FI DIGITAL DIFFERENCE ══════════════ */}
      <section className="section" style={{ background: "var(--bg)", padding: "100px 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: "1250px" }}>
          
          <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "1.5rem" }}>
              The FI Digital Advantage
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem" }}>
            
            <div className="reveal hover-lift" style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "24px", padding: "3.5rem", position: "relative", overflow: "hidden", display: "grid", gap: "1rem", boxShadow: "0 20px 40px rgba(0,0,0,0.02)" }}>
               <div style={{ position: "relative", zIndex: 1 }}>
                 <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", background: "var(--primary)", color: "#fff", padding: "0.5rem 1.25rem", borderRadius: "50px", fontWeight: 700, marginBottom: "2rem" }}>
                   <Settings size={18} /> CUSTOM TAILORED
                 </div>
                 <h3 style={{ fontSize: "2rem", fontWeight: 900, color: "var(--text)", marginBottom: "1.5rem" }}>Bespoke Development</h3>
                 <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.8, margin: 0 }}>
                   FI Digital is a world-class development company. We appreciate that every business is unique and a cookie-cutter application will not fulfill the requirements of all businesses. We provide custom web apps tailored to your specific needs.
                 </p>
               </div>
            </div>

            <div className="reveal hover-lift" style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "24px", padding: "3.5rem", position: "relative", overflow: "hidden", display: "grid", gap: "1rem", boxShadow: "0 20px 40px rgba(0,0,0,0.02)" }}>
               <div style={{ position: "relative", zIndex: 1 }}>
                 <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", background: "#10B981", color: "#fff", padding: "0.5rem 1.25rem", borderRadius: "50px", fontWeight: 700, marginBottom: "2rem" }}>
                   <ShieldCheck size={18} /> QUALITY FOCUSED
                 </div>
                 <h3 style={{ fontSize: "2rem", fontWeight: 900, color: "var(--text)", marginBottom: "1.5rem" }}>Proven Excellence</h3>
                 <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.8, margin: 0 }}>
                   With our expertise and web app development services, you can automate payments, manage accounts, email newsletters, deliver notifications, and far more. There are simply endless possibilities for your business.
                 </p>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ SECTION 4: VISUAL BREAK ══════════════ */}
      <section className="section" style={{ background: "var(--bg)", padding: "80px 1.5rem" }}>
        <div className="container" style={{ maxWidth: "1100px" }}>
          <div className="reveal" style={{ position: "relative", borderRadius: "32px", overflow: "hidden", height: "500px", boxShadow: "0 40px 80px rgba(0,0,0,0.1)" }}>
            <Image 
              src="/images/web-portal-visual.png"
              alt="Custom Web Application Dashboard"
              fill
              style={{ objectFit: "cover" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)", display: "flex", alignItems: "flex-end", padding: "4rem" }}>
              <div>
                <h3 style={{ color: "white", fontSize: "2.5rem", fontWeight: 900, marginBottom: "1rem" }}>Intuitive Enterprise Interfaces</h3>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.2rem", maxWidth: "600px" }}>We design and develop data-driven, complex custom applications with a commitment to quality and innovation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 5: SERVICE RANGE ══════════════ */}
      <section className="section" style={{ background: "var(--bg-secondary)", padding: "100px 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: "1000px" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900 }}>
              Our Service Capabilities
            </h2>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
            {[
              "Full E-commerce Storefronts",
              "Content Management Systems",
              "Intuitive User Interfaces",
              "Streamlined Internal Processes",
              "Members Only Access",
              "Online Interactive Calendars"
            ].map((service, index) => (
              <div key={index} className="reveal" style={{ display: "flex", alignItems: "center", gap: "1rem", background: "var(--bg)", padding: "1.5rem", borderRadius: "16px", border: "1px solid var(--border)" }}>
                <CheckCircle size={20} style={{ color: "var(--primary)", flexShrink: 0 }} />
                <span style={{ fontWeight: 600, color: "var(--text)" }}>{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA SECTION ══════════════ */}
      <section id="cta" style={{ padding: '120px 1.5rem', background: '#1d4ed8', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle at right center, rgba(255,255,255,0.8) 0%, transparent 50%)' }}></div>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'white', marginBottom: '2rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
             Take Your Business to the Next Level
          </h2>
          <p style={{ fontSize: "1.15rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.8, margin: "0 auto 3rem auto", maxWidth: "800px" }}>
             If you need web app development that stands out from the crowd, have a chat with us at FI Digital. We understand that your requirements are unique and we collaborate with our clients to ensure a solution perfectly tailored to your needs.
          </p>

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
              Speak to us today <ArrowRight size={20} />
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
