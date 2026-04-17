"use client";

import Link from 'next/link';
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ArrowRight, CheckCircle, Target, Briefcase, Zap, History, GitMerge, Megaphone, Mail, Smartphone, LineChart, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  const { ScrollTrigger } = require('gsap/ScrollTrigger');
  gsap.registerPlugin(ScrollTrigger);
}

export default function ZohoConsultantsClient() {
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
            alt="Zoho Consultants Infrastructure"
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
              <CheckCircle size={16} /> Certified Zoho Partner
            </div>

            <h1 className="hero-title" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.1, fontWeight: 900, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: "2rem", textWrap: "balance" }}>
              Planning To Take Advice from <br/>
              <span style={{ color: "var(--primary)", fontWeight: 300 }}>Zoho Consultants?</span>
            </h1>

            <p className="hero-subtitle" style={{ fontSize: "clamp(1.1rem, 2vw, 1.3rem)", color: "var(--text-muted)", lineHeight: 1.7, margin: "0 0 3rem 0", maxWidth: "800px", textWrap: "balance" }}>
              We are a Zoho Certified Consultant, helping you with the understanding and implementation of Zoho Software. <strong style={{color: "var(--text)"}}>We are Australia's highest-rated Zoho Consulting Partner.</strong>
            </p>

            <div className="hero-btn" style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary" style={{ height: "42px", padding: "0 1.5rem", fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", fontWeight: 600 }}>
                Talk to an Expert <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 1: CONSULTING SERVICES ══════════════ */}
      <section className="section" style={{ background: "var(--bg-secondary)", padding: "100px 1.5rem" }}>
        <div className="container" style={{ maxWidth: "1250px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
            
            <div className="reveal">
              <div className="section-label" style={{ marginBottom: "1rem" }}>Our Expertise</div>
              <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Expert Zoho <br/>CRM Consulting Services
              </h2>
              <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                At FI Digital, we offer expert Zoho CRM Consulting services. Our team of ZOHO consultants creates unique ZOHO CRM strategies that complement your business and help you maximize your ROI.
              </p>
              <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "2rem" }}>
                Our Zoho consulting solutions make it convenient for businesses to assess their business objectives and simplify their processes. With our expertise and knowledge across various domains, we analyse customer needs to design an effective Zoho strategy that’s well-aligned with your business goals. 
              </p>
              <div style={{ padding: "1.5rem", background: "rgba(29, 78, 216, 0.05)", borderLeft: "4px solid var(--primary)", borderRadius: "0 16px 16px 0" }}>
                 <p style={{ color: "var(--text)", fontWeight: 700, fontSize: "1.1rem", margin: 0 }}>
                   Our aim as expert ZOHO consultants is to create a CRM strategy that helps you steer your business to the next level.
                 </p>
              </div>
            </div>

            <div className="reveal" style={{ display: "grid", gap: "1.5rem" }}>
               {/* Benefit Card 1 */}
               <div style={{ background: "var(--card-bg)", padding: "2rem", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "0 20px 40px rgba(0,0,0,0.05)", display: "flex", gap: "1.5rem", alignItems: "flex-start", transition: "all 0.3s ease" }} className="hover-lift">
                  <div style={{ width: "50px", height: "50px", background: "rgba(29, 78, 216, 0.1)", color: "var(--primary)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Target size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.5rem" }}>Aligned Strategies</h3>
                    <p style={{ color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>We meticulously map out Zoho architecture ensuring it mirrors your operational vision.</p>
                  </div>
               </div>

               {/* Benefit Card 2 */}
               <div style={{ background: "var(--card-bg)", padding: "2rem", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "0 20px 40px rgba(0,0,0,0.05)", display: "flex", gap: "1.5rem", alignItems: "flex-start", transition: "all 0.3s ease", transform: "translateX(-20px)" }} className="hover-lift">
                  <div style={{ width: "50px", height: "50px", background: "rgba(16, 185, 129, 0.1)", color: "#10B981", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Zap size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.5rem" }}>Process Simplification</h3>
                    <p style={{ color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>Eliminate bottlenecks through intelligent automation and tight system integrations.</p>
                  </div>
               </div>

               {/* Benefit Card 3 */}
               <div style={{ background: "var(--card-bg)", padding: "2rem", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "0 20px 40px rgba(0,0,0,0.05)", display: "flex", gap: "1.5rem", alignItems: "flex-start", transition: "all 0.3s ease" }} className="hover-lift">
                  <div style={{ width: "50px", height: "50px", background: "rgba(245, 158, 11, 0.1)", color: "#F59E0B", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.5rem" }}>Domain Knowledge</h3>
                    <p style={{ color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>Drawing from vast experience across multiple verticals to apply best-in-class frameworks.</p>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ SECTION 2: ACHIEVE YOUR GOALS ══════════════ */}
      <section className="section" style={{ background: "var(--bg)", padding: "120px 1.5rem" }}>
        <div className="container" style={{ maxWidth: "900px", textAlign: "center" }}>
          <div className="reveal">
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "2rem", lineHeight: 1.2 }}>
              Achieve Your Goals With <br />a Zoho Certified Consultant
            </h2>
            <p style={{ fontSize: "1.2rem", color: "var(--text)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Zoho offers a host of features as well as applications. But businesses need to decide which ones are ideal for their business and a successful implementation.
            </p>
            <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "2rem" }}>
              This is exactly where FI Digital comes into the picture. As the leading Zoho Certified Consultant in Australia, we provide you with the best ZOHO implementation plan to ensure that your business processes run efficiently.
            </p>
            <div style={{ display: "inline-block", background: "rgba(16, 185, 129, 0.05)", border: "1px solid rgba(16, 185, 129, 0.2)", padding: "1.5rem 2rem", borderRadius: "16px" }}>
              <p style={{ color: "#10B981", fontWeight: 700, fontSize: "1.15rem", margin: 0 }}>
                Our Zoho Consulting Services are designed to provide a hassle-free transition, thereby helping you to achieve your business goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 3: WHY ZOHO CRM? ══════════════ */}
      <section className="section" style={{ background: "var(--bg-secondary)", padding: "100px 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: "1250px" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="section-label" style={{ marginBottom: "1rem" }}>Platform Benefits</div>
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "1.5rem" }}>Why Zoho CRM?</h2>
            <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.7, maxWidth: "800px", margin: "0 auto" }}>
              Zoho CRM is an ideal solution for organizations searching for a flexible and affordable CRM platform to improve their productivity, sales, and overall performance. It enables companies to gather all their vital business information and data at one place. Other benefits of ZOHO CRM include:
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
            {[
              { title: "Single Client View", desc: "Provides single view and full communication history of clients.", icon: History, color: "#3B82F6" },
              { title: "Task & Workflow Automation", desc: "Automate task allocations, including scoring and lead routing.", icon: GitMerge, color: "#10B981" },
              { title: "Marketing Automation", desc: "Powerful marketing automation that helps to generate quality leads.", icon: Megaphone, color: "#F59E0B" },
              { title: "Targeted Campaigns", desc: "Create targeted emails through highly appropriate lists and segmentation.", icon: Mail, color: "#EF4444" },
              { title: "Mobile Accessibility", desc: "Enables sales and marketing teams to access data and information through mobile.", icon: Smartphone, color: "#8B5CF6" },
              { title: "Advanced Analytics", desc: "Strong analytics as well as comprehensive reporting for effective decision making.", icon: LineChart, color: "#06B6D4" }
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

      {/* ══ SECTION 4: WHY FI DIGITAL ══════════════ */}
      <section className="section" style={{ background: "var(--bg)", padding: "100px 1.5rem" }}>
        <div className="container" style={{ maxWidth: "1200px" }}>
          
          <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="section-label" style={{ marginBottom: "1rem" }}>Partner Benefits</div>
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "1.5rem" }}>Why FI Digital?</h2>
            <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.7, maxWidth: "800px", margin: "0 auto" }}>
              When you partner with us, our Zoho Certified Consultants prioritize your bottom line. Our team helps you to migrate to Zoho CRM, which thoroughly enables you to manage your client relationships and aggressively drive business results.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
            {[
              "Our Zoho consultants work directly alongside your team members right through the project to ensure completely smooth integrations.",
              "From process mapping to customer analysis, tracking of industry trends and data gathering, we create unique automated process flows offering deeper insights into your customers.",
              "Our Zoho consultants collaborate with your team to refine as well as fully customise Zoho CRM apps to flawlessly match your specific needs.",
              "We configure Zoho CRM apps to guarantee that they work seamlessly alongside your existing marketing, communications, and sales processes.",
              "We are comprehensively capable of implementing specific Zoho solutions and products to exclusively address your finance and HR architectural structures.",
              "Our Zoho certified consultants advise you on seamlessly integrating other 3rd party applications directly with Zoho CRM to fulfill your desired business goals."
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
