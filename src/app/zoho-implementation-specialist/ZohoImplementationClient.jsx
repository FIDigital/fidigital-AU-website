"use client";

import Link from 'next/link';
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ArrowRight, CheckCircle, Rocket, Zap, Target, Cloud, TrendingUp, Megaphone, Workflow, Wallet, MessageSquare, Users, Briefcase, Search, PieChart, Settings, PenTool, GraduationCap } from 'lucide-react';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  const { ScrollTrigger } = require('gsap/ScrollTrigger');
  gsap.registerPlugin(ScrollTrigger);
}

export default function ZohoImplementationClient() {
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
            src="/images/business-systems-hero.png"
            alt="Implementation Blueprint"
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
              <CheckCircle size={16} /> Implementation Specialist
            </div>

            <h1 className="hero-title" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.1, fontWeight: 900, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: "2rem", textWrap: "balance" }}>
              Need Tailored Solutions To Drive <br/>
              <span style={{ color: "var(--primary)", fontWeight: 300 }}>Leads And Business Growth?</span>
            </h1>

            <p className="hero-subtitle" style={{ fontSize: "clamp(1.1rem, 2vw, 1.3rem)", color: "var(--text-muted)", lineHeight: 1.7, margin: "0 0 3rem 0", maxWidth: "800px", textWrap: "balance" }}>
              Empower your organization and offer unmatched customer satisfaction with our dedicated <strong style={{color: "var(--text)"}}>Zoho Implementation service!</strong>
            </p>

            <div className="hero-btn" style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary" style={{ height: "42px", padding: "0 1.5rem", fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", fontWeight: 600 }}>
                Start Your Implementation <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 1: RAPID IMPLEMENTATION ══════════════ */}
      <section className="section" style={{ background: "var(--bg-secondary)", padding: "100px 1.5rem" }}>
        <div className="container" style={{ maxWidth: "1250px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "4rem", alignItems: "center" }}>
            
            <div className="reveal">
              <div className="section-label" style={{ marginBottom: "1rem" }}>All Verticals</div>
              <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Leading Provider in Australia
              </h2>
              <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                As the leading provider of Zoho implementation solutions in Australia, we help companies of ALL sizes across all verticals to implement, integrate, and deploy the entire Zoho suite of applications for drastically simplifying their operational processes.
              </p>
              <div style={{ padding: "1.5rem", background: "rgba(16, 185, 129, 0.05)", borderLeft: "4px solid #10B981", borderRadius: "0 16px 16px 0" }}>
                 <p style={{ color: "var(--text)", fontWeight: 700, fontSize: "1.1rem", margin: 0 }}>
                   Our highly experienced and knowledgeable Zoho consultants provide rapid implementation, allowing companies to quickly transition their business and make the absolute most of Zoho apps and software solutions.
                 </p>
              </div>
            </div>

            <div className="reveal" style={{ display: "grid", gap: "1.5rem" }}>
               <div style={{ background: "var(--card-bg)", padding: "2.5rem", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }}>
                  <div style={{ width: "60px", height: "60px", background: "rgba(29, 78, 216, 0.1)", color: "var(--primary)", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                    <Rocket size={32} />
                  </div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text)", marginBottom: "1rem" }}>Rapid Deployment Model</h3>
                  <p style={{ color: "var(--text-muted)", lineHeight: 1.7, margin: 0, fontSize: "1.05rem" }}>
                    Zero downtime transitions. We map your current physical and technical operational processes, and migrate the workflows simultaneously to ensure complete business stability.
                  </p>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ SECTION 2: BENEFITS ══════════════ */}
      <section className="section" style={{ background: "var(--bg)", padding: "120px 1.5rem" }}>
        <div className="container" style={{ maxWidth: "1000px", textAlign: "center" }}>
          <div className="reveal">
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "2rem", lineHeight: 1.2 }}>
              The Benefit of Zoho Implementation
            </h2>
            <p style={{ fontSize: "1.2rem", color: "var(--text)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Zoho implementation for organizations provides true end-to-end business applications for the efficient management of holistic business functions. Zoho applications are rigorously designed to boost business productivity and efficiency while aggressively fostering growth & innovation.
            </p>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "1rem", background: "var(--card-bg)", border: "1px solid var(--border)", padding: "1.5rem 2rem", borderRadius: "16px", boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }}>
              <div style={{ padding: "12px", background: "rgba(245, 158, 11, 0.1)", color: "#F59E0B", borderRadius: "50%" }}>
                <Zap size={28} />
              </div>
              <p style={{ color: "var(--text)", fontWeight: 700, fontSize: "1.1rem", margin: 0, textAlign: "left" }}>
                A well-planned Zoho implementation allows companies to successfully centralize their management as well as operations, and access cost-effective solutions to comfortably run their entire business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 3: THE FI DIGITAL DIFFERENCE ══════════════ */}
      <section className="section" style={{ background: "var(--bg-secondary)", padding: "100px 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: "1200px" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem", maxWidth: "800px", margin: "0 auto 4rem auto" }}>
            <div className="section-label" style={{ marginBottom: "1rem" }}>Strategic Approach</div>
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "1.5rem" }}>The FI Digital Difference</h2>
            <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
              Whether you are looking to generate more leads for your business or want to make the absolute most of your Google ad campaigns, our specialized Zoho software and application implementation services can perfectly help you to meet your exact requirements. Our custom solutions help you to effortlessly offer seamless and enhanced customer service.
            </p>
          </div>

          <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
             <div className="hover-lift" style={{ background: "var(--card-bg)", padding: "3rem", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ width: "80px", height: "80px", background: "rgba(139, 92, 246, 0.1)", color: "#8B5CF6", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                  <Target size={36} />
                </div>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--text)", marginBottom: "1rem" }}>Unmatched Commitment</h3>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.6, margin: 0, fontSize: "1.1rem" }}>
                  We are steadfastly committed to providing the best Zoho implementation solutions to companies across Australia by uniquely combining our Zoho execution expertise directly with the latest technology and innovation within the Google Ads System.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 4: ZOHO IMPLEMENTATION SOLUTIONS ══════════════ */}
      <section className="section" style={{ background: "var(--bg)", padding: "100px 1.5rem" }}>
        <div className="container" style={{ maxWidth: "1250px" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="section-label" style={{ marginBottom: "1rem" }}>Application Matrix</div>
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "1.5rem" }}>Zoho Implementation Solutions</h2>
            <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.7, maxWidth: "800px", margin: "0 auto" }}>
              At FI Digital, we provide highly robust Zoho Implementations solutions directly integrated across the following major ecosystem hubs.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            {[
              { title: "Zoho Cloud Apps", desc: "Zoho One, Zoho Finance Plus, Zoho CRM Plus, Zoho CRM", icon: Cloud, color: "#3B82F6" },
              { title: "Sales Applications", desc: "Zoho SalesIQ, Zoho Motivator", icon: TrendingUp, color: "#10B981" },
              { title: "Marketing Apps", desc: "Zoho Campaigns, Zoho Social, Zoho Desk, Zoho Survey, Zoho Assist", icon: Megaphone, color: "#F59E0B" },
              { title: "Business Process", desc: "Zoho Creator, Zoho Flow, Zoho Analytics", icon: Workflow, color: "#EF4444" },
              { title: "Finance Apps", desc: "Zoho Books, Zoho Inventory, Zoho Subscriptions, Zoho Invoices", icon: Wallet, color: "#8B5CF6" },
              { title: "Communication", desc: "Zoho Mail, Zoho Cliq, Zoho Workplace, Zoho Docs", icon: MessageSquare, color: "#06B6D4" },
              { title: "Collaboration Apps", desc: "Zoho Projects, Zoho Connect", icon: Users, color: "#14B8A6" },
              { title: "HR Applications", desc: "Zoho People, Zoho Payroll, Zoho Recruit", icon: Briefcase, color: "#F43F5E" }
            ].map((app, i) => (
              <div key={i} className="reveal hover-lift" style={{ background: "var(--card-bg)", padding: "2rem", borderRadius: "20px", border: "1px solid var(--border)", boxShadow: "0 10px 30px rgba(0,0,0,0.03)", display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: `${app.color}15`, display: "flex", alignItems: "center", justifyContent: "center", color: app.color }}>
                  <app.icon size={24} />
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--text)" }}>{app.title}</h3>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.6, margin: 0, fontSize: "1rem" }}>{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 5: IMPLEMENTATION PROCESS ══════════════ */}
      <section className="section" style={{ background: "var(--bg-secondary)", padding: "100px 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: "1000px" }}>
          
          <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="section-label" style={{ marginBottom: "1rem" }}>The Roadmap</div>
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "1.5rem" }}>Our Implementation Process</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { title: "Business Requirements", desc: "Precise mapping of operational processes and gathering the essential architectural requirements.", icon: Search },
              { title: "Gap Analysis", desc: "Complete structural analysis of operational gaps existing within your current business state.", icon: PieChart },
              { title: "Active Implementation", desc: "Physical setting up, systemic configuring, and rolling out the implementation.", icon: Settings },
              { title: "App Customization", desc: "Vigorously customizing and tailoring app functions directly to match your unique business needs.", icon: PenTool },
              { title: "Training & Development", desc: "Ongoing staff training, technical development, and smooth onboarding workflows.", icon: GraduationCap }
            ].map((step, idx) => (
              <div key={idx} className="reveal hover-lift" style={{ background: "var(--bg)", display: "flex", alignItems: "center", padding: "1.5rem 2rem", borderRadius: "16px", border: "1px solid var(--border)", boxShadow: "0 10px 30px rgba(0,0,0,0.02)", gap: "2rem" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--primary)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", fontWeight: 800, flexShrink: 0 }}>
                  {idx + 1}
                </div>
                <div style={{ flexShrink: 0, color: "var(--primary)" }}>
                  <step.icon size={32} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.25rem" }}>{step.title}</h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", margin: 0 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ SECTION 6: WHY FI DIGITAL ══════════════ */}
      <section className="section" style={{ background: "var(--bg)", padding: "100px 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: "900px", textAlign: "center" }}>
          <div className="reveal">
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "2rem", lineHeight: 1.2 }}>
              Why FI Digital
            </h2>
            <p style={{ fontSize: "1.15rem", color: "var(--text)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Choosing FI Digital as your specific Zoho implementation partner immediately helps you to systematically steer your organization in the right direction.
            </p>
            <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "2rem" }}>
              With vast experience and hands-on know-how in the area of Zoho apps implementation, our Zoho consultants consistently assist you in radically improving your day-to-day operational efficiency. As the Zoho consulting & implementation specialist, we possess adequate, hardened knowledge and deep understanding of your organizational needs and technical capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA SECTION ══════════════ */}
      <section id="cta" style={{ padding: '120px 1.5rem', background: '#1d4ed8', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle at right center, rgba(255,255,255,0.8) 0%, transparent 50%)' }}></div>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <h2 style={{ fontSize: '3.5rem', fontWeight: 900, color: 'white', marginBottom: '1.5rem', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            Launch Your Journey
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.95)', fontSize: '1.25rem', lineHeight: 1.7, marginBottom: '3.5rem', fontWeight: 400 }}>
            Whether you need Zoho CRM implementation, Data migration assistance, or training & deployment solutions, turn to our elite Zoho experts to dynamically discuss the scope of your specific Zoho implementation project! Get in touch with us to know more about our Zoho implementation services.
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
