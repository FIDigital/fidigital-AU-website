"use client";

import Link from 'next/link';
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ArrowRight, CheckCircle, CheckCircle2, Layers, Wallet, Lightbulb, LayoutDashboard, Smartphone, LineChart, Target, MessageSquare, Award, Briefcase, GitMerge } from 'lucide-react';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  const { ScrollTrigger } = require('gsap/ScrollTrigger');
  gsap.registerPlugin(ScrollTrigger);
}

export default function ZohoPartnersClient() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Hero Animation
    gsap.from(".hero-badge", { y: 20, autoAlpha: 0, duration: 0.6, ease: "power3.out" });
    gsap.from(".hero-title", { y: 30, autoAlpha: 0, duration: 0.8, delay: 0.1, ease: "power3.out" });
    gsap.from(".hero-subtitle", { y: 30, autoAlpha: 0, duration: 0.8, delay: 0.2, ease: "power3.out" });
    gsap.from(".hero-btn", { y: 20, autoAlpha: 0, duration: 0.6, delay: 0.35, ease: "power3.out" });

    // Scroll Animations
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
        minHeight: "75vh",
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
            alt="Zoho Partners Australia Enterprise Infrastructure"
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
              <CheckCircle size={16} /> Premium Zoho Partner
            </div>

            <h1 className="hero-title" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.1, fontWeight: 900, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: "2rem", textWrap: "balance" }}>
              Elite Zoho Partners <br/>
              <span style={{ color: "var(--primary)", fontWeight: 300 }}>Australia</span>
            </h1>

            <p className="hero-subtitle" style={{ fontSize: "clamp(1.1rem, 2vw, 1.3rem)", color: "var(--text-muted)", lineHeight: 1.7, margin: "0 0 3rem 0", maxWidth: "800px", textWrap: "balance" }}>
              We are FI Digital, Zoho Partners Australia since 2018. Helping customers with their Sales, Service, HRMS and Bespoke application requirements with the powerful Zoho Platform. <strong style={{color: "var(--text)"}}>We specialise in consulting, implementation and providing managed services to Businesses in Australia and New Zealand.</strong>
            </p>

            <div className="hero-btn" style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary" style={{ height: "42px", padding: "0 1.5rem", fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", fontWeight: 600 }}>
                Talk to an Expert <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 1: WE KNOW HOW TO GET BEST ══════════════ */}
      <section className="section" style={{ background: "var(--bg-secondary)", padding: "100px 1.5rem" }}>
        <div className="container" style={{ maxWidth: "1250px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
            
            <div className="reveal">
              <div className="section-label" style={{ marginBottom: "1rem" }}>Platform Success</div>
              <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "1.5rem", lineHeight: 1.2 }}>
                We know how to get the best <br/>from the Zoho Platform.
              </h2>
              <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                We have demonstrated a history of building best-in-class solutions on top of the Zoho Platform. Our team is innovative and deeply consultative.
              </p>
              <div style={{ padding: "1.5rem", background: "rgba(29, 78, 216, 0.05)", borderLeft: "4px solid var(--primary)", borderRadius: "0 16px 16px 0" }}>
                 <p style={{ color: "var(--text)", fontWeight: 700, fontSize: "1.1rem", margin: 0 }}>
                   We have received multiple recognitions from Zoho in the past, including <span style={{ color: "var(--primary)" }}>Innovator of the Year</span>, awarded for the enterprise application we built on top of the Zoho CRM and Creator platform.
                 </p>
              </div>
            </div>

            <div className="reveal" style={{ display: "grid", gap: "1.5rem" }}>
               <div style={{ background: "var(--card-bg)", padding: "2.5rem", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }}>
                  <div style={{ width: "60px", height: "60px", background: "rgba(245, 158, 11, 0.1)", color: "#F59E0B", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                    <Award size={32} />
                  </div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text)", marginBottom: "1rem" }}>Automotive Industry Solution</h3>
                  <p style={{ color: "var(--text-muted)", lineHeight: 1.7, margin: 0, fontSize: "1.05rem" }}>
                    Our application solved a critical parts ordering problem for one of New Zealand’s leading automobile manufacturers. We built an interface through which car dealerships could efficiently place orders for car parts and reliably track their core inventory.
                  </p>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ SECTION 2: WHY ZOHO SOFTWARE ══════════════ */}
      <section className="section" style={{ background: "var(--bg)", padding: "100px 1.5rem" }}>
        <div className="container" style={{ maxWidth: "1250px" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="section-label" style={{ marginBottom: "1rem" }}>The Ecosystem</div>
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "1.5rem" }}>Why Zoho Software?</h2>
            <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.7, maxWidth: "800px", margin: "0 auto" }}>
              Zoho gives your business a perfect ecosystem to manage your Sales, Service, Marketing, Business Intelligence Dashboards, HRMS, Finance, Project Management and Custom Software. <br/><br/>
              The ecosystem provides immense benefits, primarily the ease of transferring data and unlocking unified insights. You also gain significant cost savings by partnering with the same software vendor across departments.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
            {[
              { title: "Unified Platform", desc: "A singular interconnected platform representing all of your varied business functions.", icon: Layers, color: "#3B82F6" },
              { title: "Cost Efficiency", desc: "Drastically reduce overhead by consolidating your tech stack into a single subscription.", icon: Wallet, color: "#10B981" },
              { title: "Constant Innovation", desc: "A genuinely innovation-driven framework heavily optimized with continuous enhancements.", icon: Lightbulb, color: "#F59E0B" },
              { title: "Unified Dashboards", desc: "Establish a hardened single source of truth mapped cleanly into unified dashboards.", icon: LayoutDashboard, color: "#EF4444" },
              { title: "Mobile Accessibility", desc: "Enables external teams to remotely access core data and information through mobile structures.", icon: Smartphone, color: "#8B5CF6" },
              { title: "Strong Analytics", desc: "Robust analytics architectures and automated reporting mapping for effective decision making.", icon: LineChart, color: "#06B6D4" }
            ].map((item, i) => (
              <div key={i} className="reveal hover-lift" style={{ background: "var(--card-bg)", padding: "2.5rem 2rem", borderRadius: "20px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ width: "56px", height: "56px", borderRadius: "14px", background: `${item.color}15`, display: "flex", alignItems: "center", justifyContent: "center", color: item.color }}>
                  <item.icon size={28} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.75rem" }}>{item.title}</h3>
                  <p style={{ color: "var(--text-muted)", lineHeight: 1.6, margin: 0, fontSize: "1.05rem" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 3: WHY FI DIGITAL ══════════════ */}
      <section className="section" style={{ background: "var(--bg-secondary)", padding: "100px 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: "1200px" }}>
          
          <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="section-label" style={{ marginBottom: "1rem" }}>Our Expertise</div>
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "1.5rem" }}>Why FI Digital?</h2>
            <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.7, maxWidth: "800px", margin: "0 auto" }}>
              Zoho is a powerful platform which can really transform your business and drive real value. But this can only happen if you put it to proper use. At FI Digital, we are Zoho Partners Australia, and deeply understand the needs of local businesses in the ANZ region.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
            {[
              "Largest core delivery team specifically operating within the ANZ region.",
              "Deeper, structural understanding of Australian Businesses and their technical requirements.",
              "A highly consultative approach designed to strictly navigate through the entire Zoho ecosystem.",
              "Australia's leading Certified Zoho Developers and Consultants.",
              "Specialized expertise in Sales, Service, Marketing, HRMS, Custom Applications, Business Intelligence, and automated Process Architectures.",
              "Extensive expertise and demonstrated history of efficiently integrating Zoho directly with 3rd Party Applications and Systems."
            ].map((text, idx) => (
              <div key={idx} className="reveal hover-lift" style={{ background: "var(--card-bg)", padding: "2rem", borderRadius: "20px", border: "1px solid var(--border)", display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                 <CheckCircle2 size={28} color="var(--primary)" style={{ flexShrink: 0, marginTop: "0.25rem" }} />
                 <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>
                   {text}
                 </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA SECTION ══════════════ */}
      <section id="cta" style={{ padding: '120px 1.5rem', background: '#1d4ed8', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle at right center, rgba(255,255,255,0.8) 0%, transparent 50%)' }}></div>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <h2 style={{ fontSize: '3.5rem', fontWeight: 900, color: 'white', marginBottom: '1.5rem', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            Get Zoho CRM Consultancy Now
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.95)', fontSize: '1.25rem', lineHeight: 1.7, marginBottom: '3.5rem', fontWeight: 400 }}>
            We have offered expert Zoho consulting services to businesses across varied industries and verticals. Our Zoho CRM solutions have helped businesses in Australia improve their productivity and efficiencies while profoundly accelerating business growth. Let’s discuss your exact requirements today.
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
