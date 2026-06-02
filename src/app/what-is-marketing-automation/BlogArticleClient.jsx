"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Calendar, Clock, User, 
  ChevronRight, Quote, CheckCircle2,
  Lightbulb, TrendingUp, ShieldCheck, Zap,
  ArrowUpRight, ArrowRight, Settings, 
  MessageSquare, Layout, Sparkles, Mail, 
  Target, BarChart3, Globe, AlertCircle
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TipCard = ({ title, desc }) => (
  <div className="reveal" style={{ 
    padding: '2rem', 
    background: 'var(--bg)', 
    border: '1px solid var(--border)', 
    borderRadius: '24px',
    height: '100%',
    transition: 'all 0.3s ease'
  }}>
    <h3 style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '1rem', color: 'var(--text)' }}>{title}</h3>
    <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>{desc}</p>
  </div>
);

export default function BlogArticleClient() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".hero-badge", { y: -20, autoAlpha: 0, duration: 0.6 })
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
          {/* Background Visual */}
          <div className="hero-img-blend" style={{
            position: "absolute", top: 0, right: 0,
            width: "70%", height: "100%", zIndex: 0,
            opacity: 0.7, pointerEvents: "none",
          }}>
            <Image 
              src="/images/strategy.png" 
              alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover"
              style={{
                maskImage: "radial-gradient(circle at center right, black, transparent 90%)",
                WebkitMaskImage: "radial-gradient(circle at center right, black, transparent 90%)"
              }}
              priority
            />
          </div>

          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <div style={{ maxWidth: "1000px" }}>
              <div className="hero-badge" style={{ 
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                background: "rgba(29, 78, 216, 0.08)", color: "var(--primary)",
                padding: "0.5rem 1rem", borderRadius: "100px",
                fontWeight: 800, fontSize: "0.75rem", textTransform: "uppercase",
                letterSpacing: "0.1em", marginBottom: "1.5rem",
                border: "1px solid rgba(29, 78, 216, 0.2)"
              }}>
                <Zap size={14} /> Marketing Technology
              </div>

              <h1 className="hero-h1" style={{ 
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900,
                lineHeight: 1.1, marginBottom: "2rem", letterSpacing: "-0.03em"
              }}>
                What is <span style={{ color: "var(--primary)" }}>Marketing</span> <br />
                Automation?
              </h1>

              <div className="hero-meta" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "2rem", color: "var(--text-muted)", fontSize: "0.95rem", fontWeight: 600 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
                    <User size={18} />
                  </div>
                  <span style={{ color: "var(--text)" }}>Marketing Ops Team</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Calendar size={18} opacity={0.6} /> April 21, 2026</div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Clock size={18} opacity={0.6} /> 8 min read</div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ ARTICLE BODY ══════════════════════════════════════════════════ */}
        <section style={{ padding: "80px 1.5rem", position: "relative" }}>
          <div className="container" style={{ maxWidth: "1200px", display: "grid", gridTemplateColumns: "1fr 350px", gap: "5rem" }}>
            
            <article style={{ fontSize: "1.15rem", lineHeight: 1.8, color: "var(--text-muted)" }}>
              <div className="reveal">
                <p style={{ fontSize: "1.25rem", color: "var(--text)", fontWeight: 500, marginBottom: "2.5rem" }}>
                  Managing a huge company is tough. The manual processes that consume precious time could be utilized in activities that drive the business forward. Marketing automation refers to software that helps your company automate repetitive tasks better—from email campaigns to social media scheduling.
                </p>
              </div>

              <div className="reveal" style={{ marginTop: '4rem' }}>
                <h2 style={{ fontSize: "2.2rem", fontWeight: 900, color: "var(--text)", marginBottom: "1.5rem" }}>Why Your Company Needs It</h2>
                <p>
                  The biggest reason is time efficiency. By automating repetitive activities, your marketing department can focus on strategy and high-value creativity. Beyond saving time, automation provides:
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '2rem' }} className="responsive-grid">
                   {[
                     { title: "Unified Brand Tone", desc: "Incorporate all efforts into one single process for a consistent brand voice." },
                     { title: "Tailored User Experience", desc: "Provide personalized content that is more likely to convert leads." },
                     { title: "Deeper Data Insights", desc: "Easily gather information to improve future communications and ROI." },
                     { title: "Reduced Operational Costs", desc: "Streamline manual processes to lower overhead and resource strain." }
                   ].map((item, i) => (
                     <div key={i} style={{ padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: '16px', border: '1px solid var(--border)' }}>
                        <div style={{ fontWeight: 800, color: 'var(--text)', marginBottom: '0.5rem' }}>{item.title}</div>
                        <div style={{ fontSize: '0.95rem' }}>{item.desc}</div>
                     </div>
                   ))}
                </div>
              </div>

              <div className="reveal" style={{ marginTop: '5rem' }}>
                 <h2 style={{ fontSize: "2.2rem", fontWeight: 900, color: "var(--text)", marginBottom: "1.5rem" }}>Preparing for Automation</h2>
                 <p style={{ marginBottom: '3rem' }}>
                   Marketing automation is not rocket science, but it takes significant effort to set up correctly. Here are five things you must remember before rolling out your strategy:
                 </p>
                 
                 <div style={{ display: 'grid', gap: '1.5rem' }}>
                    <TipCard title="1. Straighten Goals & Objectives" desc="Every company has specific targets. Without a proper measurement framework, automation will fail to deliver meaningful results." />
                    <TipCard title="2. Determine Your System of Record" desc="Smooth integration between your CRM and automation tools is vital to ensure the flow of data is quick, reliable, and actionable." />
                    <TipCard title="3. Get Main Players On Board" desc="Ensure stakeholders from all sectors are involved in the decision to strategically solve problems across the entire organization." />
                    <TipCard title="4. Audit Your Content Pipeline" desc="Automation runs on content. Ensure you have a consistent stream of well-crafted assets that cater to specific audience needs." />
                    <TipCard title="5. Run a Pilot Test" desc="Avoid unleashing a major campaign on your entire database at once. Run tests on smaller samples to refine your workflow and logic." />
                 </div>
              </div>

              <div className="reveal" style={{ marginTop: '5rem', borderTop: '1px solid var(--border)', paddingTop: '4rem' }}>
                <h2 style={{ fontSize: "2.2rem", fontWeight: 900, color: "var(--text)", marginBottom: "1.5rem" }}>The Hub of 21st-Century Marketing</h2>
                <p>
                  Ultimately, marketing automation allows you to capture better leads, scale your campaigns, and demonstrate ROI more effectively. It’s the engine that powers a modern marketing team in an increasingly digital landscape.
                </p>
              </div>

            </article>

            {/* SIDEBAR */}
            <aside>
              <div style={{ position: 'sticky', top: '120px', display: 'grid', gap: '2.5rem' }}>
                
                {/* CHECKLIST */}
                <div className="reveal" style={{ padding: '2rem', background: 'var(--bg-secondary)', borderRadius: '24px', border: '1px solid var(--border)' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 900, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Settings size={20} color="var(--primary)" /> Implementation
                  </h4>
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    {[
                      "Email Campaigns",
                      "Social Media Postings",
                      "Landing Page Logic",
                      "Lead Scoring Systems"
                    ].map((check, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', fontWeight: 600 }}>
                        <CheckCircle2 size={16} color="var(--primary)" /> {check}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CALL TO ACTION */}
                <div className="reveal" style={{ padding: '2rem', background: 'var(--footer-bg)', borderRadius: '24px', color: '#fff', border: '1px solid var(--footer-border)' }}>
                  <Sparkles size={32} style={{ marginBottom: '1.5rem', color: 'var(--primary)' }} />
                  <h4 style={{ fontSize: '1.3rem', fontWeight: 900, marginBottom: '1rem' }}>Automate Your Growth</h4>
                  <p style={{ fontSize: '0.9rem', marginBottom: '2rem', opacity: 0.8 }}>
                    Our Zoho Marketing Hub experts can help you build high-converting automated workflows.
                  </p>
                  <Link href="/contact" style={{ display: 'block', background: 'var(--primary)', color: '#fff', padding: '1rem', borderRadius: '12px', fontWeight: 900, textDecoration: 'none', textAlign: 'center' }}>
                    Speak to an Expert
                  </Link>
                </div>

              </div>
            </aside>

          </div>
        </section>

        {/* ══ AUTHOR SECTION ══════════════════════════════════════════════════ */}
        <section style={{ padding: '40px 1.5rem 100px' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="reveal" style={{ borderTop: '1px solid var(--border)', paddingTop: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                  <Zap size={28} />
                </div>
                <div>
                  <div style={{ fontWeight: 900, fontSize: '1.1rem' }}>Marketing Ops Team</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>FI Digital Melbourne · Automation Specialists</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ RELATED POSTS ══════════════════════════════════════════════════ */}
        <section style={{ padding: '80px 1.5rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
              <div>
                <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '0.5rem' }}>Related Insights</h2>
                <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Stay ahead with the latest in MarTech.</p>
              </div>
              <Link href="/blog" style={{ color: 'var(--primary)', fontWeight: 800, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                All Blogs <ArrowUpRight size={18} />
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
                  title: "Data Analytics: The Future of Decision Making",
                  cat: "Data & Analytics",
                  slug: "data-analytics-the-future-of-data-driven-decision-making"
                }
              ].map((post, i) => (
                <Link key={i} href={`/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="reveal hover-card" style={{ 
                    padding: '2rem', background: 'var(--bg)', borderRadius: '20px', 
                    border: '1px solid var(--border)', height: '100%',
                    transition: 'all 0.3s ease'
                  }}>
                    <div style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '1rem' }}>{post.cat}</div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '1.5rem', lineHeight: 1.3 }}>{post.title}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 700, fontSize: '0.9rem' }}>
                      Read Article <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        @media (max-width: 992px) {
          .container > article { grid-template-columns: 1fr !important; }
          .container { grid-template-columns: 1fr !important; }
          aside { display: none; }
        }
        .hover-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary) !important;
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
        }
      `}</style>
    </div>
  );
}
