"use client";

import Link from 'next/link';
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Code2, LayoutTemplate, Database, Settings, GitBranch, FileText, Lightbulb, Puzzle, Award, Briefcase } from 'lucide-react';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  const { ScrollTrigger } = require('gsap/ScrollTrigger');
  gsap.registerPlugin(ScrollTrigger);
}

export default function CreatorClient() {
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
            src="/images/home_hero_professional.png"
            alt="Zoho Creator Low Code App Development"
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
              <LayoutTemplate size={16} /> Low-Code Application Platform
            </div>

            <h1 className="hero-title" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.1, fontWeight: 900, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: "2rem", textWrap: "balance" }}>
              Are you looking to build apps that <br/>
              <span style={{ color: "var(--primary)", fontWeight: 300 }}>match your business needs?</span>
            </h1>

            <div className="hero-subtitle" style={{ display: "grid", gap: "1.5rem", margin: "0 0 3rem 0", maxWidth: "800px" }}>
              <p style={{ fontSize: "clamp(1.1rem, 2vw, 1.25rem)", color: "var(--text-muted)", lineHeight: 1.7, margin: 0, textWrap: "balance" }}>
                With Zoho Creator you can swiftly create a wide range of web and mobile applications strictly tailored to meet your unique business requirements. The highly efficient software platform natively lets you design enterprise-class applications explicitly for running and managing your entire operational tier.
              </p>
            </div>

            <div className="hero-btn" style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary" style={{ height: "42px", padding: "0 1.5rem", fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", fontWeight: 600 }}>
                Start Building Your App <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 1: ZOHO CREATOR EXPLAINED ══════════════ */}
      <section className="section" style={{ background: "var(--bg-secondary)", padding: "100px 1.5rem" }}>
        <div className="container" style={{ maxWidth: "1000px", textAlign: "center" }}>
          
          <div className="reveal">
            <div className="section-label" style={{ marginBottom: "1rem" }}>Platform Architecture</div>
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "2.5rem", lineHeight: 1.2 }}>
              Zoho Creator Explained
            </h2>
          </div>

          <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: "1.25rem", textAlign: "left", background: "var(--bg)", border: "1px solid var(--border)", padding: "3.5rem", borderRadius: "24px", boxShadow: "0 20px 40px rgba(0,0,0,0.02)", marginBottom: "4rem" }}>
            <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
              Zoho Creator is a platform strictly designed for developing enterprise applications that powerfully help companies design operational business logic directly for web, tablet, and mobile deployments. Zoho Creator offers an amazing drag & drop interface that seamlessly allows businesses to design sophisticated apps with the specific help of the Deluge scripting language. It provides excellent capabilities to complex organizations and actively enables them to better control and manage data access, automate their routine processes, and securely view reporting metrics from anywhere.
            </p>
            <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
              Organizations actively use the low-code app development platform specifically for creating custom input forms, dynamically configuring workflows, logically building informative pages, and getting their unified application entirely up as well as running in no time! Today, businesses of absolutely all scales and sizes universally use Zoho Creator for actively managing their core data and explicitly building a native suite of highly preferred internal applications.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem", marginBottom: "4rem", textAlign: "left" }}>
            {[
              { title: "Universal Data Access", desc: "Access explicitly relevant cross-platform data natively from anywhere, anytime.", icon: Database, color: "#10B981" },
              { title: "Minimal Constraints", desc: "Requires strictly minimal configuration for deploying production-ready codebases.", icon: Settings, color: "#F59E0B" },
              { title: "Process Workflows", desc: "Create deeply customizable automated workflows to massively increase the productivity and effectiveness of your unified business tier.", icon: GitBranch, color: "#3B82F6" },
              { title: "Task Administration", desc: "Seamlessly manage internal documents, securely administer tasks, and dynamically create as well as rapidly modify logic reports & queries.", icon: FileText, color: "#8B5CF6" }
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

          <div className="reveal" style={{ textAlign: "center", borderTop: "1px solid var(--border)", paddingTop: "4rem" }}>
             <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.7, margin: "0 auto", maxWidth: "900px" }}>
               Businesses that opt for Zoho Creator are able to elegantly create beautiful graphs & integrated reports, as well as add complex filters to cleanly view all company-related information. Zoho Creator is immensely helpful in scheduling reports as well as native reminders of critical events or calls. As a highly user-interactive, widely customizable, and incredibly flexible platform, Zoho Creator is fundamentally easy to explicitly deploy and correctly use. It heavily helps automate business runtime processes and structurally makes explicit data effortlessly easy to securely search.
             </p>
          </div>

        </div>
      </section>

      {/* ══ SECTION 2: WHY US ══════════════ */}
      <section className="section" style={{ background: "var(--bg)", padding: "100px 1.5rem" }}>
        <div className="container" style={{ maxWidth: "1250px" }}>
          
          <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "1.5rem" }}>
              Why Us?
            </h2>
            <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", margin: "0 auto", maxWidth: "800px", lineHeight: 1.8 }}>
              When you strictly hire us for building and structurally integrating native apps using Zoho Creator, we heavily focus on proactively assessing your specific business processes as well as your precise customer requirements.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
            {[
              { title: "Expert Customization", desc: "Our experienced team of explicitly certified Zoho consultants securely customizes as well as seamlessly implements massive Zoho solutions accurately to perfectly match your detailed business requirements.", icon: Lightbulb, color: "#3B82F6" },
              { title: "3rd Party System Integrations", desc: "We deploy Zoho Creator flawlessly to predictably build internal applications that perfectly integrate securely with other distinct 3rd party apps including LinkedIn, Business Intelligence Apps, Quickbooks, and Google Drive.", icon: Puzzle, color: "#10B981" },
              { title: "Certified App Developers", desc: "Our strictly certified Zoho Creator logic developers systematically design hyper low-code and distinctly easy to consistently deploy user applications that actively help you effectively fulfill your operational business objectives.", icon: Award, color: "#F59E0B" },
              { title: "Internal Operations Mapping", desc: "We aggressively use Zoho Creator specifically to predictably design internal apps that securely help you perfectly better securely manage your deeply complex internal processes definitively including complex logistics, financial payrolls, and total sales pipelines.", icon: Briefcase, color: "#EF4444" }
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

      {/* ══ SECTION 3: THE STRATEGIC APPROACH ══════════════ */}
      <section className="section" style={{ background: "var(--bg-secondary)", padding: "100px 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: "900px", textAlign: "center" }}>
          <div className="reveal">
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "2rem", lineHeight: 1.2 }}>
              The FI Digital Approach
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.8, margin: 0 }}>
                At FI Digital, we firmly believe that absolute every business is natively unique and thus strictly requires intelligently customized apps as well as robust tools simply to heavily ensure highly scalable, optimal business runtime performance. Zoho Creator natively allows scaling businesses rapidly to effortlessly deploy customized logic concurrently with absolutely both Android and iOS systems, which uniquely means you distinctly can reliably perform mission-critical business runtime tasks effortlessly exactly even when actively you are heavily on the strict move.
              </p>
              <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                Our explicitly certified Zoho implementation solutions aggressively help you elegantly structure immensely strong dynamic relationships seamlessly with valued customers exactly through adequate programmatic integration securely across massively varied operational applications and secure tools exclusively such as explicit email automation, seamless transaction payment integration, enterprise accounting billing software, etc. We proudly provide you securely with distinctly direct and massively quick programmatic access actively to high-tier Zoho systems experts explicitly who exclusively offer enterprise-grade expert advice, ongoing support, and distinctively extensive knowledge actively revolving natively around the incredible Zoho Creator unified ecosystem.
              </p>
              <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                Explicitly as a prominently widely recognized high-end Zoho Creator Developer exclusively effectively operating explicitly in robust Australia, we meticulously distinctly provide exclusively a profoundly comprehensive exact array structurally of enterprise Zoho Creator scalable solutions entirely designed successfully to definitively precisely enable you strictly to elegantly uniquely design explicitly as well accurately essentially smoothly run dynamically massive database web apps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA SECTION ══════════════ */}
      <section id="cta" style={{ padding: '120px 1.5rem', background: '#1d4ed8', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle at right center, rgba(255,255,255,0.8) 0%, transparent 50%)' }}></div>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          
          <h2 style={{ fontSize: '3rem', fontWeight: 900, color: 'white', marginBottom: '3rem', letterSpacing: '-0.02em', lineHeight: 1.2, margin: "0 auto 3rem auto" }}>
             Connect with our Zoho consultants to create smart business apps using the Zoho Creator Platform!
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
