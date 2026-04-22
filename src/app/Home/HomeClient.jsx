"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Zap,
  MessageCircleMore,
  ArrowRight,
  Database,
  Network,
  Code,
  Cpu,
  Bot,
  Shield,
  Settings,
  CheckCircle2,
  ChevronDown,
  PenTool,
  Hammer,
  LayoutDashboard,
  ShieldCheck,
  Award,
  FileText
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// --- SUB-COMPONENTS (IN-FILE) ---

function HomeHero() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".hero-reveal", {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
<section
  className="hero-section"
  ref={containerRef}
  style={{
    position: "relative",
    minHeight: "90vh",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    padding: "clamp(120px, 15vh, 160px) 1.5rem 100px",
    background: "var(--bg)",
  }}
>
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
      src="/images/ai-copilot-panel.png"
      alt=""
      aria-hidden="true"
      fill
      style={{
        objectFit: "cover",
        maskImage: "radial-gradient(circle at right, black, transparent 80%)",
        WebkitMaskImage: "radial-gradient(circle at right, black, transparent 80%)",
      }}
    />
  </div>

  <div
    className="container"
    style={{
      position: "relative",
      zIndex: 3,
      textAlign: "left",
    }}
  >
    <div
      style={{
        maxWidth: "1000px",
        textAlign: "left",
      }}
    >
      <h1
        className="hero-title hero-reveal"
        style={{
          fontSize: "clamp(2rem, 5.5vw, 4rem)",
          fontWeight: 900,
          lineHeight: 1.1,
          marginBottom: "2rem",
          maxWidth: "1000px",
          margin: "0 0 2rem",
          textWrap: "balance",
          opacity: 0,
          transform: "translateY(10px)",
        }}
      >
        We Build Software. We Engineer Data. We Deploy AI. <br />
        <span style={{ fontWeight: 300, background: "linear-gradient(135deg, var(--primary) 0%, #6366F1 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          We Modernise Systems.
        </span>
      </h1>

      <p
        className="hero-reveal"
        style={{
          fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
          color: "var(--primary)",
          fontWeight: 800,
          maxWidth: "800px",
          marginBottom: "1.5rem",
          lineHeight: 1.6,
          opacity: 0,
          fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
          color: "var(--text-muted)",
          maxWidth: "800px",
          margin: "0 0 3rem",
          lineHeight: 1.7,
          textWrap: "balance",
          opacity: 0,
          transform: "translateY(10px)",
        }}
      >
        FI Digital is an engineering-led transformation partner for Australian enterprise. Custom products. Governed data platforms. AI agents that reason and act. Business systems that actually work together. 200+ engineers across Melbourne, Sydney, India, UAE, and London. Ten years in production. Australian data residency on every engagement.
      </p>

      <div
        className="hero-actions hero-reveal"
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "3rem",
          opacity: 0,
          transform: "translateY(10px)",
        }}
      >
        <Link href="/contact" className="btn-primary" style={{ height: "42px", padding: "0 1.5rem", fontSize: "0.9rem" }}>
          Start Strategy Session <ArrowRight size={18} />
        </Link>

        <Link href="#pillars" className="btn-secondary" style={{ height: "42px", padding: "0 1.5rem", fontSize: "0.9rem" }}>
          Explore Pillars
        </Link>
      </div>

    </div>
  </div>
</section>
  );
}

function FourPillarsSection() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const pillars = [
    {
      title: "Product Engineering",
      icon: <Code size={32} />,
      link: "/product-engineering",
      content: "Product Engineering builds the software your business runs on. Not templates. Not configurations. Custom web applications, native mobile apps, internal workflow tools, SaaS platforms, and customer portals designed around your specific operational logic. We use React, React Native, Python, and FastAPI to build products that create genuine competitive advantage."
    },
    {
      title: "Data Platforms & Intelligence",
      icon: <Database size={32} />,
      link: "/data-platforms",
      content: "Data Platforms and Intelligence builds the foundation everything else depends on. We design and deploy governed data platforms on Databricks, Snowflake, and Microsoft Fabric. Lakehouse architecture. Medallion pipelines. BI dashboards that your board actually trusts. ESG reporting that satisfies regulators. This is not a data warehouse migration exercise. This is building the analytical nervous system your organisation needs to make decisions at speed."
    },
    {
      title: "AI Agents & Automation",
      icon: <Network size={32} />,
      link: "/ai-agents",
      content: "AI Agents and Automation takes your data and puts it to work. We build governed AI systems using Claude, GPT-4o, LangChain, and n8n that go beyond chatbots. Our AI agents read documents, extract structured data, reason about business rules, make decisions within guardrails, and execute workflows autonomously. RAG pipelines retrieve your institutional knowledge. Copilots assist your team. Digital workers handle the repetitive tasks that consume your best people."
    },
    {
      title: "Business Systems Modernisation",
      icon: <Settings size={32} />,
      link: "/business-systems",
      content: "Business Systems Modernisation protects your existing investment. Zoho CRM, Books, Inventory, Creator, and Desk form the operational backbone for hundreds of Australian businesses. We are an award-winning Zoho Premium Partner. But modernisation means more than Zoho. It means cleaning up integrations, layering AI on top of legacy workflows, connecting your CRM to your data platform, and making your operational systems work together instead of against each other."
    }
  ];

  return (
    <section id="four-pillars" style={{ padding: '100px 1.5rem', background: 'var(--bg-secondary)' }}>
      <div className="container" style={{ maxWidth: '1400px' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div className="section-label">Four Pillars</div>
          <h2 className="section-title">What We Do</h2>
          <p style={{ maxWidth: '850px', margin: '1.5rem auto 0', color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.7 }}>
            Most technology firms do one thing well. We do four, and we connect them. FI Digital operates across four integrated service lines, each designed to solve a different layer of the enterprise technology challenge.
          </p>
        </div>

        <div className="pillars-grid layout-4-col">
          {pillars.map((pillar, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div key={pillar.title} className="pillar-modern-card hover-lift" style={{ 
                padding: '2.5rem 2rem', 
                background: 'var(--card-bg)', 
                borderRadius: '24px', 
                border: '1px solid var(--border)',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 'var(--card-shadow)',
                position: 'relative',
                minHeight: '100%',
                transition: 'all 0.4s ease'
              }}>
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  background: 'linear-gradient(135deg, rgba(29, 78, 216, 0.1) 0%, rgba(13, 148, 136, 0.1) 100%)', 
                  color: 'var(--primary)', 
                  borderRadius: '16px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  flexShrink: 0
                }}>
                  {pillar.icon}
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 900, lineHeight: 1.3, color: 'var(--text)', marginBottom: '1rem' }}>
                  {pillar.title}
                </h3>
                
                <div style={{ flex: 1, marginBottom: '2rem' }}>
                  <div style={{
                    maxHeight: isExpanded ? '600px' : '82px',
                    transition: 'max-height 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <p style={{ 
                      color: 'var(--text-muted)', 
                      fontSize: '1rem', 
                      lineHeight: 1.7, 
                      margin: 0,
                    }}>
                      {pillar.content}
                    </p>
                    
                    {/* Fade out gradient for collapsed state */}
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '45px',
                      background: 'linear-gradient(to top, var(--card-bg) 5%, transparent)',
                      opacity: isExpanded ? 0 : 1,
                      transition: 'opacity 0.4s ease',
                      pointerEvents: 'none'
                    }} />
                  </div>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', flexWrap: 'wrap', gap: '1rem' }}>
                  <button 
                    onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
                    style={{ 
                      background: 'none', border: 'none', color: 'var(--text)', opacity: 0.8,
                      fontWeight: 700, padding: 0, display: 'flex', alignItems: 'center', gap: '0.4rem', 
                      fontSize: '0.9rem', cursor: 'pointer', outline: 'none', transition: 'opacity 0.2s ease'
                    }}
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                    <ChevronDown size={14} style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
                  </button>
                  
                  <Link href={pillar.link} style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '0.5rem', 
                    color: 'var(--primary)', 
                    background: 'rgba(29, 78, 216, 0.08)',
                    padding: '0.6rem 1rem',
                    borderRadius: '10px',
                    fontWeight: 800, 
                    fontSize: '0.9rem', 
                    textDecoration: 'none', 
                    transition: 'all 0.3s ease'
                  }} className="pillar-link hover-link-shift">
                    Explore <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .layout-4-col {
          display: grid;
          gap: 2rem;
          grid-template-columns: repeat(1, 1fr);
        }
        
        @media (min-width: 640px) {
          .layout-4-col {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (min-width: 1024px) {
          .layout-4-col {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .hover-lift { transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        .hover-lift:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.06); border-color: rgba(29, 78, 216, 0.3); }
      `}</style>
    </section>
  );
}

function TechStackSection() {
  const logos = [
    { name: "React", src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Python", src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
    { name: "Databricks", src: "https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png" },
    { name: "Snowflake", src: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg" },
    { name: "Microsoft Fabric", src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
    { name: "Claude (Anthropic)", src: "/images/claude.png" },
    { name: "GPT-4o (OpenAI)", src: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
    { name: "LangChain", src: "https://avatars.githubusercontent.com/u/126733545" },
    { name: "n8n", src: "/images/n8n.png" },
    { name: "Zoho", src: "/images/zoho-logo-nobg.png" },
    { name: "AWS", src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Microsoft Azure", src: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg" }
  ];

  const marqueeItems = [...logos, ...logos, ...logos];

  return (
    <section id="tech-stack" style={{ padding: '100px 0', background: 'var(--bg)', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '1000px', textAlign: 'center', marginBottom: '5rem' }}>
        <div className="section-label">Technology Stack</div>
        <h2 className="section-title">The Platforms That Matter</h2>
        <p style={{ margin: '1.5rem auto 0', color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.8 }}>
          We build on the platforms that matter. React and React Native for front-end experiences. Python and FastAPI for backend intelligence. Databricks for lakehouse architecture. Snowflake for cloud-native analytics. Microsoft Fabric for unified enterprise intelligence. Claude and GPT-4o for reasoning and language understanding. LangChain for agent orchestration. n8n for workflow automation. Zoho for business operations. AWS and Azure for Australian-hosted infrastructure.
          <br/><br/>
          This is not a collection of logos. It is an integrated engineering ecosystem where every component has a specific job and they all talk to each other. Deployed in production across Financial Services, Healthcare, Resources, and Logistics. <strong style={{ color: 'var(--text)' }}>Australian data residency guaranteed.</strong>
        </p>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee">
          {marqueeItems.map((logo, idx) => (
            <div key={`${logo.name}-${idx}`} className="marquee-item">
              <img 
                src={logo.src} 
                alt={logo.name} 
                className="tech-logo"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="logo-fallback" style={{ display: 'none', fontWeight: 800, fontSize: '1.2rem', color: 'var(--text-muted)' }}>
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-wrapper {
          display: flex;
          overflow: hidden;
          position: relative;
          width: 100%;
          background: linear-gradient(to right, var(--bg-secondary) 0%, rgba(29, 78, 216, 0.03) 50%, var(--bg-secondary) 100%);
          padding: 5rem 0;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          box-shadow: inset 0 0 40px rgba(0,0,0,0.02);
        }
        
        .marquee {
          display: flex;
          gap: 2rem;
          align-items: center;
          animation: scroll 45s linear infinite;
          width: max-content;
        }

        .marquee:hover {
          animation-play-state: paused;
        }

        .marquee-item {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 220px;
          height: 110px;
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 1.5rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.04);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .marquee-item:hover {
          border-color: rgba(29, 78, 216, 0.3);
          box-shadow: 0 20px 40px rgba(29, 78, 216, 0.15);
          transform: translateY(-5px);
        }

        .tech-logo {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 4px 6px rgba(0,0,0,0.06));
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          user-select: none;
        }

        .marquee-item:hover .tech-logo {
          transform: scale(1.1);
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-33.3333% - 0.667rem)); } 
        }
      `}</style>
    </section>
  );
}

function IndustrySection() {
  const industries = [
    {
      title: "Financial Services & Wealth Management",
      image: "/finance-hero.png",
      link: "/industries/financial-services-wealth",
      bullets: [
        "Fraud detection pipelines on Databricks",
        "AI agents for KYC and AML compliance",
        "Modernised adviser CRM systems",
        "Regulatory reporting (APRA and ASIC)"
      ]
    },
    {
      title: "Healthcare and Aged Care",
      image: "/compliance-hero.png",
      link: "/industries/healthcare-aged-care",
      bullets: [
        "Patient data platforms & analytics",
        "Mobile apps for care coordination",
        "Automated rostering and compliance",
        "Administrative operational dashboards"
      ]
    },
    {
      title: "Resources, Mining & Logistics",
      image: "/delivery-hero.png",
      link: "/industries/resources-mining-logistics",
      bullets: [
        "Telemetry for predictive maintenance",
        "AI for dispatch optimisation",
        "Real-time supply-chain analytics",
        "Offline remote field operations apps"
      ]
    }
  ];

  return (
    <section id="industries" style={{ padding: '100px 1.5rem', background: 'var(--bg)' }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-label">Industries We Serve</div>
          <h2 className="section-title">Where We Create Impact</h2>
          <p style={{ maxWidth: '1000px', margin: '1.5rem auto 0', color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.8 }}>
            Our four service lines converge differently depending on your industry. These are not theoretical capabilities. They are production systems processing real transactions, managing real patient records, and optimising real supply chains across Australia today.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {industries.map((ind) => (
            <div key={ind.title} className="industry-bg-card group" style={{ 
              borderRadius: '24px', 
              overflow: 'hidden', 
              position: 'relative',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              height: '520px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              background: `url(${ind.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              padding: '2.5rem 2rem'
            }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.1) 100%)',
                zIndex: 1,
                transition: 'all 0.5s ease'
              }} className="overlay" />

              <div style={{ position: 'relative', zIndex: 2 }}>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 900, color: 'white', marginBottom: '1.5rem', lineHeight: 1.25 }}>
                  {ind.title}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {ind.bullets.map(b => (
                    <li key={b} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', color: 'rgba(255,255,255,0.9)', fontSize: '1rem', lineHeight: 1.5, fontWeight: 500 }}>
                      <CheckCircle2 size={18} className="text-primary" style={{ flexShrink: 0, marginTop: '2px' }} />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link href={ind.link} style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'white',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  padding: '0.75rem 1.5rem',
                  background: 'rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease'
                }} className="btn-glass">
                  Learn More <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .industry-bg-card {
          transform: translateY(0);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .industry-bg-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.25);
        }
        .industry-bg-card:hover .overlay {
          background: linear-gradient(to top, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.3) 100%);
        }
        .btn-glass:hover {
          background: var(--primary) !important;
          border-color: var(--primary) !important;
          transform: translateX(5px);
        }
      `}</style>
    </section>
  );
}

function MethodologyDeliverySection() {
  const steps = [
    {
      id: "01",
      title: "Discover",
      duration: "Weeks 1–2",
      icon: <Search size={28} />,
      desc: "Audit current systems, interview stakeholders, and quantify the cost of manual processes. We produce a detailed Discovery Report with architecture recommendations, timeline, and investment estimate."
    },
    {
      id: "02",
      title: "Design",
      duration: "Weeks 3–4",
      icon: <PenTool size={28} />,
      desc: "Architect the solution: data models, API contracts, agent decision logic, integration maps, and UX wireframes. You review and approve before a single line of production code is written."
    },
    {
      id: "03",
      title: "Build",
      duration: "Weeks 5–12",
      icon: <Hammer size={28} />,
      desc: "Our engineering team (avg 8 years experience) constructs the solution. Fortnightly demos, code reviews, and stakeholder check-ins ensure alignment throughout."
    },
    {
      id: "04",
      title: "Operate",
      duration: "Ongoing",
      icon: <LayoutDashboard size={28} />,
      desc: "Comprehensive hand-over, documentation, training, and support retainer. Your team controls the system; we stay on call for refinement and optimisation."
    }
  ];

  return (
    <section id="methodology-delivery" style={{ padding: '100px 1.5rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
      <div className="container" style={{ maxWidth: '1300px' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div className="section-label">How We Deliver</div>
          <h2 className="section-title">Discover, Design, Build, Operate</h2>
          <p style={{ maxWidth: '1000px', margin: '1.5rem auto 0', color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.8 }}>
            Every engagement follows our structured methodology. Most engagements run 10 to 16 weeks from Discovery to Operate. Some simpler projects ship in 6 weeks. Complex multi-pillar transformations may span 6 months. <strong style={{ color: 'var(--text)' }}>We give you a timeline during Discovery and we stick to it.</strong>
          </p>
        </div>

        {/* Horizontal Timeline Graphic */}
        <div className="timeline-horizontal">
          {steps.map((step, idx) => (
            <div key={step.id} className="timeline-item hover-lift">
              <div className="timeline-header">
                <div className="timeline-icon">
                  {step.icon}
                </div>
                {idx !== steps.length - 1 && <div className="timeline-connector"></div>}
              </div>
              <div className="timeline-content">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.1em' }}>{step.id}</span>
                  <div style={{ padding: '0.3rem 0.8rem', background: 'rgba(29, 78, 216, 0.08)', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)' }}>
                    {step.duration}
                  </div>
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1rem', color: 'var(--text)' }}>
                  {step.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.65, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .timeline-horizontal {
          display: flex;
          justify-content: space-between;
          position: relative;
        }
        .timeline-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding-right: 2rem;
          position: relative;
        }
        .timeline-item:last-child {
          padding-right: 0;
        }
        .timeline-header {
          position: relative;
          display: flex;
          align-items: center;
          margin-bottom: 2.5rem;
        }
        .timeline-icon {
          width: 72px;
          height: 72px;
          background: var(--bg);
          border: 2px solid var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          z-index: 2;
          box-shadow: 0 10px 30px rgba(29, 78, 216, 0.15);
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }
        .timeline-connector {
          flex: 1;
          height: 2px;
          background: linear-gradient(90deg, var(--primary) 0%, rgba(29, 78, 216, 0.1) 100%);
          margin-left: -5px;
          z-index: 1;
        }
        .timeline-content {
          background: var(--card-bg);
          padding: 2.5rem 2rem;
          border-radius: 24px;
          border: 1px solid var(--border);
          box-shadow: var(--card-shadow);
          height: 100%;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .hover-lift:hover .timeline-content {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.06);
          border-color: rgba(29, 78, 216, 0.3);
        }
        .hover-lift:hover .timeline-icon {
          transform: scale(1.1);
        }

        @media (max-width: 900px) {
          .timeline-horizontal {
            flex-direction: column;
            gap: 2.5rem;
          }
          .timeline-item {
            padding-right: 0;
            flex-direction: row;
            gap: 2rem;
          }
          .timeline-header {
            flex-direction: column;
            margin-bottom: 0;
          }
          .timeline-connector {
            width: 2px;
            height: 100%;
            margin-left: 0;
            margin-top: -5px;
            background: linear-gradient(180deg, var(--primary) 0%, rgba(29, 78, 216, 0.1) 100%);
          }
        }
        @media (max-width: 600px) {
          .timeline-item {
            flex-direction: column;
            gap: 1.5rem;
          }
          .timeline-connector {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}

// --- GLOBAL DELIVERY SECTION ---
function GlobalDeliverySection() {
  return (
    <section id="global-delivery" style={{ padding: '100px 1.5rem', background: 'var(--bg)' }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="gds-grid">
          <div>
            <div className="section-label">Our Presence</div>
            <h2 className="section-title">Global Delivery,<br/>Australian Focus</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              FI Digital is part of Digital Synergy Ventures, an Australian-registered entity with 200 plus engineers across five locations. <strong style={{ color: 'var(--text)' }}>Melbourne is our headquarters</strong> and the centre of our enterprise relationships. Sydney supports our Financial Services and Healthcare clients. Our India engineering centre (150 plus engineers across four cities) provides deep technical capacity at scale. Our UAE hub serves regional clients. Our UK entity (Digital Synergy Ventures UK Limited) operates independently in the British market.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Your engagement is led by Australian-based senior consultants and architects. Our delivery team is experienced, certified, and operates under Australian employment standards and contractual terms. 
            </p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              {[
                "Data in Australian infrastructure",
                "Your IP is fully yours",
                "Source code ownership",
                "Contractual SLAs & Insurance"
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1rem', fontWeight: 700, color: 'var(--text)' }}>
                  <ShieldCheck size={22} className="text-primary" style={{ flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ position: 'relative' }}>
             <img src="/delivery-hubs.png" alt="Global Delivery Hubs map" style={{ width: '100%', height: 'auto', borderRadius: '16px', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))', border: '1px solid var(--border)' }} 
             onError={(e) => { e.target.src = '/global-scale.png'; }} />
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 900px) {
          .gds-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

// --- SOCIAL PROOF SECTION ---
function SocialProofSection() {
  const clients = ["Silk Logistics", "BlueNRG", "Civil Survey Solutions", "Drova", "Visual Exposure", "Warequip"];
  return (
    <section id="social-proof" style={{ padding: '100px 1.5rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
      <div className="container" style={{ maxWidth: '1000px', textAlign: 'center' }}>
        <div className="section-label">Proven Track Record</div>
        <h2 className="section-title">Client Proof & Outcomes</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.8, margin: '1.5rem auto 3rem', maxWidth: '850px' }}>
          <strong style={{ color: 'var(--text)' }}>200 plus projects delivered across 10 years.</strong> We do not publish vanity metrics. We publish outcomes. Ask us for references in your industry. We will connect you with clients who will tell you exactly what the experience was like.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '4rem' }}>
          {clients.map((c) => (
            <div key={c} style={{ padding: '0.75rem 1.5rem', background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '100px', fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)', boxShadow: 'var(--card-shadow)' }}>
              {c}
            </div>
          ))}
          <div style={{ padding: '0.75rem 1.5rem', background: 'transparent', border: '1px dashed var(--border)', borderRadius: '100px', fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-muted)' }}>
            + dozens of mid-market Australian enterprises
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
           {[
             { title: "Zoho Innovator of the Year" },
             { title: "Zoho Premium Partner" },
             { title: "AWS Partner" },
             { title: "Microsoft Partner" }
           ].map((partner) => (
             <div key={partner.title} className="hover-lift" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', padding: '2rem 1rem', background: 'var(--card-bg)', borderRadius: '20px', border: '1px solid var(--border)', boxShadow: 'var(--card-shadow)', transition: 'all 0.3s ease' }}>
                <Award size={40} color="var(--primary)" />
                <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text)', textAlign: 'center' }}>{partner.title}</span>
             </div>
           ))}
        </div>
      </div>
      <style jsx>{`
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08) !important;
          border-color: var(--primary) !important;
        }
      `}</style>
    </section>
  );
}

// --- NEXT STEPS SECTION ---
function NextStepsSection() {
  return (
    <section id="next-steps" style={{ padding: '120px 1.5rem', background: '#1d4ed8', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle at right center, rgba(255,255,255,0.8) 0%, transparent 50%)' }}></div>
      <div className="container" style={{ maxWidth: '850px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <h2 style={{ fontSize: '3.5rem', fontWeight: 900, color: 'white', marginBottom: '1.5rem', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
          Take the Next Step
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.95)', fontSize: '1.25rem', lineHeight: 1.7, marginBottom: '3rem', fontWeight: 400 }}>
          Not sure where to start? Book a free 30-minute Discovery Session with one of our senior consultants. No sales pitch. No pressure. Just a structured conversation about your current technology landscape, your business objectives, and where engineering, data, AI, or systems modernisation could create the most impact. 
          <br/><br/>
          We will tell you honestly whether we are the right fit. If we are, we will propose a Discovery engagement. If we are not, we will tell you who is.
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
            Book a Free Discovery Session <ArrowRight size={20} />
          </Link>
          <Link href="/case-studies" style={{
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
            View Our Case Studies <FileText size={20} />
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

// --- FAQ SECTION ---
function FAQSection() {
  const faqs = [
    {
      q: "What does FI Digital do?",
      a: "FI Digital is an engineering-led transformation partner for Australian enterprise. We operate across four service lines: Product Engineering (custom web and mobile applications), Data Platforms and Intelligence (Databricks, Snowflake, Microsoft Fabric), AI Agents and Automation (governed AI systems using Claude, GPT-4o, and LangChain), and Business Systems Modernisation (Zoho CRM, integrations, workflow automation). We help organisations build software, engineer data foundations, deploy AI into real workflows, and modernise their existing business systems."
    },
    {
      q: "Where is FI Digital based?",
      a: "Our headquarters are in Melbourne, Victoria. We have a presence in Sydney for Financial Services and Healthcare clients. Our engineering centre in India provides 150 plus engineers. We also operate in the UAE and UK. All Australian engagements are led by Melbourne-based senior consultants."
    },
    {
      q: "Does FI Digital only do Zoho?",
      a: "No. Zoho is one of four service pillars. We are an award-winning Zoho Premium Partner, but we also build custom software (Product Engineering), design and deploy data platforms on Databricks, Snowflake, and Microsoft Fabric (Data Platforms and Intelligence), and build governed AI agents (AI Agents and Automation). Many clients engage us across multiple pillars."
    },
    {
      q: "What industries does FI Digital serve?",
      a: "We serve three primary industries in Australia: Financial Services and Wealth Management, Healthcare and Aged Care, and Resources, Mining, and Logistics. Our four service lines adapt to each industry with specific use cases, compliance requirements, and integration patterns."
    },
    {
      q: "How long does a typical project take?",
      a: "Most engagements run 10 to 16 weeks from Discovery to Operate. Some simpler projects (CRM configuration, single-workflow automation) ship in 6 weeks. Complex multi-pillar transformations may span 6 months. We provide a detailed timeline during the Discovery phase."
    },
    {
      q: "Is my data kept in Australia?",
      a: "Yes. All four service lines can be delivered with Australian-hosted infrastructure. We deploy on AWS Sydney (ap-southeast-2), Azure Australia East, and Zoho Australian data centres. AI models run via AWS Bedrock and Azure OpenAI Service, both with Australian data residency options."
    },
    {
      q: "How is FI Digital different from other consulting firms?",
      a: "We are engineering-led, not advisory-led. We do not produce PowerPoint recommendations and leave. We build production systems, write code, deploy infrastructure, and stay accountable for outcomes. Our 200 plus engineers have an average of 8 years experience. We carry professional indemnity insurance and provide contractual SLAs."
    },
    {
      q: "Can FI Digital integrate with our existing systems?",
      a: "Yes. We have integrated with 40 plus platforms including Salesforce, SAP, Oracle, NetSuite, Xero, MYOB, Zoho, HubSpot, Shopify, custom REST APIs, SFTP, SQL databases, Databricks, Snowflake, and Microsoft Fabric. Our n8n orchestration layer and custom API development handle complex multi-system integration."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" style={{ padding: '100px 1.5rem', background: 'var(--bg)' }}>
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
                style={{ 
                  background: 'var(--card-bg)', 
                  border: '1px solid var(--border)', 
                  borderRadius: '16px', 
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  boxShadow: isOpen ? '0 10px 20px rgba(0,0,0,0.05)' : 'none'
                }}
              >
                <button 
                  onClick={() => toggleOpen(index)}
                  style={{ 
                    width: '100%', 
                    padding: '1.5rem', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    background: 'transparent', 
                    border: 'none', 
                    textAlign: 'left', 
                    cursor: 'pointer',
                    color: 'var(--text)',
                    fontSize: '1.1rem',
                    fontWeight: 700
                  }}
                >
                  {faq.q}
                  <ChevronDown 
                    size={20} 
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
                  <div style={{ padding: '0 1.5rem 1.5rem', color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>
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

// --- MAIN PAGE ---

export default function HomeClient() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Enterprise AI & Zoho Implementation",
    "provider": {
      "@id": "https://fidigital.com.au/#organization"
    },
    "description": "Enterprise-grade Agentic AI and Zoho CRM implementation services in Melbourne and Australia. Specializing in autonomous digital workers and AI orchestration.",
    "areaServed": {
      "@type": "Country",
      "name": "Australia"
    },
    "offers": {
      "@type": "Offer",
      "description": "Complimentary AI & Zoho Readiness Audit",
      "price": "0",
      "priceCurrency": "AUD"
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does FI Digital do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "FI Digital is an engineering-led transformation partner for Australian enterprise. We operate across four service lines: Product Engineering (custom web and mobile applications), Data Platforms and Intelligence (Databricks, Snowflake, Microsoft Fabric), AI Agents and Automation (governed AI systems using Claude, GPT-4o, and LangChain), and Business Systems Modernisation (Zoho CRM, integrations, workflow automation)."
        }
      },
      {
        "@type": "Question",
        "name": "Where is FI Digital based?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our headquarters are in Melbourne, Victoria. We have a presence in Sydney for Financial Services and Healthcare clients. Our engineering centre in India provides 150 plus engineers. We also operate in the UAE and UK."
        }
      },
      {
        "@type": "Question",
        "name": "Does FI Digital only do Zoho?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Zoho is one of four service pillars. We are an award-winning Zoho Premium Partner, but we also build custom software, design and deploy data platforms on Databricks, Snowflake, and Microsoft Fabric, and build governed AI agents."
        }
      },
      {
        "@type": "Question",
        "name": "What industries does FI Digital serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve three primary industries in Australia: Financial Services and Wealth Management, Healthcare and Aged Care, and Resources, Mining, and Logistics."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a typical project take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most engagements run 10 to 16 weeks from Discovery to Operate. Some simpler projects ship in 6 weeks. Complex multi-pillar transformations may span 6 months."
        }
      },
      {
        "@type": "Question",
        "name": "Is my data kept in Australia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. All four service lines can be delivered with Australian-hosted infrastructure. We deploy on AWS Sydney, Azure Australia East, and Zoho Australian data centres."
        }
      },
      {
        "@type": "Question",
        "name": "How is FI Digital different from other consulting firms?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are engineering-led, not advisory-led. We build production systems, write code, deploy infrastructure, and stay accountable for outcomes. Our 200 plus engineers have an average of 8 years experience. We carry professional indemnity insurance and provide contractual SLAs."
        }
      },
      {
        "@type": "Question",
        "name": "Can FI Digital integrate with our existing systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We have integrated with 40 plus platforms including Salesforce, SAP, Oracle, NetSuite, Xero, MYOB, Zoho, HubSpot, Shopify, custom REST APIs, SQL databases, Databricks, Snowflake, and Microsoft Fabric."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HomeHero />
      <FourPillarsSection />
      <TechStackSection />
      <IndustrySection />
      <MethodologyDeliverySection />
      <GlobalDeliverySection />
      <SocialProofSection />
      <FAQSection />
      <NextStepsSection />
    </>
  );
}
