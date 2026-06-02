"use client";

import { useState } from 'react';
import Link from 'next/link';
import TrustedBy from "@/components/TrustedBy";
import Image from 'next/image';
import { ArrowRight, Database, CloudSnow, Network, FileDown, AlertCircle, LineChart, ShieldCheck, ChevronDown } from 'lucide-react';

export default function DataPlatformsClient() {
  return (
    <>
      <section className="data-hero" style={{
        position: "relative",
        minHeight: "60vh",
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
          width: "55%",
          height: "100%",
          zIndex: 0,
          opacity: 0.35,
          pointerEvents: "none"
        }}>
          <Image 
            src="/finance-lakehouse.png" 
            alt="Data Platforms Background" 
            fill sizes="(max-width: 768px) 100vw, 50vw"
            style={{ 
              objectFit: "cover", 
              maskImage: "radial-gradient(circle at right, black, transparent 80%)", 
              WebkitMaskImage: "radial-gradient(circle at right, black, transparent 80%)" 
            }}
          />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: "1200px" }}>
          <div className="hero-badge section-label" style={{ display: 'inline-block', marginBottom: '1.5rem' }}>Data Platforms & Intelligence</div>
          <h1 className="hero-h1 section-title" style={{ maxWidth: 900, marginBottom: '1.5rem', fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1 }}>
            Modern Data Platforms for Australian Enterprise — <br /> Databricks, Snowflake, Fabric
          </h1>
          
          <p className="hero-p section-desc" style={{ maxWidth: 700, color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
            Governed data platforms on Databricks, Snowflake, and Microsoft Fabric. Lakehouse architecture. Medallion pipelines. BI dashboards your board trusts. ESG and regulatory reporting that satisfies APRA and ASIC. <strong style={{ color: 'var(--text)' }}>FI Digital — engineering data foundations for Australian enterprise.</strong>
          </p>

          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            <Link href="/book-discovery" className="btn-primary hover-lift">
              Book a Data Platform Architecture Review <ArrowRight size={20} />
            </Link>
            <Link href="/case-studies" className="btn-secondary hover-lift">
              Explore Case Studies
            </Link>
          </div>
        </div>
      </section>
      
      <TrustedBy />
      <WhyDataPlatformsMatterSection />
      <DataWhatWeBuildSection />
      <DataPlatformExpertiseSection />
      <DataPlatformsFAQ />
      <DataPlatformsCTA />

        <style jsx>{`
          .data-hero {
            position: relative;
            padding: 180px 1.5rem 100px;
            background: var(--bg);
            border-bottom: 1px solid var(--border);
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

          .hover-lift {
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease;
          }
          
          .hover-lift:hover {
            transform: translateY(-6px);
            border-color: var(--primary);
          }

          @media (max-width: 900px) {
            .gds-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
    </>
  );
}

function WhyDataPlatformsMatterSection() {
  return (
    <section id="why-data-platforms" style={{ padding: '100px 1.5rem', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)' }}>
      <div className="container" style={{ maxWidth: '1250px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)', gap: '6rem', alignItems: 'center' }} className="case-grid">
          
          <div className="case-content">
            <div className="section-label">Foundation First</div>
            <h2 className="section-title">Why Data Platforms Matter</h2>
            
            <p style={{ color: 'var(--text)', fontSize: '1.25rem', lineHeight: 1.6, fontWeight: 700, marginBottom: '2rem', maxWidth: '90%' }}>
              Every organisation wants AI. But the ones that succeed get their governed data foundations right first.
            </p>

            <div className="pain-points-grid" style={{ marginBottom: '2.5rem', background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', boxShadow: 'inset 0 2px 20px rgba(0,0,0,0.1)' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 800, marginBottom: '1.25rem' }}>Without a Governed Platform:</div>
              <ul style={{ display: 'grid', gap: '1.25rem', padding: 0, listStyle: 'none', margin: 0 }}>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}><AlertCircle size={20} color="#f43f5e" style={{flexShrink:0, marginTop: '2px'}}/> <span style={{color: 'var(--text-muted)', lineHeight: 1.5, fontSize: '1.05rem'}}>AI models train on fragmented, inconsistent data sets.</span></li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}><AlertCircle size={20} color="#f43f5e" style={{flexShrink:0, marginTop: '2px'}}/> <span style={{color: 'var(--text-muted)', lineHeight: 1.5, fontSize: '1.05rem'}}>Dashboards show conflicting metrics to different stakeholders.</span></li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}><AlertCircle size={20} color="#f43f5e" style={{flexShrink:0, marginTop: '2px'}}/> <span style={{color: 'var(--text-muted)', lineHeight: 1.5, fontSize: '1.05rem'}}>Compliance reports require weeks of manual reconciliation.</span></li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}><AlertCircle size={20} color="#f43f5e" style={{flexShrink:0, marginTop: '2px'}}/> <span style={{color: 'var(--text-muted)', lineHeight: 1.5, fontSize: '1.05rem'}}>Data scientists waste 80% of their time cleaning data instead of modelling.</span></li>
              </ul>
            </div>

            <p style={{ color: 'var(--text)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', fontWeight: 600 }}>
              FI Digital builds the foundation that makes everything else possible. We design and deploy modern architectures using Databricks, Snowflake, and Microsoft Fabric.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.8 }}>
              Our approach is platform-agnostic but opinionated: we recommend the architecture that naturally fits your existing stack, compliance thresholds, and analytical ambitions.
            </p>
          </div>

          <div className="case-examples glass-panel" style={{ padding: '3.5rem', background: 'var(--card-bg)', borderRadius: '32px', border: '1px solid var(--border)', boxShadow: 'var(--card-shadow)' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--text)', marginBottom: '2.5rem', letterSpacing: '-0.02em' }}>Platform Architecture Routing</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
               <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 900, color: 'var(--text)', fontSize: '1.2rem', marginBottom: '0.75rem' }}><div style={{width: 8, height: 8, background: '#0ea5e9', borderRadius: '50%'}}></div> Microsoft Fabric</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6, margin: 0, paddingLeft: '1.25rem', borderLeft: '2px solid rgba(255,255,255,0.05)' }}>If your organisation runs on Microsoft (Azure AD, Power BI, Dynamics 365), Microsoft Fabric is the natural choice.</p>
               </div>
               <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 900, color: 'var(--text)', fontSize: '1.2rem', marginBottom: '0.75rem' }}><div style={{width: 8, height: 8, background: '#f59e0b', borderRadius: '50%'}}></div> Databricks</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6, margin: 0, paddingLeft: '1.25rem', borderLeft: '2px solid rgba(255,255,255,0.05)' }}>If you need advanced ML and data science capabilities, Databricks is the strongest option.</p>
               </div>
               <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 900, color: 'var(--text)', fontSize: '1.2rem', marginBottom: '0.75rem' }}><div style={{width: 8, height: 8, background: '#3b82f6', borderRadius: '50%'}}></div> Snowflake</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6, margin: 0, paddingLeft: '1.25rem', borderLeft: '2px solid rgba(255,255,255,0.05)' }}>If you need pure cloud-native warehousing with data sharing across organisational boundaries, Snowflake excels.</p>
               </div>
            </div>
            <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ padding: '0.5rem 1rem', background: 'rgba(29, 78, 216, 0.1)', color: 'var(--primary)', fontWeight: 900, borderRadius: '100px', fontSize: '1rem' }}>Hybrid</div>
              <p style={{ color: 'var(--text-muted)', fontWeight: 800, fontSize: '1.05rem', margin: 0 }}>
                Some clients use two platforms for different workloads. <span style={{ color: 'var(--text)' }}>We design the architecture to support that.</span>
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

function DataWhatWeBuildSection() {
  const capabilities = [
    {
      title: "Lakehouse Architecture",
      icon: <Database size={36} />,
      content: "We design and deploy modern lakehouse platforms that combine the flexibility of data lakes with the governance of data warehouses. Bronze, Silver, Gold medallion architecture ensures data flows from raw ingestion through transformation to business-ready analytical datasets. Every layer is governed, auditable, and version-controlled."
    },
    {
      title: "Data Pipelines and ETL/ELT",
      icon: <Network size={36} />,
      content: "We build production-grade data pipelines that ingest data from your operational systems (CRM, ERP, finance, HR, IoT), transform it using medallion patterns, and deliver clean, governed datasets for analytics and AI. Our pipelines are automated, monitored, and self-healing."
    },
    {
      title: "Business Intelligence and Reporting",
      icon: <LineChart size={36} />,
      content: "Dashboards and reports that your board, your CFO, and your operations team actually trust. We build on Power BI (for Microsoft Fabric environments), Tableau, and Looker. Our BI practice focuses on decision-grade reporting, not vanity metrics."
    },
    {
      title: "Governance, Compliance, and ESG",
      icon: <ShieldCheck size={36} />,
      content: "Data governance frameworks that satisfy APRA, ASIC, ACSC, and industry-specific regulators. Data lineage, access controls, audit trails, and automated compliance reporting. ESG reporting that aggregates environmental, social, and governance metrics across your operational systems."
    }
  ];

  return (
    <section id="what-we-build" style={{ padding: '100px 1.5rem', background: 'var(--bg)' }}>
      <div className="container" style={{ maxWidth: '1250px' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-label">Capabilities</div>
          <h2 className="section-title">What We Build</h2>
        </div>

        {/* Architecture Diagram Split Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.3fr)', gap: '4rem', alignItems: 'center', marginBottom: '6rem', background: 'var(--card-bg)', borderRadius: '32px', border: '1px solid var(--border)', padding: '3rem', boxShadow: 'var(--card-shadow)' }} className="diagram-split">
           <div>
             <div className="section-label" style={{ marginBottom: '1rem' }}>Technical Model</div>
             <h3 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--text)', marginBottom: '1.5rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>Centralised Lakehouse Pattern</h3>
             <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
               A visual blueprint of our governed data pipeline architecture. We map operational ingestion sources seamlessly through the Medallion standard (Bronze, Silver, Gold), strictly ensuring data is cleansed and categorized for production consumption.
             </p>
             <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 700, color: 'var(--text)' }}><div style={{width: 8, height: 8, borderRadius: '50%', background: '#cd7f32'}}></div> Bronze: Raw Ingestion</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 700, color: 'var(--text)' }}><div style={{width: 8, height: 8, borderRadius: '50%', background: '#94a3b8'}}></div> Silver: Cleaned & Filtered</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 700, color: 'var(--text)' }}><div style={{width: 8, height: 8, borderRadius: '50%', background: '#fbbf24'}}></div> Gold: Business-Ready</li>
             </ul>
           </div>
           
           <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }} className="hover-lift">
             <img src="/lakehouse-diagram.png" alt="Enterprise Lakehouse Architecture Medallion Topology" style={{ width: '100%', height: 'auto', display: 'block' }} onError={(e) => { e.target.style.display = 'none'; }} />
           </div>
        </div>
        
        {/* Capability Cards Grid */}
        <div className="build-grid layout-2-col">
          {capabilities.map((cap) => (
            <div key={cap.title} className="build-card hover-lift" style={{
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
                background: 'linear-gradient(135deg, rgba(13, 148, 136, 0.1) 0%, rgba(29, 78, 216, 0.1) 100%)',
                color: 'var(--primary)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '2rem',
                flexShrink: 0
              }}>
                {cap.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--text)', marginBottom: '1rem', letterSpacing: '-0.01em' }}>
                {cap.title}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, margin: 0, flex: 1 }}>
                {cap.content}
              </p>
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
        .hover-lift {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.4s ease;
        }
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.12) !important;
          border-color: rgba(13, 148, 136, 0.4) !important;
        }
        @media (max-width: 900px) {
          .diagram-split {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            padding: 2rem !important;
          }
          .flow-container {
            flex-direction: column !important;
            align-items: center !important;
          }
          .pipeline-core {
            flex-direction: column !important;
            width: 100%;
          }
          .flow-arrow {
            transform: rotate(90deg);
            margin: 1rem 0;
          }
          .platform-logo {
            font-size: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}

function DataPlatformExpertiseSection() {
  const platforms = [
    {
      name: "Databricks",
      color: "#f59e0b",
      route: "/data-platforms/databricks",
      logo: "/images/databricks-nobg.png",
      desc: "We design and deploy Databricks lakehouse platforms on Azure. Medallion architecture, Delta Lake, Unity Catalog for governance, MLflow for experiment tracking, and Databricks SQL for analyst-friendly querying. Our Databricks practice serves financial services, healthcare, and resources clients who need advanced analytics and ML capabilities alongside governed data management."
    },
    {
      name: "Microsoft Fabric",
      color: "#0ea5e9",
      route: "/data-platforms/microsoft-fabric",
      logo: "/images/Microsoft-Fabric.png",
      desc: "The newest and most tightly integrated platform for Microsoft-stack enterprises. We deploy Fabric workspaces that unify data engineering, data science, real-time analytics, and Power BI reporting in a single governed environment. OneLake provides a single data lake across the entire organisation. If your enterprise runs on Azure AD, Power BI, and Dynamics 365, Fabric is the most natural path to a modern data platform."
    },
    {
      name: "Snowflake",
      color: "#3b82f6",
      route: "/data-platforms/snowflake",
      logo: "/images/snowflake-nobg.png",
      desc: "Cloud-native data warehousing with industry-leading data sharing and governance capabilities. We deploy Snowflake for organisations that need cross-organisational data sharing, multi-cloud flexibility, and consumption-based pricing. Snowflake excels in financial services scenarios where data needs to be shared between advisers, compliance teams, and external auditors with granular access controls."
    }
  ];

  return (
    <section id="platform-expertise" style={{ padding: '100px 1.5rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
      <div className="container" style={{ maxWidth: '1250px' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div className="section-label">Core Technologies</div>
          <h2 className="section-title">Platform Expertise</h2>
          <p style={{ maxWidth: '850px', margin: '1.5rem auto 0', color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.7 }}>
            We engineer the three dominant cloud data platforms in the Australian enterprise market. We build native components specific to each ecosystem.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }} className="platform-grid">
          {platforms.map((plat) => (
            <div key={plat.name} className="hover-lift" style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--border)',
              borderRadius: '24px',
              padding: '3rem 2rem',
              transition: 'all 0.4s ease',
              boxShadow: 'var(--card-shadow)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem', background: 'var(--bg)', padding: '1.25rem', borderRadius: '16px', border: '1px solid var(--border)' }}>
                <div style={{ position: 'relative', width: '48px', height: '48px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                   <Image src={plat.logo} alt={`${plat.name} Logo`} fill sizes="(max-width: 768px) 40vw, 200px" style={{ objectFit: 'contain' }} />
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--text)', margin: 0, letterSpacing: '-0.5px' }}>{plat.name}</h3>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2.5rem', flex: 1 }}>
                {plat.desc}
              </p>
              <Link href={plat.route} style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--primary)',
                fontWeight: 800,
                fontSize: '1.05rem',
                textDecoration: 'none',
                marginTop: 'auto'
              }} className="hover-link-shift">
                Explore {plat.name} Services <ArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .hover-lift {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
        }
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.12) !important;
          border-color: rgba(29, 78, 216, 0.4) !important;
        }
      `}</style>
    </section>
  );
}

function DataPlatformsFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const faqs = [
    {
      q: "What is a lakehouse architecture?",
      a: "A lakehouse combines the best of data lakes (flexible storage, support for all data types) with the best of data warehouses (governance, ACID transactions, SQL querying). FI Digital deploys lakehouse platforms using Databricks Delta Lake, Snowflake, or Microsoft Fabric OneLake. The result is a single platform that serves data engineers, data scientists, BI analysts, and compliance teams."
    },
    {
      q: "Should I choose Databricks, Snowflake, or Microsoft Fabric?",
      a: "It depends on your existing technology stack and analytical ambitions. If you are a Microsoft-stack enterprise (Azure AD, Power BI, Dynamics), Fabric is the natural fit. If you need advanced ML and data science, Databricks is strongest. If you need cross-organisational data sharing and multi-cloud flexibility, Snowflake excels. We assess your environment during Discovery and recommend the best fit."
    },
    {
      q: "How long does a data platform deployment take?",
      a: "A foundational data platform (lakehouse design, initial pipelines, core dashboards) takes 10 to 14 weeks. More complex deployments with multiple source systems, compliance requirements, and advanced analytics may take 16 to 24 weeks. We scope the timeline during Discovery."
    },
    {
      q: "What about data governance and compliance?",
      a: "Governance is built into every deployment. We implement data lineage, access controls, audit trails, and automated compliance reporting from day one. Our platforms satisfy APRA, ASIC, and ACSC requirements for financial services and healthcare clients."
    },
    {
      q: "Can you integrate with our existing BI tools?",
      a: "Yes. We build on Power BI, Tableau, and Looker. If you already have BI investments, we integrate the new data platform as a source layer rather than replacing your existing tools."
    },
    {
      q: "What is the medallion architecture?",
      a: "The medallion architecture (Bronze, Silver, Gold) is a data design pattern used in modern lakehouses. Bronze stores raw, ingested data. Silver stores cleaned and validated data. Gold stores business-ready, aggregated datasets for reporting and AI. Each layer adds quality and governance. This is the standard pattern we deploy on Databricks and Fabric."
    }
  ];

  return (
    <section id="faq" style={{ padding: '100px 1.5rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
      <div className="container" style={{ maxWidth: '850px' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-label">Questions & Answers</div>
          <h2 className="section-title">Data Platform FAQ</h2>
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

function DataPlatformsCTA() {
  return (
    <section id="data-cta" style={{ padding: '120px 1.5rem', background: '#1d4ed8', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle at right center, rgba(255,255,255,0.8) 0%, transparent 50%)' }}></div>
      <div className="container" style={{ maxWidth: '900px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <h2 style={{ fontSize: '3.5rem', fontWeight: 900, color: 'white', marginBottom: '1.5rem', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
          Ready to Build Your Data Foundation?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.95)', fontSize: '1.25rem', lineHeight: 1.7, marginBottom: '3.5rem', fontWeight: 400 }}>
          Bring us your fragmented data challenge or your compliance problem. We will provide an honest technical assessment, a lakehouse architecture plan, and a transparent delivery timeline.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
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
              Book a Data Platform Assessment <ArrowRight size={20} />
            </Link>
          </div>
          
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', width: '100%', maxWidth: '600px', paddingTop: '2rem' }}>
            <div style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Explore Our Platform Pages:</div>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/data-platforms/databricks" style={{ padding: '0.75rem 1.5rem', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.3)', color: 'white', textDecoration: 'none', fontWeight: 700, transition: 'all 0.3s ease' }} className="btn-secondary-hover">Databricks</Link>
              <Link href="/data-platforms/microsoft-fabric" style={{ padding: '0.75rem 1.5rem', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.3)', color: 'white', textDecoration: 'none', fontWeight: 700, transition: 'all 0.3s ease' }} className="btn-secondary-hover">Fabric</Link>
              <Link href="/data-platforms/snowflake" style={{ padding: '0.75rem 1.5rem', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.3)', color: 'white', textDecoration: 'none', fontWeight: 700, transition: 'all 0.3s ease' }} className="btn-secondary-hover">Snowflake</Link>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .btn-primary-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.3);
        }
        .btn-secondary-hover:hover {
          background: rgba(255,255,255,0.15) !important;
          border-color: rgba(255,255,255,0.6) !important;
        }
        @media (max-width: 600px) {
           h2 { fontSize: '2.5rem' !important; }
        }
      `}</style>
    </section>
  );
}
