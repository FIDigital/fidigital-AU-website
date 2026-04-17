"use client";

import Link from 'next/link';
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ArrowRight, CheckCircle, HeartHandshake, Zap, Target, Smile, PenTool, Search, Puzzle, Shield, Settings } from 'lucide-react';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  const { ScrollTrigger } = require('gsap/ScrollTrigger');
  gsap.registerPlugin(ScrollTrigger);
}

export default function DeskImplementationClient() {
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
            src="/images/home_hero_professional.png"
            alt="Zoho Desk Customer Success Matrix"
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
              <CheckCircle size={16} /> Helpdesk Implementation Experts
            </div>

            <h1 className="hero-title" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.1, fontWeight: 900, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: "2rem", textWrap: "balance" }}>
              Achieve 100% Satisfaction With <br/>
              <span style={{ color: "var(--primary)", fontWeight: 300 }}>Expert Zoho Desk Implementation</span>
            </h1>

            <div className="hero-subtitle" style={{ display: "grid", gap: "1.5rem", margin: "0 0 3rem 0", maxWidth: "800px" }}>
              <p style={{ fontSize: "clamp(1.1rem, 2vw, 1.3rem)", color: "var(--text-muted)", lineHeight: 1.7, margin: 0, textWrap: "balance" }}>
                In addition to product quality, efficient customer service is the explicit key to offering 100% customer satisfaction, directly driving total customer retention. Customers distinctly prefer organizations that offer <strong style={{color: "var(--text)"}}>sincere and outstanding support post product sales or service.</strong>
              </p>
            </div>

            <div className="hero-btn" style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary" style={{ height: "42px", padding: "0 1.5rem", fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", fontWeight: 600 }}>
                Deploy Zoho Desk Today <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 1: EFFICIENT SUPPORT ══════════════ */}
      <section className="section" style={{ background: "var(--bg-secondary)", padding: "100px 1.5rem" }}>
        <div className="container" style={{ maxWidth: "1250px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "4rem", alignItems: "center" }}>
            
            <div className="reveal">
              <div className="section-label" style={{ marginBottom: "1rem" }}>Helpdesk Excellence</div>
              <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Efficient & Accurate <br/>Customer Support
              </h2>
              <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                Zoho Desk applications powerfully enable customers to connect with you directly to resolve their service issues or concerns. Its unique features empower support managers, desk agents, as well as the customers themselves. Put simply, it perfectly helps businesses to offer customer support in the most efficient and accurate manner.
              </p>
              <div style={{ padding: "1.5rem", background: "rgba(29, 78, 216, 0.05)", borderLeft: "4px solid var(--primary)", borderRadius: "0 16px 16px 0" }}>
                 <p style={{ color: "var(--text)", fontWeight: 700, fontSize: "1.1rem", margin: 0 }}>
                   At FI Digital, our Zoho consultants offer the absolute best Zoho Desk implementation service to businesses explicitly across Australia. We offer end-to-end Zoho Desk implementation solutions designed to definitively help businesses of all scales and sizes.
                 </p>
              </div>
            </div>

            <div className="reveal" style={{ display: "grid", gap: "1.5rem" }}>
               <div style={{ background: "var(--card-bg)", padding: "2.5rem", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }}>
                  <div style={{ width: "60px", height: "60px", background: "rgba(16, 185, 129, 0.1)", color: "#10B981", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                    <HeartHandshake size={32} />
                  </div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text)", marginBottom: "1rem" }}>100% Satisfaction</h3>
                  <p style={{ color: "var(--text-muted)", lineHeight: 1.7, margin: 0, fontSize: "1.05rem" }}>
                    Efficient customer service isn't just a metric; it's the strict foundation of customer retention. We structure systems that guarantee outstanding support following product sales and operational engagement.
                  </p>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ SECTION 2: IMPLEMENTATION EXPERTISE ══════════════ */}
      <section className="section" style={{ background: "var(--bg)", padding: "100px 1.5rem" }}>
        <div className="container" style={{ maxWidth: "1250px" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="section-label" style={{ marginBottom: "1rem" }}>Value Add</div>
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "1.5rem" }}>
              Here’s how you can benefit from our <br/>Zoho Desk implementation expertise
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
            {[
              { title: "Customized Solutions", desc: "We offer customized Zoho Desk implementation to help you meet your specific business needs.", icon: Settings, color: "#3B82F6" },
              { title: "Customer Satisfaction", desc: "Our solutions help businesses to optimize customer satisfaction.", icon: Smile, color: "#10B981" },
              { title: "Tailored Development", desc: "Our consultants design the best software that allows you to offer the exact services that you intend to provide for enhanced customer experience.", icon: PenTool, color: "#F59E0B" },
              { title: "Process Assessment", desc: "Our Zoho Desk implementation experts assess your business processes and goals to recommend suitable action plan for successful implementation.", icon: Search, color: "#EF4444" },
              { title: "Seamless App Integration", desc: "Our team is fully capable of integrating Zoho Desk with other apps such as Zoho CRM, G Suite and 3rd party applications etc. to enhance your customer support service.", icon: Puzzle, color: "#8B5CF6" },
              { title: "Strict Data Security", desc: "We handle all your data in a safe and secure manner.", icon: Shield, color: "#06B6D4" }
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

      {/* ══ SECTION 3: STRATEGIC INTEGRATION (WHY US) ══════════════ */}
      <section className="section" style={{ background: "var(--bg-secondary)", padding: "100px 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: "900px", textAlign: "center", marginBottom: "4rem" }}>
          <div className="reveal">
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "2rem", lineHeight: 1.2 }}>
              Why Us?
            </h2>
            <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              As the top-rated and highly experienced Zoho Desk implementation provider in Australia, we work with businesses to enhance their customers’ experience. When you hire our consultants, they collaborate with you to analyse your business specifics and requirements.
            </p>
          </div>
        </div>

        <div className="container" style={{ maxWidth: "900px" }}>
          <div className="reveal" style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "24px", padding: "3rem", boxShadow: "0 20px 40px rgba(0,0,0,0.02)" }}>
            <h2 className="section-title" style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.5rem", textAlign: "center" }}>
              The Need for Zoho Desk Implementation
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                Zoho Desk implementation allows organizations to focus its attention on their customers. Businesses can access tools for handling customer queries and provide apt solutions for addressing their concerns quickly. Customers are offered multiple connectivity points as they can connect with the agents through Zoho Desk’s support channels such as Email, Customer Portal, Web Form as well as Social Media.
              </p>
              <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                On the other hand agents can assist customers efficiently using the Zoho desk’s optimized ticket view feature. Similarly, managers can also use the software to keep a track of customer satisfaction, performance of the agent & rating, pressing issues and a host of other important activities through the dashboard.
              </p>
              <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                In simple terms, Zoho Desk implementation helps business owners to arrive at sound decisions quickly. It also enables them to automate frequent business tasks, thus improving the efficiency and performance of their agents. Since Zoho Desk offers a better insight into customer problems, it can result in better customer penetration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA SECTION ══════════════ */}
      <section id="cta" style={{ padding: '120px 1.5rem', background: '#1d4ed8', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle at right center, rgba(255,255,255,0.8) 0%, transparent 50%)' }}></div>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 900, color: 'white', marginBottom: '2.5rem', letterSpacing: '-0.02em', lineHeight: 1.2, maxWidth: "900px", margin: "0 auto 3rem auto" }}>
             Connect with our experts to understand how Zoho Desk Implementation can help your business!
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
