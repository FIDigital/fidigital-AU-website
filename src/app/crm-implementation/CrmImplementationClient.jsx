"use client";

import Link from 'next/link';
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ArrowRight, CheckCircle, Wallet, Users, Target, MessageSquare, LayoutDashboard, Settings, Clock, Activity, Briefcase, Search, Share2 } from 'lucide-react';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  const { ScrollTrigger } = require('gsap/ScrollTrigger');
  gsap.registerPlugin(ScrollTrigger);
}

export default function CrmImplementationClient() {
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
            src="/images/home_hero_professional.png"
            alt="CRM Implementation Dashboard"
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
              <CheckCircle size={16} /> Elite Implementation Partner
            </div>

            <h1 className="hero-title" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.1, fontWeight: 900, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: "2rem", textWrap: "balance" }}>
              Need a Robust, Powerful And <br/>
              <span style={{ color: "var(--primary)", fontWeight: 300 }}>Affordable CRM Platform?</span>
            </h1>

            <p className="hero-subtitle" style={{ fontSize: "clamp(1.1rem, 2vw, 1.3rem)", color: "var(--text-muted)", lineHeight: 1.7, margin: "0 0 3rem 0", maxWidth: "800px", textWrap: "balance" }}>
              FI Digital is the premier provider of Zoho CRM implementation services in Australia. We completely customize, integrate and implement your CRM <strong style={{color: "var(--text)"}}>to match your specific business requirements.</strong>
            </p>

            <div className="hero-btn" style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary" style={{ height: "42px", padding: "0 1.5rem", fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", fontWeight: 600 }}>
                Get Your CRM Audit <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 1: CONSULTING EXCELLENCE ══════════════ */}
      <section className="section" style={{ background: "var(--bg-secondary)", padding: "100px 1.5rem" }}>
        <div className="container" style={{ maxWidth: "1250px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "4rem", alignItems: "center" }}>
            
            <div className="reveal">
              <div className="section-label" style={{ marginBottom: "1rem" }}>System Architecture</div>
              <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Accelerate Your Business <br/>With User-Friendly Design
              </h2>
              <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                Our certified and deeply experienced Zoho consultants and developers directly help you to effectively design a system which is flawlessly user-friendly. This critical baseline enables you to reliably make well-informed data-driven decisions to significantly accelerate your business.
              </p>
              <div style={{ padding: "1.5rem", background: "rgba(29, 78, 216, 0.05)", borderLeft: "4px solid var(--primary)", borderRadius: "0 16px 16px 0" }}>
                 <p style={{ color: "var(--text)", fontWeight: 700, fontSize: "1.1rem", margin: 0 }}>
                   As the premier provider of Zoho CRM implementation services in Australia, we customize and securely integrate architectures that allow you to rapidly attain optimal business efficiency.
                 </p>
              </div>
            </div>

            <div className="reveal" style={{ display: "grid", gap: "1.5rem" }}>
               <div style={{ background: "var(--card-bg)", padding: "2.5rem", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }}>
                  <div style={{ width: "60px", height: "60px", background: "rgba(16, 185, 129, 0.1)", color: "#10B981", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                    <Activity size={32} />
                  </div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text)", marginBottom: "1rem" }}>Optimal Efficiency</h3>
                  <p style={{ color: "var(--text-muted)", lineHeight: 1.7, margin: 0, fontSize: "1.05rem" }}>
                    We build CRM instances designed exclusively around how your specific teams operate. By ensuring data entry remains low friction, you securely adopt a highly performant and agile business operational tier.
                  </p>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ SECTION 2: TOP RATED IMPLEMENTATION ══════════════ */}
      <section className="section" style={{ background: "var(--bg)", padding: "100px 1.5rem" }}>
        <div className="container" style={{ maxWidth: "1250px" }}>
          
          <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="section-label" style={{ marginBottom: "1rem" }}>Value Add</div>
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "1.5rem" }}>Top-Rated Zoho CRM Implementation Across Australia</h2>
            <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.7, maxWidth: "900px", margin: "0 auto 1.5rem auto" }}>
              When you choose FI Digital as your Zoho CRM Implementation partner, we help you to develop and implement an efficient system that allows you to better manage and organize leads. Our solutions also assist businesses in better managing their workflows, develop workplace association and manage their business documentation and more.
            </p>
            <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.7, maxWidth: "900px", margin: "0 auto" }}>
              Whether you are planning to migrate from your existing CRM system to Zoho CRM or even if you intend to make more of your existing Zoho CRM system, our team of developers can help you to optimize your processes and tools for improved business performance and business results.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem", marginTop: "4rem" }}>
            {[
              { title: "Affordable Implementations", desc: "We offer affordable Zoho CRM implementation for businesses of all scales and sizes.", icon: Wallet, color: "#10B981" },
              { title: "Increase Sales", desc: "Our CRM system helps you to manage your customers, increase sales and boost business productivity.", icon: Briefcase, color: "#3B82F6" },
              { title: "Lead Conversion", desc: "Our team helps you to track the opportunities for sales and convert your lead into clients.", icon: Target, color: "#EF4444" },
              { title: "Customer Collaboration", desc: "Our CRM implementation solutions enable you to prioritize and collaborate with customers who matter.", icon: Users, color: "#8B5CF6" },
              { title: "Unified Insights", desc: "Access reports, dashboards and lead generation options.", icon: LayoutDashboard, color: "#F59E0B" },
              { title: "Process Upgradation", desc: "We analyse your needs, update and plan you upgradation to automate your business processes.", icon: Settings, color: "#14B8A6" },
              { title: "Task Automation", desc: "With our Zoho CRM implementation, businesses can automate their routine tasks and ensure that their sales team spends less time in handling repetitive data and focus all their attention in handling sales.", icon: Clock, color: "#F43F5E" }
            ].map((item, i) => (
              <div key={i} className="reveal hover-lift" style={{ background: "var(--card-bg)", padding: "2.5rem 2rem", borderRadius: "20px", border: "1px solid var(--border)", boxShadow: "0 10px 30px rgba(0,0,0,0.03)", display: "flex", flexDirection: "column", gap: "1rem" }}>
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

      {/* ══ SECTION 3: CONSULTATION PROCESS ══════════════ */}
      <section className="section" style={{ background: "var(--bg-secondary)", padding: "100px 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: "1000px" }}>
          
          <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="section-label" style={{ marginBottom: "1rem" }}>Execution</div>
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "1.5rem" }}>Our Consultation Process</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { title: "Research & Assessment", desc: "Our Zoho CRM consultants conduct extensive research and work with your team to suggest appropriate integration. We help you to map through understanding of your key requirements. After careful assessment and research, we suggest you to fix all your applications, update the existing ones and implement new applications and features for effective functioning.", icon: Search },
              { title: "Execution & Training", desc: "Once the mapping session is through, our developers and consultants help you to execute the integration of Zoho CRM. We also offer assistance post implementation through training sessions and help you to resolve your issues pertaining to CRM.", icon: Settings },
              { title: "Engagement & Analytics", desc: "Through our Zoho CRM implementation, businesses can engage with their customers and reach out to people through phone, email, chat and social media. Organizations can also track visitors and carry out email analytics to find out what your end-customers are looking for and identify opportunities for client engagement.", icon: Share2 }
            ].map((step, idx) => (
              <div key={idx} className="reveal hover-lift" style={{ background: "var(--bg)", display: "flex", alignItems: "flex-start", padding: "2rem", borderRadius: "16px", border: "1px solid var(--border)", boxShadow: "0 10px 30px rgba(0,0,0,0.02)", gap: "2rem" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "var(--primary)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", fontWeight: 800, flexShrink: 0, marginTop: "0.25rem" }}>
                  {idx + 1}
                </div>
                <div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                     <step.icon size={20} color="var(--primary)" /> {step.title}
                  </h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
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
          <h2 style={{ fontSize: '3rem', fontWeight: 900, color: 'white', marginBottom: '2.5rem', letterSpacing: '-0.02em', lineHeight: 1.2, maxWidth: "900px", margin: "0 auto 3rem auto" }}>
            Connect With Us To Take Advantage Of Our Zoho CRM Implementation Services Here!
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
