"use client";

import Link from 'next/link';
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Puzzle, Cable, Network, BellRing, GitBranch, Layers, ShieldCheck, Database } from 'lucide-react';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  const { ScrollTrigger } = require('gsap/ScrollTrigger');
  gsap.registerPlugin(ScrollTrigger);
}

export default function IntegrationClient() {
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
            src="/images/partner-hero.png"
            alt="Zoho Application Integration Matrix"
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
              <Cable size={16} /> API & App Integration Services
            </div>

            <h1 className="hero-title" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.1, fontWeight: 900, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: "2rem", textWrap: "balance" }}>
              Need Zoho Integration With <br/>
              <span style={{ color: "var(--primary)", fontWeight: 300 }}>Other Important Applications?</span>
            </h1>

            <div className="hero-subtitle" style={{ display: "grid", gap: "1.5rem", margin: "0 0 3rem 0", maxWidth: "800px" }}>
              <p style={{ fontSize: "clamp(1.1rem, 2vw, 1.25rem)", color: "var(--text-muted)", lineHeight: 1.7, margin: 0, textWrap: "balance" }}>
                At FI Digital, we offer quick and reliable 3rd Party Integration services. Our certified Zoho consultants elegantly make it simpler for growing businesses to precisely integrate all distinct apps deeply into their centralized CRM system.
              </p>
              
              <p style={{ fontSize: "clamp(1.1rem, 2vw, 1.25rem)", color: "var(--text-muted)", lineHeight: 1.7, margin: 0, paddingLeft: "1.5rem", borderLeft: "4px solid var(--primary)" }}>
                Our services seamlessly allow organizations to reliably sync and instantly access data from a unified centralized system—which ultimately results in vastly improved executive decision-making, aggressively increased productivity and profoundly enhanced performance.
              </p>
            </div>

            <div className="hero-btn" style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary" style={{ height: "42px", padding: "0 1.5rem", fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", fontWeight: 600 }}>
                Connect Your Apps <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 1: THE INTEGRATION NEED ══════════════ */}
      <section className="section" style={{ background: "var(--bg-secondary)", padding: "100px 1.5rem" }}>
        <div className="container" style={{ maxWidth: "1000px", textAlign: "center" }}>
          <div className="reveal">
            <div className="section-label" style={{ marginBottom: "1rem" }}>System Unification</div>
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "2.5rem", lineHeight: 1.2 }}>
              The Need For 3rd Party Zoho Integration
            </h2>
          </div>

          <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: "1.25rem", textAlign: "left", background: "var(--bg)", border: "1px solid var(--border)", padding: "3rem", borderRadius: "24px", boxShadow: "0 20px 40px rgba(0,0,0,0.02)" }}>
            <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
              You may have existing applications which is loved by your team, or just a requirement in your industry, this should not stop you from going with Zoho. Zoho powerfully allows us to execute robust 3rd Party Integrations with all major cloud based applications like G-suite / Gmail, Microsoft Office 365, XERO, Quickbooks, MYOB, Shopify, WordPress / WooCommerce websites, and strictly many more.
            </p>
            <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
              Zoho’s powerful analytics securely eliminates any scope for errors while rapidly maximizing your core efforts traversing towards strategizing and designing highly effective sales & management processes for distinctly improved efficiency and higher revenues. 
            </p>
            <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
              When you confidently choose 3rd Party Zoho Integration services, you efficiently get all your relevant and crucial data directly in the exact format preferred by you (i.e. either complex JSON or XML arrays). 
            </p>
            <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
              Zoho 3rd party Integration seamlessly enables you to securely develop fresh apps and explicitly integrate them back into your core CRM system. When done objectively right, it natively helps businesses definitively customize their CRM module exactly as per their specific requirements, heavily based directly on crucial client feedback or analytical inputs.
            </p>
             <div style={{ padding: "1.5rem", background: "rgba(29, 78, 216, 0.05)", borderLeft: "4px solid var(--primary)", borderRadius: "0 16px 16px 0", marginTop: "1rem" }}>
               <p style={{ color: "var(--text)", fontWeight: 700, margin: 0, fontSize: "1.1rem" }}>
                  Put simply, it rapidly allows structural organizations to precisely incorporate the highly necessary adaptive changes directly within their operating CRM system for rapidly executing multi-tier projects in a remarkably successful manner.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 2: THE FI DIGITAL DIFFERENCE (WHY US) ══════════════ */}
      <section className="section" style={{ background: "var(--bg)", padding: "100px 1.5rem" }}>
        <div className="container" style={{ maxWidth: "1000px" }}>
          
          <div className="reveal" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "3rem", background: "var(--card-bg)", padding: "3rem", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
             <div style={{ flexShrink: 0 }}>
                <div style={{ width: "80px", height: "80px", background: "rgba(59, 130, 246, 0.1)", color: "#3B82F6", borderRadius: "24px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                   <ShieldCheck size={42} />
                </div>
             </div>
             <div style={{ flex: "1 1 500px" }}>
                <h2 style={{ fontSize: "2.2rem", fontWeight: 900, color: "var(--text)", marginBottom: "1.25rem", lineHeight: 1.1 }}>
                  Why Us?
                </h2>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1.25rem", fontSize: "1.1rem" }}>
                  Partnering directly with a 3rd Party Zoho Integration specialist strategically allows highly-driven businesses to structurally focus on their core competencies, while our certified technical consultants cleanly handle entirely all their complex application integration architectures. We simply make it flawlessly convenient for you to efficiently implement as well as rapidly use external apps that simplify and actively accelerate your baseline business processes.
                </p>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.7, margin: 0, fontSize: "1.1rem" }}>
                  Explicitly backed by dynamic years of enterprise-level experience and operational knowledge in the 3rd Party Zoho Integration domain, our team securely knows exactly what it explicitly takes to reliably integrate your unique apps for flawless, smooth, and immensely effective business functioning. Our dedicated integration experts help you intelligently merge disparate array data securely into the core CRM and sync it effortlessly out of the Zoho module specifically to other critical endpoints.
                </p>
             </div>
          </div>

        </div>
      </section>

      {/* ══ SECTION 3: IMPLEMENTATION BENEFITS ══════════════ */}
      <section className="section" style={{ background: "var(--bg-secondary)", padding: "100px 1.5rem" }}>
        <div className="container" style={{ maxWidth: "1250px" }}>
          
          <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "1.5rem" }}>
              The Benefits of 3rd Party Zoho Integration
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {[
              { title: "Universal App Ecosystem", desc: "Build an ecosystem of 3rd party apps that directly benefit your exact business logic and safely enable you to explicitly provide immense value directly to your critical customers.", icon: Database, color: "#10B981" },
              { title: "Real-Time Tracking", desc: "Explicitly integrate core apps in a specific manner that dynamically helps you easily track your multi-tier business campaigns directly through highly reliable real-time notifications and precise system updates.", icon: BellRing, color: "#F59E0B" },
              { title: "Custom Logic Workflows", desc: "Significantly customize internal operational workflows seamlessly through the robust integration routing of multiple dynamic business applications operating as one.", icon: GitBranch, color: "#3B82F6" },
              { title: "Unlimited Integrations", desc: "We deploy multiple distinct integration algorithmic architectures including the specific integration of the absolute best industry applications for collaboration, marketing, SMS messaging, telephony, and customer support matrices.", icon: Layers, color: "#8B5CF6" }
            ].map((item, i) => (
              <div key={i} className="reveal hover-lift" style={{ background: "var(--card-bg)", padding: "2.5rem 2rem", borderRadius: "20px", border: "1px solid var(--border)", boxShadow: "0 10px 30px rgba(0,0,0,0.03)", display: "flex", flexDirection: "column", gap: "1.15rem" }}>
                <div style={{ width: "56px", height: "56px", borderRadius: "14px", background: `${item.color}15`, display: "flex", alignItems: "center", justifyContent: "center", color: item.color }}>
                  <item.icon size={28} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.75rem" }}>{item.title}</h3>
                  <p style={{ color: "var(--text-muted)", lineHeight: 1.6, margin: 0, fontSize: "1.05rem" }}>{item.desc}</p>
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
          
          <h2 style={{ fontSize: '3rem', fontWeight: 900, color: 'white', marginBottom: '2.5rem', letterSpacing: '-0.02em', lineHeight: 1.2, margin: "0 auto 3rem auto" }}>
             Ready to Synchronize Your Ecosystem?
          </h2>
          
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.25rem', lineHeight: 1.7, marginBottom: '2.5rem', fontWeight: 500 }}>
             Connect with our API experts to integrate your marketing, accounting, and sales apps into one unified platform.
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
