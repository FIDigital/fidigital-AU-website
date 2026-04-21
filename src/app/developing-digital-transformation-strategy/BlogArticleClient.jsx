"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Calendar, Clock, User, 
  ChevronRight, Quote, CheckCircle2,
  Lightbulb, TrendingUp, ShieldCheck, Zap,
  ArrowUpRight, ArrowRight, BarChart, Layers, Target, Map,
  Search, Users, Settings, Database, MessageSquare, Globe
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const BenefitCard = ({ icon: Icon, title, desc }) => (
  <div className="reveal" style={{ 
    padding: '2rem', 
    background: 'var(--bg)', 
    border: '1px solid var(--border)', 
    borderRadius: '24px',
    height: '100%',
    transition: 'all 0.3s ease'
  }}>
    <div style={{ 
      width: '48px', height: '48px', borderRadius: '12px', 
      background: 'rgba(29, 78, 216, 0.1)', color: 'var(--primary)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      marginBottom: '1.5rem'
    }}>
      <Icon size={24} />
    </div>
    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text)' }}>{title}</h3>
    <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>{desc}</p>
  </div>
);

const RoadmapStep = ({ num, title, desc, points }) => (
  <div className="reveal" style={{ 
    display: 'grid', gridTemplateColumns: '80px 1fr', gap: '2rem', 
    marginBottom: '3rem', padding: '2.5rem', background: 'var(--bg)',
    borderRadius: '24px', border: '1px solid var(--border)'
  }}>
    <div style={{ 
      width: '80px', height: '80px', borderRadius: '50%', 
      background: 'var(--primary)', color: '#fff', 
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: '1.5rem', fontWeight: 900
    }}>
      {num}
    </div>
    <div>
      <h3 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '1rem', color: 'var(--text)' }}>{title}</h3>
      <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>{desc}</p>
      {points && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          {points.map((p, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', fontWeight: 600, color: 'var(--text)' }}>
              <CheckCircle2 size={18} color="var(--primary)" /> {p}
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default function BlogArticleClient() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".hero-badge-branded", { y: -20, autoAlpha: 0, duration: 0.6 })
      .from(".hero-h1", { y: 30, autoAlpha: 0, duration: 0.8 }, "-=0.3")
      .from(".hero-meta", { y: 20, autoAlpha: 0, duration: 0.6 }, "-=0.4");

    gsap.utils.toArray(".reveal").forEach((el) => {
      gsap.fromTo(el,
        { y: 30, autoAlpha: 0 },
        { 
          y: 0, autoAlpha: 1, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true } 
        }
      );
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} style={{ background: "var(--bg)", color: "var(--text)" }}>
      <main>
        {/* ══ HERO ══════════════════════════════════════════════════════════ */}
        <section style={{
          position: "relative",
          minHeight: "85vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "calc(var(--header-h) + 40px) 1.5rem 80px",
          overflow: "hidden",
          background: "var(--bg)"
        }}>
          {/* Background Visual — high-fidelity image with premium mask */}
          <div className="hero-img-blend" style={{
            position: "absolute", top: 0, right: 0,
            width: "70%", height: "100%", zIndex: 0,
            opacity: 0.7, pointerEvents: "none",
          }}>
            <Image 
              src="/images/digital-transformation.png" 
              alt="" fill className="object-cover"
              style={{
                maskImage: "radial-gradient(circle at center right, black, transparent 90%)",
                WebkitMaskImage: "radial-gradient(circle at center right, black, transparent 90%)"
              }}
              priority
            />
          </div>

          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <div style={{ maxWidth: "1000px" }}>
              <div className="hero-badge-branded" style={{ 
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                background: "rgba(29, 78, 216, 0.08)", color: "var(--primary)",
                padding: "0.5rem 1rem", borderRadius: "100px",
                fontWeight: 800, fontSize: "0.75rem", textTransform: "uppercase",
                letterSpacing: "0.1em", marginBottom: "1.5rem",
                border: "1px solid rgba(29, 78, 216, 0.2)"
              }}>
                <Zap size={14} /> Digital Strategy
              </div>

              <h1 className="hero-h1" style={{ 
                fontSize: "clamp(2.2rem, 6vw, 4rem)", fontWeight: 900, 
                lineHeight: 1.1, marginBottom: "2rem", letterSpacing: "-0.03em" 
              }}>
                Developing a <span style={{ color: "var(--primary)" }}>Digital Transformation</span> <br />
                Strategy for 2026
              </h1>

              <div className="hero-meta" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "2rem", color: "var(--text-muted)", fontSize: "0.95rem", fontWeight: 600 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
                    <User size={18} />
                  </div>
                  <span style={{ color: "var(--text)" }}>FI Digital Consulting Team</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Calendar size={18} opacity={0.6} /> April 21, 2026</div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Clock size={18} opacity={0.6} /> 12 min read</div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ ARTICLE CONTENT ═══════════════════════════════════════════════ */}
        <section style={{ padding: "80px 1.5rem 120px", background: "var(--bg-secondary)" }}>
          <div className="container" style={{ maxWidth: "1000px" }}>
            
            <article className="article-body" style={{ fontSize: "1.15rem", lineHeight: 1.8, color: "var(--text)" }}>
              
              <div className="reveal" style={{ marginBottom: "5rem" }}>
                <div style={{ padding: '3rem', background: 'var(--bg)', borderRadius: '32px', borderLeft: '8px solid var(--primary)', marginBottom: '3rem' }}>
                  <Quote size={40} color="var(--primary)" opacity={0.3} style={{ marginBottom: '1.5rem' }} />
                  <p style={{ fontSize: "1.5rem", fontWeight: 700, lineHeight: 1.4, margin: 0, color: 'var(--text)' }}>
                    “Digital transformation is the building of new technology-enabled business models and solutions, to improve business results, enhance customer engagement, to drive operational excellence.”
                  </p>
                </div>
                <p>
                  Digital transformation is about using technology through creativity and innovation to improve the performance and reach of the business. Executives are now leveraging analytics, mobility, and smart devices to enhance traditional systems like ERP and CRM, radically improving internal processes and customer value propositions.
                </p>
              </div>

              {/* SECTION: Why Digital Transformation? */}
              <div className="reveal" style={{ margin: "6rem 0" }}>
                <h2 style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "3.5rem", letterSpacing: "-0.02em" }}>Why Digital Transformation?</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                  <BenefitCard 
                    icon={Users}
                    title="Customer Engagement"
                    desc="Understand requirements clearly through direct digital interaction and online visibility."
                  />
                  <BenefitCard 
                    icon={ShieldCheck}
                    title="Increased Satisfaction"
                    desc="Retain existing consumers by meeting their digital expectations for research and comparison."
                  />
                  <BenefitCard 
                    icon={TrendingUp}
                    title="Higher Digital Traffic"
                    desc="Drive high-intent customers to your platform through a strong, user-friendly online presence."
                  />
                  <BenefitCard 
                    icon={Target}
                    title="Lead Gen & Conversions"
                    desc="Reach a larger target audience and convert potential leads into profitable sales."
                  />
                  <BenefitCard 
                    icon={BarChart}
                    title="Better Decision Making"
                    desc="Access data explosions and use BI tools to gain actionable insights for strategic growth."
                  />
                </div>
              </div>

              {/* SECTION: Key Factors */}
              <div className="reveal" style={{ margin: "8rem 0", padding: '5rem 4rem', background: 'var(--footer-bg)', borderRadius: '40px', color: '#fff', border: '1px solid var(--footer-border)' }}>
                <h2 style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "3rem", color: '#fff' }}>Key Factors for Success</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }} className="responsive-grid">
                  {[
                    { t: "Governance", d: "Strong leadership and defined accountability form the base of every successful transformation.", i: Settings },
                    { t: "Strategy", d: "Defining business-specific goals. There is no 'one size fits all' solution in digital evolution.", i: Target },
                    { t: "New Technology", d: "Absorbing information from social networking, analytics, and mobile innovation fast.", i: Zap },
                    { t: "Digital Channels", d: "Moving from distribution-centric to consumer-centric models across all devices.", i: Globe }
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '1.5rem' }}>
                      <div style={{ color: 'var(--primary)', flexShrink: 0 }}><item.i size={32} /></div>
                      <div>
                        <h4 style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '0.75rem', color: '#fff' }}>{item.t}</h4>
                        <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)', fontSize: '1rem' }}>{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION: Roadmap Steps */}
              <div className="reveal" style={{ margin: "8rem 0" }}>
                <h2 style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "4rem", letterSpacing: "-0.02em", textAlign: 'center' }}>Successful Strategy Roadmap</h2>
                
                <RoadmapStep 
                  num="01"
                  title="Research Phase"
                  desc="Examine and gather information regarding customers, existing data, and both internal and external environments."
                  points={["Buyer Personas", "Data Audit", "Competitive Analysis", "Internal Flow"]}
                />
                <RoadmapStep 
                  num="02"
                  title="Solution Design"
                  desc="Find the right configuration of systems, people, and processes to achieve defined transformation goals."
                  points={["Journey Mapping", "Team Training", "Tech Selection", "UX/UI Creative"]}
                />
                <RoadmapStep 
                  num="03"
                  title="The Roadmap"
                  desc="Create a detailed strategy for production. Determine which systems will be released when and how."
                  points={["Migration Plan", "Contingency Strategy", "Pilot Launch", "Beta Testing"]}
                />
                <RoadmapStep 
                  num="04"
                  title="Governance & Content"
                  desc="Once the system is live, focus on content strategy, data quality standards, and comprehensive permission plans."
                  points={["Content Calendar", "Permission Logic", "Data Standards", "Market Promotion"]}
                />
              </div>

              <div className="reveal" style={{ textAlign: 'center', marginTop: '6rem', padding: '5rem', background: 'var(--bg)', borderRadius: '32px', border: '1px solid var(--border)' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1.5rem' }}>Transformation Awaits</h2>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto 3.5rem' }}>
                  Enjoying the maximum benefits of digital innovation requires a forward-thinking strategy and a deep understanding of your current state.
                </p>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: 'var(--primary)', color: '#fff', padding: '1.25rem 3.5rem', borderRadius: '100px', fontWeight: 900, textDecoration: 'none', transition: 'transform 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                  Start Your Transformation <ArrowRight size={20} />
                </Link>
              </div>

            </article>

            {/* AUTHOR SECTION */}
            <div className="reveal" style={{ marginTop: '8rem', paddingTop: '4rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                  <Layers size={28} />
                </div>
                <div>
                  <div style={{ fontWeight: 900, fontSize: '1.1rem' }}>Digital Consulting Team</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>FI Digital Melbourne · Business Strategy</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ RELATED POSTS ══════════════════════════════════════════════════ */}
        <section style={{ padding: '80px 1.5rem', background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
              <div>
                <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '0.5rem' }}>Strategic Reading</h2>
                <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>More guides for modern business evolution.</p>
              </div>
              <Link href="/blog" style={{ color: 'var(--primary)', fontWeight: 800, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                View All <ArrowUpRight size={18} />
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                {
                  title: "How Can SEO Help in Growing Your Business?",
                  cat: "SEO & Strategy",
                  slug: "how-can-seo-help-in-growing-your-business"
                },
                {
                  title: "Psychology of UX: Understanding the Human Mind",
                  cat: "UX Design",
                  slug: "understanding-the-psychology-of-human-mind-of-user-experience"
                }
              ].map((post, i) => (
                <Link key={i} href={`/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ 
                    padding: '2rem', background: 'var(--bg-secondary)', borderRadius: '20px', 
                    border: '1px solid var(--border)', height: '100%',
                    transition: 'all 0.3s ease'
                  }} className="related-card">
                    <div style={{ color: 'var(--primary)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem' }}>
                      {post.cat}
                    </div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.4 }}>{post.title}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>10 min read</span>
                      <div style={{ color: 'var(--primary)' }}><ArrowRight size={20} /></div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>

      <style jsx>{`
        @media (max-width: 768px) {
          .responsive-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
        .related-card:hover { border-color: var(--primary) !important; transform: translateY(-5px); }
        .hero-img-blend {
          filter: grayscale(1) brightness(0.9);
        }
        [data-theme='dark'] .hero-img-blend {
          filter: grayscale(1) brightness(0.7) contrast(1.1);
        }
      `}</style>
    </div>
  );
}
