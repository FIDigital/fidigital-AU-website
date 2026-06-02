"use client";

import Link from 'next/link';
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Type, BookOpen, Search, Share2, PenTool, MessageSquare, TrendingUp, Mic, UserCheck } from 'lucide-react';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  const { ScrollTrigger } = require('gsap/ScrollTrigger');
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContentClient() {
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
            src="/images/it-software.png"
            alt="Content Strategy and Writing"
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
              <Type size={16} /> Content is the King
            </div>

            <h1 className="hero-title" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.1, fontWeight: 900, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: "2rem", textWrap: "balance", textTransform: "uppercase" }}>
              Strike a Chord <br/>
              <span style={{ color: "var(--primary)", fontWeight: 300 }}>With Your Words</span>
            </h1>

            <div className="hero-subtitle" style={{ display: "grid", gap: "1.5rem", margin: "0 0 3rem 0", maxWidth: "800px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <p style={{ fontSize: "clamp(1.2rem, 2vw, 1.4rem)", color: "var(--text)", fontWeight: 700, margin: 0 }}>
                  We expertise in finding the right words for you which will definitely strike a chord with the users.
                </p>
                <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.8, margin: 0 }}>
                  At FI Digital, we believe in the power of storytelling. Our content strategy is designed to showcase your brand across all platforms, ensuring your message resonates with the right audience in the right ambience.
                </p>
              </div>
            </div>

            <div className="hero-btn" style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary" style={{ height: "42px", padding: "0 1.5rem", fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", fontWeight: 600 }}>
                Craft Your Story <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 1: TELL THE TALE ══════════════ */}
      <section className="section" style={{ background: "var(--bg)", padding: "100px 1.5rem" }}>
        <div className="container" style={{ maxWidth: "1100px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div className="reveal">
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", background: "rgba(29, 78, 216, 0.1)", color: "var(--primary)", padding: "0.5rem 1rem", borderRadius: "50px", fontWeight: 700, marginBottom: "1.5rem" }}>
                <BookOpen size={16} /> TELL THE TALE
              </div>
              <h2 style={{ fontSize: "2.8rem", fontWeight: 900, color: "var(--text)", marginBottom: "2rem", lineHeight: 1.1 }}>
                Digital Tales, <br/>
                <span style={{ color: "var(--primary)" }}>Virtually Told</span>
              </h2>
              <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                Write content that connects with the people and makes them want to hear more of it. We help you build your brand in a way that makes a real connection with the customer.
              </p>
              <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.8 }}>
                Whether it is social media, or emails, product branding, or website; we will make sure that your clients have a good time interacting with your brand across every touchpoint.
              </p>
            </div>
            <div className="reveal" style={{ position: "relative", borderRadius: "32px", overflow: "hidden", height: "500px", boxShadow: "0 30px 60px rgba(0,0,0,0.05)" }}>
              <Image 
                src="/images/strategy.png"
                alt="Digital Storytelling"
                fill sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 2: HAND OVER THE RESPONSIBILITY ══════════════ */}
      <section className="section" style={{ background: "var(--bg-secondary)", padding: "100px 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: "1200px" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "1rem" }}>
              Uncompromising Quality & Consistency
            </h2>
            <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", maxWidth: "800px", margin: "0 auto" }}>
              An un-orchestrated piece will always leave a listener unsatisfied. That’s why your content must have a clear plot.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2.5rem" }}>
            
            <div className="reveal hover-lift" style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "24px", padding: "3rem", boxShadow: "0 20px 40px rgba(0,0,0,0.02)" }}>
              <div style={{ width: "56px", height: "56px", borderRadius: "14px", background: "rgba(59, 130, 246, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#3B82F6", marginBottom: "1.5rem" }}>
                  <Share2 size={28} />
              </div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: "1.25rem", color: "var(--text)" }}>Consistent Voice</h3>
              <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                Maintain a consistent voice across all channels and create a legacy. We convey your message without compromising the essence.
              </p>
            </div>

            <div className="reveal hover-lift" style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "24px", padding: "3rem", boxShadow: "0 20px 40px rgba(0,0,0,0.02)" }}>
              <div style={{ width: "56px", height: "56px", borderRadius: "14px", background: "rgba(16, 185, 129, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#10B981", marginBottom: "1.5rem" }}>
                  <Search size={28} />
              </div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: "1.25rem", color: "var(--text)" }}>SEO Optimized</h3>
              <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                Digitize your product based on a systematic method along with making it search engine and navigation optimized.
              </p>
            </div>

            <div className="reveal hover-lift" style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "24px", padding: "3rem", boxShadow: "0 20px 40px rgba(0,0,0,0.02)" }}>
              <div style={{ width: "56px", height: "56px", borderRadius: "14px", background: "rgba(249, 115, 22, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#F97316", marginBottom: "1.5rem" }}>
                  <UserCheck size={28} />
              </div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: "1.25rem", color: "var(--text)" }}>Personalized Brand</h3>
              <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                We give your brand a personality with which the customer can identify, building deep trust and identification.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ══ SECTION 3: CONTENT WHICH RESONATES ══════════════ */}
      <section className="section" style={{ background: "var(--bg)", padding: "120px 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: "1250px" }}>
          
          <div className="reveal" style={{ textAlign: "center", marginBottom: "5rem" }}>
            <h2 className="section-title" style={{ fontSize: "3rem", fontWeight: 900, marginBottom: "1.5rem" }}>
              Content Which Resonates
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "4rem", alignItems: "center" }}>
             <div className="reveal" style={{ position: "relative", borderRadius: "32px", overflow: "hidden", height: "450px", boxShadow: "0 40px 80px rgba(0,0,0,0.08)" }}>
                <Image 
                  src="/images/digital-transformation.png"
                  alt="Copywriting and Training"
                  fill sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
             </div>
             <div className="reveal">
                <h3 style={{ fontSize: "2.2rem", fontWeight: 900, color: "var(--text)", marginBottom: "1.5rem" }}>Beyond Simple Writing</h3>
                <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "2rem" }}>
                   Rise up in search ranks and grow in audience with carefully curated content. Our copywriting skills go beyond websites, including:
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                  {[
                    { text: "Blogs & Editorials", icon: <PenTool size={18} /> },
                    { text: "White Papers", icon: <MessageSquare size={18} /> },
                    { text: "Video Scripts", icon: <Mic size={18} /> },
                    { text: "Team Training", icon: <UserCheck size={18} /> },
                    { text: "Social Media", icon: <Share2 size={18} /> },
                    { text: "Product Branding", icon: <TrendingUp size={18} /> }
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "1rem", background: "var(--bg-secondary)", padding: "1.25rem", borderRadius: "16px", border: "1px solid var(--border)" }}>
                      <div style={{ color: "var(--primary)" }}>{item.icon}</div>
                      <span style={{ fontWeight: 600, color: "var(--text)" }}>{item.text}</span>
                    </div>
                  ))}
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
             Digitize Your Product Story
          </h2>
          <p style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.8, margin: "0 auto 3rem auto", maxWidth: "800px" }}>
             Ready to strike a chord with your audience? Allow us to digitize your product based on a systematic method and create a content legacy that lasts.
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
