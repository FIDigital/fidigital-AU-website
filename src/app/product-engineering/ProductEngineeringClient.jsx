"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight, Code2, Terminal, Smartphone, Database, Layout, Rocket, RefreshCw, Search, Code, CheckCircle, Flag, Headphones, Server, Cloud, Cog, FileText, ChevronDown } from 'lucide-react';

export default function ProductEngineeringClient() {
  return (
    <>
      <section className="product-hero">
        <div className="product-hero-bg">
          <div className="gradient-sphere shape-1"></div>
          <div className="gradient-sphere shape-2"></div>
        </div>

        {/* Background Visual — right-side image with gradient mask */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "60%",
            height: "100%",
            zIndex: 0,
            opacity: 0.45,
            pointerEvents: "none",
          }}
        >
          <Image
            src="/we-build.png"
            alt="Product Engineering Software Build"
            aria-hidden="true"
            fill
            style={{
              objectFit: "cover",
              maskImage: "radial-gradient(circle at right, black, transparent 80%)",
              WebkitMaskImage: "radial-gradient(circle at right, black, transparent 80%)",
            }}
          />
        </div>
        
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="hero-badge section-label" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(29, 78, 216, 0.1)", color: "var(--primary)", padding: "0.5rem 1rem", borderRadius: "50px", fontWeight: 700, marginBottom: "1.5rem" }}>
            <Code2 size={16} /> Product Engineering
          </div>

          <h1 className="hero-h1 section-title" style={{ maxWidth: "1000px", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            Build Software That Creates<br />
            <span style={{ color: "var(--primary)", fontWeight: 300 }}>Competitive Advantage</span>
          </h1>

          <p className="hero-p section-desc" style={{ maxWidth: "700px", fontSize: "1.2rem", color: "var(--text-muted)", marginBottom: "3rem" }}>
            Custom web applications, native mobile apps, SaaS platforms, and internal workflow tools. Engineered for your specific business logic. Deployed on your infrastructure. Owned by you. <strong style={{ color: "var(--text)" }}>FI Digital — 200+ engineers, 10 years in production.</strong>
          </p>

          <div className="hero-btn flex flex-wrap gap-4" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/book-discovery" className="btn-primary" style={{
              background: "var(--primary)", color: "#fff", padding: "1rem 2rem", borderRadius: "8px", fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem", transition: "all 0.2s"
            }}>
              Start a Discovery Sprint <ArrowRight size={18} />
            </Link>
            <Link href="/case-studies" className="btn-secondary" style={{
              background: "rgba(255,255,255,0.05)", border: "1px solid var(--border)", color: "var(--text)", padding: "1rem 2rem", borderRadius: "8px", fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem", transition: "all 0.2s"
            }}>
              Explore Case Studies
            </Link>
          </div>
        </div>

        <style jsx>{`
          .product-hero {
            position: relative;
            min-height: 75vh;
            display: flex;
            align-items: center;
            padding: clamp(80px, 10vh, 120px) 1.5rem 80px;
            background: var(--bg);
            overflow: hidden;
            border-bottom: 1px solid var(--border);
          }
          
          .product-hero-bg {
            position: absolute;
            inset: 0;
            overflow: hidden;
          }
          
          .gradient-sphere {
            position: absolute;
            border-radius: 50%;
            filter: blur(140px);
            opacity: 0.15;
            z-index: 1;
            animation: float 20s ease-in-out infinite alternate;
          }
          
          .shape-1 {
            width: 800px;
            height: 800px;
            background: rgba(29, 78, 216, 1);
            top: -200px;
            left: -200px;
          }
          
          .shape-2 {
            width: 700px;
            height: 700px;
            background: rgba(13, 148, 136, 1);
            bottom: -150px;
            right: -100px;
            animation-delay: -10s;
          }

          .btn-primary {
            display: inline-flex;
            align-items: center;
            gap: 0.75rem;
            background: var(--primary);
            color: white;
            padding: 1.1rem 2.2rem;
            border-radius: 100px;
            font-weight: 800;
            font-size: 1.1rem;
            text-decoration: none;
            transition: all 0.3s ease;
            box-shadow: 0 10px 30px rgba(29, 78, 216, 0.25);
          }

          .btn-secondary {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: transparent;
            color: var(--text);
            padding: 1.1rem 2.2rem;
            border: 2px solid var(--border);
            border-radius: 100px;
            font-weight: 800;
            font-size: 1.1rem;
            text-decoration: none;
            transition: all 0.3s ease;
          }

          .btn-secondary:hover {
            border-color: var(--text-muted);
            background: rgba(255,255,255,0.02);
          }

          .glass-panel {
            background: var(--card-bg);
            border: 1px solid var(--border);
            border-radius: 32px;
            box-shadow: 0 40px 80px rgba(0,0,0,0.15);
            position: relative;
            backdrop-filter: blur(20px);
          }

          .hover-lift {
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease;
          }
          
          .hover-lift:hover {
            transform: translateY(-6px);
            border-color: var(--primary);
          }

          @keyframes float {
            0% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-40px) scale(1.05); }
            100% { transform: translateY(0px) scale(1); }
          }

          @media (max-width: 1024px) {
            .container {
              grid-template-columns: 1fr !important;
            }
            .hero-title {
              font-size: 3.5rem;
            }
            .hero-actions {
              flex-wrap: wrap;
            }
            .hero-visual {
               max-width: 600px;
               margin: 4rem auto 0;
            }
          }

          @media (max-width: 640px) {
            .hero-title {
              font-size: 2.8rem;
            }
          }
        `}</style>
      </section>

      <CaseForCustomSoftwareSection />
      <WhatWeBuildSection />
      <EngineeringApproachSection />
      <TechStackGridSection />
      <ProductEngineeringFAQSection />
      <ProductEngineeringCTA />
    </>
  );
}

function CaseForCustomSoftwareSection() {
  const [expanded, setExpanded] = useState(false);
  return (
    <section id="case-for-custom" style={{ padding: '100px 1.5rem', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)' }}>
      <div className="container" style={{ maxWidth: '1250px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)', gap: '6rem', alignItems: 'center' }} className="case-grid">
          <div className="case-content">
            <div className="section-label">Why Custom?</div>
            <h2 className="section-title">The Case for Custom Software</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Every business reaches a point where off-the-shelf software stops working. The CRM does not match your sales process. The reporting tool cannot combine data from five systems. You stack subscriptions on top of subscriptions and build workarounds that break when the vendor updates.
            </p>
            <div style={{ maxHeight: expanded ? '400px' : '0px', overflow: 'hidden', transition: 'max-height 0.4s ease, opacity 0.3s ease', opacity: expanded ? 1 : 0 }}>
              <p style={{ color: 'var(--text)', fontSize: '1.1rem', lineHeight: 1.8, fontWeight: 700, marginBottom: '1.25rem' }}>
                Custom software solves this permanently. Built around your operational logic, your data structures, your compliance requirements, and your competitive differentiation.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                FI Digital builds this software. Not templates configured to look custom. Not low-code platforms with limitations you discover too late. Real, production-grade applications built with React, React Native, Python, FastAPI, and modern cloud infrastructure. You own the source code. You own the IP.
              </p>
            </div>
            <button onClick={() => setExpanded(!expanded)} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--primary)', fontWeight: 700, fontSize: '0.95rem', padding: 0, marginTop: '0.5rem' }}>
              {expanded ? 'Read less' : 'Read more'}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s ease' }}>
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className="case-examples glass-panel" style={{ padding: '3.5rem', background: 'var(--card-bg)', borderRadius: '32px', border: '1px solid var(--border)', boxShadow: 'var(--card-shadow)' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--text)', marginBottom: '2.5rem', letterSpacing: '-0.02em' }}>Competitive Differentiation</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
               <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 900, color: 'var(--text)', fontSize: '1.2rem', marginBottom: '0.75rem' }}><div style={{width: 8, height: 8, background: 'var(--primary)', borderRadius: '50%'}}></div> Logistics</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6, margin: 0, paddingLeft: '1.25rem', borderLeft: '2px solid rgba(255,255,255,0.05)' }}>A logistics company that builds its own dispatch optimisation system has an advantage over one using a generic SaaS tool.</p>
               </div>
               <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 900, color: 'var(--text)', fontSize: '1.2rem', marginBottom: '0.75rem' }}><div style={{width: 8, height: 8, background: 'var(--primary)', borderRadius: '50%'}}></div> Financial Services</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6, margin: 0, paddingLeft: '1.25rem', borderLeft: '2px solid rgba(255,255,255,0.05)' }}>A financial services firm that builds its own adviser portal controls the client experience end to end.</p>
               </div>
               <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 900, color: 'var(--text)', fontSize: '1.2rem', marginBottom: '0.75rem' }}><div style={{width: 8, height: 8, background: 'var(--primary)', borderRadius: '50%'}}></div> Healthcare</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6, margin: 0, paddingLeft: '1.25rem', borderLeft: '2px solid rgba(255,255,255,0.05)' }}>A healthcare provider that builds its own rostering system can account for award rates, compliance rules, and patient acuity in ways no off-the-shelf product can.</p>
               </div>
            </div>
            <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ padding: '0.5rem 1rem', background: 'rgba(29, 78, 216, 0.1)', color: 'var(--primary)', fontWeight: 900, borderRadius: '100px', fontSize: '1rem' }}>200+</div>
              <p style={{ color: 'var(--text-muted)', fontWeight: 800, fontSize: '1.05rem', margin: 0 }}>Projects Delivered. <span style={{ color: 'var(--text)' }}>Built to last.</span></p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 1024px) {
          .case-grid { grid-template-columns: 1fr !important; gap: 3rem !important; align-items: stretch !important; }
        }
      `}</style>
    </section>
  );
}


function WhatWeBuildSection() {
  const services = [
    {
      num: "01", color: "#1D4ED8",
      title: "Web Applications",
      icon: <Layout size={24} />,
      image: "/images/web-app-card.png",
      link: "/product-engineering/web-applications",
      chips: ["React", "Python", "FastAPI", "AWS / Azure"],
      content: "Customer portals, internal workflow tools, SaaS dashboards, and multi-tenant platforms. Built for your specific business logic. Deployed on Australian infrastructure. You own the code."
    },
    {
      num: "02", color: "#F97316",
      title: "Mobile Applications",
      icon: <Smartphone size={24} />,
      image: "/images/mobile-app-hero.png",
      link: "/product-engineering/mobile-applications",
      chips: ["React Native", "iOS & Android", "Offline-first"],
      content: "Native iOS and Android apps for field workers, customers, and enterprise teams. Offline-capable. Real-time sync. Biometric authentication. Camera and scanner integration."
    },
    {
      num: "03", color: "#8B5CF6",
      title: "SaaS & MVP Builds",
      icon: <Rocket size={24} />,
      image: "/images/saas-mvp-hero.png",
      link: "/product-engineering/saas-mvp",
      chips: ["12–16 wks", "Stripe billing", "Multi-tenant", "IP yours"],
      content: "From concept to paying customers in 12–16 weeks. Market validation, UX design, engineering, launch, and iteration. 30+ SaaS products launched."
    },
    {
      num: "04", color: "#0EA5E9",
      title: "Product Modernisation",
      icon: <RefreshCw size={24} />,
      image: "/images/product-modernisation-hero.png",
      link: "/product-engineering/product-modernisation",
      chips: ["No rip-and-replace", "Phased", "Zero data loss"],
      content: "Modernise legacy systems without losing business logic. Strangler fig migration, front-end refresh, API layer creation, database migration — all available."
    }
  ];

  return (
    <section id="what-we-build" style={{ padding: '100px 1.5rem', background: 'var(--bg)' }}>
      <div className="container" style={{ maxWidth: '1250px' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div className="section-label">Capabilities</div>
          <h2 className="section-title">What We Build</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '560px', margin: '1rem auto 0', lineHeight: 1.75 }}>
            Four product engineering capabilities — each a standalone practice with dedicated engineering teams.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.75rem' }} className="build-grid-2col">
          {services.map((svc) => (
            <div key={svc.title} style={{
              background: 'var(--card-bg)', borderRadius: '24px',
              border: '1px solid var(--border)',
              overflow: 'hidden', display: 'flex', flexDirection: 'column',
              boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
              transition: 'transform 0.22s ease, box-shadow 0.22s ease'
            }} className="build-card-new">

              {/* Image zone */}
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden', flexShrink: 0 }}>
                <Image
                  src={svc.image} alt={svc.title} fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
                {/* Colour overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `linear-gradient(135deg, ${svc.color}cc 0%, ${svc.color}55 60%, transparent 100%)`
                }} />
                {/* Number + icon badge */}
                <div style={{
                  position: 'absolute', top: '1.25rem', left: '1.5rem',
                  display: 'flex', alignItems: 'center', gap: '0.65rem'
                }}>
                  <div style={{
                    width: '42px', height: '42px', borderRadius: '11px',
                    background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff'
                  }}>{svc.icon}</div>
                  <span style={{ fontSize: '2rem', fontWeight: 900, color: 'rgba(255,255,255,0.5)', lineHeight: 1 }}>{svc.num}</span>
                </div>
              </div>

              {/* Content zone */}
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text)', margin: 0 }}>{svc.title}</h3>
                <p style={{ fontSize: '0.93rem', color: 'var(--text-muted)', lineHeight: 1.75, margin: 0, flex: 1 }}>{svc.content}</p>

                {/* Chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {svc.chips.map((chip, j) => (
                    <span key={j} style={{
                      padding: '0.25rem 0.75rem', borderRadius: '50px',
                      background: `${svc.color}12`, color: svc.color,
                      fontSize: '0.75rem', fontWeight: 700
                    }}>{chip}</span>
                  ))}
                </div>

                <Link href={svc.link} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  color: svc.color, fontWeight: 700, fontSize: '0.9rem',
                  textDecoration: 'none', marginTop: '0.25rem'
                }}>
                  Explore Capability <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .build-grid-2col { grid-template-columns: 1fr !important; }
        }
        .build-card-new:hover { transform: translateY(-5px); box-shadow: 0 12px 40px rgba(0,0,0,0.12) !important; }
      `}</style>
    </section>
  );
}

function EngineeringApproachSection() {
  const approaches = [
    {
      title: "Discovery & Architecture",
      duration: "Weeks 1–3",
      icon: <Search size={20} />,
      content: "We audit your requirements, map your data flows, define your API contracts, and produce a detailed technical architecture document. You review and approve before development begins."
    },
    {
      title: "Sprint Development",
      duration: "Weeks 4–10",
      icon: <Code size={20} />,
      content: "Two-week sprint cycles with fortnightly demos. You see working software every two weeks. Our engineers write clean, tested, documented code. We use CI/CD pipelines for automated testing and deployment. Every commit is reviewed."
    },
    {
      title: "Quality Assurance",
      duration: "Ongoing",
      icon: <CheckCircle size={20} />,
      content: "Automated unit tests, integration tests, and end-to-end tests run on every build. Our QA team conducts manual testing for user experience, edge cases, and cross-browser or cross-device compatibility."
    },
    {
      title: "Launch & Handover",
      duration: "Weeks 11–14",
      icon: <Flag size={20} />,
      content: "We deploy to your production environment, configure monitoring and alerting, conduct performance testing under load, and hand over complete documentation, source code, and operational runbooks."
    },
    {
      title: "Ongoing Support",
      duration: "Post-Launch",
      icon: <Headphones size={20} />,
      content: "Optional retainer for bug fixes, feature additions, and performance optimisation. Typically 8 to 16 hours per month. Your team can self-manage with our support available on demand."
    }
  ];

  return (
    <section id="engineering-approach" style={{ padding: '100px 1.5rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div className="section-label">Our Process</div>
          <h2 className="section-title">Engineering Methodology</h2>
          <p style={{ maxWidth: '850px', margin: '1.5rem auto 0', color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.7 }}>
            We follow a disciplined engineering methodology honed over 200 plus projects. Predictable cadences, rigorous QA, and complete transparency.
          </p>
        </div>

        <div className="vertical-timeline" style={{ position: 'relative', paddingLeft: '1rem' }}>
          {approaches.map((step, idx) => (
            <div key={step.title} style={{ display: 'flex', gap: '2rem', marginBottom: idx === approaches.length - 1 ? 0 : '1rem' }} className="timeline-row">
              {/* Timeline Indicator Column */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: '50%', 
                  background: 'var(--card-bg)', 
                  border: '2px solid var(--primary)',
                  color: 'var(--primary)',
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  zIndex: 2,
                  boxShadow: '0 0 20px rgba(29, 78, 216, 0.2)',
                  flexShrink: 0
                }}>
                  {step.icon}
                </div>
                {idx !== approaches.length - 1 && (
                  <div style={{ width: '2px', flex: 1, background: 'linear-gradient(to bottom, var(--primary) 0%, var(--border) 20%, var(--border) 100%)', margin: '0.75rem 0', minHeight: '60px' }}></div>
                )}
              </div>

              {/* Timeline Content */}
              <div style={{ paddingBottom: '3.5rem', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--text)', margin: 0 }}>{step.title}</h3>
                  <span style={{ 
                    padding: '0.4rem 1rem', 
                    background: 'rgba(255,255,255,0.03)', 
                    border: '1px solid var(--border)', 
                    borderRadius: '100px', 
                    fontSize: '0.9rem', 
                    color: 'var(--text-muted)', 
                    fontWeight: 700 
                  }}>
                    {step.duration}
                  </span>
                </div>
                <div style={{ 
                  background: 'var(--card-bg)', 
                  border: '1px solid var(--border)', 
                  padding: '1.75rem 2rem', 
                  borderRadius: '20px', 
                  boxShadow: 'var(--card-shadow)',
                  position: 'relative'
                }}>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, margin: 0 }}>
                    {step.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 600px) {
          .timeline-row { gap: 1rem !important; }
        }
      `}</style>
    </section>
  );
}

function ProductEngineeringFAQSection() {
  const faqs = [
    {
      q: "How much does custom software development cost in Australia?",
      a: "Custom software projects typically range from $50,000 for a focused MVP to $500,000 or more for enterprise-grade platforms. The key variables are complexity (number of integrations, user roles, and business rules), timeline, and ongoing support requirements. We provide a detailed estimate during the Discovery phase."
    },
    {
      q: "How long does it take to build a custom web application?",
      a: "A typical web application takes 10 to 16 weeks from Discovery to launch. Simpler applications (internal dashboards, single-purpose tools) can ship in 6 to 8 weeks. Complex, multi-user platforms with extensive integrations may take 20 to 24 weeks. We define the timeline during Discovery and hold to it."
    },
    {
      q: "Do I own the source code?",
      a: "Yes. You own 100% of the source code, intellectual property, and all documentation. We deliver the complete codebase to your repository at handover. There is no vendor lock-in and no ongoing licence fees for the code we write."
    },
    {
      q: "Can you build mobile apps for both iOS and Android?",
      a: "Yes. We use React Native for cross-platform mobile development, which means a single codebase runs on both iOS and Android. This reduces cost and development time without sacrificing performance. For cases requiring platform-specific functionality, we build native modules."
    },
    {
      q: "What if my project needs AI or data capabilities too?",
      a: "This is where FI Digital is uniquely positioned. Our four service pillars (Product Engineering, Data Platforms, AI Agents, Business Systems) are designed to work together. A customer portal can pull data from a Databricks-powered analytics layer. A mobile app can include an AI copilot. A SaaS platform can connect to your Zoho CRM. We design the architecture to support cross-pillar integration from day one."
    },
    {
      q: "Do you work with startups or only enterprise?",
      a: "Both. We build MVPs for funded startups (typically Seed to Series A) and enterprise-grade platforms for established companies. The engineering approach is the same. The difference is scope, compliance requirements, and integration complexity."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const toggleOpen = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section id="faq" style={{ padding: '100px 1.5rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
      <div className="container" style={{ maxWidth: '850px' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-label">FAQ</div>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="hover-lift"
                style={{ 
                  background: 'var(--card-bg)', 
                  border: '1px solid var(--border)', 
                  borderRadius: '16px', 
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  boxShadow: isOpen ? '0 15px 30px rgba(0,0,0,0.08)' : 'var(--card-shadow)'
                }}
              >
                <button 
                  onClick={() => toggleOpen(index)}
                  style={{ 
                    width: '100%', 
                    padding: '1.5rem 2rem', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    background: 'transparent', 
                    border: 'none', 
                    textAlign: 'left', 
                    cursor: 'pointer',
                    color: 'var(--text)',
                    fontSize: '1.15rem',
                    fontWeight: 800,
                    gap: '1rem'
                  }}
                >
                  {faq.q}
                  <ChevronDown 
                    size={22} 
                    style={{ 
                      flexShrink: 0,
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', 
                      transition: 'transform 0.3s ease',
                      color: isOpen ? 'var(--primary)' : 'var(--text-muted)'
                    }} 
                  />
                </button>
                <div 
                  style={{ 
                    maxHeight: isOpen ? '800px' : '0px', 
                    overflow: 'hidden', 
                    transition: 'all 0.4s ease',
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  <div style={{ padding: '0 2rem 1.75rem', color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TechStackGridSection() {
  const STACK = [
    {
      domain: "Front-End", color: "#1D4ED8",
      items: [
        { name: "React",        logo: "/images/react-nobg.png" },
        { name: "React Native", logo: "/images/react-nobg.png" },
        { name: "Next.js",      logo: "/images/nextjs-nobg.png" },
        { name: "TypeScript",   logo: "/images/typescript-nobg.png" },
      ]
    },
    {
      domain: "Back-End", color: "#059669",
      items: [
        { name: "Python",  logo: "/images/python-nobg.png" },
        { name: "FastAPI", logo: "/images/fastapi-nobg.png" },
        { name: "Node.js", logo: "/images/nodejs-nobg.png" },
        { name: "Django",  logo: "/images/django-nobg.png" },
      ]
    },
    {
      domain: "Database & Analytics", color: "#0891B2",
      items: [
        { name: "PostgreSQL",  logo: "/images/postgresql.png" },
        { name: "MongoDB",     logo: "/images/mongodb.png" },
        { name: "Redis",       logo: "/images/redis.png" },
        { name: "Snowflake",   logo: "/images/snowflake-nobg.png" },
        { name: "Databricks",  logo: "/images/databricks-nobg.png" },
      ]
    },
    {
      domain: "Infrastructure", color: "#7C3AED",
      items: [
        { name: "AWS",        logo: "/images/aws-nobg.png" },
        { name: "Azure AU",   logo: "/images/azure-nobg.png" },
        { name: "Docker",     logo: "/images/docker.png" },
        { name: "Kubernetes", logo: "/images/kubernetes.png" },
      ]
    },
    {
      domain: "DevOps", color: "#F59E0B",
      items: [
        { name: "Terraform",  logo: "/images/terraform.png" },
        { name: "GitHub Actions", logo: "/images/github-nobg.png" },
        { name: "Datadog",    logo: "/images/datadog-nobg.png" },
        { name: "Sentry",     logo: "/images/sentry-nobg.png" },
      ]
    }
  ];

  return (
    <section id="tech-stack" style={{ padding: '100px 1.5rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
      <div className="container" style={{ maxWidth: '1250px' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div className="section-label">Engineering Foundation</div>
          <h2 className="section-title">Technology Stack</h2>
          <p style={{ maxWidth: '620px', margin: '1.25rem auto 0', color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.75 }}>
            No religious attachment to frameworks. Every architecture decision is documented and explained before a single line of code is written.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
          {STACK.map((category) => (
            <div key={category.domain} style={{
              background: 'var(--card-bg)', borderRadius: '22px',
              border: '1px solid var(--border)',
              padding: '2rem 1.75rem',
              boxShadow: '0 2px 14px rgba(0,0,0,0.05)',
              transition: 'transform 0.2s ease'
            }} className="hover-lift">

              {/* Domain header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '10px', height: '10px', borderRadius: '50%',
                  background: category.color, flexShrink: 0
                }} />
                <h3 style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--text)',
                  textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>
                  {category.domain}
                </h3>
              </div>

              {/* Logo chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem' }}>
                {category.items.map((tech, idx) => (
                  <div key={idx} style={{
                    display: 'flex', alignItems: 'center', gap: '0.45rem',
                    padding: '0.4rem 0.8rem',
                    background: `${category.color}0d`,
                    border: `1px solid ${category.color}20`,
                    borderRadius: '9px'
                  }}>
                    <div style={{ position: 'relative', width: '18px', height: '18px', flexShrink: 0 }}>
                      <Image src={tech.logo} alt={tech.name} fill style={{ objectFit: 'contain' }} />
                    </div>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text)', whiteSpace: 'nowrap' }}>
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductEngineeringCTA() {
  return (
    <section id="engineering-cta" style={{ padding: '120px 1.5rem', background: '#1d4ed8', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle at right center, rgba(255,255,255,0.8) 0%, transparent 50%)' }}></div>
      <div className="container" style={{ maxWidth: '850px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <h2 style={{ fontSize: '3.5rem', fontWeight: 900, color: 'white', marginBottom: '1.5rem', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
          Ready to Build?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.95)', fontSize: '1.25rem', lineHeight: 1.7, marginBottom: '3.5rem', fontWeight: 400 }}>
          Bring us your operational challenge or your product concept. We will give you an honest technical assessment, a clear architecture plan, and a transparent timeline for delivery.
        </p>

        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/book-discovery" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: 'white',
            color: 'var(--primary)',
            padding: '1.1rem 2.2rem',
            borderRadius: '100px',
            fontSize: '1.1rem',
            fontWeight: 800,
            textDecoration: 'none',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease'
          }} className="btn-primary-hover">
            Book a Product Engineering Discovery Session <ArrowRight size={20} />
          </Link>
          <Link href="/case-studies#product-engineering" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            border: '2px solid rgba(255,255,255,0.3)',
            color: 'white',
            padding: '1.1rem 2.2rem',
            borderRadius: '100px',
            fontSize: '1.1rem',
            fontWeight: 800,
            textDecoration: 'none',
            transition: 'all 0.3s ease'
          }} className="btn-secondary-hover">
            View Product Engineering Case Studies <FileText size={20} />
          </Link>
        </div>
      </div>
      <style jsx>{`
        .btn-primary-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.3);
        }
        .btn-secondary-hover:hover {
          background: rgba(255,255,255,0.2) !important;
          border-color: rgba(255,255,255,0.5) !important;
          transform: translateY(-5px);
        }
        @media (max-width: 600px) {
           h2 { fontSize: '2.5rem' !important; }
        }
      `}</style>
    </section>
  );
}
