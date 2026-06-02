"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft, Calendar, Clock, User,
  ChevronRight, Quote, CheckCircle2, AlertCircle,
  Lightbulb, TrendingUp, ShieldCheck, Zap, Sparkles,
  ArrowUpRight, ArrowRight, Cloud, Briefcase, BarChart3, MessageSquare, Layout, HardDrive
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ToolCard = ({ icon: Icon, name, desc, highlights }) => (
  <div className="reveal" style={{
    padding: '2.5rem',
    background: 'var(--bg)',
    border: '1px solid var(--border)',
    borderRadius: '24px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.3s ease'
  }}>
    <div style={{
      width: '56px', height: '56px', borderRadius: '16px',
      background: 'rgba(29, 78, 216, 0.1)', color: 'var(--primary)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      marginBottom: '1.5rem'
    }}>
      <Icon size={28} />
    </div>
    <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1rem', color: 'var(--text)' }}>{name}</h3>
    <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>{desc}</p>
    {highlights && (
      <ul style={{ listStyle: 'none', padding: 0, marginTop: 'auto' }}>
        {highlights.map((h, i) => (
          <li key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', fontSize: '0.9rem', color: 'var(--text)' }}>
            <CheckCircle2 size={16} color="var(--primary)" style={{ marginTop: '0.2rem' }} />
            <span>{h}</span>
          </li>
        ))}
      </ul>
    )}
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
          <div className="hero-img-blend" style={{
            position: "absolute", top: 0, right: 0,
            width: "70%", height: "100%", zIndex: 0,
            opacity: 0.7, pointerEvents: "none",
          }}>
            <Image
              src="/images/it-software.png"
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

              <div className="hero-badge-branded" style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                background: "rgba(29, 78, 216, 0.08)", color: "var(--primary)",
                padding: "0.5rem 1rem", borderRadius: "100px",
                fontWeight: 800, fontSize: "0.75rem", textTransform: "uppercase",
                letterSpacing: "0.1em", marginBottom: "1.5rem",
                border: "1px solid rgba(29, 78, 216, 0.2)"
              }}>
                <Cloud size={14} /> Cloud Ecosystem
              </div>

              <h1 className="hero-h1" style={{
                fontSize: "clamp(2.2rem, 6vw, 4rem)", fontWeight: 900,
                lineHeight: 1.1, marginBottom: "2rem", letterSpacing: "-0.03em"
              }}>
                Tools of <span style={{ color: "var(--primary)" }}>Cloud Services</span>: <br />
                Powering the Future of SMBs
              </h1>

              <div className="hero-meta" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "2rem", color: "var(--text-muted)", fontSize: "0.95rem", fontWeight: 600 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
                    <User size={18} />
                  </div>
                  <span style={{ color: "var(--text)" }}>FI Digital Team</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Calendar size={18} opacity={0.6} /> April 21, 2026</div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Clock size={18} opacity={0.6} /> 7 min read</div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ ARTICLE CONTENT ═══════════════════════════════════════════════ */}
        <section style={{ padding: "80px 1.5rem 120px", background: "var(--bg-secondary)" }}>
          <div className="container" style={{ maxWidth: "950px" }}>

            <article className="article-body" style={{ fontSize: "1.15rem", lineHeight: 1.8, color: "var(--text)" }}>

              <div className="reveal" style={{ marginBottom: "5rem" }}>
                <p style={{ fontSize: "1.25rem", fontWeight: 500, color: "var(--text)", marginBottom: "2rem" }}>
                  FI Digital is a Melbourne-based digital services provider specialising in Marketing and Cloud Services. Our customers form Melbourne’s most vibrant business community—small and medium-sized businesses.
                </p>
                <p>
                  Digital is the way to go, and businesses have realised this. Our customers often ask us how to manage agile projects, integrate accounting with CRM, and delve deeper into data for meaningful insights. Today, we’re sharing some of our "top secret" tools that make it all happen.
                </p>
              </div>

              {/* SECTION: Project Management */}
              <div className="reveal" style={{ margin: "6rem 0" }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                  <Briefcase size={32} color="var(--primary)" />
                  <h2 style={{ fontSize: "2.25rem", fontWeight: 900, margin: 0 }}>Efficient Project Management</h2>
                </div>
                <p style={{ marginBottom: "3rem" }}>How do we at FI Digital manage our projects and provide personalised services to our clients? We use a "Leverage Trinity" of collaborative tools.</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                  <ToolCard
                    icon={Layout}
                    name="Trello"
                    desc="Our visual command centre for agile delivery. It keeps everyone on the same board with real-time visibility."
                    highlights={["Eliminates email clutter", "Visual task tracking (Cards)", "Scalable from free to enterprise"]}
                  />
                  <ToolCard
                    icon={HardDrive}
                    name="Google Drive"
                    desc="Seamless documentation and data sharing. We live and breathe spreadsheets for SEO & SEM services."
                    highlights={["Native Trello integration", "Real-time collaboration", "Secure cloud storage"]}
                  />
                  <ToolCard
                    icon={MessageSquare}
                    name="Slack"
                    desc="The heartbeat of our team communication. It helps us stay focussed on delivery rather than filing emails."
                    highlights={["Instant project updates", "Integrated workflows", "Reduces internal meeting drag"]}
                  />
                </div>
              </div>

              {/* SECTION: Accounting & CRM */}
              <div className="reveal" style={{ margin: "6rem 0", padding: '4rem', background: 'var(--bg)', borderRadius: '32px', border: '1px solid var(--border)' }}>
                <h2 style={{ fontSize: "2.25rem", fontWeight: 900, marginBottom: "1.5rem" }}>Seamless Accounting Integration</h2>
                <p style={{ marginBottom: "3rem" }}>Small businesses often face cash flow friction. We solve this by integrating cloud accounting with our core CRM.</p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'center' }} className="responsive-grid">
                  <div>
                    <Image src="/images/it-software.png" width={400} height={300} alt="QuickBooks Integration" style={{ borderRadius: '20px', boxShadow: 'var(--card-shadow)' }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--primary)' }}>QuickBooks Online</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {[
                        "Direct Salesforce CRM Integration for cycle tracking",
                        "PayPal & Major Bank automated transaction feeds",
                        "BAS Summary readily available as in-built feature",
                        "Safe, secure, and accessible on Mobile/Tablet",
                        "Automated repetitive invoicing & follow-ups"
                      ].map((item, i) => (
                        <li key={i} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                          <CheckCircle2 size={20} color="var(--success)" flexShrink={0} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* SECTION: Data Insights */}
              <div className="reveal" style={{ margin: "6rem 0" }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                  <BarChart3 size={32} color="var(--primary)" />
                  <h2 style={{ fontSize: "2.25rem", fontWeight: 900, margin: 0 }}>Getting Insights from Your Data</h2>
                </div>
                <p style={{ marginBottom: "3rem" }}>Businesses collect data from CRM, Websites, Social Media, and Sales Reps. Analysing this for decisions is painful—unless you have a Success Platform.</p>

                <div style={{ padding: '3rem', background: 'var(--footer-bg)', borderRadius: '32px', color: '#fff', border: '1px solid var(--footer-border)' }}>
                  <h3 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '1.5rem', color: '#fff' }}>The Salesforce Edge</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem' }}>Our Melbourne-based Salesforce developers help SMBs structure data for actionable insights.</p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                    {[
                      { l: "Full View", d: "360-degree customer perspective" },
                      { l: "Automation", d: "Powerful marketing automation" },
                      { l: "Structure", d: "Optimised data architecture" },
                      { l: "ROI", d: "Better return on digital spend" }
                    ].map((item, i) => (
                      <div key={i}>
                        <div style={{ fontWeight: 900, fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>{item.l}</div>
                        <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>{item.d}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="reveal" style={{ textAlign: 'center', margin: '5rem 0' }}>
                <p style={{ fontSize: '1.25rem', fontWeight: 600, maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
                  Stop fighting your tools and start letting them fight for you. We're here to help you build the perfect cloud ecosystem.
                </p>
              </div>

            </article>

            {/* SHARE & AUTHOR SECTION */}
            <div className="reveal" style={{ marginTop: '6rem', paddingTop: '4rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                  <User size={28} />
                </div>
                <div>
                  <div style={{ fontWeight: 900, fontSize: '1.1rem' }}>Cloud Services Team</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>FI Digital Australia · Specialists</div>
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
                <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>More from our digital transformation series.</p>
              </div>
              <Link href="/blog" style={{ color: 'var(--primary)', fontWeight: 800, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                All Blogs <ArrowUpRight size={18} />
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                {
                  title: "Zoho Partners Australia: Unlocking the Power of Zoho",
                  cat: "Zoho Solutions",
                  slug: "unlocking-the-power-of-zoho-for-australian-businesses",
                  time: "8 min"
                },
                {
                  title: "SEO Melbourne Expert Advice For Blog Post Writing Fundamentals",
                  cat: "SEO & Strategy",
                  slug: "seo-melbourne-expert-advice-for-blog-post-writing-fundamentals-2",
                  time: "6 min"
                }
              ].map((post, i) => (
                <Link key={i} href={`/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{
                    padding: '2rem', background: 'var(--bg)', borderRadius: '20px',
                    border: '1px solid var(--border)', height: '100%',
                    transition: 'all 0.3s ease'
                  }} className="related-card">
                    <div style={{ color: 'var(--primary)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.05em' }}>
                      {post.cat}
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.4 }}>{post.title}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>{post.time} read</span>
                      <div style={{ color: 'var(--primary)' }}><ArrowRight size={20} /></div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ══ NEXT STEPS ════════════════════════════════════════════════════ */}
        <section style={{ padding: '80px 1.5rem', background: 'var(--bg)', textAlign: 'center', borderTop: '1px solid var(--border)' }}>
          <div className="container">
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1.5rem' }}>Optimize Your Stack</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
              Want to see how these tools can work specifically for your business? Let's chat.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/book-discovery" style={{ background: 'var(--primary)', color: '#fff', padding: '1.2rem 3rem', borderRadius: '100px', fontWeight: 900, textDecoration: 'none' }}>
                Book a Discovery Session
              </Link>
              <Link href="/contact" style={{ background: 'var(--bg)', color: 'var(--text)', border: '1px solid var(--border)', padding: '1.2rem 3rem', borderRadius: '100px', fontWeight: 900, textDecoration: 'none' }}>
                Contact Our Melbourne Team
              </Link>
            </div>
          </div>
        </section>

      </main>

      <style jsx>{`
        @media (max-width: 768px) {
          .responsive-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
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
