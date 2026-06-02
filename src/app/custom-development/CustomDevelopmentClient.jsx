"use client";

import Link from 'next/link';
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ArrowRight, CheckCircle, Code2, Award, Lightbulb, Puzzle, Database, Monitor, Settings, Zap, Shield, FileBarChart, PenTool } from 'lucide-react';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  const { ScrollTrigger } = require('gsap/ScrollTrigger');
  gsap.registerPlugin(ScrollTrigger);
}

export default function CustomDevelopmentClient() {
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
            alt="Zoho Custom Development Software Engineering"
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
              <Code2 size={16} /> Enterprise Software Engineering
            </div>

            <h1 className="hero-title" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.1, fontWeight: 900, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: "2rem", textWrap: "balance" }}>
              Drive Business Growth With <br/>
              <span style={{ color: "var(--primary)", fontWeight: 300 }}>Zoho Custom Development</span>
            </h1>

            <div className="hero-subtitle" style={{ display: "grid", gap: "1.5rem", margin: "0 0 3rem 0", maxWidth: "800px" }}>
              <p style={{ fontSize: "clamp(1.1rem, 2vw, 1.25rem)", color: "var(--text-muted)", lineHeight: 1.7, margin: 0, textWrap: "balance" }}>
                Businesses that opt for packaged software generally end up with generic apps that fail to serve their distinct requirements. Additionally, the app does not allow them to add new features or upgrade its functionality. Integrating these readymade apps with 3rd party or in-house apps is not possible. <strong style={{color: "var(--text)"}}>This is where Zoho Custom Development services come in.</strong>
              </p>
              
              <p style={{ fontSize: "clamp(1.1rem, 2vw, 1.25rem)", color: "var(--text-muted)", lineHeight: 1.7, margin: 0, paddingLeft: "1.5rem", borderLeft: "4px solid var(--primary)" }}>
                Zoho Custom Development services help businesses launch their applications faster. It empowers organizations to scale their business with custom designed solutions that match their specific needs. It helps them to drive business growth and achieve positive results by creating apps that ensure smooth & effective business functioning.
              </p>
            </div>

            <div className="hero-btn" style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary" style={{ height: "42px", padding: "0 1.5rem", fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", fontWeight: 600 }}>
                Develop Your Custom App <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 1: HYBRID ADVANTAGE ══════════════ */}
      <section className="section" style={{ background: "var(--bg-secondary)", padding: "100px 1.5rem" }}>
        <div className="container" style={{ maxWidth: "1250px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "4rem", alignItems: "center" }}>
            
            <div className="reveal">
              <div className="section-label" style={{ marginBottom: "1rem" }}>Strategic Partnership</div>
              <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Why Us?
              </h2>
              <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                When you choose us as your Zoho Custom Development partner, we provide you with affordable Zoho mobile and web application development using a wide range of Zoho features including CRM, word processing, reports, spreadsheets, database and more. 
              </p>
              <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                Right from Zoho platform designing & development to creation of custom apps, our Zoho professionals leave no stone unturned in providing top-rated services.
              </p>
            </div>

            <div className="reveal" style={{ display: "grid", gap: "1.5rem" }}>
               <div style={{ background: "var(--card-bg)", padding: "2.5rem", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }}>
                  <div style={{ width: "60px", height: "60px", background: "rgba(59, 130, 246, 0.1)", color: "#3B82F6", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                    <Award size={32} />
                  </div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text)", marginBottom: "1rem" }}>The FI Digital Advantage</h3>
                  <p style={{ color: "var(--text-muted)", lineHeight: 1.7, margin: 0, fontSize: "1.05rem" }}>
                    At FI Digital, our Zoho Custom Development experts are certified and experienced to offer best Zoho Custom Development solutions in Australia. We build, deploy and customize enterprise, business and social apps as per client requirements. Our Zoho custom developers have assisted small, medium and large scale enterprises in building custom ready apps quickly and efficiently.
                  </p>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ SECTION 2: INDUSTRY EXPERTISE ══════════════ */}
      <section className="section" style={{ background: "var(--bg)", padding: "100px 1.5rem" }}>
        <div className="container" style={{ maxWidth: "900px", textAlign: "center", marginBottom: "4rem" }}>
          <div className="reveal">
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "2rem", lineHeight: 1.2 }}>
              Industry Specific Application Development
            </h2>
            <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Whether you need industry specific application development or even if you require Zoho Creator Mobile & Web app building services, we can provide you with one and all. Our team of Zoho Custom Development specialists also offer Zoho Rapid App Development, API Integration & Development and integration with 3rd party apps.
            </p>
          </div>
        </div>

        <div className="container" style={{ maxWidth: "1250px" }}>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginBottom: "4rem" }}>
            {[
              { title: "Zoho Database Building", icon: Database, color: "#10B981" },
              { title: "Zoho CRM Development", icon: Monitor, color: "#8B5CF6" },
              { title: "Technical Application Support", icon: Settings, color: "#F59E0B" }
            ].map((item, i) => (
               <div key={i} className="reveal hover-lift" style={{ background: "var(--card-bg)", padding: "2rem", borderRadius: "16px", border: "1px solid var(--border)", display: "flex", alignItems: "center", gap: "1.5rem" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: `${item.color}15`, display: "flex", alignItems: "center", justifyContent: "center", color: item.color, flexShrink: 0 }}>
                    <item.icon size={24} />
                  </div>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--text)", margin: 0 }}>{item.title}</h3>
               </div>
            ))}
          </div>

          <div className="reveal" style={{ background: "rgba(29, 78, 216, 0.03)", padding: "3rem", borderRadius: "24px", border: "1px solid rgba(29, 78, 216, 0.1)", textAlign: "center", maxWidth: "900px", margin: "0 auto" }}>
             <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                We use Zoho Creator to develop specified web tools using its drag & drop interface and other customization tools. With our Zoho Application development, businesses can eliminate all their worries pertaining to custom app development and focus on their core competencies. It provides business owners with the ability to make informed and accurate business decisions.
             </p>
          </div>

        </div>
      </section>

      {/* ══ SECTION 3: CAPABILITIES AND STRENGTHS ══════════════ */}
      <section className="section" style={{ background: "var(--bg-secondary)", padding: "100px 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: "1250px" }}>
          
          <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "1.5rem" }}>
              App Capabilities
            </h2>
            <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", margin: "0 auto", maxWidth: "800px" }}>
              With our Zoho custom development services, businesses can create flexible, integrated, and rapidly deployable systems.
            </p>
          </div>

          {/* First Feature List */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", marginBottom: "4rem" }}>
             {[
               "Smart Reports and Customer Portal development",
               "Custom Workflows and rules-backed Logic",
               "Interactive dashboards",
               "Secure Access Controls",
               "Rapid Application Development"
             ].map((feat, i) => (
               <div key={i} className="reveal hover-lift" style={{ background: "var(--card-bg)", padding: "0.85rem 1.75rem", borderRadius: "50px", border: "1px solid var(--border)", fontSize: "1.05rem", fontWeight: 500, color: "var(--text)", boxShadow: "0 5px 15px rgba(0,0,0,0.03)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <CheckCircle size={18} color="var(--primary)" /> {feat}
               </div>
             ))}
          </div>

          <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
             <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", margin: "0 auto 1.5rem auto", maxWidth: "900px", lineHeight: 1.7 }}>
               Our programmers get your applications up & running in no time! We can create applications for different business processes as well as industry vertical, without the need for writing excessive codes. Our Zoho Custom Development service helps you to simplify operations and automate your workflow.
             </p>
             <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text)", marginTop: "3rem", marginBottom: "2rem" }}>
               Here’s what makes us the best Zoho Custom App Development Company in Australia
             </h3>
          </div>

          {/* Second Feature Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
            {[
              { title: "Highly Skilled Development Team", desc: "Expert engineers and certified application developers.", icon: Code2, color: "#3B82F6" },
              { title: "Ten Years Native Experience", desc: "Over a decade of experience in Zoho CRM development.", icon: Award, color: "#10B981" },
              { title: "Zoho Creator Certification", desc: "Extensive experience using the Zoho Creator platform.", icon: PenTool, color: "#F59E0B" },
              { title: "Consulting & Implementation", desc: "Expert structured Zoho Consulting & native Implementation.", icon: Lightbulb, color: "#8B5CF6" },
              { title: "Quality & Security Assurance", desc: "Highest tiers of platform Security & Quality guaranteed.", icon: Shield, color: "#EF4444" },
              { title: "Post-Sale Engagement", desc: "Adequate Zoho Support and enterprise team Training.", icon: FileBarChart, color: "#06B6D4" }
            ].map((item, i) => (
              <div key={i} className="reveal hover-lift" style={{ background: "var(--card-bg)", padding: "2rem", borderRadius: "20px", border: "1px solid var(--border)", display: "flex", alignItems: "flex-start", gap: "1.5rem" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: `${item.color}15`, display: "flex", alignItems: "center", justifyContent: "center", color: item.color, flexShrink: 0 }}>
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.5rem" }}>{item.title}</h4>
                  <p style={{ color: "var(--text-muted)", fontSize: "1rem", margin: 0 }}>{item.desc}</p>
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
          
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.25rem', lineHeight: 1.7, marginBottom: '2rem', fontWeight: 500 }}>
             Our solutions are highly scalable and designed to keep pace with growing business needs and changes. FI Digital’s Zoho Custom Development allows businesses to create apps that increase their competency and credibility.
          </p>

          <h2 style={{ fontSize: '3rem', fontWeight: 900, color: 'white', marginBottom: '3rem', letterSpacing: '-0.02em', lineHeight: 1.2, margin: "0 auto 3rem auto" }}>
             Ready to Build Your Custom Software?
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
