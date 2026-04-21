"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Mail, Phone, MapPin, ArrowRight, 
  ChevronRight, Calendar, MessageSquare, Globe, Building,
  ShieldCheck, Zap, Users, BarChart3, Clock, Award,
  Sparkles, MousePointer2, Send
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ─── Data ──────────────────────────────────────────────────────────────────── */

const offices = [
  { 
    city: "Melbourne HQ", 
    addr: "FI Digital, Level 9, 440 Collins Street, Melbourne VIC 3000", 
    phone: "1300 921 280", 
    tag: "Main Headquarters", 
    color: "#1D4ED8",
    img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
  },
  { 
    city: "Vermont South Office", 
    addr: "FI Digital, 3 Tanunda Street, Vermont South, Victoria 3133", 
    phone: "1300 921 280", 
    tag: "Regional Office", 
    color: "#10b981",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
];

const trustPillars = [
  { 
    icon: <ShieldCheck size={32} />, 
    title: "Enterprise Grade", 
    desc: "Built for scale, security, and performance across AU, NZ, and the Asia-Pacific region.",
    color: "#3B82F6"
  },
  { 
    icon: <Globe size={32} />, 
    title: "Local Presence", 
    desc: "Melbourne-based senior architecture team backed by massive global engineering capacity.",
    color: "#8B5CF6"
  },
  { 
    icon: <Zap size={32} />, 
    title: "Accelerated Delivery", 
    desc: "Production-ready systems shipped in weeks, not months, using our proprietary AI-accelerators.",
    color: "#F59E0B"
  },
  { 
    icon: <Users size={32} />, 
    title: "Expert Guided", 
    desc: "Every interaction is with a senior technology consultant. No gatekeepers, just engineering excellence.",
    color: "#10B981"
  }
];

/* ─── Component ─────────────────────────────────────────────────────────────── */
export default function ContactClient() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Hero Animations
    const tl = gsap.timeline();
    tl.from(".hero-badge", { y: -20, autoAlpha: 0, duration: 0.6, ease: "power3.out" })
      .from(".hero-h1", { y: 40, autoAlpha: 0, duration: 0.8, ease: "power3.out" }, "-=0.3")
      .from(".hero-sub", { y: 20, autoAlpha: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")
      .from(".hero-cta", { y: 20, autoAlpha: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")
      .from(".hero-float", { scale: 0.8, autoAlpha: 0, duration: 1, ease: "back.out(1.7)", stagger: 0.2 }, "-=0.8");
    
    // Reveal animations for general sections
    gsap.utils.toArray(".reveal").forEach((el) => {
      gsap.fromTo(el,
        { y: 40, autoAlpha: 0 },
        { 
          y: 0, autoAlpha: 1, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true } 
        }
      );
    });

    // Staggered cards
    gsap.from(".trust-card", {
      scale: 0.9,
      autoAlpha: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: { trigger: ".trust-grid", start: "top 85%", once: true }
    });

    // Floating animation for decorative elements
    gsap.to(".float-slow", {
      y: 15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="contact-page-root" style={{ background: "var(--bg)", color: "var(--text)" }}>
      <style>{`
        .contact-page-root { overflow-x: hidden; }
        .container { max-width: 1300px; margin: 0 auto; width: 100%; padding: 0 1.5rem; }
        .section-padding { padding: 120px 0; }
        
        /* Hero Section - FORCED LEFT ALIGNMENT */
        .hero-section {
          position: relative;
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: flex-start !important;
          background: var(--bg);
          overflow: hidden;
          padding-top: var(--header-h);
          text-align: left !important;
        }

        .hero-glow {
          position: absolute;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(29, 78, 216, 0.08) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .hero-mask-image {
          position: absolute;
          top: 0;
          right: 0;
          width: 55%;
          height: 100%;
          opacity: 0.35;
          pointer-events: none;
          z-index: 0;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(29, 78, 216, 0.08);
          border: 1px solid rgba(29, 78, 216, 0.2);
          padding: 0.6rem 1.25rem;
          border-radius: 100px;
          color: var(--primary);
          font-weight: 800;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 2.5rem;
        }

        /* Glass Cards */
        .premium-card {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 32px;
          padding: 3rem;
          box-shadow: var(--card-shadow);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        .premium-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 40px 80px rgba(0,0,0,0.12);
          border-color: var(--primary);
        }

        /* Contact Details Layout */
        .info-layout {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4rem;
          align-items: start;
        }

        /* Office Cards */
        .office-card {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 28px;
          overflow: hidden;
          box-shadow: var(--card-shadow);
          transition: all 0.4s ease;
        }

        .office-card:hover {
          transform: scale(1.02);
          border-color: var(--primary);
        }

        /* Trust Grid */
        .trust-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .trust-card {
          background: var(--card-bg);
          padding: 2.5rem;
          border-radius: 24px;
          border: 1px solid var(--border);
          transition: all 0.3s ease;
        }

        .trust-card:hover {
          background: var(--bg-secondary);
          border-color: var(--primary);
        }

        /* Buttons */
        .btn-main {
          height: 56px;
          padding: 0 2.5rem;
          border-radius: 100px;
          font-weight: 800;
          font-size: 1rem;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          transition: all 0.3s ease;
          cursor: pointer;
          text-decoration: none;
        }

        .btn-main.primary {
          background: var(--primary);
          color: #fff;
          box-shadow: 0 10px 25px rgba(29, 78, 216, 0.25);
        }

        .btn-main.primary:hover {
          transform: scale(1.05);
          box-shadow: 0 15px 35px rgba(29, 78, 216, 0.35);
        }

        .btn-main.outline {
          background: transparent;
          border: 1px solid var(--border);
          color: var(--text);
        }

        .btn-main.outline:hover {
          background: rgba(128,128,128,0.05);
          border-color: var(--primary);
          color: var(--primary);
        }

        @media (max-width: 1100px) {
          .info-layout { grid-template-columns: 1fr; gap: 5rem; }
          .hero-mask-image { opacity: 0.2; width: 80%; }
        }

        @media (max-width: 768px) {
          .section-padding { padding: 80px 0; }
          .hero-section { text-align: left !important; min-height: auto; padding-top: 140px; padding-bottom: 100px; justify-content: flex-start !important; }
          .hero-mask-image { display: none; }
          .premium-card { padding: 2rem; }
          .btn-main { width: 100%; justify-content: center; }
        }
      `}</style>

      <main>
        {/* ══ HERO ══════════════════════════════════════════════════════════ */}
        <section className="hero-section">
          <div className="hero-glow" style={{ top: '10%', right: '0%' }} />
          <div className="hero-glow" style={{ bottom: '-10%', left: '-5%', opacity: 0.5 }} />
          
          <div className="hero-mask-image">
            <Image 
              src="/images/Contact-us.png" 
              alt="" 
              fill 
              style={{ 
                objectFit: "cover",
                maskImage: "radial-gradient(ellipse at right, black, transparent 75%)",
                WebkitMaskImage: "radial-gradient(ellipse at right, black, transparent 75%)" 
              }} 
              priority
            />
          </div>

          <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'left', margin: '0 auto 0 0', marginLeft: 'max(0px, calc((100vw - 1300px) / 2))' }}>
            <div className="hero-badge" style={{ textAlign: 'left' }}>
              <Sparkles size={16} /> Australia · New Zealand · APAC
            </div>
            
            <h1 className="hero-h1" style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900, lineHeight: 1.05, marginBottom: "2rem", maxWidth: "950px", textAlign: 'left'
            }}>
              Let&apos;s Build the <br />
              <span style={{ 
                background: "linear-gradient(135deg, var(--primary) 0%, #6366f1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>Next Generation</span> of Your Business
            </h1>

            <p className="hero-sub" style={{
              maxWidth: "750px", fontSize: "clamp(1.1rem, 2vw, 1.25rem)", color: "var(--text-muted)", 
              lineHeight: 1.75, marginBottom: "3.5rem", textAlign: 'left'
            }}>
              Ready to talk? We are based in Melbourne and serve clients across Australia, New Zealand, and the Asia-Pacific region. Whether you are exploring a new software build, evaluating data platform options, considering AI automation, or looking to modernise your business systems, a conversation with our senior team is the best place to start.
            </p>

            <div className="hero-cta" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'flex-start' }}>
              <a href="#contact-details" className="btn-main primary">
                Get Started Now <ArrowRight size={20} />
              </a>
              <a href="#contact-form" className="btn-main outline">
                Send an Inquiry <Send size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* ══ CONTACT & OFFICES ═════════════════════════════════════════════ */}
        <section id="contact-details" className="section-padding" style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
          <div className="container">
            <div className="info-layout">
              {/* Left Column: Direct Contact */}
              <div className="reveal">
                <div style={{ marginBottom: '5rem' }}>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                      <div style={{ width: 64, height: 64, background: 'rgba(29, 78, 216, 0.08)', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                        <Mail size={32} />
                      </div>
                      <h2 style={{ fontSize: '1.75rem', fontWeight: 900 }}>Email Our Team</h2>
                   </div>
                   <a href="mailto:info@fidigital.com.au" style={{ 
                     fontSize: 'clamp(1.5rem, 5vw, 3rem)', fontWeight: 950, color: 'var(--primary)', 
                     textDecoration: 'none', display: 'block', marginBottom: '1rem', wordBreak: 'break-all' 
                   }}>
                     info@fidigital.com.au
                   </a>
                   <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                     General inquiries and project proposals. Reponse within 4 business hours.
                   </p>
                </div>

                <div style={{ marginBottom: '5rem' }}>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                      <div style={{ width: 64, height: 64, background: 'rgba(16, 185, 129, 0.08)', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981' }}>
                        <Phone size={32} />
                      </div>
                      <h2 style={{ fontSize: '1.75rem', fontWeight: 900 }}>Call 1300 Line</h2>
                   </div>
                   <a href="tel:1300921280" style={{ 
                     fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 950, color: 'var(--text)', 
                     textDecoration: 'none', display: 'block', marginBottom: '1rem' 
                   }}>
                     1300 921 280
                   </a>
                   <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                     Available Monday – Friday, 9:00 AM – 5:30 PM AEST.
                   </p>
                </div>

                <div className="premium-card" style={{ background: 'var(--bg)', borderStyle: 'dashed', borderWidth: '2px' }}>
                   <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
                      <div className="float-slow" style={{ width: 80, height: 80, background: 'var(--primary)', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: '0 15px 30px rgba(29, 78, 216, 0.3)' }}>
                        <Calendar size={40} />
                      </div>
                      <div style={{ flex: 1, minWidth: '280px' }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '0.5rem' }}>Discovery Session</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: 1.6 }}>
                          Book a free 30-minute deep-dive with one of our senior consultants to scope your technology needs.
                        </p>
                        <Link href="/book-discovery" className="btn-main primary" style={{ height: '48px', padding: '0 2rem' }}>
                          Choose a Slot <ChevronRight size={18} />
                        </Link>
                      </div>
                   </div>
                </div>
              </div>

              {/* Right Column: Office Grid */}
              <div className="reveal">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
                  <div style={{ width: 64, height: 64, background: 'rgba(139, 92, 246, 0.08)', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8b5cf6' }}>
                    <Building size={32} />
                  </div>
                  <h2 style={{ fontSize: '1.75rem', fontWeight: 900 }}>Our Locations</h2>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                  {offices.map((o, i) => (
                    <div key={i} className="office-card">
                      <div style={{ position: 'relative', height: '240px' }}>
                        <Image src={o.img} alt={o.city} fill style={{ objectFit: 'cover' }} />
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }} />
                        <div style={{ position: 'absolute', bottom: '2rem', left: '2rem' }}>
                          <span style={{ 
                            padding: '0.4rem 1rem', background: o.color, color: '#fff', 
                            borderRadius: '50px', fontSize: '0.75rem', fontWeight: 900, 
                            textTransform: 'uppercase', marginBottom: '0.75rem', display: 'inline-block' 
                          }}>
                            {o.tag}
                          </span>
                          <h3 style={{ color: '#fff', fontSize: '2.2rem', fontWeight: 900 }}>{o.city}</h3>
                        </div>
                      </div>
                      <div style={{ padding: '2.5rem' }}>
                         <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                            <MapPin size={24} style={{ color: o.color, flexShrink: 0, marginTop: '4px' }} />
                            <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.6, fontWeight: 500 }}>{o.addr}</p>
                         </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ ZOHO FORM ═════════════════════════════════════════════════════ */}
        <section id="contact-form" className="section-padding" style={{ background: "var(--bg)" }}>
          <div className="container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '5rem' }}>
               <div className="hero-badge" style={{ marginBottom: '1.5rem' }}>
                  <MessageSquare size={16} /> Project Scoping
               </div>
               <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, marginBottom: '1.5rem' }}>
                 Start a Conversation
               </h2>
               <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                 Tell us about your project requirements. Our engineering team will review your inquiry and prepare a tailored strategy for your business.
               </p>
            </div>

            <div className="reveal premium-card" style={{ maxWidth: '1100px', margin: '0 auto' }}>
               <div className="zoho-iframe-container">
                 <style dangerouslySetInnerHTML={{__html: `
                   .zoho-iframe-container { width: 100%; min-height: 750px; overflow: hidden; }
                   .zoho-iframe-container iframe { width: 100%; height: 750px; border: none; }
                   @media (max-width: 650px) {
                     .zoho-iframe-container { min-height: 1100px; }
                     .zoho-iframe-container iframe { height: 1100px; }
                   }
                 `}} />
                 <iframe src="/zoho-form.html" title="Contact Us Form" scrolling="no"></iframe>
               </div>
            </div>
          </div>
        </section>

        {/* ══ TRUST PILLARS ═════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
          <div className="container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '5rem' }}>
               <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1.5rem' }}>Engineering Excellence as Standard</h2>
               <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '750px', margin: '0 auto' }}>
                 Australian mid-market and enterprise businesses partner with us for our rigorous approach to technology and outcomes.
               </p>
            </div>

            <div className="trust-grid">
               {trustPillars.map((p, i) => (
                 <div key={i} className="trust-card reveal">
                    <div style={{ color: p.color, marginBottom: '2rem' }}>{p.icon}</div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1rem' }}>{p.title}</h3>
                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '1.05rem' }}>{p.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* ══ FINAL CTA ═════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ background: 'var(--primary)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, opacity: 0.15, background: 'radial-gradient(circle at center, #fff 0%, transparent 70%)' }} />
          <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 950, color: '#fff', marginBottom: '2rem', lineHeight: 1.1 }}>
              Ready to Accelerate?
            </h2>
            <p style={{ fontSize: '1.4rem', color: 'rgba(255,255,255,0.9)', maxWidth: '700px', margin: '0 auto 4rem', fontWeight: 500 }}>
              Connect with us today and let&apos;s discuss how our technology solutions can transform your business operations.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
               <a href="#contact-form" className="btn-main" style={{ background: '#fff', color: 'var(--primary)', padding: '0 3.5rem' }}>
                 Start Your Project
               </a>
               <Link href="/book-discovery" className="btn-main" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', padding: '0 3.5rem' }}>
                 Book a Call
               </Link>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ padding: '6rem 0', background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--text-muted)', fontWeight: 600, fontSize: '1.1rem' }}>
            &copy; {new Date().getFullYear()} FI Digital Australia. <br />
            <span style={{ fontSize: '0.9rem', opacity: 0.7 }}>Melbourne Headquarters · Level 9, 440 Collins Street, Melbourne VIC 3000</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
