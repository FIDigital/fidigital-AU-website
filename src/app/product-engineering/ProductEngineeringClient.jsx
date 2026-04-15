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
        
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '1250px', display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div className="badge hover-lift">
              <Code2 size={16} /> <span>Product Engineering</span>
            </div>
            
            <h1 className="hero-title">
              Build Software That Creates <br />
              <span className="text-gradient">Competitive Advantage</span>
            </h1>
            
            <p className="hero-subtitle">
              Custom web applications, native mobile apps, SaaS platforms, and internal workflow tools. Engineered for your specific business logic. Deployed on your infrastructure. Owned by you. <strong style={{ color: 'var(--text)' }}>FI Digital — 200+ engineers, 10 years in production.</strong>
            </p>

            <div className="hero-actions">
              <Link href="/book-discovery" className="btn-primary hover-lift">
                Start a Discovery Sprint <ArrowRight size={20} />
              </Link>
              <Link href="/case-studies" className="btn-secondary hover-lift">
                Explore Case Studies
              </Link>
            </div>
          </div>
          
          <div className="hero-visual">
             <div className="glass-panel" style={{ padding: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
                  <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#EF4444' }}></div>
                  <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#F59E0B' }}></div>
                  <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#10B981' }}></div>
                </div>
                {/* Visual placeholder for software stack */}
                <div style={{ display: 'grid', gap: '1.5rem' }}>
                   <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid var(--border)', transition: 'all 0.3s ease' }} className="hover-lift">
                     <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', marginBottom: '1rem' }}><Smartphone className="text-primary" size={28}/> <h4 style={{ color: 'var(--text)', fontWeight: 800, fontSize: '1.15rem', margin: 0 }}>Native Mobile Apps</h4></div>
                     <div style={{ width: '80%', height: '8px', background: 'var(--primary)', opacity: 0.6, borderRadius: '100px' }}></div>
                   </div>
                   <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid var(--border)', transition: 'all 0.3s ease' }} className="hover-lift">
                     <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', marginBottom: '1rem' }}><Terminal className="text-primary" size={28}/> <h4 style={{ color: 'var(--text)', fontWeight: 800, fontSize: '1.15rem', margin: 0 }}>Cloud SaaS Platforms</h4></div>
                     <div style={{ width: '60%', height: '8px', background: 'var(--primary)', opacity: 0.6, borderRadius: '100px' }}></div>
                   </div>
                   <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid var(--border)', transition: 'all 0.3s ease' }} className="hover-lift">
                     <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', marginBottom: '1rem' }}><Database className="text-primary" size={28}/> <h4 style={{ color: 'var(--text)', fontWeight: 800, fontSize: '1.15rem', margin: 0 }}>Internal Workflow Tools</h4></div>
                     <div style={{ width: '90%', height: '8px', background: 'var(--primary)', opacity: 0.6, borderRadius: '100px' }}></div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <style jsx>{`
          .product-hero {
            position: relative;
            padding: 200px 1.5rem 120px;
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

          .badge {
            display: inline-flex;
            align-items: center;
            gap: 0.6rem;
            padding: 0.6rem 1.25rem;
            background: rgba(29, 78, 216, 0.1);
            color: var(--primary);
            border-radius: 100px;
            font-size: 0.95rem;
            font-weight: 800;
            margin-bottom: 2rem;
            border: 1px solid rgba(29, 78, 216, 0.2);
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          .hero-title {
            font-size: 4.5rem;
            font-weight: 900;
            line-height: 1.1;
            letter-spacing: -0.03em;
            color: var(--text);
            margin-bottom: 2rem;
          }

          .text-gradient {
            background: linear-gradient(135deg, var(--primary) 0%, rgba(13, 148, 136, 1) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .hero-subtitle {
            font-size: 1.35rem;
            line-height: 1.7;
            color: var(--text-muted);
            margin-bottom: 3rem;
            max-width: 700px;
          }

          .hero-actions {
            display: flex;
            gap: 1.25rem;
            align-items: center;
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
  return (
    <section id="case-for-custom" style={{ padding: '100px 1.5rem', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)' }}>
      <div className="container" style={{ maxWidth: '1250px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)', gap: '6rem', alignItems: 'center' }} className="case-grid">
          
          <div className="case-content">
            <div className="section-label">Why Custom?</div>
            <h2 className="section-title">The Case for Custom Software</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Every business reaches a point where off-the-shelf software stops working. The CRM does not match your sales process. The reporting tool cannot combine data from five systems. The customer portal looks like every other customer portal. You stack subscriptions on top of subscriptions, pay for features you do not use, and build workarounds that break when the vendor updates.
            </p>
            <p style={{ color: 'var(--text)', fontSize: '1.15rem', lineHeight: 1.8, fontWeight: 700, marginBottom: '1.5rem' }}>
              Custom software solves this permanently. It is built around your operational logic, your data structures, your compliance requirements, and your competitive differentiation.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.8 }}>
              FI Digital builds this software. Not templates configured to look custom. Not low-code platforms with limitations you discover too late. Real, production-grade applications built with React, React Native, Python, FastAPI, and modern cloud infrastructure. You own the source code. You own the IP. You run it on your infrastructure.
            </p>
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
              <p style={{ color: 'var(--text-muted)', fontWeight: 800, fontSize: '1.05rem', margin: 0 }}>
                Projects Delivered. <span style={{ color: 'var(--text)' }}>Built to last.</span>
              </p>
            </div>
          </div>

        </div>
      </div>
      <style jsx>{`
        @media (max-width: 1024px) {
          .case-grid {
             grid-template-columns: 1fr !important;
             gap: 3rem !important;
             align-items: stretch !important;
          }
        }
      `}</style>
    </section>
  );
}

function WhatWeBuildSection() {
  const services = [
    {
      title: "Web Applications",
      icon: <Layout size={36} />,
      link: "/product-engineering/web-applications",
      content: "Customer portals, internal workflow tools, dashboards, admin panels, and multi-tenant SaaS platforms. Built with React for fast, responsive front-ends and Python or FastAPI for robust backends. Deployed on AWS or Azure with Australian data residency. We handle authentication, role-based access, API design, database architecture, and production monitoring."
    },
    {
      title: "Mobile Applications",
      icon: <Smartphone size={36} />,
      link: "/product-engineering/mobile-applications",
      content: "Native iOS and Android apps using React Native for cross-platform efficiency without compromising on performance. Offline-capable for field workers in remote locations. Real-time sync, push notifications, biometric authentication, and camera or scanner integration for document capture. Our mobile apps serve logistics drivers, field service engineers, healthcare workers, and sales teams."
    },
    {
      title: "SaaS & MVP Builds",
      icon: <Rocket size={36} />,
      link: "/product-engineering/saas-mvp",
      content: "Turn your business idea into a production-ready SaaS platform. We take you from concept to paying customers in 12 to 16 weeks. Market validation, user experience design, architecture planning, development, launch, and iteration. We have helped founders and internal innovation teams build products that generate revenue within their first quarter."
    },
    {
      title: "Product Modernisation",
      icon: <RefreshCw size={36} />,
      link: "/product-engineering/product-modernisation",
      content: "Your legacy application still works but it is expensive to maintain, difficult to recruit for, and impossible to extend. We modernise legacy systems with modern architecture, without losing the business logic your team depends on. Migration from monolith to microservices. UI refresh from server-rendered pages to modern React. API layer creation for integration. Database migration to cloud-native options."
    }
  ];

  return (
    <section id="what-we-build" style={{ padding: '100px 1.5rem', background: 'var(--bg)' }}>
      <div className="container" style={{ maxWidth: '1250px' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-label">Capabilities</div>
          <h2 className="section-title">What We Build</h2>
        </div>
        
        <div className="build-grid layout-2-col">
          {services.map((svc) => (
            <div key={svc.title} className="build-card hover-lift" style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--border)',
              borderRadius: '24px',
              padding: '3rem',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: 'var(--card-shadow)',
              minHeight: '100%'
            }}>
              <div style={{
                width: '72px',
                height: '72px',
                background: 'linear-gradient(135deg, rgba(29, 78, 216, 0.1) 0%, rgba(13, 148, 136, 0.1) 100%)',
                color: 'var(--primary)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '2rem',
                flexShrink: 0
              }}>
                {svc.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--text)', marginBottom: '1rem', letterSpacing: '-0.01em' }}>
                {svc.title}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, margin: 0, flex: 1, marginBottom: '2.5rem' }}>
                {svc.content}
              </p>
              <Link href={svc.link} style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--primary)',
                background: 'rgba(29, 78, 216, 0.08)',
                padding: '0.85rem 1.5rem',
                borderRadius: '12px',
                fontWeight: 800,
                fontSize: '1rem',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                marginTop: 'auto',
                alignSelf: 'flex-start'
              }} className="build-link hover-link-shift">
                Explore Capability <ArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .layout-2-col {
          display: grid;
          gap: 2rem;
          grid-template-columns: repeat(1, 1fr);
        }
        @media (min-width: 768px) {
          .layout-2-col {
            grid-template-columns: repeat(2, 1fr);
          }
        }
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
  const stack = [
    {
      domain: "Front-End",
      icon: <Layout size={24} />,
      items: ["React (web)", "React Native (mobile)", "Next.js (SSR)", "TypeScript"]
    },
    {
      domain: "Back-End",
      icon: <Server size={24} />,
      items: ["Python", "FastAPI", "Django", "Node.js"]
    },
    {
      domain: "Database",
      icon: <Database size={24} />,
      items: ["PostgreSQL", "MongoDB", "Redis", "Snowflake (analytics)"]
    },
    {
      domain: "Infrastructure",
      icon: <Cloud size={24} />,
      items: ["AWS (EC2, Lambda, S3, RDS, ECS)", "Azure (App Service, Functions, Cosmos DB)", "Docker", "Kubernetes"]
    },
    {
      domain: "DevOps",
      icon: <Cog size={24} />,
      items: ["GitHub Actions", "Terraform", "CloudFormation", "Datadog", "Sentry"]
    }
  ];

  return (
    <section id="tech-stack" style={{ padding: '100px 1.5rem', background: 'var(--bg)' }}>
      <div className="container" style={{ maxWidth: '1250px' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div className="section-label">Engineering Foundation</div>
          <h2 className="section-title">Technology Stack</h2>
          <p style={{ maxWidth: '850px', margin: '1.5rem auto 0', color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.7 }}>
            We choose the right tool for the job. <strong style={{ color: 'var(--text)' }}>No religious attachment to frameworks. No vendor lock-in.</strong> Every architecture decision is documented and explained before we write a single line of code.
          </p>
        </div>

        <div className="tech-stack-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
          {stack.map((category) => (
            <div key={category.domain} style={{ 
              background: 'var(--card-bg)', 
              border: '1px solid var(--border)', 
              borderRadius: '24px', 
              padding: '2.5rem 2rem', 
              transition: 'all 0.3s ease',
              boxShadow: 'var(--card-shadow)'
            }} className="hover-lift">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                 <div style={{ color: 'var(--primary)', background: 'rgba(29, 78, 216, 0.1)', padding: '0.75rem', borderRadius: '12px' }}>
                    {category.icon}
                 </div>
                 <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--text)', margin: 0 }}>{category.domain}</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {category.items.map((item, idx) => (
                  <li key={idx} style={{ color: 'var(--text-muted)', fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                     <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--border)' }}></div> {item}
                  </li>
                ))}
              </ul>
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
